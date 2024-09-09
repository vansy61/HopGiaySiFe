import LogoLink from "../../Components/LogoLink";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import AuthApi from "../../Apis/AuthApi";
import {setToken} from "../../Redux/auth/authSlice";
import Helper from "../../utils/helpers";
import FormLogin from "./FormLogin";

const validationSchema = Yup.object({
    email: Yup.string().email().required("Vui lòng nhập email!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!")
});

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    if (token) {
        navigate('/');
    }
    const formik = useFormik({
        initialValues:  { email: '', password: '' },
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const res = await AuthApi.login(values);
                dispatch(setToken(res.data.accessToken) );
                navigate('/');
                Helper.toastSuccess('Đăng nhập thành công!');
            } catch (error) {
                Helper.parseError(error);
            }
        },
        validateOnMount: false
    });

    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root" style={{height:'100vh'}}>
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                <div className="d-none d-lg-block d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover  bgi-position-center"
                     style={{backgroundImage: "url(/images/auth-bg.png)"}}>
                    <div className="d-flex flex-column flex-center p-6 p-lg-10 w-100 h-100">
                        <img className="mx-auto w-300px w-lg-75 w-xl-500px mb-10 mb-lg-20" src="/images/auth-screens.png" alt=""/>
                        <h1 className="text-white fs-2qx fw-bold text-center mb-7">
                            CHUYÊN NGHIỆP - UY TÍN - TIẾT KIỆM
                        </h1>
                        <div className=" text-white fs-base text-center">
                            Xưởng sản xuất hộp cứng cao cấp
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
                    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                        <div className="w-lg-500px p-10">
                            <FormLogin formik={formik} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
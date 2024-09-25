import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import AuthApi from "../../Apis/AuthApi";
import Helper from "../../utils/helpers";
import FormLogin from "./FormLogin";
import AuthLeftContent from "../../Components/Auth/AuthLeftContent";
import {fetchUser, setToken} from "../../Redux/auth/authSlice";

const validationSchema = Yup.object({
    email: Yup.string().email().required("Vui lòng nhập email!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!")
});

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

                if(res.data.needOtp) {
                    navigate('/two-factor', { state: {email: res.data.email}});
                    return;
                }

                await dispatch(setToken(res.data.accessToken));
                await dispatch(fetchUser());
                navigate('/admin');
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
                <AuthLeftContent />
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
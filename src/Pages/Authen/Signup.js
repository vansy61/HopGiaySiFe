import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import AuthApi from "../../Apis/AuthApi";
import Helper from "../../utils/helpers";
import FormSignup from "./FormSignup";
import AuthLeftContent from "../../Components/Auth/AuthLeftContent";

const validationSchema = Yup.object({
    email: Yup.string().email().required("Vui lòng nhập email!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!"),
    confirmPassword: Yup.string()
        .required("Xác nhận mật khẩu phải nhập!")
        .oneOf([Yup.ref('password'), null], "Mật khẩu xác nhận không trùng với mật khẩu mới")
});
export default function Signup() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);

    if (token) {
        navigate('/');
    }
    const formik = useFormik({
        initialValues:  { email: '', password: '', confirmPassword: '' },
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await AuthApi.signup(values);
                navigate('/');
                Helper.toastSuccess('Đăng ký thành công!');
            } catch (error) {
                Helper.parseError(error);
            }
        },
        validateOnMount: false
    });
    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root" style={{height: '100vh'}}>
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                <AuthLeftContent />

                <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
                    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                        <div className="w-lg-500px p-10">
                            <FormSignup formik={formik}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
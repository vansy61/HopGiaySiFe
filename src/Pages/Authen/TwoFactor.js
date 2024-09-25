import AuthLeftContent from "../../Components/Auth/AuthLeftContent";
import LogoLink from "../../Components/LogoLink";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import Submit from "../../Components/Button/Submit";
import AuthApi from "../../Apis/AuthApi";
import {fetchUser, setToken} from "../../Redux/auth/authSlice";
import Helper from "../../utils/helpers";
import {useDispatch} from "react-redux";
const OtpSchema = Yup.object().shape({
    otp: Yup.array()
        .of(Yup.string().matches(/^\d$/, 'Must be a digit').required('Required'))
        .min(4, 'OTP must be 4 digits')
        .max(4, 'OTP must be 4 digits')
});

export default function TwoFactor() {
    const location = useLocation();
    const { email } = location.state || {};
    const navigate = useNavigate();
    const inputRefs = useRef([]);
    const dispatch = useDispatch();

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            formik.setFieldValue(`otp[${index}]`, value);
            if (index < 3 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        } else if (value === '') {
            formik.setFieldValue(`otp[${index}]`, '');
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const formik = useFormik({
        initialValues: {
            otp: ['', '', '', '']
        },
        validationSchema: OtpSchema,
        onSubmit: async (values) => {
            try {
                const res = await AuthApi.verifyTwoFactor({
                    email,
                    otp: values.otp.join(""),
                });
                await dispatch(setToken(res.data.accessToken));
                await dispatch(fetchUser());
                navigate('/admin');
                Helper.toastSuccess('Đăng nhập thành công!');
            } catch (error) {
                Helper.parseError(error);
            }
        }
    });

    useEffect(() => {
        if (!email) {
            navigate("/login");
        }
    })

    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root" style={{height: '100vh'}}>
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                <AuthLeftContent/>
                <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
                    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                        <div className="w-lg-400px p-10">
                            <form className="form w-100 mb-13" onSubmit={formik.handleSubmit}>
                                <div className="text-center mb-10">
                                    <LogoLink/>
                                </div>
                                <div className="text-center mb-10">
                                    <h1 className="text-gray-900 mb-3">
                                        Xác Thực Hai Yếu Tố
                                    </h1>

                                    <div className="text-muted fw-semibold fs-5 mb-5">
                                        Mã xác thực đã được gửi về email
                                    </div>
                                    <div className="fw-bold text-gray-900 fs-3">{email}</div>
                                </div>
                                <div className="mb-10">
                                    <div className="fw-bold text-start text-gray-900 fs-6 mb-1 ms-1">Nhập mã bảo mật gồm
                                        4 số
                                    </div>
                                    <div className="d-flex flex-wrap flex-stack">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                                <input
                                                    key={index}
                                                    ref={el => inputRefs.current[index] = el}
                                                    name={`otp[${index}]`}
                                                    type="text"
                                                    maxLength="1"
                                                    className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                                                    value={formik.values.otp[index]}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                                />
                                        ))}
                                    </div>
                                    {formik.errors.otp && formik.touched.otp ? (
                                        <div className="text-danger">
                                            Mã xác thực phải bao gồm 4 số
                                        </div>
                                    ) : null}
                                </div>
                                <div className="d-flex flex-center">
                                    <Submit classes={"btn btn-primary"} isLoading={formik.isSubmitting}>
                                        <span className="indicator-label">Xác Nhận</span>
                                    </Submit>
                                </div>
                            </form>

                            <div className="text-center fw-semibold fs-5">
                                <span className="text-muted me-1">Không nhận được mã?</span>
                                <Link to={"/login"}>Đăng nhập lại</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
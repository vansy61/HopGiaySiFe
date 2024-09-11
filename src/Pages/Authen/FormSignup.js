import LogoLink from "../../Components/LogoLink";
import {Link} from "react-router-dom";
import CustomPasswordStrengthBar from "../../Components/CustomPasswordStrengthBar";
import Submit from "../../Components/Button/Submit";
import FormikInput from "../../Components/Formik/FormikInput";

export default function FormSignup({formik}) {
    return (
        <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form"
              onSubmit={formik.handleSubmit}>
            <div className="text-center mb-11">
                <LogoLink/>

                <h1 className="text-gray-900 fw-bolder m-3">
                    Đăng Ký
                </h1>
            </div>
            <div className="fv-row mb-8">
                <FormikInput
                    formik={formik}
                    name="email"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div className="fv-row mb-8">
                <FormikInput
                    formik={formik}
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                />
                <CustomPasswordStrengthBar password={formik.values.password}/>
            </div>
            <div className="fv-row mb-8 fv-plugins-icon-container">
                <FormikInput
                    formik={formik}
                    name="confirmPassword"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                />
            </div>

            <div className="d-grid mb-10">
                <Submit classes={"btn btn-primary"} isLoading={formik.isSubmitting}>
                    <span className="indicator-label">Đăng Ký</span>
                </Submit>
            </div>

            <div className="text-gray-500 text-center fw-semibold fs-6">
                <span>Đã có tài khoản</span>
                <Link to={"/login"} className="link-primary ms-2">
                    Đăng nhập
                </Link>
            </div>
        </form>
    )
}
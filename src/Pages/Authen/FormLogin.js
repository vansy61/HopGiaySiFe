import LogoLink from "../../Components/LogoLink";
import {Link} from "react-router-dom";
import FormikInput from "../../Components/Formik/FormikInput";
import Submit from "../../Components/Button/Submit";

export default function FormLogin({ formik }) {
    return (
        <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form"
              onSubmit={formik.handleSubmit}>
            <div className="text-center mb-11">
                <LogoLink/>
                <h1 className="text-gray-900 fw-bolder m-3">Đăng Nhập</h1>
                <div className="text-gray-500 fw-semibold fs-6">Sử dụng mạng xã hội</div>
            </div>
            <div className="row g-3 mb-9">
                <div className="col-md-6">
                    <a href="#"
                       className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo"
                             src="/images/google-icon.svg"
                             className="h-15px me-3"/>
                        Đăng nhập với Google
                    </a>
                </div>

                <div className="col-md-6">
                    <a href="#"
                       className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo"
                             src="/images/apple-black.svg"
                             className="theme-light-show h-15px me-3"/>
                        Đăng nhập với Apple
                    </a>
                </div>
            </div>
            <div className="separator separator-content my-14">
                <span className="w-125px text-gray-500 fw-semibold fs-7">Hoặc với email</span>
            </div>
            <div className="fv-row mb-8">
                <FormikInput
                    formik={formik}
                    name="email"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div className="fv-row mb-3">
                <FormikInput
                    formik={formik}
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                />
            </div>
            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div></div>
                <a href="/"
                   className="link-primary">
                    Quên mật khẩu ?
                </a>
            </div>

            <div className="d-grid mb-10">
                <Submit classes={"btn btn-primary"} isLoading={formik.isSubmitting}>
                    <span className="indicator-label">Đăng Nhập</span>
                </Submit>
            </div>

            <div className="text-gray-500 text-center fw-semibold fs-6">
                <span>Chưa có tài khoản</span>
                <Link to={"/signup"}
                   className="link-primary ms-2">
                    Đăng ký
                </Link>
            </div>
        </form>
    )
}
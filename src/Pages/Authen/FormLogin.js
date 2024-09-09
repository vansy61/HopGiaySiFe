import LogoLink from "../../Components/LogoLink";

export default function FormLogin({ formik }) {
    return (
        <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form"
              onSubmit={formik.handleSubmit}>
            <div className="text-center mb-11">
                <LogoLink/>

                <h1 className="text-gray-900 fw-bolder m-3">
                    Đăng Nhập
                </h1>

                <div className="text-gray-500 fw-semibold fs-6">
                    Sử dụng mạng xã hội
                </div>
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
                <input
                    className="form-control bg-transparent"
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                )}
            </div>
            <div className="fv-row mb-3">
                <input
                    className="form-control bg-transparent"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Mật khẩu"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                )}
            </div>
            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div></div>
                <a href="/"
                   className="link-primary">
                    Quên mật khẩu ?
                </a>
            </div>

            <div className="d-grid mb-10">
                <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                    <span className="indicator-label">Đăng Nhập</span>
                </button>
            </div>

            <div className="text-gray-500 text-center fw-semibold fs-6">
                <span>Chưa có tài khoản</span>
                <a href="/signin"
                   className="link-primary ms-2">
                    Đăng ký
                </a>
            </div>
        </form>
    )
}
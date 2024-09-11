import LogoLink from "../../Components/LogoLink";

export default function VerifyEmail() {
    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root">
            <div className="d-flex flex-column flex-center flex-column-fluid">
                <div className="d-flex flex-column flex-center text-center p-10">
                    <div className="card card-flush w-lg-650px py-5">
                        <div className="card-body py-15 py-lg-20">
                            <div className="mb-14">
                                <LogoLink />
                            </div>
                            <h1 className="fw-bolder text-gray-900 mb-5">
                                Vui Lòng Xác Thực Mail Của Bạn
                            </h1>
                            <div className="fs-6 mb-8">
                                <span className="fw-semibold text-gray-500">Không nhận được mail?</span>

                                <a href="/keen/demo1/authentication/layouts/corporate/sign-up.html"
                                   className="link-primary fw-bold"> Click để gửi lại</a>
                            </div>
                            <div className="mb-0">
                                <img src="/images/verify-email.png"
                                     className="mw-100 mh-300px theme-light-show" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
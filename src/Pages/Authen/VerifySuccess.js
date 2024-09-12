import {Link} from "react-router-dom";
import LogoLink from "../../Components/LogoLink";

export default function VerifySuccess() {
    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root">
            <div className="d-flex flex-column flex-center flex-column-fluid">
                <div className="d-flex flex-column flex-center text-center p-10">
                    <div className="card card-flush w-md-650px py-5">
                        <div className="card-body py-15 py-lg-20">
                            <div className="mb-7">
                                <LogoLink />
                            </div>
                            <h1 className="fw-bolder text-gray-900 mb-5">
                                Welcome to HopGiaySi </h1>
                            <div className="fw-semibold fs-6 text-gray-500 mb-7">
                                Email của bạn đã được xác nhận thành công
                            </div>
                            <div className="mb-0">
                                <img src="/images/welcome.png"
                                     className="mw-100 mh-300px theme-light-show" alt=""/>
                            </div>
                            <div className="mb-0">
                                <Link className="btn btn-primary" to={"/login"}>
                                    Đăng Nhập Ngay
                                </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
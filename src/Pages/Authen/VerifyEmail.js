import LogoLink from "../../Components/LogoLink";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Helper from "../../utils/helpers";
import AuthApi from "../../Apis/AuthApi";


export default function VerifyEmail() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(token == null) {
            return;
        }
        const fetchUser = async () => {
            try {
                await AuthApi.verifyAccount({token});
                navigate('/verify-success');
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if(token == null) {
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

    if(loading) {
        return (
            <div className="d-flex flex-column flex-root" id="kt_app_root">
                <div className="d-flex flex-column flex-center flex-column-fluid">
                    <div className="d-flex flex-column flex-center text-center p-10">
                        <div className="card card-flush w-lg-650px py-5">
                            <div className="card-body py-15 py-lg-20">
                                <div className="mb-14">
                                    <LogoLink/>
                                </div>
                                <h1 className="fw-bolder text-gray-900 mb-5">
                                    Đang xác thực email của bạn, vui lòng đợi!
                                </h1>
                                <div className="fs-6 mb-8">
                                    <div className="spinner-border text-dark" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root">
            <div className="d-flex flex-column flex-center flex-column-fluid">
                <div className="d-flex flex-column flex-center text-center p-10">
                    <div className="card card-flush w-lg-650px py-5">
                        <div className="card-body py-15 py-lg-20">
                            <div className="mb-14">
                                <LogoLink/>
                            </div>
                            <h1 className="fw-bolder text-gray-900 mb-5">
                                Không thể xác nhận email của bạn
                            </h1>
                            <div className="fs-6 mb-8">
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
import AuthLeftContent from "../../Components/Auth/AuthLeftContent";

export default function TwoFactor() {
    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root" style={{height: '100vh'}}>
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                <AuthLeftContent/>
                <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
                    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                        <div className="w-lg-500px p-10">
                            <form className="form w-100 mb-13" noValidate="novalidate"
                                  data-kt-redirect-url="/keen/demo1/index.html" id="kt_sing_in_two_factor_form">
                                <div className="text-center mb-10">
                                    <img alt="Logo" className="mh-125px"
                                         src="/keen/demo1/assets/media/svg/misc/smartphone-2.svg"/>
                                </div>
                                <div className="text-center mb-10">
                                    <h1 className="text-gray-900 mb-3">
                                        Two-Factor Verification
                                    </h1>

                                    <div className="text-muted fw-semibold fs-5 mb-5">Enter the verification code we
                                        sent to
                                    </div>
                                    <div className="fw-bold text-gray-900 fs-3">******7859</div>
                                </div>
                                <div className="mb-10">
                                    <div className="fw-bold text-start text-gray-900 fs-6 mb-1 ms-1">Type your 6 digit
                                        security code
                                    </div>
                                    <div className="d-flex flex-wrap flex-stack">
                                        <input type="text" name="code_1" data-inputmask="'mask': '9', 'placeholder': ''"
                                               maxLength="1"
                                               className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                                               value="" inputMode="text"/>
                                        <input type="text" name="code_2" data-inputmask="'mask': '9', 'placeholder': ''"
                                               maxLength="1"
                                               className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                                               value="" inputMode="text"/>
                                        <input type="text" name="code_3" data-inputmask="'mask': '9', 'placeholder': ''"
                                               maxLength="1"
                                               className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                                               value="" inputMode="text"/>
                                        <input type="text" name="code_4" data-inputmask="'mask': '9', 'placeholder': ''"
                                               maxLength="1"
                                               className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                                               value="" inputMode="text"/>
                                        <input type="text" name="code_5" data-inputmask="'mask': '9', 'placeholder': ''"
                                               maxLength="1"
                                               className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                                               value="" inputMode="text"/>
                                        <input type="text" name="code_6" data-inputmask="'mask': '9', 'placeholder': ''"
                                               maxLength="1"
                                               className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                                               value="" inputMode="text"/>
                                    </div>
                                </div>
                                <div className="d-flex flex-center">
                                    <button type="button" id="kt_sing_in_two_factor_submit"
                                            className="btn btn-lg btn-primary fw-bold">
                                        <span className="indicator-label">
                                            Submit
                                        </span>
                                    </button>
                                </div>
                            </form>

                            <div className="text-center fw-semibold fs-5">
                                <span className="text-muted me-1">Didn’t get the code ?</span>
                                <a href="#" className="link-primary fs-5 me-1">Resend</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
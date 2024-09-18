
export default function AccountTwoStepAuthentication() {
    return (
        <div className="card py-4 mb-5 mb-xl-8">
            <div className="card-header border-0">
                <div className="card-title flex-column">
                    <h2 className="mb-1">Xác thực hai bước</h2>
                    <div className="fs-6 fw-semibold text-muted">
                        Giúp tài khoản của an toàn hơn với bước xác thực thứ hai
                    </div>
                </div>
                <div className="card-toolbar">
                    <button type="button" className="btn btn-light-primary btn-sm" >
                        <i className="ki-duotone ki-fingerprint-scanning fs-3">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                        </i>
                        Bật xác thực hai bước
                    </button>
                </div>
            </div>
        </div>
    )
}
export default function AccountHistoryItem({history, handleClick}) {
    return (
        <div
            className={`notice d-flex ${history.isRevoked ? "border-gray-300" : "bg-light-success border-success"} rounded  border border-dashed min-w-lg-600px flex-shrink-0 p-6 mb-5`}>
            {
                history.isMobile ?
                    <i className={`ki-duotone ki-phone fs-2tx text-${history.isRevoked ? "dark" : "success"} me-4`}>
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i> :
                    <i className={`ki-duotone ki-laptop fs-2tx text-${history.isRevoked ? "dark" : "success"} me-4`}>
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
            }
            <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                <div className="mb-3 mb-md-0 fw-semibold">
                    <h4 className="text-gray-900 fw-bold">{history.isRevoked ? "Phiên đã đăng xuất" : "Đang hoạt động"} - {history.ipAddress}</h4>
                    <div className="fs-6 text-gray-700 pe-7">
                        {history.userAgent}
                    </div>
                </div>
                {
                    !history.isRevoked &&
                    <button type="button" className="btn btn-sm btn-light-danger text-nowrap" onClick={() => handleClick(history.id)}>
                        <i className="ki-duotone ki-lock-3 fs-3">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </i>
                        Đăng xuất
                    </button>
                }

            </div>
        </div>
    )
}
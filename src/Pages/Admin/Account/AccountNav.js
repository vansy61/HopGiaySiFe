import {NavLink} from "react-router-dom";

export default function AccountNav() {
    return (
        <div className="card mb-5 mb-xl-8">
            <div className="card-body px-0">
                <div className="m-0">
                    <ul className="nav nav-pills nav-pills-custom flex-column border-transparent fs-5 fw-bold">
                        <li className="nav-item my-3">
                            <NavLink to={"/admin/account/info"}
                                     className="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0">
                                <i className="ki-duotone ki-user-edit  fs-3 text-muted me-3">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                                Thông tin tài khoản
                                <span
                                    className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item my-3">
                            <NavLink to={"/admin/account/history"}
                                     className="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0">
                                <i className="ki-duotone ki-time fs-3 text-muted me-3">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                Lịch sử đăng nhập
                                <span
                                    className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item my-3">
                            <NavLink to={"/admin/account/security"}
                                     className="nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0">
                                <i className="ki-duotone ki-security-user fs-3 text-muted me-3">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                Bảo mật
                                <span
                                    className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
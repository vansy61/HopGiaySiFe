import LogoLink from "../LogoLink";
import {Link, NavLink} from "react-router-dom";

export default function AdminNav() {
    return (
        <div
            id="kt_app_sidebar"
            className="app-sidebar flex-column"
        >
            <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                <LogoLink size={30} mb={0}/>
                <div
                    id="kt_app_sidebar_toggle"
                    className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate"
                    data-kt-toggle="true"
                    data-kt-toggle-state="active"
                    data-kt-toggle-target="body"
                    data-kt-toggle-name="app-sidebar-minimize"
                >
                    <i className="ki-duotone ki-double-left fs-2 rotate-180">
                        <span className="path1"/>
                        <span className="path2"/>
                    </i>{" "}
                </div>
            </div>
            <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                <div className="app-sidebar-wrapper">
                    <div
                        className="hover-scroll-y my-5 mx-3"
                        style={{height: 124}}
                    >
                        <div
                            className="
                                  menu
                                  menu-column
                                  menu-rounded
                                  menu-sub-indention
                                  fw-semibold
                              "
                            id="#kt_app_sidebar_menu"
                        >
                            <div className="menu-item">
                                <NavLink to={"/admin/dashboard"} className={"menu-link"}>
                                      <span className="menu-icon">
                                         <i className="ki-duotone ki-home-3">
                                         <span className="path1"></span>
                                         <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Tổng Quan</span>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={"/admin/account"} className={"menu-link"}>
                                      <span className="menu-icon">
                                         <i className="ki-duotone ki-user">
                                         <span className="path1"></span>
                                         <span className="path2"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Tài Khoản</span>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={"/admin/product"} className={"menu-link"}>
                                      <span className="menu-icon">
                                         <i className="ki-duotone ki-cube-2">
                                             <span className="path1"></span>
                                             <span className="path2"></span>
                                             <span className="path3"></span>
                                        </i>
                                    </span>
                                    <span className="menu-title">Sản Phẩm</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
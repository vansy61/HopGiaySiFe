import Footer from "../Components/Admin/Footer";
import Header from "../Components/Admin/Header";

export default function AdminLayout() {
    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
                <Header />
                <div
                    className="app-wrapper  flex-column flex-row-fluid "
                    id="kt_app_wrapper"
                >
                    <div
                        id="kt_app_sidebar"
                        className="app-sidebar flex-column"
                    >
                        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                            <a href="/keen/demo1/index.html">
                                <img
                                    alt="Logo"
                                    src="/keen/demo1/assets/media/logos/default-dark.svg"
                                    className="h-30px app-sidebar-logo-default"
                                />
                            </a>
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
                            <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
                                <div
                                    id="kt_app_sidebar_menu_scroll"
                                    className="hover-scroll-y my-5 mx-3"
                                    data-kt-scroll="true"
                                    data-kt-scroll-activate="true"
                                    data-kt-scroll-height="auto"
                                    data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                                    data-kt-scroll-wrappers="#kt_app_sidebar_menu"
                                    data-kt-scroll-offset="5px"
                                    data-kt-scroll-save-state="true"
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
                                        data-kt-menu="true"
                                        data-kt-menu-expand="false"
                                    >
                                        <div className="menu-item">
                                            <a
                                                className="menu-link"
                                                href="/keen/demo1/apps/calendar.html"
                                            >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-calendar-8 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                        <span className="path5"/>
                        <span className="path6"/>
                      </i>
                    </span>
                                                <span className="menu-title">Calendar</span>
                                            </a>
                                        </div>
                                        {" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-main flex-column flex-row-fluid">
                        <div className="d-flex flex-column flex-column-fluid">
                            <div  className="app-toolbar  py-3 py-lg-6 ">
                                <div
                                    className="app-container  container-xxl d-flex flex-stack "
                                >
                                    <div
                                        className="page-title me-3 ">
                                        <h1 className="page-heading text-gray-900 fw-bold fs-3 my-0">
                                            eCommerce Dashboard
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div id="kt_app_content" className="app-content  flex-column-fluid ">
                                <div
                                    id="kt_app_content_container"
                                    className="app-container  container-xxl "
                                ></div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )
}
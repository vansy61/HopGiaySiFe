export default function Header() {
    return (
        <div id="kt_app_header" className="app-header ">
            <div className="app-container  container-fluid d-flex align-items-stretch justify-content-between "
                 id="kt_app_header_container">

                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
                     id="kt_app_header_wrapper">

                    <div></div>

                    <div className="app-navbar flex-shrink-0">

                        <div className="app-navbar-item align-items-stretch ms-1 ms-lg-3">


                            <div id="kt_header_search" className="header-search d-flex align-items-stretch"
                                 data-kt-search-keypress="true" data-kt-search-min-length="2"
                                 data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto"
                                 data-kt-menu-overflow="false" data-kt-menu-permanent="true"
                                 data-kt-menu-placement="bottom-end" data-kt-search="true">


                                <div className="d-flex align-items-center" data-kt-search-element="toggle"
                                     id="kt_header_search_toggle">
                                    <div
                                        className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                                        <i className="ki-duotone ki-magnifier fs-1"><span className="path1"></span><span
                                            className="path2"></span></i></div>
                                </div>


                            </div>
                        </div>


                        <div className="app-navbar-item ms-1 ms-lg-3">

                            <div
                                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                id="kt_activities_toggle">
                                <i className="ki-duotone ki-notification-on fs-1"><span className="path1"></span><span
                                    className="path2"></span><span className="path3"></span><span
                                    className="path4"></span><span className="path5"></span></i></div>

                        </div>


                        <div className="app-navbar-item ms-1 ms-lg-3">

                            <div
                                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                                data-kt-menu-placement="bottom-end">
                                <i className="ki-duotone ki-notification-status fs-1"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span></i></div>


                        </div>


                        <div className="app-navbar-item ms-1 ms-lg-3">

                            <div
                                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative"
                                id="kt_drawer_chat_toggle">
                                <i className="ki-duotone ki-message-text-2 fs-1"><span className="path1"></span><span
                                    className="path2"></span><span className="path3"></span></i>
                                <span
                                    className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink">
            </span>
                            </div>

                        </div>


                        <div className="app-navbar-item ms-1 ms-lg-3">

                            <div
                                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                                data-kt-menu-placement="bottom-end">
            <span className="symbol symbol-20px">
                <img className="rounded" src="/images/united-states.svg" alt=""/>
            </span>
                            </div>


                        </div>


                        <div className="app-navbar-item ms-1 ms-lg-3">

                            <a href="#"
                               className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                               data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent"
                               data-kt-menu-placement="bottom-end">
                                <i className="ki-duotone ki-night-day theme-light-show fs-1"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span><span
                                    className="path5"></span><span className="path6"></span><span
                                    className="path7"></span><span className="path8"></span><span
                                    className="path9"></span><span className="path10"></span></i> <i
                                className="ki-duotone ki-moon theme-dark-show fs-1"><span className="path1"></span><span
                                className="path2"></span></i></a>

                        </div>


                        <div className="app-navbar-item ms-2 ms-1 ms-lg-3" id="kt_header_user_menu_toggle">

                            <div className="cursor-pointer symbol symbol-35px symbol-md-40px"
                                 data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                                 data-kt-menu-placement="bottom-end">
                                <img src="/images/300-3.jpg" alt="user"/>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
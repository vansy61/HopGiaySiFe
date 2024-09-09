export default function Header() {
    return (
        <div id="kt_app_header" className="app-header ">
            <div className="app-container  container-fluid d-flex align-items-stretch justify-content-between "
                 id="kt_app_header_container">
                <div className="d-flex align-items-center d-lg-none ms-n3 me-2" title="Show sidebar menu">
                    <div className="btn btn-icon btn-active-color-primary w-35px h-35px"
                         id="kt_app_sidebar_mobile_toggle">
                        <i className="ki-duotone ki-abstract-14 fs-1"><span className="path1"></span><span
                            className="path2"></span></i></div>
                </div>
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <a href="/keen/demo1/index.html" className="d-lg-none">
                        <img alt="Logo" src="/keen/demo1/assets/media/logos/default-small.svg"
                             className="theme-light-show h-30px"/>
                        <img alt="Logo" src="/keen/demo1/assets/media/logos/default-small-dark.svg"
                             className="theme-dark-show h-30px"/>
                    </a>
                </div>
                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
                     id="kt_app_header_wrapper">
                    <div className="app-navbar flex-shrink-0">
                        <div className="app-navbar-item align-items-stretch ms-1 ms-lg-3">
                            <div id="kt_header_search" className="header-search d-flex align-items-stretch"
                                 data-kt-search-keypress="true" data-kt-search-min-length="2"
                                 data-kt-search-enter="enter" data-kt-search-layout="menu"
                                 data-kt-menu-trigger="auto" data-kt-menu-overflow="false"
                                 data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end"
                                 data-kt-search="true">
                                <div className="d-flex align-items-center" data-kt-search-element="toggle"
                                     id="kt_header_search_toggle">
                                    <div
                                        className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                                        <i className="ki-duotone ki-magnifier fs-1"><span
                                            className="path1"></span><span className="path2"></span></i></div>
                                </div>
                                <div data-kt-search-element="content"
                                     className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px"
                                     data-kt-menu="true">
                                    <div data-kt-search-element="wrapper">
                                        <form data-kt-search-element="form"
                                              className="w-100 position-relative mb-3" autoComplete="off">
                                            <i className="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0"><span
                                                className="path1"></span><span
                                                className="path2"></span></i>

                                            <input type="text"
                                                   className="search-input  form-control form-control-flush ps-10"
                                                   name="search" value="" placeholder="Search..."
                                                   data-kt-search-element="input"/>
                                            <span
                                                className="search-spinner  position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                                                data-kt-search-element="spinner">
        <span className="spinner-border h-15px w-15px align-middle text-gray-500"></span>
    </span>
                                            <span
                                                className="search-reset  btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
                                                data-kt-search-element="clear">
        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0"><span className="path1"></span><span
            className="path2"></span></i>    </span>
                                            <div className="position-absolute top-50 end-0 translate-middle-y"
                                                 data-kt-search-element="toolbar">
                                                <div data-kt-search-element="preferences-show"
                                                     className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1"
                                                     data-bs-toggle="tooltip"
                                                     aria-label="Show search preferences"
                                                     data-bs-original-title="Show search preferences"
                                                     data-kt-initialized="1">
                                                    <i className="ki-duotone ki-setting-2 fs-2"><span
                                                        className="path1"></span><span className="path2"></span></i>
                                                </div>

                                                <div data-kt-search-element="advanced-options-form-show"
                                                     className="btn btn-icon w-20px btn-sm btn-active-color-primary"
                                                     data-bs-toggle="tooltip"
                                                     aria-label="Show more search options"
                                                     data-bs-original-title="Show more search options"
                                                     data-kt-initialized="1">
                                                    <i className="ki-duotone ki-down fs-2"></i></div>
                                            </div>
                                        </form>
                                        <div className="separator border-gray-200 mb-6"></div>
                                        <div data-kt-search-element="results" className="d-none">
                                            <div className="scroll-y mh-200px mh-lg-350px">
                                                <h3 className="fs-5 text-muted m-0  pb-5"
                                                    data-kt-search-element="category-title">
                                                    Users </h3>
                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="/keen/demo1/assets/media/avatars/300-6.jpg"
                                                             alt=""/>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Karina Clark</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                                                    </div>
                                                </a>
                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="/keen/demo1/assets/media/avatars/300-2.jpg"
                                                             alt=""/>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Olivia Bold</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">Software Engineer</span>
                                                    </div>
                                                </a>
                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="/keen/demo1/assets/media/avatars/300-9.jpg"
                                                             alt=""/>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Ana Clark</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                                                    </div>
                                                </a>
                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="/keen/demo1/assets/media/avatars/300-14.jpg"
                                                             alt=""/>
                                                    </div>

                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Nick Pitola</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">Art Director</span>
                                                    </div>
                                                </a>



                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                                                        <img src="/keen/demo1/assets/media/avatars/300-11.jpg"
                                                             alt=""/>
                                                    </div>



                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Edward Kulnic</span>
                                                        <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                                                    </div>

                                                </a>


                                                <h3 className="fs-5 text-muted m-0 pt-5 pb-5"
                                                    data-kt-search-element="category-title">
                                                    Customers </h3>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px"
                                     src="/keen/demo1/assets/media/svg/brand-logos/volicity-9.svg" alt=""/>
                            </span>
                                                    </div>



                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                                <span
                                                                    className="fs-6 fw-semibold">Company Rbranding</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">UI Design</span>
                                                    </div>

                                                </a>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="/keen/demo1/assets/media/svg/brand-logos/tvit.svg"
                                     alt=""/>
                            </span>
                                                    </div>



                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                                <span
                                                                    className="fs-6 fw-semibold">Company Re-branding</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">Web Development</span>
                                                    </div>

                                                </a>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="/keen/demo1/assets/media/svg/misc/infography.svg"
                                     alt=""/>
                            </span>
                                                    </div>



                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                        <span className="fs-6 fw-semibold">Business Analytics App</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">Administration</span>
                                                    </div>

                                                </a>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="/keen/demo1/assets/media/svg/brand-logos/leaf.svg"
                                     alt=""/>
                            </span>
                                                    </div>



                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                                <span
                                                                    className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">Marketing</span>
                                                    </div>

                                                </a>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="/keen/demo1/assets/media/svg/brand-logos/tower.svg"
                                     alt=""/>
                            </span>
                                                    </div>



                                                    <div
                                                        className="d-flex flex-column justify-content-start fw-semibold">
                                                                <span
                                                                    className="fs-6 fw-semibold">Tower Group Website</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">Google Adwords</span>
                                                    </div>

                                                </a>



                                                <h3 className="fs-5 text-muted m-0 pt-5 pb-5"
                                                    data-kt-search-element="category-title">
                                                    Projects </h3>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-notepad fs-2 text-primary"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span><span
                                    className="path5"></span></i>
                            </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <span
                                                            className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">#45670</span>
                                                    </div>

                                                </a>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-frame fs-2 text-primary"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span></i>
                            </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <span
                                                            className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">#45690</span>
                                                    </div>

                                                </a>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-message-text-2 fs-2 text-primary"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span></i>
                            </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">#21090</span>
                                                    </div>

                                                </a>




                                                <a href="#"
                                                   className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-profile-circle fs-2 text-primary"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span></i>
                            </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <span
                                                            className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                                                        <span
                                                            className="fs-7 fw-semibold text-muted">#34560</span>
                                                    </div>

                                                </a>



                                            </div>

                                        </div>


                                        <div className="mb-5" data-kt-search-element="main">

                                            <div className="d-flex flex-stack fw-semibold mb-4">

                                                <span className="text-muted fs-6 me-2">Recently Searched:</span>


                                            </div>



                                            <div className="scroll-y mh-200px mh-lg-325px">

                                                <div className="d-flex align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                    <span className="symbol-label bg-light">
                        <i className="ki-duotone ki-laptop fs-2 text-primary"><span className="path1"></span><span
                            className="path2"></span></i>
                    </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp
                                                            by Keenthemes</a>
                                                        <span
                                                            className="fs-7 text-muted fw-semibold">#45789</span>
                                                    </div>

                                                </div>


                                                <div className="d-flex align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                    <span className="symbol-label bg-light">
                        <i className="ki-duotone ki-chart-simple fs-2 text-primary"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                    </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept
                                                            API Project Meeting</a>
                                                        <span
                                                            className="fs-7 text-muted fw-semibold">#84050</span>
                                                    </div>

                                                </div>


                                                <div className="d-flex align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                    <span className="symbol-label bg-light">
                        <i className="ki-duotone ki-chart fs-2 text-primary"><span className="path1"></span><span
                            className="path2"></span></i>
                    </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI
                                                            Monitoring App Launch</a>
                                                        <span
                                                            className="fs-7 text-muted fw-semibold">#84250</span>
                                                    </div>

                                                </div>


                                                <div className="d-flex align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                    <span className="symbol-label bg-light">
                        <i className="ki-duotone ki-chart-line-down fs-2 text-primary"><span
                            className="path1"></span><span className="path2"></span></i>
                    </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project
                                                            Reference FAQ</a>
                                                        <span
                                                            className="fs-7 text-muted fw-semibold">#67945</span>
                                                    </div>

                                                </div>


                                                <div className="d-flex align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                    <span className="symbol-label bg-light">
                        <i className="ki-duotone ki-sms fs-2 text-primary"><span className="path1"></span><span
                            className="path2"></span></i>
                    </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro
                                                            App Development</a>
                                                        <span
                                                            className="fs-7 text-muted fw-semibold">#84250</span>
                                                    </div>

                                                </div>


                                                <div className="d-flex align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                    <span className="symbol-label bg-light">
                        <i className="ki-duotone ki-bank fs-2 text-primary"><span className="path1"></span><span
                            className="path2"></span></i>
                    </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix
                                                            Mobile App</a>
                                                        <span
                                                            className="fs-7 text-muted fw-semibold">#45690</span>
                                                    </div>

                                                </div>


                                                <div className="d-flex align-items-center mb-5">

                                                    <div className="symbol symbol-40px me-4">
                    <span className="symbol-label bg-light">
                        <i className="ki-duotone ki-chart-line-down fs-2 text-primary"><span
                            className="path1"></span><span className="path2"></span></i>
                    </span>
                                                    </div>



                                                    <div className="d-flex flex-column">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing
                                                            UI Design" Launch</a>
                                                        <span
                                                            className="fs-7 text-muted fw-semibold">#24005</span>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>


                                        <div data-kt-search-element="empty" className="text-center d-none">

                                            <div className="pt-10 pb-10">
                                                <i className="ki-duotone ki-search-list fs-4x opacity-50"><span
                                                    className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span></i>
                                            </div>



                                            <div className="pb-15 fw-semibold">
                                                <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                                                <div className="text-muted fs-7">Please try again with a
                                                    different query
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                    <form data-kt-search-element="advanced-options-form"
                                          className="pt-1 d-none">

                                        <h3 className="fw-semibold text-gray-900 mb-7">Advanced Search</h3>



                                        <div className="mb-5">
                                            <input type="text"
                                                   className="form-control form-control-sm form-control-solid"
                                                   placeholder="Contains the word" name="query"/>
                                        </div>



                                        <div className="mb-5">

                                            <div className="nav-group nav-group-fluid">

                                                <label>
                                                    <input type="radio" className="btn-check" name="type"
                                                           value="has" checked="checked"/>
                                                    <span
                                                        className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                    All
                </span>
                                                </label>



                                                <label>
                                                    <input type="radio" className="btn-check" name="type"
                                                           value="users"/>
                                                    <span
                                                        className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                    Users
                </span>
                                                </label>



                                                <label>
                                                    <input type="radio" className="btn-check" name="type"
                                                           value="orders"/>
                                                    <span
                                                        className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                    Orders
                </span>
                                                </label>



                                                <label>
                                                    <input type="radio" className="btn-check" name="type"
                                                           value="projects"/>
                                                    <span
                                                        className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                    Projects
                </span>
                                                </label>

                                            </div>

                                        </div>



                                        <div className="mb-5">
                                            <input type="text" name="assignedto"
                                                   className="form-control form-control-sm form-control-solid"
                                                   placeholder="Assigned to" value=""/>
                                        </div>



                                        <div className="mb-5">
                                            <input type="text" name="collaborators"
                                                   className="form-control form-control-sm form-control-solid"
                                                   placeholder="Collaborators" value=""/>
                                        </div>



                                        <div className="mb-5">

                                            <div className="nav-group nav-group-fluid">

                                                <label>
                                                    <input type="radio" className="btn-check" name="attachment"
                                                           value="has" checked="checked"/>
                                                    <span
                                                        className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                    Has attachment
                </span>
                                                </label>



                                                <label>
                                                    <input type="radio" className="btn-check" name="attachment"
                                                           value="any"/>
                                                    <span
                                                        className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                    Any
                </span>
                                                </label>

                                            </div>

                                        </div>



                                        <div className="mb-5">
                                            <select name="timezone" aria-label="Select a Timezone"
                                                    data-control="select2"
                                                    data-dropdown-parent="#kt_header_search"
                                                    data-placeholder="date_period"
                                                    className="form-select form-select-sm form-select-solid select2-hidden-accessible"
                                                    data-select2-id="select2-data-1-33mo" tabIndex="-1"
                                                    aria-hidden="true" data-kt-initialized="1">
                                                <option value="next"
                                                        data-select2-id="select2-data-3-7hog">Within the next
                                                </option>
                                                <option value="last">Within the last</option>
                                                <option value="between">Between</option>
                                                <option value="on">On</option>
                                            </select><span
                                            className="select2 select2-container select2-container--bootstrap5"
                                            dir="ltr" data-select2-id="select2-data-2-pnv4"
                                            style="width: 100%;"><span className="selection"><span
                                            className="select2-selection select2-selection--single form-select form-select-sm form-select-solid"
                                            role="combobox" aria-haspopup="true" aria-expanded="false"
                                            tabIndex="0" aria-disabled="false"
                                            aria-labelledby="select2-timezone-vg-container"
                                            aria-controls="select2-timezone-vg-container"><span
                                            className="select2-selection__rendered"
                                            id="select2-timezone-vg-container" role="textbox"
                                            aria-readonly="true"
                                            title="Within the next">Within the next</span><span
                                            className="select2-selection__arrow" role="presentation"><b
                                            role="presentation"></b></span></span></span><span
                                            className="dropdown-wrapper" aria-hidden="true"></span></span>
                                        </div>



                                        <div className="row mb-8">

                                            <div className="col-6">
                                                <input type="number" name="date_number"
                                                       className="form-control form-control-sm form-control-solid"
                                                       placeholder="Lenght" value=""/>
                                            </div>



                                            <div className="col-6">
                                                <select name="date_typer" aria-label="Select a Timezone"
                                                        data-control="select2"
                                                        data-dropdown-parent="#kt_header_search"
                                                        data-placeholder="Period"
                                                        className="form-select form-select-sm form-select-solid select2-hidden-accessible"
                                                        data-select2-id="select2-data-4-oqim" tabIndex="-1"
                                                        aria-hidden="true" data-kt-initialized="1">
                                                    <option value="days"
                                                            data-select2-id="select2-data-6-4yhr">Days
                                                    </option>
                                                    <option value="weeks">Weeks</option>
                                                    <option value="months">Months</option>
                                                    <option value="years">Years</option>
                                                </select><span
                                                className="select2 select2-container select2-container--bootstrap5"
                                                dir="ltr" data-select2-id="select2-data-5-zxa8"
                                                style="width: 100%;"><span className="selection"><span
                                                className="select2-selection select2-selection--single form-select form-select-sm form-select-solid"
                                                role="combobox" aria-haspopup="true" aria-expanded="false"
                                                tabIndex="0" aria-disabled="false"
                                                aria-labelledby="select2-date_typer-19-container"
                                                aria-controls="select2-date_typer-19-container"><span
                                                className="select2-selection__rendered"
                                                id="select2-date_typer-19-container" role="textbox"
                                                aria-readonly="true" title="Days">Days</span><span
                                                className="select2-selection__arrow" role="presentation"><b
                                                role="presentation"></b></span></span></span><span
                                                className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>

                                        </div>



                                        <div className="d-flex justify-content-end">
                                            <button type="reset"
                                                    className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                                    data-kt-search-element="advanced-options-form-cancel">Cancel
                                            </button>

                                            <a href="/keen/demo1/utilities/search/horizontal.html"
                                               className="btn btn-sm fw-bold btn-primary"
                                               data-kt-search-element="advanced-options-form-search">Search</a>
                                        </div>

                                    </form>


                                    <form data-kt-search-element="preferences" className="pt-1 d-none">

                                        <h3 className="fw-semibold text-gray-900 mb-7">Search Preferences</h3>



                                        <div className="pb-4 border-bottom">
                                            <label
                                                className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                Projects
            </span>

                                                <input className="form-check-input" type="checkbox" value="1"
                                                       checked="checked"/>
                                            </label>
                                        </div>



                                        <div className="py-4 border-bottom">
                                            <label
                                                className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                Targets
            </span>
                                                <input className="form-check-input" type="checkbox" value="1"
                                                       checked="checked"/>
                                            </label>
                                        </div>



                                        <div className="py-4 border-bottom">
                                            <label
                                                className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                Affiliate Programs
            </span>
                                                <input className="form-check-input" type="checkbox" value="1"/>
                                            </label>
                                        </div>



                                        <div className="py-4 border-bottom">
                                            <label
                                                className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                Referrals
            </span>
                                                <input className="form-check-input" type="checkbox" value="1"
                                                       checked="checked"/>
                                            </label>
                                        </div>



                                        <div className="py-4 border-bottom">
                                            <label
                                                className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                Users
            </span>
                                                <input className="form-check-input" type="checkbox" value="1"/>
                                            </label>
                                        </div>



                                        <div className="d-flex justify-content-end pt-7">
                                            <button type="reset"
                                                    className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                                    data-kt-search-element="preferences-dismiss">Cancel
                                            </button>
                                            <button type="submit"
                                                    className="btn btn-sm fw-bold btn-primary">Save Changes
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>



                        <div className="app-navbar-item ms-1 ms-lg-3">

                            <div
                                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                id="kt_activities_toggle">
                                <i className="ki-duotone ki-notification-on fs-1"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span><span
                                    className="path5"></span></i></div>

                        </div>



                        <div className="app-navbar-item ms-1 ms-lg-3">

                            <div
                                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                <i className="ki-duotone ki-notification-status fs-1"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span></i></div>


                            <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
                                 data-kt-menu="true" id="kt_menu_notifications">

                                <div className="d-flex flex-column bgi-no-repeat rounded-top"
                                     style="background-image:url('/keen/demo1/assets/media/misc/menu-header-bg.jpg')">

                                    <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                                        Notifications <span className="fs-8 opacity-75 ps-3">24 reports</span>
                                    </h3>



                                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9"
                                        role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                               data-bs-toggle="tab" href="#kt_topbar_notifications_1"
                                               aria-selected="false" tabIndex="-1" role="tab">Alerts</a>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                                               data-bs-toggle="tab" href="#kt_topbar_notifications_2"
                                               aria-selected="true" role="tab">Updates</a>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                               data-bs-toggle="tab" href="#kt_topbar_notifications_3"
                                               aria-selected="false" tabIndex="-1" role="tab">Logs</a>
                                        </li>
                                    </ul>

                                </div>



                                <div className="tab-content">

                                    <div className="tab-pane fade" id="kt_topbar_notifications_1"
                                         role="tabpanel">

                                        <div className="scroll-y mh-325px my-5 px-8">

                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center">

                                                    <div className="symbol symbol-35px me-4">
                                <span className="symbol-label bg-light-primary">
                                    <i className="ki-duotone ki-abstract-28 fs-2 text-primary"><span
                                        className="path1"></span><span className="path2"></span></i>
                                </span>
                                                    </div>



                                                    <div className="mb-0 me-2">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-bold">Project
                                                            Alice</a>
                                                        <div className="text-gray-500 fs-7">Phase 1
                                                            development
                                                        </div>
                                                    </div>

                                                </div>



                                                <span className="badge badge-light fs-8">1 hr</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center">

                                                    <div className="symbol symbol-35px me-4">
                                <span className="symbol-label bg-light-danger">
                                    <i className="ki-duotone ki-information fs-2 text-danger"><span
                                        className="path1"></span><span className="path2"></span><span
                                        className="path3"></span></i>
                                </span>
                                                    </div>



                                                    <div className="mb-0 me-2">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-bold">HR
                                                            Confidential</a>
                                                        <div className="text-gray-500 fs-7">Confidential staff
                                                            documents
                                                        </div>
                                                    </div>

                                                </div>



                                                <span className="badge badge-light fs-8">2 hrs</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center">

                                                    <div className="symbol symbol-35px me-4">
                                <span className="symbol-label bg-light-warning">
                                    <i className="ki-duotone ki-briefcase fs-2 text-warning"><span
                                        className="path1"></span><span className="path2"></span></i>
                                </span>
                                                    </div>



                                                    <div className="mb-0 me-2">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-bold">Company
                                                            HR</a>
                                                        <div className="text-gray-500 fs-7">Corporeate staff
                                                            profiles
                                                        </div>
                                                    </div>

                                                </div>



                                                <span className="badge badge-light fs-8">5 hrs</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center">

                                                    <div className="symbol symbol-35px me-4">
                                <span className="symbol-label bg-light-success">
                                    <i className="ki-duotone ki-abstract-12 fs-2 text-success"><span
                                        className="path1"></span><span className="path2"></span></i>
                                </span>
                                                    </div>



                                                    <div className="mb-0 me-2">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-bold">Project
                                                            Redux</a>
                                                        <div className="text-gray-500 fs-7">New frontend admin
                                                            theme
                                                        </div>
                                                    </div>

                                                </div>



                                                <span className="badge badge-light fs-8">2 days</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center">

                                                    <div className="symbol symbol-35px me-4">
                                <span className="symbol-label bg-light-primary">
                                    <i className="ki-duotone ki-colors-square fs-2 text-primary"><span
                                        className="path1"></span><span className="path2"></span><span
                                        className="path3"></span><span className="path4"></span></i>
                                </span>
                                                    </div>



                                                    <div className="mb-0 me-2">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-bold">Project
                                                            Breafing</a>
                                                        <div className="text-gray-500 fs-7">Product launch
                                                            status update
                                                        </div>
                                                    </div>

                                                </div>



                                                <span className="badge badge-light fs-8">21 Jan</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center">

                                                    <div className="symbol symbol-35px me-4">
                                <span className="symbol-label bg-light-info">
                                    <i className="ki-duotone ki-picture
 fs-2 text-info"></i>
                                </span>
                                                    </div>



                                                    <div className="mb-0 me-2">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner
                                                            Assets</a>
                                                        <div className="text-gray-500 fs-7">Collection of banner
                                                            images
                                                        </div>
                                                    </div>

                                                </div>



                                                <span className="badge badge-light fs-8">21 Jan</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center">

                                                    <div className="symbol symbol-35px me-4">
                                <span className="symbol-label bg-light-warning">
                                    <i className="ki-duotone ki-color-swatch fs-2 text-warning"><span
                                        className="path1"></span><span className="path2"></span><span
                                        className="path3"></span><span className="path4"></span><span
                                        className="path5"></span><span className="path6"></span><span
                                        className="path7"></span><span className="path8"></span><span
                                        className="path9"></span><span className="path10"></span><span
                                        className="path11"></span><span className="path12"></span><span
                                        className="path13"></span><span className="path14"></span><span
                                        className="path15"></span><span className="path16"></span><span
                                        className="path17"></span><span className="path18"></span><span
                                        className="path19"></span><span className="path20"></span><span
                                        className="path21"></span></i>
                                </span>
                                                    </div>



                                                    <div className="mb-0 me-2">
                                                        <a href="#"
                                                           className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon
                                                            Assets</a>
                                                        <div className="text-gray-500 fs-7">Collection of SVG
                                                            icons
                                                        </div>
                                                    </div>

                                                </div>



                                                <span className="badge badge-light fs-8">20 March</span>

                                            </div>


                                        </div>



                                        <div className="py-3 text-center border-top">
                                            <a href="/keen/demo1/pages/user-profile/activity.html"
                                               className="btn btn-color-gray-600 btn-active-color-primary">
                                                View All
                                                <i className="ki-duotone ki-arrow-right fs-5"><span
                                                    className="path1"></span><span className="path2"></span></i>
                                            </a>
                                        </div>

                                    </div>



                                    <div className="tab-pane fade show active" id="kt_topbar_notifications_2"
                                         role="tabpanel">

                                        <div className="d-flex flex-column px-9">

                                            <div className="pt-10 pb-0">

                                                <h3 className="text-gray-900 text-center fw-bold">
                                                    Get Pro Access
                                                </h3>



                                                <div className="text-center text-gray-600 fw-semibold pt-1">
                                                    Outlines keep you honest. They stoping you from amazing
                                                    poorly about drive
                                                </div>



                                                <div className="text-center mt-5 mb-9">
                                                    <a href="#" className="btn btn-sm btn-primary px-6"
                                                       data-bs-toggle="modal"
                                                       data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                                </div>

                                            </div>



                                            <div className="text-center px-4">
                                                <img className="mw-100 mh-200px" alt="image"
                                                     src="/keen/demo1/assets/media/illustrations/sketchy-1/1.png"/>
                                            </div>

                                        </div>

                                    </div>



                                    <div className="tab-pane fade" id="kt_topbar_notifications_3"
                                         role="tabpanel">

                                        <div className="scroll-y mh-325px my-5 px-8">

                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-success me-4">200 OK</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">New
                                                        order</a>

                                                </div>



                                                <span className="badge badge-light fs-8">Just now</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-danger me-4">500 ERR</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">New
                                                        customer</a>

                                                </div>



                                                <span className="badge badge-light fs-8">2 hrs</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-success me-4">200 OK</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">Payment
                                                        process</a>

                                                </div>



                                                <span className="badge badge-light fs-8">5 hrs</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-warning me-4">300 WRN</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">Search
                                                        query</a>

                                                </div>



                                                <span className="badge badge-light fs-8">2 days</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-success me-4">200 OK</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">API
                                                        connection</a>

                                                </div>



                                                <span className="badge badge-light fs-8">1 week</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-success me-4">200 OK</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">Database
                                                        restore</a>

                                                </div>



                                                <span className="badge badge-light fs-8">Mar 5</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-warning me-4">300 WRN</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">System
                                                        update</a>

                                                </div>



                                                <span className="badge badge-light fs-8">May 15</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-warning me-4">300 WRN</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">Server
                                                        OS update</a>

                                                </div>



                                                <span className="badge badge-light fs-8">Apr 3</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-warning me-4">300 WRN</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">API
                                                        rollback</a>

                                                </div>



                                                <span className="badge badge-light fs-8">Jun 30</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-danger me-4">500 ERR</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">Refund
                                                        process</a>

                                                </div>



                                                <span className="badge badge-light fs-8">Jul 10</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-danger me-4">500 ERR</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">Withdrawal
                                                        process</a>

                                                </div>



                                                <span className="badge badge-light fs-8">Sep 10</span>

                                            </div>


                                            <div className="d-flex flex-stack py-4">

                                                <div className="d-flex align-items-center me-2">

                                                    <span
                                                        className="w-70px badge badge-light-danger me-4">500 ERR</span>



                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fw-semibold">Mail
                                                        tasks</a>

                                                </div>



                                                <span className="badge badge-light fs-8">Dec 10</span>

                                            </div>


                                        </div>



                                        <div className="py-3 text-center border-top">
                                            <a href="/keen/demo1/pages/user-profile/activity.html"
                                               className="btn btn-color-gray-600 btn-active-color-primary">
                                                View All
                                                <i className="ki-duotone ki-arrow-right fs-5"><span
                                                    className="path1"></span><span className="path2"></span></i>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>

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
                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <span className="symbol symbol-20px">
                <img className="rounded" src="/keen/demo1/assets/media/flags/united-states.svg" alt=""/>
            </span>
                            </div>

                            <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-175px"
                                data-kt-menu="true">

                                <div className="menu-item px-3">
                                    <a href="/keen/demo1/account/settings.html"
                                       className="menu-link d-flex px-5 active">
            <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/keen/demo1/assets/media/flags/united-states.svg" alt=""/>
            </span>
                                        English
                                    </a>
                                </div>



                                <div className="menu-item px-3">
                                    <a href="/keen/demo1/account/settings.html"
                                       className="menu-link d-flex px-5">
            <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/keen/demo1/assets/media/flags/spain.svg" alt=""/>
            </span>
                                        Spanish
                                    </a>
                                </div>



                                <div className="menu-item px-3">
                                    <a href="/keen/demo1/account/settings.html"
                                       className="menu-link d-flex px-5">
            <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/keen/demo1/assets/media/flags/germany.svg" alt=""/>
            </span>
                                        German
                                    </a>
                                </div>



                                <div className="menu-item px-3">
                                    <a href="/keen/demo1/account/settings.html"
                                       className="menu-link d-flex px-5">
            <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/keen/demo1/assets/media/flags/japan.svg" alt=""/>
            </span>
                                        Japanese
                                    </a>
                                </div>



                                <div className="menu-item px-3">
                                    <a href="/keen/demo1/account/settings.html"
                                       className="menu-link d-flex px-5">
            <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/keen/demo1/assets/media/flags/france.svg" alt=""/>
            </span>
                                        French
                                    </a>
                                </div>

                            </div>


                        </div>



                        <div className="app-navbar-item ms-1 ms-lg-3">


                            <a href="#"
                               className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                               data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                               data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                <i className="ki-duotone ki-night-day theme-light-show fs-1"><span
                                    className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span><span
                                    className="path5"></span><span className="path6"></span><span
                                    className="path7"></span><span className="path8"></span><span
                                    className="path9"></span><span className="path10"></span></i> <i
                                className="ki-duotone ki-moon theme-dark-show fs-1"><span
                                className="path1"></span><span className="path2"></span></i></a>



                            <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                                data-kt-menu="true" data-kt-element="theme-mode-menu">

                                <div className="menu-item px-3 my-0">
                                    <a href="#" className="menu-link px-3 py-2 active" data-kt-element="mode"
                                       data-kt-value="light">
            <span className="menu-icon" data-kt-element="icon">
                <i className="ki-duotone ki-night-day fs-2"><span className="path1"></span><span
                    className="path2"></span><span className="path3"></span><span className="path4"></span><span
                    className="path5"></span><span className="path6"></span><span className="path7"></span><span
                    className="path8"></span><span className="path9"></span><span className="path10"></span></i>            </span>
                                        <span className="menu-title">
                Light
            </span>
                                    </a>
                                </div>



                                <div className="menu-item px-3 my-0">
                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode"
                                       data-kt-value="dark">
            <span className="menu-icon" data-kt-element="icon">
                <i className="ki-duotone ki-moon fs-2"><span className="path1"></span><span
                    className="path2"></span></i>            </span>
                                        <span className="menu-title">
                Dark
            </span>
                                    </a>
                                </div>



                                <div className="menu-item px-3 my-0">
                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode"
                                       data-kt-value="system">
            <span className="menu-icon" data-kt-element="icon">
                <i className="ki-duotone ki-screen fs-2"><span className="path1"></span><span
                    className="path2"></span><span className="path3"></span><span className="path4"></span></i>            </span>
                                        <span className="menu-title">
                System
            </span>
                                    </a>
                                </div>

                            </div>


                        </div>



                        <div className="app-navbar-item ms-2 ms-1 ms-lg-3" id="kt_header_user_menu_toggle">

                            <div className="cursor-pointer symbol symbol-35px symbol-md-40px"
                                 data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                 data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                <img src="/keen/demo1/assets/media/avatars/300-3.jpg" alt="user"/>
                            </div>


                            <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                                data-kt-menu="true">

                                <div className="menu-item px-3">
                                    <div className="menu-content d-flex align-items-center px-3">

                                        <div className="symbol symbol-50px me-5">
                                            <img alt="Logo" src="/keen/demo1/assets/media/avatars/300-3.jpg"/>
                                        </div>



                                        <div className="d-flex flex-column">
                                            <div className="fw-bold d-flex align-items-center fs-5">
                                                Max Smith <span
                                                className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                                            </div>

                                            <a href="#"
                                               className="fw-semibold text-muted text-hover-primary fs-7">
                                                max@kt.com </a>
                                        </div>

                                    </div>
                                </div>



                                <div className="separator my-2"></div>



                                <div className="menu-item px-5">
                                    <a href="/keen/demo1/account/overview.html" className="menu-link px-5">
                                        My Profile
                                    </a>
                                </div>



                                <div className="menu-item px-5">
                                    <a href="/keen/demo1/apps/projects/list.html" className="menu-link px-5">
                                        <span className="menu-text">My Projects</span>
                                        <span className="menu-badge">
                <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
            </span>
                                    </a>
                                </div>



                                <div className="menu-item px-5"
                                     data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                     data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                    <a href="#" className="menu-link px-5">
                                        <span className="menu-title">My Subscription</span>
                                        <span className="menu-arrow"></span>
                                    </a>


                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/referrals.html"
                                               className="menu-link px-5">
                                                Referrals
                                            </a>
                                        </div>



                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/billing.html"
                                               className="menu-link px-5">
                                                Billing
                                            </a>
                                        </div>



                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/statements.html"
                                               className="menu-link px-5">
                                                Payments
                                            </a>
                                        </div>



                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/statements.html"
                                               className="menu-link d-flex flex-stack px-5">
                                                Statements

                                                <span className="ms-2 lh-0" data-bs-toggle="tooltip"
                                                      aria-label="View your statements"
                                                      data-bs-original-title="View your statements"
                                                      data-kt-initialized="1">
                        <i className="ki-duotone ki-information-5 fs-5"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span></i>                    </span>
                                            </a>
                                        </div>



                                        <div className="separator my-2"></div>



                                        <div className="menu-item px-3">
                                            <div className="menu-content px-3">
                                                <label
                                                    className="form-check form-switch form-check-custom form-check-solid">
                                                    <input className="form-check-input w-30px h-20px"
                                                           type="checkbox" value="1" checked="checked"
                                                           name="notifications"/>
                                                    <span className="form-check-label text-muted fs-7">
                            Notifications
                        </span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                                <div className="menu-item px-5">
                                    <a href="/keen/demo1/account/statements.html" className="menu-link px-5">
                                        My Statements
                                    </a>
                                </div>



                                <div className="separator my-2"></div>




                                <div className="menu-item px-5"
                                     data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                     data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                    <a href="#" className="menu-link px-5">
            <span className="menu-title position-relative">
                Language

                <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                    English <img className="w-15px h-15px rounded-1 ms-2"
                                 src="/keen/demo1/assets/media/flags/united-states.svg" alt=""/>
                </span>
            </span>
                                    </a>


                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/settings.html"
                                               className="menu-link d-flex px-5 active">
                    <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="/keen/demo1/assets/media/flags/united-states.svg" alt=""/>
                    </span>
                                                English
                                            </a>
                                        </div>



                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/settings.html"
                                               className="menu-link d-flex px-5">
                    <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="/keen/demo1/assets/media/flags/spain.svg" alt=""/>
                    </span>
                                                Spanish
                                            </a>
                                        </div>



                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/settings.html"
                                               className="menu-link d-flex px-5">
                    <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="/keen/demo1/assets/media/flags/germany.svg" alt=""/>
                    </span>
                                                German
                                            </a>
                                        </div>



                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/settings.html"
                                               className="menu-link d-flex px-5">
                    <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="/keen/demo1/assets/media/flags/japan.svg" alt=""/>
                    </span>
                                                Japanese
                                            </a>
                                        </div>



                                        <div className="menu-item px-3">
                                            <a href="/keen/demo1/account/settings.html"
                                               className="menu-link d-flex px-5">
                    <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="/keen/demo1/assets/media/flags/france.svg" alt=""/>
                    </span>
                                                French
                                            </a>
                                        </div>

                                    </div>

                                </div>



                                <div className="menu-item px-5 my-1">
                                    <a href="/keen/demo1/account/settings.html" className="menu-link px-5">
                                        Account Settings
                                    </a>
                                </div>



                                <div className="menu-item px-5">
                                    <a href="/keen/demo1/authentication/layouts/corporate/sign-in.html"
                                       className="menu-link px-5">
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
                            <div className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
                                 id="kt_app_header_menu_toggle">
                                <i className="ki-duotone ki-element-4 fs-1"><span className="path1"></span><span
                                    className="path2"></span></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
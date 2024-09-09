import Header from "../Components/Admin/Header";

export default function AdminLayout() {
    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            {/*begin::Page*/}
            <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
                {/*begin::Header*/}
                <div id="kt_app_header" className="app-header ">
                    {/*begin::Header container*/}
                    <div
                        className="app-container  container-fluid d-flex align-items-stretch justify-content-between "
                        id="kt_app_header_container"
                    >
                        {/*begin::sidebar mobile toggle*/}
                        <div
                            className="d-flex align-items-center d-lg-none ms-n3 me-2"
                            title="Show sidebar menu"
                        >
                            <div
                                className="btn btn-icon btn-active-color-primary w-35px h-35px"
                                id="kt_app_sidebar_mobile_toggle"
                            >
                                <i className="ki-duotone ki-abstract-14 fs-1">
                                    <span className="path1"/>
                                    <span className="path2"/>
                                </i>{" "}
                            </div>
                        </div>
                        {/*end::sidebar mobile toggle*/}
                        {/*begin::Mobile logo*/}
                        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                            <a href="/keen/demo1/index.html" className="d-lg-none">
                                <img
                                    alt="Logo"
                                    src="/keen/demo1/assets/media/logos/default-small.svg"
                                    className="theme-light-show h-30px"
                                />
                                <img
                                    alt="Logo"
                                    src="/keen/demo1/assets/media/logos/default-small-dark.svg"
                                    className="theme-dark-show h-30px"
                                />
                            </a>
                        </div>
                        {/*end::Mobile logo*/}
                        {/*begin::Header wrapper*/}
                        <div
                            className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
                            id="kt_app_header_wrapper"
                        >
                            {/*begin::Menu wrapper*/}
                            {/*end::Menu wrapper*/}
                            {/*begin::Navbar*/}
                            <div className="app-navbar flex-shrink-0">
                                {/*begin::Search*/}
                                <div className="app-navbar-item align-items-stretch ms-1 ms-lg-3">
                                    {/*begin::Search*/}
                                    <div
                                        id="kt_header_search"
                                        className="header-search d-flex align-items-stretch"
                                        data-kt-search-keypress="true"
                                        data-kt-search-min-length={2}
                                        data-kt-search-enter="enter"
                                        data-kt-search-layout="menu"
                                        data-kt-menu-trigger="auto"
                                        data-kt-menu-overflow="false"
                                        data-kt-menu-permanent="true"
                                        data-kt-menu-placement="bottom-end"
                                        data-kt-search="true"
                                    >
                                        {/*begin::Search toggle*/}
                                        <div
                                            className="d-flex align-items-center"
                                            data-kt-search-element="toggle"
                                            id="kt_header_search_toggle"
                                        >
                                            <div
                                                className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                                                <i className="ki-duotone ki-magnifier fs-1">
                                                    <span className="path1"/>
                                                    <span className="path2"/>
                                                </i>{" "}
                                            </div>
                                        </div>
                                        {/*end::Search toggle*/}
                                        {/*begin::Menu*/}
                                        <div
                                            data-kt-search-element="content"
                                            className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px"
                                            data-kt-menu="true"
                                        >
                                            {/*begin::Wrapper*/}
                                            <div data-kt-search-element="wrapper">
                                                {/*begin::Form*/}
                                                <form
                                                    data-kt-search-element="form"
                                                    className="w-100 position-relative mb-3"
                                                    autoComplete="off"
                                                >
                                                    {/*begin::Icon*/}
                                                    <i className="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0">
                                                        <span className="path1"/>
                                                        <span className="path2"/>
                                                    </i>{" "}
                                                    {/*end::Icon*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        className="search-input  form-control form-control-flush ps-10"
                                                        name="search"
                                                        defaultValue=""
                                                        placeholder="Search..."
                                                        data-kt-search-element="input"
                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin::Spinner*/}
                                                    <span
                                                        className="search-spinner  position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                                                        data-kt-search-element="spinner"
                                                    >
                        <span className="spinner-border h-15px w-15px align-middle text-gray-500"/>
                      </span>
                                                    {/*end::Spinner*/}
                                                    {/*begin::Reset*/}
                                                    <span
                                                        className="search-reset  btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
                                                        data-kt-search-element="clear"
                                                    >
                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                          <span className="path1"/>
                          <span className="path2"/>
                        </i>{" "}
                      </span>
                                                    {/*end::Reset*/}
                                                    {/*begin::Toolbar*/}
                                                    <div
                                                        className="position-absolute top-50 end-0 translate-middle-y"
                                                        data-kt-search-element="toolbar"
                                                    >
                                                        {/*begin::Preferences toggle*/}
                                                        <div
                                                            data-kt-search-element="preferences-show"
                                                            className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1"
                                                            data-bs-toggle="tooltip"
                                                            aria-label="Show search preferences"
                                                            data-bs-original-title="Show search preferences"
                                                            data-kt-initialized={1}
                                                        >
                                                            <i className="ki-duotone ki-setting-2 fs-2">
                                                                <span className="path1"/>
                                                                <span className="path2"/>
                                                            </i>{" "}
                                                        </div>
                                                        {/*end::Preferences toggle*/}
                                                        {/*begin::Advanced search toggle*/}
                                                        <div
                                                            data-kt-search-element="advanced-options-form-show"
                                                            className="btn btn-icon w-20px btn-sm btn-active-color-primary"
                                                            data-bs-toggle="tooltip"
                                                            aria-label="Show more search options"
                                                            data-bs-original-title="Show more search options"
                                                            data-kt-initialized={1}
                                                        >
                                                            <i className="ki-duotone ki-down fs-2"/>{" "}
                                                        </div>
                                                        {/*end::Advanced search toggle*/}
                                                    </div>
                                                    {/*end::Toolbar*/}
                                                </form>
                                                {/*end::Form*/}
                                                {/*begin::Separator*/}
                                                <div className="separator border-gray-200 mb-6"/>
                                                {/*end::Separator*/}
                                                {/*begin::Recently viewed*/}
                                                <div data-kt-search-element="results" className="d-none">
                                                    {/*begin::Items*/}
                                                    <div className="scroll-y mh-200px mh-lg-350px">
                                                        {/*begin::Category title*/}
                                                        <h3
                                                            className="fs-5 text-muted m-0  pb-5"
                                                            data-kt-search-element="category-title"
                                                        >
                                                            Users{" "}
                                                        </h3>
                                                        {/*end::Category title*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                                                                <img
                                                                    src="/keen/demo1/assets/media/avatars/300-6.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Karina Clark
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              Marketing Manager
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                                                                <img
                                                                    src="/keen/demo1/assets/media/avatars/300-2.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Olivia Bold
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              Software Engineer
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                                                                <img
                                                                    src="/keen/demo1/assets/media/avatars/300-9.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                                                                <span className="fs-6 fw-semibold">Ana Clark</span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              UI/UX Designer
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                                                                <img
                                                                    src="/keen/demo1/assets/media/avatars/300-14.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Nick Pitola
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              Art Director
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                                                                <img
                                                                    src="/keen/demo1/assets/media/avatars/300-11.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Edward Kulnic
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              System Administrator
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Category title*/}
                                                        <h3
                                                            className="fs-5 text-muted m-0 pt-5 pb-5"
                                                            data-kt-search-element="category-title"
                                                        >
                                                            Customers{" "}
                                                        </h3>
                                                        {/*end::Category title*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                  className="w-20px h-20px"
                                  src="/keen/demo1/assets/media/svg/brand-logos/volicity-9.svg"
                                  alt=""
                              />
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Company Rbranding
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              UI Design
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                  className="w-20px h-20px"
                                  src="/keen/demo1/assets/media/svg/brand-logos/tvit.svg"
                                  alt=""
                              />
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Company Re-branding
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              Web Development
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                  className="w-20px h-20px"
                                  src="/keen/demo1/assets/media/svg/misc/infography.svg"
                                  alt=""
                              />
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Business Analytics App
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              Administration
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                  className="w-20px h-20px"
                                  src="/keen/demo1/assets/media/svg/brand-logos/leaf.svg"
                                  alt=""
                              />
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              EcoLeaf App Launch
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              Marketing
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <img
                                  className="w-20px h-20px"
                                  src="/keen/demo1/assets/media/svg/brand-logos/tower.svg"
                                  alt=""
                              />
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div
                                                                className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">
                              Tower Group Website
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              Google Adwords
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Category title*/}
                                                        <h3
                                                            className="fs-5 text-muted m-0 pt-5 pb-5"
                                                            data-kt-search-element="category-title"
                                                        >
                                                            Projects{" "}
                                                        </h3>
                                                        {/*end::Category title*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-notepad fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                                <span className="path4"/>
                                <span className="path5"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Si-Fi Project by AU Themes
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              #45670
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-frame fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                                <span className="path4"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Shopix Mobile App Planning
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              #45690
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Finance Monitoring SAAS Discussion
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              #21090
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <a
                                                            href="#"
                                                            className="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                                                        >
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">
                              Dashboard Analitics Launch
                            </span>
                                                                <span className="fs-7 fw-semibold text-muted">
                              #34560
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </a>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Items*/}
                                                </div>
                                                {/*end::Recently viewed*/}
                                                {/*begin::Recently viewed*/}
                                                <div className="mb-5" data-kt-search-element="main">
                                                    {/*begin::Heading*/}
                                                    <div className="d-flex flex-stack fw-semibold mb-4">
                                                        {/*begin::Label*/}
                                                        <span className="text-muted fs-6 me-2">
                          Recently Searched:
                        </span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Items*/}
                                                    <div className="scroll-y mh-200px mh-lg-325px">
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-laptop fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                                >
                                                                    BoomApp by Keenthemes
                                                                </a>
                                                                <span className="fs-7 text-muted fw-semibold">
                              #45789
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                                <span className="path4"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                                >
                                                                    "Kept API Project Meeting
                                                                </a>
                                                                <span className="fs-7 text-muted fw-semibold">
                              #84050
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                                >
                                                                    "KPI Monitoring App Launch
                                                                </a>
                                                                <span className="fs-7 text-muted fw-semibold">
                              #84250
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                                >
                                                                    Project Reference FAQ
                                                                </a>
                                                                <span className="fs-7 text-muted fw-semibold">
                              #67945
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-sms fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                                >
                                                                    "FitPro App Development
                                                                </a>
                                                                <span className="fs-7 text-muted fw-semibold">
                              #84250
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-bank fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                                >
                                                                    Shopix Mobile App
                                                                </a>
                                                                <span className="fs-7 text-muted fw-semibold">
                              #45690
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                        {/*begin::Item*/}
                                                        <div className="d-flex align-items-center mb-5">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                              <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="d-flex flex-column">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                                                >
                                                                    "Landing UI Design" Launch
                                                                </a>
                                                                <span className="fs-7 text-muted fw-semibold">
                              #24005
                            </span>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                    </div>
                                                    {/*end::Items*/}
                                                </div>
                                                {/*end::Recently viewed*/}
                                                {/*begin::Empty*/}
                                                <div
                                                    data-kt-search-element="empty"
                                                    className="text-center d-none"
                                                >
                                                    {/*begin::Icon*/}
                                                    <div className="pt-10 pb-10">
                                                        <i className="ki-duotone ki-search-list fs-4x opacity-50">
                                                            <span className="path1"/>
                                                            <span className="path2"/>
                                                            <span className="path3"/>
                                                        </i>{" "}
                                                    </div>
                                                    {/*end::Icon*/}
                                                    {/*begin::Message*/}
                                                    <div className="pb-15 fw-semibold">
                                                        <h3 className="text-gray-600 fs-5 mb-2">
                                                            No result found
                                                        </h3>
                                                        <div className="text-muted fs-7">
                                                            Please try again with a different query
                                                        </div>
                                                    </div>
                                                    {/*end::Message*/}
                                                </div>
                                                {/*end::Empty*/}{" "}
                                            </div>
                                            {/*end::Wrapper*/}
                                            {/*begin::Preferences*/}
                                            <form
                                                data-kt-search-element="advanced-options-form"
                                                className="pt-1 d-none"
                                            >
                                                {/*begin::Heading*/}
                                                <h3 className="fw-semibold text-gray-900 mb-7">
                                                    Advanced Search
                                                </h3>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-5">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm form-control-solid"
                                                        placeholder="Contains the word"
                                                        name="query"
                                                    />
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-5">
                                                    {/*begin::Radio group*/}
                                                    <div className="nav-group nav-group-fluid">
                                                        {/*begin::Option*/}
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                className="btn-check"
                                                                name="type"
                                                                defaultValue="has"
                                                                defaultChecked="checked"
                                                            />
                                                            <span
                                                                className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                            All
                          </span>
                                                        </label>
                                                        {/*end::Option*/}
                                                        {/*begin::Option*/}
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                className="btn-check"
                                                                name="type"
                                                                defaultValue="users"
                                                            />
                                                            <span
                                                                className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Users
                          </span>
                                                        </label>
                                                        {/*end::Option*/}
                                                        {/*begin::Option*/}
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                className="btn-check"
                                                                name="type"
                                                                defaultValue="orders"
                                                            />
                                                            <span
                                                                className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Orders
                          </span>
                                                        </label>
                                                        {/*end::Option*/}
                                                        {/*begin::Option*/}
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                className="btn-check"
                                                                name="type"
                                                                defaultValue="projects"
                                                            />
                                                            <span
                                                                className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Projects
                          </span>
                                                        </label>
                                                        {/*end::Option*/}
                                                    </div>
                                                    {/*end::Radio group*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-5">
                                                    <input
                                                        type="text"
                                                        name="assignedto"
                                                        className="form-control form-control-sm form-control-solid"
                                                        placeholder="Assigned to"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-5">
                                                    <input
                                                        type="text"
                                                        name="collaborators"
                                                        className="form-control form-control-sm form-control-solid"
                                                        placeholder="Collaborators"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-5">
                                                    {/*begin::Radio group*/}
                                                    <div className="nav-group nav-group-fluid">
                                                        {/*begin::Option*/}
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                className="btn-check"
                                                                name="attachment"
                                                                defaultValue="has"
                                                                defaultChecked="checked"
                                                            />
                                                            <span
                                                                className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                            Has attachment
                          </span>
                                                        </label>
                                                        {/*end::Option*/}
                                                        {/*begin::Option*/}
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                className="btn-check"
                                                                name="attachment"
                                                                defaultValue="any"
                                                            />
                                                            <span
                                                                className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Any
                          </span>
                                                        </label>
                                                        {/*end::Option*/}
                                                    </div>
                                                    {/*end::Radio group*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-5">
                                                    <select
                                                        name="timezone"
                                                        aria-label="Select a Timezone"
                                                        data-control="select2"
                                                        data-dropdown-parent="#kt_header_search"
                                                        data-placeholder="date_period"
                                                        className="form-select form-select-sm form-select-solid select2-hidden-accessible"
                                                        data-select2-id="select2-data-1-33mo"
                                                        tabIndex={-1}
                                                        aria-hidden="true"
                                                        data-kt-initialized={1}
                                                    >
                                                        <option
                                                            value="next"
                                                            data-select2-id="select2-data-3-7hog"
                                                        >
                                                            Within the next
                                                        </option>
                                                        <option value="last">Within the last</option>
                                                        <option value="between">Between</option>
                                                        <option value="on">On</option>
                                                    </select>
                                                    <span
                                                        className="select2 select2-container select2-container--bootstrap5"
                                                        dir="ltr"
                                                        data-select2-id="select2-data-2-pnv4"
                                                        style={{width: "100%"}}
                                                    >
                        <span className="selection">
                          <span
                              className="select2-selection select2-selection--single form-select form-select-sm form-select-solid"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-timezone-vg-container"
                              aria-controls="select2-timezone-vg-container"
                          >
                            <span
                                className="select2-selection__rendered"
                                id="select2-timezone-vg-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Within the next"
                            >
                              Within the next
                            </span>
                            <span
                                className="select2-selection__arrow"
                                role="presentation"
                            >
                              <b role="presentation"/>
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true"/>
                      </span>
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="row mb-8">
                                                    {/*begin::Col*/}
                                                    <div className="col-6">
                                                        <input
                                                            type="number"
                                                            name="date_number"
                                                            className="form-control form-control-sm form-control-solid"
                                                            placeholder="Lenght"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                    {/*end::Col*/}
                                                    {/*begin::Col*/}
                                                    <div className="col-6">
                                                        <select
                                                            name="date_typer"
                                                            aria-label="Select a Timezone"
                                                            data-control="select2"
                                                            data-dropdown-parent="#kt_header_search"
                                                            data-placeholder="Period"
                                                            className="form-select form-select-sm form-select-solid select2-hidden-accessible"
                                                            data-select2-id="select2-data-4-oqim"
                                                            tabIndex={-1}
                                                            aria-hidden="true"
                                                            data-kt-initialized={1}
                                                        >
                                                            <option
                                                                value="days"
                                                                data-select2-id="select2-data-6-4yhr"
                                                            >
                                                                Days
                                                            </option>
                                                            <option value="weeks">Weeks</option>
                                                            <option value="months">Months</option>
                                                            <option value="years">Years</option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--bootstrap5"
                                                            dir="ltr"
                                                            data-select2-id="select2-data-5-zxa8"
                                                            style={{width: "100%"}}
                                                        >
                          <span className="selection">
                            <span
                                className="select2-selection select2-selection--single form-select form-select-sm form-select-solid"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-date_typer-19-container"
                                aria-controls="select2-date_typer-19-container"
                            >
                              <span
                                  className="select2-selection__rendered"
                                  id="select2-date_typer-19-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Days"
                              >
                                Days
                              </span>
                              <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                              >
                                <b role="presentation"/>
                              </span>
                            </span>
                          </span>
                          <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                          />
                        </span>
                                                    </div>
                                                    {/*end::Col*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        type="reset"
                                                        className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                                        data-kt-search-element="advanced-options-form-cancel"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <a
                                                        href="/keen/demo1/utilities/search/horizontal.html"
                                                        className="btn btn-sm fw-bold btn-primary"
                                                        data-kt-search-element="advanced-options-form-search"
                                                    >
                                                        Search
                                                    </a>
                                                </div>
                                                {/*end::Actions*/}
                                            </form>
                                            {/*end::Preferences*/}
                                            {/*begin::Preferences*/}
                                            <form
                                                data-kt-search-element="preferences"
                                                className="pt-1 d-none"
                                            >
                                                {/*begin::Heading*/}
                                                <h3 className="fw-semibold text-gray-900 mb-7">
                                                    Search Preferences
                                                </h3>
                                                {/*end::Heading*/}
                                                {/*begin::Input group*/}
                                                <div className="pb-4 border-bottom">
                                                    <label
                                                        className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Projects
                        </span>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue={1}
                                                            defaultChecked="checked"
                                                        />
                                                    </label>
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="py-4 border-bottom">
                                                    <label
                                                        className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Targets
                        </span>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue={1}
                                                            defaultChecked="checked"
                                                        />
                                                    </label>
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="py-4 border-bottom">
                                                    <label
                                                        className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Affiliate Programs
                        </span>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue={1}
                                                        />
                                                    </label>
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="py-4 border-bottom">
                                                    <label
                                                        className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Referrals
                        </span>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue={1}
                                                            defaultChecked="checked"
                                                        />
                                                    </label>
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="py-4 border-bottom">
                                                    <label
                                                        className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                        <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                          Users
                        </span>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue={1}
                                                        />
                                                    </label>
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Actions*/}
                                                <div className="d-flex justify-content-end pt-7">
                                                    <button
                                                        type="reset"
                                                        className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                                        data-kt-search-element="preferences-dismiss"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-sm fw-bold btn-primary"
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                                {/*end::Actions*/}
                                            </form>
                                            {/*end::Preferences*/}{" "}
                                        </div>
                                        {/*end::Menu*/}
                                    </div>
                                    {/*end::Search*/}{" "}
                                </div>
                                {/*end::Search*/}
                                {/*begin::Activities*/}
                                <div className="app-navbar-item ms-1 ms-lg-3">
                                    {/*begin::Drawer toggle*/}
                                    <div
                                        className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                        id="kt_activities_toggle"
                                    >
                                        <i className="ki-duotone ki-notification-on fs-1">
                                            <span className="path1"/>
                                            <span className="path2"/>
                                            <span className="path3"/>
                                            <span className="path4"/>
                                            <span className="path5"/>
                                        </i>{" "}
                                    </div>
                                    {/*end::Drawer toggle*/}
                                </div>
                                {/*end::Activities*/}
                                {/*begin::Notifications*/}
                                <div className="app-navbar-item ms-1 ms-lg-3">
                                    {/*begin::Menu- wrapper*/}
                                    <div
                                        className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                        data-kt-menu-attach="parent"
                                        data-kt-menu-placement="bottom-end"
                                    >
                                        <i className="ki-duotone ki-notification-status fs-1">
                                            <span className="path1"/>
                                            <span className="path2"/>
                                            <span className="path3"/>
                                            <span className="path4"/>
                                        </i>{" "}
                                    </div>
                                    {/*begin::Menu*/}
                                    <div
                                        className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
                                        data-kt-menu="true"
                                        id="kt_menu_notifications"
                                        style={{}}
                                    >
                                        {/*begin::Heading*/}
                                        <div
                                            className="d-flex flex-column bgi-no-repeat rounded-top"
                                            style={{
                                                backgroundImage:
                                                    'url("/keen/demo1/assets/media/misc/menu-header-bg.jpg")'
                                            }}
                                        >
                                            {/*begin::Title*/}
                                            <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                                                Notifications{" "}
                                                <span className="fs-8 opacity-75 ps-3">24 reports</span>
                                            </h3>
                                            {/*end::Title*/}
                                            {/*begin::Tabs*/}
                                            <ul
                                                className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9"
                                                role="tablist"
                                            >
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                                        data-bs-toggle="tab"
                                                        href="#kt_topbar_notifications_1"
                                                        aria-selected="false"
                                                        tabIndex={-1}
                                                        role="tab"
                                                    >
                                                        Alerts
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                                                        data-bs-toggle="tab"
                                                        href="#kt_topbar_notifications_2"
                                                        aria-selected="true"
                                                        role="tab"
                                                    >
                                                        Updates
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                                        data-bs-toggle="tab"
                                                        href="#kt_topbar_notifications_3"
                                                        aria-selected="false"
                                                        tabIndex={-1}
                                                        role="tab"
                                                    >
                                                        Logs
                                                    </a>
                                                </li>
                                            </ul>
                                            {/*end::Tabs*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Tab content*/}
                                        <div className="tab-content">
                                            {/*begin::Tab panel*/}
                                            <div
                                                className="tab-pane fade"
                                                id="kt_topbar_notifications_1"
                                                role="tabpanel"
                                            >
                                                {/*begin::Items*/}
                                                <div className="scroll-y mh-325px my-5 px-8">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-35px me-4">
                            <span className="symbol-label bg-light-primary">
                              <i className="ki-duotone ki-abstract-28 fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="mb-0 me-2">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                >
                                                                    Project Alice
                                                                </a>
                                                                <div className="text-gray-500 fs-7">
                                                                    Phase 1 development
                                                                </div>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">1 hr</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-35px me-4">
                            <span className="symbol-label bg-light-danger">
                              <i className="ki-duotone ki-information fs-2 text-danger">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="mb-0 me-2">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                >
                                                                    HR Confidential
                                                                </a>
                                                                <div className="text-gray-500 fs-7">
                                                                    Confidential staff documents
                                                                </div>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">2 hrs</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-35px me-4">
                            <span className="symbol-label bg-light-warning">
                              <i className="ki-duotone ki-briefcase fs-2 text-warning">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="mb-0 me-2">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                >
                                                                    Company HR
                                                                </a>
                                                                <div className="text-gray-500 fs-7">
                                                                    Corporeate staff profiles
                                                                </div>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">5 hrs</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-35px me-4">
                            <span className="symbol-label bg-light-success">
                              <i className="ki-duotone ki-abstract-12 fs-2 text-success">
                                <span className="path1"/>
                                <span className="path2"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="mb-0 me-2">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                >
                                                                    Project Redux
                                                                </a>
                                                                <div className="text-gray-500 fs-7">
                                                                    New frontend admin theme
                                                                </div>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">2 days</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-35px me-4">
                            <span className="symbol-label bg-light-primary">
                              <i className="ki-duotone ki-colors-square fs-2 text-primary">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                                <span className="path4"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="mb-0 me-2">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                >
                                                                    Project Breafing
                                                                </a>
                                                                <div className="text-gray-500 fs-7">
                                                                    Product launch status update
                                                                </div>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">21 Jan</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-35px me-4">
                            <span className="symbol-label bg-light-info">
                              <i
                                  className="ki-duotone ki-picture
 fs-2 text-info"
                              />
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="mb-0 me-2">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                >
                                                                    Banner Assets
                                                                </a>
                                                                <div className="text-gray-500 fs-7">
                                                                    Collection of banner images
                                                                </div>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">21 Jan</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Symbol*/}
                                                            <div className="symbol symbol-35px me-4">
                            <span className="symbol-label bg-light-warning">
                              <i className="ki-duotone ki-color-swatch fs-2 text-warning">
                                <span className="path1"/>
                                <span className="path2"/>
                                <span className="path3"/>
                                <span className="path4"/>
                                <span className="path5"/>
                                <span className="path6"/>
                                <span className="path7"/>
                                <span className="path8"/>
                                <span className="path9"/>
                                <span className="path10"/>
                                <span className="path11"/>
                                <span className="path12"/>
                                <span className="path13"/>
                                <span className="path14"/>
                                <span className="path15"/>
                                <span className="path16"/>
                                <span className="path17"/>
                                <span className="path18"/>
                                <span className="path19"/>
                                <span className="path20"/>
                                <span className="path21"/>
                              </i>
                            </span>
                                                            </div>
                                                            {/*end::Symbol*/}
                                                            {/*begin::Title*/}
                                                            <div className="mb-0 me-2">
                                                                <a
                                                                    href="#"
                                                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                                                >
                                                                    Icon Assets
                                                                </a>
                                                                <div className="text-gray-500 fs-7">
                                                                    Collection of SVG icons
                                                                </div>
                                                            </div>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">20 March</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Items*/}
                                                {/*begin::View more*/}
                                                <div className="py-3 text-center border-top">
                                                    <a
                                                        href="/keen/demo1/pages/user-profile/activity.html"
                                                        className="btn btn-color-gray-600 btn-active-color-primary"
                                                    >
                                                        View All
                                                        <i className="ki-duotone ki-arrow-right fs-5">
                                                            <span className="path1"/>
                                                            <span className="path2"/>
                                                        </i>{" "}
                                                    </a>
                                                </div>
                                                {/*end::View more*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                            {/*begin::Tab panel*/}
                                            <div
                                                className="tab-pane fade show active"
                                                id="kt_topbar_notifications_2"
                                                role="tabpanel"
                                            >
                                                {/*begin::Wrapper*/}
                                                <div className="d-flex flex-column px-9">
                                                    {/*begin::Section*/}
                                                    <div className="pt-10 pb-0">
                                                        {/*begin::Title*/}
                                                        <h3 className="text-gray-900 text-center fw-bold">
                                                            Get Pro Access
                                                        </h3>
                                                        {/*end::Title*/}
                                                        {/*begin::Text*/}
                                                        <div className="text-center text-gray-600 fw-semibold pt-1">
                                                            Outlines keep you honest. They stoping you from
                                                            amazing poorly about drive
                                                        </div>
                                                        {/*end::Text*/}
                                                        {/*begin::Action*/}
                                                        <div className="text-center mt-5 mb-9">
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm btn-primary px-6"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_upgrade_plan"
                                                            >
                                                                Upgrade
                                                            </a>
                                                        </div>
                                                        {/*end::Action*/}
                                                    </div>
                                                    {/*end::Section*/}
                                                    {/*begin::Illustration*/}
                                                    <div className="text-center px-4">
                                                        <img
                                                            className="mw-100 mh-200px"
                                                            alt="image"
                                                            src="/keen/demo1/assets/media/illustrations/sketchy-1/1.png"
                                                        />
                                                    </div>
                                                    {/*end::Illustration*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                            {/*begin::Tab panel*/}
                                            <div
                                                className="tab-pane fade"
                                                id="kt_topbar_notifications_3"
                                                role="tabpanel"
                                            >
                                                {/*begin::Items*/}
                                                <div className="scroll-y mh-325px my-5 px-8">
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-success me-4">
                            200 OK
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                New order
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">Just now</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-danger me-4">
                            500 ERR
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                New customer
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">2 hrs</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-success me-4">
                            200 OK
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Payment process
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">5 hrs</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-warning me-4">
                            300 WRN
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Search query
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">2 days</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-success me-4">
                            200 OK
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                API connection
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">1 week</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-success me-4">
                            200 OK
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Database restore
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">Mar 5</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-warning me-4">
                            300 WRN
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                System update
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">May 15</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-warning me-4">
                            300 WRN
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Server OS update
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">Apr 3</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-warning me-4">
                            300 WRN
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                API rollback
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">Jun 30</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-danger me-4">
                            500 ERR
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Refund process
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">Jul 10</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-danger me-4">
                            500 ERR
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Withdrawal process
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">Sep 10</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                    {/*begin::Item*/}
                                                    <div className="d-flex flex-stack py-4">
                                                        {/*begin::Section*/}
                                                        <div className="d-flex align-items-center me-2">
                                                            {/*begin::Code*/}
                                                            <span className="w-70px badge badge-light-danger me-4">
                            500 ERR
                          </span>
                                                            {/*end::Code*/}
                                                            {/*begin::Title*/}
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 text-hover-primary fw-semibold"
                                                            >
                                                                Mail tasks
                                                            </a>
                                                            {/*end::Title*/}
                                                        </div>
                                                        {/*end::Section*/}
                                                        {/*begin::Label*/}
                                                        <span className="badge badge-light fs-8">Dec 10</span>
                                                        {/*end::Label*/}
                                                    </div>
                                                    {/*end::Item*/}
                                                </div>
                                                {/*end::Items*/}
                                                {/*begin::View more*/}
                                                <div className="py-3 text-center border-top">
                                                    <a
                                                        href="/keen/demo1/pages/user-profile/activity.html"
                                                        className="btn btn-color-gray-600 btn-active-color-primary"
                                                    >
                                                        View All
                                                        <i className="ki-duotone ki-arrow-right fs-5">
                                                            <span className="path1"/>
                                                            <span className="path2"/>
                                                        </i>{" "}
                                                    </a>
                                                </div>
                                                {/*end::View more*/}
                                            </div>
                                            {/*end::Tab panel*/}
                                        </div>
                                        {/*end::Tab content*/}
                                    </div>
                                    {/*end::Menu*/} {/*end::Menu wrapper*/}
                                </div>
                                {/*end::Notifications*/}
                                {/*begin::Chat*/}
                                <div className="app-navbar-item ms-1 ms-lg-3">
                                    {/*begin::Menu wrapper*/}
                                    <div
                                        className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative"
                                        id="kt_drawer_chat_toggle"
                                    >
                                        <i className="ki-duotone ki-message-text-2 fs-1">
                                            <span className="path1"/>
                                            <span className="path2"/>
                                            <span className="path3"/>
                                        </i>
                                        <span
                                            className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                                    </div>
                                    {/*end::Menu wrapper*/}
                                </div>
                                {/*end::Chat*/}
                                {/*begin::Languages*/}
                                <div className="app-navbar-item ms-1 ms-lg-3">
                                    {/*begin::Menu wrapper*/}
                                    <div
                                        className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                        data-kt-menu-attach="parent"
                                        data-kt-menu-placement="bottom-end"
                                    >
                <span className="symbol symbol-20px">
                  <img
                      className="rounded"
                      src="/keen/demo1/assets/media/flags/united-states.svg"
                      alt=""
                  />
                </span>
                                    </div>
                                    {/*begin::User account menu*/}
                                    <div
                                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-175px"
                                        data-kt-menu="true"
                                    >
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                            <a
                                                href="/keen/demo1/account/settings.html"
                                                className="menu-link d-flex px-5 active"
                                            >
                    <span className="symbol symbol-20px me-4">
                      <img
                          className="rounded-1"
                          src="/keen/demo1/assets/media/flags/united-states.svg"
                          alt=""
                      />
                    </span>
                                                English
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                            <a
                                                href="/keen/demo1/account/settings.html"
                                                className="menu-link d-flex px-5"
                                            >
                    <span className="symbol symbol-20px me-4">
                      <img
                          className="rounded-1"
                          src="/keen/demo1/assets/media/flags/spain.svg"
                          alt=""
                      />
                    </span>
                                                Spanish
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                            <a
                                                href="/keen/demo1/account/settings.html"
                                                className="menu-link d-flex px-5"
                                            >
                    <span className="symbol symbol-20px me-4">
                      <img
                          className="rounded-1"
                          src="/keen/demo1/assets/media/flags/germany.svg"
                          alt=""
                      />
                    </span>
                                                German
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                            <a
                                                href="/keen/demo1/account/settings.html"
                                                className="menu-link d-flex px-5"
                                            >
                    <span className="symbol symbol-20px me-4">
                      <img
                          className="rounded-1"
                          src="/keen/demo1/assets/media/flags/japan.svg"
                          alt=""
                      />
                    </span>
                                                Japanese
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                            <a
                                                href="/keen/demo1/account/settings.html"
                                                className="menu-link d-flex px-5"
                                            >
                    <span className="symbol symbol-20px me-4">
                      <img
                          className="rounded-1"
                          src="/keen/demo1/assets/media/flags/france.svg"
                          alt=""
                      />
                    </span>
                                                French
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                    </div>
                                    {/*end::User account menu*/}
                                    {/*end::Menu wrapper*/}
                                </div>
                                {/*end::Languages*/}
                                {/*begin::Theme mode*/}
                                <div className="app-navbar-item ms-1 ms-lg-3">
                                    {/*begin::Menu toggle*/}
                                    <a
                                        href="#"
                                        className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
                                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                        data-kt-menu-attach="parent"
                                        data-kt-menu-placement="bottom-end"
                                    >
                                        <i className="ki-duotone ki-night-day theme-light-show fs-1">
                                            <span className="path1"/>
                                            <span className="path2"/>
                                            <span className="path3"/>
                                            <span className="path4"/>
                                            <span className="path5"/>
                                            <span className="path6"/>
                                            <span className="path7"/>
                                            <span className="path8"/>
                                            <span className="path9"/>
                                            <span className="path10"/>
                                        </i>{" "}
                                        <i className="ki-duotone ki-moon theme-dark-show fs-1">
                                            <span className="path1"/>
                                            <span className="path2"/>
                                        </i>
                                    </a>
                                    {/*begin::Menu toggle*/}
                                    {/*begin::Menu*/}
                                    <div
                                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                                        data-kt-menu="true"
                                        data-kt-element="theme-mode-menu"
                                        style={{}}
                                    >
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3 my-0">
                                            <a
                                                href="#"
                                                className="menu-link px-3 py-2 active"
                                                data-kt-element="mode"
                                                data-kt-value="light"
                                            >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-duotone ki-night-day fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                        <span className="path5"/>
                        <span className="path6"/>
                        <span className="path7"/>
                        <span className="path8"/>
                        <span className="path9"/>
                        <span className="path10"/>
                      </i>{" "}
                    </span>
                                                <span className="menu-title">Light</span>
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3 my-0">
                                            <a
                                                href="#"
                                                className="menu-link px-3 py-2"
                                                data-kt-element="mode"
                                                data-kt-value="dark"
                                            >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-duotone ki-moon fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>{" "}
                    </span>
                                                <span className="menu-title">Dark</span>
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3 my-0">
                                            <a
                                                href="#"
                                                className="menu-link px-3 py-2"
                                                data-kt-element="mode"
                                                data-kt-value="system"
                                            >
                    <span className="menu-icon" data-kt-element="icon">
                      <i className="ki-duotone ki-screen fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                      </i>{" "}
                    </span>
                                                <span className="menu-title">System</span>
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu*/}
                                </div>
                                {/*end::Theme mode*/}
                                {/*begin::User menu*/}
                                <div
                                    className="app-navbar-item ms-2 ms-1 ms-lg-3"
                                    id="kt_header_user_menu_toggle"
                                >
                                    {/*begin::Menu wrapper*/}
                                    <div
                                        className="cursor-pointer symbol symbol-35px symbol-md-40px"
                                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                        data-kt-menu-attach="parent"
                                        data-kt-menu-placement="bottom-end"
                                    >
                                        <img
                                            src="/keen/demo1/assets/media/avatars/300-3.jpg"
                                            alt="user"
                                        />
                                    </div>
                                    {/*begin::User account menu*/}
                                    <div
                                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                                        data-kt-menu="true"
                                    >
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-3">
                                            <div className="menu-content d-flex align-items-center px-3">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-50px me-5">
                                                    <img
                                                        alt="Logo"
                                                        src="/keen/demo1/assets/media/avatars/300-3.jpg"
                                                    />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Username*/}
                                                <div className="d-flex flex-column">
                                                    <div className="fw-bold d-flex align-items-center fs-5">
                                                        Max Smith{" "}
                                                        <span
                                                            className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                          Pro
                        </span>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="fw-semibold text-muted text-hover-primary fs-7"
                                                    >
                                                        max@kt.com{" "}
                                                    </a>
                                                </div>
                                                {/*end::Username*/}
                                            </div>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu separator*/}
                                        <div className="separator my-2"/>
                                        {/*end::Menu separator*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-5">
                                            <a
                                                href="/keen/demo1/account/overview.html"
                                                className="menu-link px-5"
                                            >
                                                My Profile
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-5">
                                            <a
                                                href="/keen/demo1/apps/projects/list.html"
                                                className="menu-link px-5"
                                            >
                                                <span className="menu-text">My Projects</span>
                                                <span className="menu-badge">
                      <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                        3
                      </span>
                    </span>
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div
                                            className="menu-item px-5"
                                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                            data-kt-menu-placement="left-start"
                                            data-kt-menu-offset="-15px, 0"
                                        >
                                            <a href="#" className="menu-link px-5">
                                                <span className="menu-title">My Subscription</span>
                                                <span className="menu-arrow"/>
                                            </a>
                                            {/*begin::Menu sub*/}
                                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/referrals.html"
                                                        className="menu-link px-5"
                                                    >
                                                        Referrals
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/billing.html"
                                                        className="menu-link px-5"
                                                    >
                                                        Billing
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/statements.html"
                                                        className="menu-link px-5"
                                                    >
                                                        Payments
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/statements.html"
                                                        className="menu-link d-flex flex-stack px-5"
                                                    >
                                                        Statements
                                                        <span
                                                            className="ms-2 lh-0"
                                                            data-bs-toggle="tooltip"
                                                            aria-label="View your statements"
                                                            data-bs-original-title="View your statements"
                                                            data-kt-initialized={1}
                                                        >
                          <i className="ki-duotone ki-information-5 fs-5">
                            <span className="path1"/>
                            <span className="path2"/>
                            <span className="path3"/>
                          </i>{" "}
                        </span>
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu separator*/}
                                                <div className="separator my-2"/>
                                                {/*end::Menu separator*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <div className="menu-content px-3">
                                                        <label
                                                            className="form-check form-switch form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input w-30px h-20px"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                                defaultChecked="checked"
                                                                name="notifications"
                                                            />
                                                            <span className="form-check-label text-muted fs-7">
                            Notifications
                          </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                {/*end::Menu item*/}
                                            </div>
                                            {/*end::Menu sub*/}
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-5">
                                            <a
                                                href="/keen/demo1/account/statements.html"
                                                className="menu-link px-5"
                                            >
                                                My Statements
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu separator*/}
                                        <div className="separator my-2"/>
                                        {/*end::Menu separator*/}
                                        {/*begin::Menu item*/}
                                        <div
                                            className="menu-item px-5"
                                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                            data-kt-menu-placement="left-start"
                                            data-kt-menu-offset="-15px, 0"
                                        >
                                            <a href="#" className="menu-link px-5">
                    <span className="menu-title position-relative">
                      Language
                      <span
                          className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                        English{" "}
                          <img
                              className="w-15px h-15px rounded-1 ms-2"
                              src="/keen/demo1/assets/media/flags/united-states.svg"
                              alt=""
                          />
                      </span>
                    </span>
                                            </a>
                                            {/*begin::Menu sub*/}
                                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/settings.html"
                                                        className="menu-link d-flex px-5 active"
                                                    >
                        <span className="symbol symbol-20px me-4">
                          <img
                              className="rounded-1"
                              src="/keen/demo1/assets/media/flags/united-states.svg"
                              alt=""
                          />
                        </span>
                                                        English
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/settings.html"
                                                        className="menu-link d-flex px-5"
                                                    >
                        <span className="symbol symbol-20px me-4">
                          <img
                              className="rounded-1"
                              src="/keen/demo1/assets/media/flags/spain.svg"
                              alt=""
                          />
                        </span>
                                                        Spanish
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/settings.html"
                                                        className="menu-link d-flex px-5"
                                                    >
                        <span className="symbol symbol-20px me-4">
                          <img
                              className="rounded-1"
                              src="/keen/demo1/assets/media/flags/germany.svg"
                              alt=""
                          />
                        </span>
                                                        German
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/settings.html"
                                                        className="menu-link d-flex px-5"
                                                    >
                        <span className="symbol symbol-20px me-4">
                          <img
                              className="rounded-1"
                              src="/keen/demo1/assets/media/flags/japan.svg"
                              alt=""
                          />
                        </span>
                                                        Japanese
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href="/keen/demo1/account/settings.html"
                                                        className="menu-link d-flex px-5"
                                                    >
                        <span className="symbol symbol-20px me-4">
                          <img
                              className="rounded-1"
                              src="/keen/demo1/assets/media/flags/france.svg"
                              alt=""
                          />
                        </span>
                                                        French
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                            </div>
                                            {/*end::Menu sub*/}
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-5 my-1">
                                            <a
                                                href="/keen/demo1/account/settings.html"
                                                className="menu-link px-5"
                                            >
                                                Account Settings
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu item*/}
                                        <div className="menu-item px-5">
                                            <a
                                                href="/keen/demo1/authentication/layouts/corporate/sign-in.html"
                                                className="menu-link px-5"
                                            >
                                                Sign Out
                                            </a>
                                        </div>
                                        {/*end::Menu item*/}
                                    </div>
                                    {/*end::User account menu*/}
                                    {/*end::Menu wrapper*/}
                                </div>
                                {/*end::User menu*/}
                                {/*begin::Header menu toggle*/}
                                <div
                                    className="app-navbar-item d-lg-none ms-2 me-n2"
                                    title="Show header menu"
                                >
                                    <div
                                        className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px"
                                        id="kt_app_header_menu_toggle"
                                    >
                                        <i className="ki-duotone ki-element-4 fs-1">
                                            <span className="path1"/>
                                            <span className="path2"/>
                                        </i>{" "}
                                    </div>
                                </div>
                                {/*end::Header menu toggle*/}
                            </div>
                            {/*end::Navbar*/}
                        </div>
                        {/*end::Header wrapper*/}{" "}
                    </div>
                    {/*end::Header container*/}
                </div>
                {/*end::Header*/}
                {/*begin::Wrapper*/}
                <div
                    className="app-wrapper  flex-column flex-row-fluid "
                    id="kt_app_wrapper"
                >
                    {/*begin::Sidebar*/}
                    <div
                        id="kt_app_sidebar"
                        className="app-sidebar flex-column"
                        data-kt-drawer="true"
                        data-kt-drawer-name="app-sidebar"
                        data-kt-drawer-activate="{default: true, lg: false}"
                        data-kt-drawer-overlay="true"
                        data-kt-drawer-width="225px"
                        data-kt-drawer-direction="start"
                        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
                    >
                        {/*begin::Logo*/}
                        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                            {/*begin::Logo image*/}
                            <a href="/keen/demo1/index.html">
                                <img
                                    alt="Logo"
                                    src="/keen/demo1/assets/media/logos/default-dark.svg"
                                    className="h-30px app-sidebar-logo-default"
                                />
                            </a>
                            {/*end::Logo image*/}
                            {/*begin::Sidebar toggle*/}
                            <div
                                id="kt_app_sidebar_toggle"
                                className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate "
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
                            {/*end::Sidebar toggle*/}
                        </div>
                        {/*end::Logo*/}
                        {/*begin::sidebar menu*/}
                        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                            {/*begin::Menu wrapper*/}
                            <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
                                {/*begin::Scroll wrapper*/}
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
                                    style={{height: 568}}
                                >
                                    {/*begin::Menu*/}
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
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item here show menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-category fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                      </i>
                    </span>
                    <span className="menu-title">Dashboards</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a className="menu-link" href="/keen/demo1/index.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Default</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/dashboards/projects.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Projects</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link active"
                                                        href="/keen/demo1/dashboards/ecommerce.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">eCommerce</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/dashboards/marketing.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Marketing</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                <div
                                                    className="menu-inner flex-column collapse "
                                                    id="kt_app_sidebar_menu_dashboards_collapse"
                                                >
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link"
                                                            href="/keen/demo1/dashboards/social.html"
                                                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"/>
                          </span>
                                                            <span className="menu-title">Social</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link"
                                                            href="/keen/demo1/dashboards/bidding.html"
                                                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"/>
                          </span>
                                                            <span className="menu-title">Bidding</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link"
                                                            href="/keen/demo1/dashboards/online-courses.html"
                                                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"/>
                          </span>
                                                            <span className="menu-title">Online Courses</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/*begin:Menu link*/}
                                                        <a
                                                            className="menu-link"
                                                            href="/keen/demo1/dashboards/logistics.html"
                                                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"/>
                          </span>
                                                            <span className="menu-title">Logistics</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                </div>
                                                <div className="menu-item">
                                                    <div className="menu-content">
                                                        <a
                                                            className="btn btn-flex btn-color-gray-500 btn-icon-gray-500 d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed"
                                                            data-bs-toggle="collapse"
                                                            href="#kt_app_sidebar_menu_dashboards_collapse"
                                                            data-kt-toggle-text="Show Less"
                                                        >
                          <span data-kt-toggle-text-target="true">
                            Show 4 More
                          </span>{" "}
                                                            <i className="ki-duotone ki-minus-square toggle-on fs-2 me-0 pe-0">
                                                                <span className="path1"/>
                                                                <span className="path2"/>
                                                            </i>
                                                            <i className="ki-duotone ki-plus-square toggle-off fs-2 me-0 pe-0">
                                                                <span className="path1"/>
                                                                <span className="path2"/>
                                                                <span className="path3"/>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item pt-5">
                                            {/*begin:Menu content*/}
                                            <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Pages
                    </span>
                                            </div>
                                            {/*end:Menu content*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-address-book fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                      </i>
                    </span>
                    <span className="menu-title">User Profile</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/user-profile/overview.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Overview</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/user-profile/projects.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Projects</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/user-profile/campaigns.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Campaigns</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/user-profile/documents.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Documents</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/user-profile/followers.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Followers</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/user-profile/activity.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Activity</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-educare fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                      </i>
                    </span>
                    <span className="menu-title">Account</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/overview.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Overview</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/settings.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/security.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Security</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/activity.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Activity</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/billing.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Billing</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/statements.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Statements</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/referrals.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Referrals</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/api-keys.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">API Keys</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/account/logs.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Logs</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-user fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Authentication</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Corporate</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/layouts/corporate/sign-in.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Sign-In</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/layouts/corporate/sign-up.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Sign-Up</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/layouts/corporate/two-factor.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Two-Factor</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/layouts/corporate/reset-password.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Reset Password</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/layouts/corporate/new-password.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">New Password</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/extended/multi-steps-sign-up.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">
                              Multi-Steps Sign-Up
                            </span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/extended/two-factor-auth.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Two Factor Auth</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Email Templates</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/email/welcome-message.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Welcome Message</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/email/reset-password.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Reset Password</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/email/subscription-confirmed.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">
                              Subscription Confirmed
                            </span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/email/card-declined.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">
                              Credit Card Declined
                            </span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/email/promo-1.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Promo 1</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/email/promo-2.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Promo 2</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/authentication/email/promo-3.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Promo 3</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/welcome.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Welcome Message</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/verify-email.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Verify Email</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/coming-soon.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Coming Soon</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/password-confirmation.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">
                          Password Confirmation
                        </span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/account-deactivated.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Account Deactivation</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/error-404.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Error 404</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/error-500.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Error 500</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/authentication/general/maintenance.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Maintenance</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-file fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Corporate</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/about.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">About</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/team.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Our Team</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/faq.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">FAQ</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/contact.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Contact Us</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/pricing.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Pricing</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/licenses.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Licenses</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/sitemap.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Sitemap</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-39 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Social</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/social/feeds.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Feeds</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/social/activity.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Activty</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/social/followers.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Followers</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/social/settings.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-bank fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Blog</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/blog/home.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Blog Home</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/blog/post.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Blog Post</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-call fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                        <span className="path5"/>
                        <span className="path6"/>
                        <span className="path7"/>
                        <span className="path8"/>
                      </i>
                    </span>
                    <span className="menu-title">Careers</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/careers/list.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Careers List</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/pages/careers/apply.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Careers Apply</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-color-swatch fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                        <span className="path5"/>
                        <span className="path6"/>
                        <span className="path7"/>
                        <span className="path8"/>
                        <span className="path9"/>
                        <span className="path10"/>
                        <span className="path11"/>
                        <span className="path12"/>
                        <span className="path13"/>
                        <span className="path14"/>
                        <span className="path15"/>
                        <span className="path16"/>
                        <span className="path17"/>
                        <span className="path18"/>
                        <span className="path19"/>
                        <span className="path20"/>
                        <span className="path21"/>
                      </i>
                    </span>
                    <span className="menu-title">Utilities</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Modals</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="click"
                                                            className="menu-item menu-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                            <span className="menu-title">General</span>
                            <span className="menu-arrow"/>
                          </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/general/invite-friends.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Invite Friends
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/general/view-users.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">View Users</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/general/select-users.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">Select Users</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/general/upgrade-plan.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">Upgrade Plan</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/general/share-earn.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Share &amp; Earn
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="click"
                                                            className="menu-item menu-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                            <span className="menu-title">Forms</span>
                            <span className="menu-arrow"/>
                          </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/forms/new-target.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">New Target</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/forms/new-card.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">New Card</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/forms/new-address.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">New Address</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/forms/create-api-key.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Create API Key
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/forms/bidding.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">Bidding</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="click"
                                                            className="menu-item menu-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                            <span className="menu-title">Wizards</span>
                            <span className="menu-arrow"/>
                          </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/wizards/create-app.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">Create App</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/wizards/create-campaign.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Create Campaign
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/wizards/create-account.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Create Business Acc
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/wizards/create-project.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Create Project
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/wizards/top-up-wallet.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Top Up Wallet
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/wizards/offer-a-deal.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">Offer a Deal</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/wizards/two-factor-authentication.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Two Factor Auth
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="click"
                                                            className="menu-item menu-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                            <span className="menu-title">Search</span>
                            <span className="menu-arrow"/>
                          </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/search/users.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">Users</span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link"
                                                                        href="/keen/demo1/utilities/modals/search/select-location.html"
                                                                    >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"/>
                                </span>
                                                                        <span className="menu-title">
                                  Select Location
                                </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Search</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/search/horizontal.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Horizontal</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/search/vertical.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Vertical</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/search/users.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Users</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/search/select-location.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Location</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Wizards</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/horizontal.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Horizontal</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/vertical.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Vertical</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/two-factor-authentication.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Two Factor Auth</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/create-app.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Create App</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/create-campaign.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Create Campaign</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/create-account.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Create Account</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/create-project.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Create Project</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/modals/wizards/top-up-wallet.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Top Up Wallet</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/utilities/wizards/offer-a-deal.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Offer a Deal</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item pt-5">
                                            {/*begin:Menu content*/}
                                            <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Apps
                    </span>
                                            </div>
                                            {/*end:Menu content*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-41 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Projects</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/list.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">My Projects</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/project.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">View Project</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/targets.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Targets</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/budget.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Budget</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/users.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Users</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/files.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Files</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/activity.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Activity</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/projects/settings.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-basket fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                      </i>
                    </span>
                    <span className="menu-title">eCommerce</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Catalog</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/catalog/products.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Products</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/catalog/categories.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Categories</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/catalog/add-product.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Add Product</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/catalog/edit-product.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Edit Product</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/catalog/add-category.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Add Category</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/catalog/edit-category.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Edit Category</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Sales</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/sales/listing.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Orders Listing</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/sales/details.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Order Details</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/sales/add-order.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Add Order</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/sales/edit-order.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Edit Order</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Customers</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/customers/listing.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Customer Listing</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/customers/details.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Customer Details</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Reports</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/reports/view.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Products Viewed</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/reports/sales.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Sales</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/reports/returns.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Returns</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/reports/customer-orders.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Customer Orders</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/ecommerce/reports/shipping.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Shipping</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/ecommerce/settings.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-25 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Contacts</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/contacts/getting-started.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Getting Started</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/contacts/add-contact.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Add Contact</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/contacts/edit-contact.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Edit Contact</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/contacts/view-contact.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">View Contact</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-chart fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Support Center</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/support-center/overview.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Overview</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion mb-1"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Tickets</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/support-center/tickets/list.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Tickets List</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/support-center/tickets/view.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">View Ticket</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion mb-1"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Tutorials</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/support-center/tutorials/list.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Tutorials List</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/support-center/tutorials/post.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Tutorial Post</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/support-center/faq.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">FAQ</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/support-center/licenses.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Licenses</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/support-center/contact.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Contact Us</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-28 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">User Management</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion mb-1"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Users</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/user-management/users/list.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Users List</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/user-management/users/view.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">View User</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">Roles</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/user-management/roles/list.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Roles List</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/user-management/roles/view.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">View Role</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/user-management/permissions.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Permissions</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-38 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Customers</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/customers/getting-started.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Getting Started</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/customers/list.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Customer Listing</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/customers/view.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Customer Details</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-map fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                      </i>
                    </span>
                    <span className="menu-title">Subscription</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/subscriptions/getting-started.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Getting Started</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/subscriptions/list.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Subscription List</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/subscriptions/add.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Add Subscription</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/subscriptions/view.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">View Subscription</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-credit-cart fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Invoice Manager</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="click"
                                                    className="menu-item menu-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                        <span className="menu-title">View Invoices</span>
                        <span className="menu-arrow"/>
                      </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/invoices/view/invoice-1.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Invoice 1</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/invoices/view/invoice-2.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Invoice 2</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link"
                                                                href="/keen/demo1/apps/invoices/view/invoice-3.html"
                                                            >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"/>
                            </span>
                                                                <span className="menu-title">Invoice 3</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/invoices/create.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Create Invoice</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-switch fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">File Manager</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/file-manager/folders.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Folders</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/file-manager/files.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Files</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/file-manager/blank.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Blank Directory</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/file-manager/settings.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Settings</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-sms fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Inbox</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/inbox/listing.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Messages</span>
                                                        <span className="menu-badge">
                          <span className="badge badge-success">3</span>
                        </span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/inbox/compose.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Compose</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/inbox/reply.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">View &amp; Reply</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-message-text-2 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                      </i>
                    </span>
                    <span className="menu-title">Chat</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/chat/private.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Private Chat</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/chat/group.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Group Chat</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/apps/chat/drawer.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Drawer Chat</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
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
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item pt-5">
                                            {/*begin:Menu content*/}
                                            <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Layouts
                    </span>
                                            </div>
                                            {/*end:Menu content*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="click"
                                            className="menu-item menu-accordion"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-element-7 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                    <span className="menu-title">Layout Options</span>
                    <span className="menu-arrow"/>
                  </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-accordion">
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/layouts/light-sidebar.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Light Sidebar</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/layouts/dark-sidebar.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Dark Sidebar</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/layouts/light-header.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Light Header</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link"
                                                        href="/keen/demo1/layouts/dark-header.html"
                                                    >
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"/>
                        </span>
                                                        <span className="menu-title">Dark Header</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a
                                                className="menu-link"
                                                href="/keen/demo1/layout-builder.html"
                                            >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-13 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                                                <span className="menu-title">Layout Builder</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item pt-5">
                                            {/*begin:Menu content*/}
                                            <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">
                      Help
                    </span>
                                            </div>
                                            {/*end:Menu content*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a
                                                className="menu-link"
                                                href="https://preview.keenthemes.com/html/keen/docs/base/utilities"
                                                target="_blank"
                                            >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-rocket fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                                                <span className="menu-title">Components</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a
                                                className="menu-link"
                                                href="https://preview.keenthemes.com/html/keen/docs"
                                                target="_blank"
                                            >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-abstract-26 fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                      </i>
                    </span>
                                                <span className="menu-title">Documentation</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a
                                                className="menu-link"
                                                href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog"
                                                target="_blank"
                                            >
                    <span className="menu-icon">
                      <i className="ki-duotone ki-code fs-2">
                        <span className="path1"/>
                        <span className="path2"/>
                        <span className="path3"/>
                        <span className="path4"/>
                      </i>
                    </span>
                                                <span className="menu-title">Changelog v3.0.8</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}{" "}
                                    </div>
                                    {/*end::Menu*/}
                                </div>
                                {/*end::Scroll wrapper*/}
                            </div>
                            {/*end::Menu wrapper*/}
                        </div>
                        {/*end::sidebar menu*/}
                        {/*begin::Footer*/}
                        <div
                            className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
                            id="kt_app_sidebar_footer"
                        >
                            <a
                                href="https://preview.keenthemes.com/html/keen/docs"
                                className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-dismiss-="click"
                                data-bs-original-title="200+ in-house components and 3rd-party plugins"
                                data-kt-initialized={1}
                            >
                                <span className="btn-label">Docs &amp; Components</span>
                                <i className="ki-duotone ki-document btn-icon fs-2 m-0">
                                    <span className="path1"/>
                                    <span className="path2"/>
                                </i>{" "}
                            </a>
                        </div>
                        {/*end::Footer*/}{" "}
                    </div>
                    {/*end::Sidebar*/}
                    {/*begin::Main*/}
                    <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
                        {/*begin::Content wrapper*/}
                        <div className="d-flex flex-column flex-column-fluid">
                            {/*begin::Toolbar*/}
                            <div id="kt_app_toolbar" className="app-toolbar  py-3 py-lg-6 ">
                                {/*begin::Toolbar container*/}
                                <div
                                    id="kt_app_toolbar_container"
                                    className="app-container  container-xxl d-flex flex-stack "
                                >
                                    {/*begin::Page title*/}
                                    <div
                                        className="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                                        {/*begin::Title*/}
                                        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                                            eCommerce Dashboard
                                        </h1>
                                        {/*end::Title*/}
                                    </div>
                                    {/*end::Page title*/}
                                    {/*begin::Actions*/}
                                    <div className="d-flex align-items-center gap-2 gap-lg-3">
                                        {/*begin::Secondary button*/}
                                        <a
                                            href="/keen/demo1/apps/ecommerce/sales/listing.html"
                                            className="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary"
                                        >
                                            Manage Sales{" "}
                                        </a>
                                        {/*end::Secondary button*/}
                                        {/*begin::Primary button*/}
                                        <a
                                            href="/keen/demo1/apps/ecommerce/catalog/add-product.html"
                                            className="btn btn-sm fw-bold btn-primary"
                                        >
                                            Add Product{" "}
                                        </a>
                                        {/*end::Primary button*/}
                                    </div>
                                    {/*end::Actions*/}
                                </div>
                                {/*end::Toolbar container*/}
                            </div>
                            {/*end::Toolbar*/}
                            {/*begin::Content*/}
                            <div id="kt_app_content" className="app-content  flex-column-fluid ">
                                {/*begin::Content container*/}
                                <div
                                    id="kt_app_content_container"
                                    className="app-container  container-xxl "
                                ></div>
                                {/*end::Content container*/}
                            </div>
                            {/*end::Content*/}
                        </div>
                        {/*end::Content wrapper*/}
                        {/*begin::Footer*/}
                        <div id="kt_app_footer" className="app-footer ">
                            {/*begin::Footer container*/}
                            <div
                                className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
                                {/*begin::Copyright*/}
                                <div className="text-gray-900 order-2 order-md-1">
                                    <span className="text-muted fw-semibold me-1">2024©</span>
                                    <a
                                        href="https://keenthemes.com"
                                        target="_blank"
                                        className="text-gray-800 text-hover-primary"
                                    >
                                        Keenthemes
                                    </a>
                                </div>
                                {/*end::Copyright*/}
                                {/*begin::Menu*/}
                                <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                    <li className="menu-item">
                                        <a
                                            href="https://keenthemes.com"
                                            target="_blank"
                                            className="menu-link px-2"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            href="https://devs.keenthemes.com"
                                            target="_blank"
                                            className="menu-link px-2"
                                        >
                                            Support
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
                                            target="_blank"
                                            className="menu-link px-2"
                                        >
                                            Purchase
                                        </a>
                                    </li>
                                </ul>
                                {/*end::Menu*/}{" "}
                            </div>
                            {/*end::Footer container*/}
                        </div>
                        {/*end::Footer*/}{" "}
                    </div>
                    {/*end:::Main*/}
                </div>
                {/*end::Wrapper*/}
            </div>
            {/*end::Page*/}
        </div>


    )
}
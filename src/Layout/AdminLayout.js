import Footer from "../Components/Admin/Footer";
import Header from "../Components/Admin/Header";
import AdminNav from "../Components/Admin/AdminNav";
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
                <Header />
                <div
                    className="app-wrapper  flex-column flex-row-fluid "
                    id="kt_app_wrapper"
                >
                    <AdminNav />
                    <div className="app-main flex-column flex-row-fluid">
                        <div className="d-flex flex-column flex-column-fluid">
                            <div id="kt_app_content" className="app-content  flex-column-fluid ">
                                <div
                                    id="kt_app_content_container"
                                    className="app-container container-xxl py-9"
                                >
                                        <Outlet />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )
}
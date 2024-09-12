
import {Outlet} from "react-router-dom";
import AccountNav from "./AccountNav";

export default function Account() {
    return (
        <div className="d-flex flex-row">
            <div className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px">
                <AccountNav />
            </div>
            <div className="w-100 flex-lg-row-fluid ms-lg-13">
                <div className="card mb-5 mb-xl-8">
                    <div className="card-body">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}
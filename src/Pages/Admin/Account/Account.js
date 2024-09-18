
import {Outlet} from "react-router-dom";
import AccountNav from "./AccountNav";
export default function Account() {
    return (
        <div className="d-flex flex-row">
            <div className="d-lg-flex flex-column flex-lg-row-auto w-lg-250px">
                <AccountNav />
            </div>
            <div className="w-100 flex-lg-row-fluid ms-lg-13">
                <Outlet/>
            </div>
        </div>
    )
}
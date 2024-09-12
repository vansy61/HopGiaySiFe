import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            Đây là trang chủ
            <Link to={"/admin"}>Vào admin</Link>
        </div>
    )
}
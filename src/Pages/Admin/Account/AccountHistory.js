import {useEffect, useState} from "react";
import UserSessionApi from "../../../Apis/UserSesstionApi";
import LoadingTable from "../../../Components/Loading/LoadingTable";
import AccountHistoryItem from "./AccountHistoryItem";
import {useDispatch} from "react-redux";
import {openDialog} from "../../../Redux/confirmDialog/confirmDialogSlice";

export default function AccountHistory() {
    const [history, setHistory] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (history) {
            return;
        }
        const fetchData = async () => {
            try {
                const res = await UserSessionApi.getCurrentUserSessions();
                setHistory(res.data);
            }catch (error) {
                console.error(error);
            }

        }
        fetchData();
    }, [history])



    if(history === null) {
        return <LoadingTable />
    }

    const handleLogoutSession = (sessionId) => {
        dispatch(openDialog({
            title: 'Xác Nhận Đăng Xuất',
            message: 'Bạn có chắc chắn muốn đăng xuất phiên đăng nhập này không?',
            onConfirm: async () => {
                try {
                    await UserSessionApi.logout(sessionId);
                    setHistory(null);
                }catch (error) {
                    console.error(error);
                }
            }
        }));
    }


    return (
        <div className="card mb-5 mb-xl-8">
            <div className="card-body">
                <div>
                    {
                        history.map(history => <AccountHistoryItem history={history}
                                                                   handleClick={handleLogoutSession}/>)
                    }
                </div>
            </div>
        </div>
    )
}
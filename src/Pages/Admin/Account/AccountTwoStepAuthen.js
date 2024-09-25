import {useDispatch, useSelector} from "react-redux";
import UserApi from "../../../Apis/UserApi";
import {fetchUser} from "../../../Redux/auth/authSlice";
import {openDialog} from "../../../Redux/confirmDialog/confirmDialogSlice";
import Helper from "../../../utils/helpers";

export default function AccountTwoStepAuthentication() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const statusText = user.enableTwoFactor ? "tắt" : "bật";

    const changeTwoStepFactor = async () => {
        dispatch(openDialog({
            title: 'Xác Nhận',
            message: `Bạn có muốn ${statusText} xác thực hai yếu tố không ?`,
            onConfirm: async () => {
                try {
                    await UserApi.updateUser(user.id, {
                        enableTwoFactor: !user.enableTwoFactor
                    })
                    dispatch(fetchUser());
                    Helper.toastSuccess(`${statusText} xác thực 2 yếu tố thành công!`)
                }catch (error) {
                    console.log(error);
                }
            }
        }));
    }

    return (
        <div className="card py-4 mb-5 mb-xl-8">
            <div className="card-header border-0">
                <div className="card-title flex-column">
                    <h2 className="mb-1">Xác thực hai bước</h2>
                    <div className="fs-6 fw-semibold text-muted">
                        Giúp tài khoản của an toàn hơn với bước xác thực thứ hai
                    </div>

                </div>
                <div className="card-toolbar">
                    <button type="button"
                            className={`btn btn-light-${user.enableTwoFactor ? 'danger' : 'primary'} btn-sm`}
                            onClick={changeTwoStepFactor}
                    >
                        <i className="ki-duotone ki-fingerprint-scanning fs-3">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                        </i>
                        {statusText} xác thực hai bước
                    </button>
                </div>
            </div>
            <div className={"card-body py-0"}>
                <div className="separator separator-dashed my-5"></div>
                <div className="text-gray-600">
                    Sau khi đăng nhập mã otp sẽ được gửi về mail {user.email} của bạn, bạn cần nhập đúng mã otp để đăng nhập!
                </div>
            </div>
        </div>
    )
}
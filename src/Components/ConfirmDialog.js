import { useDispatch, useSelector } from 'react-redux';
import {closeDialog} from "../Redux/confirmDialog/confirmDialogSlice";

export default function ConfirmDialog() {
    const dispatch = useDispatch();
    const { isOpen, title, message, onConfirm, onCancel } = useSelector((state) => state.confirmDialog);

    if (!isOpen) return null;

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        dispatch(closeDialog());
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        dispatch(closeDialog());
    };

    return (
        <div className="custom-dialog">
            <div className="dialog-overlay"></div>
            <div className="dialog-content">
                <div className="dialog-header">
                    <h2>{title}</h2>
                </div>
                <div className="dialog-body">
                    <p className={"fs-4"}>{message}</p>
                </div>
                <div className="dialog-footer text-end">
                    <button className="btn btn-light-danger me-4" onClick={handleCancel}>
                        Hủy
                    </button>
                    <button className="btn btn-primary" onClick={handleConfirm}>
                        Xác Nhận
                    </button>
                </div>
            </div>
        </div>
    );
}
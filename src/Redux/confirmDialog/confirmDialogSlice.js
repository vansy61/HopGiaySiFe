import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    title: '',
    message: '',
    onConfirm: null,
    onCancel: null
};

const confirmDialogSlice = createSlice({
    name: 'confirmDialog',
    initialState,
    reducers: {
        openDialog: (state, action) => {
            const { title, message, onConfirm, onCancel } = action.payload;
            state.isOpen = true;
            state.title = title;
            state.message = message;
            state.onConfirm = onConfirm;
            state.onCancel = onCancel;
        },
        closeDialog: (state) => {
            state.isOpen = false;
            state.title = '';
            state.message = '';
            state.onConfirm = null;
            state.onCancel = null;
        }
    }
});

export const { openDialog, closeDialog } = confirmDialogSlice.actions;

export default confirmDialogSlice.reducer;
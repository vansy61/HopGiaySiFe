import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import confirmDialogReducer from './confirmDialog/confirmDialogSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    confirmDialog: confirmDialogReducer
  },
});

export default store;
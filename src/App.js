import './css/Custom.css';
import './css/Theme.css';
import './css/Theme2.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import Error404 from "./Pages/404";
import store from './Redux/store';
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Pages/Authen/Login";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Signup from "./Pages/Authen/Signup";
import VerifyEmail from "./Pages/Authen/VerifyEmail";
import VerifySuccess from "./Pages/Authen/VerifySuccess";
import Home from "./Pages/Home/Home";
import Account from "./Pages/Admin/Account/Account";
import AccountInfo from "./Pages/Admin/Account/AccountInfo";
import AccountHistory from "./Pages/Admin/Account/AccountHistory";
import ConfirmDialog from "./Components/ConfirmDialog";
import AccountSecurity from "./Pages/Admin/Account/AccountSecurity";


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route path="/verify-success" element={<VerifySuccess />} />

                  <Route element={<ProtectedRoute />}>
                      <Route path={"/admin"} element={<AdminLayout/>}>
                          <Route index element={<Navigate to="/admin/dashboard" />} />
                          <Route path={"/admin/dashboard"} element={<Dashboard />} />
                          <Route path={"/admin/account"} element={<Account />}>
                              <Route index element={<Navigate to="/admin/account/info" />} />
                              <Route path={"/admin/account/info"} element={<AccountInfo />} />
                              <Route path={"/admin/account/history"} element={<AccountHistory />} />
                              <Route path={"/admin/account/security"} element={<AccountSecurity />} />
                          </Route>
                      </Route>
                  </Route>
                  <Route path="*" element={<Error404 />} />
              </Routes>
              <ToastContainer />
              <ConfirmDialog />
          </BrowserRouter>
      </Provider>
  );
}

export default App;

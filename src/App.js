import './css/Custom.css';
import './css/Theme.css';
import './css/Theme2.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import Error404 from "./Pages/404";
import store from './Redux/store';
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Pages/Authen/Login";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Signup from "./Pages/Authen/Signup";
import VerifyEmail from "./Pages/Authen/VerifyEmail";


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />

                  <Route element={<ProtectedRoute />}>
                      <Route path={"/admin"} element={<AdminLayout/>}>
                          <Route index element={<Dashboard />} />
                      </Route>
                  </Route>
                  <Route path="*" element={<Error404 />} />
              </Routes>
              <ToastContainer />
          </BrowserRouter>
      </Provider>
  );
}

export default App;

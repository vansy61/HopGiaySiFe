import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {fetchUser, setToken} from "../Redux/auth/authSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
      dispatch(fetchUser());
    }
  }, [dispatch, token]);
  return (
      token ?
          <>
      {
        status !== "succeeded" ?
        <Outlet /> : <div>Loading</div>
      } </>: <Navigate to="/login" />
  );
};

export default ProtectedRoute;
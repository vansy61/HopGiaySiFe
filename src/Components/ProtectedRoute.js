import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {fetchUser} from "../Redux/auth/authSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);


  useEffect(() => {
    if(token === null || user !== null) {
      return;
    }
      dispatch(fetchUser());
  }, [dispatch]);

  return (
      token ?
          <>
      {
        status === "succeeded" ?
        <Outlet /> : <div>Loading</div>
      } </>: <Navigate to="/login" />
  );
};

export default ProtectedRoute;
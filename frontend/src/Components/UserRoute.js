import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './helpers/auth';



const UserRoute = () => {
    isAuthenticated() && isAuthenticated().role === 0 ? <Outlet /> : <Navigate to="/Signin" />;
}


export default UserRoute;
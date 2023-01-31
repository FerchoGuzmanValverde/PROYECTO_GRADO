/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AuthUser from '../assets/auth/authUser';


const privatelayout = () => {
    //const [user,setUser] = useState();
    let token=AuthUser()
    const location = useLocation();
    
    return (
        token ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default privatelayout
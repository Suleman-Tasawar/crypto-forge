import React,{useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const RestrictedRoute = () => {
    const { authStatus} = useContext(AuthContext);
    try {
        return authStatus? <Outlet /> : <Navigate to="/loginMenu/Login" />;
    } catch (error) {
        console.error('Failed to retrieve or parse authentication status:', error);
    }
};

export default RestrictedRoute;

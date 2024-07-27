import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RestrictedRoute = () => {
    try {
        const userStatus = JSON.parse(localStorage.getItem('authStatus'));

        return userStatus ? <Outlet /> : <Navigate to="/loginMenu/Login" />;
    } catch (error) {
        console.error('Failed to retrieve or parse authentication status:', error);
    }
};

export default RestrictedRoute;

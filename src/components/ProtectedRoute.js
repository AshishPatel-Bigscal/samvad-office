import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem("userStatus") || false
    if (!isAuth) {
        return <Navigate to="/" />
    }
    return children
}
export default ProtectedRoute
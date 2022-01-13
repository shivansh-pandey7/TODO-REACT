import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...restOfProps}) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    return (
        <div>
            
        </div>
    )
}

export default ProtectedRoute

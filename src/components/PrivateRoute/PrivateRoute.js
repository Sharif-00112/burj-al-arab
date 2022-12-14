import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    // const {children, ...rest} = props;

    const {user} = useAuth();
 
    return (
        user.email ? children 
        : 
        <Navigate to="/login" />
    );
};

export default PrivateRoute;
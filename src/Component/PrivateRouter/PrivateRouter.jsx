import React, { Children, useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
     if(loading){
        return <span className="loading loading-ring loading-md"></span>;
     }
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRouter;
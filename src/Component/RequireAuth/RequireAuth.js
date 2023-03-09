import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

        if(loading){
            return (<Loading></Loading>);
        }

       if(user){
            return children;
        }

        if(!user){
            return <Navigate to="/login" state={{ from: location }} replace />;
        }

};

export default RequireAuth;
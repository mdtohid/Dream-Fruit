import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import auth from '../../../firebase.init';
import useJwtToken from '../../../hooks/useJwtToken';
import google from '../../../img/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const userEmail = user?.user?.email;
    const {token} = useJwtToken(userEmail);
    // console.log(token);

    if(user){
        navigate(from, {replace:true})
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
                <div className='mt-3 mx-2'><p>or</p></div>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
            </div>
            <button onClick={()=>{signInWithGoogle()}} className='btn btn-info w-50 d-block mx-auto my-2'>
                <span>Google Sign in</span>
                <img className='ms-2' src={google} alt="" />
            </button>
        </div>
    );
};

export default SocialLogin;
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useJwtToken from '../../../hooks/useJwtToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const onSubmit = async data => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email, password);
    }

    const userEmail = user?.user?.email;
    const { token } = useJwtToken(userEmail);
    // console.log(token);



    if (loading) {
        <Loading></Loading>
    }

    console.log();

    if (user) {
        navigate(from, { replace: true });
    }




    return (
        <div className=''>
            <h1 className='text-center text-info mt-5'>Please Login</h1>
            <form className='w-50 mx-auto mt-2' onSubmit={handleSubmit(onSubmit)}>
                <label>Email address</label><br />
                <input type='email' className='w-100 p-2 form-control' {...register("email", { required: true })} required /> <br />

                <label>Password</label><br />
                <input className='w-100 mt-1 p-2 form-control' type="password" {...register("password", { required: true })} required /> <br />

                {
                    error ?
                        <p className='text-danger'>Wrong password. Please check your password</p>
                        :
                        <></>
                }

                <div className='w-100 text-center'><input className='btn btn-info w-50' type="submit" /></div>

                <p className='mt-3 text-decoration-none'>Are you new? <Link className='text-decoration-none' to='/registration'>Please Registration</Link> </p>

                <SocialLogin></SocialLogin>

                <div className='mt-5'>
                    <p>
                        <button className="btn btn-info " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            Get User Email and Password
                        </button>
                    </p>
                    <div style={{ minHeight: '120px' }}>
                        <div class="collapse collapse-horizontal" id="collapseWidthExample">
                            <div class="card card-body" style={{ width: '280px' }}>
                                <h5>Email and Password:</h5>
                                <p className='fw-semibold mt-2'>user@mail.com</p>
                                <p className='fw-semibold'>123456</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>



        </div>
    );
};

export default Login;
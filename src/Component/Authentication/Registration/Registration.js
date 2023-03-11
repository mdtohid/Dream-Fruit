import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import auth from '../../../firebase.init';
import useJwtToken from '../../../hooks/useJwtToken';

const Registration = () => {
    const [user, setUser] = useState([]);
    const [errorMsg, setError] = useState('');
    const [successMsg, setSuccess] = useState('');
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const userEmail = user?.email;
    const [token] = useJwtToken(userEmail);
    if(token){
        reset();
        navigate('/');
    }


    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user);
                    
                    
            })

            .catch((error) => {
                // console.log(error.Code);
                // console.log(error.message);
                if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    setError('Email already in use')
                }
                else {
                    setError(error.message);
                }
            });
    }



    return (
        <div className='w-100'>
            <h1 className='text-center text-info mt-5'>Please Registration</h1>
            <form className='w-50 mx-auto mt-2' onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label><br />
                <input type='text' className='w-100 p-2 form-control' {...register("name", { required: true })} required /> <br />

                <label>Email address</label><br />
                <input type='email' className='w-100 p-2 form-control' {...register("email", { required: true })} required /> <br />

                <label>Password</label><br />
                <input className='w-100 mt-1 p-2 form-control' type="password" {...register("password", { required: true })} required /> <br />

                <p className='text-danger'>{errorMsg ? errorMsg : ''}</p>

                <div className='w-100 text-center'><input className='btn btn-info w-50' type="submit" /></div>
            </form>
        </div>
    );
};

export default Registration;
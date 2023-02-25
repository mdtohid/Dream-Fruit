import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className='w-100'>
            <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <label>Email address</label><br />
                <input type='email' className='w-100 p-2 form-control' {...register("email", { required: true })} required /> <br />

                <label>Password</label><br />
                <input className='w-100 mt-1 p-2 form-control' type="password" {...register("password", { required: true })} required /> <br />

                <div className='w-100 text-center'><input className='btn btn-info w-50' type="submit" /></div>
            </form>
        </div>
    );
};

export default Login;
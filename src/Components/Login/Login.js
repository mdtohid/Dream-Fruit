import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const emailRef = useRef('');    
    const passwordRef = useRef('');

    const [signInWithEmailAndPassword,  user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user2] = useSignInWithGoogle(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-3'>Please login</h1>
               <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default Login;
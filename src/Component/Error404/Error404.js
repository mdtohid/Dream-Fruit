import React from 'react';
import notFoundImg from '../../img/page-not-found.png';
const Error404 = () => {
    return (
        <div className='text-center text-danger my-5'>
            <h1>Not Found</h1>
            <img src={notFoundImg} alt="" srcset="" />
        </div>
    );
};

export default Error404;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJwtToken = (email) => {
    const [token, setToken]= useState('');
    
    useEffect(() => {
        const getToken = async () => {
            if (email) {
                // console.log(email)
                const { data } = await axios.post('https://server-11-1eu8n6xit-mdtohid.vercel.app/login', { email });
                setToken(data?.accessToken);
                // console.log(data?.accessToken);
                localStorage.setItem('accessToken', data?.accessToken);
            }
        }
        getToken();
    }, [email]);
    return [token];
};

export default useJwtToken;
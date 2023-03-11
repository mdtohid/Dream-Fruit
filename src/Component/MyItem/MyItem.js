import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [signOut, loading2, error2] = useSignOut(auth);
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('https://server-11-1eu8n6xit-mdtohid.vercel.app/myItem')
    //         .then(function (response) {
    //             // handle success
    //             setItems(response.data);

    //         })
    // }, []);

    useEffect(() => {
        if (loading) {
            <Loading></Loading>
        }
        else {
            const getItem = async () => {
                try {
                    // console.log(user?.email)
                    const { data } = await axios.get(`https://server-11-1eu8n6xit-mdtohid.vercel.app/myItem?email=${user?.email}`,
                        {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            }
                        }
                    );
                    setItems(data);
                }

                catch (error) {
                    console.log(error.message);
                    if (error.response?.status === 401 || error.response?.status === 403) {
                        signOut(auth);
                        navigate('/login');
                    }
                }
            }
            getItem();
        }
    }, [user?.email]);


    const removeFromMyItem = (id) => {
        axios.delete(`https://server-11-1eu8n6xit-mdtohid.vercel.app/myItem/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response.data);
                console.log(response.data.result);
                console.log(response.data.result1);
                setItems(response.data.result1);
            })
    }

    return (
        <div>
            {
                items.map(item =>
                    <div className="card w-50 d-flex flex-lg-row align-items-center col-8  mx-auto my-5 p-2">
                        <div className='col-lg-4'>
                            <img src={item.photoUrl} className="card-img-top my-1 p-2" alt="..." />
                        </div>
                        <div className='col-lg-8'>
                            <div className="card-body p-2">
                                <h5 className="card-title">{item.name}</h5>
                                <h6>Price: {item.price}</h6>
                                <h6>Quantity: {item.quantity}</h6>
                                <h6>Supplier: {item.supplierName}</h6>
                                <p className="card-text">{item.description}</p>
                            </div>

                            <button type="button" className="btn btn-danger  ms-2 my-3" onClick={() => removeFromMyItem(item._id)}>Remove from My item</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyItem;



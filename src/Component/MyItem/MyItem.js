import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/myItem')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setItems(response.data);

            })
    }, [items])
    console.log(items);
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

                            <button type="button" className="btn btn-danger  ms-2 my-3">Remove from My item</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyItem;



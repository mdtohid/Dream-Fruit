import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageInventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigate = useNavigate();
    const handleAddItem = () => {
        navigate('/addItem')
    }

    const handleDeleteProduct = async (id) => {
        await fetch(`http://localhost:5000/inventory/${id}`, {
            method: "DELETE"
        })
            .then((result) => {
                console.log(result);
                fetch('http://localhost:5000/manageInventory')
                    .then(res => res.json())
                    .then(data => setProducts(data))
            })
    }

    const handleMyItem = async (id) => {
        await axios.post(`http://localhost:5000/myItem/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then(function (response) {
                // handle success
                console.log(response);
            })
    }

    const navigateProductDetails=(_id)=>{
        navigate(`/inventory/${_id}`);
    }

    return (
        <div className='my-5'>
            {products.map(product =>
                <div key={product._id} className="card col-5 mx-auto mb-3 p-1">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-md-4 me-5">
                            <img src={product.photoUrl} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6>Price:{product.price}</h6>
                                <h6>Quantity:{product.quantity}</h6>
                                <h6>Supplier Name:{product.supplierName}</h6>
                                <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-warning w-75 mt-2'>Delete</button>

                                <button onClick={() => handleMyItem(product._id)} className='btn btn-info w-75 mt-2'>Add my item</button>

                                <button onClick={() => navigateProductDetails(product._id)} className='btn btn-success w-75 mt-2'>Stock update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='text-center my-5'>
                <button className='btn btn-success' onClick={handleAddItem}>Add new item</button>
            </div>
        </div>
    );
};

export default ManageInventory;
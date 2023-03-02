import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigate = useNavigate();
    const handleAddItem=()=>{
        navigate('/addItem')
    }
    return (
        <div className='my-5'>
            {products.map(product =>
                <div className="card col-5 mx-auto mb-3 p-1">
                    <div className="row g-0">
                        <div className="col-md-4 me-5">
                            <img src={product.photoUrl} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6>Price:{product.price}</h6>
                                <h6>Quantity:{product.quantity}</h6>
                                <h6>Supplier Name:{product.supplierName}</h6>
                               <button className='btn btn-warning w-75 mt-2'>Delete</button>
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
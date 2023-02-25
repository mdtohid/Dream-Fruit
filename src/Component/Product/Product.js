import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {id, name, price, quantity, description, photoUrl}=product;
    const navigate = useNavigate();
    const navigateProductDetails=(id)=>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img src={photoUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: {price}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <p className="card-text">{description}</p>
                </div>
                <button type="button" className="btn btn-outline-info w-50 ms-3 mb-3" onClick={()=>navigateProductDetails(id)}>Stock update</button>
            </div>
        </div>
    );
};

export default Product;
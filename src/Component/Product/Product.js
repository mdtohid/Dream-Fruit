import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name, price, amount, description, photoUrl}=product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={photoUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: {price}</h6>
                    <h6>Amount: {amount}</h6>
                    <p className="card-text">{description}</p>
                </div>
                <Link to='/detailedItem'><button type="button" className="btn btn-outline-info w-50 ms-3 mb-3">Stock update</button></Link>
            </div>
        </div>
    );
};

export default Product;
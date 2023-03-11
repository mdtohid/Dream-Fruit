import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://server-11-1eu8n6xit-mdtohid.vercel.app/inventory')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <div className='m-5' id='inventory'>
            <h1 className='text-info text-center mt-5'>Inventories</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5 mb-5">
                {
                    products.slice(0, 6).map(product =>
                            <Product product={product} key={product._id}></Product>
                    )
                }
            </div>
            <div className='text-end'>
                <Link to='/inventory:/id'  className='text-primary text-decoration-none'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventory;
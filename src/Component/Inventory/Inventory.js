import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-5">
            {
                products.map(product =>
                    <Product></Product>
                )
            }
        </div>
    );
};

export default Inventory;
import React from 'react';
import useProduct from '../../hooks/useProduct';

const Blog = () => {
    const [products]= useProduct();
    return (
        <div>
            {
                products.map(product=><h1>hi</h1>)
            }
        </div>
    );
};

export default Blog;
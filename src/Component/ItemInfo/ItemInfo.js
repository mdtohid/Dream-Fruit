import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';

const ItemInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [stockQuantity, setStockQuantity] = useState(0);

    useEffect(() => {
        fetch('/Fruits.json')
            .then(res => res.json())
            .then(data => {
                const item = data.find(product => product.id == id);
                setProduct(item);
                setQuantity(item.quantity);
            });
    }, [id]);

    const handleDelivery = () => {
        const newQuantity = quantity - 1;
        setQuantity(parseInt(newQuantity));
        console.log(stockQuantity);
    }

    const handleNumber=(event)=>{
        const restockQuantity = event.target.value;
        setStockQuantity(parseInt(restockQuantity) + parseInt(quantity));
        console.log(stockQuantity);
    }

    const handleRestock=(event)=>{
        event.preventDefault();
        setQuantity(parseInt(stockQuantity));
        event.target.reset()
    }


    return (
        <div className="card d-flex flex-lg-row col-8  mx-auto my-5 p-2">
            <div className='col-lg-4'>
                <img src={product.photoUrl} className="card-img-top my-1 p-2" alt="..." />
            </div>
            <div className='col-lg-8'>
                <div className="card-body p-2">
                    <h5 className="card-title">{product.name}</h5>
                    <h6>Price: {product.price}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Supplier: {product.supplierName}</h6>
                    <p className="card-text">{product.description}</p>
                </div>
                
                <button onClick={handleDelivery} type="button" className="btn btn-outline-info w-50 ms-2 mb-3">Delivered</button>

                <form className='d-flex p-2' onSubmit={handleRestock}>
                    <input type="number" onBlur={handleNumber} name="" id="" className='d-inline w-25 p-1 rounded' />
                    <input type="submit"  value="Restock the item" className='btn btn-outline-info' />
                </form>
            </div>
        </div>
    );
};

export default ItemInfo;


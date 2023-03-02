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
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setQuantity(data.quantity);
            });
    }, [id]);

    const handleDelivery = async () => {
        let newQuantity;
        if (quantity > 0) {
            newQuantity = (quantity - 1);
        }
        else {
            newQuantity = 0;
        }
        console.log(newQuantity);
        setQuantity(parseInt(newQuantity));
        // console.log(newQuantity);
        // console.log(quantity);
        await fetch(`http://localhost:5000/inventory/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newQuantity }),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })

    }

    const handleNumber = (event) => {
        const restockQuantity = event.target.value;
        setStockQuantity(parseInt(restockQuantity) + parseInt(quantity));
        console.log(stockQuantity);
    }

    const handleRestock = async(event) => {
        event.preventDefault();
        setQuantity(stockQuantity);
        console.log(stockQuantity);

        let newQuantity;
        if (stockQuantity > 0) {
            newQuantity = stockQuantity;
        }
        else {
            newQuantity = 0;
        }

        await fetch(`http://localhost:5000/inventory/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newQuantity }),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })

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
                    <input type="submit" value="Restock the item" className='btn btn-outline-info' />
                </form>
            </div>
        </div>
    );
};

export default ItemInfo;


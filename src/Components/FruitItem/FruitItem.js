import React, { useEffect } from 'react';
import { Button, CardImg, Image } from 'react-bootstrap';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const FruitItem = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('fruits.json')
        .then(res => res.json())
        .then(data=>setItems(data))
    },[]);
    const itemDetail=(id)=>{
        navigate(`fruit-item/${id}`)

    }
    return (
                        <div id='fruit-item'>
                            <h1 className='text-primary text-center mt-5'>Our Items</h1>
                            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                        {items.map(item=>
                        <div className="col">
                        <div className="card h-100">
                        <CardImg src={item.photoUrl} className="card-img-top" alt="img"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            
                        </div>
                        <Button  onClick={()=>itemDetail(item.id)}>Details</Button>
                        </div>
                    </div>
                     )}
                    </div> 
                        </div>  
    );
};

export default FruitItem;
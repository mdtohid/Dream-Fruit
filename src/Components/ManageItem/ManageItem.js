import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";



const ManageItem = () => {
    const { register, handleSubmit } = useForm();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/fruitItem')
        .then(res => res.json())
        .then(data=>setItems(data))
    },[]);

    const deleteItem= (id)=>{
            const url = `http://localhost:5000/fruitItem/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                const remaining = items.filter(item=>item._id !== id);
                setItems(remaining)
            })
    }

    const onSubmit = data => {
        const url = 'http://localhost:5000/fruitItem';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result)
        })
    };
    return (
        <div>
            <ul>
            {items.map(item=>
            <li>
                <h1 className='d-inline me-2'>{item.name}</h1>
                <button onClick={()=>deleteItem(item._id)}>X</button>
            </li>
                )}
        </ul>
        <div>
            <h1 className='text-primary text-center'>Add Item</h1>
        <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Amount' type="number" {...register("amount")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("photoUrl")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
        </div>
        
    );
};

export default ManageItem;
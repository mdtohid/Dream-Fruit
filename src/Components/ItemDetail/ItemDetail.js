import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const {id} = useParams();
    console.log(id);
    const [service, setService] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/fruitItem/${id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));
        console.log(service)
    }, [id, service._id]);

    const amount = service.amount - 1;
    const newAmount = {amount};

    
    const deliver= (data)=>{ 
        console.log(data)
        const url = `http://localhost:5000/fruitItem/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>setService(result))
    }

    const restockAmount=(event)=>{
        event.preventDefault();
        let inputAmount = event.target.number.value;
        const amount = parseInt(inputAmount) + parseInt(service.amount);
        const newAmount = {amount};
        console.log(amount);
        const url = `http://localhost:5000/fruitItem/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAmount)
        })
        .then(res=>res.json())
        .then(result =>setService(result))
        inputAmount = 0;
    }

    return (
        <div>
                    <Card style={{ width: '50%' }} className='mx-auto'>
        <Card.Img variant="top" src={service.photoUrl} />
        <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>
            {service.description}
            </Card.Text>
            <Card.Text>
            Price: {service.price}TK
            </Card.Text>
            <Card.Text>
            Amount:{service.amount}
            </Card.Text>
            <Button variant="primary" onClick={()=>deliver(newAmount)}>Deliver</Button> <br />
            <form action="" className='mt-2' onSubmit={restockAmount}>
            <input type="number" name="number" placeholder='Restock the items' id="" />
            <input type="submit" value="Restock" />
            </form>
        </Card.Body>
        </Card>
        </div>
    );
};

export default ItemDetail;
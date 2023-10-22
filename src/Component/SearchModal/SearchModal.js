import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import './SearchModal.css';
import { useNavigate } from 'react-router';

const SearchModal = ({ show, handleClose }) => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch('https://server-11-1eu8n6xit-mdtohid.vercel.app/inventory')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    const handleInputChange = async (event) => {
        const query = event.target.value;

        if (query) {
            const filter = products.filter(
                (product) => product.name.toLowerCase().includes(query.toLowerCase())
            );
            console.log(query)
            console.log(filter)

            return setFilteredItems(filter);
        }
        else {
            return setFilteredItems([]);
        }
    };

    const navigate = useNavigate();

    const navigateProductDetails = (_id) => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <input className='searchModalInput' placeholder='Search' type="text" onChange={handleInputChange} />
            </Modal.Header>
            <Modal.Body>
                {
                    filteredItems.map(item =>
                        <Card className='mb-2' onClick={() => {
                            navigateProductDetails(item._id);
                            handleClose()
                        }
                        } >
                            <Card.Body>{item.name}</Card.Body>
                        </Card>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal >
    );
};

export default SearchModal;
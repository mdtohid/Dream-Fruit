import { faArrowRight, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Achievement.css';

const Achievement = () => {
    return (
        <div className='row gx-0 achievement my-5'>
            <div className='text-center text-warning mb-5'>
                <h1>Achievement</h1>
            </div>
            <div className='col marginMd' >
                <Card className='p-2 shadow border-0' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='mb-4'><FontAwesomeIcon
                            className='text-primary' icon={faStar} /> 4.8 Rating</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">
                            <small className='ms-1 text-primary'>+836k</small> Members</Card.Subtitle>
                        <Card.Text className='mb-4'>
                            More than 1 lack customer over countries order fruits.We are also trying to get review from our customer.
                        </Card.Text>
                        <Card.Link href="#" className='text-decoration-none'>Join Our Community
                            <FontAwesomeIcon style={{ width: '10px' }} className='ms-2' icon={faArrowRight}></FontAwesomeIcon>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>

            <div className='col marginMd'>
                <Card className='p-2 shadow-sm border-0' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='mb-4'><FontAwesomeIcon
                            className='text-primary' icon={faTrophy} /> Awards
                        </Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">
                            Best of
                            <small className='mx-1 fs-6 text-danger'>2021</small>
                            on Github</Card.Subtitle>
                        <Card.Text className='mb-4'>
                            We are also 2 time best seller in BD.We are also careful about our customer demand.
                        </Card.Text>
                        <Card.Link href="#" className='text-decoration-none text-dark'>Go To Awards
                            <FontAwesomeIcon style={{ width: '10px' }} className='ms-2 ' icon={faArrowRight}></FontAwesomeIcon>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>

            <div className='col marginMd widthAchievement' >
                <sm>Our Achievement</sm><br />
                <h2>We are stored <br /> natural and pure fruits.</h2>
                <p className=''>
                The Dream Fruit includes all fruits and 100% fruit juice. Fruits may be fresh, frozen, canned, or dried/dehydrated.
                </p>
                <Button className='mt-2 px-4 rounded'>Discover me
                    <FontAwesomeIcon style={{ width: '16px' }} className='ms-2 ' icon={faArrowRight}></FontAwesomeIcon>
                </Button>
            </div>
        </div>
    );
};

export default Achievement;
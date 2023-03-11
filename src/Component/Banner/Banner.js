import React from 'react';
import { Carousel } from 'react-bootstrap';
import fruitsBanner1 from '../../img/fruitsBanner1.jpg';
import fruitsBanner2 from '../../img/fruitsBanner2.jpg';
import fruitsBanner3 from '../../img/fruitsBanner3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={fruitsBanner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First floor</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={fruitsBanner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second floor</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={fruitsBanner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third floor</h3>
                        <p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
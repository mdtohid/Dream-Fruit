import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade className=''>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid banner-carousel"
                        src="http://www.pngall.com/wp-content/uploads/2016/04/Banana-PNG.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-carousel img-fluid"
                        src="https://images.freshop.com/00852201002228/ad2f58915e3267700906f1025ef8917f_medium.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> 
                    <img
                        className="d-block banner-carousel img-fluid"
                        src="http://icons.iconarchive.com/icons/artbees/paradise-fruits/256/Peach-icon.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
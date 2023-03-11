import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../img/google.png';
import twitter from '../../img/Twitter.png';
import linkedin from '../../img/Linkedin.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-5'>
            <div className='d-flex footerTop'>
                <div className='col col-lg-8'>
                    <div className='menu d-flex'>
                        <div className='col row gy-lg-3 gx-lg-4'>
                            <h6><a href="/" className='text-decoration-none text-white'>Home</a></h6>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Home</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Community</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Events</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Contracts</a>
                        </div>
                        <div className='col row gy-lg-3 gx-lg-4'>
                            <h6><a href="/" className='text-decoration-none text-white'>Resources</a></h6>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Blogs</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>News</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Guides</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Help Center</a>
                        </div>
                        <div className='col row gy-lg-3 gx-lg-4'>
                            <h6><a href="/" className='text-decoration-none text-white'>Community</a></h6>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Newsfeed</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Profile</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Friends</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Forums</a>
                        </div>
                        <div className='col row gy-lg-3 gx-lg-4'>
                            <h6><a href="/" className='text-decoration-none text-white'>Main links</a></h6>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Members</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Activity</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Groups</a>
                            <a href="/" className='text-decoration-none text-white  aTagMenu'>Private Group</a>
                        </div>

                    </div>
                </div>

                <div className='col col-lg-4'>
                    <div className='subscribedFooter'>
                        <h5 className='text-white'>
                            Subscribe 
                        </h5>
                        <p className='text-white my-4'>
                            Subscribe to be the first one to know about updates. Enter your email
                        </p>
                        <Form className="d-flex searchFooter rounded-3">
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                className="border-0 bg-dark text-white"
                                aria-label="Search"
                            />
                            <Button className="bg-white text-dark border-0 px-2">Subscribe</Button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='footerBottom d-flex justify-content-between align-items-baseline'>
                <div className='text-white'>
                    <p><small>BD Creative Agency.</small></p>
                </div>

                <div className='text-white'>
                    <>Dream Fruit</>
                </div>

                <div className='text-white'>
                    <a className='me-2' href="/">
                        <img src={twitter} alt="" />
                    </a>
                    <a className='me-2' href="/">
                        <img src={linkedin} alt="" />
                    </a>
                    <a className='me-2' href="/">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="/">
                        <img src={instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
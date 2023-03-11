import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import offer1st from '../../img/offer1st.jpg';
import offer2nd from '../../img/offer2nd.jpg';
import offer3rd from '../../img/offer3rd.jpg';
import './OfferItem.css';

const OfferItem = () => {
    return (
        <div className='offer my-5'>
            <div className='text-center text-success mb-5'>
                <h1>Latest offer</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 offerItems">
                <div className="col">
                    <div className="card border-0">
                        <img src={offer1st} alt="" srcset="" className='card-img-top' />
                        <div className="card-body d-flex">
                            <div className="col-1 line">
                                {/* .......line....... */}
                            </div>

                            <div className='col mx-1'>
                                <h5 className="card-title">50% discount!!!</h5>
                                <p className="card-text mt-3">
                                    <small>Continue Reading
                                        <FontAwesomeIcon icon={faArrowRight} className='offerArrow align-middle ms-1'></FontAwesomeIcon>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <img src={offer2nd} alt="" srcset="" className='card-img-top' />
                        <div className="card-body d-flex">
                            <div className="col-1 line">
                                {/* .......line....... */}
                            </div>

                            <div className='col mx-1'>
                                <h5 className="card-title">40% discount!!!</h5>
                                <p className="card-text text-primary mt-3">
                                    <small>Continue Reading
                                        <FontAwesomeIcon icon={faArrowRight} className='offerArrow align-middle ms-1'></FontAwesomeIcon>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <img src={offer3rd} alt="" srcset="" className='card-img-top' />
                        <div className="card-body d-flex">
                            <div className="col-1 line">
                                {/* .......line....... */}
                            </div>

                            <div className='col mx-1'>
                                <h5 className="card-title">Get gifted!!!
                                </h5>
                                <p className="card-text mt-3">
                                    <small>Continue Reading
                                        <FontAwesomeIcon icon={faArrowRight} className='offerArrow align-middle ms-1'></FontAwesomeIcon>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferItem;
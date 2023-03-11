import React from 'react';
import { Link } from 'react-router-dom';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OfferItem from '../OfferItem/OfferItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Achievement></Achievement>
            <OfferItem></OfferItem>
        </div>
    );
};

export default Home;
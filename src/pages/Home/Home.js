import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FeatureProduct from './FeatureProduct/FeatureProduct';
import State from './Stat/State';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div className="Home">
            <div className="home__content">
                <Banner />
                <FeatureProduct />
                <State />
                <Reviews />
            </div>
        </div>
    );
};

export default Home;
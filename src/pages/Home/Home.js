import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FeatureProduct from './FeatureProduct/FeatureProduct';

const Home = () => {
    return (
        <div className="Home">
            <div className="home__content">
                <Banner />
                <FeatureProduct />
            </div>
        </div>
    );
};

export default Home;
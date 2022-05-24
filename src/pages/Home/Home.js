import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FeatureProduct from './FeatureProduct/FeatureProduct';
import State from './Stat/State';
import Reviews from './Reviews/Reviews';
import ProductCategories from './ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className="Home">
            <div className="home__content">
                <Banner />
                <ProductCategories />
                <FeatureProduct />
                <State />
                <Reviews />
            </div>
        </div>
    );
};

export default Home;
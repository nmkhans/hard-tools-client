import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className="Home">
            <div className="home__content">
                <Banner />
            </div>
        </div>
    );
};

export default Home;
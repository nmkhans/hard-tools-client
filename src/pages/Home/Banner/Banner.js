import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="container mx-auto">
                <div className="banner__content">
                    <div className="banner__detail">
                        <h2 className="text-accent text-4xl font-semibold mb-5">Modern Tools and Hardwere.</h2>
                        <h3 className="text-xl text-secondary mb-5 capitalize">Hardwere equipment, tools and accessories!</h3>
                        <p className="w-1/2 text-black mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis explicabo deleniti perspiciatis voluptas nesciunt velit cumque ullam! Consequatur, illo repellendus.</p>
                    </div>
                    <div className="banner__button">
                        <button className="btn btn-md btn-primary text-black mt-2">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
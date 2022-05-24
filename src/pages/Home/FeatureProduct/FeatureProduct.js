import React from 'react';
import './FeatureProduct.css';

const FeatureProduct = () => {
    return (
        <div className="FeatureProduct">
            <div className="container mx-auto">
                <div className="featureProduct__title">
                    <h2 className="text-center text-black text-2xl uppercase font-semibold mb-10">Featured products</h2>
                </div>
                <div className="featureProduct__content grid grid-cols-3 gap-30">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
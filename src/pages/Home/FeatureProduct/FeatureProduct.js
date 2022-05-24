import React, { useEffect, useState } from 'react';
import './FeatureProduct.css';
import SingleProduct from './SingleProduct/SingleProduct';

const FeatureProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className="FeatureProduct">
            <div className="container mx-auto">
                <div className="featureProduct__title">
                    <h2 className="text-center text-black text-2xl uppercase font-semibold mb-10">Featured products</h2>
                </div>
                <div className="featureProduct__content grid grid-cols-3 gap-10">
                    {
                        products.map((product, index) => <SingleProduct key={index} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
import React from 'react';
import './ProductCategory.css';

const ProductCategory = ({Icon, name}) => {
    return (
        <div className="ProductCategory">
            <div className="pc__content flex items-center justify-center">
                <div className="pc__icon">
                    <Icon className="inline-block text-4xl text-accent" />
                </div>
                <div className="pc__name">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;
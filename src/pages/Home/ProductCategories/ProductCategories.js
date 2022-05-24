import React from 'react';
import './ProductCategories.css';
import { ImHammer } from 'react-icons/im';
import { GiBoltCutter, GiManualMeatGrinder, GiDrill, GiHandGrip } from 'react-icons/gi';
import { FaWrench } from 'react-icons/fa';
import ProductCategory from './ProductCategory/ProductCategory';

const ProductCategories = () => {
    return (
        <div className="ProductCategories">
            <div className="container mx-auto">
                <div className="productCategories__title">
                    <h2 className="text-center text-black text-2xl uppercase font-semibold mb-10">Product Categories</h2>
                </div>
                <div className="productCategories__content grid grid-cols-3 gap-10">
                    <ProductCategory Icon={GiDrill} name="Drilling Tool" />
                    <ProductCategory Icon={GiBoltCutter} name="Cutter Tool" />
                    <ProductCategory Icon={FaWrench} name="Wrench Tool" />
                    <ProductCategory Icon={GiManualMeatGrinder} name="Grind Tool" />
                    <ProductCategory Icon={ImHammer} name="Hammer Tool" />
                    <ProductCategory Icon={GiHandGrip} name="Griping Tool" />
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;
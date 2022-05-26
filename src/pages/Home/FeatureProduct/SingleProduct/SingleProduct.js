import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {name, img, description, price, minimum, available, _id} = product;
    const navigate = useNavigate();

    return (
        <div className="SingleProduct w-[350px] mx-auto">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <img className="rounded" src={img} alt="" />
                    <div className="card-title mx-2">
                        <h3 className="text-black">{name}</h3>
                    </div>
                    <div className="cart-description text-left">
                        <p className="text-accent text-lg mb-2">{description}</p>
                        <p className="text-accent">Per unit price: {price}</p>
                        <p className="text-accent">Available in stock: {available}</p>
                        <p className="text-accent">Minumum order amount: {minimum}</p>
                    </div>
                    <div className="card-action">
                        <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-accent hover:btn-primary text-white hover:text-black w-full mt-2">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
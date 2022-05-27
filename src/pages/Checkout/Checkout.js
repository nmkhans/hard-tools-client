import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from './../../global/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const stripePromise = loadStripe('pk_test_51L2T8gA0AzwDwvLYT6BvQrr4Lwmwwg1XF3OtDtrSbyUs0XnQw2epH0WdGR6FM2UrBZmBRZbbwsRENw77njlRJ1xr00ugasX5LN');

const Checkout = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const url = `http://localhost:5000/checkout/${id}`;
    const { data: product, isLoading } = useQuery('checkout-product', () => (
        fetch(url)
            .then(res => res.json())
    ))

    if (isLoading || loading) {
        return <Loading />
    }
    const { productName, amount, totalPrice, img } = product;

    return (
        <div className="Checkout">
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <div className="bg-base-100 shadow-2xl flex sm:flex-col md:flex-row lg:flex-row justify-evenly items-center rounded-xl">
                            <figure className="w-2/4">
                                <img className="rounded-xl" src={img} alt="Album" />
                            </figure>
                            <div className="purchase__detail text-left p-5">
                                <h3 className="text-4xl text-black font-bold  mb-5">{productName}</h3>
                                <h4 className=" text-lg font-semibold text-accent mb-2">Your price is: ${totalPrice}</h4>
                                <p className="text-accent text-lg font-semibold mb-2"> Total Amount: {amount}</p>
                            </div>
                        </div>
                    </div>
                    <div className="purchase__form">
                        <div className="card w-[500px] shadow-2xl bg-base-100">
                            <div className="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm product={product} user={user} />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Checkout;
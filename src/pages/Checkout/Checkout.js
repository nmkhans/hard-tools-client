import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from './../../global/Loading/Loading';

const Checkout = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/checkout/${id}`;
    const { data: product, isLoading } = useQuery('checkout-product', () => (
        fetch(url)
            .then(res => res.json())
    ))

    if (isLoading) {
        return <Loading />
    }
    console.log(product)
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
                            <form >
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Place Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Checkout;
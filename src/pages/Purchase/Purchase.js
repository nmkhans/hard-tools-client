import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useForm } from "react-hook-form";
import Loading from './../../global/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `http://localhost:5000/products/${id}`;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { data: product, isLoading } = useQuery('purchase-item', () => (
        fetch(url)
            .then(res => res.json())
    ))

    if (isLoading || loading) {
        return <Loading />
    }

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const productName = data.product;
        const productId = id;
        const amount = parseInt(data.amount);
        const totalPrice = price * amount;
        const phone = data.phone;
        const address = data.address;
        const status = false;
        
        const orderDetail = {name, email, productName, productId, amount, totalPrice, phone, address, status, img};
        
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success("Order Place Successfull")
                navigate('/dashboard/')
            }
        })
        reset();
    };

    const { displayName, email } = user;
    const { name, img, price, description, minimum, available } = product;

    return (
        <div className="Purchase py-10">
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <div className="bg-base-100 shadow-2xl flex sm:flex-col md:flex-row lg:flex-row justify-between items-center rounded-xl">
                            <figure className="w-2/4">
                                <img className="rounded-xl" src={img} alt="Album" />
                            </figure>
                            <div className="purchase__detail text-left p-5">
                                <h3 className="text-4xl text-black font-bold  mb-5">{name}</h3>
                                <h4 className="text-accent mb-2">Price per unit: {price}</h4>
                                <p className="text-accent mb-2">Available: {available}</p>
                                <p className="text-accent mb-2">Minimum Amount: {minimum}</p>
                                <p className="text-gary-600 text-lg mb-2">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="purchase__form">
                        <div className="card w-[500px] shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" className="input input-bordered" defaultValue={displayName} readOnly
                                            {...register("name")} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered"
                                            defaultValue={email} readOnly
                                            {...register("email")} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product</span>
                                        </label>
                                        <input type="text" placeholder="product" className="input input-bordered"
                                            defaultValue={name} readOnly
                                            {...register("product")} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Amount</span>
                                        </label>
                                        <input type="number" placeholder="Amount" className="input input-bordered" defaultValue={minimum}
                                            {...register("amount", {
                                                required: {
                                                    value: true,
                                                    message: 'Minimum amount is required',
                                                },
                                                min: {
                                                    value: minimum,
                                                    message: `Amount has to be above ${minimum}`
                                                },
                                                max: {
                                                    value: available,
                                                    message: `Amount has to be below ${available}`
                                                },

                                            })} />
                                        <label>
                                            {errors.amount?.type === 'required' && <p className="font-semibold text-red-500">
                                                {errors.amount.message}
                                            </p>}
                                            {errors.amount?.type === 'min' && <p className="font-semibold text-red-500">
                                                {errors.amount.message}
                                            </p>}
                                            {errors.amount?.type === 'max' && <p className="font-semibold text-red-500">
                                                {errors.amount.message}
                                            </p>}
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" placeholder="Phone" className="input input-bordered"
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: "Phone is required"
                                                }
                                            })}
                                        />
                                        <label>
                                            {
                                                errors?.phone?.type === 'required' && <p className="font-semibold text-red-500">
                                                    {errors?.phone?.message}
                                                </p>
                                            }
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="Address" className="input input-bordered"
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                    message: "Address is required"
                                                }
                                            })} />
                                            <label>
                                            {
                                                errors?.address?.type === 'required' && <p className="font-semibold text-red-500">
                                                    {errors?.address?.message}
                                                </p>
                                            }
                                        </label>
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
        </div >
    );
};

export default Purchase;
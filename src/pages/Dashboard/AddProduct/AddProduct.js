import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const uploadApi = '4ef6064f92cecc9354940bb42dad244d';
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = parseInt(event.target.price.value);
        const available = parseInt(event.target.available.value);
        const minimum = parseInt(event.target.minimum.value);
        const image = event.target.img.files;

        const formData = new FormData();
        formData.append('image', image[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${uploadApi}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const img = data?.data?.url;
                const product = { name, img, description, price, available, minimum }
                fetch('http://localhost:5000/products', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId) {
                            toast.success("Product successfully added")
                            event.target.reset();
                        }
                    })
            })
    }
    return (
        <div className="AddProduct">
            <div className="addProduct__title text-center">
                <h2 className="text-2xl text-primary font-semibold inline-block border-b-2 border-accent pb-2 mb-5">Add Product:</h2>
            </div>
            <div className="addProduct__content mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input name="description" type="text" placeholder="description" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name="price" type="text" placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available</span>
                                </label>
                                <input name="available" type="text" placeholder="available" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum</span>
                                </label>
                                <input name="minimum" type="text" placeholder="minimum" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">img</span>
                                </label>
                                <input name="img" type="file" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loading from './../../../global/Loading/Loading';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    const userImg = user?.photoURL;
    const userName = user?.displayName;

    if(loading) {
        return <Loading />
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = userName;
        const img = userImg;
        const review = event.target.detail.value;
        const rating = parseInt(event.target.rating.value);
        const fullReview = {name, img, review, rating};
        
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success("Review successfully added")
                event.target.reset();
            }
        })
    }
    return (
        <div className="AddReview">
            <div className="addReview text-center">
                <h2 className="text-2xl text-primary font-semibold inline-block border-b-2 border-accent pb-2 mb-5">Add a review:</h2>
            </div>
            <div className="addReview__content">
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" defaultValue={userName} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input name="rating"  type="text" placeholder="Rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review Detail</span>
                            </label>
                            <textarea name="detail" style={{height: '150px', resize: "none"}} type="text" placeholder="Review" className="input input-bordered"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Review</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddReview;
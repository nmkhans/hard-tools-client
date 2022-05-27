import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    return (
        <div className="Review">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-avater">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt="" />
                            </div>
                        </div>
                    </div>
                    <h2 className="card-title justify-center">{review.name}</h2>
                    <p>{review.review}</p>
                    <p className="font-semibold text-primary">Rating: {review.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="Reviews">
            <div className="container mx-auto">
                <div className="reviews__title">
                    <h2 className="text-center text-black text-2xl uppercase font-semibold mb-10">What people says</h2>
                </div>
                <div className="reviews__content">
                    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} swipeable={true} showThumbs={false}>
                        {
                            reviews.map(review => <Review review={review} />)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Review from './Review/Review';
import './Reviews.css';
import { useQuery } from 'react-query';
import Loading from './../../../global/Loading/Loading';

const Reviews = () => {
    const {data: reviews, isLoading} = useQuery('reviews', () => (
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
    ))

    if(isLoading) {
        return <Loading />
    }

    return (
        <div className="Reviews">
            <div className="container mx-auto">
                <div className="reviews__title">
                    <h2 className="text-center text-black text-2xl uppercase font-semibold mb-10">What people says</h2>
                </div>
                <div className="reviews__content">
                    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} swipeable={true} showThumbs={false}>
                        {
                            reviews.map((review) => <Review key={review._id} review={review} />)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
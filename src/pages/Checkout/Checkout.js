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

    console.log(product);

    return (
        <div className="Checkout">

        </div>
    );
};

export default Checkout;
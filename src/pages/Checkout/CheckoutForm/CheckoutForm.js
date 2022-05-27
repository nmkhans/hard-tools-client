import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
    CardElement,
    useElements,
    useStripe
} from '@stripe/react-stripe-js';

const CheckoutForm = ({ product, user }) => {
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const [showError, setShowError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const { totalPrice, productId } = product;
    const { displayName, email } = user;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
            })
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        // eslint-disable-next-line no-unused-vars
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setShowError(error.message)
        } else {
            setShowError("");
        }

        // confirm payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: displayName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setShowError(intentError.message)
        } else {
            setShowError("");
            fetch(`http://localhost:5000/orders/${productId}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ transactionId: paymentIntent.id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Your payment is completed')
                        navigate('/dashboard')
                    }
                })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-center text-red-500 my-3">{showError}</p>
            <button className="btn bg-green-500 w-full text-white mt-5" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
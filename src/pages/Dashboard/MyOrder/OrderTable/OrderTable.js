import React from 'react';
import useAlert from './../../../../hooks/useAlert';
import { useNavigate } from 'react-router-dom';

const OrderTable = ({ order, refetch }) => {
    const { name, productName, productId, amount, totalPrice, status, _id } = order;
    const { alert } = useAlert();
    const navigate = useNavigate();

    const handleCancel = (id) => {
        alert.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: "DELETE",
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            alert.fire(
                                'Cancelled!',
                                'Your order has been Cancelled.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{amount}</td>
            <td>{totalPrice}</td>
            <td>
                {
                    status ? (
                        <div className="badge bg-green-500 text-white">Paid</div>
                    ) : (
                        <div className="badge bg-red-500 text-white">Not Paid</div>
                    )
                }
            </td>
            <td>
                {
                    status ? "" : (
                        <>
                            <button onClick={() => navigate(`/checkout/${productId}`)} className="btn btn-sm mr-3 bg-green-500 text-white">Pay</button>
                            <button onClick={() => handleCancel(_id)} className="btn btn-sm bg-red-500 text-white">Cancel</button>
                        </>
                    )
                }
            </td>
        </tr>
    );
};

export default OrderTable;
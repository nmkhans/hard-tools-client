import React from 'react';

const OrderTable = ({ order }) => {
    const { name, productName, amount, totalPrice, status } = order;

    return (
        <tr>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{amount}</td>
            <td>{totalPrice}</td>
            <td>
                {
                    status ? (
                        <div class="badge bg-green-500 text-white">Paid</div>
                    ) : (
                        <div class="badge bg-red-500 text-white">Not Paid</div>
                    )
                }
            </td>
            <td>
                {
                    status ? "" : (
                        <>
                            <button className="btn btn-sm mr-3 bg-green-500 text-white">Pay</button>
                            <button className="btn btn-sm bg-red-500 text-white">Cancel</button>
                        </>
                    )
                }
            </td>
        </tr>
    );
};

export default OrderTable;
// src/components/OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
    const [orderDetails, setOrderDetails] = useState({
        service_type: 'Parcel',
        service_level: 'Standard',
        from: {},
        to: {},
        parcel_job: {}
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/create-order', orderDetails);
            alert('Order Created: ' + JSON.stringify(response.data));
        } catch (error) {
            alert('Failed to create order: ' + error.message);
        }
    };

    const handleChange = (event) => {
        setOrderDetails({
            ...orderDetails,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Order</h2>
            {/* Additional form inputs for other order details would go here */}
            <button type="submit">Submit Order</button>
        </form>
    );
}

export default OrderForm;

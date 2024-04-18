// src/components/OrderStatus.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderStatus() {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await axios.get('http://localhost:3001/order-status');
                setStatus(response.data.status);
            } catch (error) {
                console.error('Error fetching order status:', error);
            }
        };

        fetchStatus();
        const intervalId = setInterval(fetchStatus, 5000); // Poll every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Order Status</h2>
            <p>Status: {status}</p>
        </div>
    );
}

export default OrderStatus;

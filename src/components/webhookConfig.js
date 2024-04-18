// src/components/WebhookConfig.js
import React, { useState } from 'react';
import axios from 'axios';

function WebhookConfig() {
    const [webhookUrl, setWebhookUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/configure-webhook', { url: webhookUrl });
            alert('Webhook configured: ' + JSON.stringify(response.data));
        } catch (error) {
            alert('Failed to configure webhook: ' + error.message);
        }
    };

    const handleChange = (event) => {
        setWebhookUrl(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Configure Webhook</h2>
            <label>
                Webhook URL:
                <input type="text" value={webhookUrl} onChange={handleChange} />
            </label>
            <button type="submit">Configure</button>
        </form>
    );
}

export default WebhookConfig;

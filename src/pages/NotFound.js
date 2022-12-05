import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page Not Found</h1>
            <h2>Invalid URL</h2>
            <button onClick={() => { navigate('/') }}>Go to Homepage</button>
        </div>
    )
}

export default NotFound
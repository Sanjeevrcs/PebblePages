import React, { useEffect } from 'react';

const ShareHandler = () => {

    const handleSharedData = () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const sharedBlog = urlParams.get("text") || '';
            alert('Shared Description: ' + sharedBlog);
        } catch (error) {
            alert('Error handling shared data: ' + error);
        }
    };

    useEffect(() => {
        handleSharedData();
    }, []);

    return (
        <div>
            <h1>Handling Shared Data</h1>
        </div>
    );
};

export default ShareHandler;

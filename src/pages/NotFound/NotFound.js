import React from 'react';

const NotFound = () => {
    return (
        <div className="NotFound h-screen text-screen flex justify-center items-center">
            <div>
                <h2 style={{ fontSize: '150px' }} className="text-accent font-bold">404</h2>
                <p>The page you're looking for can't be found!</p>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { useAuth } from '../AuthContext';

const Main = () => {
    const { isAuthenticated } = useAuth();

    return (
        <main className="text-center mt-10">
            {isAuthenticated ? (
                <h2 className="text-2xl">You are logged in. Welcome!</h2>
            ) : (
                <h2 className="text-2xl">Please login to access the content.</h2>
            )}
        </main>
    );
};

export default Main;

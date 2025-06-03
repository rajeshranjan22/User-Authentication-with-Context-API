import React from 'react';
import { useAuth } from '../AuthContext';

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useAuth();

    return (
        <nav className="w-full flex justify-between items-center p-4 bg-blue-500 text-white">
            <h1 className="text-xl font-bold">Auth App</h1>
            <button
                onClick={toggleAuth}
                className="bg-white text-blue-500 px-4 py-2 rounded shadow"
            >
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </nav>
    );
};

export default Navbar;

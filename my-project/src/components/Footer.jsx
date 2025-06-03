import React from 'react';
import { useAuth } from '../AuthContext';

const Footer = () => {
    const { isAuthenticated } = useAuth();

    return (
        <footer className="mt-10 text-gray-600">
            {isAuthenticated ? 'Welcome, User' : 'Please log in'}
        </footer>
    );
};

export default Footer;

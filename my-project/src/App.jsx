import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col items-center justify-between p-6">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;

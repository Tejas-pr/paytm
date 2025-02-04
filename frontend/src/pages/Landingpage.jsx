import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("logToken");

    if(token) {
      navigate("/dashboard");
    } 
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Paytm Clone</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Features</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Paytm Clone</h1>
          <p className="text-xl text-gray-600 mb-8">Your one-stop solution for seamless payments and financial services.</p>
          <button
          onClick={() => navigate("/signup")}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fast Payments</h3>
            <p className="text-gray-600">Send and receive money instantly with just a few clicks.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Secure Transactions</h3>
            <p className="text-gray-600">Your transactions are safe and secure with our advanced encryption.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600">Our support team is always available to assist you.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2023 Paytm Clone. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 text-gray-600 hover:text-blue-600 transition duration-300">Privacy Policy</a>
            <a href="#" className="mx-2 text-gray-600 hover:text-blue-600 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
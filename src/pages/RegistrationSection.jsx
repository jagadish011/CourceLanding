// components/RegistrationSection.jsx
import React from 'react';

const RegistrationSection = () => {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-8 md:py-12 bg-white text-center relative">
      <div className="max-w-5xl mx-auto">
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          REGISTER @ ₹99/-
        </button>
        
        <p className="mt-6 text-gray-800">
          Enrollment closes on <span className="text-orange-500 font-medium">10 March</span>
        </p>
      </div>
    </section>
  );
};

export default RegistrationSection;
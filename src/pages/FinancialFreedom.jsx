import React from 'react';

const FinancialFreedom = () => {
    return (
        <div className="bg-white p-8 max-w-4xl mx-auto">
            <div className="mt-12">
                <h2 className="text-4xl font-semibold text-center mb-6">COURSE CURRICULUM</h2>
                <img src="https://passiontoprofits.sgacademy.info/wp-content/uploads/2023/08/thinking_07.svg" alt="Thinking" className="w-56 h-56 mx-auto mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <svg className="w-16 h-16 mb-4  text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2 text-purple-800">Unleashing Your Mind’s Potential</h3>
                        <p className="text-lg text-purple-600">Techniques to enhance concentration.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <svg className="w-16 h-16 mb-4  text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2 text-purple-800">The Art of Awareness</h3>
                        <p className="text-lg text-purple-600">Cultivate mindfulness.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <svg className="w-16 h-16 mb-4  text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2 text-purple-800">Manifestation Magic</h3>
                        <p className="text-lg text-purple-600">Practical steps to turn desires into reality.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <svg className="w-16 h-16 mb-4  text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2 text-purple-800">Energy Mastery</h3>
                        <p className="text-lg text-purple-600">Understand your inner energy.</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    REGISTER @ ₹99/-
                </button>
            </div>
        </div>
    );
};

export default FinancialFreedom;
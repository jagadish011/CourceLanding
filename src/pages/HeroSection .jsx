// components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <section 
            className="py-8 md:py-12 px-4 md:px-12 lg:px-24 text-center relative"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(258, 258, 258, 1), rgba(255, 255, 255, 0.9)), url('/image-2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                    Join The <span className="text-orange-500">MY FOCUS </span>Workshop To Master <span className="text-orange-500">Concentration</span> And <span className="text-orange-500">Mindfulness</span> In Just 66 Days
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-12 relative">
                {/* Profile Image and Name Section */}
                <div className="mb-8 md:mb-0 md:mr-8 relative">
                    <div className="rounded-full border-4 border-dotted border-teal-400 inline-block p-2">
                        <img
                            src="https://d502jbuhuh9wk.cloudfront.net/orgData/62e610080cf27ef69bbb0ede/pages/assets/images/37ydPpassport.jpg"
                            alt="Life Coach"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
                        />
                    </div>
                    <div className="mt-4 bg-white rounded-lg shadow-md py-3 px-6">
                        <h3 className="text-xl text-orange-500 font-bold">Mahesh Masal</h3>
                        <p className="text-navy-800">Human Mindset Coach</p>
                    </div>
                </div>

                {/* What's Covered Section */}
                <div className="text-left mt-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-6">
                        What's <span className="text-orange-500">Covered</span>
                    </h2>

                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="bg-teal-500 rounded-full p-1 mt-1 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span><span className="text-orange-500">Mind Exploration</span>: Understand untapped possibilities</span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-teal-500 rounded-full p-1 mt-1 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span><span className="text-orange-500">Awareness</span>: Harness awareness for growth</span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-teal-500 rounded-full p-1 mt-1 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span><span className="text-orange-500">Energy Flow</span>: Experience your inner energy</span>
                        </li>
                        <li className="flex items-start">
                            <div className="bg-teal-500 rounded-full p-1 mt-1 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span><span className="text-orange-500">Manifestation</span>: Learn to manifest desires</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
// components/WorkshopDetails.jsx
import React from 'react';

const WorkshopDetails = () => {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-8 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Duration Box */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-center">
          <div className="bg-purple-500 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Duration</p>
            <p className="font-bold text-lg">3+ HOURS</p>
          </div>
        </div>
        
        {/* Date Box */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-center">
          <div className="bg-purple-500 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Date</p>
            <p className="font-bold text-lg">15TH MARCH 2025</p>
          </div>
        </div>
        
        {/* Language Box */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-center">
          <div className="bg-purple-500 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Language</p>
            <p className="font-bold text-lg">ENGLISH</p>
          </div>
        </div>
        
        {/* Time Box */}
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex items-center">
          <div className="bg-purple-500 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Time</p>
            <p className="font-bold text-lg">9:30 AM TO 12:30 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
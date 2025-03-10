import React from "react";

const FaqSection = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Have questions? We’ve got answers to some of the most common queries.
          </p>
        </div>

        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-4">What is the purpose of this course?</h4>
            <p className="text-gray-700 leading-relaxed">
              This course is designed to empower individuals by enhancing their concentration, willpower, and self-awareness, equipping them to lead extraordinary lives.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-4">
              Who is this course suitable for?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              This course is ideal for anyone looking to explore their mind's potential and achieve personal growth. It’s suitable for students, professionals, and lifelong learners.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-4">
              What are the key topics covered in the course?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Topics include Mind Exploration, Awareness, Energy Flow, and Manifestation. Each topic is designed to offer practical insights and transformative experiences.
            </p>
          </div>

          {/* FAQ 4 with distinct background color */}
          <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-4">
              How can I enroll in this course?
            </h4>
            <p className="text-gray-800 leading-relaxed">
              Enrollment is simple! Visit our official website or contact our support team to register for the course. Don’t miss this chance to transform your life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

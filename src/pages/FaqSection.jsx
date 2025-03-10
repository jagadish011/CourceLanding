// components/FaqSection.jsx
import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of this course?",
      answer:
        "This course is designed to empower individuals by enhancing their concentration, willpower, and self-awareness, equipping them to lead extraordinary lives.",
    },
    {
      question: "Who is this course suitable for?",
      answer:
        "This course is ideal for anyone looking to explore their mind's potential and achieve personal growth. It’s suitable for students, professionals, and lifelong learners.",
    },
    {
      question: "What are the key topics covered in the course?",
      answer:
        "Topics include Mind Exploration, Awareness, Energy Flow, and Manifestation. Each topic is designed to offer practical insights and transformative experiences.",
    },
    {
      question: "How can I enroll in this course?",
      answer:
        "Enrollment is simple! Visit our official website or contact our support team to register for the course. Don’t miss this chance to transform your life!",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gray-50 mb-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Have questions? We’ve got answers to some of the most common queries.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg transition-shadow duration-300 ${
                activeIndex === index ? "bg-indigo-100" : "bg-white"
              }`}
            >
              <button
                className="w-full text-left px-6 py-4 sm:py-6 font-semibold text-indigo-700 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-indigo-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

import { useState, useEffect } from 'react';
import Header from './pages/Header';
import WorkshopDetails from './pages/WorkshopDetails';
import RegistrationSection from './pages/RegistrationSection';
import AboutCourseSection from './pages/AboutCourseSection';
import FinancialFreedom from './pages/FinancialFreedom';
import Testimonials from './pages/Testimonials';
import HeroSection from './pages/HeroSection ';
import CoachProfile from './pages/CoachProfile';
import FaqSection from './pages/FaqSection';

function App() {
  const [count, setCount] = useState(0);

  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <WorkshopDetails />
        <RegistrationSection />
        <AboutCourseSection />
        <FinancialFreedom />
        <Testimonials />
        <CoachProfile />
        <FaqSection />
      </div>

      {/* Sticky Bottom Section */}
      <div class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-gray-200 z-50">
        <div class="max-w-6xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <h3 class="text-xl font-semibold">MY FOCUS</h3>
            <p class="text-lg text-purple-600">₹99/- Only</p>
          </div>
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-right">
            <div class="text-lg font-semibold">
              <span>Offer Ends in: </span>
              <span class="text-purple-600">{formatTime(timeLeft)}</span>
            </div>
            <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Register Now
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
import React from "react";

const AboutCourseSection = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">ABOUT THE COURSE</h2>
          <h3 className="text-lg sm:text-2xl text-indigo-700 font-semibold">
            FOCUS: Empowering Minds for Extraordinary Lives
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* English Course Description */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8">
            <h4 className="text-xl font-bold text-indigo-700 mb-4">English Course Description</h4>
            <p className="mb-4">
              <span className="font-bold text-indigo-700">FOCUS</span> is a powerful course designed to bring a
              positive shift to your life, empowering you to lead an extraordinary life.
            </p>
            <p className="mb-4">
              In our education system, we're often not taught about the most powerful instrument we possess:{" "}
              <span className="font-bold">our mind</span>.
            </p>
            <p className="mb-4">
              This course dives deep into the realms of concentration and willpower—essential tools for achieving
              anything in life. Here's what you'll explore:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <span>
                  <span className="font-bold">Mind Exploration</span>: Understand the untapped possibilities within
                  your mind.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <span>
                  <span className="font-bold">Awareness</span>: Learn how to harness your awareness for personal
                  growth.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <span>
                  <span className="font-bold">Energy Flow</span>: Experience the flow of energy within you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <span>
                  <span className="font-bold">Manifestation</span>: Discover how to manifest your desires effectively.
                </span>
              </li>
            </ul>

            <p className="mt-6">
              The journey through this experiential course is joyous, and it's an invitation to explore infinity and
              evolve.
            </p>
          </div>

          {/* Kannada Course Description */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8">
            <h4 className="text-xl font-bold text-indigo-700 mb-4">Kannada Course Description</h4>
            <p className="mb-4">
              ಫೋಕಸ್ ಶಕ್ತಿಯುತ ಕೋರ್ಸ್ ಆಗಿದ್ದು ಅದು ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಅಸಾಧಾರಣ ಜೀವನವನ್ನು ನಡೆಸಲು ಧನಾತ್ಮಕ ಬದಲಾವಣೆಯನ್ನು ತರುತ್ತದೆ.
            </p>
            <p className="mb-4">
              ನಮ್ಮ ಜೀವನವನ್ನು ಚಾಲನೆ ಮಾಡುವ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಸಾಧನವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿಟ್ಟುಕೊಳ್ಳುವುದು ನಮ್ಮ ಶಿಕ್ಷಣ ವ್ಯವಸ್ಥೆಯ ಉದ್ದಕ್ಕೂ ನಮಗೆ
              ಕಲಿಸಲ್ಪಟ್ಟಿಲ್ಲ. ಅದರ ಸಾಮರ್ಥ್ಯವನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಲು ಮತ್ತು ಶ್ರೇಷ್ಠತೆಯನ್ನು ಸಾಧಿಸಲು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ.
            </p>
            <p className="mb-4">
              ಜೀವನದಲ್ಲಿ ಏನನ್ನಾದರೂ ಸಾಧಿಸಲು ಏಕಾಗ್ರತೆ ಮತ್ತು ಇಚ್ಛಾಶಕ್ತಿ ಅತ್ಯಗತ್ಯ. ಈ ಕೋರ್ಸ್‌ನಲ್ಲಿ ನೀವು ನಿಮ್ಮ ಮನಸ್ಸು ಮತ್ತು ಅದರ
              ಸಾಧ್ಯತೆಗಳನ್ನು ಅನ್ವೇಷಿಸುವಿರಿ, ಅರಿವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವಿರಿ, ನಿಮ್ಮ ಶಕ್ತಿಯ ಹರಿವನ್ನು ಅನುಭವಿಸುವಿರಿ ಮತ್ತು ಈ ಜೀವನದಲ್ಲಿ ನೀವು
              ಬಯಸುವ ಯಾವುದನ್ನಾದರೂ ಪ್ರದರ್ಶಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.
            </p>
            <p className="mt-6">
              ಇದು ಅನುಭವದ ಕೋರ್ಸ್, ಮತ್ತು ಪ್ರಯಾಣವು ಸಂತೋಷದಿಂದ ತುಂಬಿದೆ. ಅನಂತತೆಯನ್ನು ಅನ್ವೇಷಿಸಲು ಮತ್ತು ವಿಕಸನಗೊಳಿಸಲು ಸುಸ್ವಾಗತ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourseSection;

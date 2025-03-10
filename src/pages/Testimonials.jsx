import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 to-purple-50 p-12 rounded-xl shadow-lg w-full mx-auto mt-12">
      <h2 className="text-5xl font-bold text-center mb-12 relative text-gray-800">
        Success Stories
        {/* <span className="absolute bottom--2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-600"></span> */}
      </h2>
      <p className="text-xl text-center mb-16 text-gray-600 px-44">
        Thousands of entrepreneurs have been able to create, launch, and relaunch highly profitable businesses built on flexibility and work-life balance after attending the "Life Coach Launchpad" Workshop.
      </p>

      <Slider {...settings}>
        <div className="px-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QgJWJRfcKMk"
            title="MY FOCUS Learner - Feedback"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-auto rounded-lg shadow-xl"
          ></iframe>
        </div>
        <div className="px-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5UOwMLbJaBA"
            title="Feedback"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-auto rounded-lg shadow-xl"
          ></iframe>
        </div>
        <div className="px-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jrOks_5UWVI"
            title="MY FOCUS learner - Feedback"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-auto rounded-lg shadow-xl"
          ></iframe>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;

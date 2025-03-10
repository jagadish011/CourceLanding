import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const SuccessStories = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-purple-50 p-6 sm:p-12 rounded-xl shadow-lg w-full mx-auto mt-12">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800 relative">
        Success Stories
      </h2>
      <p className="text-lg sm:text-xl text-center mb-8 sm:mb-16 text-gray-600 px-4 sm:px-20 lg:px-44">
        Thousands of entrepreneurs have been able to create, launch, and
        relaunch highly profitable businesses built on flexibility and work-life
        balance after attending the "Life Coach Launchpad" Workshop.
      </p>

      <Slider {...settings} className="w-full">
        {[
          "https://www.youtube.com/embed/QgJWJRfcKMk",
          "https://www.youtube.com/embed/5UOwMLbJaBA",
          "https://www.youtube.com/embed/jrOks_5UWVI",
        ].map((src, index) => (
          <div key={index} className="px-2 sm:px-4">
            <div className="w-full max-w-3xl mx-auto aspect-video">
              <iframe
                src={src}
                title={`Success Story ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-xl"
              ></iframe>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuccessStories;

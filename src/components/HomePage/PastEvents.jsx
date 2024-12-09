import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"; // Import EffectFade
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import fade effect CSS
import past1 from "../../assets/past1.webp";
import past2 from "../../assets/past2.webp";
import past3 from "../../assets/past3.webp";

const PastEvents = () => {
  const images = [past1, past2, past3];

  return (
    <div className="w-screen bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]} // Include EffectFade
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade" // Apply fade effect
        fadeEffect={{ crossFade: true }} // Enable cross-fade
        speed={3000} // Transition duration in milliseconds (500ms = faster fade)
        loop={true}
        className="w-full h-[600px] relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg filter blur-[1px]" // Apply blur effect here
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-assassin font-semibold text-center text-[80px] lg:text-[150px]">
              {/* Background behind the text */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <p className="relative z-10 text-shadow-lg">
                few moments from last year
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PastEvents;

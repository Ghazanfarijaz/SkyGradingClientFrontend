import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./styles.css";
import card from "../assets/4.png";
// import required modules
import { EffectCoverflow, Pagination, Autoplay , Navigation} from "swiper/modules";

// Array of images
const images = [
  { id: 1, src: card, alt: "Image 1" }, // Use card directly
  { id: 2, src: card, alt: "Image 2" },
  { id: 3, src: card, alt: "Image 3" },
  { id: 4, src: card, alt: "Image 4" },
  { id: 5, src: card, alt: "Image 5" },
  { id: 6, src: card, alt: "Image 5" },
  { id: 7, src: card, alt: "Image 5" },
  { id: 8, src: card, alt: "Image 5" },
  { id: 9, src: card, alt: "Image 5" },
  { id: 10, src: card, alt: "Image 5" },
];

export default function Sliding() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true} // Enable looping
        autoplay={{
          delay: 1000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Continue autoplay even after interaction
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {/* Render each image as a slide */}
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
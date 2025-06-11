// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import "./styles.css";
// import card from "../assets/card2.jpg";
// // import required modules
// import { EffectCoverflow, Pagination, Autoplay , Navigation} from "swiper/modules";
// import {useGetAllCardsQuery} from "../api/apiSlice";

// // Array of images
// const images = [
//   { id: 1, src: card, alt: "Image 1" }, // Use card directly
//   { id: 2, src: card, alt: "Image 2" },
//   { id: 3, src: card, alt: "Image 3" },
//   { id: 4, src: card, alt: "Image 4" },
//   { id: 5, src: card, alt: "Image 5" },
//   { id: 6, src: card, alt: "Image 5" },
//   { id: 7, src: card, alt: "Image 5" },
//   { id: 8, src: card, alt: "Image 5" },
//   { id: 9, src: card, alt: "Image 5" },
//   { id: 10, src: card, alt: "Image 5" },
// ];

// export default function Sliding() {

//   // Fetch all cards
//     const { data: allCards } = useGetAllCardsQuery();

//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         loop={true} // Enable looping
//         autoplay={{
//           delay: 1000, // Delay between slides in milliseconds
//           disableOnInteraction: false, // Continue autoplay even after interaction
//         }}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 2.5,
//           slideShadows: true,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         // navigation={{
//         //   nextEl: '.swiper-button-next',
//         //   prevEl: '.swiper-button-prev',
//         //   clickable: true,
//         // }}
//         modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
//         className="mySwiper"
//       >
//         {/* Render each image as a slide */}
//         {images.map((image) => (
//           <SwiperSlide key={image.id}>
//             <img src={image.src} alt={image.alt} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }

//11 june commented

// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import "./styles.css";
// // import required modules
// import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
// import { useGetAllCardsQuery } from "../api/apiSlice";
// import { Card } from "@mui/material";

// export default function Sliding() {
//   // Fetch all cards
//   const { data: allCards, isLoading, isError } = useGetAllCardsQuery();

//   // Handle loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (isError) {
//     return <div>Error fetching cards</div>;
//   }

//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         loop={true} // Enable looping
//         autoplay={{
//           delay: 1000, // Delay between slides in milliseconds
//           disableOnInteraction: false, // Continue autoplay even after interaction
//         }}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 2.5,
//           slideShadows: true,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
//         className="mySwiper"
//       >
//        {/* Render each card's image as a slide */}
// {/* Render each card's image as a slide */}
// {allCards?.map((card) => (
//   <SwiperSlide key={card.id}>
//     <Card style={{
//       width: "250px",
//       height: "350px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       overflow: "hidden"
//     }}>
//       <img
//         src={card.image}
//         alt={card.name}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "fill"
//         }}
//       />
//     </Card>
//   </SwiperSlide>
// ))}

//       </Swiper>
//     </>
//   );
// }

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useGetAllCardsQuery } from "../api/apiSlice";
import { Box, Card, Skeleton } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Image optimization helper - MOVED TO TOP
const optimizeImageUrl = (url) => {
  if (!url) return "/placeholder-card.png";
  if (url.includes("cloudinary")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_300/");
  }
  if (url.includes("googleapis")) {
    return url + "?w=300";
  }
  return url;
};

// Card styling constants - MOVED TO TOP
const cardStyle = {
  width: { xs: "180px", md: "250px" },
  height: { xs: "280px", md: "350px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  },
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#f5f5f5",
};

const Sliding = () => {
  const { data: allCards, isLoading, isError } = useGetAllCardsQuery();

  // Optimize card data with memoization
  const optimizedCards = useMemo(() => {
    if (!allCards) return [];

    return allCards.slice(0, 10).map((card) => ({
      id: card.id,
      image: optimizeImageUrl(card.image),
      name: card.name,
    }));
  }, [allCards]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          px: 2,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rounded"
            width={250}
            height={350}
            sx={{
              borderRadius: "16px",
              bgcolor: "grey.800",
            }}
          />
        ))}
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          color: "error.main",
        }}
      >
        Failed to load cards
      </Box>
    );
  }

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      breakpoints={{
        320: {
          coverflowEffect: {
            depth: 50,
            modifier: 1,
          },
          slidesPerView: 1.2,
        },
        768: {
          coverflowEffect: {
            depth: 150,
            modifier: 2,
          },
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2.5,
        },
      }}
      style={{
        padding: "20px 0",
      }}
    >
      {optimizedCards.map((card) => (
        <SwiperSlide
          key={card.id}
          style={{
            width: "250px",
            height: "350px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={cardStyle}>
            <img
              src={card.image}
              alt={card.name}
              loading="lazy"
              style={imageStyle}
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliding;

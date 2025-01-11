import React from "react";

import Hero from "../components/Hero";

import { Box } from "@mui/material";
import hero from "../assets/hero.png";
import StaticImageSlider from "../components/StaticImageSlider";
import ServicesSection from "../components/Services";
import Testimonials from "../components/Testimonial";
import FAQSection from "../components/FAQ";
import SlidingCards from "../components/SlidingCards";
function Home() {
  return (
    <>
      <div className="bg-[#1A1A1A] relative min-h-[100vh]">
        <Hero />

        <Box
          sx={{
            width: "100%", // 100% of the viewport width
            height: { md: "100vh", xs: "50vh" }, // 100% of the viewport height
            overflow: "hidden", // Ensures no overflow if the image exceeds bounds
            position: "relative", // Positions the image
            background: "black",
          }}
        >
          <img
            src={hero}
            alt="Hero Background"
            style={{
              width: "100%", // Stretch the image width to 100%
              height: "90%", // Stretch the image height to 100%
              objectFit: "cover", // Ensures the image scales and crops appropriately
              position: "absolute", // Ensures it fills the entire container
              top: 0,
              left: 0,
            }}
          />
        </Box>
        <StaticImageSlider />
        <ServicesSection />
        <SlidingCards />
        <Testimonials />
        <FAQSection />

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;

import { Box, Typography } from "@mui/material";
import React from "react";

import polygon from "../assets/Polygon.png";
import group from "../assets/Group.png";
function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1A1A1A", // Dark Page background
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "5%",
          transform: "translateX(-50%)",
          width: { md: "300px", xs: "150px" },
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      ></Box>
      <div class="absolute top-[40%] left-[2%] h-12">
        <img src={polygon} />
      </div>
      <div class="absolute top-[80%] sm:top-[10%] md:top-[75%] left-[60%] sm:left-[10%] md:left-[80%] h-12">
        <img src={polygon} alt="polygon" />
      </div>
      <div class="absolute top-[75%]  left-[0%]  h-12">
        <img src={group} alt="polygon" />
      </div>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "20%", md: "30%" },
          left: { md: "90%", xs: "55%" },
          transform: "translateX(-50%)",
          width: { md: "300px", xs: "150px" },
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "95%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1589px",
          height: "194px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.2) 20%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      />
      {/* Outer Box with Gradient Border */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "500px" },
          borderRadius: "35px",
          background: "linear-gradient(to bottom, #121212, #02CCFE)", // Gradient border
          padding: "4px", // Border thickness
          zIndex: 1, // Content on top
        }}
      >
        {/* Inner Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 24px",
            borderRadius: "31px", // Slightly smaller than the outer border
            backgroundColor: "#121212", // Solid black background for content
          }}
        >
          {/* Main Text */}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "16px", xs: "12px" },
              color: "#FFFFFF",
            }}
          >
            Unleash the Full Potential of Your Cards
          </Typography>

          {/* Discover More */}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "16px", xs: "12px" },
              color: "#F27013", // Orange color
              cursor: "pointer",
            }}
          >
            Discover More
          </Typography>
        </Box>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          color: "white",
          fontSize: { md: "80px", xs: "32px" },
          fontWeight: "bold",
          textAlign: "center",
          mt: "4vh",
          letterSpacing: "3px", // Add letter spacing
          zIndex: 1,
        }}
      >
        Welcome to Sky Grading— <br />
        Your Trusted Card Grading <br /> Service!
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          textAlign: "center",
          mt: "2vh",
          zIndex: 1,
        }}
      >
        Experience unparalleled professionalism and ease in card grading,
        tailored
        <br /> just for you.
      </Typography>
    </Box>
  );
}

export default Hero;
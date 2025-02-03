import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import card1 from "../assets/4.png"; // Replace with actual paths
import card2 from "../assets/card.png";
import card3 from "../assets/card.png";
import card4 from "../assets/card.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Sliding from "./Sliding";
import polygon from "../assets/Polygon.png";
import { Link } from "react-router-dom";
const cardImages = [card1, card2, card3, card4];

const SlidingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        height: "100vh",
        width: "100%",
        position: "relative",
        color: "#FFFFFF",
        padding: "20px",
        mb: 12,
      }}
    >
      <div class="absolute top-[0%] left-[10%] h-12">
        <img src={polygon} />
      </div>
      <div class="absolute md:top-[2%] top-[10%] md:left-[80%] left-[55%] h-12">
        <img src={polygon} />
      </div>
      <div class="absolute top-[90%] left-[10%] h-12">
        <img src={polygon} />
      </div>
      <div class="absolute md:top-[90%] top-[110%] md:left-[80%] left-[55%] ">
        <img src={polygon} />
      </div>
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: { md: "80%", xs: "55%" },
          transform: "translateX(-50%)",
          width: "200px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      />
      {/* Gradient Text Section */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          textAlign: "center",
        }}
      >
        When it comes to{" "}
        <span
          style={{
            background: "#02CCFE",
            padding: 3,
            color: "white",
            borderRadius: "12px",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          grading
        </span>
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          textAlign: "center",
        }}
      >
        Sky is a{" "}
        <span
          style={{
            background: "#02CCFE",
            padding: 3,
            color: "white",
            borderRadius: "12px",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          no brainer
        </span>
      </Typography>

      {/* Sliding Cards Section */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Sliding />
      </Box>

      {/* Text Below Cards */}
      <Typography
        variant="h4"
        sx={{ 
          marginTop: 5,
          marginBottom: 2,
          textAlign: "center",
          letterSpacing: "3px",
        }}
      >
        Search Your Card For Grading
      </Typography>

      {/* Search Button */}
      <Link to={"/search"}>
        <Button
          variant="contained"
          sx={{
            position: "relative",
            alignItems: "center",
            backgroundColor: "#02CCFE", // Button background
            color: "#000", // Text color
            borderRadius: "12px", // Border radius
            marginBottom: "30px", // Margin bottom
            padding: { xs: "20px 20px", md: "20px 25px" }, // Proper padding for button size
            fontWeight: "bold", // Font weight
            fontSize: "20px", // Font size for the text
            overflow: "hidden", // Ensure gradient stays within bounds
            zIndex: 1, // Ensure content stays above the border
            textTransform: "none", // Prevent text from being uppercase
            minWidth: "150px", // Set a minimum width for the button
            // "&:hover": {
            //   backgroundColor: "#0289FE", // Change background on hover
            // },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1, // Ensure gradient is behind the button content
              borderRadius: "12px", // Match button border radius
              padding: "2px", // Thickness of the gradient border
              background: "linear-gradient(to left, #F27013, #121212)", // Gradient color
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Mask to create the border effect
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            },
          }}
        >
          Search Card
        </Button>
      </Link>
    </Box>
  );
};

export default SlidingCards;

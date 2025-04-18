import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import cardImage from "../assets/card2.jpg"; // Replace with your image path
import polygon from "../assets/Polygon.png";

const textSlides = [
  "Gem Mint 10: A SKY 10 is the pinnacle of perfection. This grade is awarded to cards with pristine corners, exceptional focus, and pack fresh original gloss. To qualify, the card must be entirely free of stains, though minimal printing imperfections may be  allowed if they do not affect the card's overall aesthetic. Centering must be precise, with tolerances of up to 60/40 on the front and 70/30 on the reverse.",
  "Mint 9: A SKY 9 is in brilliant condition. Just falling short of the Gem Mint 10, it allows only one minor flaw. This may include a barely noticeable wax mark on the back, a small printing defect, or slightly off-white edges. The centering must meet a  standard of at least 60/40 on the front and 75/25 on the reverse or better.",
  "Near Mint 8: An SKY 8 card is a premium-quality card Although it initially looks like a SKY 9, there are minor imperfections upon closer examination. These may include a faint wax stain on the back, minimal fraying on one or two corners, a small printing flaw, or slightly off-white edges. The centering must meet a standard of approximately 65/35 on the front and 85/15 on the reverse or better.",
  "Excellent 7: A SKY 7 card shows minimal surface wear visible under close inspection. There may be slight fraying on some corners, and the picture focus could be slightly misaligned. Minor printing blemishes are acceptable, as is light wax staining on the reverse side only. The card retains most of its original gloss. Centering must meet a standard of approximately 65/35 on the front and 90/10 on the reverse or better.",
  "Near Excellent 6: A SKY 6 may display visible surface wear or minor printing defects that do not detract from its overall appeal. A faint scratch might be noticeable under close inspection. The corners may show mild fraying, and the picture focus could be slightly misaligned. The card might exhibit some loss of original gloss, light wax staining on the back, minor edge notching, or slightly off-white borders. Centering must be 70/30 on the front and 90/10 on the reverse or better.  ",
  "Very Good 5: A SKY 5 shows slight wear of the corners and more noticeable surface wear or printing defects. Minor edge chipping may be present, and the loss of original gloss becomes more apparent. The image focus may be slightly misaligned, and multiple light scratches might be visible upon close inspection, though they do not detract from the card's overall appeal. Borders may exhibit slight off-whiteness. Centering must be 75/25 on the front and 90/10 on the reverse or better. ",
  "Near Very Good 4: A SKY 4 may have slightly wear corners, with noticeable but moderate surface wear. The card could show light scuffing or faint scratches. Some of the original gloss remains. The borders may appear slightly off-white, and a light crease might be visible. Centering must be 80/20 on the front and 90/10 on the reverse or better.",
  "Good 3: A SKY 3 card shows noticeable wear of the corners, though not extreme. Surface wear is visible, with possible light scuffing or scratches. The image focus may be slightly off-register, and the edges may show noticeable wear. While much of the original gloss has been lost, some remains. The borders may appear yellowed or discoloured, and a crease may be present. Printing defects are possible. A slight stain may be visible on the front, with more prominent wax staining on the back. Centering must be 85/15 on the front and 90/10 on the back or better.",
  "Near Good 2: A SKY 2 card displays extreme wear to the corners, with surface wear becoming quite noticeable. The card may have scratches, scuffing, light staining, or chipping of enamel on the front. Several creases may be visible, and the original gloss may be completely gone. The card could show considerable discoloration. Centering must be 90/10 on both the front and back or better.",
  "Poor 1: A SKY 1 card shares many of the characteristics of a SKY 2, but the defects have progressed to a point where the card's visual appeal is almost entirely gone. A Poor card may feature major creasing that nearly tears through the layers of the card, show extreme discoloration or dirt that makes it difficult to identify the card's image or content on either the front or back. This card may also display noticeable warping or other severe damage.",
];

const StaticImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? textSlides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === textSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        minHeight: { md: "90vh", xs: "auto" },
        backgroundColor: "transparent",
        color: "#FFFFFF",
        padding: { xs: 2, md: 3 },
        gap: { xs: 3, md: 0 },
        position: "relative",
        overflow: "hidden",
        marginBottom: { xs: 4, md: 0 },
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1589px",
          height: "100px",
          background:
            "radial-gradient(ellipse, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.5) 20%)",
          filter: "blur(100px)",
          zIndex: 0,
          display: { xs: "none", md: "block" },
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          top: "80%",
          left: { md: "80%", xs: "55%" },
          transform: "translateX(-50%)",
          width: { md: "300px", xs: "150px" },
          height: "100px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.5) 20%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* Image Section - Now at the top for mobile */}
      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: { md: "90vh", xs: "300px" },
          minHeight: { xs: "300px", md: "auto" },
          marginBottom: { xs: 2, md: 0 },
        }}
      >
        <img
          src={cardImage}
          alt="Card Grading"
          style={{
            width: "auto",
            height: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Text Section - Below image on mobile */}
      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          padding: { md: 4, xs: 2 },
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            textAlign: "left",
            width: "100%",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {textSlides[currentIndex].split(":")[0]}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            lineHeight: "1.6",
            width: "100%",
            marginBottom: 3,
            fontSize: { xs: "0.9rem", md: "1rem" },
            minHeight: { md: "250px", xs: "auto" },
          }}
        >
          {textSlides[currentIndex].split(":")[1]}
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: 2, marginTop: { xs: 2, md: 0 } }}>
          <Button
            onClick={handlePrev}
            variant="outlined"
            sx={{
              position: "relative",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: 0,
              minWidth: "40px",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                borderRadius: "50%",
                padding: "2px",
                background: "linear-gradient(to right, #FFFFFF, #02CCFE 50%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
              backgroundColor: "transparent",
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
          </Button>

          <Button
            onClick={handleNext}
            variant="outlined"
            sx={{
              position: "relative",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: 0,
              minWidth: "40px",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                borderRadius: "50%",
                padding: "2px",
                background: "linear-gradient(to right, #FFFFFF, #02CCFE 50%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
              backgroundColor: "transparent",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StaticImageSlider;
import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LockIcon from "@mui/icons-material/Lock";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import polygon from "../assets/Polygon.png";
const ServicesSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent", // Dark background
        color: "white",
        padding: { xs: "40px 20px", md: "80px 80px" },
        textAlign: "center",
        position: "relative",
        mb: 12,
      }}
    >
      <div class="absolute top-[10%] md:left-[70%] left-[55%] h-12">
        <img src={polygon} />
      </div>
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "20%",
          transform: "translateX(-50%)",
          width: "200px",
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
          top: "90%",
          left: "30%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      />
      {/* Top Heading */}
      <Typography
        variant="body"
        sx={{
          color: "rgba(255, 255, 255, 0.7)", // Subtle grayish text
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Elevate Your Collection
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          margin: "10px 0 30px",
          fontSize: { xs: "28px", md: "36px" },
        }}
      >
        Exceptional Card Grading Services
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 8,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Link to={"/submit"}>
          <Button
            sx={{
              position: "relative", // Relative positioning for the gradient border
              backgroundColor: "#02CCFE",
              color: "#000",
              borderRadius: "12px",
              padding: "10px 15px",
              fontWeight: "bold",
              zIndex: 1, // Ensure content stays above the pseudo-element
              overflow: "hidden", // Hide the pseudo-element overflow
              "&:hover": {
                backgroundColor: "#02CCFE",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1, // Place the gradient behind the button content
                borderRadius: "12px", // Match button border radius
                padding: "2px", // Thickness of the gradient border
                background: "linear-gradient(to right, #F27013, #121212)", // Gradient color
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Mask to create the border effect
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
            }}
          >
            Submit Your Card
          </Button>
        </Link>
        <Link to={"/search"}>
          <Button
            sx={{
              backgroundColor: "#191919",
              color: "white",
              // border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              padding: "10px 15px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            Discover More About Us
          </Button>
        </Link>
      </Box>

      {/* Cards Section */}
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {/* Card 1 - Faded */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "#191919",
              padding: "20px 40px",
              borderRadius: "12px",
              height: "300px",
              textAlign: "center",
              //   opacity: 0.5, // Faded Effect
            }}
          >
            <BoltIcon />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              User-Friendly Submission
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Easily submit your cards with our intuitive online form, making
              grading hassle-free.
            </Typography>
          </Box>
        </Grid>

        {/* Card 2 - Active */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "#191919",
              padding: "20px 30px",
              borderRadius: "12px",

              height: "250px",
              textAlign: "center",
            }}
          >
            <AutoAwesomeIcon />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Comprehensive Tracking
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Stay updated on your card's grading status with real-time
              notifications and updates.
            </Typography>
          </Box>
        </Grid>

        {/* Card 3 - Active */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "#191919",
              padding: "20px",
              borderRadius: "12px 40px",
              //   border: "1px solid rgba(2, 204, 254, 0.5)",
              height: "270px",
              textAlign: "center",
            }}
          >
            <LockIcon />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Visual Data Insights
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Access dynamic
              <br /> visualizations and statistics <br />
              for better card grading <br />
              understanding.
            </Typography>
          </Box>
        </Grid>

        {/* Card 4 - Faded */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "#191919",
              padding: "20px 40px",
              borderRadius: "12px",
              height: "250px",
              textAlign: "center",
              //   opacity: 0.5, // Faded Effect
            }}
          >
            <FavoriteIcon />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Search Made Simple
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Quickly verify card details using QR codes or our innovative
              search tool.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesSection;

import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Professional Sports Collector",
    text: "Sky Grading transformed my card collection experience! Their process was seamless, and I was amazed by the detailed grading reports. Highly recommend for any serious collector!",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Emily Carter",
    role: "Hobbyist Card Enthusiast",
    text: "I love how user-friendly Sky Grading's platform is. Submitting my cards was easy, and I really appreciated the real-time updates on my grading status!",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Daniel Kwan",
    role: "Vintage Card Trader",
    text: "Exceptional service and incredible attention to detail. The grading statistics provided were an eye-opener for my collection. I trust Sky Grading completely!",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Sophia Martinez",
    role: "New to Card Grading",
    text: "As someone new to this world, I found Sky Grading's resources and support invaluable. They made the entire process clear and enjoyable!",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "James Liu",
    role: "Dedicated Sports Fan",
    text: "The pricing is transparent, and the quality of the grading is top-notch. My cards look fantastic in their holders. I'm a satisfied customer!",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Olivia Thompson",
    role: "Casual Collector",
    text: "Sky Grading provided a fantastic experience from start to finish. I'll definitely be using their services again for my next submissions!",
    avatar: "https://via.placeholder.com/40",
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        width: { md: "100%", xs: "90%" },
        backgroundColor: "transparent",
        color: "#FFFFFF",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "75%",
          left: "50%",
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
          top: "85%",
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
          left: { md: "75%", xs: "55%" },
          transform: "translateX(-50%)",
          width: "200px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      />
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "40px",
          letterSpacing: "1px",
        }}
      >
        What Our Customers Say
      </Typography>

      {/* Testimonials Grid */}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: { md: "1200px", xs: "900px" },
          margin: "0 auto",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              sx={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "30px",
                // boxShadow:
                //   index % 2 === 0 ? "0px 4px 8px rgba(0,0,0,0.5)" : "none",
                border: "1px solid #444",
                textAlign: "left",
              }}
            >
              {/* Avatar and Name */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>

              {/* Testimonial Text */}
              <Typography
                // variant="body2"
                sx={{
                  color: "white",
                  lineHeight: 1.6,
                  fontSize: "18px",
                }}
              >
                {testimonial.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

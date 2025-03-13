import React from "react";
import Hero from "../components/Hero";
import { Box, Typography, Container } from "@mui/material";
import Navbar from "../components/Navbar";

import PaymentCard from "../components/PaymentCard";
function SubmitCard() {
  return (
    <div className=" relative min-h-[100vh]">
      {/* <Hero /> */}

      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          padding: 4,
          // mt: 7,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: { md: "75%", xs: "60%" },
            transform: "translateX(-50%)",
            width: "300px",
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
            top: "100%",
            left: { md: "75%", xs: "60%" },
            transform: "translateX(-50%)",
            width: "300px",
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
            top: "80%",
            left: { md: "75%", xs: "60%" },
            transform: "translateX(-50%)",
            width: "300px",
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
            top: "50%",
            left: { md: "75%", xs: "60%" },
            transform: "translateX(-50%)",
            width: "300px",
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
            top: "70%",
            left: "15%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "150px",
            background:
              "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
            filter: "blur(100px)",
            zIndex: 0, // Place the gradient behind the content
          }}
        />
        <PaymentCard />

        <Typography
          variant="h1"
          gutterBottom
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "40px",
            mb: 6,
            letterSpacing: "2px",
            background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
            WebkitBackgroundClip: "text", // Clip the background to text
            WebkitTextFillColor: "transparent",
          }}
        >
          Notice: Identify your submissions via Order Number
        </Typography>
        <Box
          sx={{
            position: "relative",
            // width: "100%",
            // width: "1100px", // Uniform width
            width: { md: "1100px", xs: "100%" },
            borderRadius: "8px",
            padding: 4,
            marginBottom: 4,
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            background: "transparent",
            letterSpacing: "5px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "8px",
              padding: "2px", // Adjust thickness of gradient border
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for the border
              WebkitMask:
                "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)", // Mask to apply gradient only to the border
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            },
            zIndex: 1, // Ensure content inside remains above the border
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center", // Align bullet with text
              position: "relative",
              "&::before": {
                content: '""', // Add content
                display: "inline-block",
                width: "8px", // Bullet size
                height: "8px",
                borderRadius: "50%", // Circle shape
                background: "linear-gradient(to bottom, #FFFFFF, #50A1FF)", // Gradient bullet
                marginRight: "8px", // Space between bullet and text
              },
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for text
              WebkitBackgroundClip: "text", // Clip gradient to text
              WebkitTextFillColor: "transparent", // Transparent text fill
            }}
          >
            How do so?
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
           To identify your submissions, please clearly display your order number on the packaging of your delivery
           
          </Typography>       
        </Box>

        <Typography
          variant="h1"
          gutterBottom
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "40px",
            mb: 6,
            letterSpacing: "2px",
            background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
            WebkitBackgroundClip: "text", // Clip the background to text
            WebkitTextFillColor: "transparent",
          }}
        >
          How It Works: Grading Your Cards in 5 Simple Steps
        </Typography>
        <Box
          sx={{
            position: "relative",
            // width: "100%",
            // width: "1100px", // Uniform width
            width: { md: "1100px", xs: "100%" },
            borderRadius: "8px",
            padding: 4,
            marginBottom: 4,
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            background: "transparent",
            letterSpacing: "5px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "8px",
              padding: "2px", // Adjust thickness of gradient border
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for the border
              WebkitMask:
                "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)", // Mask to apply gradient only to the border
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            },
            zIndex: 1, // Ensure content inside remains above the border
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center", // Align bullet with text
              position: "relative",
              "&::before": {
                content: '""', // Add content
                display: "inline-block",
                width: "8px", // Bullet size
                height: "8px",
                borderRadius: "50%", // Circle shape
                background: "linear-gradient(to bottom, #FFFFFF, #50A1FF)", // Gradient bullet
                marginRight: "8px", // Space between bullet and text
              },
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for text
              WebkitBackgroundClip: "text", // Clip gradient to text
              WebkitTextFillColor: "transparent", // Transparent text fill
            }}
          >
            Submit Your Card Details
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
            Fill out the submission form on our website with accurate details
            about your cards.
            <br /> Double-check the information to ensure everything is correct
            before proceeding.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center", // Align bullet with text
              position: "relative",
              "&::before": {
                content: '""', // Add content
                display: "inline-block",
                width: "8px", // Bullet size
                height: "8px",
                borderRadius: "50%", // Circle shape
                background: "linear-gradient(to bottom, #FFFFFF, #50A1FF)", // Gradient bullet
                marginRight: "8px", // Space between bullet and text
              },
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for text
              WebkitBackgroundClip: "text", // Clip gradient to text
              WebkitTextFillColor: "transparent", // Transparent text fill
            }}
          >
            Make Payment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
            Complete the payment securely through our website to confirm your
            order.
            <br /> Once the payment is received, you'll be provided with the
            delivery instructions.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center", // Align bullet with text
              position: "relative",
              "&::before": {
                content: '""', // Add content
                display: "inline-block",
                width: "8px", // Bullet size
                height: "8px",
                borderRadius: "50%", // Circle shape
                background: "linear-gradient(to bottom, #FFFFFF, #50A1FF)", // Gradient bullet
                marginRight: "8px", // Space between bullet and text
              },
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for text
              WebkitBackgroundClip: "text", // Clip gradient to text
              WebkitTextFillColor: "transparent", // Transparent text fill
            }}
          >
            Send Your Cards
          </Typography>
          <Typography
            variant="body1"
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
            Pack your cards carefully to ensure their safety during transit.
            <br />
            Ship the cards to our grading facility at Delivery Address: Suite 570, SHOP 87 78 HEATHERTON ROAD ENDEAVOUR HILLS VIC 3802.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center", // Align bullet with text
              position: "relative",
              "&::before": {
                content: '""', // Add content
                display: "inline-block",
                width: "8px", // Bullet size
                height: "8px",
                borderRadius: "50%", // Circle shape
                background: "linear-gradient(to bottom, #FFFFFF, #50A1FF)", // Gradient bullet
                marginRight: "8px", // Space between bullet and text
              },
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for text
              WebkitBackgroundClip: "text", // Clip gradient to text
              WebkitTextFillColor: "transparent", // Transparent text fill
            }}
          >
            We Grade Your Cards
          </Typography>
          <Typography
            variant="body1"
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
            Our experts will carefully evaluate and grade your cards based on
            established standards.
            <br /> The grading process typically takes [insert timeframe here,
            if applicable].
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center", // Align bullet with text
              position: "relative",
              "&::before": {
                content: '""', // Add content
                display: "inline-block",
                width: "8px", // Bullet size
                height: "8px",
                borderRadius: "50%", // Circle shape
                background: "linear-gradient(to bottom, #FFFFFF, #50A1FF)", // Gradient bullet
                marginRight: "8px", // Space between bullet and text
              },
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient for text
              WebkitBackgroundClip: "text", // Clip gradient to text
              WebkitTextFillColor: "transparent", // Transparent text fill
            }}
          >
            Receive Your Graded Cards
          </Typography>
          <Typography
            variant="body1"
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
            Once grading is complete, we’ll send the cards back to you. <br />
            Use our website to track the progress of your cards at any time.
          </Typography>
        </Box>

        {/* Terms and Conditions Section */}
        <Box
  sx={{
    paddingTop: 4,
    width: { md: "1100px", xs: "100%" },
    color: "#FFFFFF",
    marginBottom: 5,
  }}
>
  <Typography
    variant="h6"
    gutterBottom
    sx={{
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginBottom: 2,
      justifyContent: "flex-start",
      display: "flex",
    }}
  >
    Terms and Conditions
  </Typography>

  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
      marginBottom: 2,
    }}
  >
    <strong>SKY Grading</strong> <br />
    <strong>Effective Date:</strong> 01/01/2025
  </Typography>

  {/* 1. Introduction */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    1. Introduction
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    Welcome to SKY Grading. By submitting your cards for grading, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
  </Typography>

  {/* 2. Grading Services */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    2. Grading Services
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    2.1 SKY Grading provides professional grading services for Pokémon cards. <br />
    2.2 Cards are graded based on a detailed evaluation of centering, surface, corners, and edges. <br />
    2.3 The assigned grade is final and non-negotiable once completed. <br />
    2.4 SKY Grading does not guarantee specific grades and is not responsible for differences in opinions between collectors and other grading companies.
  </Typography>

  {/* 3. Submission Guidelines */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    3. Submission Guidelines
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    3.1 Customers must complete the submission form and pay the applicable fees before grading begins. <br />
    3.2 SKY Grading reserves the right to reject submissions due to counterfeit, altered, tampered cards and reasonable doubt. <br />
    3.3 Cards must be sent in protective sleeves and properly packaged to prevent damage during transit. SKY Grading is not responsible for damages incurred during shipping to our facility.
  </Typography>

  {/* 4. Turnaround Times */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    4. Turnaround Times
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    4.1 Estimated turnaround times are provided but are not guaranteed and may vary based on demand. <br />
    4.2 SKY Grading will not be held liable for delays caused by unforeseen circumstances, including but not limited to high order volumes, shipping issues, or natural disasters.
  </Typography>

  {/* 5. Fees & Payments */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    5. Fees & Payments
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    5.1 All fees for grading services must be paid in full before the grading process begins. <br />
    5.2 Fees are non-refundable unless SKY Grading is unable to complete the grading service. <br />
    5.3 Additional charges may apply for special requests, expedited services, or additional handling.
  </Typography>

  {/* 6. Shipping & Insurance */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    6. Shipping & Insurance
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    6.1 SKY Grading ships completed orders via trusted courier services. Customers are responsible for shipping costs. <br />
    6.2 Customers purchase insurance for their shipments via selected grading packages. SKY Grading is not responsible for lost, stolen, or damaged items during transit. <br />
    6.3 If a package is lost or damaged after leaving our facility, customers must file a claim with the shipping provider.
  </Typography>

  {/* 7. Liability & Disclaimer */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    7. Liability & Disclaimer
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    7.1 SKY Grading is not responsible for any damage, loss, or theft occurring before, during, or after the grading process unless due to gross negligence on our part. <br />
    7.2 SKY Grading is not affiliated with The Pokémon Company, Nintendo, or any other trading card brand. <br />
    7.3 Our grading is subjective and intended for collectible purposes; it does not guarantee future value.
  </Typography>

  {/* 8. Dispute Resolution */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    8. Dispute Resolution
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    8.1 Any disputes arising from these terms shall be resolved through arbitration. <br />
    8.2 Customers waive their right to a class-action lawsuit and agree to settle disputes individually.
  </Typography>

  {/* 9. Privacy Policy */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    9. Privacy Policy
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    9.1 Customer information is collected for processing orders and will not be shared with third parties except as required by law. <br />
    9.2 SKY Grading may use anonymized data for business analytics and service improvements.
  </Typography>

  {/* 10. Amendments & Termination */}
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      fontSize: "1.25rem",
      marginTop: 2,
      marginBottom: 1,
    }}
  >
    10. Amendments & Termination
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
    }}
  >
    10.1 SKY Grading reserves the right to modify these terms at any time. Updates will be posted on our website. <br />
    10.2 Continued use of our services after changes constitute acceptance of the revised terms.
  </Typography>

  <Typography
    variant="body2"
    sx={{
      fontWeight: "semibold",
      fontSize: { xs: "14px", md: "20px" },
      textAlign: "left",
      marginTop: 2,
    }}
  >
    For any questions, please contact SKY Grading. <br />
    Thank you for choosing SKY Grading!
  </Typography>
</Box>
      </Container>
    </div>
  );
}

export default SubmitCard;

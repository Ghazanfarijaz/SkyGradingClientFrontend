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
            Ship the cards to our grading facility at Delivery Address: XYZ.
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
            // width: "100%",
            // width: "1100px", // Uniform width
            width: { md: "1100px", xs: "100%" },
            color: "#FFFFFF",
            marginBottom: 5,
            // justifyContent: "center",
            // alignItems: "center",
            // display: "flex",
            // flexDirection: "column",
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
            Terms and Conditions:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "semibold",
              fontSize: { xs: "14px", md: "20px" },
              textAlign: "left",
              // lineHeight: "1.75",
            }}
          >
            Terms and Conditions: These terms and conditions outline the rules
            and regulations for the use of Company Name's Website, located
            at Website.com. By accessing this website we assume you accept these
            terms and conditions. Do not continue to use Website Name if you do
            not agree to take all of the terms and conditions stated on this
            page. The following terminology applies to these Terms and
            Conditions, Privacy Statement and Disclaimer Notice and all
            Agreements: “Client”, “You” and “Your” refers to you, the person log
            on this website and compliant to the Company's terms and conditions.
            “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our
            Company. “Party”, “Parties”, or “Us”, refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of
            provision of the Company's stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default SubmitCard;

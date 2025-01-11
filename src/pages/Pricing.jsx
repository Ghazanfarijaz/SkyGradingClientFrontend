import React from "react";
import { Box, Container, Typography } from "@mui/material";

import PricingBoxes from "../components/PricingBoxes";

// Import SVG files
import visa from "../assets/visa-svgrepo-com.svg";
import gpay from "../assets/google-pay-svgrepo-com.svg";
import applepay from "../assets/apple-pay-logo-svgrepo-com.svg";
import paypal from "../assets/paypal-logo-svgrepo-com.svg";
import stripe from "../assets/stripe-svgrepo-com.svg";
import bitpay from "../assets/bitpay-svgrepo-com.svg";

function Pricing() {
  // Array of imported SVG files for dynamic rendering
  const paymentIcons = [visa, gpay, applepay, paypal, stripe, bitpay];

  return (
    <div className=" relative min-h-[100vh] w-[100%]">
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
          pt: 15,
        }}
      >
        {/* Background Component */}
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
            top: "10%",
            left: { md: "90%", xs: "60%" },
            transform: "translateX(-50%)",
            width: { md: "200px", xs: "150px" },
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
            top: "35%",
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
        {/* Title Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              color: "#FFFFFF",
              fontWeight: "semibold",
              fontSize: "40px",
              letterSpacing: "0.1em",
            }}
          >
            Pricing
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#FFFFFF",
              fontSize: "1.25rem",
            }}
          >
            Have a look at our highly affordable pricing model
          </Typography>
        </Box>
        {/* Pricing Boxes */}
        <Box sx={{ maxWidth: "1200px" }}>
          <PricingBoxes />
        </Box>
        {/* Pricing Plans Section */}
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
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
            Free Service:
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
            Our Free Plan is perfect for personal use, providing essential
            features to get you started effortlessly. Enjoy access to basic
            tools such as Search Cards, Submitting and Viewing Cards, and Full
            Dashboard Access. You can also give reviews and stay organized with
            Custom Label Options. All this is available at no cost, making it
            ideal for individuals seeking a reliable and user-friendly
            experience.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              width: "100%",
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginTop: 3,
            }}
          >
            Paid Service:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #50A1FF)", // Gradient applied to text
              WebkitBackgroundClip: "text", // Clip the background to text
              WebkitTextFillColor: "transparent",
            }}
          >
            Unlock the full potential with our Professional Plan at just $12 per
            month. Gain access to premium features like Unlimited Submitting,
            Personal Onboarding, and Real-Time Submission Tracking. Enhance your
            workflow with our Desktop App and enjoy the benefits of Premium Chat
            Support. For commercial needs, the plan also includes a Commercial
            License. Whether you're a professional or need advanced features,
            this plan is designed to elevate your experience.
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
              // fontSize: "20px",
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

        {/* Payment Made Easy Section */}
        <Box
          sx={{
            paddingTop: 4,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginBottom: { md: 4, xs: 2 },
            }}
          >
            Payment made easy
          </Typography>

          {/* Sliding Icons */}
          <Box
            sx={{
              overflow: "hidden",
              position: "relative",
              width: "100%",
              marginTop: { md: "20px", sm: "10px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 8,
                animation: "slideIcons 12s linear infinite",
                width: "fit-content",
              }}
            >
              {/* Render Icons Twice for Seamless Effect */}
              {Array(2)
                .fill(paymentIcons)
                .flat()
                .map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="Payment Icon"
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "contain",
                    }}
                  />
                ))}
            </Box>
          </Box>

          {/* Custom Animation Keyframes */}
          <style>
            {`
              @keyframes slideIcons {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}
          </style>
        </Box>
      </Container>
    </div>
  );
}

export default Pricing;

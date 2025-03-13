import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import InProgress from "../components/InProgress";
import OrderTracking from "../components/OrderTracking";
import PastOrder from "../components/PastOrder";
function Tracking() {
  const [isTracking, setIsTracking] = useState(false);
  return (
    <div className=" relative max-w-8xl min-h-[100vh] bg-transparent text-white">
      <Box
        sx={{
          position: "absolute",
          top: "0%",
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
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: { md: "75%", sx: "70%" },
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
          top: "50%",
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

      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: { md: "75%", sx: "70%" },
          transform: "translateX(-50%)",
          width: "200px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      />

      {isTracking && (
        <Box
          sx={{
            position: "absolute",
            top: "75%",
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
      )}
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: "15%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0, // Place the gradient behind the content
        }}
      />
      <Box
        sx={{
          //   height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: "15vh",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "30px", fontWeight: "bold", mb: 10 }}
        >
          Order Tracking
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              ml: 5,
              letterSpacing: "2px",
              mb: 2,
            }}
          >
            IN PROGRESS
          </Typography>
          <InProgress />
        </Box>

        <Box>
          <OrderTracking setIsTracking={setIsTracking} />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              ml: 5,
              letterSpacing: "2px",
              mb: 2,
            }}
          >
            Past Order
          </Typography>
          <PastOrder />
        </Box>


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
      </Box>
    </div>
  );
}

export default Tracking;

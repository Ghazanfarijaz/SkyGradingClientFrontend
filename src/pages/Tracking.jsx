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
            // width: "100%",
            // width: "1100px", // Uniform width
            width: { md: "1100px", xs: "90%" },
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
      </Box>
    </div>
  );
}

export default Tracking;

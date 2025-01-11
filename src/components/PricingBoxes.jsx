// export default PricingBoxes;
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import CheckIcon from "@mui/icons-material/Check";
import BoltIcon from "@mui/icons-material/Bolt";
import StarIcon from "@mui/icons-material/Star";

function PricingBoxes() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 8 },
          flexWrap: "wrap",
          padding: 4,
          backgroundColor: "#1A1A1A",
        }}
      >
        {/* Free Plan Box */}
        <Box
          sx={{
            width: { xs: "100%", md: "350px" },
            height: "380px",
            padding: "24px",
            borderRadius: "16px",
            backgroundColor: "#A4D5F8",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            color: "black",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <BoltIcon sx={{ fontSize: "2rem", color: "#50A1FF", mb: 1 }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 1, lineHeight: "1.5" }}
            >
              Free
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: 3, lineHeight: "1.5" }}
            >
              For personal use only.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "left", lineHeight: "1.75" }}>
            {"Search Cards,View Cards,Give Review,Desktop app".split(",").map(
              (feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 1,
                  }}
                >
                  <CheckIcon sx={{ fontSize: "1rem", color: "#50A1FF", mr: 1 }} />
                  <Typography variant="body2">{feature}</Typography>
                </Box>
              )
            )}
          </Box>
        </Box>

        {/* Starting from $50 Plan Box */}
        <Box
          sx={{
            width: { xs: "100%", md: "400px" },
            height: "420px",
            padding: "35px",
            borderRadius: "20px",
            backgroundColor: "#7caff2",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            color: "#000000",
            textAlign: "left",
            lineHeight: "1.75",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box>
            <StarIcon sx={{ fontSize: "2rem", color: "#FFFFFF", mb: 1 }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 1, lineHeight: "1.5" }}
            >
              $50 <span style={{ fontSize: "1rem" }}>/ per card</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: 3, lineHeight: "1.5" }}
            >
              Includes $500 insurance and label options.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "left", lineHeight: "1.75" }}>
            {["$500 insurance", "Basic Label (+$0)", "Elemental Label (+$2.49)", "SKY Label (+$5.49)"].map(
              (feature, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
                >
                  <CheckIcon sx={{ fontSize: "1rem", color: "black", mr: 1 }} />
                  <Typography variant="body2">{feature}</Typography>
                </Box>
              )
            )}
          </Box>
        </Box>

        {/* Starting from $100 Plan Box */}
        <Box
          sx={{
            width: { xs: "100%", md: "400px" },
            height: "420px",
            padding: "35px",
            borderRadius: "20px",
            backgroundColor: "#02CCFE",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            color: "#000000",
            textAlign: "left",
            lineHeight: "1.75",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box>
            <StarIcon sx={{ fontSize: "2rem", color: "#FFFFFF", mb: 1 }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 1, lineHeight: "1.5" }}
            >
              $100 <span style={{ fontSize: "1rem" }}>/ per card</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: 3, lineHeight: "1.5" }}
            >
              Includes $2000 insurance and label options.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "left", lineHeight: "1.75" }}>
            {["$2000 insurance", "Basic Label (+$0)", "Elemental Label (+$2.49)", "SKY Label (+$5.49)"].map(
              (feature, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
                >
                  <CheckIcon sx={{ fontSize: "1rem", color: "black", mr: 1 }} />
                  <Typography variant="body2">{feature}</Typography>
                </Box>
              )
            )}
          </Box>
        </Box>

        {/* Starting from $250 Plan Box */}
        <Box
          sx={{
            width: { xs: "100%", md: "400px" },
            height: "420px",
            padding: "35px",
            borderRadius: "20px",
            backgroundColor: "#0066CC",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            color: "#FFFFFF",
            textAlign: "left",
            lineHeight: "1.75",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box>
            <StarIcon sx={{ fontSize: "2rem", color: "#FFFFFF", mb: 1 }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 1, lineHeight: "1.5" }}
            >
              $250 <span style={{ fontSize: "1rem" }}>/ per card</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: 3, lineHeight: "1.5" }}
            >
              Includes $5000 insurance and label options.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "left", lineHeight: "1.75" }}>
            {["$5000 insurance", "Basic Label (+$0)", "Elemental Label (+$2.49)", "SKY Label (+$5.49)"].map(
              (feature, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
                >
                  <CheckIcon sx={{ fontSize: "1rem", color: "white", mr: 1 }} />
                  <Typography variant="body2">{feature}</Typography>
                </Box>
              )
            )}
          </Box>
        </Box>
         {/* Custom Submission Plan Box */}
         <Box
          sx={{
            width: { xs: "100%", md: "400px" },
            height: "420px",
            padding: "24px",
            borderRadius: "16px",
            backgroundColor: "#4A90E2",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            color: "white",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 1, lineHeight: "1.5" }}
            >
              Custom Submission
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: 3, lineHeight: "1.5" }}
            >
              Please contact us for a custom submission tailored to your needs.
            </Typography>
          </Box>
         
          <Link
      to="/contact"
      style={{alignSelf: "center", textDecoration: "none" }} // Ensures no underline
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "black",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "20px",
          padding: "8px 16px",
          width: "fit-content",
          alignSelf: "center",
          "&:hover": {
            backgroundColor: "#E6F7FF",
          },
        }}
      >
        Contact Us
      </Button>
    </Link>
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          textAlign: "center",
          marginTop: 4,
          fontSize: "0.9rem",
          marginBottom: 6,
        }}
      >
        Please Note: Your payment invoice is automatically generated when Sky
        <br />
        Grading's services are complete, and your submission is ready to be
        returned.
      </Typography>
    </>
  );
}

export default PricingBoxes;
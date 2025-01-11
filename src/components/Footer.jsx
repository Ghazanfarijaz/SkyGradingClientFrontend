import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        bgcolor: "transparent", // Background color
        p: 2, // Padding
        color: "white",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Section: Logo & Copyright */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", mb: { xs: 1, md: 0 } }}
          >
            <img
              src={Logo}
              alt="Sky Grading Logo"
              style={{
                width: 80, // Adjust logo size
                cursor: "pointer",
                marginRight: "10px",
              }}
            />
            <Typography
              fontWeight="bold"
              sx={{
                color: "#E6E6E6", // Light gray text
                fontSize: "16px",
              }}
            >
              Sky Grading, LLC
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              mt: { xs: 1, md: 0 },
            }}
          >
            &copy; 2023 Sky Grading. All rights reserved.
          </Typography>
        </Grid>

        {/* Right Section: Navigation Links */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            flexWrap: "wrap",
            gap: 1.5,
            textAlign: "center",
            // position: { md: "absolute", xs: "relative" },
            // bottom: { md: 0, xs: 0 },
            // right: { md: 10, xs: 0 },
          }}
        >
          {["Privacy", "Terms", "Support", "Contact", "FAQ"].map(
            (item, index) => (
              <Button
                key={index}
                variant="text"
                sx={{
                  color: "white", // 70% opacity
                  fontWeight: "medium",
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                {item}
              </Button>
            )
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
import React from "react";
import { Box, Container } from "@mui/material";
import Footer from "./components/Footer"; // Replace with your Navbar component
import Navbar from "./components/Navbar"; // Replace with your Footer component

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#1A1A1A", // Black background
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          zIndex: 1000, // Ensure navbar is on top
          position: "sticky", // Make navbar stick at the top
          top: 0,
        }}
      >
        <Navbar />
      </Box>

      {/* Main Content */}
      <div>{children}</div>

      {/* Footer */}
      <Box
        sx={{
          //   backgroundColor: "#1A1A1A", // Black background
          //   color: "#FFFFFF", // White text
          padding: 2,
          //   position: "sticky",
          //   bottom: 0,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

import React, { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    // You can add logic here to fetch payment details or update the database
    console.log("Payment successful!");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Payment Successful! 🎉
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Thank you for your payment. Your cards will be processed shortly.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/")} // Redirect to the home page
      >
        Go Back Home
      </Button>
    </Box>
  );
}

export default Success;
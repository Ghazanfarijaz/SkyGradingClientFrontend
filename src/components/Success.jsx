import React, { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAddCardMutation } from "../api/apiSlice"; // Import the addCard mutation

function Success() {
  const navigate = useNavigate();
  const [addCard] = useAddCardMutation(); // Initialize the addCard mutation

  useEffect(() => {
    // Retrieve the cardsArray from localStorage
    const storedCards = JSON.parse(localStorage.getItem("cardsArray"));

    if (storedCards && storedCards.length > 0) {
      console.log("Cards retrieved from localStorage:", storedCards);

      // Submit all cards to the database
      const submitCards = async () => {
        try {
          for (const card of storedCards) {
            await addCard(card).unwrap(); // Add each card to the database
            console.log("Card added to database:", card);
          }
          console.log("All cards submitted successfully!");
          alert("All cards submitted successfully!")

          // Clear the cardsArray from localStorage after submission
          localStorage.removeItem("cardsArray");
        } catch (error) {
          console.error("Error submitting cards to database:", error);
        }
      };

      submitCards(); // Call the function to submit cards
    }
  }, [addCard]);

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
        onClick={() => navigate("/submit")} // Redirect to the home page
      >
        Go Back Home
      </Button>
    </Box>
  );
}

export default Success;
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import image from "../assets/Rectangle.png";
import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
import { useGetCardByUserIdAndCardNumberQuery } from "../api/apiSlice"; // Import the query hook

const OrderTracking = () => {
  const { user } = useAuth(); // Get user details
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch card details based on userId and trackingNumber
  const { data: cardData, isLoading, error } = useGetCardByUserIdAndCardNumberQuery(
    { userId: user?.id, cardNumber: trackingNumber },
    { skip: !trackingNumber } // Skip query if trackingNumber is not provided
  );

  const handleTrackOrder = () => {
    if (cardData) {
      // Set the fetched card data to state
      setOrderData({
        id: cardData?.id,
        name: cardData?.name,
        cardNumber: cardData?.cardNumber,
        cost: cardData?.cost,
        orderDate: cardData?.orderDate,
        deliveryDate: cardData?.deliveryDate,
        steps: cardData?.steps || [], // Ensure steps array is present
        currentStep: cardData?.currentStep || 0,
      });
      setIsModalOpen(true); // Open the modal
    } else {
      alert("Order not found!");
      setOrderData(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTrackingNumber(""); // Clear the search bar
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { md: "30px", xs: "5px" },
        backgroundColor: "#1A1A1A",
        minHeight: "100%",
        color: "#FFFFFF",
      }}
    >
      {/* Input Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          gap: 2,
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              background: "transparent",
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(#000, #000), linear-gradient(90deg, #02CCFE, #FFFFFF)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              "& input": {
                color: "#FFFFFF",
                textAlign: "center",
              },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleTrackOrder}
          sx={{
            backgroundColor: "#F27013",
            color: "#FFFFFF",
            borderRadius: "50px",
            padding: "10px 30px",
            "&:hover": { backgroundColor: "#D95812" },
          }}
        >
          Track Order
        </Button>
      </Box>

      {/* Show Loading or Error */}
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>Error fetching data. Please try again.</Typography>}

      {/* Modal for Order Details */}
      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img src={image} alt="Product" style={{ width: "100px", height: "100px" }} />
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Order ID: {orderData?.id}
              </Typography>
              <Typography>
                Order Date: {orderData?.orderDate} | Estimated Delivery:{" "}
                {orderData?.deliveryDate}
              </Typography>
            </Box>
          </Box>
          <Stepper activeStep={orderData?.currentStep} alternativeLabel>
            {orderData?.steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6">Order Summary</Typography>
            <Typography><strong>Name:</strong> {orderData?.name}</Typography>
            <Typography><strong>Card Number:</strong> {orderData?.cardNumber}</Typography>
            <Typography><strong>Cost:</strong> {orderData?.cost}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderTracking;

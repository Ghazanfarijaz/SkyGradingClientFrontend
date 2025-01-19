// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   TextField,
//   Stepper,
//   Step,
//   StepLabel,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import image from "../assets/Rectangle.png";
// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
// import { useGetCardByUserIdAndCardNumberQuery } from "../api/apiSlice"; // Import the query hook

// const OrderTracking = () => {
//   const { user } = useAuth(); // Get user details
//   const [trackingNumber, setTrackingNumber] = useState("");
//   const [orderData, setOrderData] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch card details based on userId and trackingNumber
//   const { data: cardData, isLoading, error } = useGetCardByUserIdAndCardNumberQuery(
//     { userId: user?.id, cardNumber: trackingNumber },
//     { skip: !trackingNumber } // Skip query if trackingNumber is not provided
//   );

//   const handleTrackOrder = () => {
//     if (cardData) {
//       // Set the fetched card data to state
//       setOrderData({
//         id: cardData?.id,
//         name: cardData?.name,
//         cardNumber: cardData?.cardNumber,
//         cost: cardData?.cost,
//         orderDate: cardData?.orderDate,
//         deliveryDate: cardData?.deliveryDate,
//         steps: cardData?.steps || [], // Ensure steps array is present
//         currentStep: cardData?.currentStep || 0,
//       });
//       setIsModalOpen(true); // Open the modal
//     } else {
//       alert("Order not found!");
//       setOrderData(null);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setTrackingNumber(""); // Clear the search bar
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: { md: "30px", xs: "5px" },
//         backgroundColor: "#1A1A1A",
//         minHeight: "100%",
//         color: "#FFFFFF",
//       }}
//     >
//       {/* Input Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { md: "row", xs: "column" },
//           gap: 2,
//           alignItems: "center",
//           marginBottom: "40px",
//         }}
//       >
//         <TextField
//           variant="outlined"
//           placeholder="Enter Tracking Number"
//           value={trackingNumber}
//           onChange={(e) => setTrackingNumber(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               borderRadius: "50px",
//               background: "transparent",
//               border: "2px solid transparent",
//               backgroundImage:
//                 "linear-gradient(#000, #000), linear-gradient(90deg, #02CCFE, #FFFFFF)",
//               backgroundOrigin: "border-box",
//               backgroundClip: "content-box, border-box",
//               "& input": {
//                 color: "#FFFFFF",
//                 textAlign: "center",
//               },
//             },
//           }}
//         />
//         <Button
//           variant="contained"
//           onClick={handleTrackOrder}
//           sx={{
//             backgroundColor: "#F27013",
//             color: "#FFFFFF",
//             borderRadius: "50px",
//             padding: "10px 30px",
//             "&:hover": { backgroundColor: "#D95812" },
//           }}
//         >
//           Track Order
//         </Button>
//       </Box>

//       {/* Show Loading or Error */}
//       {isLoading && <Typography>Loading...</Typography>}
//       {error && <Typography>Error fetching data. Please try again.</Typography>}

//       {/* Modal for Order Details */}
//       <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="md" fullWidth>
//         <DialogTitle>Order Details</DialogTitle>
//         <DialogContent>
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
//             <img src={image} alt="Product" style={{ width: "100px", height: "100px" }} />
//             <Box sx={{ marginLeft: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                 Order ID: {orderData?.id}
//               </Typography>
//               <Typography>
//                 Order Date: {orderData?.orderDate} | Estimated Delivery:{" "}
//                 {orderData?.deliveryDate}
//               </Typography>
//             </Box>
//           </Box>
//           <Stepper activeStep={orderData?.currentStep} alternativeLabel>
//             {orderData?.steps.map((step, index) => (
//               <Step key={index}>
//                 <StepLabel>{step.label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <Box sx={{ marginTop: 2 }}>
//             <Typography variant="h6">Order Summary</Typography>
//             <Typography><strong>Name:</strong> {orderData?.name}</Typography>
//             <Typography><strong>Card Number:</strong> {orderData?.cardNumber}</Typography>
//             <Typography><strong>Cost:</strong> {orderData?.cost}</Typography>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default OrderTracking;



// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   TextField,
//   Divider,
//   Stepper,
//   Step,
//   StepLabel,
// } from "@mui/material";
// import image from "../assets/Rectangle.png";

// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
// import { useGetCardByUserIdAndCardNumberQuery } from "../api/apiSlice"; // Import the query hook


// const OrderTracking = ({ setIsTracking }) => {
//     const { user } = useAuth(); // Get user details

//   const [trackingNumber, setTrackingNumber] = useState("");
//   const [orderData, setOrderData] = useState(null);



//   // Mock Data
//   const mockOrder = {
//     id: "33",
//     // img: "image",
//     name: "Pokemon",
//     cardNumber: "189824",
//     cost: "$221.88",
//     orderDate: "Dec 10, 2024",
//     deliveryDate: "Dec 18, 2024",
//     steps: [
//       { label: "Order Confirmed", date: "Wed, 11th Jan" },
//       { label: "Shipped", date: "Wed, 11th Jan" },
//       { label: "Checking", date: "Wed, 12th Jan" },
//       { label: "Delivered", date: "Expected by, Mon 16th Jan" },
//     ],
//     currentStep: 2, // Index of the current step (0-based)
//   };

//     // Fetch card details based on userId and trackingNumber
//   const { data: cardData, isLoading, error } = useGetCardByUserIdAndCardNumberQuery(
//     { userId: user?.id, cardNumber: trackingNumber },
//     { skip: !trackingNumber } // Skip query if trackingNumber is not provided
//   );

//   console.log("here is the carddata " , cardData)
//   console.log("here is the ", cardData?.trackingStatus )

//   const handleTrackOrder = () => {
//     if (!trackingNumber) {
//       alert("Please enter a tracking number!");
//       return;
//     }
  
//     if (cardData) {
//       let checkSET = -1; // Default value if none of the conditions match
  
//       switch (cardData.trackingStatus) {
//         case "confirmed":
//           checkSET = 0;
//           break;
//         case "shipped":
//           checkSET = 1;
//           break;
//         case "checking":
//           checkSET = 2;
//           break;
//         case "delivered":
//           checkSET = 4;
//           break;
//         default:
//           checkSET = -1; // Fallback for unknown status
//       }
  
//       setOrderData({
//         id: cardData?.id,
//         name: cardData?.name,
//         cardNumber: cardData?.cardNumber,
//         cost: cardData?.cost,
//         orderDate: cardData?.createdAt,
//         image: cardData?.image,
//         deliveryDate: cardData?.updatedAt,
//         steps: [
//           { label: "Order Confirmed", date: cardData?.updatedAt },
//           { label: "Shipped", date: cardData?.updatedAt },
//           { label: "Checking", date: cardData?.updatedAt },
//           { label: "Delivered", date: cardData?.updatedAt },
//         ],
//         currentStep: checkSET,
//       });
//       setIsTracking(true);
//     } else {
//       alert("Order not found!");
//       setOrderData(null);
//     }
//   };

//   // const handleTrackOrder = () => {
//   //   // Simulate fetching order details
//   //   if (trackingNumber === mockOrder.id) {
//   //     setOrderData(mockOrder);
//   //     setIsTracking(true);
//   //   } else {
//   //     alert("Order not found!");
//   //     setOrderData(null);
//   //   }
//   // };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: { md: "30px", xs: "5px" },
//         backgroundColor: "#1A1A1A",
//         minHeight: "100%",
//         color: "#FFFFFF",
//       }}
//     >
//       {/* Input Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { md: "row", xs: "column" },
//           gap: 2,
//           alignItems: "center",
//           marginBottom: "40px",
//         }}
//       >
//         <TextField
//           variant="outlined"
//           placeholder="Enter Tracking Number"
//           value={trackingNumber}
//           onChange={(e) => setTrackingNumber(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               borderRadius: "50px",
//               background: "transparent",
//               border: "2px solid transparent",
//               backgroundImage:
//                 "linear-gradient(#000, #000), linear-gradient(90deg, #02CCFE, #FFFFFF)",
//               backgroundOrigin: "border-box",
//               backgroundClip: "content-box, border-box",
//               "& input": {
//                 color: "#FFFFFF",
//                 textAlign: "center",
//               },
//             },
//           }}
//         />
//         <Button
//           variant="contained"
//           onClick={handleTrackOrder}
//           sx={{
//             backgroundColor: "#F27013",
//             color: "#FFFFFF",
//             borderRadius: "50px",
//             padding: "10px 30px",
//             "&:hover": { backgroundColor: "#D95812" },
//           }}
//         >
//           Track Order
//         </Button>
//       </Box>

//       {/* Order Details */}
//       {orderData && (
//         <>
//           <Box
//             sx={{
//               width: "100%",
//               textAlign: "center",

//               alignItems: "center",
//               marginBottom: "50px",
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "flex-start",
//               gap: 2, // Remove the gap between child elements
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={orderData.image}
//                 alt="Product"
//                 style={{ width: "100px", height: "100px" }}
//               />
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start", // Align content to the start of the flex box
//                 justifyContent: "center", // Center content vertically
//                 gap: "5px", // Adjust spacing between the inner elements
//               }}
//             >
//               <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                 Order ID: {orderData.id}
//               </Typography>

//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: { md: "row", xs: "column" },
//                   gap: "10px",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: { md: "bold", sm: "normal" },
//                     borderRight: { md: "1px solid #FFFFFF" },
//                     paddingRight: "10px",
//                   }}
//                 >
//                   Order date: {orderData.orderDate}
//                   {/* {new Date(orderData.orderDate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} */}
//                 </Typography>
//                 <Typography sx={{ color: "#8EFF8E" }}>
//                   Estimated delivery: {orderData.deliveryDate}
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>

//           {/* Stepper for Order Status */}

//           <Box sx={{ width: "100%", maxWidth: "1200px", marginBottom: "50px" }}>
//             <Stepper
//               activeStep={orderData.currentStep}
//               alternativeLabel
//               sx={{
//                 "& .MuiStepIcon-root": {
//                   color: "#FFFFFF", // Default white color for the circle
//                 },
//                 "& .MuiStepIcon-active": {
//                   color: "#12B76A", // Green color for active step
//                 },
//                 "& .MuiStepIcon-completed": {
//                   color: "#12B76A", // Green color for completed step
//                 },
//                 "& .MuiStepLabel-label": {
//                   marginTop: "-10px", // Adjust the label position if needed
//                 },
//               }}
//             >
//               {orderData.steps.map((step, index) => (
//                 <Step key={index}>
//                   <StepLabel
//                     StepIconProps={{
//                       style: {
//                         color:
//                           index <= orderData.currentStep
//                             ? "#12B76A"
//                             : "#FFFFFF", // Green for completed, white for the rest
//                       },
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         color:
//                           index <= orderData.currentStep
//                             ? "#12B76A"
//                             : "#FFFFFF",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {step.label}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         color: "#FFFFFF",
//                         fontSize: "12px",
//                         marginTop: "8px",
//                       }}
//                     >
//                       {index <= orderData.currentStep && step.date
//                         ? step.date
//                         : ""}
//                     </Typography>
//                   </StepLabel>
//                 </Step>
//               ))}
//             </Stepper>
//           </Box>

//           {/* Order Summary Box */}
//           <Box
//             sx={{
//               position: "relative",
//               // width: "100%",
//               // width: "1100px", // Uniform width
//               // width: { md: "90%", xs: "100%" },
//               width: "80vw",
//               borderRadius: "40px",
//               padding: 4,
//               marginBottom: 4,
//               color: "#FFFFFF",
//               display: "flex",
//               flexDirection: "column",
//               textAlign: "left",
//               background: "transparent",
//               letterSpacing: "5px",
//               lineHeight: "1.5",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 borderRadius: "40px",
//                 padding: "4px", // Adjust thickness of gradient border
//                 background: "linear-gradient(to left, #FFFFFF, #50A1FF)", // Gradient for the border
//                 WebkitMask:
//                   "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)", // Mask to apply gradient only to the border
//                 WebkitMaskComposite: "destination-out",
//                 maskComposite: "exclude",
//               },
//               zIndex: 1, // Ensure content inside remains above the border
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 marginBottom: "20px",
//               }}
//             >
//               Order Summary
//             </Typography>

//             <Typography
//               sx={{ justifyContent: "space-between", display: "flex" }}
//             >
//               <strong>Order ID:</strong>
//               <span>{orderData.id}</span>
//             </Typography>
//             <Typography
//               sx={{ justifyContent: "space-between", display: "flex" }}
//             >
//               <strong>Name:</strong> <span>{orderData.name}</span>
//             </Typography>
//             <Typography
//               sx={{ justifyContent: "space-between", display: "flex" }}
//             >
//               <strong>Card Number:</strong> <span>{orderData.cardNumber}</span>
//             </Typography>
//             <Typography
//               sx={{ justifyContent: "space-between", display: "flex" }}
//             >
//               <strong>Cost:</strong> <span>{orderData.cost}</span>
//             </Typography>
//             <Typography
//               sx={{ justifyContent: "space-between", display: "flex" }}
//             >
//               <strong>Order Date:</strong> <span>{orderData.orderDate}</span>
//             </Typography>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default OrderTracking;


import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Alert,
} from "@mui/material";
import image from "../assets/Rectangle.png";
import { useAuth } from "../authentication/authProvider";
import { useGetCardByUserIdAndCardNumberQuery } from "../api/apiSlice";

const OrderTracking = ({ setIsTracking }) => {
  const { user } = useAuth();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderData, setOrderData] = useState(null);

  const {
    data: cardData,
    isLoading,
    error,
  } = useGetCardByUserIdAndCardNumberQuery(
    { userId: user?.id, cardNumber: trackingNumber },
    { skip: !trackingNumber }
  );

  const handleTrackOrder = () => {
    if (!trackingNumber) {
      alert("Please enter a tracking number!");
      return;
    }

    if (cardData) {
      let checkSET = -1;

      switch (cardData.trackingStatus) {
        case "confirmed":
          checkSET = 0;
          break;
        case "shipped":
          checkSET = 1;
          break;
        case "checking":
          checkSET = 2;
          break;
        case "delivered":
          checkSET = 4;
          break;
        default:
          checkSET = -1;
      }

      setOrderData({
        id: cardData?.id,
        name: cardData?.name,
        cardNumber: cardData?.cardNumber,
        cost: cardData?.cost,
        orderDate: cardData?.createdAt,
        image: cardData?.image,
        deliveryDate: cardData?.updatedAt,
        steps: [
          { label: "Order Confirmed", date: cardData?.updatedAt },
          { label: "Shipped", date: cardData?.updatedAt },
          { label: "Checking", date: cardData?.updatedAt },
          { label: "Delivered", date: cardData?.updatedAt },
        ],
        currentStep: checkSET,
      });
      setIsTracking(true);
    } else {
      alert("Order not found!");
      setOrderData(null);
    }
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
          disabled={isLoading}
          sx={{
            backgroundColor: "#F27013",
            color: "#FFFFFF",
            borderRadius: "50px",
            padding: "10px 30px",
            "&:hover": { backgroundColor: "#D95812" },
          }}
        >
          {isLoading ? <CircularProgress size={24} /> : "Track Order"}
        </Button>
      </Box>

      {/* Error Handling */}
      {error && (
        <Alert severity="error" sx={{ marginBottom: "20px" }}>
          Failed to fetch order details. Please try again.
        </Alert>
      )}

      {/* Order Details */}
      {orderData && (
        <>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              alignItems: "center",
              marginBottom: "50px",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={orderData.image || image}
                alt="Product"
                style={{ width: "100px", height: "100px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Order ID: {orderData.id}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: { md: "bold", sm: "normal" },
                    borderRight: { md: "1px solid #FFFFFF" },
                    paddingRight: "10px",
                  }}
                >
                  Order date: {orderData.orderDate}
                </Typography>
                <Typography sx={{ color: "#8EFF8E" }}>
                  Estimated delivery: {orderData.deliveryDate}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Stepper for Order Status */}
          <Box sx={{ width: "100%", maxWidth: "1200px", marginBottom: "50px" }}>
            <Stepper
              activeStep={orderData.currentStep}
              alternativeLabel
              sx={{
                "& .MuiStepIcon-root": {
                  color: "#FFFFFF",
                },
                "& .MuiStepIcon-active": {
                  color: "#12B76A",
                },
                "& .MuiStepIcon-completed": {
                  color: "#12B76A",
                },
                "& .MuiStepLabel-label": {
                  marginTop: "-10px",
                },
              }}
            >
              {orderData.steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel
                    StepIconProps={{
                      style: {
                        color:
                          index <= orderData.currentStep
                            ? "#12B76A"
                            : "#FFFFFF",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          index <= orderData.currentStep
                            ? "#12B76A"
                            : "#FFFFFF",
                        fontWeight: "bold",
                      }}
                    >
                      {step.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "12px",
                        marginTop: "8px",
                      }}
                    >
                      {index <= orderData.currentStep && step.date
                        ? step.date
                        : ""}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Order Summary Box */}
          <Box
            sx={{
              position: "relative",
              width: { md: "80vw", xs: "90%" },
              borderRadius: "40px",
              padding: 4,
              marginBottom: 4,
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              background: "transparent",
              letterSpacing: "5px",
              lineHeight: "1.5",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "40px",
                padding: "4px",
                background: "linear-gradient(to left, #FFFFFF, #50A1FF)",
                WebkitMask:
                  "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Order Summary
            </Typography>
            <Typography sx={{ justifyContent: "space-between", display: "flex" }}>
              <strong>Order ID:</strong> <span>{orderData.id}</span>
            </Typography>
            <Typography sx={{ justifyContent: "space-between", display: "flex" }}>
              <strong>Name:</strong> <span>{orderData.name}</span>
            </Typography>
            <Typography sx={{ justifyContent: "space-between", display: "flex" }}>
              <strong>Card Number:</strong> <span>{orderData.cardNumber}</span>
            </Typography>
            <Typography sx={{ justifyContent: "space-between", display: "flex" }}>
              <strong>Cost:</strong> <span>{orderData.cost}</span>
            </Typography>
            <Typography sx={{ justifyContent: "space-between", display: "flex" }}>
              <strong>Order Date:</strong> <span>{orderData.orderDate}</span>
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default OrderTracking;
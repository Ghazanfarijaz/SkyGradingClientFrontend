// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Typography,
//   Divider,
// } from "@mui/material";

// import { useGetCardDetailsMutation } from "../api/apiSlice"; // Assuming your API slice

// function PaymentCard() {
//   const [formData, setFormData] = useState({
//     name: "",
//     set: "",
//     releaseYear: "",
//     cardNumber: "",
//     language: "",
//     label: "",
//     certificationNumber: "",
//     address: "",
//   });

//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Dummy function to simulate backend integration
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       name,
//       set,
//       releaseYear,
//       cardNumber,
//       language,
//       label,
//       certificationNumber,
//       address,
//     } = formData;

//     // Basic validation
//     if (
//       !name ||
//       !set ||
//       !releaseYear ||
//       !cardNumber ||
//       !language ||
//       !label ||
//       !certificationNumber ||
//       !address
//     ) {
//       setResponseMessage("All fields are required!");
//       return;
//     }

//     // Commented backend integration logic
//     /*
//     try {
//       const response = await fetch("http://your-node-backend.com/submit-card", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setResponseMessage("Payment submitted successfully!");
//         setFormData({
//           name: "",
//           set: "",
//           releaseYear: "",
//           cardNumber: "",
//           language: "",
//           label: "",
//           certificationNumber: "",
//           address: "",
//         });
//       } else {
//         setResponseMessage("Failed to submit payment.");
//       }
//     } catch (error) {
//       setResponseMessage("An error occurred. Please try again later.");
//     }
//     */

//     // Simulate a successful response
//     setTimeout(() => {
//       setResponseMessage("Payment submitted successfully!");
//     }, 1000);
//   };

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1,
//         paddingLeft: { xs: 0, md: "32px" },
//         paddingRight: { xs: 0, md: "32px" },
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           padding: 4,
//           borderRadius: 3,
//           margin: "0 auto",
//         }}
//       >
//         {/* Title */}
//         <Typography
//           variant="h1"
//           align="center"
//           gutterBottom
//           sx={{
//             color: "#FFFFFF",
//             fontWeight: "bold",
//             fontSize: "35px",
//             mb: 1.5,
//             letterSpacing: "3px",
//           }}
//         >
//           Submit Your Card Details For Grading
//         </Typography>

//         <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 1.5,
//               width: "100%",
//             }}
//           >
//             {/* Name and Set */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Card name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Set</label>
//                 <input
//                   type="text"
//                   name="set"
//                   placeholder="Enter your Set"
//                   value={formData.set}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Release Year and Card Number */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">
//                   Release Year
//                 </label>
//                 <input
//                   type="text"
//                   name="releaseYear"
//                   placeholder="Enter your Release Year"
//                   value={formData.releaseYear}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Number</label>
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   placeholder="Enter your Card Number"
//                   value={formData.cardNumber}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Language and Label */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Language</label>
//                 <input
//                   type="text"
//                   name="language"
//                   placeholder="Enter your Language"
//                   value={formData.language}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Label</label>
//                 <input
//                   type="text"
//                   name="label"
//                   placeholder="Enter your Label"
//                   value={formData.label}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Certification Number */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">
//                 Certification Number
//               </label>
//               <input
//                 type="text"
//                 name="certificationNumber"
//                 placeholder="Enter your Certification Number"
//                 value={formData.certificationNumber}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Address */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">Address</label>
//               <textarea
//                 name="address"
//                 placeholder="Enter your complete address for receiving the Card"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[150px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-center">
//               <Checkbox
//                 size="medium"
//                 sx={{
//                   borderRadius: 3,
//                   color: "#50A1FF",
//                   "&.Mui-checked": {
//                     color: "#50A1FF",
//                   },
//                 }}
//               />
//               <p className="text-[#F2F2F2] opacity-70">
//                 By clicking, you agree with our Terms & Conditions
//               </p>
//             </div>

//             {/* Submit Button */}
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{
//                 bgcolor: "#50A1FF",
//                 color: "Black",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#0277BD" },
//                 borderRadius: 3,
//               }}
//             >
//               Pay Now
//             </Button>
//           </Box>
//         </form>
//         <Box>
//           <Typography
//             sx={{
//               fontSize: "30px",
//               fontWeight: "bold",
//               color: "white",
//               mt: 5,
//               mb: 5,
//             }}
//           >
//             Payment Method :
//           </Typography>
//           {/* Payment Method  */}
//         </Box>

//         {/* Response Message */}
//         {responseMessage && (
//           <Typography
//             align="center"
//             sx={{
//               mt: 2,
//               color: responseMessage.includes("successfully")
//                 ? "#4CAF50"
//                 : "#FF5252",
//               fontSize: "16px",
//               fontWeight: "bold",
//             }}
//           >
//             {responseMessage}
//           </Typography>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default PaymentCard;

//Payment GATEWAY TRIED
//===================================================================

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Typography,
//   Divider,
//   CircularProgress,
// } from "@mui/material";
// import QRCode from "qrcode";
// import { useAddCardMutation, useGetCardByUserIdQuery } from "../api/apiSlice";
// import { useAuth } from "../authentication/authProvider";

// function PaymentCard() {
//   const { user, isAuthenticated } = useAuth();
//   const [formData, setFormData] = useState({
//     name: "",
//     set: "",
//     releaseYear: "",
//     cardNumber: "",
//     language: "",
//     label: "",
//     certificationNumber: "",
//     address: "",
//     userId: user?.id,
//   });

//   const [isProcessingPayment, setIsProcessingPayment] = useState(false);
//   const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");
//   const [qrCodeUrl, setQrCodeUrl] = useState("");

//   const [addCard] = useAddCardMutation();
//   const { data: cards = [] } = useGetCardByUserIdQuery(user?.id);

//   // Handle payment process
//   const handlePayment = async () => {
//     setIsProcessingPayment(true);
//     try {
//       // Simulate payment process (replace with actual payment API)
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setIsPaymentSuccessful(true);
//       setResponseMessage("Payment successful! You can now submit your card.");
//     } catch (error) {
//       setResponseMessage("Payment failed. Please try again.");
//     } finally {
//       setIsProcessingPayment(false);
//     }
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle card submission
//   const handleSubmitCard = async (e) => {
//     e.preventDefault();

//     const { name, set, releaseYear, cardNumber, language, label, certificationNumber, address } = formData;

//     if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
//       setResponseMessage("All fields are required!");
//       return;
//     }

//     try {
//       await addCard(formData);
//       setResponseMessage("Card submitted successfully!");
//       generateQRCode(cardNumber);
//     } catch (error) {
//       setResponseMessage(`Error: ${error.message}`);
//     }
//   };

//   // Generate QR code
//   const generateQRCode = (cardNumber) => {
//     QRCode.toDataURL(cardNumber, { errorCorrectionLevel: "H" })
//       .then((url) => setQrCodeUrl(url))
//       .catch((err) => console.error("Error generating QR Code:", err));
//   };

//   // Download QR code
//   const downloadQRCode = () => {
//     const a = document.createElement("a");
//     a.href = qrCodeUrl;
//     a.download = `${formData.cardNumber}_qr.png`;
//     a.click();
//   };

//   return (
//     <Container maxWidth="lg" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <Box sx={{ width: "100%", p: 4, borderRadius: 3, backgroundColor: "#333" }}>
//         <Typography variant="h4" align="center" gutterBottom color="white">
//           Submit Your Card Details For Grading
//         </Typography>
//         <Divider sx={{ bgcolor: "#7D7A7A", mb: 4 }} />

//         {/* Payment Section */}
//         {!isPaymentSuccessful ? (
//           <Box sx={{ textAlign: "center" }}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handlePayment}
//               disabled={isProcessingPayment}
//               sx={{ mb: 4 }}
//             >
//               {isProcessingPayment ? <CircularProgress size={24} color="inherit" /> : "Make Payment"}
//             </Button>
//             <Typography color="white">{responseMessage}</Typography>
//           </Box>
//         ) : (
//           <>
//             <Typography color="lightgreen" align="center" sx={{ mb: 4 }}>
//               Payment successful! Please fill out the form below to submit your card.
//             </Typography>
//             {/* Card Submission Form */}
//             <form onSubmit={handleSubmitCard}>
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                 {["name", "set", "releaseYear", "cardNumber", "language", "label", "certificationNumber", "address"].map(
//                   (field) => (
//                     <input
//                       key={field}
//                       type="text"
//                       name={field}
//                       placeholder={`Enter ${field}`}
//                       value={formData[field]}
//                       onChange={handleChange}
//                       className="input-field"
//                       style={{
//                         padding: "10px",
//                         borderRadius: "8px",
//                         border: "2px solid #ccc",
//                         marginBottom: "8px",
//                       }}
//                     />
//                   )
//                 )}
//                 <Button type="submit" variant="contained" color="success">
//                   Submit Card
//                 </Button>
//               </Box>
//             </form>
//           </>
//         )}

//         {/* QR Code Section */}
//         {qrCodeUrl && (
//           <Box sx={{ textAlign: "center", mt: 4 }}>
//             <Typography color="white">QR Code Generated:</Typography>
//             <img src={qrCodeUrl} alt="QR Code" style={{ width: "150px", height: "150px", margin: "10px auto" }} />
//             <Button onClick={downloadQRCode} variant="outlined" color="primary">
//               Download QR Code
//             </Button>
//           </Box>
//         )}

//         <Typography color="white" align="center" sx={{ mt: 4 }}>
//           {responseMessage}
//         </Typography>
//       </Box>
//     </Container>
//   );
// }

// export default PaymentCard;





////////// Stable old version ////////////////

//====================================================================


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Typography,
//   Divider,
// } from "@mui/material";
// import { useAddCardMutation } from "../api/apiSlice"; // Import addCard mutation from API slice
// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
// import {useGetCardByUserIdQuery} from "../api/apiSlice";

// import QRCode from "qrcode";

// function PaymentCard() {

//   const { user, isAuthenticated } = useAuth();
//   console.log(user.id);


  
//     // Fetch cards for the authenticated user
//   const { data: cards = [], isLoading, error } = useGetCardByUserIdQuery(user?.id);

//   // if (!isAuthenticated) {
//   //   return <p>Please log in.</p>;
//   // }
  
//   const [formData, setFormData] = useState({
//     name: "",
//     set: "",
//     releaseYear: "",
//     cardNumber: "",
//     language: "",
//     label: "",
//     certificationNumber: "",
//     address: "",
//     // termsAgreed: false, // Boolean for checkbox
//     // rarity: "",
//     // image: "",
//     // grade: 0,
//     // subgrade: 0,
//     // trackingStatus: "",
//     // rating: 0,
//     // trackingID,
//     userId: user.id,
//   });



//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [addCard] = useAddCardMutation(); // Initialize the addCard mutation

//   // const handlePaymentSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!stripe || !elements) return; // Stripe.js has not loaded yet

//   //   const { name, cardNumber, userId } = formData;

//   //   if (!name || !cardNumber) {
//   //     setResponseMessage("Please fill in all fields.");
//   //     return;
//   //   }

//   //   setIsProcessing(true);

//   //   // Step 1: Create a payment intent (make sure your backend handles this)
//   //   try {
//   //     const orderResponse = await createOrder({ amount: 500, currency: 'usd' }); // Use appropriate amount & currency
//   //     const { clientSecret } = orderResponse.data; // Get client secret from backend

//   //     // Step 2: Confirm the payment
//   //     const cardElement = elements.getElement(CardElement);

//   //     const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//   //       payment_method: {
//   //         card: cardElement,
//   //         billing_details: {
//   //           name: name,
//   //         },
//   //       },
//   //     });

//   //     if (paymentResult.error) {
//   //       setResponseMessage(`Payment failed: ${paymentResult.error.message}`);
//   //       setIsProcessing(false);
//   //     } else if (paymentResult.paymentIntent.status === 'succeeded') {
//   //       setResponseMessage("Payment successful!");
//   //       // Step 3: Verify payment on backend
//   //       await verifyPayment({ paymentIntentId: paymentResult.paymentIntent.id });
//   //       setIsProcessing(false);
//   //     }
//   //   } catch (error) {
//   //     setResponseMessage(`Error: ${error.message}`);
//   //     setIsProcessing(false);
//   //   }
//   // };


//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   const addmore = async (e)  =>{

//     const { name, set, releaseYear, 
//       cardNumber, language, label, 
//       certificationNumber, address , 
//       // termsAgreed, rarity, image,
//       // grade, subgrade, trackingStatus, 
//       // rating, trackingID , 
//       // userId
    
//     } = formData;

//     // Basic validation
//     if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
//       setResponseMessage("All fields are required!");
//       return;
//     }

//        // Call addCard mutation with form data
//        try {
//         await addCard(formData);
//         setResponseMessage("Payment submitted successfully!");
//         generateQRCode(cardNumber);
//       } catch (error) {
//         setResponseMessage(`Error: ${error.message}`);
//       }
    

//   }

//   // Handle form submission with API integration
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, set, releaseYear, 
//       cardNumber, language, label, 
//       certificationNumber, address , 
//       // termsAgreed, rarity, image,
//       // grade, subgrade, trackingStatus, 
//       // rating, trackingID , 
//       // userId
    
//     } = formData;

//     // Basic validation
//     if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
//       setResponseMessage("All fields are required!");
//       return;
//     }
   
//     // Call addCard mutation with form data
//     try {
//       await addCard(formData);
//       setResponseMessage("Payment submitted successfully!");
//       generateQRCode(cardNumber);
//     } catch (error) {
//       setResponseMessage(`Error: ${error.message}`);
//     }
//   };

  

//   const [cardNumber, setCardNumber] = useState(""); // To store the card number
//   const [qrCodeUrl, setQrCodeUrl] = useState(""); // To store the generated QR code URL
//   const generateQRCode = (cardNumber) => {
//     QRCode.toDataURL(cardNumber, { errorCorrectionLevel: 'H' })
//       .then((url) => {
//         setQrCodeUrl(url); // Set the URL of the QR code image
//       })
//       .catch((err) => {
//         console.error("Error generating QR Code:", err);
//       });
//   };

//   const downloadQRCode = () => {
//     // Create an anchor element to trigger the download
//     const a = document.createElement("a");
//     a.href = qrCodeUrl; // Set the image URL as the href
//     a.download = `${cardNumber}_qr.png`; // Set the filename to include the card number
//     a.click(); // Programmatically click the anchor element to trigger the download
//   };

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1,
//         paddingLeft: { xs: 0, md: "32px" },
//         paddingRight: { xs: 0, md: "32px" },
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           padding: 4,
//           borderRadius: 3,
//           margin: "0 auto",
//         }}
//       >
//         {/* Title */}
//         <Typography
//           variant="h1"
//           align="center"
//           gutterBottom
//           sx={{
//             color: "#FFFFFF",
//             fontWeight: "bold",
//             fontSize: "35px",
//             mb: 1.5,
//             letterSpacing: "3px",
//           }}
//         >
//           Submit Your Card Details For Grading
//         </Typography>

//         <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 1.5,
//               width: "100%",
//             }}
//           >
//             {/* Name and Set */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Card name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Set</label>
//                 <input
//                   type="text"
//                   name="set"
//                   placeholder="Enter your Set"
//                   value={formData.set}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Release Year and Card Number */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">
//                   Release Year
//                 </label>
//                 <input
//                   type="text"
//                   name="releaseYear"
//                   placeholder="Enter your Release Year"
//                   value={formData.releaseYear}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Number</label>
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   placeholder="Enter your Card Number"
//                   value={formData.cardNumber}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Language and Label */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Language</label>
//                 <input
//                   type="text"
//                   name="language"
//                   placeholder="Enter your Language"
//                   value={formData.language}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Label</label>
//                 <input
//                   type="text"
//                   name="label"
//                   placeholder="Enter your Label"
//                   value={formData.label}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Certification Number */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">
//                 Certification Number
//               </label>
//               <input
//                 type="text"
//                 name="certificationNumber"
//                 placeholder="Enter your Certification Number"
//                 value={formData.certificationNumber}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Address */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">Address</label>
//               <textarea
//                 name="address"
//                 placeholder="Enter your complete address for receiving the Card"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[150px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-center">
//               <Checkbox
//                 size="medium"
//                 sx={{
//                   borderRadius: 3,
//                   color: "#50A1FF",
//                   "&.Mui-checked": {
//                     color: "#50A1FF",
//                   },
//                 }}
//               />
//               <p className="text-[#F2F2F2] opacity-70">
//                 By clicking, you agree with our Terms & Conditions
//               </p>
//             </div>
//             <Button
//               fullWidth
//               // type="submit"
//               variant="contained"
//               sx={{
//                 bgcolor: "#50A1FF",
//                 color: "Black",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#0277BD" },
//                 borderRadius: 3,
//               }}
//               onClick={addmore()}
//             >
//               Add More
//             </Button>
//             {/* Submit Button */}
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{
//                 bgcolor: "#50A1FF",
//                 color: "Black",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#0277BD" },
//                 borderRadius: 3,
//               }}
//             >
//               Pay Now
//             </Button>
//           </Box>
//         </form>

//         {/* Response Message */}
//         {responseMessage && (
//           <Typography
//             align="center"
//             sx={{
//               mt: 2,
//               color: responseMessage.includes("successfully")
//                 ? "#4CAF50"
//                 : "#FF5252",
//               fontSize: "16px",
//               fontWeight: "bold",
//             }}
//           >
//             {responseMessage}
//             {qrCodeUrl && (
//         <div>
//           <img src={qrCodeUrl} alt="QR Code" style={{ width: 150, height: 150 }} />
//           <button onClick={downloadQRCode}>Download QR Code</button>
//         </div>
//       )}
//               {/* QR Code Section */}
//               {qrCodeUrl && (
//           <Box sx={{ textAlign: "center", mt: 4 }}>
//             <Typography color="white">QR Code Generated:</Typography>
//             <img src={qrCodeUrl} alt="QR Code" style={{ width: "150px", height: "150px", margin: "10px auto" }} />
//             <Button onClick={downloadQRCode} variant="outlined" color="primary">
//               Download QR Code
//             </Button>
//           </Box>
//         )}

//           </Typography>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default PaymentCard;

//==========================================================






// //////////////////// new addmore thing ///////////


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Typography,
//   Divider,
// } from "@mui/material";
// import { useAddCardMutation } from "../api/apiSlice"; // Import addCard mutation from API slice
// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
// import { useGetCardByUserIdQuery } from "../api/apiSlice";
// import QRCode from "qrcode";

// function PaymentCard() {
//   const { user, isAuthenticated } = useAuth();
//   console.log(user.id);

//   // Fetch cards for the authenticated user
//   const { data: cards = [], isLoading, error } = useGetCardByUserIdQuery(user?.id);

//   const [formData, setFormData] = useState({
//     name: "",
//     set: "",
//     releaseYear: "",
//     cardNumber: "",
//     language: "",
//     label: "",
//     certificationNumber: "",
//     address: "",
//     userId: user.id,
//   });

//   const [cardsArray, setCardsArray] = useState([]); // State to store multiple cards
//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [addCard] = useAddCardMutation(); // Initialize the addCard mutation

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to reset form fields
//   const resetForm = () => {
//     setFormData({
//       name: "",
//       set: "",
//       releaseYear: "",
//       cardNumber: "",
//       language: "",
//       label: "",
//       certificationNumber: "",
//       address: "",
//       userId: user.id,
//     });
//   };

//   // Generate QR code and add card to cardsArray
//   const addmore = async (e) => {
//     e.preventDefault();

//     const { name, set, releaseYear, cardNumber, language, label, certificationNumber, address } = formData;

//     // Basic validation
//     if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
//       setResponseMessage("All fields are required!");
//       return;
//     }

//     // Generate QR code for the card
//     const qrCodeUrl = await generateQRCode(cardNumber);

//     // Add the current form data and QR code to the cardsArray
//     const newCard = { ...formData, qrCodeUrl };
//     setCardsArray([...cardsArray, newCard]);
//     setResponseMessage("Card added to list!");

//     // Clear the form fields
//     resetForm();
//   };

//   // Generate QR code
//   const generateQRCode = async (cardNumber) => {
//     try {
//       const url = await QRCode.toDataURL(cardNumber, { errorCorrectionLevel: 'H' });
//       return url;
//     } catch (err) {
//       console.error("Error generating QR Code:", err);
//       return "";
//     }
//   };

//   // Handle form submission with API integration
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Submit all cards in the cardsArray to the database
//     try {
//       for (const card of cardsArray) {
//         await addCard(card);
//       }
//       setResponseMessage("All cards submitted successfully!");
//       setCardsArray([]); // Clear the cardsArray after submission
//     } catch (error) {
//       setResponseMessage(`Error: ${error.message}`);
//     }
//   };

//   // Download QR code
//   const downloadQRCode = (qrCodeUrl, cardNumber) => {
//     const a = document.createElement("a");
//     a.href = qrCodeUrl;
//     a.download = `${cardNumber}_qr.png`;
//     a.click();
//   };

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1,
//         paddingLeft: { xs: 0, md: "32px" },
//         paddingRight: { xs: 0, md: "32px" },
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           padding: 4,
//           borderRadius: 3,
//           margin: "0 auto",
//         }}
//       >
//         {/* Title */}
//         <Typography
//           variant="h1"
//           align="center"
//           gutterBottom
//           sx={{
//             color: "#FFFFFF",
//             fontWeight: "bold",
//             fontSize: "35px",
//             mb: 1.5,
//             letterSpacing: "3px",
//           }}
//         >
//           Submit Your Card Details For Grading
//         </Typography>

//         <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 1.5,
//               width: "100%",
//             }}
//           >
//             {/* Name and Set */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Card name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Set</label>
//                 <input
//                   type="text"
//                   name="set"
//                   placeholder="Enter your Set"
//                   value={formData.set}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Release Year and Card Number */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">
//                   Release Year
//                 </label>
//                 <input
//                   type="text"
//                   name="releaseYear"
//                   placeholder="Enter your Release Year"
//                   value={formData.releaseYear}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Number</label>
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   placeholder="Enter your Card Number"
//                   value={formData.cardNumber}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Language and Label */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Language</label>
//                 <input
//                   type="text"
//                   name="language"
//                   placeholder="Enter your Language"
//                   value={formData.language}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Label</label>
//                 <input
//                   type="text"
//                   name="label"
//                   placeholder="Enter your Label"
//                   value={formData.label}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Certification Number */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">
//                 Certification Number
//               </label>
//               <input
//                 type="text"
//                 name="certificationNumber"
//                 placeholder="Enter your Certification Number"
//                 value={formData.certificationNumber}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Address */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">Address</label>
//               <textarea
//                 name="address"
//                 placeholder="Enter your complete address for receiving the Card"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[150px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-center">
//               <Checkbox
//                 size="medium"
//                 sx={{
//                   borderRadius: 3,
//                   color: "#50A1FF",
//                   "&.Mui-checked": {
//                     color: "#50A1FF",
//                   },
//                 }}
//               />
//               <p className="text-[#F2F2F2] opacity-70">
//                 By clicking, you agree with our Terms & Conditions
//               </p>
//             </div>

//             {/* Add More Button */}
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 bgcolor: "#50A1FF",
//                 color: "Black",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#0277BD" },
//                 borderRadius: 3,
//               }}
//               onClick={addmore}
//             >
//               Add More
//             </Button>

//             {/* Submit Button */}
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{
//                 bgcolor: "#50A1FF",
//                 color: "Black",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#0277BD" },
//                 borderRadius: 3,
//               }}
//             >
//               Pay Now
//             </Button>
//           </Box>
//         </form>

//         {/* Response Message */}
//         {responseMessage && (
//           <Typography
//             align="center"
//             sx={{
//               mt: 2,
//               color: responseMessage.includes("successfully")
//                 ? "#4CAF50"
//                 : "#FF5252",
//               fontSize: "16px",
//               fontWeight: "bold",
//             }}
//           >
//             {responseMessage}
//           </Typography>
//         )}

//         {/* Display QR Codes for All Cards */}
//         {cardsArray.length > 0 && (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" align="center" color="white" gutterBottom>
//               Generated QR Codes:
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 2,
//                 justifyContent: "center",
//               }}
//             >
//               {cardsArray.map((card, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     textAlign: "center",
//                     border: "1px solid #ccc",
//                     borderRadius: 2,
//                     padding: 2,
//                   }}
//                 >
//                   <Typography color="white">{card.name}</Typography>
//                   <img
//                     src={card.qrCodeUrl}
//                     alt={`QR Code for ${card.cardNumber}`}
//                     style={{ width: "150px", height: "150px", margin: "10px auto" }}
//                   />
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     onClick={() => downloadQRCode(card.qrCodeUrl, card.cardNumber)}
//                   >
//                     Download QR Code
//                   </Button>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default PaymentCard;














////////////////////// payment good but not adding

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Typography,
//   Divider,
// } from "@mui/material";
// import { useAddCardMutation } from "../api/apiSlice"; // Import addCard mutation from API slice
// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
// import QRCode from "qrcode";
// import { loadStripe } from "@stripe/stripe-js"; // Import loadStripe from Stripe.js
// import { useCards } from "../api/CardsContext"; // Import the useCards hook

// // Load Stripe.js
// const stripePromise = loadStripe("pk_test_51NHlsEHIiSEGZ6oKwSwK0F9zyZ5CDZcXsyLIhuvhB0E9Tbhp3YAAtZRt5rqAsOGFnFGZAFcqQAeSP8qXURUH1Uts00F2Q9fsl6"); // Replace with your Stripe public key

// function PaymentCard() {
//   const { user } = useAuth();
  

//   const [formData, setFormData] = useState({
//     name: "",
//     set: "",
//     releaseYear: "",
//     cardNumber: "",
//     language: "",
//     label: "",
//     certificationNumber: "",
//     address: "",
//     userId: user.id,
//   });

//   const [cardsArray, setCardsArray] = useState([]); // State to store multiple cards
//   const [responseMessage, setResponseMessage] = useState("");
//   const [addCard] = useAddCardMutation(); // Initialize the addCard mutation
//   const [termsAgreed, setTermsAgreed] = useState(false); // State for terms agreement

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to reset form fields
//   const resetForm = () => {
//     setFormData({
//       name: "",
//       set: "",
//       releaseYear: "",
//       cardNumber: "",
//       language: "",
//       label: "",
//       certificationNumber: "",
//       address: "",
//       userId: user.id,
//     });
//   };

//   // Generate QR code and add card to cardsArray
//   const addmore = async (e) => {
//     e.preventDefault();

//     const { name, set, releaseYear, cardNumber, language, label, certificationNumber, address } = formData;

//     // Basic validation
//     if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
//       setResponseMessage("All fields are required!");
//       return;
//     }

//     // Generate QR code for the card
//     const qrCodeUrl = await generateQRCode(cardNumber);

//     // Add the current form data and QR code to the cardsArray
//     const newCard = { ...formData, qrCodeUrl };
//     setCardsArray([...cardsArray, newCard]);
//     setResponseMessage("Card added to list!");

//     // Clear the form fields
//     resetForm();
//   };

//   // Generate QR code
//   const generateQRCode = async (cardNumber) => {
//     try {
//       const url = await QRCode.toDataURL(cardNumber, { errorCorrectionLevel: 'H' });
//       return url;
//     } catch (err) {
//       console.error("Error generating QR Code:", err);
//       return "";
//     }
//   };

//   // Handle form submission with API integration
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!termsAgreed) {
//       setResponseMessage("You must agree to the terms and conditions.");
//       return;
//     }

//     if (cardsArray.length === 0) {
//       setResponseMessage("No cards added to submit.");
//       return;
//     }

//     // Step 1: Call your backend to create a Checkout Session
//     try {
//       const response = await fetch('http://localhost:5000/create-checkout-session', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           amount: 1000, // Example amount
//           currency: 'usd',
//           successUrl: `${window.location.origin}/success`, // Redirect URL after successful payment
//           cancelUrl: `${window.location.origin}/cancel`, // Redirect URL if payment is canceled
//         }),
//       });

//       const { id: sessionId } = await response.json();

//       // Step 2: Redirect to Stripe Checkout
//       const stripe = await stripePromise;
//       const { error } = await stripe.redirectToCheckout({ sessionId });

//       if (error) {
//         setResponseMessage(error.message);
//       }
//     } catch (error) {
//       setResponseMessage(`Error: ${error.message}`);
//     }
//   };

//   // Download QR code
//   const downloadQRCode = (qrCodeUrl, cardNumber) => {
//     const a = document.createElement("a");
//     a.href = qrCodeUrl;
//     a.download = `${cardNumber}_qr.png`;
//     a.click();
//   };

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1,
//         paddingLeft: { xs: 0, md: "32px" },
//         paddingRight: { xs: 0, md: "32px" },
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           padding: 4,
//           borderRadius: 3,
//           margin: "0 auto",
//         }}
//       >
//         {/* Title */}
//         <Typography
//           variant="h1"
//           align="center"
//           gutterBottom
//           sx={{
//             color: "#FFFFFF",
//             fontWeight: "bold",
//             fontSize: "35px",
//             mb: 1.5,
//             letterSpacing: "3px",
//           }}
//         >
//           Submit Your Card Details For Grading
//         </Typography>

//         <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 1.5,
//               width: "100%",
//             }}
//           >
//             {/* Name and Set */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Card name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Set</label>
//                 <input
//                   type="text"
//                   name="set"
//                   placeholder="Enter your Set"
//                   value={formData.set}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Release Year and Card Number */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">
//                   Release Year
//                 </label>
//                 <input
//                   type="text"
//                   name="releaseYear"
//                   placeholder="Enter your Release Year"
//                   value={formData.releaseYear}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Card Number</label>
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   placeholder="Enter your Card Number"
//                   value={formData.cardNumber}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Language and Label */}
//             <div className="w-full flex flex-col md:flex-row gap-5">
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Language</label>
//                 <input
//                   type="text"
//                   name="language"
//                   placeholder="Enter your Language"
//                   value={formData.language}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
//                 <label className="text-[#F2F2F2] opacity-70">Label</label>
//                 <input
//                   type="text"
//                   name="label"
//                   placeholder="Enter your Label"
//                   value={formData.label}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                 />
//               </div>
//             </div>

//             {/* Certification Number */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">
//                 Certification Number
//               </label>
//               <input
//                 type="text"
//                 name="certificationNumber"
//                 placeholder="Enter your Certification Number"
//                 value={formData.certificationNumber}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Address */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">Address</label>
//               <textarea
//                 name="address"
//                 placeholder="Enter your complete address for receiving the Card"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[150px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//               />
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-center">
//               <Checkbox
//                 size="medium"
//                 checked={termsAgreed}
//                 onChange={(e) => setTermsAgreed(e.target.checked)}
//                 sx={{
//                   borderRadius: 3,
//                   color: "#50A1FF",
//                   "&.Mui-checked": {
//                     color: "#50A1FF",
//                   },
//                 }}
//               />
//               <p className="text-[#F2F2F2] opacity-70">
//                 By clicking, you agree with our Terms & Conditions
//               </p>
//             </div>

//             {/* Add More Button */}
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 bgcolor: "#50A1FF",
//                 color: "Black",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#0277BD" },
//                 borderRadius: 3,
//               }}
//               onClick={addmore}
//             >
//               Add More
//             </Button>

//             {/* Submit Button */}
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{
//                 bgcolor: "#50A1FF",
//                 color: "Black",
//                 textTransform: "none",
//                 padding: "10px 0",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#0277BD" },
//                 borderRadius: 3,
//               }}
//               disabled={!termsAgreed || cardsArray.length === 0}
//             >
//               Pay Now
//             </Button>
//           </Box>
//         </form>

//         {/* Response Message */}
//         {responseMessage && (
//           <Typography
//             align="center"
//             sx={{
//               mt: 2,
//               color: responseMessage.includes("successfully")
//                 ? "#4CAF50"
//                 : "#FF5252",
//               fontSize: "16px",
//               fontWeight: "bold",
//             }}
//           >
//             {responseMessage}
//           </Typography>
//         )}

//         {/* Display QR Codes for All Cards */}
//         {cardsArray.length > 0 && (
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" align="center" color="white" gutterBottom>
//               Generated QR Codes:
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 2,
//                 justifyContent: "center",
//               }}
//             >
//               {cardsArray.map((card, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     textAlign: "center",
//                     border: "1px solid #ccc",
//                     borderRadius: 2,
//                     padding: 2,
//                   }}
//                 >
//                   <Typography color="white">{card.name}</Typography>
//                   <img
//                     src={card.qrCodeUrl}
//                     alt={`QR Code for ${card.cardNumber}`}
//                     style={{ width: "150px", height: "150px", margin: "10px auto" }}
//                   />
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     onClick={() => downloadQRCode(card.qrCodeUrl, card.cardNumber)}
//                   >
//                     Download QR Code
//                   </Button>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default PaymentCard;



import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useAddCardMutation } from "../api/apiSlice"; // Import addCard mutation from API slice
import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
import QRCode from "qrcode";
import { loadStripe } from "@stripe/stripe-js"; // Import loadStripe from Stripe.js
import { useCards } from "../api/CardsContext"; // Import the useCards hook


// Load Stripe.js
const stripePromise = loadStripe("pk_test_51NHlsEHIiSEGZ6oKwSwK0F9zyZ5CDZcXsyLIhuvhB0E9Tbhp3YAAtZRt5rqAsOGFnFGZAFcqQAeSP8qXURUH1Uts00F2Q9fsl6"); // Replace with your Stripe public key
const labelValues = {
  "Standard Label": 0.0, // Free/Card
  "Type Match Label": 2.49, // AU$2.49/Card
  "Sky Label": 5.49, // AU$5.49/Card
};

const ServiceAmountValues = {
  "Basic" :  19.99,
  "Standard" : 24.29 ,
  "Premier" : 50.00 ,
  "Vip" :  250.00,
}



function PaymentCard() {
  const { user } = useAuth();
  const { cardsArray, setCardsArray } = useCards(); // Use the context
  // const [selectedAmount, setSelectedAmount] = useState(50); // Default amount
  const [ServiceAmount , setServiceAmount] = useState(0); 

  const [formData, setFormData] = useState({
    name: "",
    set: "",
    releaseYear: "",
    cardNumber: "",
    language: "",
    label: "",
    certificationNumber: "",
    address: "",
    userId: user.id,
    totalAmount: "",
    selectedAmount: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [addCard] = useAddCardMutation(); // Initialize the addCard mutation
  const [termsAgreed, setTermsAgreed] = useState(false); // State for terms agreement

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log("here is the data " , formData)

    // Handle amount selection
    // const handleAmountChange = (e) => {
    //   setSelectedAmount(e.target.value);
    // };

    const handleServiceAmount = (e) => {

      setServiceAmount(e.target.value);

    }



  // Function to reset form fields
  const resetForm = () => {
    setFormData({
      name: "",
      set: "",
      releaseYear: "",
      cardNumber: "",
      language: "",
      label: "",
      certificationNumber: "",
      address: "",
      userId: user.id,
      totalAmount: "",
      selectedAmount: "",
    });
  };

  // Generate QR code and add card to cardsArray
  const addmore = async (e) => {
    e.preventDefault();

    const { name, set, releaseYear, cardNumber, language, label, certificationNumber, address } = formData;

    // Basic validation
    if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
      setResponseMessage("All fields are required!");
      return;
    }

    // Generate QR code for the card
    const qrCodeUrl = await generateQRCode(cardNumber);

    // Add the current form data and QR code to the cardsArray
    const newCard = { ...formData, qrCodeUrl };
    setCardsArray([...cardsArray, newCard]);
    setResponseMessage("Card added to list!");

    // Clear the form fields
    resetForm();
  };

  // Generate QR code
  const generateQRCode = async (cardNumber) => {
    try {
      const url = await QRCode.toDataURL(cardNumber, { errorCorrectionLevel: 'H' });
      return url;
    } catch (err) {
      console.error("Error generating QR Code:", err);
      return "";
    }
  };

  // Handle form submission with API integration
// Inside the handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!termsAgreed) {
    setResponseMessage("You must agree to the terms and conditions.");
    return;
  }

  if (cardsArray.length === 0) {
    setResponseMessage("No cards added to submit.");
    return;
  }

  // Step 1: Calculate the total amount
  let totalAmount = 0;
  cardsArray.forEach((card) => {
    const labelValue = labelValues[card.label] || 0; // Get the label value or default to 0
    totalAmount += labelValue; // Add the label value to the total amount
  });

  cardsArray.forEach((card) => {
    const ServiceAmountValue = ServiceAmountValues[card.selectedAmount] || 0; // Get the label value or default to 0
    totalAmount += ServiceAmountValue; // Add the label value to the total amount
  });

  setServiceAmount(totalAmount)
  

  // Step 2: Save the cardsArray to localStorage before redirecting to Stripe
  localStorage.setItem("cardsArray", JSON.stringify(cardsArray));

  // Step 3: Call your backend to create a Checkout Session
  try {
    const response = await fetch('https://skygradingv5-production.up.railway.app/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: totalAmount , // Convert to cents (Stripe expects amounts in cents)
        currency: 'usd',
        successUrl: `${window.location.origin}/success`, // Redirect URL after successful payment
        cancelUrl: `${window.location.origin}/cancel`, // Redirect URL if payment is canceled
      }),
    });

    const { id: sessionId } = await response.json();

    // Step 4: Redirect to Stripe Checkout
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      setResponseMessage(error.message);
    }
  } catch (error) {
    setResponseMessage(`Error: ${error.message}`);
  }
};
  // Download QR code
  const downloadQRCode = (qrCodeUrl, cardNumber) => {
    const a = document.createElement("a");
    a.href = qrCodeUrl;
    a.download = `${cardNumber}_qr.png`;
    a.click();
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        paddingLeft: { xs: 0, md: "32px" },
        paddingRight: { xs: 0, md: "32px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 4,
          borderRadius: 3,
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "35px",
            mb: 1.5,
            letterSpacing: "3px",
          }}
        >
          Submit Your Card Details For Grading
        </Typography>

        <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              width: "100%",
            }}
          >
            {/* Name and Set */}
            <div className="w-full flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">Card Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Card name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">Set</label>
                <input
                  type="text"
                  name="set"
                  placeholder="Enter your Set"
                  value={formData.set}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>
            </div>

            {/* Release Year and Card Number */}
            <div className="w-full flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">
                  Release Year
                </label>
                <input
                  type="text"
                  name="releaseYear"
                  placeholder="Enter your Release Year"
                  value={formData.releaseYear}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Enter your Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>
            </div>

            {/* Language and Label */}
            <div className="w-full flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">Language</label>
                <input
                  type="text"
                  name="language"
                  placeholder="Enter your Language"
                  value={formData.language}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
  <label className="text-[#F2F2F2] opacity-70">Label</label>
  <select
    name="label"
    value={formData.label}
    onChange={handleChange}
    className="bg-transparent text-white w-full h-[58px] p-3 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70 appearance-none" // Added appearance-none for custom styling
    style={{
      backgroundColor: '#1E1E1E', // Dark background for the dropdown
      color: '#F2F2F2', // Light text color
    }}
  >
    <option value="" disabled className="bg-black text-white">Select a label</option>
    <option value="Standard Label" className="bg-black text-white hover:bg-gray-800">Standard Label</option>
    <option value="Type Match Label" className="bg-black text-white hover:bg-gray-800">Type Match Label</option>
    <option value="Sky Label" className="bg-black text-white hover:bg-gray-800">Sky Label</option>
  </select>
</div>
            </div>

            {/* Certification Number */}
            <div className="w-full flex flex-col items-start gap-2">
              <label className="text-[#F2F2F2] opacity-70">
                Certification Number
              </label>
              <input
                type="text"
                name="certificationNumber"
                placeholder="Enter your Certification Number"
                value={formData.certificationNumber}
                onChange={handleChange}
                className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
              />
            </div>

            {/* Address */}
            <div className="w-full flex flex-col items-start gap-2">
              <label className="text-[#F2F2F2] opacity-70">Address</label>
              <textarea
                name="address"
                placeholder="Enter your complete address for receiving the Card"
                value={formData.address}
                onChange={handleChange}
                className="bg-transparent text-white w-full h-[150px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <Checkbox
                size="medium"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
                sx={{
                  borderRadius: 3,
                  color: "#50A1FF",
                  "&.Mui-checked": {
                    color: "#50A1FF",
                  },
                }}
              />
              <p className="text-[#F2F2F2] opacity-70">
                By clicking, you agree with our Terms & Conditions
              </p>
            </div>

            {/* Add More Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#50A1FF",
                color: "Black",
                textTransform: "none",
                padding: "10px 0",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#0277BD" },
                borderRadius: 3,
              }}
              onClick={addmore}
            >
              Add More
            </Button>

            <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

            <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
  <label className="text-[#F2F2F2] opacity-70">Select Amount</label>
  <select
    name="selectedAmount"
    value={formData.selectedAmount}
    onChange={handleChange}
    className="bg-transparent text-white w-full h-[58px] p-3 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70 appearance-none" // Added appearance-none for custom styling
    style={{
      backgroundColor: '#1E1E1E', // Dark background for the dropdown
      color: '#F2F2F2', // Light text color
    }}
  >
    <option value="" disabled className="bg-black text-white">Select a label</option>
    <option value="Basic" disabled className="bg-black text-white hover:bg-gray-800">$Basic</option>
    <option value="Standard" className="bg-black text-white hover:bg-gray-800">$Standard</option>
    <option value="Premier" className="bg-black text-white hover:bg-gray-800">$Premier</option>
    <option value="Vip" className="bg-black text-white hover:bg-gray-800">$VIP</option>
   
  </select>
</div>

<Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />



            {/* Submit Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#50A1FF",
                color: "Black",
                textTransform: "none",
                padding: "10px 0",
                fontSize: "20px",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#0277BD" },
                borderRadius: 3,
              }}
              disabled={!termsAgreed || cardsArray.length === 0}
            >
              Pay Now
            </Button>
          </Box>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <Typography
            align="center"
            sx={{
              mt: 2,
              color: responseMessage.includes("successfully")
                ? "#4CAF50"
                : "#FF5252",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {responseMessage}
          </Typography>
        )}

        {/* Display QR Codes for All Cards */}
        {cardsArray.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" align="center" color="white" gutterBottom>
              Generated QR Codes:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {cardsArray.map((card, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    padding: 2,
                  }}
                >
                  <Typography color="white">{card.name}</Typography>
                  <img
                    src={card.qrCodeUrl}
                    alt={`QR Code for ${card.cardNumber}`}
                    style={{ width: "150px", height: "150px", margin: "10px auto" }}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => downloadQRCode(card.qrCodeUrl, card.cardNumber)}
                  >
                    Download QR Code
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        )}

<Typography variant="h6" align="center" color="white" sx={{ mt: 2 }}>
  Total Amount: AU$
  {(
    ServiceAmount +
    cardsArray.reduce((sum, card) => sum + (labelValues[card.label] || 0), 0) +
    cardsArray.reduce((sum, card) => sum + (ServiceAmountValues[card.selectedAmount] || 0), 0)// Adding selectedAmounts
  ).toFixed(2)}
</Typography>

      </Box>
    </Container>
  );
}

export default PaymentCard;
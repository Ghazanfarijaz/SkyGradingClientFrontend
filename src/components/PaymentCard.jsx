// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Typography,
//   Divider,
// } from "@mui/material";
// import { useAddCardMutation, useFetchExternalCardDataQuery } from "../api/apiSlice";
// import { useAuth } from "../authentication/authProvider";
// import QRCode from "qrcode";
// import { loadStripe } from "@stripe/stripe-js";
// import { useCards } from "../api/CardsContext";

// // Load Stripe.js
// const stripePromise = loadStripe("pk_test_51NHlsEHIiSEGZ6oKwSwK0F9zyZ5CDZcXsyLIhuvhB0E9Tbhp3YAAtZRt5rqAsOGFnFGZAFcqQAeSP8qXURUH1Uts00F2Q9fsl6");

// const labelValues = {
//   "Standard Label": 0.0,
//   "Type Match Label": 2.49,
//   "Sky Label": 5.49,
// };

// const ServiceAmountValues = {
//   "Basic": 19.99,
//   "Standard": 24.29,
//   "Premier": 50.0,
//   "Vip": 250.0,
// };

// function PaymentCard() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const { data: externalCardData, isLoading, isError } = useFetchExternalCardDataQuery(searchTerm, {
//     skip: !searchTerm, // Skip the query if searchTerm is empty
//   });

//   const { user } = useAuth();
//   const { cardsArray, setCardsArray } = useCards();
//   const [ServiceAmount, setServiceAmount] = useState(0);
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
//     totalAmount: "",
//     selectedAmount: "",
//   });
//   const [responseMessage, setResponseMessage] = useState("");
//   const [addCard] = useAddCardMutation();
//   const [termsAgreed, setTermsAgreed] = useState(false);
//   const [suggestions, setSuggestions] = useState([]); // State for card name suggestions

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Trigger search when the "name" field changes
//     if (name === "name") {
//       setSearchTerm(value);
//       if (externalCardData) {
//         const filteredSuggestions = externalCardData.map((card) => ({
//           name: card.name,
//           setName: card.set.name,
//           releaseDate: card.set.releaseDate,
//           number: card.number,
//         }));
//         setSuggestions(filteredSuggestions);
//       }
//     }
//   };

//   // Handle card selection from suggestions
//   const handleCardSelect = (card) => {
//     setFormData({
//       ...formData,
//       name: card.name,
//       set: card.setName,
//       releaseYear: card.releaseDate.split("/")[0], // Extract year from releaseDate
//       certificationNumber: card.number,
//     });
//     setSuggestions([]); // Clear suggestions after selection
//   };

//   // Render suggestions dropdown
//   const renderSuggestions = () => {
//     if (suggestions.length === 0 || formData.name === "") return null;

//     return (
//       <ul
//         style={{
//           position: "absolute",
//           zIndex: 1000,
//           backgroundColor: "#1E1E1E",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           maxHeight: "200px",
//           overflowY: "auto",
//           width: "100%",
//           marginTop: "4px",
//         }}
//       >
//         {suggestions.map((card, index) => (
//           <li
//             key={index}
//             style={{
//               padding: "8px",
//               cursor: "pointer",
//               color: "#F2F2F2",
//               borderBottom: "1px solid #ccc",
//             }}
//             onClick={() => handleCardSelect(card)}
//           >
//             {`${card.name} - ${card.setName} - ${card.releaseDate.split("/")[0]} `}
//           </li>
//         ))}
//       </ul>
//     );
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
//       totalAmount: "",
//       selectedAmount: "",
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

//     // Step 1: Calculate the total amount
//     let totalAmount = 0;
//     cardsArray.forEach((card) => {
//       const labelValue = labelValues[card.label] || 0; // Get the label value or default to 0
//       totalAmount += labelValue; // Add the label value to the total amount
//     });

//     cardsArray.forEach((card) => {
//       const ServiceAmountValue = ServiceAmountValues[card.selectedAmount] || 0; // Get the label value or default to 0
//       totalAmount += ServiceAmountValue; // Add the label value to the total amount
//     });

//     setServiceAmount(totalAmount);

//     // Step 2: Save the cardsArray to localStorage before redirecting to Stripe
//     localStorage.setItem("cardsArray", JSON.stringify(cardsArray));

//     // Step 3: Call your backend to create a Checkout Session
//     try {
//       const response = await fetch('https://skygradingv5-production.up.railway.app/create-checkout-session', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           amount:  Math.round(totalAmount + 15), // Convert to cents (Stripe expects amounts in cents)
//           currency: 'aud',
//           successUrl: `${window.location.origin}/success`, // Redirect URL after successful payment
//           cancelUrl: `${window.location.origin}/cancel`, // Redirect URL if payment is canceled
//         }),
//       });

//       const { id: sessionId } = await response.json();

//       // Step 4: Redirect to Stripe Checkout
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

//   // Check if data is loading or if there's an error
//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching data</div>;

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
//                 <div style={{ position: "relative", width: "100%" }}>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Card name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
//                   />
//                   {renderSuggestions()}
//                 </div>
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
//                 <label className="text-[#F2F2F2] opacity-70">Release Year</label>
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
//                 <select
//                   name="label"
//                   value={formData.label}
//                   onChange={handleChange}
//                   className="bg-transparent text-white w-full h-[58px] p-3 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70 appearance-none"
//                   style={{
//                     backgroundColor: '#1E1E1E',
//                     color: '#F2F2F2',
//                   }}
//                 >
//                   <option value="" disabled className="bg-black text-white">Select a label</option>
//                   <option value="Standard Label" className="bg-black text-white hover:bg-gray-800">Standard Label</option>
//                   <option value="Type Match Label" className="bg-black text-white hover:bg-gray-800">Type Match Label</option>
//                   <option value="Sky Label" className="bg-black text-white hover:bg-gray-800">Sky Label</option>
//                 </select>
//               </div>
//             </div>

//             {/* Certification Number */}
//             <div className="w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">Certification Number</label>
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

//             {/* Select Amount */}
//             <div className="w-full md:w-full flex flex-col items-start gap-2">
//               <label className="text-[#F2F2F2] opacity-70">Select Amount</label>
//               <select
//                 name="selectedAmount"
//                 value={formData.selectedAmount}
//                 onChange={handleChange}
//                 className="bg-transparent text-white w-full h-[58px] p-3 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70 appearance-none"
//                 style={{
//                   backgroundColor: '#1E1E1E',
//                   color: '#F2F2F2',
//                 }}
//               >
//                 <option value="" disabled className="bg-black text-white">Select a label</option>
//                 <option value="Basic" className="bg-black text-white hover:bg-gray-800">$Basic</option>
//                 <option value="Standard" className="bg-black text-white hover:bg-gray-800">$Standard</option>
//                 <option value="Premier" className="bg-black text-white hover:bg-gray-800">$Premier</option>
//                 <option value="Vip" className="bg-black text-white hover:bg-gray-800">$VIP</option>
//               </select>
//             </div>

//             <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

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

//             <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

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

//         {/* Total Amount */}
//         <Typography variant="h6" align="center" color="white" sx={{ mt: 2 }}>
//           Total Amount: AU$
//           {(
//             ServiceAmount +
//             cardsArray.reduce((sum, card) => sum + (labelValues[card.label] || 0), 0) +
//             cardsArray.reduce((sum, card) => sum + (ServiceAmountValues[card.selectedAmount] || 0), 0)
//           ).toFixed(2)}
//         </Typography>
//       </Box>
//     </Container>
//   );
// }

// export default PaymentCard;

import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import {
  useAddCardMutation,
  useFetchExternalCardDataQuery,
} from "../api/apiSlice";
import { useAuth } from "../authentication/authProvider";
import QRCode from "qrcode";
import { loadStripe } from "@stripe/stripe-js";
import { useCards } from "../api/CardsContext";
import ErrorIcon from "@mui/icons-material/Error"; // For error state

// Load Stripe.js
const stripePromise = loadStripe(
  // "pk_test_51QgGhKECWsPXMdmNJuNo9RsD1y860dqq5Yf0CIbasPrGwRmdzKe3pjbHMZohqCLbeSxZTzl0x0Aol1WZAYqNNUts00vlBMrbVD"
  "pk_live_51QgGhKECWsPXMdmNYjnl3FA2gajYcqeMUobQ8WJBEwdrzLpAZpF7vYXaXvIvf0CEcxgPLHy9ju0m0OyF4yFHwubC00NKNfgVGo"
);

const labelValues = {
  "Standard Label": 0.0,
  "Type Match Label": 2.49,
  "Sky Label": 5.49,
};

const ServiceAmountValues = {
  Basic: 19.99,
  Standard: 24.29,
  Premier: 50.0,
  Vip: 250.0,
};

function PaymentCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: externalCardData,
    isLoading,
    isError,
  } = useFetchExternalCardDataQuery(searchTerm, {
    skip: !searchTerm, // Skip the query if searchTerm is empty
  });

  const { user } = useAuth();
  const { cardsArray, setCardsArray } = useCards();
  const [ServiceAmount, setServiceAmount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    set: "",
    releaseYear: "",
    cardNumber: "N/A",
    language: "",
    label: "",
    holographic: true,
    certificationNumber: "",
    address: "",
    userId: user.id,
    totalAmount: "",
    selectedAmount: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [addCard] = useAddCardMutation();
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [suggestions, setSuggestions] = useState([]); // State for card name suggestions

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Trigger search when the "name" field changes
    if (name === "name") {
      setSearchTerm(value);
      if (externalCardData) {
        const filteredSuggestions = externalCardData.map((card) => ({
          name: card.name,
          setName: card.set.name,
          releaseDate: card.set.releaseDate,
          number: card.number,
        }));
        setSuggestions(filteredSuggestions);
      }
    }
  };

  // Handle card selection from suggestions
  const handleCardSelect = (card) => {
    setFormData({
      ...formData,
      name: card.name,
      set: card.setName,
      releaseYear: card.releaseDate.split("/")[0], // Extract year from releaseDate
      // certificationNumber: card.number,
    });
    setSuggestions([]); // Clear suggestions after selection
  };

  // Render suggestions dropdown
  const renderSuggestions = () => {
    if (isLoading) {
      return (
        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#1E1E1E",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={20} sx={{ color: "#50A1FF" }} />{" "}
          {/* Spinner for loading */}
        </Box>
      );
    }

    if (isError) {
      return (
        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#1E1E1E",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FF5252",
          }}
        >
          <ErrorIcon sx={{ marginRight: 1 }} /> {/* Error icon */}
          Failed to fetch suggestions
        </Box>
      );
    }

    if (suggestions.length === 0 || formData.name === "") return null;

    return (
      <ul
        style={{
          position: "absolute",
          zIndex: 1000,
          backgroundColor: "#1E1E1E",
          border: "1px solid #ccc",
          borderRadius: "4px",
          maxHeight: "200px",
          overflowY: "auto",
          width: "100%",
          marginTop: "4px",
        }}
      >
        {suggestions.map((card, index) => (
          <li
            key={index}
            style={{
              padding: "8px",
              cursor: "pointer",
              color: "#F2F2F2",
              borderBottom: "1px solid #ccc",
            }}
            onClick={() => handleCardSelect(card)}
          >
            {`${card.name} - ${card.setName} - ${
              card.releaseDate.split("/")[0]
            } `}
          </li>
        ))}
      </ul>
    );
  };

  // Function to reset form fields
  const resetForm = () => {
    setFormData({
      name: "",
      set: "",
      releaseYear: "",
      // cardNumber: "",
      language: "",
      label: "",
      holographic: "",
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

    const {
      name,
      set,
      releaseYear,
      certificationNumber,
      language,
      label,
      address,
    } = formData;

    // Basic validation
    if (
      !name ||
      !set ||
      !releaseYear ||
      !certificationNumber ||
      !language ||
      !label ||
      !address
    ) {
      setResponseMessage("All fields are required!");
      return;
    }

    // Generate QR code for the card
    const qrCodeUrl = await generateQRCode(certificationNumber);

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
      const url = await QRCode.toDataURL(cardNumber, {
        errorCorrectionLevel: "H",
      });
      return url;
    } catch (err) {
      console.error("Error generating QR Code:", err);
      return "";
    }
  };

  // Add this helper function
  const calculateTotal = () => {
    let total = 0;

    // Sum all label costs
    cardsArray.forEach((card) => {
      total += labelValues[card.label] || 0;
    });

    // Sum all service costs
    cardsArray.forEach((card) => {
      total += ServiceAmountValues[card.selectedAmount] || 0;
    });

    // Add fixed $15 fee
    return total + 15;
  };

  // Handle form submission with API integration
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

    // // Step 1: Calculate the total amount
    // let totalAmount = 0;
    // cardsArray.forEach((card) => {
    //   const labelValue = labelValues[card.label] || 0; // Get the label value or default to 0
    //   totalAmount += labelValue; // Add the label value to the total amount
    // });

    // cardsArray.forEach((card) => {
    //   const ServiceAmountValue = ServiceAmountValues[card.selectedAmount] || 0; // Get the label value or default to 0
    //   totalAmount += ServiceAmountValue; // Add the label value to the total amount
    // });

    // setServiceAmount(totalAmount);
    // Calculate total using helper
    const totalAmount = calculateTotal();

    // Step 2: Save the cardsArray to localStorage before redirecting to Stripe
    localStorage.setItem("cardsArray", JSON.stringify(cardsArray));

    // Step 3: Call your backend to create a Checkout Session
    try {
      const response = await fetch(
        "https://skygradingv5-production.up.railway.app/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: Math.round(totalAmount), // Convert to cents (Stripe expects amounts in cents)
            currency: "aud",
            successUrl: `${window.location.origin}/success`, // Redirect URL after successful payment
            cancelUrl: `${window.location.origin}/cancel`, // Redirect URL if payment is canceled
          }),
        }
      );

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
        <Box>
          <div className="m-5 fixed  bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 relative overflow-hidden border border-white/40">
            {/* White gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-white/20 opacity-0 animate-[shine_2s_infinite]"></div>
            <h1 className="text-xl font-semibold">
              {" "}
              💡 Address to ship the product:{" "}
            </h1>
            <span className="text-lg font-semibold">
              📍 Suite 570, SHOP 87 78 HEATHERTON ROAD ENDEAVOUR HILLS VIC 3802
            </span>

            {/* Tailwind animation */}
            <style>
              {`
          @keyframes shine {
            0% { opacity: 0; transform: translateX(-100%); }
            50% { opacity: 1; transform: translateX(100%); }
            100% { opacity: 0; transform: translateX(200%); }
          }
        `}
            </style>
          </div>
        </Box>
        <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

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
                <div style={{ position: "relative", width: "100%" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Card name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                  />
                  {renderSuggestions()}
                </div>
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
                  name="certificationNumber"
                  placeholder="Enter your Card Number"
                  value={formData.certificationNumber}
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
                  className="bg-transparent text-white w-full h-[58px] p-3 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70 appearance-none"
                  style={{
                    backgroundColor: "#1E1E1E",
                    color: "#F2F2F2",
                  }}
                >
                  <option value="" disabled className="bg-black text-white">
                    Select a label
                  </option>
                  <option
                    value="Standard Label"
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Standard Label
                  </option>
                  <option
                    value="Type Match Label"
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Type Match Label
                  </option>
                  <option
                    value="Sky Label"
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Sky Label
                  </option>
                </select>
              </div>
            </div>

            {/* Holographic */}
            <div className="w-full flex flex-col items-start gap-2">
              <label className="text-[#F2F2F2] opacity-70">Holographic</label>
              <select
                name="holographic"
                value={formData.holographic}
                onChange={handleChange}
                className="bg-transparent text-white w-full h-[58px] p-3 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70 appearance-none"
                style={{
                  backgroundColor: "#1E1E1E",
                  color: "#F2F2F2",
                }}
              >
                <option value="" disabled className="bg-black text-white">
                  Select a Holographic or Recerse Holographic
                </option>
                <option
                  value={true}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Holographic
                </option>
                <option
                  value={false}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Recerse Holographic
                </option>
              </select>
            </div>

            {/* Certification Number */}
            {/* <div className="w-full flex flex-col items-start gap-2">
              <label className="text-[#F2F2F2] opacity-70">Certification Number</label>
              <input
                type="text"
                name="certificationNumber"
                placeholder="Enter your Certification Number"
                value={formData.certificationNumber}
                onChange={handleChange}
                className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
              />
            </div> */}

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

            {/* Select Amount */}
            <div className="w-full md:w-full flex flex-col items-start gap-2">
              <label className="text-[#F2F2F2] opacity-70">Select Amount</label>
              <select
                name="selectedAmount"
                value={formData.selectedAmount}
                onChange={handleChange}
                className="bg-transparent text-white w-full h-[58px] p-3 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70 appearance-none"
                style={{
                  backgroundColor: "#1E1E1E",
                  color: "#F2F2F2",
                }}
              >
                <option value="" disabled className="bg-black text-white">
                  Select a label
                </option>
                <option
                  value="Basic"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  $Basic
                </option>
                <option
                  value="Standard"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  $Standard
                </option>
                <option
                  value="Premier"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  $Premier
                </option>
                <option
                  value="Vip"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  $VIP
                </option>
              </select>
            </div>

            <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

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
                    style={{
                      width: "150px",
                      height: "150px",
                      margin: "10px auto",
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() =>
                      downloadQRCode(card.qrCodeUrl, card.cardNumber)
                    }
                  >
                    Download QR Code
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Total Amount */}
        <Typography variant="h6" align="center" color="white" sx={{ mt: 2 }}>
          Total Amount: AU$ {calculateTotal().toFixed(2)}
          {/* {(
            ServiceAmount +
            cardsArray.reduce(
              (sum, card) => sum + (labelValues[card.label] || 0),
              0
            ) +
            cardsArray.reduce(
              (sum, card) =>
                sum + (ServiceAmountValues[card.selectedAmount] || 0),
              0
            )
          ).toFixed(2)} */}
        </Typography>
      </Box>
    </Container>
  );
}

export default PaymentCard;

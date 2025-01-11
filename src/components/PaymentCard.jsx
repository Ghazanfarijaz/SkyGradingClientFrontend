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



import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import { useAddCardMutation } from "../api/apiSlice"; // Import addCard mutation from API slice
import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
import {useGetCardByUserIdQuery} from "../api/apiSlice";

import QRCode from "qrcode";

function PaymentCard() {

  const { user, isAuthenticated } = useAuth();
  console.log(user.id);


  
    // Fetch cards for the authenticated user
  const { data: cards = [], isLoading, error } = useGetCardByUserIdQuery(user?.id);

  // if (!isAuthenticated) {
  //   return <p>Please log in.</p>;
  // }
  
  const [formData, setFormData] = useState({
    name: "",
    set: "",
    releaseYear: "",
    cardNumber: "",
    language: "",
    label: "",
    certificationNumber: "",
    address: "",
    // termsAgreed: false, // Boolean for checkbox
    // rarity: "",
    // image: "",
    // grade: 0,
    // subgrade: 0,
    // trackingStatus: "",
    // rating: 0,
    // trackingID,
    userId: user.id,
  });

  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [addCard] = useAddCardMutation(); // Initialize the addCard mutation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission with API integration
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, set, releaseYear, 
      cardNumber, language, label, 
      certificationNumber, address , 
      // termsAgreed, rarity, image,
      // grade, subgrade, trackingStatus, 
      // rating, trackingID , 
      // userId
    
    } = formData;

    // Basic validation
    if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
      setResponseMessage("All fields are required!");
      return;
    }
   
    // Call addCard mutation with form data
    try {
      await addCard(formData);
      setResponseMessage("Payment submitted successfully!");
      generateQRCode(cardNumber);
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const {
  //     name, set, releaseYear, cardNumber, language,
  //     label, certificationNumber, address,
  //   } = formData;
  
  //   // Basic validation
  //   if (!name || !set || !releaseYear || !cardNumber || !language || !label || !certificationNumber || !address) {
  //     setResponseMessage("All fields are required!");
  //     return;
  //   }
  
  //   // Step 1: Call your backend to create a Razorpay order
  //   const amount = 500; // Example amount in INR
  //   const currency = 'INR';

  //   generateQRCode(cardNumber);
  
  //   try {
  //     const orderResponse = await fetch('/create-order', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ amount, currency }),
  //     });
  
  //     const orderData = await orderResponse.json();
  
  //     if (!orderData || !orderData.id) {
  //       setResponseMessage("Error creating Razorpay order. Please try again.");
  //       return;
  //     }
  
  //     // Step 2: Configure Razorpay options
  //     const options = {
  //       key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
  //       amount: orderData.amount,
  //       currency: orderData.currency,
  //       name: "Card Service",
  //       description: "Payment for card creation",
  //       order_id: orderData.id,
  //       handler: async (response) => {
  //         // Step 3: Verify payment on the backend
  //         const verifyResponse = await fetch('/verify-payment', {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(response),
  //         });
  
  //         const verifyData = await verifyResponse.json();
  
  //         if (verifyData.status === "success") {
  //           // Step 4: Call addCard mutation to create the card
  //           try {
  //             await addCard(formData);
  //             setResponseMessage("Card created successfully!");
  //           } catch (error) {
  //             setResponseMessage(`Errors: ${error.message}`);
  //           }
  //         } else {
  //           setResponseMessage("Payment verification failed. Please try again.");
  //         }
  //       },
  //       prefill: {
  //         name: "John Doe",
  //         email: "john.doe@example.com",
  //         contact: "9999999999",
  //       },
  //       theme: { color: "#3399cc" },
  //     };
  
  //     // Step 5: Open Razorpay payment modal
  //     const razorpayInstance = new window.Razorpay(options);
  //     razorpayInstance.open();
  //   } catch (error) {
  //     setResponseMessage(`Error: ${error.message}`);
  //   }
  // };

  const [cardNumber, setCardNumber] = useState(""); // To store the card number
  const [qrCodeUrl, setQrCodeUrl] = useState(""); // To store the generated QR code URL
  const generateQRCode = (cardNumber) => {
    QRCode.toDataURL(cardNumber, { errorCorrectionLevel: 'H' })
      .then((url) => {
        setQrCodeUrl(url); // Set the URL of the QR code image
      })
      .catch((err) => {
        console.error("Error generating QR Code:", err);
      });
  };

  const downloadQRCode = () => {
    // Create an anchor element to trigger the download
    const a = document.createElement("a");
    a.href = qrCodeUrl; // Set the image URL as the href
    a.download = `${cardNumber}_qr.png`; // Set the filename to include the card number
    a.click(); // Programmatically click the anchor element to trigger the download
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
                <input
                  type="text"
                  name="label"
                  placeholder="Enter your Label"
                  value={formData.label}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
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
            {qrCodeUrl && (
        <div>
          <img src={qrCodeUrl} alt="QR Code" style={{ width: 150, height: 150 }} />
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
      )}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default PaymentCard;


import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./button.css";
import "./SearchCard.css";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Grid,
} from "@mui/material";
import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  useGetCardByCardNumberQuery,
  useGetAllCardsQuery,
} from "../api/apiSlice";
import { Html5Qrcode } from "html5-qrcode";
import GradientAreaChart from "./GradientGraph";
import triangle from "../assets/triangle.png";

import polygon from "../assets/Polygon.png";
import group from "../assets/Group.png";
import { Link } from "react-router-dom";

export default function SearchCard() {
  const swiperRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scannerActive, setScannerActive] = useState(false);
  const [mockCards, setMockCards] = useState(null);

  const qrReaderRef = useRef(null);
  const readerRef = useRef(null);

  // Fetch all cards
  const { data: allCards } = useGetAllCardsQuery();

  // Fetch card by card number
  const { data: cardData } = useGetCardByCardNumberQuery(searchInput, {
    skip: !searchInput, // Skip query until searchInput is set
  });

  // Update mockCards when cardData changes
  useEffect(() => {
    if (cardData?.image) {
      const mockCards = [
        { id: "189824", img: cardData.image, backImg: cardData.image2 }, // Include both images
        { id: "123456", img: cardData.image, backImg: cardData.image2 },
        { id: "123456", img: cardData.image, backImg: cardData.image2 },
        { id: "123456", img: cardData.image, backImg: cardData.image2 },
        { id: "123456", img: cardData.image, backImg: cardData.image2 },
      ];
      setMockCards(mockCards);
    }
  }, [cardData]);

  // Trigger handleSearch when cardData changes
  useEffect(() => {
    if (cardData) {
      handleSearch();
    }
  }, [cardData]);

  const handleSearch = () => {
    setTimeout(() => {
      if (cardData && cardData.cardNumber === searchInput) {
        setSelectedCard(cardData);
        setShow(true);
        setShowCards(true);
      } else {
        alert("Card not found!");
      }
    }, 1000); // Delay of 1 second
  };

  const handleRandomCard = () => {
    if (allCards && allCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * allCards.length);
      const randomCardNumber = allCards[randomIndex].cardNumber;
      console.log("Random Card Number:", randomCardNumber);
      setSearchInput(randomCardNumber); // Update searchInput to trigger the query
    } else {
      alert("No cards available to select randomly!");
    }
  };

  useEffect(() => {
    if (isScanning) {
      const startScanner = async () => {
        try {
          const html5QrCode = new Html5Qrcode("reader");
          qrReaderRef.current = html5QrCode;
          await html5QrCode.start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: { width: 250, height: 250 },
            },
            handleScanSuccess,
            handleScanFailure
          );
          setScannerActive(true);
        } catch (err) {
          console.error("Failed to start QR Code scanner:", err);
          setIsScanning(false);
        }
      };

      startScanner();
    } else {
      if (qrReaderRef.current) {
        qrReaderRef.current.stop().then(() => {
          qrReaderRef.current.clear();
          qrReaderRef.current = null;
          setScannerActive(false);
        });
      }
    }

    return () => {
      if (qrReaderRef.current) {
        qrReaderRef.current.stop().then(() => {
          qrReaderRef.current.clear();
          qrReaderRef.current = null;
        });
      }
    };
  }, [isScanning]);

  const handleScanSuccess = (decodedText) => {
    console.log("Scan success:", decodedText);

    let cardNumber = decodedText;

    try {
      const parsedData = JSON.parse(decodedText);
      if (parsedData && parsedData.cardNumber) {
        cardNumber = parsedData.cardNumber;
      }
    } catch (error) {
      // If parsing fails, use decodedText as cardNumber
    }

    setSearchInput(cardNumber);
    // handleSearch();
    stopScanning();
  };

  // ...

  const handleScanFailure = (error) => {
    console.error("QR Code scanning failed:", error);
  };

  const startScanning = () => {
    console.log("Start scanning clicked.");
    setIsScanning(true);
  };

  const stopScanning = () => {
    console.log("Stop scanning triggered.");
    if (qrReaderRef.current) {
      qrReaderRef.current.stop().then(() => {
        console.log("QR scanner stopped.");
        qrReaderRef.current.clear();
        qrReaderRef.current = null;
        setIsScanning(false);
        setScannerActive(false);
      });
    }
  };
  return (
    <div className="min-h-[100vh] bg-transparent text-white flex flex-col items-center pt-28">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "110vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#1A1A1A", // Dark Page background
        }}
      >
        {/* Background Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "5%",
            transform: "translateX(-50%)",
            width: { md: "300px", xs: "150px" },
            height: "150px",
            background:
              "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
            filter: "blur(100px)",
            zIndex: 0, // Place the gradient behind the content
          }}
        ></Box>
        <div class="absolute top-[40%] left-[2%] h-12">
          <img src={polygon} />
        </div>
        <div class="absolute top-[80%] sm:top-[10%] md:top-[75%] left-[60%] sm:left-[10%] md:left-[80%] h-12">
          <img src={polygon} alt="polygon" />
        </div>
        <div class="absolute top-[75%]  left-[0%]  h-12">
          <img src={group} alt="polygon" />
        </div>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "20%", md: "30%" },
            left: { md: "90%", xs: "55%" },
            transform: "translateX(-50%)",
            width: { md: "300px", xs: "150px" },
            height: "150px",
            background:
              "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
            filter: "blur(100px)",
            zIndex: 0, // Place the gradient behind the content
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "95%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1589px",
            height: "194px",
            background:
              "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.2) 20%)",
            filter: "blur(100px)",
            zIndex: 0, // Place the gradient behind the content
          }}
        />
        {/* Outer Box with Gradient Border */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "500px" },
            borderRadius: "35px",
            background: "linear-gradient(to bottom, #121212, #02CCFE)", // Gradient border
            padding: "4px", // Border thickness
            zIndex: 1, // Content on top
          }}
        >
          {/* Inner Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 24px",
              borderRadius: "31px", // Slightly smaller than the outer border
              backgroundColor: "#121212", // Solid black background for content
            }}
          >
            {/* Main Text */}
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { md: "16px", xs: "12px" },
                color: "#FFFFFF",
              }}
            >
              Unleash the Full Potential of Your Cards
            </Typography>

            {/* Discover More */}
            <Typography
              component={Link}
              to="/submit"
              sx={{
                fontWeight: "bold",
                fontSize: { md: "16px", xs: "12px" },
                color: "#F27013", // Orange color
                cursor: "pointer",
              }}
            >
              Discover More
            </Typography>
          </Box>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            color: "white",
            fontSize: { md: "80px", xs: "32px" },
            fontWeight: "bold",
            textAlign: "center",
            mt: "4vh",
            letterSpacing: "3px", // Add letter spacing
            zIndex: 1,
          }}
        >
          Welcome to Sky Grading— <br />
          Your Trusted Card Grading <br /> Service!
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            mt: "2vh",
            zIndex: 1,
          }}
        >
          Experience unparalleled professionalism and ease in card grading,
          tailored
          <br /> just for you.
        </Typography>

        <Box sx={{ width: "60%", padding: "10px 0" }}>
          <Divider
            sx={{
              borderColor: "white", // White line
              borderWidth: "2px", // Thicker line
              opacity: 0.2, // Slight transparency for a subtle look
              marginTop: 2,
              marginBottom: 2,
            }}
          />
        </Box>

        {/* Search Section */}
        <div className="w-full max-w-8xl mb-8 px-4">
          <div className="w-full max-w-8xl mb-8 px-4">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {/* TextField */}
              <TextField
                variant="outlined"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter card number..."
                sx={{
                  width: "100%",
                  maxWidth: "600px", // Restricts the max width of the input
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    background: "transparent",
                    border: "2px solid transparent",
                    backgroundImage:
                      "linear-gradient(#000, #000), linear-gradient(90deg, #ffffff, #02CCFE)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    "& input": {
                      color: "#FFFFFF",
                      textAlign: "center",
                    },
                  },
                }}
              />
              <div className="flex gap-4 items-center justify-center md:justify-between flex-col md:flex-row">
                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="custom-button md:px-4 px-2 py-2 text-sm md:text-base w-full md:w-auto"
                >
                  Search
                </button>

                {/* Random Card Button */}
                <button
                  onClick={handleRandomCard}
                  className="custom-button px-4 py-2 text-sm md:text-base w-full md:w-auto"
                >
                  Random Card
                </button>
                <button
                  onClick={startScanning}
                  className="custom-button px-4 py-2 text-sm md:text-base w-full md:w-auto"
                >
                  {isScanning ? "Scanning..." : "Scan QR Code"}
                </button>
              </div>
            </div>
          </div>
          {/* QR Scanner */}
          {/* {isScanning && (
  <div
    id="reader"
    ref={readerRef}  // Attach the ref to the div
    style={{ width: "300px", height: "300px" }}
  ></div>
)} */}
        </div>
      </Box>

      {/* QR Scanner */}
      {isScanning && (
        <div
          id="reader"
          ref={readerRef}
          style={{ width: "300px", height: "300px" }}
        ></div>
      )}

      {/* Card Details Section */}
      {selectedCard && (
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            sx={{ mb: 8 }}
          >
            {mockCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={card.img} alt={`${card.name} front`} />
                    </div>
                    <div className="flip-card-back">
                      <img src={card.backImg} alt={`${card.name} back`} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Card Details */}
          <div>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "40px",
                marginTop: 10,
                marginBottom: 4,
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                background: "transparent",
                letterSpacing: "5px",
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
              <Card
                className="mt-8 w-full bg-white text-white"
                sx={{
                  borderRadius: "35px",
                  backgroundColor: "transparent",
                  position: "relative",
                  overflow: "hidden",
                  width: "80vw",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#FFFFFF",
                      padding: "10px",
                      transform: "UpperCase",
                    }}
                    component="div"
                    gutterBottom
                  >
                    Card Details
                  </Typography>
                  <Divider
                    sx={{
                      backgroundColor: "white",
                      border: "2px solid #ffffff",
                    }}
                  />

                  <div className="grid md:grid-cols-5 xs:grid-cols-1 gap-4 mt-9">
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Name</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.name}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Set:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.set}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Release Year:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.releaseYear}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Certification No:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.cardNumber}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Language:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.language}
                      </Typography>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 xs:grid-cols-1 gap-4 mt-9 md:items-center md:mx-12 xs:mx-0">
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Rarity:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.rarity}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Grade:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.grade}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="custom-field">Label:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.label}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="custom-field w-44">Number:</div>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "semibold",
                          color: "white",
                          fontSize: "20px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        {selectedCard.certificationNumber}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "500px", sm: "400px", md: "500px" },
                mt: 10,
                zIndex: 0,
              }}
            >
              {/* Background Triangle */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: { md: `url(${triangle})`, xs: "none" },
                  backgroundRepeat: "no-repeat",
                  backgroundSize: { sm: "contain", md: "contain" },
                  backgroundPosition: "center",
                  zIndex: -1,
                }}
              />

              {/* Subgrades Section */}
              <Box sx={{ textAlign: "center", py: { xs: 1, sm: 6, md: 8 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 4,
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  }}
                >
                  Subgrades
                </Typography>

                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  sx={{ mb: 4 }}
                >
                  {selectedCard.subgrade &&
                    Object.entries(selectedCard.subgrade).map(
                      ([key, value]) => (
                        <Grid item xs={3} sm={3} md={1.5} key={key}>
                          <Box
                            sx={{
                              width: { xs: "60px", sm: "70px", md: "80px" },
                              height: { xs: "40px", sm: "45px", md: "50px" },
                              background:
                                "linear-gradient(to bottom, #00bfff, #0000ff)",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                              mx: "auto",
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: {
                                  xs: "0.8rem",
                                  sm: "1rem",
                                  md: "1.2rem",
                                },
                              }}
                            >
                              {value}
                            </Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "center",
                              mt: 1,
                              fontSize: {
                                xs: "0.6rem",
                                sm: "0.8rem",
                                md: "1rem",
                              },
                            }}
                          >
                            {key}
                          </Typography>
                        </Grid>
                      )
                    )}
                </Grid>

                {/* Grade Section */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                    }}
                  >
                    GRADE
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "80px", sm: "90px", md: "100px" },
                      height: { xs: "50px", sm: "55px", md: "60px" },
                      background:
                        "linear-gradient(to bottom, #00bfff, #0000ff)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                      }}
                    >
                      {selectedCard.grade}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
            <GradientAreaChart
              allCards={allCards}
              selectedCard={selectedCard}
            />
          </div>
        </>
      )}
    </div>
  );
}

// import React, { useRef, useState , useEffect} from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import card1 from "../assets/4.png"; // Add your card images or data
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "./button.css";
// import {
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Divider,
//   Box,
//   Grid,
//   Paper,
// } from "@mui/material";
// import triangle from "../assets/triangle.png";
// import GradientAreaChart from "./GradientGraph";
// // import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
// import { useGetCardByCardNumberQuery } from "../api/apiSlice"; // Import the query hook
// import { useGetAllCardsQuery } from "../api/apiSlice";

// import { Html5Qrcode } from "html5-qrcode";
// import { Html5QrcodeScanner } from "html5-qrcode";

// export default function SearchCard() {
//   const swiperRef = useRef(null);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [searchInput, setSearchInput] = useState("");
//   const [show, setShow] = useState(false);
//   const [showCards, setShowCards] = useState(false);
//   const [isScanning, setIsScanning] = useState(false);
//   const [scannerActive, setScannerActive] = useState(false);  // Track scanner state
//   const [mockCards, setMockCards] = useState(null);

//   const qrReaderRef = useRef(null);
//   const readerRef = useRef(null);

//   console.log("selected cards ", selectedCard);

//   //backend integration ==------------------------------------------------------

//   const { data: allCards } = useGetAllCardsQuery();

//   console.log("allCards => ", allCards);

//   //=============================================================================

//   // Query hook
//   const {
//     data: cardData,
//     error,
//     isLoading,
//   } = useGetCardByCardNumberQuery(searchInput, {
//     skip: !searchInput, // Skip query until searchInput is set
//   });

//   console.log("cardData => ", cardData);

//   useEffect(() => {
//     if (cardData?.image) {
//       // Create a mock array of cards with the same image from cardData
//       const mockCards = [
//         { id: "189824", img: cardData.image },
//         { id: "123456", img: cardData.image },
//         { id: "123456", img: cardData.image },
//         { id: "123456", img: cardData.image },
//         { id: "123456", img: cardData.image },
//       ];

//       // Update the state with the mock cards
//       setMockCards(mockCards);
//     }
//   }, [cardData]); // Run this effect whenever cardData changes

//   //==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//   const searchclick = () => {};

//   const handleSearch = () => {
//     // Check if cardData exists and if the cardNumber matches the search input
//     if (cardData && cardData.cardNumber === searchInput) {
//       // If card found, set it as the selected card
//       setSelectedCard(cardData);
//       setShow(true);
//       setShowCards(true);
//     } else {
//       // If card not found
//       alert("Card not found!");
//     }
//   };

//   const handleRandomCard = () => {
//     const randomIndex = Math.floor(Math.random() * allCards.length);
//     const randomCardNumber = allCards[randomIndex].cardNumber;

//     console.log("Random Card Number:", randomCardNumber);

//     setSearchInput(randomCardNumber);

//     handleSearch();

//     return randomCardNumber; // Optional: if you want to use the value somewhere else
//   };

// //===================================================================

//   useEffect(() => {
//     if (isScanning && !scannerActive) {
//       // Check if the element exists
//       const readerElement = document.getElementById("reader");
//       if (!readerElement) {
//         console.error("Element with id 'reader' not found.");
//         return;
//       }

//       const html5QrCode = new Html5Qrcode("reader");
//       qrReaderRef.current = html5QrCode;

//       html5QrCode
//         .start(
//           { facingMode: "environment" },
//           {
//             fps: 10,
//             qrbox: { width: 250, height: 250 },
//           },
//           handleScanSuccess,
//           handleScanFailure
//         )
//         .then(() => {
//           console.log("QR Scanner started successfully.");
//           setScannerActive(true); // Mark scanner as active
//         })
//         .catch((err) => {
//           console.error("Failed to start QR Code scanner:", err);
//           setIsScanning(false);
//         });
//     }

//     return () => {
//       console.log("Cleanup triggered");
//       if (scannerActive && qrReaderRef.current) {
//         qrReaderRef.current.stop().then(() => {
//           qrReaderRef.current.clear();
//           setScannerActive(false);
//         });
//       }
//     };
//   }, [isScanning, scannerActive]);

//   const handleScanSuccess = (decodedText) => {
//     console.log("Scan success:", decodedText);

//     // Assuming the decoded text is a string of numbers (cardNumber)
//     const cardIndex = allCards.findIndex((card) => card.cardNumber === decodedText);

//     if (cardIndex !== -1) {
//       // Card found, set it as selected
//       setSelectedCard(allCards[cardIndex]);
//       setShow(true);
//       if (swiperRef.current) {
//         swiperRef.current.slideTo(cardIndex);
//       }
//       stopScanning(); // Stop scanning after success
//     } else {
//       // Card not found
//       alert("Card not found for the scanned QR code!");
//       stopScanning(); // Stop scanning after a failed scan
//     }
//   };

//   const handleScanFailure = (error) => {
//     console.error("QR Code scanning failed:", error);
//   };

//   const startScanning = () => {
//     console.log("Start scanning clicked.");
//     setIsScanning(true);
//   };

//   const stopScanning = () => {
//     console.log("Stop scanning triggered.");
//     if (scannerActive && qrReaderRef.current) {
//       qrReaderRef.current.stop().then(() => {
//         qrReaderRef.current.clear();
//         setIsScanning(false);
//         setScannerActive(false); // Mark scanner as inactive
//       });
//     }
//   };

// //===========================================================

//   return (
//     <div className="min-h-[100vh] bg-transparent text-white flex flex-col items-center   pt-28">
//       {/* Search Section */}

//       {show && (
//         <>
//           <Box
//             sx={{
//               position: "absolute",
//               top: "220%",
//               left: "15%",
//               transform: "translateX(-50%)",
//               width: { md: "300px", xs: "150px" },
//               height: "150px",
//               background:
//                 "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
//               filter: "blur(100px)",
//               zIndex: 0, // Place the gradient behind the content
//             }}
//           />
//           <Box
//             sx={{
//               position: "absolute",
//               top: "270%",
//               left: { md: "75%", xs: "60%" },
//               transform: "translateX(-50%)",
//               width: { md: "300px", xs: "150px" },
//               height: "150px",
//               background:
//                 "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
//               filter: "blur(100px)",
//               zIndex: 0, // Place the gradient behind the content
//             }}
//           />
//           <Box
//             sx={{
//               position: "absolute",
//               top: "200%",
//               left: "25%",
//               transform: "translateX(-50%)",
//               width: "300px",
//               height: "150px",
//               background:
//                 "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
//               filter: "blur(100px)",
//               zIndex: 0, // Place the gradient behind the content
//             }}
//           />

//           <Box
//             sx={{
//               position: "absolute",
//               top: "260%",
//               left: { md: "75%", xs: "60%" },
//               transform: "translateX(-50%)",
//               width: { md: "300px", xs: "150px" },
//               height: "150px",
//               background:
//                 "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
//               filter: "blur(100px)",
//               zIndex: 0, // Place the gradient behind the content
//             }}
//           />
//         </>
//       )}

//       <div className="w-full max-w-8xl mb-8 px-4">
//         <div className="flex flex-wrap gap-4  items-center justify-center ">
//           {/* TextField */}
//           <TextField
//             variant="outlined"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Enter card number..."
//             sx={{
//               width: "100%",
//               maxWidth: "600px", // Restricts the max width of the input
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "50px",
//                 background: "transparent",
//                 border: "2px solid transparent",
//                 backgroundImage:
//                   "linear-gradient(#000, #000), linear-gradient(90deg, #ffffff, #02CCFE)",
//                 backgroundOrigin: "border-box",
//                 backgroundClip: "content-box, border-box",
//                 "& input": {
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                 },
//               },
//             }}
//           />
//           <div className="flex gap-4 items-center justify-center md:justify-between">
//             {/* Search Button */}
//             <button
//               onClick={handleSearch}
//               className="custom-button md:px-4 xs:px-0 py-2 text-sm md:text-base"
//             >
//               Search
//             </button>

//             {/* Random Card Button */}
//             <button
//               onClick={handleRandomCard}
//               className="custom-button px-4 py-2 text-sm md:text-base"
//             >
//               Random Card
//             </button>
//             <button
//               onClick={startScanning}
//               className="custom-button px-4 py-2 text-sm md:text-base"
//             >
//               {isScanning ? "Scanning..." : "Scan QR Code"}
//             </button>
//           </div>
//         </div>
//       </div>

//        {/* QR Scanner */}
//      {isScanning && (
//         <div
//           id="reader"
//           ref={readerRef}  // Attach the ref to the div
//           style={{ width: "300px", height: "300px" }}
//         ></div>
//       )}

//       {/* Card Details Section */}
//       {selectedCard && (
//         <>
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             modules={[EffectCoverflow, Pagination]}
//             className="mySwiper"
//             onSwiper={(swiper) => (swiperRef.current = swiper)} // Properly initialize swiperRef
//             sx={{ mb: 8 }}
//           >
//             {mockCards.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <img src={card.img} alt={card.name} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 borderRadius: "40px",
//                 // padding: 4,
//                 marginTop: 10,
//                 marginBottom: 4,
//                 color: "#FFFFFF",
//                 display: "flex",
//                 flexDirection: "column",
//                 textAlign: "left",
//                 background: "transparent",
//                 letterSpacing: "5px",
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   borderRadius: "40px",
//                   padding: "4px", // Adjust thickness of gradient border
//                   background: "linear-gradient(to left, #FFFFFF, #50A1FF)", // Gradient for the border
//                   WebkitMask:
//                     "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)", // Mask to apply gradient only to the border
//                   WebkitMaskComposite: "destination-out",
//                   maskComposite: "exclude",
//                 },
//                 zIndex: 1, // Ensure content inside remains above the border
//               }}
//             >
//               <Card
//                 className="mt-8 w-full  bg-white text-white"
//                 sx={{
//                   borderRadius: "35px", // Round edges
//                   backgroundColor: "transparent", // Transparent inner background
//                   position: "relative", // For pseudo-element positioning
//                   overflow: "hidden", // Prevent pseudo-element overflow
//                   width: "80vw", // Full width
//                   alignItems: "center",
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     sx={{
//                       fontSize: "30px",
//                       fontWeight: "bold",
//                       textAlign: "center",
//                       color: "#FFFFFF",
//                       padding: "10px",
//                       transform: "UpperCase",
//                     }}
//                     component="div"
//                     gutterBottom
//                   >
//                     Card Details
//                   </Typography>
//                   <Divider
//                     sx={{
//                       backgroundColor: "white",
//                       border: "2px solid #ffffff",
//                     }}
//                   />

//                   <div className="grid md:grid-cols-5 xs:grid-cols-1  gap-4 mt-9">
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field">Name</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.name}
//                       </Typography>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field">Set:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.set}
//                       </Typography>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field">Release Year:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.releaseYear}
//                       </Typography>
//                     </div>
//                     <div className="flex flex-col gap-2 ">
//                       <div className="custom-field">Number:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.cardNumber}
//                       </Typography>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field">Language:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.language}
//                       </Typography>
//                     </div>
//                   </div>
//                   <div className="grid md:grid-cols-4 xs:grid-cols-1  gap-4 mt-9 md:items-center md:mx-12 xs:mx-0">
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field">Rarity:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.rarity}
//                       </Typography>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field">Grade:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.grade}
//                       </Typography>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field">Label:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.label}
//                       </Typography>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <div className="custom-field w-44">Certification No:</div>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: "semibold",
//                           color: "white",
//                           fontSize: "20px",
//                           padding: "10px",
//                           display: "flex", // Add flex display
//                           alignItems: "center", // Center align vertically
//                           justifyContent: "center", // Center align horizontally (optional, if needed)
//                           height: "100%", // Ensure proper alignment
//                         }}
//                       >
//                         {selectedCard.certificationNumber}
//                       </Typography>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Box>

//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 height: { xs: "500px", sm: "400px", md: "500px" },

//                 mt: 10,
//                 zIndex: 0,
//               }}
//             >
//               {/* Background Triangle */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   backgroundImage: { md: `url(${triangle})`, xs: "none" },
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: {
//                     // xs: "250% auto",
//                     sm: "contain",
//                     md: "contain",
//                   },
//                   backgroundPosition: "center",
//                   zIndex: -1,
//                 }}
//               />

//               {/* Subgrades Section */}
//               <Box sx={{ textAlign: "center", py: { xs: 1, sm: 6, md: 8 } }}>
//                 {/* Subgrades Title */}
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontWeight: "bold",
//                     mb: 4,
//                     fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
//                   }}
//                 >
//                   Subgrades
//                 </Typography>

//                 {/* Subgrades Section */}
//                 <Grid
//                   container
//                   spacing={2} // Spacing between grid items
//                   justifyContent="center"
//                   sx={{ mb: 4 }}
//                 >
//                   {selectedCard.subgrade &&
//                     Object.entries(selectedCard.subgrade).map(
//                       ([key, value]) => (
//                         <Grid item xs={3} sm={3} md={1.5} key={key}>
//                           <Box
//                             sx={{
//                               width: { xs: "60px", sm: "70px", md: "80px" }, // Responsive width
//                               height: { xs: "40px", sm: "45px", md: "50px" }, // Responsive height
//                               background:
//                                 "linear-gradient(to bottom, #00bfff, #0000ff)",
//                               borderRadius: "8px",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
//                               mx: "auto", // Center align the box horizontally
//                             }}
//                           >
//                             <Typography
//                               variant="h6"
//                               sx={{
//                                 color: "white",
//                                 fontWeight: "bold",
//                                 fontSize: {
//                                   xs: "0.8rem",
//                                   sm: "1rem",
//                                   md: "1.2rem",
//                                 }, // Responsive font size
//                               }}
//                             >
//                               {value}
//                             </Typography>
//                           </Box>
//                           <Typography
//                             variant="body2"
//                             sx={{
//                               textAlign: "center",
//                               mt: 1,
//                               fontSize: {
//                                 xs: "0.6rem",
//                                 sm: "0.8rem",
//                                 md: "1rem",
//                               },
//                             }}
//                           >
//                             {key}
//                           </Typography>
//                         </Grid>
//                       )
//                     )}
//                 </Grid>

//                 {/* Grade Section */}
//                 <Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: "bold",
//                       mb: 2,
//                       fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive font size
//                     }}
//                   >
//                     GRADE
//                   </Typography>
//                   <Box
//                     sx={{
//                       width: { xs: "80px", sm: "90px", md: "100px" }, // Responsive width
//                       height: { xs: "50px", sm: "55px", md: "60px" }, // Responsive height
//                       background:
//                         "linear-gradient(to bottom, #00bfff, #0000ff)",
//                       borderRadius: "8px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       mx: "auto", // Center align the grade box
//                     }}
//                   >
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: "white",
//                         fontWeight: "bold",
//                         fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Responsive font size
//                       }}
//                     >
//                       {selectedCard.grade}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </div>
//           {/* <GradientAreaChart /> */}
//           <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
//             <GradientAreaChart  allCards={allCards}/>
//           </div>
//         </>
//       )}

//       {/* {selectedCard && (
//         <div>
//           <h3>{selectedCard.name}</h3>
//           <p>
//             <strong>Set:</strong> {selectedCard.set}
//           </p>
//           <p>
//             <strong>Release Year:</strong> {selectedCard.releaseYear}
//           </p>
//           <p>
//             <strong>Language:</strong> {selectedCard.language}
//           </p>
//           <p>
//             <strong>Rarity:</strong> {selectedCard.rarity}
//           </p>
//           <img
//             src={selectedCard.image}
//             alt={selectedCard.name}
//             style={{ width: "200px" }}
//           />
//           <h4>Subgrades</h4>
//           <ul>
//             <li>
//               <strong>Surface:</strong> {selectedCard.subgrade.surface}
//             </li>
//             <li>
//               <strong>Edging:</strong> {selectedCard.subgrade.edging}
//             </li>
//             <li>
//               <strong>Centering:</strong> {selectedCard.subgrade.centering}
//             </li>
//             <li>
//               <strong>Corners:</strong> {selectedCard.subgrade.corners}
//             </li>
//           </ul>
//         </div>
//       )} */}
//     </div>
//   );
// }

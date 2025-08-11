// import React, { useEffect } from "react";
// import { Typography, Box, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useAddCardDirectMutation, useAddCardMutation } from "../api/apiSlice"; // Import the addCard mutation

// function Success() {
//   const navigate = useNavigate();
//   // const [addCard] = useAddCardMutation(); // Initialize the addCard mutation

//   const [addCard] = useAddCardDirectMutation();

//   useEffect(() => {
//     // Retrieve the cardsArray from localStorage
//     const storedCards = JSON.parse(localStorage.getItem("cardsArray"));

//     if (storedCards && storedCards.length > 0) {
//       console.log("Cards retrieved from localStorage:", storedCards);

//       // Submit all cards to the database
//       const submitCards = async () => {
//         try {
//           for (const card of storedCards) {
//             await addCard(card).unwrap(); // Add each card to the database
//             console.log("Card added to database:", card);
//           }
//           console.log("All cards submitted successfully!");
//           alert("All cards submitted successfully!");

//           // Clear the cardsArray from localStorage after submission
//           localStorage.removeItem("cardsArray");
//         } catch (error) {
//           console.error("Error submitting cards to database:", error);
//         }
//       };

//       submitCards(); // Call the function to submit cards
//     }
//   }, [addCard]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         textAlign: "center",
//       }}
//     >
//       <Typography variant="h3" gutterBottom>
//         Payment Successful! 🎉
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 4 }}>
//         Thank you for your payment. Your cards will be processed shortly.
//       </Typography>
//       <Button
//         variant="contained"
//         onClick={() => navigate("/submit")} // Redirect to the home page
//       >
//         Go Back Home
//       </Button>
//     </Box>
//   );
// }

// export default Success;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddCardDirectMutation } from "../api/apiSlice";
import { CheckCircle, CreditCard, Home, Star, TrendingUp } from "lucide-react";

function Success() {
  const navigate = useNavigate();
  const [addCard] = useAddCardDirectMutation();
  const [submittedCards, setSubmittedCards] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [allSubmitted, setAllSubmitted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cardsArray"));

    if (storedCards && storedCards.length > 0) {
      console.log("Cards retrieved from localStorage:", storedCards);
      setSubmittedCards(storedCards);
      setIsSubmitting(true);

      const submitCards = async () => {
        try {
          for (let i = 0; i < storedCards.length; i++) {
            const card = storedCards[i];
            await addCard(card).unwrap();
            console.log("Card added to database:", card);
            setSubmitProgress(((i + 1) / storedCards.length) * 100);

            // Add a small delay for better UX
            await new Promise((resolve) => setTimeout(resolve, 300));
          }

          console.log("All cards submitted successfully!");
          setIsSubmitting(false);
          setAllSubmitted(true);

          // Show card details after a brief delay
          setTimeout(() => setShowDetails(true), 500);

          localStorage.removeItem("cardsArray");
        } catch (error) {
          console.error("Error submitting cards to database:", error);
          setIsSubmitting(false);
        }
      };

      submitCards();
    } else {
      // If no cards to submit, show success immediately
      setAllSubmitted(true);
      setTimeout(() => setShowDetails(true), 500);
    }
  }, [addCard]);

  const getTotalValue = () => {
    return submittedCards
      .reduce((total, card) => {
        const price = parseFloat(card.price?.replace("$", "") || 0);
        return total + price;
      }, 0)
      .toFixed(2);
  };

  const getRarityColor = (rarity) => {
    const rarityColors = {
      Common: "#9E9E9E",
      Uncommon: "#4CAF50",
      Rare: "#2196F3",
      Epic: "#9C27B0",
      Legendary: "#FF9800",
      Mythic: "#F44336",
    };
    return rarityColors[rarity] || "#2196F3";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Success Header */}
        <div
          style={{
            marginBottom: "32px",
            animation: "fadeIn 1s ease-out",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(45deg, #4CAF50, #8BC34A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              boxShadow: "0 8px 32px rgba(76, 175, 80, 0.3)",
            }}
          >
            <CheckCircle size={40} color="white" />
          </div>
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              marginBottom: "16px",
              fontSize: "2.5rem",
              margin: "0 0 16px 0",
            }}
          >
            Payment Successful! 🎉
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
              margin: "0 auto",
              fontSize: "1.125rem",
              lineHeight: "1.6",
            }}
          >
            Your Pokémon cards are being processed and added to your collection
          </p>
        </div>

        {/* Submission Progress */}
        {isSubmitting && (
          <div
            style={{
              marginBottom: "32px",
              animation: "slideIn 0.5s ease-out",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  marginBottom: "20px",
                  color: "#333",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                Processing Your Cards...
              </h3>
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "rgba(103, 58, 183, 0.1)",
                  marginBottom: "16px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${submitProgress}%`,
                    background: "linear-gradient(90deg, #667eea, #764ba2)",
                    borderRadius: 4,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.875rem",
                  margin: 0,
                }}
              >
                {Math.round(submitProgress)}% Complete - Adding cards to
                database
              </p>
            </div>
          </div>
        )}

        {/* Card Details Section */}
        {allSubmitted && showDetails && submittedCards.length > 0 && (
          <div
            style={{
              marginBottom: "32px",
              animation: "growIn 1s ease-out",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                padding: "32px",
              }}
            >
              <h2
                style={{
                  color: "#333",
                  marginBottom: "24px",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                Cards Successfully Added
              </h2>

              {/* Summary Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth > 768 ? "1fr 1fr 1fr" : "1fr 1fr",
                  gap: "24px",
                  marginBottom: "32px",
                  padding: "24px",
                  backgroundColor: "rgba(103, 126, 234, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "#667eea",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      marginBottom: "4px",
                    }}
                  >
                    {submittedCards.length}
                  </div>
                  <div
                    style={{
                      color: "#666",
                      fontSize: "0.875rem",
                    }}
                  >
                    Cards Added
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "#667eea",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      marginBottom: "4px",
                    }}
                  >
                    ${getTotalValue()}
                  </div>
                  <div
                    style={{
                      color: "#666",
                      fontSize: "0.875rem",
                    }}
                  >
                    Total Value
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    gridColumn: window.innerWidth > 768 ? "auto" : "1 / -1",
                  }}
                >
                  <div
                    style={{
                      color: "#667eea",
                      fontWeight: "bold",
                      fontSize: "2rem",
                      marginBottom: "4px",
                    }}
                  >
                    {new Set(submittedCards.map((card) => card.set)).size}
                  </div>
                  <div
                    style={{
                      color: "#666",
                      fontSize: "0.875rem",
                    }}
                  >
                    Different Sets
                  </div>
                </div>
              </div>

              {/* Individual Cards */}
              <div style={{ textAlign: "left" }}>
                <h3
                  style={{
                    marginBottom: "24px",
                    textAlign: "center",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Card Details
                </h3>
                <div
                  style={{
                    maxHeight: 400,
                    overflowY: "auto",
                    paddingRight: "8px",
                  }}
                >
                  {submittedCards.map((card, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px",
                        marginBottom: "16px",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(90deg, rgba(103, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
                        border: "1px solid rgba(103, 126, 234, 0.1)",
                        transition: "all 0.3s ease",
                        animation: `slideInCard 0.5s ease-out ${
                          index * 0.1
                        }s both`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateX(8px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(103, 126, 234, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontWeight: "600",
                            marginBottom: "8px",
                            fontSize: "1rem",
                            color: "#333",
                          }}
                        >
                          {card.name || `Card ${index + 1}`}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            flexWrap: "wrap",
                          }}
                        >
                          {card.set && (
                            <span
                              style={{
                                backgroundColor: "rgba(103, 126, 234, 0.1)",
                                color: "#667eea",
                                fontSize: "0.75rem",
                                padding: "4px 8px",
                                borderRadius: "12px",
                                fontWeight: "500",
                              }}
                            >
                              {card.set}
                            </span>
                          )}
                          {card.rarity && (
                            <span
                              style={{
                                backgroundColor:
                                  getRarityColor(card.rarity) + "20",
                                color: getRarityColor(card.rarity),
                                fontSize: "0.75rem",
                                padding: "4px 8px",
                                borderRadius: "12px",
                                fontWeight: "500",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <Star size={12} />
                              {card.rarity}
                            </span>
                          )}
                          {card.condition && (
                            <span
                              style={{
                                border: "1px solid #ddd",
                                color: "#666",
                                fontSize: "0.75rem",
                                padding: "4px 8px",
                                borderRadius: "12px",
                                fontWeight: "500",
                              }}
                            >
                              {card.condition}
                            </span>
                          )}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            color: "#4CAF50",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "1.25rem",
                          }}
                        >
                          <TrendingUp size={16} />
                          {card.price || "N/A"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success message for no cards case */}
        {allSubmitted && submittedCards.length === 0 && (
          <div
            style={{
              marginBottom: "32px",
              animation: "fadeIn 1s ease-out",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  marginBottom: "16px",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Transaction Completed Successfully!
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "1rem",
                  margin: 0,
                }}
              >
                Your payment has been processed. Thank you for your business!
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {allSubmitted && (
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeIn 1.5s ease-out",
            }}
          >
            <button
              onClick={() => navigate("/submit")}
              style={{
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                borderRadius: "12px",
                padding: "12px 32px",
                boxShadow: "0 4px 16px rgba(103, 126, 234, 0.3)",
                color: "white",
                border: "none",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.target.style.background =
                  "linear-gradient(45deg, #5a67d8, #6b46c1)";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(103, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background =
                  "linear-gradient(45deg, #667eea, #764ba2)";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 16px rgba(103, 126, 234, 0.3)";
              }}
            >
              <Home size={20} />
              Back to Home
            </button>

            <button
              onClick={() => navigate("/collection")}
              style={{
                borderColor: "white",
                color: "white",
                borderRadius: "12px",
                padding: "12px 32px",
                background: "transparent",
                border: "2px solid white",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <CreditCard size={20} />
              View Collection
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes growIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInCard {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Success;

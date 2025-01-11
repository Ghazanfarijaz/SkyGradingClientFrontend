import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import polygon from "../assets/Polygon.png";
const faqs = [
  {
    question: "What is Sky Grading?",
    answer:
      "Sky Grading is the process of assessing your cards by trained professionals who use standardized criteria to ensure accuracy and precision.",
  },
  {
    question: "How does the grading process work?",
    answer:
      "The grading process involves careful examination of your cards by our trained professionals, who assess various factors such as centering, corners, edges, and surface quality. Each card receives a grade on a standardized scale, which is then documented and made available to you through our user-friendly online platform.",
  },
  {
    question: "How can I track my card submission?",
    answer:
      "Once your cards are submitted and processed, you can track their grading status in real-time through our website. We provide updates at each stage of the grading process, ensuring you remain informed and engaged from submission to delivery.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of secure payment methods, including credit/debit cards, PayPal, and more. Our seamless payment integration ensures a smooth checkout experience, allowing you to focus on what matters most—your cards.",
  },
  {
    question: "What if I have more questions?",
    answer:
      "Our dedicated customer support team is here to help! You can reach out to us via email or live chat on our website for any inquiries or assistance you may need regarding our grading services.",
  },
  {
    question: "Are there any guarantees with my grading?",
    answer:
      "Yes, we stand by our grading accuracy and integrity. If you believe there has been an error in our grading assessment, please contact us within 30 days, and we will review your case to ensure complete satisfaction.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "40px 20px",
        backgroundColor: "transparent", // Dark background
        color: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <div class="absolute top-[87%] left-[10%] h-12">
        <img src={polygon} />
      </div>
      <div class="absolute top-[89%] left-[55%] md:left-[80%] h-12">
        <img src={polygon} />
      </div>
      <div class="absolute top-[100%] left-[50%] h-12">
        <img src={polygon} />
      </div>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          letterSpacing: "1px",
        }}
      >
        Trusted by Collectors Worldwide
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "40px",
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        Your Questions Answered
      </Typography>

      {/* FAQ Section */}
      <Box
        sx={{
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              backgroundColor: "#121212",
              color: "#FFFFFF",
              padding: 2,
              marginBottom: "10px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#02CCFE" }} />}
              sx={{
                fontWeight: "bold",
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
              }}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                // variant="body2"
                sx={{
                  textAlign: "left",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: "1.6",
                  fontSize: "16px",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;

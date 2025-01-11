import React, { useState } from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    title: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    const { firstName, surname, email, title, message } = formData;

    if (!firstName || !surname || !email || !title || !message) {
      setResponseMessage("All fields are required!");
      return;
    }

    // EmailJS parameters
    const templateParams = {
      firstName,
      surname,
      email,
      title,
      message,
    };

    emailjs
      .send(
        "service_isf46gs", // Replace with your EmailJS service ID
        "template_mt0wecn", // Replace with your EmailJS template ID
        templateParams,
        "pLdJ9fPNjycAo9UdQ" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setResponseMessage("Message sent successfully!");
          setFormData({
            firstName: "",
            surname: "",
            email: "",
            title: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error);
          setResponseMessage("Failed to send the message.");
        }
      );
  };

  return (
    <div className="relative min-h-[100vh]">
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          mt: 7,
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
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "40px",
              mb: 1.5,
              letterSpacing: "1px",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "normal",
              fontSize: "18px",
              mb: 3,
            }}
          >
            Get in touch with us using the form below.
          </Typography>
          <Divider sx={{ bgcolor: "#7D7A7A", mb: 5 }} />

          <form onSubmit={handleSendMessage}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                width: "100%",
              }}
            >
              <div className="w-full md:w-[785px] flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
                  <label className="text-[#F2F2F2] opacity-70">Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start gap-2">
                  <label className="text-[#F2F2F2] opacity-70">Surname</label>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Enter your Surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>

              <div className="w-full flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter your Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>

              <div className="w-full flex flex-col items-start gap-2">
                <label className="text-[#F2F2F2] opacity-70">Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[150px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border-4 border-[#F2F2F2] border-opacity-70"
                />
              </div>

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
                Send Message
              </Button>
            </Box>
          </form>

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
        </Box>
      </Container>
    </div>
  );
}

export default ContactUs;

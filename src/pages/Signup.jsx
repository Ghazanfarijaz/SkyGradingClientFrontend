import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useRegisterUserMutation } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [registerUser, { isLoading, error, isSuccess }] =
    useRegisterUserMutation();

    const apiUrl = process.env.REACT_APP_API_URL;

    console.log("here is the signup.... ", apiUrl )


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    role: "user"
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Dummy function to simulate a backend POST request
  const simulateBackendRequest = async (data) => {
    try {
      await registerUser(data).unwrap(); // Use 'unwrap' for error handling
      navigate("/login"); // Navigate to login on success
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate input fields
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      country,
      role,

    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !country
    ) {
      setMessage("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Simulate backend request
    try {
      const response = await simulateBackendRequest(formData);
      setMessage(response);
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div className=" relative min-h-[100vh]">
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          mt: 7,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "110%",
            left: "72%",
            transform: "translateX(-50%)",
            width: "200px",
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
            top: "110%",
            left: "22%",
            transform: "translateX(-50%)",
            width: "200px",
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
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
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
            top: "5%",
            left: "20%",
            transform: "translateX(-50%)",
            width: "200px",
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
            top: "5%",
            left: { md: "80%", xs: "60%" },
            transform: "translateX(-50%)",
            width: "200px",
            height: "150px",
            background:
              "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
            filter: "blur(100px)",
            zIndex: 0, // Place the gradient behind the content
          }}
        />
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
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
              fontSize: "35px",
              mb: 4,
              letterSpacing: "1px",
            }}
          >
            Sign Up to Create Account
          </Typography>

          <form onSubmit={handleSignup}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                width: "100%",
              }}
            >
              <div className="w-full md:w-[785px] flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
                  />
                </div>
              </div>

              <div className="w-full md:w-[785px] flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
                  />
                </div>
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
                />
              </div>

              <Select
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                displayEmpty
                inputProps={{ "aria-label": "Country" }}
                sx={{
                  border: "1px solid #FFFFFF",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  marginBottom: "20px",
                  "& .MuiSelect-icon": { color: "#FFFFFF" },
                  "& .MuiSelect-select": {
                    color: formData.country ? "#FFFFFF" : "#B3B3B3",
                  },
                }}
              >
                <MenuItem disabled value="">
                  <em>Country</em>
                </MenuItem>
                <MenuItem value="USA">United States</MenuItem>
                <MenuItem value="UK">United Kingdom</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
              </Select>

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
                Sign Up
                <ArrowForwardIcon />
              </Button>
            </Box>
          </form>

          {message && (
            <Typography
              align="center"
              sx={{
                mt: 2,
                color: message.includes("successful") ? "#4CAF50" : "#FF5252",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Signup;

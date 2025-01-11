import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useLoginUserMutation } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./../authentication/authProvider"; // Adjust path to your AuthProvider


function Login() {

  const { login } = useAuth();

  const navigate = useNavigate();


  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const result = await loginUser({ email, password }).unwrap();
      console.log("Logged in user data:", result);
  
      const token = result.token;
      const user = result.user;
  
      if (!token) {
        throw new Error("No token returned from login response");
      }
  
      // Use the login function from AuthProvider
      login(user, token);
  
      alert("Logged in successfully");
      navigate("/"); // Navigate to the home or dashboard page
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
  };
  
  

  return (
    <div className=" relative min-h-[100vh]">
      <Container
        maxWidth="md"
        sx={{
          height: "100vh", // Ensures the container spans the full viewport height
          display: "flex", // Flexbox for centering
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          zIndex: 1,
        }}
      >
        {/* Background Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "12%",
            transform: "translateX(-50%)",
            width: "300px",
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
            top: "20%",
            left: "52%",
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
            top: "45%",
            left: { md: "92%", xs: "60%" },
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
            width: "100%",
            maxWidth: "900px", // Optional: Limit the width of the login box
            padding: 4,
            borderRadius: 3,
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
              mb: 4,
              letterSpacing: "1px",
            }}
          >
            Login to your account
          </Typography>
          {/* Google Sign-In Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#191919",
              color: "#FFFFFF",
              textTransform: "none",
              padding: "10px 0",
              fontSize: "16px",
              borderRadius: 3,
              border: "1px solid #FFFFFF",
              mb: 2,
              "&:hover": { bgcolor: "#50A1FF", opacity: 0.3 },
            }}
          >
            Sign in with Google
          </Button>

          {/* OR Divider */}
          <Typography
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.36)",
              fontSize: "40px",
              mb: 2,
            }}
          >
            OR
          </Typography>
          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Stack fields vertically
                gap: 1.5,
              }}
            >
              {/* Email Field */}
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
              />

              {/* Password Input */}
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-white w-full h-[56px] p-4 rounded-xl mb-2 outline-none placeholder-[#F2F2F2] placeholder-opacity-70 border border-white"
              />

              {/* Login Button */}
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
                Login
                <ArrowForwardIcon />
              </Button>
            </Box>
          </form>

          {/* Response Message */}
          {message && (
            <Typography
              align="center"
              sx={{
                mt: 2,
                color: message === "Login successful!" ? "#4CAF50" : "#FF5252",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {message}
            </Typography>
          )}

          {/* Footer Link */}
          <Typography
            align="center"
            sx={{ mt: 2, color: "#FFFFFF", fontSize: "18px" }}
          >
            Don't have an account yet?{" "}
            <span style={{ color: "#FFFFFF", cursor: "pointer" }}>Sign Up</span>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
import { useUpdateUserMutation } from "../api/apiSlice";

const ProfilePage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [updateUser, { isLoading, isSuccess, isError }] = useUpdateUserMutation();

  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    country: user?.country || "",
  });

  // Update form data when user changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ id: user.id, ...formData }).unwrap();
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile.");
    }
  };

  // Pre-fill form data when user is loaded
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        country: user.country,
      });
    }
  }, [user]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "transparent",
        padding: "40px",
        mt: 5,
      }}
    >
      {/* Background Gradients (unchanged) */}
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "15%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "85%",
          left: { md: "75%", xs: "55%" },
          transform: "translateX(-50%)",
          width: "200px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(2, 204, 254, 0.5) 0%, rgba(2, 204, 254, 0.65) 100%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: "300px",
          height: "300px",
          position: "absolute",
          top: "95%",
          left: { md: "35%", xs: "15%" },
          background: "linear-gradient(90deg, #50A1FF 40%, rgba(80, 161, 255, 0) 100%)",
          borderRadius: "50%",
          filter: "blur(150px)",
          zIndex: 0,
          transform: "translateX(-50%)",
        }}
      />

      {/* Profile Card and Form */}
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "1200px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          padding: 2,
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
      >
        {/* Left Section - Profile Card */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            width: { xs: "100%", md: "300px" },
            height: "600px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.1)",
            margin: { xs: "auto", md: 0 },
            textAlign: "center",
          }}
        >
          {/* Top Polygon Shape */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "130px",
              background: "linear-gradient(to right, #000000, #02CCFE)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />

          {/* Circular Profile Image */}
          <Box
            sx={{
              position: "relative",
              marginTop: "-260px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#000",
              border: "2px solid #02CCFE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              zIndex: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "large", ml: 11, mt: 10 }}>
              <CameraAltOutlinedIcon fontSize={"large"} />
            </Typography>
          </Box>

          {/* Profile Text */}
          <Typography
            sx={{
              marginTop: "20px",
              color: "#FFFFFF",
              fontWeight: "semibold",
              fontSize: "1.2rem",
            }}
          >
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1rem",
            }}
          >
            {user?.email}
          </Typography>
        </Grid>

        {/* Right Section - Form */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h5"
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              marginBottom: 2,
              textAlign: "left",
              letterSpacing: "5px",
            }}
          >
            Profile Page
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                InputProps={{
                  style: {
                    color: "#FFFFFF",
                    border: "1px solid #02CCFE",
                    borderRadius: "10px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                InputProps={{
                  style: {
                    color: "#FFFFFF",
                    border: "1px solid #02CCFE",
                    borderRadius: "10px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                  style: {
                    color: "#FFFFFF",
                    border: "1px solid #02CCFE",
                    borderRadius: "10px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                InputProps={{
                  style: {
                    color: "#FFFFFF",
                    border: "1px solid #02CCFE",
                    borderRadius: "10px",
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Update Profile Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "end", xs: "center" },
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={isLoading}
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "bold",
                mt: 5,
                border: "1px solid #02CCFE",
                padding: "10px 30px",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#00A7D1",
                },
              }}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
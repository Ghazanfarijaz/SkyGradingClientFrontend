import React from "react";
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
const ProfilePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "transparent", // Background color
        padding: "40px",
        mt: 5,
      }}
    >
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
          zIndex: 0, // Place the gradient behind the content
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
          zIndex: 0, // Place the gradient behind the content
        }}
      />
      <Box
        sx={{
          width: "300px", // Adjust the width
          height: "300px", // Adjust the height
          position: "absolute",
          top: "95%",
          left: { md: "35%", xs: "15%" },
          background:
            "linear-gradient(90deg, #50A1FF 40%, rgba(80, 161, 255, 0) 100%)",
          borderRadius: "50%", // Optional: Adjust for rounded edges
          filter: "blur(150px)",
          zIndex: 0,
          transform: "translateX(-50%)",
        }}
      />
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
          backgroundColor: "transparent", // Slight transparency
          color: "#FFFFFF",
        }}
      >
        {/* Left Section - Profile Card */}

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            width: { xs: "100%", md: "300px" }, // Adjusted width
            height: "600px", // Adjusted height
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // borderRadius: "12px",
            padding: "20px",
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.1)", // Transparent white
            // border: "1px solid #02CCFE", // Outer border
            margin: { xs: "auto", md: 0 },
            textAlign: "center", // Center text content
          }}
        >
          {/* Top Polygon Shape */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "130px", // Height of the polygon
              background: "linear-gradient(to right, #000000, #02CCFE)", // Gradient
              clipPath: "polygon(0 0, 100% 0, 50% 100%)", // Triangle polygon
            }}
          />

          {/* Circular Profile Image */}
          <Box
            sx={{
              position: "relative",
              marginTop: "-260px", // Adjusted margin for the polygon
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#000", // Black circle
              border: "2px solid #02CCFE", // Border color
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              zIndex: 1, // Ensure circle stays on top
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "large", ml: 11, mt: 10 }}>
              <CameraAltOutlinedIcon fontSize={"large"} />
            </Typography>
          </Box>

          {/* Profile Text */}
          <Typography
            sx={{
              marginTop: "20px", // Adjust spacing
              color: "#FFFFFF",
              fontWeight: "semibold",
              fontSize: "1.2rem",
            }}
          >
            XYZ ABC GHI
          </Typography>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.7)", // Light gray text
              fontSize: "1rem",
            }}
          >
            abcdef@gmail.com
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
                placeholder="First Name"
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
                placeholder="Last Name"
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
                placeholder="Mobile Number"
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
                placeholder="Address Line 1"
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
                placeholder="Address Line 2"
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
                placeholder="Postal Code"
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
                placeholder="State"
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
                placeholder="Area"
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
                placeholder="Country"
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
              Update Profile
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;

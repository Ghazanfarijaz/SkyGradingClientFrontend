import React from "react";
import { Grid, Button, Typography, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; // Import a Menu Icon for mobile
import CloseIcon from "@mui/icons-material/Close"; // Import a Close Icon for mobile
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Search Card", path: "/search" },
  { name: "Pricing", path: "/pricing" },
  { name: "Submit Card", path: "/submit" },
  { name: "Tracking", path: "/tracking" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const location = useLocation(); // Get the current route location
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false); // State to toggle mobile menu

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar Container */}
      <Grid
        container
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "black",
          background: {
            xs: "linear-gradient(to top, rgba(0, 0, 0, 0.9) , rgba(2, 204, 254, 0.4))",
            md: "linear-gradient(to top, rgba(0, 0, 0, 0.9) , rgba(2, 204, 254, 0.4))",
          },

          p: 2,
          zIndex: 1000,
        }}
      >
        {/* Logo Section */}
        <Grid item xs={6} md={2}>
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              alignItems: "center",
              color: "white",
            }}
          >
            <img
              src={Logo}
              alt="Sky Grading Logo"
              style={{
                width: 80, // Adjust logo size
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "rgba(242, 242, 242, 0.7)", // 70% opacity
                fontSize: "18px",
                lineHeight: 1,
              }}
            >
              Sky Grading
            </Typography>
          </Link>
        </Grid>

        {/* Desktop Navigation Links */}
        <Grid
          item
          md={8}
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on mobile, show on md+
            justifyContent: "center",
            gap: 6,
          }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              style={{
                textDecoration: "none",
                color:
                  location.pathname === link.path // Highlight active link
                    ? "#FFFFFF" // White for active link
                    : "rgba(242, 242, 242, 0.7)", // Default 70% opacity
                fontWeight: location.pathname === link.path ? "bold" : 500,
                fontSize: "20px",
                transition: "color 0.3s",
              }}
            >
              {link.name}
            </Link>
          ))}
        </Grid>

        {/* Mobile Menu Button */}
        <Grid
          item
          xs={6}
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
            top: 40,
            right: 0,
            position: "absolute",
            left: "85%", // Center it horizontally
          }} // Show only on mobile
        >
          <IconButton
            onClick={toggleMobileMenu}
            sx={{ color: "rgba(242, 242, 242, 0.7)" }}
          >
             {mobileMenuOpen ? (
      <CloseIcon sx={{ fontSize: "2.5rem" }} /> // Increase icon size
    ) : (
      <MenuIcon sx={{ fontSize: "2.5rem" }} /> // Increase icon size
    )}
          </IconButton>
        </Grid>

        {/* Actions Section (Desktop Only) */}
        <Grid
          item
          md={2}
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on mobile, show on md+
            alignItems: "center",
            gap: 2,
          }}
        >
          <Link to={"/login"}>
            <Button
              variant="text"
              sx={{
                color: "rgba(242, 242, 242, 0.7)",
                fontWeight: "medium",
                fontSize: "20px",
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link to={"/signup"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "black",
                fontWeight: "bold",
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "20px",
              }}
            >
              Join Now
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <Grid
          container
          direction="column"
          sx={{
            position: "fixed",
            top: "0",
            left: 0,
            right: 0,
            backgroundColor: "black",
            zIndex: 999,
            p: 17,
            gap: 2,
          }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={toggleMobileMenu}
              style={{
                textDecoration: "none",
                color:
                  location.pathname === link.path
                    ? "#FFFFFF"
                    : "rgba(242, 242, 242, 0.7)",
                fontWeight: location.pathname === link.path ? "bold" : 500,
                fontSize: "18px",
                textAlign: "center",
                padding: "10px 0",
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to={"/login"} onClick={toggleMobileMenu}>
            <Button
              variant="text"
              sx={{
                color: "rgba(242, 242, 242, 0.7)",
                fontWeight: "medium",
                fontSize: "16px",
                width: "100%",
                textAlign: "center",
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link to={"/signup"} onClick={toggleMobileMenu}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "black",
                fontWeight: "bold",
                borderRadius: "12px",
                textTransform: "none",
                width: "100%",
              }}
            >
              Join Now
            </Button>
          </Link>
        </Grid>
      )}

      {/* Spacer for Fixed Navbar */}
      <Grid sx={{ height: "80px" }} />
    </ThemeProvider>
  );
}

export default Navbar;
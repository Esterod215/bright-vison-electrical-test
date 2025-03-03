import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        borderBottom: "1px solid #E0E0E0",
        padding: "0 20px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
          {/* Logo */}
          <Typography
            
            component={Link}
            to="/"
            sx={{
              color: "#2A77FF",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.8rem",
              typography:{xs: "h6", md: "h3"},
            }}
          >
            Bright Vision Electric
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "#555555",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                '&:hover': {
                  color: "#2A77FF",
                },
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/projects"
              sx={{
                color: "#555555",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                '&:hover': {
                  color: "#2A77FF",
                },
              }}
            >
              Projects
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: "#2A77FF",
                color: "#FFFFFF",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: "#1C5F99" },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ color: "#2A77FF", display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #E0E0E0",
            p: 2,
            position: "absolute",
            top: "64px", // Space to make room for the app bar
            left: 0,
            right: 0,
            zIndex: 9999,
          }}
        >
          <Button
            component={Link}
            to="/about"
            sx={{
              color: "#555555",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1.2rem",
              padding: "10px 0",
              width: "100%",
              '&:hover': { color: "#2A77FF" },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/projects"
            sx={{
              color: "#555555",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1.2rem",
              padding: "10px 0",
              width: "100%",
              '&:hover': { color: "#2A77FF" },
            }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: "#2A77FF",
              color: "#FFFFFF",
              fontWeight: "bold",
              width: "100%",
              py: 1.5,
              mt: 2,
              '&:hover': { backgroundColor: "#1C5F99" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;

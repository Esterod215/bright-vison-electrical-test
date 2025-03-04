import { useState } from "react";
import { ArrowForward, Bolt, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";

import worker from "../assets/worker.jpeg";
import sephora from "../assets/seophora.jpeg";
import tumbles from "../assets/tumbles-22.jpeg";
import tesla from "../assets/tesla.jpeg";
import heroBg from "../assets/hero-bg.jpg";
import van from "../assets/van.jpeg";

const Home = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "95vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${heroBg}) center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: 3,
          animation: "fadeIn 2s ease-out",
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontWeight: "bolder",
              fontSize: { xs: "2.5rem", md: "4rem" },
              textTransform: "uppercase",
              letterSpacing: "3px",
              position: "relative",
              animation: "electricGlow 1.8s infinite alternate",
              "@keyframes electricGlow": {
                "0%": { textShadow: "0 0 5px #2A77FF, 0 0 10px #2A77FF" },
                "100%": { textShadow: "0 0 20px #2A77FF, 0 0 40px #2A77FF" },
              },
            }}
          >
            Powering Your Future
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ECECEC",
              py: 2,
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
              animation: "fadeIn 2.5s ease-out",
            }}
          >
            Serving Las Vegas and beyond with top-tier electrical solutions for
            residential and commercial clients.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              background: "linear-gradient(135deg, #2A77FF 0%, #1C5F99 100%)",
              color: "#FFFFFF",
              fontWeight: 600,
              px: 5,
              py: 2,
              textTransform: "uppercase",
              boxShadow: "0 10px 25px rgba(42,119,255,0.6)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              animation: "electricPulse 2s infinite alternate",
              "@keyframes electricPulse": {
                "0%": { boxShadow: "0 0 10px rgba(42,119,255,0.8)" },
                "100%": { boxShadow: "0 0 25px rgba(42,119,255,1)" },
              },
              "&:hover": {
                background: "linear-gradient(135deg, #1C5F99 0%, #2A77FF 100%)",
                transform: "scale(1.05)",
                boxShadow: "0 12px 30px rgba(42,119,255,0.8)",
              },
            }}
            onClick={handleOpenForm}
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Metrics Section */}
      <Box
        sx={{
          py: 12,
          backgroundColor: "offwhite",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="center">
            {[
              {
                value: "20+",
                label: "Years of Experience",
              },
              {
                value: "100%",
                label: "Approval Rating",
              },
              {
                value: "Multi-State",
                label: "Service Coverage",
              },
            ].map((metric, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "12px",
                    boxShadow: "0 6px 18px rgba(42, 119, 255, 0.2)",
                    backgroundColor: "#F8F8F8",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 24px rgba(42, 119, 255, 0.3)",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#2A77FF",
                      mb: 1,
                    }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#555555",
                    }}
                  >
                    {metric.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Us Form (Dialog) */}
      <Dialog
        keepMounted={false}
        open={openForm}
        onClose={handleCloseForm}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent
          sx={{
            p: 4,
            position: "relative",
            backgroundColor: "#F8F8F8",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(42, 119, 255, 0.3)",
          }}
        >
          <IconButton
            onClick={handleCloseForm}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#2A77FF",
            }}
          >
            <Close />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Bolt sx={{ fontSize: 60, color: "#2A77FF" }} />
          </Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#333333",
              mb: 2,
            }}
          >
            Let's Power Your Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "#555555", mb: 4 }}
          >
            Fill out the form below and we'll get back to you with a free quote
            for your next project.
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              autoFocus
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField label="Email Address" variant="outlined" fullWidth />
            <TextField label="Phone Number" variant="outlined" fullWidth />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
            />
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #2A77FF 0%, #1C5F99 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                textTransform: "uppercase",
                boxShadow: "0 10px 20px rgba(42, 119, 255, 0.6)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 25px rgba(42, 119, 255, 0.8)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Box sx={{ py: 12, backgroundColor: "#F8F8F8", position: "relative" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#333333",
              textAlign: "center",
              mb: 6,
            }}
          >
            Who We Are
          </Typography>

          <Box
            sx={{
              width: "120px",
              height: "4px",
              background: "linear-gradient(135deg, #2A77FF 0%, #1C5F99 100%)",
              margin: "0 auto",
              borderRadius: "8px",
              mb: 6,
            }}
          />
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "#555555", lineHeight: 1.8, mb: 3 }}>
                Located in Las Vegas, Bright Vision Electric is a full-service
                electrical contractor serving residential and commercial clients
                across Nevada. Our team is committed to delivering the highest
                quality craftsmanship and customer satisfaction.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={worker}
                alt="Electrician at work"
                sx={{
                  width: "100%",
                  height: "450px",
                  borderRadius: "12px",
                  boxShadow: "0 12px 35px rgba(42, 119, 255, 0.2)",
                  objectFit: "cover",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 15px 40px rgba(42, 119, 255, 0.3)",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ my: 8 }} />

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={van}
                alt="Service Van"
                sx={{
                  width: "100%",
                  height: "450px",
                  borderRadius: "12px",
                  boxShadow: "0 12px 35px rgba(42, 119, 255, 0.2)",
                  objectFit: "cover",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 15px 40px rgba(42, 119, 255, 0.3)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "#555555", lineHeight: 1.8, mb: 3 }}>
                We pride ourselves on offering high-quality electrical services
                that cater to both residential and commercial needs.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#333333",
              textAlign: "center",
              mb: 6,
            }}
          >
            Trusted by Top Companies
          </Typography>

          <Box
            sx={{
              width: "120px",
              height: "4px",
              background: "linear-gradient(135deg, #2A77FF 0%, #1C5F99 100%)",
              margin: "0 auto",
              borderRadius: "8px",
              mb: 6,
            }}
          />
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "Sephora",
                image: sephora,
                description:
                  "Set up all electrical wiring for Sephora's new store located in Las Vegas.",
              },
              {
                name: "Tesla Centers",
                image: tesla,
                description:
                  "Installed charging stations at Tesla's new service centers in Nevada.",
              },
              {
                name: "Tumbles 22",
                image: tumbles,
                description:
                  "Provided electrical services for Tumbles 22, a local sports bar in Las Vegas.",
              },
            ].map((project) => (
              <Grid item xs={12} md={4} key={project.name}>
                <Card
                  sx={{
                    boxShadow: "0 4px 12px rgba(42, 119, 255, 0.3)",
                    transition: "0.3s",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 18px rgba(42, 119, 255, 0.5)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.name}
                    sx={{
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{ color: "#2A77FF", fontWeight: "bold" }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#777777", mt: 1 }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="text"
            sx={{ color: "#2A77FF", mt: 4 }}
            endIcon={<ArrowForward />}
            onClick={handleOpenForm}
          >
            Work With Us
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;

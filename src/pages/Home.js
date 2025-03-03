import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

import worker from "../assets/worker.jpeg";
import sephora from "../assets/seophora.jpeg";
import tumbles from "../assets/tumbles-22.jpeg";
import tesla from "../assets/tesla.jpeg";
import heroBg from "../assets/hero-bg.jpg";
import van from "../assets/van.jpeg";

const Home = () => {
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
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      <Box sx={{ py: 12, backgroundColor: "#F8F8F8", position: "relative" }}>
        {/* Decorative Blue Shapes */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "120px",
            height: "120px",
            backgroundColor: "#2A77FF",
            borderRadius: "50%",
            opacity: 0.15,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            right: "10%",
            width: "100px",
            height: "100px",
            backgroundColor: "#2A77FF",
            borderRadius: "50%",
            opacity: 0.2,
            zIndex: -1,
          }}
        />

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

          {/* Custom Underline */}
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
            {/* Left Side - Text */}
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "#555555", lineHeight: 1.8, mb: 3 }}>
                Located in Las Vegas, Bright Vision Electric is a full-service
                electrical contractor serving residential and commercial clients
                across Nevada. Our team is committed to delivering the highest
                quality craftsmanship and customer satisfaction.
              </Typography>
              <Typography sx={{ color: "#555555", lineHeight: 1.8, mb: 3 }}>
                We travel directly to your location, offering fast and efficient
                on-site services to meet your electrical needs, ensuring
                reliability and professionalism at every step.
              </Typography>
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={worker}
                alt="Electrician at work"
                sx={{
                  width: "100%",
                  height: "450px", // Adjusted height
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

          {/* Spacer */}
          <Box sx={{ my: 8 }} />

          <Grid container spacing={6}>
            {/* Left Side - Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={van}
                alt="Service Van"
                sx={{
                  width: "100%",
                  height: "450px", // Adjusted height
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

            {/* Right Side - Text */}
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "#555555", lineHeight: 1.8, mb: 3 }}>
                We pride ourselves on offering high-quality electrical services
                that cater to both residential and commercial needs. From wiring
                to installations, we guarantee precise and efficient work every
                time.
              </Typography>
              <Typography sx={{ color: "#555555", lineHeight: 1.8 }}>
                Our experienced team is equipped to handle all electrical tasks,
                big or small, and we ensure the job is completed on time and on
                budget. We’re just a phone call away.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects Section */}
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
            Featured Projects
          </Typography>

          {/* Custom Underline */}
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
          >
            Work With Us
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;

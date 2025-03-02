import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";

import worker from "../assets/worker.jpeg";
import crunch from "../assets/crunch.jpeg";
import carwash from "../assets/car-wash.jpeg";
import sephora from "../assets/seophora.jpeg";
import tumbles from "../assets/tumbles-22.jpeg";
import tesla from "../assets/tesla.jpeg";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 2, height: "70vh" }}>
        {/* Light background */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          sx={{ gap: 4, height: "100%" }}
        >
          <Box flex={1}>
            <Typography
              variant="h1"
              sx={{ color: "#0D1B2A", fontWeight: "bolder", fontSize: "3rem" }}
            >
              Bright Vision Electric
            </Typography>
            <Typography
              py={2}
              lineHeight={1.5}
              variant="subtitle1"
              sx={{ color: "#334E68", fontSize: "1.2rem" }}
            >
              Located in Las Vegas, Nevada, Bright Vision Electric is a
              full-service electrical contractor serving residential and
              commercial clients in Vegas and surrounding states.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#FFB400",
                color: "#0D1B2A",
                fontWeight: 600,
                px: 4,
                py: 2,
                "&:hover": { backgroundColor: "#FFA500" },
              }}
            >
              Contact Us
            </Button>
          </Box>
          {/* Replaced the yellow circle with the worker image */}
          <Box
            component="img"
            src={worker}
            alt="Electrician at work"
            sx={{
              height: 300,
              width: 300,
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>

      {/* Metrics Overlay */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: 8,
          background: "linear-gradient(180deg, #ffffff 0%, #0D1B2A 100%)",
        }}
      >
        <Grid container spacing={4} maxWidth="lg">
          {[
            { label: "Projects Completed", value: "1000+" },
            { label: "Years of Experience", value: "20+" },
            { label: "Service Rating", value: "100%" },
          ].map((metric, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  textAlign: "center",
                  p: 3,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ color: "#FFB400", fontWeight: "bold" }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#334E68" }}>
                    {metric.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Projects Section */}
      <Box sx={{ bgcolor: "#0D1B2A", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 4, fontWeight: "bold", color: "white" }}
          >
            Projects
          </Typography>
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
            ].map((project, index) => (
              <Grid item xs={12} md={4} key={project.name}>
                <Card
                  sx={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.name}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{ color: "#0D1B2A", fontWeight: "bold" }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
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
            sx={{ color: "#FFB400" }}
            endIcon={<ArrowForward />}
          >
            See All Projects
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;

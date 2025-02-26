import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import HeroSection from "../components/HeroSection"; // Import HeroSection
import mission from "../assets/mission.jpg";
import story from "../assets/story.jpg";
import clientCentric from "../assets/client-centric.jpg";
import innovation from "../assets/innovation.jpg";
import integrity from "../assets/integrity.jpg";
import collaboration from "../assets/collaboration.jpg";
import offshoreStrategy from "../assets/offshore-strategy.jpg";
import softwareDev from "../assets/software-development.jpg";
import automation from "../assets/automation.jpg";
import analytics from "../assets/analytics.jpg";
import consulting from "../assets/consulting.jpg";
import fullCycleIT from "../assets/full-cycle-it.jpg";
import empoweringBusinessImage from "../assets/empowering-business.jpg";
import { COMPANY_NAME } from "../constants"; // Import company name
import { Helmet } from "react-helmet-async";

const coreValues = [
  {
    title: "Client-Centric Approach",
    text: "Tailoring solutions to business goals.",
    image: clientCentric,
  },
  {
    title: "Innovation & Excellence",
    text: "Leveraging cutting-edge technology.",
    image: innovation,
  },
  {
    title: "Integrity & Transparency",
    text: "Built on honesty, trust, and ethics.",
    image: integrity,
  },
  {
    title: "Collaboration & Growth",
    text: "Fostering long-term partnerships.",
    image: collaboration,
  },
];

const services = [
  {
    title: "Offshore Strategy & Planning",
    text: "Cost-efficiency and scalability.",
    image: offshoreStrategy,
  },
  {
    title: "Software Development & Testing",
    text: "High-quality custom solutions.",
    image: softwareDev,
  },
  {
    title: "Automation & Support",
    text: "Efficiency through automation.",
    image: automation,
  },
  {
    title: "Analytics & Virtual Staffing",
    text: "Data-driven insights and support.",
    image: analytics,
  },
  {
    title: "Consulting Services",
    text: "Expert guidance for operational excellence.",
    image: consulting,
  },
  {
    title: "Full-Cycle IT Services",
    text: "From development to maintenance.",
    image: fullCycleIT,
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - {COMPANY_NAME}</title>
        <meta
          name="description"
          content={`Learn more about ${COMPANY_NAME}, our mission, values, and commitment to delivering innovative technology solutions.`}
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Empowering Businesses with Strategic Offshore Solutions"
        subtitle="We specialize in helping businesses optimize their operations and
          maximize profitability through strategic offshore solutions. Our
          commitment to excellence, innovation, and client success drives
          everything we do."
        backgroundImage={empoweringBusinessImage} // Custom background
      />

      <Container sx={{ py: 4 }}>
        {/* About Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={mission} alt="Our Mission & Vision" width="100%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Mission & Vision
            </Typography>
            <Typography variant="body1" fontSize="18px" paragraph>
              At {COMPANY_NAME}, we specialize in helping businesses optimize
              their operations and maximize profitability through strategic
              offshore solutions. Our commitment to excellence, innovation, and
              client success drives everything we do.
            </Typography>
          </Grid>
        </Grid>

        {/* Core Values Section */}
        <Box my={6} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Core Values
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    boxShadow:
                      "0 .1875rem .4375rem 0 rgba(0,0,0,.13), 0 .0625rem .125rem  0 rgba(0,0,0,.11)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 0,
                    borderRadius: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={value.image}
                    alt={value.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {value.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Story Section */}
        <Box my={6}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1" fontSize="18px" paragraph>
                {COMPANY_NAME} was founded with a vision to bridge the gap
                between businesses and high-quality offshore services. With
                years of industry experience, we have successfully built a
                robust ecosystem that supports companies in achieving seamless
                operations and sustainable growth.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={story} alt="Our Story" width="100%" />
            </Grid>
          </Grid>
        </Box>

        {/* Services Section */}
        <Box my={6} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow:
                      "0 .1875rem .4375rem 0 rgba(0,0,0,.13), 0 .0625rem .125rem  0 rgba(0,0,0,.11)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 0,
                    borderRadius: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box my={6} textAlign="center" bgcolor="#f5f5f5" p={4} borderRadius={2}>
          <Typography variant="h4" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" fontSize="18px">
            Let’s build something great together. Whether you need a strategic
            offshore solution, expert consulting, or IT support, {COMPANY_NAME}{" "}
            is here to help.
          </Typography>
          <Typography variant="h6" mt={2} fontWeight="bold">
            Contact us today to discuss your business needs.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;

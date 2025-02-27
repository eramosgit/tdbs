import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import analytics from "../assets/analytics.webp";
import automation from "../assets/automation.webp";
import consulting from "../assets/consulting.webp";
import fullCycleIT from "../assets/full-cycle-it.webp";
import offshoreStrategy from "../assets/offshore-strategy.webp";
import servicesImage from "../assets/services.webp";
import softwareDev from "../assets/software-development.webp";
import HeroSection from "../components/HeroSection";
import { COMPANY_NAME } from "../constants"; // Import company name

const services = [
  {
    title: "Offshore Strategy and Planning",
    description:
      "Craft and implement a clear, actionable strategy that aligns with your long-term business goals, ensuring sustainable growth and success in the global market.",
    image: offshoreStrategy,
  },
  {
    title: "Software Development and Testing Services",
    description:
      "Design, develop, and rigorously test high-quality, scalable software solutions that meet your unique business needs, ensuring seamless functionality and optimal performance across all platforms.",
    image: softwareDev,
  },
  {
    title: "Automation and Support Maintenance",
    description:
      "Empowering uninterrupted operations. We provide reliable technical support and maintenance services to keep your business running smoothly and efficiently.",
    image: automation,
  },
  {
    title: "Analytics, Presentations and Virtual Staffing",
    description:
      "Build team outside your comfort zone. Be creative and explore delegation of functions such as reporting and analytics, pharmaceutical representatives, virtual assistants, HR and Finance shared services.",
    image: analytics,
  },
  {
    title: "Consulting Services",
    description:
      "Expert guidance at every step. Leverage our expertise to navigate challenges, optimize processes, and make informed decisions for your offshore operations.",
    image: consulting,
  },
  {
    title: "Full-Cycle IT Services",
    description:
      "Comprehensive technology solutions. From development to deployment, we manage the entire software lifecycle, ensuring smooth delivery, integration, and operational success.",
    image: fullCycleIT,
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - {COMPANY_NAME}</title>
        <meta
          name="description"
          content={`${COMPANY_NAME} provides expert offshore strategy, software development, automation, analytics, and IT consulting services to help businesses thrive.`}
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Further Maximize Margins Through Provincial Offshoring!!"
        subtitle="Explore our comprehensive services designed to drive efficiency, innovation, and success."
        backgroundImage={servicesImage}
      />

      {/* Services Section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow:
                    "0 .1875rem .4375rem 0 rgba(0,0,0,.13), 0 .0625rem .125rem  0 rgba(0,0,0,.11)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
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
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;

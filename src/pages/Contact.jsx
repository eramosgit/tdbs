import { LocationOn, Phone, Email } from "@mui/icons-material";
import { Box, Typography, Container, Link, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";

import officeBuildingMapImage from "../assets/office-building-map.webp";
import officeBuildingImage from "../assets/office-building.webp";
import HeroSection from "../components/HeroSection";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL } from "../constants";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - {COMPANY_NAME}</title>
        <meta
          name="description"
          content={`Get in touch with ${COMPANY_NAME} for inquiries and business solutions.`}
        />
      </Helmet>
      {/* Hero Section */}
      <HeroSection
        backgroundImage={officeBuildingImage}
        backgroundPosition="top center"
      />

      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" fontWeight="bold">
                Office Building:
              </Typography>
              <Typography variant="body1">
                The Dormitory by The Oriental
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Address:
              </Typography>
              <Typography variant="body1">
                Elliptical Road, Freeport Area of Bataan Compound, Brgy. Malaya,
                Mariveles, Philippines, 2106
              </Typography>
              <Link
                href="https://maps.app.goo.gl/TmG5YaZ7w344d6FFA"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                  color: "primary.main",
                  textDecoration: "none",
                }}
              >
                <LocationOn sx={{ mr: 1 }} />
                View on Google Maps
              </Link>
            </Box>

            <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
              <Phone sx={{ mr: 1 }} />
              <Link
                href={`tel:${COMPANY_PHONE}`}
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {COMPANY_PHONE}
              </Link>
            </Box>

            <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
              <Email sx={{ mr: 1 }} />
              <Link
                href={`mailto:${COMPANY_EMAIL}`}
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {COMPANY_EMAIL}
              </Link>
            </Box>
          </Grid>

          {/* Embedded Google Map with Border */}
          <Grid item xs={12} md={6}>
            {/* Google Map iframe (Hidden on mobile, shown on larger screens) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" }, // Hide on mobile
                border: "1px solid #ccc", // Add border for separation
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.462367032008!2d120.49389963788161!3d14.452016488694326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339618c29c71cdc9%3A0xca7eb3e80c84c471!2sDormitory%20By%20The%20Oriental!5e0!3m2!1sen!2sph!4v1740505042673!5m2!1sen!2sph"
                width="600px"
                height="450px"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>

            {/* Static Map Image (Shown only on mobile) */}
            <Box
              sx={{
                display: { xs: "block", md: "none" }, // Show only on mobile
                textAlign: "center",
                mt: 2,
              }}
            >
              <Link
                href="https://maps.app.goo.gl/TmG5YaZ7w344d6FFA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={officeBuildingMapImage}
                  alt="Office Location Map"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    border: "1px solid #ccc",
                  }} // Border for consistency
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;

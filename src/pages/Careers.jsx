import BuildIcon from "@mui/icons-material/Build";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import careersImage from "../assets/careers.webp";
import HeroSection from "../components/HeroSection";
import { COMPANY_NAME, COMPANY_EMAIL } from "../constants";

const Careers = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}job_positions.csv`
        );
        if (!response.ok) throw new Error("Failed to load job positions.");
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => setJobListings(result.data),
          error: (error) => console.error("CSV Parsing Error:", error.message),
        });
      } catch (error) {
        console.error("Error fetching job positions:", error.message);
      }
    };

    fetchCSV();
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers - {COMPANY_NAME}</title>
        <meta
          name="description"
          content={`Explore exciting career opportunities at ${COMPANY_NAME}. Join our team and grow your career in a dynamic and innovative environment.`}
        />
      </Helmet>

      <HeroSection
        backgroundImage={careersImage}
        title="Join Our Team"
        subtitle="Find the perfect role and grow your career with us."
      />

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Open Positions
        </Typography>
        <Grid container spacing={4}>
          {jobListings.map((job, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                  boxShadow:
                    "0 .2rem .5rem rgba(0, 0, 0, 0.15), 0 .1rem .2rem rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  height: "460px",
                }}
              >
                {/* Job Title with Full-Width Background */}
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    width: "100%",
                    padding: "18px",
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {job.Title}
                </Box>

                {/* Card Content */}
                <CardContent sx={{ flexGrow: 1, overflowY: "auto", p: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                      color: "primary.main",
                      mb: 1.5, // Adjust spacing
                    }}
                  >
                    <LocationOnIcon
                      sx={{ fontSize: "20px", color: "primary.main", mr: 1 }}
                    />
                    {job.Location || "Location not specified"}
                  </Typography>

                  {job.Requirements && job.Requirements.trim() && (
                    <>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        mt={2}
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <ListAltIcon sx={{ color: "primary.main" }} />{" "}
                        Requirements
                      </Typography>
                      <ul style={{ paddingLeft: "20px", marginTop: "6px" }}>
                        {job.Requirements.split(";").map((requirement, i) => (
                          <li key={i}>
                            <Typography variant="body2">
                              {requirement.trim()}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {job.Roles && job.Roles.trim() && (
                    <>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        mt={2}
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <WorkIcon sx={{ color: "primary.main" }} /> Roles &
                        Responsibilities
                      </Typography>
                      <ul style={{ paddingLeft: "20px", marginTop: "6px" }}>
                        {job.Roles.split(";").map((role, i) => (
                          <li key={i}>
                            <Typography variant="body2">
                              {role.trim()}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {job.Skills && job.Skills.trim() && (
                    <>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        mt={2}
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <BuildIcon sx={{ color: "primary.main" }} /> Skills
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          mt: 1,
                        }}
                      >
                        {job.Skills.split(";").map((skill, i) => (
                          <Box
                            key={i}
                            sx={{
                              backgroundColor: "#e0e0e0",
                              padding: "6px 12px",
                              fontSize: "14px",
                              borderRadius: "4px",
                            }}
                          >
                            {skill.trim()}
                          </Box>
                        ))}
                      </Box>
                    </>
                  )}
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                    }}
                    href={`mailto:${COMPANY_EMAIL}?subject=Job Application for ${encodeURIComponent(
                      job.Title
                    )}`}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Careers;

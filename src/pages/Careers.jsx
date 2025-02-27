import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import HeroSection from "../components/HeroSection";
import careersImage from "../assets/careers.jpg";
import WorkIcon from "@mui/icons-material/Work";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BuildIcon from "@mui/icons-material/Build";
import Papa from "papaparse";
import { Helmet } from "react-helmet-async";
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
        <Grid container spacing={3}>
          {jobListings.map((job, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 0,
                  border: "1px solid #ddd",
                  padding: 2,
                  boxShadow:
                    "0 .1875rem .4375rem 0 rgba(0,0,0,.13), 0 .0625rem .125rem  0 rgba(0,0,0,.11)",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  height: "450px",
                }}
              >
                <CardContent sx={{ flexGrow: 1, overflowY: "auto" }}>
                  <Typography variant="h5" fontWeight="bold">
                    {job.Title}
                  </Typography>

                  {job.Requirements && job.Requirements.trim() && (
                    <>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        mt={2}
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <ListAltIcon sx={{ color: "#1976d2" }} /> Requirements
                      </Typography>
                      <ul>
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
                        <WorkIcon sx={{ color: "#1976d2" }} /> Roles &
                        Responsibilities
                      </Typography>
                      <ul>
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
                        <BuildIcon sx={{ color: "#1976d2" }} /> Skills
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
                    // sx={{ width: "100%" }}
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

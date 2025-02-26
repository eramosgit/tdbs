import { Box, Typography, Container } from "@mui/material";

const HeroSection = ({ title, subtitle, backgroundImage, backgroundPosition = "center" }) => {
  const hasContent = title?.trim() || subtitle?.trim(); // Check if there's content

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "560px",
        display: "flex",
        alignItems: "center",
        justifyContent: hasContent ? "center" : "flex-start", // Prevents centering empty content
        textAlign: "center",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {hasContent && (
        <Container sx={{ padding: "24px", backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
          {title && (
            <Typography variant="h3" fontWeight="bold">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="h6" mt={2}>
              {subtitle}
            </Typography>
          )}
        </Container>
      )}
    </Box>
  );
};

export default HeroSection;

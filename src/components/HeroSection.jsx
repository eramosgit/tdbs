import { Box, Typography, Container } from "@mui/material";
import PropTypes from "prop-types";

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  backgroundPosition = "center",
}) => {
  const hasContent = title?.trim() || subtitle?.trim();
  
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "560px",
        display: "flex",
        alignItems: "center",
        justifyContent: hasContent ? "center" : "flex-start",
        textAlign: "center",
        position: "relative",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Only add overlay if there is content */}
      {hasContent && (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
      )}

      {hasContent && (
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            padding: "32px",
            maxWidth: "800px",
          }}
        >
          {title && (
            <Typography variant="h3" fontWeight="bold" sx={{ color: "white" }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="h6" mt={2} sx={{ color: "white" }}>
              {subtitle}
            </Typography>
          )}
        </Container>
      )}
    </Box>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
};

export default HeroSection;

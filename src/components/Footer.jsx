import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material";
import { COMPANY_NAME } from "../constants";
import SvgIcon from "@mui/material/SvgIcon";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const XIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M17.9 2H21l-7.4 8.6L22 22h-4l-5.8-7.2L6.2 22H3l8-9.3L2 2h4l5.5 6.7L17.9 2z" />
  </SvgIcon>
);

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  return (
    <Box
      sx={{
        backgroundColor: "rgb(242,242,242)",
        color: "rgb(97, 97, 97)",
        padding: "10px 0",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Stack on mobile
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: isMobile ? "center" : "left",
            gap: isMobile ? 1 : 0, // Add spacing in mobile view
          }}
        >
          {/* Left: Copyright & Links */}
          <Stack
            direction={isMobile ? "column" : "row"} // Stack vertically on mobile
            spacing={2}
            alignItems={isMobile ? "center" : "center"}
          >
            <Typography variant="caption">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </Typography>
            <Link
              component="button"
              onClick={() => navigate("/privacy")}
              variant="caption"
              color="inherit"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Privacy Policy
            </Link>
            <Link
              component="button"
              onClick={() => navigate("/terms")}
              variant="caption"
              color="inherit"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Terms of Use
            </Link>
          </Stack>

          {/* Right: Social Media Icons */}
          <Stack direction="row" spacing={1} justifyContent={isMobile ? "center" : "flex-end"}>
            <IconButton
              href="https://facebook.com/YOUR_PAGE"
              target="_blank"
              color="inherit"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com/YOUR_PAGE"
              target="_blank"
              color="inherit"
              aria-label="Twitter"
            >
              <XIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/YOUR_PAGE"
              target="_blank"
              color="inherit"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

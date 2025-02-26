import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link,
  Container,
} from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material";
import { COMPANY_NAME } from "../constants";
import SvgIcon from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";

const XIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M17.9 2H21l-7.4 8.6L22 22h-4l-5.8-7.2L6.2 22H3l8-9.3L2 2h4l5.5 6.7L17.9 2z" />
  </SvgIcon>
);

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "rgb(242,242,242)",
        color: "rgb(97, 97, 97)",
        padding: "10px 0", // Removed left/right padding for Container usage
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left: Copyright & Links */}
          <Stack direction="row" spacing={2} alignItems="center">
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
          <Stack direction="row" spacing={1}>
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

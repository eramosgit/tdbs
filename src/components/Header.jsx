import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import ThriveLogo from "../assets/thrive-dynamic-solutions-icon.webp";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          height: "80px",
          padding: "0",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: "80px !important",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Company Logo */}
            <Link to="/">
              <img
                src={ThriveLogo}
                alt="Thrive Dynamic Solutions"
                style={{ height: "50px", width: "auto" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <List
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "10px",
              }}
            >
              {navItems.map((item) => (
                <ListItem
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    fontSize:
                      location.pathname === item.path ? "18px" : "0.875rem",
                    color: "rgb(38,38,38)",
                    whiteSpace: "nowrap",
                    padding: "0 8px",
                    margin: "0",
                    textDecoration: "none",
                    fontWeight:
                      location.pathname === item.path ? "600" : "normal",
                    "&:hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "5px",
                      textDecorationThickness: "2px",
                    },
                  }}
                >
                  {item.label}
                </ListItem>
              ))}
            </List>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", md: "none" }, padding: "4px" }}
            >
              <MenuIcon sx={{ color: "rgb(38,38,38)", fontSize: "24px" }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                "&:hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  textDecorationThickness: "2px",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? "bold" : "normal",
                  color: "rgb(38,38,38)",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

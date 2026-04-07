import { Box, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Logo from "../assets/images/logoMod.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Practice Areas", path: "/practice-areas" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [scrolled, setScrolled] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sideBar ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideBar]);

  // Close sidebar on route change
  useEffect(() => {
    setSideBar(false);
  }, [currentPath]);

  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <>
      {/* ===================== FIXED HEADER ===================== */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          transition: "background 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "#131A34" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {/* ── Top Info Bar (desktop only, hides on scroll) ── */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            overflow: "hidden",
            maxHeight: scrolled ? "0px" : "45px",
            opacity: scrolled ? 0 : 1,
            transition: "max-height 0.4s ease, opacity 0.3s ease",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "auto",
              padding: "0 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "42px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <LocationOnIcon sx={{ color: "#E0A422", fontSize: "16px" }} />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  No. 13, Parakou Street, Wuse 2, Abuja-FCT
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <EmailIcon sx={{ color: "#E0A422", fontSize: "16px" }} />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  info@lexadepts.com
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CallIcon sx={{ color: "#E0A422", fontSize: "16px" }} />
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: '"Source Sans Pro", sans-serif',
                }}
              >
                +234 810 702 0108
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ── Main Nav Bar ── */}
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "auto",
            padding: "0 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "72px",
          }}
        >
          {/* Logo */}
          <RouterLink to="/">
            <img
              src={Logo}
              alt="Lex Adepts"
              style={{ height: "36px", display: "block" }}
            />
          </RouterLink>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "36px",
            }}
          >
            {navLinks.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    textTransform: "uppercase",
                    color: isActive(link.path)
                      ? "#E0A422"
                      : "rgba(255,255,255,0.8)",
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#E0A422",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: isActive(link.path) ? "100%" : "0%",
                      height: "2px",
                      background: "#E0A422",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              </RouterLink>
            ))}
          </Box>

          {/* Desktop CTA Button */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <RouterLink to="/contact-us" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  background: "#E0A422",
                  color: "#131A34",
                  padding: "10px 28px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: '"Source Sans Pro", sans-serif',
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#c48d1a",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 15px rgba(224,164,34,0.3)",
                  },
                }}
              >
                Get Started
              </Box>
            </RouterLink>
          </Box>

          {/* Mobile Hamburger */}
          <Box
            onClick={() => setSideBar(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              background: "#E0A422",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              "&:hover": { background: "#c48d1a" },
            }}
          >
            <MenuIcon sx={{ color: "#131A34", fontSize: "22px" }} />
          </Box>
        </Box>
      </Box>

      {/* ===================== MOBILE SIDEBAR ===================== */}

      {/* Backdrop overlay */}
      <Box
        onClick={() => setSideBar(false)}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          opacity: sideBar ? 1 : 0,
          visibility: sideBar ? "visible" : "hidden",
          transition: "opacity 0.4s ease, visibility 0.4s ease",
        }}
      />

      {/* Sidebar panel */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "300px",
          maxWidth: "85vw",
          height: "100vh",
          background: "#131A34",
          zIndex: 10001,
          transform: sideBar ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          boxShadow: sideBar ? "-10px 0 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <RouterLink to="/" onClick={() => setSideBar(false)}>
            <img src={Logo} alt="Lex Adepts" style={{ height: "32px" }} />
          </RouterLink>
          <Box
            onClick={() => setSideBar(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              "&:hover": { background: "rgba(255,255,255,0.1)" },
            }}
          >
            <CloseIcon
              sx={{ color: "rgba(255,255,255,0.7)", fontSize: "22px" }}
            />
          </Box>
        </Box>

        {/* Sidebar Links */}
        <Box sx={{ padding: "16px 12px", flex: 1 }}>
          {navLinks.map((link) => (
            <RouterLink
              key={link.path}
              to={link.path}
              style={{ textDecoration: "none" }}
              onClick={() => setSideBar(false)}
            >
              <Box
                sx={{
                  padding: "14px 16px",
                  borderRadius: "8px",
                  marginBottom: "4px",
                  background: isActive(link.path)
                    ? "rgba(224,164,34,0.1)"
                    : "transparent",
                  transition: "background 0.3s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: isActive(link.path)
                      ? "#E0A422"
                      : "rgba(255,255,255,0.8)",
                    fontSize: "15px",
                    fontWeight: isActive(link.path) ? 600 : 400,
                    fontFamily: '"Source Sans Pro", sans-serif',
                    letterSpacing: "0.5px",
                  }}
                >
                  {link.label}
                </Typography>
              </Box>
            </RouterLink>
          ))}
        </Box>

        {/* Sidebar CTA */}
        <Box sx={{ padding: "16px 24px 32px" }}>
          <RouterLink
            to="/contact-us"
            style={{ textDecoration: "none" }}
            onClick={() => setSideBar(false)}
          >
            <Box
              sx={{
                background: "#E0A422",
                color: "#131A34",
                padding: "14px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: '"Source Sans Pro", sans-serif',
                textAlign: "center",
                letterSpacing: "0.5px",
                transition: "background 0.3s ease",
                "&:hover": { background: "#c48d1a" },
              }}
            >
              Get Started
            </Box>
          </RouterLink>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactIntro from "../assets/images/contactIntro.png";

const heroFade = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Error = ({ embedded = false }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const content = (
    <>
      {/* ── Hero Banner ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "45vh", md: "50vh" },
          minHeight: "320px",
          backgroundImage: `url(${ContactIntro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(19,26,52,0.65) 0%, rgba(19,26,52,0.5) 50%, rgba(19,26,52,0.75) 100%)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            animation: `${heroFade} 0.8s ease-out`,
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#E0A422",
              marginBottom: "8px",
            }}
          >
            Lex Adepts
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Page Not Found
          </Typography>

          {/* Breadcrumbs */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontSize: "14px",
              fontFamily: '"Source Sans Pro", sans-serif',
            }}
          >
            <RouterLink
              to="/"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#E0A422")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.7)")
              }
            >
              Home
            </RouterLink>
            <NavigateNextIcon
              sx={{ fontSize: "18px", color: "rgba(255,255,255,0.4)" }}
            />
            <Typography
              component="span"
              sx={{
                color: "#E0A422",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
              }}
            >
              404
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Body Section ── */}
      <Box
        sx={{
          maxWidth: "600px",
          margin: "auto",
          padding: { xs: "60px 5%", md: "100px 40px" },
          textAlign: "center",
        }}
      >
        {/* Large 404 */}
        <Typography
          sx={{
            fontSize: { xs: "100px", md: "140px" },
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 800,
            lineHeight: 1,
            background: "linear-gradient(135deg, #E0A422 0%, #c48d1a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
            animation: `${float} 3s ease-in-out infinite`,
          }}
        >
          404
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "22px", md: "28px" },
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: "12px",
          }}
        >
          Oops! Page not found
        </Typography>

        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            lineHeight: 1.8,
            color: "#777",
            marginBottom: "36px",
          }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let us help you find your way
          back.
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#E0A422",
                color: "#131A34",
                borderRadius: "8px",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: '"Source Sans Pro", sans-serif',
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#c48d1a",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 20px rgba(224,164,34,0.3)",
                },
              }}
            >
              <HomeIcon sx={{ fontSize: "18px" }} />
              Back to Home
            </Box>
          </RouterLink>
          <RouterLink to="/contact-us" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "2px solid rgba(224,164,34,0.5)",
                color: "#E0A422",
                borderRadius: "8px",
                padding: "10px 28px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: '"Source Sans Pro", sans-serif',
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#E0A422",
                  background: "rgba(224,164,34,0.06)",
                },
              }}
            >
              Contact Us
              <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
            </Box>
          </RouterLink>
        </Box>

        {/* Helpful links */}
        <Box sx={{ marginTop: "48px" }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#ccc",
              marginBottom: "16px",
            }}
          >
            Or try these pages
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "About Us", path: "/about-us" },
              { label: "Practice Areas", path: "/practice-areas" },
              { label: "Our Team", path: "/team" },
            ].map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 500,
                    color: "#999",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#E0A422" },
                  }}
                >
                  {link.label}
                </Typography>
              </RouterLink>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );

  /* If embedded (e.g. inside TeamMember when member not found),
     skip Navbar/Footer to avoid duplication */
  if (embedded) {
    return content;
  }

  return (
    <Box>
      <Navbar />
      {content}
      <Footer />
    </Box>
  );
};

export default Error;

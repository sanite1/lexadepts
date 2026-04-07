import { Box, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCards from "../components/Team/TeamCards";
import MissionImg from "../assets/images/mission00.jpg";
import TeamIntro from "../assets/images/TeamIntro2.png";

const fadeIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const heroFade = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const AnimatedSection = ({ children, delay = "0s" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        animation: inView
          ? `${fadeIn} 0.7s ease-out ${delay} forwards`
          : "none",
      }}
    >
      {children}
    </Box>
  );
};

const Team = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box>
      <Navbar />

      {/* ── Hero Banner ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "55vh", md: "65vh" },
          minHeight: "380px",
          backgroundImage: `url(${TeamIntro})`,
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
            The Team
          </Typography>
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
              The Team
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Team Cards Section ── */}
      <AnimatedSection>
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "auto",
            padding: { xs: "60px 5%", md: "100px 40px" },
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#E0A422",
                marginBottom: "12px",
                display: "inline-block",
                borderBottom: "2px solid #E0A422",
                paddingBottom: "4px",
              }}
            >
              Meet The Team
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "32px" },
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#1a1a2e",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Experienced professionals dedicated to your success
            </Typography>
          </Box>

          <TeamCards />
        </Box>
      </AnimatedSection>

      {/* ── Firm Statement ── */}
      <AnimatedSection>
        <Grid container sx={{ minHeight: { md: "500px" } }}>
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Box
              sx={{
                height: "100%",
                minHeight: { xs: "300px", md: "500px" },
              }}
            >
              <img
                src={MissionImg}
                alt="Our Firm"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                minHeight: { xs: "auto", md: "500px" },
                background: "#131A34",
                padding: { xs: "48px 24px", sm: "56px 40px", md: "60px 60px" },
                boxSizing: "border-box",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "26px", md: "32px" },
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "#fff",
                    marginBottom: "24px",
                    maxWidth: "400px",
                  }}
                >
                  We provide the very best at our Firm
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.65)",
                    marginBottom: "28px",
                    maxWidth: "440px",
                  }}
                >
                  At our firm, we are dedicated to delivering exceptional legal
                  services across all practice areas. Our team of experienced
                  professionals serves as trusted advisors, guiding clients
                  through complex legal and business challenges. We are
                  committed to helping you navigate every aspect of your legal
                  needs with the highest level of expertise, ensuring that you
                  achieve your objectives and receive the best possible support.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Box
                    sx={{
                      width: "32px",
                      height: "2px",
                      background: "#E0A422",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: "#E0A422",
                    }}
                  >
                    Lex Adepts Management
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </AnimatedSection>

      <Footer />
    </Box>
  );
};

export default Team;

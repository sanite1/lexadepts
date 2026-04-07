import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PracticeAreaCards from "../components/PracticeAreas/PracticeAreaCards";
import PracticeAreaImage from "../assets/images/practiceAreaIntro2.png";

const fadeIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const heroFade = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        animation: inView ? `${fadeIn} 0.7s ease-out forwards` : "none",
      }}
    >
      {children}
    </Box>
  );
};

const PracticeArea = () => {
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
          backgroundImage: `url(${PracticeAreaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Gradient overlay */}
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
            Practice Areas
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
              Practice Areas
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Intro Text ── */}
      <AnimatedSection>
        <Box
          sx={{
            maxWidth: "750px",
            margin: "auto",
            padding: { xs: "48px 5% 0", md: "72px 40px 0" },
            textAlign: "center",
          }}
        >
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
            What We Do
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "32px" },
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Areas of Expertise
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              lineHeight: 1.8,
              color: "#666",
            }}
          >
            At Lex Adepts, our team of experienced lawyers provides expert
            guidance and representation across a range of areas. We pride
            ourselves on our sector strengths which cover diverse areas of law.
          </Typography>
        </Box>
      </AnimatedSection>

      {/* ── Practice Area Cards ── */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          padding: { xs: "48px 5% 60px", md: "72px 40px 100px" },
        }}
      >
        <PracticeAreaCards />
      </Box>

      {/* ── CTA Banner ── */}
      <Box
        sx={{
          background: "#131A34",
          padding: { xs: "60px 5%", md: "80px 40px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <AnimatedSection>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Need legal assistance in any of these areas?
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 400,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.6)",
                marginBottom: "32px",
                maxWidth: "500px",
                margin: "0 auto 32px",
              }}
            >
              Our team is ready to provide expert guidance and representation
              tailored to your specific needs.
            </Typography>
            <RouterLink to="/contact-us" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#E0A422",
                  color: "#131A34",
                  borderRadius: "8px",
                  padding: "12px 28px",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: '"Source Sans Pro", sans-serif',
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#c48d1a",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 20px rgba(224,164,34,0.3)",
                  },
                }}
              >
                Get in Touch
              </Box>
            </RouterLink>
          </AnimatedSection>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default PracticeArea;

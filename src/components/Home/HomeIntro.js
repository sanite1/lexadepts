import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import homeIntro from "../../assets/images/homeIntro9.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const fadeUp = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const AnimatedBox = ({ children, delay = "0s" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        animation: inView
          ? `${fadeUp} 0.8s ease-out ${delay} forwards`
          : "none",
      }}
    >
      {children}
    </Box>
  );
};

function HomeIntro() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${homeIntro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay for depth */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(19,26,52,0.7) 0%, rgba(19,26,52,0.4) 50%, rgba(19,26,52,0.8) 100%)",
        }}
      />

      {/* Subtle vertical lines for texture */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          "& > div": {
            position: "absolute",
            top: 0,
            width: "1px",
            height: "100%",
            background: "rgba(255,255,255,0.04)",
          },
        }}
      >
        <div style={{ left: "25%" }} />
        <div style={{ left: "50%" }} />
        <div style={{ left: "75%" }} />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ maxWidth: "800px", padding: "0 24px" }}>
          {/* Gold accent line */}
          <AnimatedBox delay="0s">
            <Box
              sx={{
                width: "60px",
                height: "3px",
                background: "#E0A422",
                margin: "0 auto 32px",
              }}
            />
          </AnimatedBox>

          <AnimatedBox delay="0.15s">
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "56px" },
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Your Premier Partner for Legal and Support Solutions
            </Typography>
          </AnimatedBox>

          <AnimatedBox delay="0.3s">
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
                maxWidth: "600px",
                margin: "0 auto 36px",
              }}
            >
              Experience unparalleled legal expertise and support with our
              expert legal solutions designed to navigate complexities, manage
              client relationships, and achieve optimal outcomes with
              confidence.
            </Typography>
          </AnimatedBox>

          <AnimatedBox delay="0.45s">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <RouterLink to="/contact-us" style={{ textDecoration: "none" }}>
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
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#c48d1a",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 20px rgba(224,164,34,0.3)",
                    },
                  }}
                >
                  Get Started
                  <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                </Box>
              </RouterLink>
              <RouterLink to="/about-us" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "2px solid rgba(224,164,34,0.6)",
                    color: "#E0A422",
                    borderRadius: "8px",
                    padding: "10px 28px",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: '"Source Sans Pro", sans-serif',
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(224,164,34,0.1)",
                      borderColor: "#E0A422",
                    },
                  }}
                >
                  Learn More
                </Box>
              </RouterLink>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          color: "rgba(255,255,255,0.4)",
          animation: `${bounce} 2s infinite ease-in-out`,
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontFamily: '"Source Sans Pro", sans-serif',
          }}
        >
          Scroll
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
      </Box>
    </Box>
  );
}

export default HomeIntro;

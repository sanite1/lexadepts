import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import priority from "../../assets/images/priority2.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const fadeIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const AnimatedBox = ({ children, delay = "0s" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        animation: inView
          ? `${fadeIn} 0.8s ease-out ${delay} forwards`
          : "none",
      }}
    >
      {children}
    </Box>
  );
};

function Priority() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        padding: { xs: "80px 0", md: "120px 0" },
        backgroundImage: `url(${priority})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(19,26,52,0.65)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ maxWidth: "700px", padding: "0 24px" }}>
          <AnimatedBox>
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "32px", md: "40px" },
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              We ensure we handle each case with top level priority
            </Typography>
          </AnimatedBox>

          <AnimatedBox delay="0.15s">
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
                maxWidth: "560px",
                margin: "0 auto 32px",
              }}
            >
              At Lex Adepts, our team of experienced lawyers provides expert
              guidance and representation across range of areas, and we pride
              ourselves on our sector strengths which cover diverse areas of law
              including
            </Typography>
          </AnimatedBox>

          <AnimatedBox delay="0.3s">
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
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#c48d1a",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 20px rgba(224,164,34,0.3)",
                  },
                }}
              >
                Contact Us
                <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
              </Box>
            </RouterLink>
          </AnimatedBox>
        </Box>
      </Box>
    </Box>
  );
}

export default Priority;

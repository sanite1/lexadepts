import { Box, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceImg from "../../assets/images/newExp.jpeg";
import SmallMuhammad from "../../assets/images/smallMuhammad.png";

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
          ? `${fadeIn} 0.7s ease-out ${delay} forwards`
          : "none",
      }}
    >
      {children}
    </Box>
  );
};

const Experience = () => {
  return (
    <Grid container spacing={6} alignItems="center">
      {/* Image */}
      <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
        <AnimatedBox>
          <Box sx={{ position: "relative" }}>
            <img
              src={ExperienceImg}
              alt="Our Experience"
              style={{
                width: "100%",
                borderRadius: "16px",
                display: "block",
              }}
            />
            {/* Decorative corner accents */}
            <Box
              sx={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                width: "60px",
                height: "60px",
                borderTop: "4px solid #E0A422",
                borderLeft: "4px solid #E0A422",
                borderRadius: "8px 0 0 0",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "60px",
                height: "60px",
                borderBottom: "4px solid #E0A422",
                borderRight: "4px solid #E0A422",
                borderRadius: "0 0 8px 0",
              }}
            />
          </Box>
        </AnimatedBox>
      </Grid>

      {/* Content */}
      <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
        <AnimatedBox delay="0.15s">
          {/* Label */}
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
            Welcome
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "32px" },
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "20px",
              color: "#1a1a2e",
              maxWidth: "450px",
            }}
          >
            Advocate Passionately, Inspire Consistently.
          </Typography>

          {/* Body */}
          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              lineHeight: 1.8,
              color: "#555",
              marginBottom: "28px",
            }}
          >
            At our firm, we champion your cause with unwavering dedication and
            advocacy. Our mission is to inspire confidence and trust through
            every step of the legal process. We believe in maintaining
            consistency in our approach, ensuring that our service remains
            reliable and effective. With these core values guiding us, we are
            committed to delivering outstanding results and supporting you with
            integrity and excellence.
          </Typography>

          {/* CTA row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
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
                  padding: "11px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: '"Source Sans Pro", sans-serif',
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#c48d1a",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 15px rgba(224,164,34,0.3)",
                  },
                }}
              >
                Get Started
                <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
              </Box>
            </RouterLink>

            {/* Muhammad avatar */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={SmallMuhammad}
                alt="Muhammad"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #E0A422",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    color: "#1a1a2e",
                    lineHeight: 1.3,
                  }}
                >
                  Muhammad
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    color: "#888",
                  }}
                >
                  Lex Adepts Management
                </Typography>
              </Box>
            </Box>
          </Box>
        </AnimatedBox>
      </Grid>
    </Grid>
  );
};

export default Experience;

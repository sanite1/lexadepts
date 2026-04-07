import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import AboutImg from "../../assets/images/about0.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

const highlights = [
  "Innovative Legal Solutions",
  "Personalized Client Service",
  "Commitment to Justice and Community",
];

const About = () => {
  return (
    <Grid container spacing={6} alignItems="center">
      {/* Content */}
      <Grid item xs={12} md={6}>
        <AnimatedBox>
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
            About Us
          </Typography>

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
            This is what makes us who we are
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              lineHeight: 1.8,
              color: "#555",
              marginBottom: "24px",
            }}
          >
            At Lex Adepts, we believe that everyone deserves access to
            exceptional legal representation. Our team of dedicated and
            compassionate lawyers committed to providing innovative solutions,
            personalised service, and tireless advocacy to individuals and
            businesses in need. With a drive for excellence and passion for
            justice, we strive to make a positive impact in our community and
            beyond.
          </Typography>

          {/* Highlights */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {highlights.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#E0A422", fontSize: "20px" }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 500,
                    color: "#333",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </AnimatedBox>
      </Grid>

      {/* Image */}
      <Grid item xs={12} md={6}>
        <AnimatedBox delay="0.15s">
          <img
            src={AboutImg}
            alt="About Lex Adepts"
            style={{
              width: "100%",
              borderRadius: "16px",
              display: "block",
            }}
          />
        </AnimatedBox>
      </Grid>
    </Grid>
  );
};

export default About;

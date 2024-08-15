import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Link } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import homeIntro from "../../assets/images/homeIntro9.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useTheme } from "@mui/material/styles";

const slideFromDown = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimatedBox = ({ children, direction }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  let animation;
  switch (direction) {
    case "down":
      animation = slideFromDown;
      break;
    default:
      animation = slideFromDown;
  }

  return (
    <Box
      ref={ref}
      sx={{
        animation: inView ? `${animation} 1s ease-out` : "none",
      }}
    >
      {children}
    </Box>
  );
};

function HomeIntro() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${homeIntro})`,
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "rgba(19, 26, 52, 0.5)",
          width: "100%",
          height: "100%",
        }}
      >
        <AnimatedBox direction="down">
          <Typography
            sx={{
              fontSize: {
                xs: theme.typography.h4.fontSize,
                md: theme.typography.h3.fontSize,
              },
              width: { xs: "80%", md: "60%" },
              margin: "auto",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              marginBottom: "10px",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "#fff",
            }}
          >
            Your Premier Partner for Legal and Support Solutions
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: theme.typography.body2.fontSize,
                md: theme.typography.body1.fontSize,
              },
              width: { xs: "90%", md: "70%" },
              margin: "auto",
              marginBottom: "20px",
              fontFamily: '"Source Sans Pro", sans-serif',
              letterSpacing: "1px",
              color: "#fff",
            }}
          >
            Experience unparalleled legal expertise and support with our expert
            legal solutions designed to navigate complexities, manage client
            relationships, and achieve optimal outcomes with confidence.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/contact-us"
              color="inherit"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#E0A422",
                outline: "none",
                borderRadius: "10px",
                padding: "10px 24px",
                letterSpacing: "1px",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 300,
              }}
            >
              Get Started{" "}
              <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
            </Link>
          </Box>
        </AnimatedBox>
      </Box>
    </Box>
  );
}

export default HomeIntro;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Link } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import priority from "../../assets/images/priority.png";
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

function Priority() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // height: "100vh",
        padding: "100px 0",

        margin: "auto",
        zIndex: "0",
        backgroundImage: `url(${priority})`,
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
        zIndex: 1, // Ensure this is lower than the navbar
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
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
              marginBottom: "20px",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "#fff",
            }}
          >
            We ensure we handle each case with top level priority
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: theme.typography.body2.fontSize,
                md: theme.typography.body1.fontSize,
              },
              width: { xs: "90%", md: "70%" },
              margin: "auto",
              marginBottom: "20px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              color: "#fff",
            }}
          >
            At Lex Adepts, our team of experienced lawyers provides expert
            guidance and representation across range of areas, and we pride
            ourselves on our sector strengths which cover diverse areas of law
            including
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
                fontFamily: "sans-serif",
                letterSpacing: "1px",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 300,
              }}
            >
              Contact Us
              <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
            </Link>
          </Box>
        </AnimatedBox>
      </Box>
    </Box>
  );
}

export default Priority;

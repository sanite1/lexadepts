import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import HomeIntro from "../components/Home/HomeIntro";
import Experience from "../components/AboutUs/Experience";
import About from "../components/Home/About";
import PracticeAreas from "../components/Home/PracticeAreas";
import Values from "../components/AboutUs/Values";
import Priority from "../components/Home/Priority";
import { useEffect } from "react";

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

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

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedBox = ({ children, direction }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  let animation;
  switch (direction) {
    case "left":
      animation = slideFromLeft;
      break;
    case "right":
      animation = slideFromRight;
      break;
    case "down":
      animation = slideFromDown;
      break;
    case "appear":
      animation = appear;
      break;
    default:
      animation = appear;
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

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          width: "100%",
          margin: "auto",
          height: "100vh",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIntro />
      </Box>

      <AnimatedBox direction={"left"}>
        <Box
          sx={{
            width: { xs: "80%", md: "80%" },
            boxSizing: "border-box",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <Experience />
        </Box>
      </AnimatedBox>

      <AnimatedBox direction={"right"}>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <About />
        </Box>
      </AnimatedBox>

      <AnimatedBox direction={"appear"}>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <PracticeAreas />
        </Box>
      </AnimatedBox>

      <AnimatedBox direction={"down"}>
        <Box
          sx={{
            // width: "80%",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <Values />
        </Box>
      </AnimatedBox>

      <Box
        sx={{
          // width: "80%",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Priority />
      </Box>

      {/* Footer  */}

      <Footer />
    </Box>
  );
};

export default Home;

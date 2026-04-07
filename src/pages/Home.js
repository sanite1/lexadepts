import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeIntro from "../components/Home/HomeIntro";
import Experience from "../components/AboutUs/Experience";
import About from "../components/Home/About";
import PracticeAreas from "../components/Home/PracticeAreas";
import Values from "../components/AboutUs/Values";
import Priority from "../components/Home/Priority";

const fadeIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
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

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box>
      <Navbar />

      {/* Hero */}
      <HomeIntro />

      {/* Welcome / Experience */}
      <AnimatedSection>
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "auto",
            padding: { xs: "60px 5%", md: "100px 40px" },
          }}
        >
          <Experience />
        </Box>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection>
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "auto",
            padding: { xs: "0 5% 60px", md: "0 40px 100px" },
          }}
        >
          <About />
        </Box>
      </AnimatedSection>

      {/* Practice Areas */}
      <AnimatedSection>
        <PracticeAreas />
      </AnimatedSection>

      {/* Values / Why Choose Us */}
      <AnimatedSection>
        <Values />
      </AnimatedSection>

      {/* CTA Banner */}
      <Priority />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;

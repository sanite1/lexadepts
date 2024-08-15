import { Box, Link, Divider, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import AboutUsIntro from "../assets/images/aboutUsIntro2.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TeamCards from "../components/Team/TeamCards";
import Footer from "../components/Footer";
import Experience from "../components/AboutUs/Experience";
import Values from "../components/AboutUs/Values";
import Mission from "../components/AboutUs/Mission";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AboutUs = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#E0A422">
      About Us
    </Typography>,
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const theme = useTheme();

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundImage: `url(${AboutUsIntro})`,
          backgroundSize: "cover", // Cover the entire box
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent tiling
          width: "100%",
          height: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            color="#E0A422"
            sx={{
              fontSize: "16px",
              fontFamily: '"Source Sans Pro", sans-serif',
            }}
          >
            Lex Adepts
          </Typography>
          <Typography
            variant="body2"
            color="#fff"
            sx={{
              fontSize: {
                xs: theme.typography.h4.fontSize,
                md: theme.typography.h3.fontSize,
              },
              fontFamily: '"Source Sans Pro", sans-serif',
              marginTop: "10px",
            }}
          >
            About Us
          </Typography>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            display="flex"
            justifyContent="center"
            mt="10px"
            color="#fff"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
        }}
      >
        {/* Experience */}
        <Experience />
      </Box>

      {/* Values  */}
      <Values />

      {/* Mission  */}
      <Mission />

      {/* Team  */}

      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: "50px auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            borderBottom: "5px solid #E0A422",
            width: "fit-content",
            margin: "auto",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          MEET THE TEAM
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 700,
            width: { xs: "90%", md: "60%" },
            margin: "auto",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          These are the wonderful individuals that make up our company
        </Typography>
        <TeamCards />
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
        >
          <Link
            href="/team"
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
            Learn More <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
          </Link>
        </Box>
        <Divider sx={{ width: "80%", margin: "auto" }} />
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutUs;

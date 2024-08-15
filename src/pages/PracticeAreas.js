import { Box, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import PracticeAreaImage from "../assets/images/practiceAreaIntro2.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import PracticeAreaCards from "../components/PracticeAreas/PracticeAreaCards";

const PracticeArea = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#E0A422">
      Practice Areas
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
          backgroundImage: `url(${PracticeAreaImage})`,
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
                sm: theme.typography.h3.fontSize,
              },
              fontFamily: '"Source Sans Pro", sans-serif',
              marginTop: "10px",
            }}
          >
            Practice Areas
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
        <PracticeAreaCards />
      </Box>

      <Footer />
    </Box>
  );
};

export default PracticeArea;

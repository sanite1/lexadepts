import { Box, Grid, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import TeamIntro from "../assets/images/TeamIntro2.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TeamCards from "../components/Team/TeamCards";
import Footer from "../components/Footer";
import MissionImg from "../assets/images/missionImg2.png";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";

const Team = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#E0A422">
      The Team
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
          backgroundImage: `url(${TeamIntro})`,
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
            The Team
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
          // width: "80%",
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
      </Box>

      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: 1 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                height: "100%",
              }}
            >
              <img
                src={MissionImg}
                alt={"experience"}
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                height: "100%",
                background: "#131A34",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  paddingLeft: "50px",
                  paddingTop: "30px",
                  boxSizing: "border-box",
                }}
              >
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 700,
                      width: { xs: "90%", md: "60%" },
                      color: "white",

                      marginBottom: "40px",
                    }}
                  >
                    We provide the very best at our company
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 400,
                      width: { xs: "90%", md: "80%" },
                      color: "white",

                      marginBottom: "40px",
                    }}
                  >
                    At our firm, we are dedicated to delivering exceptional
                    legal services across all practice areas. Our team of
                    experienced professionals serves as trusted advisors,
                    guiding clients through complex legal and business
                    challenges. We are committed to helping you navigate every
                    aspect of your legal needs with the highest level of
                    expertise, ensuring that you achieve your objectives and
                    receive the best possible support.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                      width: { xs: "90%", md: "60%" },

                      marginBottom: "40px",

                      color: "#E0A422",
                      fontStyle: "italic",
                    }}
                  >
                    -Lex Adepts Management
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default Team;

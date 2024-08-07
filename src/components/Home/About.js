import { Box, Button, Grid, Link, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceImg from "../../assets/images/experienceImg.png";
import AboutImg from "../../assets/images/aboutSecImg.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={
            {
              // order: { xs: 1, md: 2 },
            }
          }
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              flexWrap: { xs: "wrap" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 400,
                  borderBottom: "5px solid #E0A422",
                  width: "fit-content",
                  transform: { xs: "" },
                  // transformOrigin: "center bottom",
                }}
              >
                ABOUT US
              </Typography>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    marginBottom: "20px",
                    width: { xs: "100%", md: "70%" },
                  }}
                >
                  This is what makes us who we are
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  At Lex Adepts, we believe that everyone deserves access to
                  exceptional legal representation. Our team of dedicated and
                  compassionate lawyers committed to providing innovative
                  solutions, personalised service, and tireless advocacy to
                  individuals and businesses in need. With a drive for
                  excellence and passion for justice, we strive to make a
                  positive impact in our community and beyond.
                </Typography>
                <Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#E0A422" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginLeft: "15px",
                      }}
                    >
                      Innovative Legal Solutions
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#E0A422" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginLeft: "15px",
                      }}
                    >
                      Personalized Client Service
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#E0A422" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginLeft: "15px",
                      }}
                    >
                      Commitment to Justice and Community
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={
            {
              // order: { xs: 2, md: 1 },
            }
          }
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img src={AboutImg} alt={"experience"} style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

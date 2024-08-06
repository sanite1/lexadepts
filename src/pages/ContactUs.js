import { Box, Button, Grid, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import ContactIntro from "../assets/images/contactIntro.png";
import Map from "../assets/images/map.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TeamCards from "../components/Team/TeamCards";
import Footer from "../components/Footer";
import PracticeAreaCards from "../components/PracticeAreas/PracticeAreaCards";
import Experience from "../components/AboutUs/Experience";
import Values from "../components/AboutUs/Values";
import Mission from "../components/AboutUs/Mission";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#E0A422">
      Contact Us
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
          backgroundImage: `url(${ContactIntro})`,
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
            Contact Us
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
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box sx={{}}>
                    <Typography
                      sx={{
                        fontSize: "32px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 700,
                        width: { xs: "90%", md: "70%" },
                        marginBottom: "20px",
                      }}
                    >
                      This is what makes us who we are
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginBottom: "20px",
                      }}
                    >
                      At Lex Adepts, we believe that everyone deserves access to
                      exceptional legal representation. Our team of dedicated
                      and compassionate lawyers committed to providing
                      innovative solutions, personalised service, and tireless
                      advocacy to individuals and businesses in need. With a
                      drive for excellence and passion for justice, we strive to
                      make a positive impact in our community and beyond.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                        }}
                      >
                        <CallIcon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            background: "#E0A422",
                            color: "#000",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            marginRight: "20px",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 700,
                              }}
                            >
                              Give us a Call
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              +234-810-702-0108
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                        }}
                      >
                        <EmailIcon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            background: "#E0A422",
                            color: "#000",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 700,
                              }}
                            >
                              Send us an Email
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              info@lexadepts.com
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  height: "100%",
                }}
              >
                <img src={Map} alt={"experience"} style={{ width: "100%" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;

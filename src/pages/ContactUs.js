import { Box, Grid, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import ContactIntro from "../assets/images/homeIntro4.jpg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
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
        <Box
          sx={{
            width: "100%",
            height: "65vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(19, 26, 52, 0.5)",
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
                        display: { xs: "block", md: "flex" },
                        justifyContent: "start",
                      }}
                    >
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                          marginBottom: { xs: "30px", md: "0" },
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
                  width: "100%",
                }}
              >
                <Box sx={{ mt: 4, width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.0457336053682!2d7.46747401399718!3d9.079522880834443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae5774a6d79%3A0xaf8eea7bb4bb9c0b!2s13%20Parakou%20St%2C%20Wuse%202%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1723039275440!5m2!1sen!2sng"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    title="Google Maps Location of Our Office"
                    style={{ border: 0, width: "100%" }}
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
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

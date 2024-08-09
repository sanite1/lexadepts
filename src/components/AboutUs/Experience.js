import { Box, Button, Grid, Link, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceImg from "../../assets/images/experienceImg.png";
import SmallMuhammad from "../../assets/images/smallMuhammad.png";

const Experience = () => {
  return (
    <Box>
      <Grid container spacing={4}>
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
              src={ExperienceImg}
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
                WELCOME
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
                  Advocate Passionately, inspire consistently.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  At our firm, we champion your cause with unwavering dedication
                  and advocacy. Our mission is to inspire confidence and trust
                  through every step of the legal process. We believe in
                  maintaining consistency in our approach, ensuring that our
                  service remains reliable and effective. With these core values
                  guiding us, we are committed to delivering outstanding results
                  and supporting you with integrity and excellence.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
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
                      marginRight: "20px",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Get Started{" "}
                    <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
                  </Link>
                  <Box
                    sx={{
                      width: "fit-content",
                      display: { xs: "none", sm: "flex" },
                      marginTop: { xs: "20px", sm: "0" },
                    }}
                  >
                    <img
                      src={SmallMuhammad}
                      alt={"experience"}
                      style={{ width: "", float: "left", marginRight: "5px" }}
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
                          Muhammad
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontFamily: '"Source Sans Pro", sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          Lex Adept Management
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;

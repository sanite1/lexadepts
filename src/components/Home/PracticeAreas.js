import { Box, Grid, Link, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import smallPract1 from "../../assets/images/smallPract1.png";
import smallPract2 from "../../assets/images/smallPract2.png";
import smallPract3 from "../../assets/images/smallPract3.png";
import smallPract4 from "../../assets/images/smallPract4.png";
import practIcon1 from "../../assets/images/practIcon1.png";
import practIcon2 from "../../assets/images/practIcon2.png";
import practIcon3 from "../../assets/images/practIcon3.png";
import practIcon4 from "../../assets/images/practIcon4.png";

const PracticeAreas = () => {
  return (
    <Box
      sx={{
        background: "#131A34",
        padding: { xs: "50px 5%", md: "5%" },
      }}
    >
      <Grid container>
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
                marginBottom: "20px",
                height: "100%",
                paddingLeft: { xs: "0", md: "50px" },
              }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    borderBottom: "5px solid #E0A422",
                    width: "fit-content",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  Practice Areas
                </Typography>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    width: { xs: "90%", md: "60%" },
                    color: "white",

                    marginBottom: "20px",
                  }}
                >
                  We cover all possible Scopes
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    width: { xs: "90%", md: "80%" },
                    color: "white",

                    marginBottom: "20px",
                  }}
                >
                  At Lex Adepts, our team of experienced lawyers provides expert
                  guidance and representation across range of areas, and we
                  pride ourselves on our sector strengths which cover diverse
                  areas of law including
                </Typography>
                <Box
                  sx={{
                    width: "fit-content",
                  }}
                >
                  <Link
                    href="/practice-areas"
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
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Read More{" "}
                    <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              height: "100%",
              background: "#131A34",
              boxSizing: "border-box",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract1})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <Box display={"flex"} justifyContent={"center"}>
                      <img
                        src={practIcon1}
                        alt={"icon"}
                        style={{ display: "flex", justifyContent: "center" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        color: "#fff",
                        width: { xs: "80%" },
                        textAlign: "center",
                        margin: "auto",
                      }}
                    >
                      Corporate and Commercial Law
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract2})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <Box display={"flex"} justifyContent={"center"}>
                      <img
                        src={practIcon2}
                        alt={"icon"}
                        style={{ display: "flex", justifyContent: "center" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        color: "#fff",
                        width: { xs: "80%" },
                        textAlign: "center",
                        margin: "auto",
                      }}
                    >
                      Finance and Policy Law
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract3})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <Box display={"flex"} justifyContent={"center"}>
                      <img
                        src={practIcon3}
                        alt={"icon"}
                        style={{ display: "flex", justifyContent: "center" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        color: "#fff",
                        width: { xs: "80%" },
                        textAlign: "center",
                        margin: "auto",
                      }}
                    >
                      Corporate Governance, Risk and Compliance
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    backgroundImage: `url(${smallPract4})`,
                    backgroundSize: "cover", // Cover the entire box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <Box display={"flex"} justifyContent={"center"}>
                      <img
                        src={practIcon4}
                        alt={"icon"}
                        style={{ display: "flex", justifyContent: "center" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        color: "#fff",
                        width: { xs: "80%" },
                        textAlign: "center",
                        margin: "auto",
                      }}
                    >
                      Real Estate - Property Law
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PracticeAreas;

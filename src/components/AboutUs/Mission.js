import { Box, Grid, Typography } from "@mui/material";
import MissionImg from "../../assets/images/mission00.jpg";

const Mission = () => {
  return (
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
                    marginBottom: "20px",
                  }}
                >
                  OUR MISSION
                </Typography>
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
                  Our Commitment to Excellence
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
                  Our firm is committed to determining topnotch legal services,
                  and to serve as trusted advisors and partners to our clients
                  by helping them navigate business complexities and achieve
                  their objectives.
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
  );
};

export default Mission;

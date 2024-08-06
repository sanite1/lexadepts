import {
  Box,
  ListItem,
  Grid,
  List,
  Typography,
  ListItemIcon,
} from "@mui/material";
import PracticeAreaData from "../../data/practiceAreas";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PracticeAreaCards = () => {
  return (
    <Box>
      {PracticeAreaData.map((pract) => (
        <Grid container spacing={3} mb={4}>
          <Grid
            item
            key={pract.id}
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: pract.md },
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
              <Box>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    width: "100%",
                  }}
                >
                  {pract.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 300,
                    width: "100%",
                  }}
                >
                  {pract.desc}
                </Typography>

                {pract.bulletPoints ? (
                  pract.bulletPoints.map((point) => (
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
                          sx={{ color: "#E0A422", zIndex: 0 }}
                        />
                        <Typography
                          sx={{
                            fontSize: "16px",
                            marginLeft: "15px",
                            zIndex: 0,
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            key={pract.id}
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: pract.xs },
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
                src={pract.image}
                alt={pract.name}
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default PracticeAreaCards;

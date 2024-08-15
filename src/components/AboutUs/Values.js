import { Box, Grid, Typography } from "@mui/material";
import value1 from "../../assets/images/value1.png";
import value2 from "../../assets/images/value2.png";
import value3 from "../../assets/images/value3.png";

const Values = () => {
  return (
    <Box>
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
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
          WHY CHOOSE US
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
          These are the values that guide our company
        </Typography>
      </Box>
      <Grid container sx={{ width: "80%", margin: "auto" }}>
        <Grid item xs={12} sm={6} md={4} sx={{ padding: { xs: "20px" } }}>
          <img
            src={value1}
            alt={"Value"}
            style={{ margin: "auto", display: "flex" }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            Efficient
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            We work efficiently to minimize costs and maximize results.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ padding: { xs: "20px" } }}>
          <img
            src={value2}
            alt={"Value"}
            style={{ margin: "auto", display: "flex" }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            Pro Active
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            We anticipate and address potential legal issues before they become
            major problems.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ padding: { xs: "20px" } }}>
          <img
            src={value3}
            alt={"Value"}
            style={{ margin: "auto", display: "flex" }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            Commercially Aware
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            We understand the business implications of legal decisions and
            provide guidance that aligns with our clients' goals.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Values;

// src/pages/TeamMember.js
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Link, Grid } from "@mui/material";
import teamMembers from "../../data/teamMembers";
import Navbar from "../Navbar";
import TeamIntro from "../../assets/images/staffDetailIntro2.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../Footer";
import Error from "../../pages/Error";
import { useEffect } from "react";

import { useTheme } from "@mui/material/styles";
const TeamMember = () => {
  const { id } = useParams();
  const member = teamMembers.find((member) => member.id === id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const theme = useTheme();

  if (!member) {
    return <Error />;
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/team">
      The Team
    </Link>,
    <Typography key="3" color="#E0A422">
      The Team
    </Typography>,
  ];

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${TeamIntro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
            Staff Details
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={member.image}
              alt={member.name}
              style={{ width: "100%" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
              }}
            >
              {member.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                borderBottom: "5px solid #E0A422",
                width: "fit-content",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Bio
            </Typography>
            {member.bio.map((member) => (
              <Typography
                key={member.id}
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 300,
                  marginBottom: "10px",
                }}
              >
                {member}
              </Typography>
            ))}
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                width: "fit-content",
                marginBottom: "10px",
                marginTop: "20px",
                textAlign: "center",
                borderBottom: "5px solid #E0A422",
              }}
            >
              Expertise
            </Typography>

            {member.expertise.map((member) => (
              <Typography
                key={member.id}
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 300,
                  marginBottom: "10px",
                }}
              >
                {member}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default TeamMember;

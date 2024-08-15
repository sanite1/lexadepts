import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import teamMembers from "../../data/teamMembers";

const TeamCards = () => {
  return (
    <Box sx={{ width: { xs: "80%" }, margin: "auto" }}>
      <Grid container spacing={3}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Link
              href={`/team/${member.id}`}
              sx={{
                textDecoration: "none",
                position: "relative",
                display: "block",
                overflow: "hidden",
                cursor: "pointer",
                "&:hover .overlay": {
                  top: 0,
                },
              }}
            >
              <Box
                component="img"
                src={member.cardImage}
                alt={member.name}
                sx={{ width: "100%", display: "block" }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(224, 164, 34, 0.5)", // Transparent background color
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "top 0.3s ease-in-out",
                }}
              >
                <Typography variant="body1" component="span">
                  See More
                </Typography>
              </Box>
            </Link>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
                textDecoration: "none",
                color: "black",
              }}
            >
              {member.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamCards;

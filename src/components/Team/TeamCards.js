import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import teamMembers from "../../data/teamMembers";

const fadeIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const AnimatedBox = ({ children, delay = "0s" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        animation: inView
          ? `${fadeIn} 0.6s ease-out ${delay} forwards`
          : "none",
      }}
    >
      {children}
    </Box>
  );
};

const TeamCards = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} key={member.id}>
          <AnimatedBox delay={`${index * 0.1}s`}>
            <RouterLink
              to={`/team/${member.id}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#fff",
                  transition: "all 0.4s ease",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                  },
                  "&:hover .team-img": {
                    transform: "scale(1.05)",
                  },
                  "&:hover .view-label": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "3/4",
                  }}
                >
                  <Box
                    component="img"
                    className="team-img"
                    src={member.cardImage}
                    alt={member.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* Gradient overlay on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(19,26,52,0.7) 0%, transparent 50%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      ".MuiBox-root:hover &": { opacity: 1 },
                    }}
                  />

                  {/* "View Profile" pill */}
                  <Box
                    className="view-label"
                    sx={{
                      position: "absolute",
                      bottom: "16px",
                      left: "50%",
                      transform: "translateX(-50%) translateY(10px)",
                      background: "rgba(224,164,34,0.9)",
                      color: "#131A34",
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: '"Source Sans Pro", sans-serif',
                      letterSpacing: "0.5px",
                      padding: "6px 18px",
                      borderRadius: "20px",
                      opacity: 0,
                      transition: "all 0.4s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    View Profile
                  </Box>
                </Box>

                {/* Info */}
                <Box sx={{ padding: "16px 20px 20px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      color: "#1a1a2e",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 500,
                      color: "#E0A422",
                      marginTop: "4px",
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Box>
            </RouterLink>
          </AnimatedBox>
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamCards;

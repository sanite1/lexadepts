import { Box, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import smallPract1 from "../../assets/images/corp-com.jpg";
import smallPract2 from "../../assets/images/smallPract2.png";
import smallPract3 from "../../assets/images/risk.jpg";
import smallPract4 from "../../assets/images/bigPract40.png";
import practIcon1 from "../../assets/images/practIcon1.png";
import practIcon2 from "../../assets/images/practIcon2.png";
import practIcon3 from "../../assets/images/practIcon3.png";
import practIcon4 from "../../assets/images/practIcon4.png";

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

const practiceCards = [
  {
    image: smallPract1,
    icon: practIcon1,
    label: "Corporate and Commercial Law",
  },
  { image: smallPract2, icon: practIcon2, label: "Finance and Policy Law" },
  {
    image: smallPract3,
    icon: practIcon3,
    label: "Corporate Governance, Risk and Compliance",
  },
  { image: smallPract4, icon: practIcon4, label: "Real Estate - Property Law" },
];

const PracticeAreas = () => {
  return (
    <Box
      sx={{
        background: "#131A34",
        padding: { xs: "60px 5%", md: "80px 5%" },
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={5}>
            <AnimatedBox>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#E0A422",
                  marginBottom: "12px",
                  display: "inline-block",
                  borderBottom: "2px solid #E0A422",
                  paddingBottom: "4px",
                }}
              >
                Practice Areas
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "26px", md: "32px" },
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#fff",
                  marginBottom: "20px",
                  maxWidth: "380px",
                }}
              >
                We cover all possible Scopes
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: "28px",
                  maxWidth: "420px",
                }}
              >
                At Lex Adepts, our team of experienced lawyers provides expert
                guidance and representation across range of areas, and we pride
                ourselves on our sector strengths which cover diverse areas of
                law including
              </Typography>

              <RouterLink
                to="/practice-areas"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#E0A422",
                    color: "#131A34",
                    borderRadius: "8px",
                    padding: "11px 24px",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: '"Source Sans Pro", sans-serif',
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#c48d1a",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 15px rgba(224,164,34,0.3)",
                    },
                  }}
                >
                  Read More
                  <ArrowForwardIosIcon sx={{ fontSize: "13px" }} />
                </Box>
              </RouterLink>
            </AnimatedBox>
          </Grid>

          {/* Right Cards Grid */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {practiceCards.map((card, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <AnimatedBox delay={`${index * 0.1}s`}>
                    <Box
                      sx={{
                        position: "relative",
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "240px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        "&:hover .overlay": {
                          background: "rgba(19,26,52,0.75)",
                        },
                        "&:hover .card-icon": {
                          transform: "scale(1.15)",
                        },
                      }}
                    >
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(19,26,52,0.55)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "20px",
                          transition: "background 0.4s ease",
                        }}
                      >
                        <Box
                          className="card-icon"
                          sx={{
                            marginBottom: "12px",
                            transition: "transform 0.4s ease",
                          }}
                        >
                          <img
                            src={card.icon}
                            alt={card.label}
                            style={{ display: "block" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontFamily: '"Source Sans Pro", sans-serif',
                            fontWeight: 500,
                            color: "#fff",
                            textAlign: "center",
                            lineHeight: 1.4,
                            maxWidth: "180px",
                          }}
                        >
                          {card.label}
                        </Typography>
                      </Box>
                    </Box>
                  </AnimatedBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PracticeAreas;

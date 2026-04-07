import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import PracticeAreaData from "../../data/practiceAreas";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
          ? `${fadeIn} 0.7s ease-out ${delay} forwards`
          : "none",
      }}
    >
      {children}
    </Box>
  );
};

const PracticeAreaCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "60px", md: "80px" },
      }}
    >
      {PracticeAreaData.map((pract, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <AnimatedBox key={pract.id}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              {/* Content */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  order: { xs: 1, md: isReversed ? 2 : 1 },
                }}
              >
                <Box>
                  {/* Number badge */}
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
                    0{pract.id}
                  </Typography>

                  {/* Heading */}
                  <Typography
                    sx={{
                      fontSize: { xs: "24px", md: "30px" },
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "#1a1a2e",
                      marginBottom: "16px",
                    }}
                  >
                    {pract.name}
                  </Typography>

                  {/* Gold divider */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "3px",
                      background: "#E0A422",
                      marginBottom: "20px",
                      borderRadius: "2px",
                    }}
                  />

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 400,
                      lineHeight: 1.8,
                      color: "#555",
                      marginBottom: pract.bulletPoints ? "20px" : "0",
                    }}
                  >
                    {pract.desc}
                  </Typography>

                  {/* Bullet points */}
                  {pract.bulletPoints && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {pract.bulletPoints.map((point, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: "#E0A422",
                              fontSize: "20px",
                              marginTop: "2px",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontFamily: '"Source Sans Pro", sans-serif',
                              fontWeight: 500,
                              color: "#444",
                              lineHeight: 1.6,
                            }}
                          >
                            {point}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </Grid>

              {/* Image */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  order: { xs: 2, md: isReversed ? 1 : 2 },
                }}
              >
                <AnimatedBox delay="0.15s">
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      "&:hover img": {
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <img
                      src={pract.image}
                      alt={pract.name}
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "16px",
                        transition: "transform 0.6s ease",
                      }}
                    />

                    {/* Subtle overlay gradient at bottom */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "40%",
                        background:
                          "linear-gradient(to top, rgba(19,26,52,0.15) 0%, transparent 100%)",
                        borderRadius: "0 0 16px 16px",
                        pointerEvents: "none",
                      }}
                    />
                  </Box>
                </AnimatedBox>
              </Grid>
            </Grid>
          </AnimatedBox>
        );
      })}
    </Box>
  );
};

export default PracticeAreaCards;

import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import MissionImg from "../../assets/images/mission00.jpg";

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

const Mission = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: { md: "500px", lg: "600px" },
        alignItems: "stretch", // مهم جداً
      }}
    >
      {/* Image */}
      <Grid item xs={12} md={6}>
        <AnimatedBox>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              overflow: "hidden", // prevents weird overflow glitches
            }}
          >
            <Box
              component="img"
              src={MissionImg}
              alt="Our Mission"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </AnimatedBox>
      </Grid>

      {/* Content */}
      <Grid item xs={12} md={6}>
        <AnimatedBox delay="0.15s">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              background: "#131A34",
              px: { xs: 3, sm: 5, md: 6, lg: 10 }, // better horizontal spacing
              py: { xs: 6, md: 8 },
            }}
          >
            <Box sx={{ maxWidth: "520px" }}>
              {" "}
              {/* wider content */}
              {/* Label */}
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#E0A422",
                  mb: 2,
                  borderBottom: "2px solid #E0A422",
                  display: "inline-block",
                }}
              >
                Our Mission
              </Typography>
              {/* Heading */}
              <Typography
                sx={{
                  fontSize: { xs: "26px", md: "32px", lg: "36px" },
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#fff",
                  mb: 3,
                }}
              >
                Our Commitment to Excellence
              </Typography>
              {/* Body */}
              <Typography
                sx={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.7)",
                  mb: 4,
                }}
              >
                Our firm is committed to determining topnotch legal services,
                and to serve as trusted advisors and partners to our clients by
                helping them navigate business complexities and achieve their
                objectives.
              </Typography>
              {/* Attribution */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{ width: "32px", height: "2px", bgcolor: "#E0A422" }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontStyle: "italic",
                    color: "#E0A422",
                  }}
                >
                  Lex Adepts Management
                </Typography>
              </Box>
            </Box>
          </Box>
        </AnimatedBox>
      </Grid>
    </Grid>
  );
};

export default Mission;

import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import value1 from "../../assets/images/value1.png";
import value2 from "../../assets/images/value2.png";
import value3 from "../../assets/images/value3.png";

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

const values = [
  {
    icon: value1,
    title: "Efficient",
    description: "We work efficiently to minimize costs and maximize results.",
  },
  {
    icon: value2,
    title: "Pro Active",
    description:
      "We anticipate and address potential legal issues before they become major problems.",
  },
  {
    icon: value3,
    title: "Commercially Aware",
    description:
      "We understand the business implications of legal decisions and provide guidance that aligns with our clients' goals.",
  },
];

const Values = () => {
  return (
    <Box sx={{ padding: { xs: "60px 5%", md: "80px 5%" } }}>
      <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
        {/* Section Header */}
        <AnimatedBox>
          <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
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
              Why Choose Us
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "32px" },
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#1a1a2e",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              These are the values that guide our Firm
            </Typography>
          </Box>
        </AnimatedBox>

        {/* Cards */}
        <Grid container spacing={4}>
          {values.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedBox delay={`${index * 0.15}s`}>
                <Box
                  sx={{
                    textAlign: "center",
                    padding: "40px 28px",
                    borderRadius: "16px",
                    border: "1px solid #eee",
                    transition: "all 0.4s ease",
                    background: "#fff",
                    "&:hover": {
                      borderColor: "rgba(224,164,34,0.3)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {/* Icon container */}
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "64px",
                      height: "64px",
                      borderRadius: "16px",
                      background: "rgba(224,164,34,0.1)",
                      marginBottom: "20px",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        background: "#E0A422",
                      },
                    }}
                  >
                    <img src={item.icon} alt={item.title} />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 700,
                      color: "#1a1a2e",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "#666",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </AnimatedBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Values;

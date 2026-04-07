import React, { useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import teamMembers from "../../data/teamMembers";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Error from "../../pages/Error";
import TeamIntro from "../../assets/images/staffDetailIntro2.png";

const fadeIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const heroFade = keyframes`
  from { transform: translateY(20px); opacity: 0; }
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

const TeamMember = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!member) {
    return <Error embedded />;
  }

  /* Find prev/next members for navigation */
  const currentIndex = teamMembers.findIndex((m) => m.id === id);
  const prevMember = currentIndex > 0 ? teamMembers[currentIndex - 1] : null;
  const nextMember =
    currentIndex < teamMembers.length - 1
      ? teamMembers[currentIndex + 1]
      : null;

  return (
    <Box>
      <Navbar />

      {/* ── Hero Banner ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "55vh", md: "65vh" },
          minHeight: "380px",
          backgroundImage: `url(${TeamIntro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(19,26,52,0.65) 0%, rgba(19,26,52,0.5) 50%, rgba(19,26,52,0.75) 100%)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            animation: `${heroFade} 0.8s ease-out`,
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#E0A422",
              marginBottom: "8px",
            }}
          >
            Lex Adepts
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            {member.name}
          </Typography>

          {/* Breadcrumbs */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontSize: "14px",
              fontFamily: '"Source Sans Pro", sans-serif',
              flexWrap: "wrap",
            }}
          >
            <RouterLink
              to="/"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#E0A422")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.7)")
              }
            >
              Home
            </RouterLink>
            <NavigateNextIcon
              sx={{ fontSize: "18px", color: "rgba(255,255,255,0.4)" }}
            />
            <RouterLink
              to="/team"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#E0A422")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.7)")
              }
            >
              The Team
            </RouterLink>
            <NavigateNextIcon
              sx={{ fontSize: "18px", color: "rgba(255,255,255,0.4)" }}
            />
            <Typography
              component="span"
              sx={{
                color: "#E0A422",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
              }}
            >
              {member.name}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Back Link ── */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          padding: { xs: "24px 5% 0", md: "32px 40px 0" },
        }}
      >
        <RouterLink to="/team" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#888",
              fontSize: "14px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 500,
              transition: "color 0.3s ease",
              "&:hover": { color: "#E0A422" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "18px" }} />
            Back to Team
          </Box>
        </RouterLink>
      </Box>

      {/* ── Member Detail ── */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          padding: { xs: "32px 5% 60px", md: "48px 40px 100px" },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Image + Name */}
          <Grid item xs={12} md={5}>
            <AnimatedBox>
              <Box
                sx={{
                  position: "sticky",
                  top: "120px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginBottom: "24px",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                  {/* Gold accent bottom border */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "#E0A422",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "22px", md: "26px" },
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    color: "#1a1a2e",
                    lineHeight: 1.3,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    color: "#E0A422",
                    marginTop: "4px",
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
            </AnimatedBox>
          </Grid>

          {/* Bio + Expertise */}
          <Grid item xs={12} md={7}>
            <AnimatedBox delay="0.15s">
              {/* Bio */}
              <Box sx={{ marginBottom: "40px" }}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#E0A422",
                    marginBottom: "16px",
                    display: "inline-block",
                    borderBottom: "2px solid #E0A422",
                    paddingBottom: "4px",
                  }}
                >
                  Biography
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {member.bio.map((paragraph, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "15px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        lineHeight: 1.8,
                        color: "#555",
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Expertise */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#E0A422",
                    marginBottom: "16px",
                    display: "inline-block",
                    borderBottom: "2px solid #E0A422",
                    paddingBottom: "4px",
                  }}
                >
                  Areas of Expertise
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {member.expertise.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        background: "#FAFAFA",
                        border: "1px solid #eee",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(224,164,34,0.3)",
                          background: "rgba(224,164,34,0.04)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#E0A422",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 500,
                          color: "#333",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </AnimatedBox>
          </Grid>
        </Grid>
      </Box>

      {/* ── Prev / Next Navigation ── */}
      {(prevMember || nextMember) && (
        <Box
          sx={{
            borderTop: "1px solid #eee",
            borderBottom: "1px solid #eee",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "auto",
              padding: { xs: "0 5%", md: "0 40px" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              minHeight: "80px",
            }}
          >
            {/* Prev */}
            <Box sx={{ flex: 1 }}>
              {prevMember && (
                <RouterLink
                  to={`/team/${prevMember.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      height: "100%",
                      padding: "20px 0",
                      transition: "all 0.3s ease",
                      "&:hover .nav-name": { color: "#E0A422" },
                    }}
                  >
                    <ArrowBackIcon sx={{ fontSize: "18px", color: "#bbb" }} />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 600,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "#aaa",
                          marginBottom: "2px",
                        }}
                      >
                        Previous
                      </Typography>
                      <Typography
                        className="nav-name"
                        sx={{
                          fontSize: "14px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 600,
                          color: "#1a1a2e",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {prevMember.name}
                      </Typography>
                    </Box>
                  </Box>
                </RouterLink>
              )}
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                background: "#eee",
                alignSelf: "stretch",
              }}
            />

            {/* Next */}
            <Box sx={{ flex: 1, textAlign: "right" }}>
              {nextMember && (
                <RouterLink
                  to={`/team/${nextMember.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "12px",
                      height: "100%",
                      padding: "20px 0",
                      transition: "all 0.3s ease",
                      "&:hover .nav-name": { color: "#E0A422" },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 600,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "#aaa",
                          marginBottom: "2px",
                        }}
                      >
                        Next
                      </Typography>
                      <Typography
                        className="nav-name"
                        sx={{
                          fontSize: "14px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: 600,
                          color: "#1a1a2e",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {nextMember.name}
                      </Typography>
                    </Box>
                    <ArrowBackIcon
                      sx={{
                        fontSize: "18px",
                        color: "#bbb",
                        transform: "rotate(180deg)",
                      }}
                    />
                  </Box>
                </RouterLink>
              )}
            </Box>
          </Box>
        </Box>
      )}

      <Footer />
    </Box>
  );
};

export default TeamMember;

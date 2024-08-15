import { Box, Grid, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Logo from "../assets/images/logoMod.png";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [bgColor, setBgColor] = useState("transparent");
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor("#131A34"); // Background color when scrolled
    } else {
      setBgColor("transparent"); // Background color when at the top
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "#E0A422",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [sideBar]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "0",
            width: "100%",
            background: bgColor,
            zIndex: "9999",
          }}
        >
          {/* Sticky navbar  */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              width: "100%",
              zIndex: 9998,
              padding: "0 5%",
              height: "7vh",
              boxSizing: "border-box",
              display: { xs: "none", md: "block" },
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: { xs: "", sm: "flex" },
                    // justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    boxSizing: "border-box",
                  }}
                >
                  <LocationOnIcon sx={{ color: "#E0A422" }} />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "white",
                      marginLeft: "5px",
                    }}
                  >
                    No. 13, Parakou Street, Wuse 2, Abuja-FCT
                  </Typography>
                  <EmailIcon
                    sx={{
                      color: "#E0A422",
                      marginLeft: { xs: "0", sm: "12px" },
                      marginTop: { xs: "12px", sm: "0" },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "white",
                      marginLeft: "5px",
                    }}
                  >
                    info@lexadepts.com
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: { xs: "", sm: "flex" },
                    justifyContent: "end",
                    alignItems: "center",
                    padding: "12px 0",
                  }}
                >
                  <CallIcon
                    sx={{
                      color: "#E0A422",
                      marginLeft: { xs: "0", sm: "12px" },
                      marginTop: { xs: "12px", sm: "0" },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "white",
                      marginLeft: "5px",
                    }}
                  >
                    Talk with us: +234 810 702 0108
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "17% 66% 17%",
              width: "90%",
              margin: "auto",
              padding: "0 5%",
              height: "10vh",
              borderBottomStyle: "solid",
              borderBottom: "1px",
              borderBottomColor: "black",
              zIndex: "9999",
            }}
          >
            {/* Side  bar  */}
            <Box
              sx={{
                position: "absolute",
                height: "70vh",
                width: "100vw",
                background: "#131A34",
                zIndex: "9999",
                display: sideBar ? "block" : "none",
                padding: "10%",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  marginBottom: "50px",
                }}
              >
                <img style={{ width: "200px" }} src={Logo} alt="Logo" />
                <Box
                  sx={{ float: "right" }}
                  onClick={() => setSideBar(!sideBar)}
                >
                  <ClearIcon fontSize="large" />
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  // justifyContent: "space-around",
                  // alignItems: "center",
                  flexWrap: "wrap",
                  margin: "auto",
                }}
              >
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
                  }}
                >
                  <Link
                    href="/"
                    style={currentPath === "/" ? activeLinkStyle : linkStyle}
                  >
                    Home
                  </Link>
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
                  }}
                >
                  <Link
                    href="/practice-areas"
                    style={
                      currentPath === "/practice-areas"
                        ? activeLinkStyle
                        : linkStyle
                    }
                  >
                    Practice Areas
                  </Link>
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
                  }}
                >
                  <Link
                    href="/about-us"
                    style={
                      currentPath === "/about-us" ? activeLinkStyle : linkStyle
                    }
                  >
                    About Us
                  </Link>
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    width: "100%",
                  }}
                >
                  <Link
                    href="/contact-us"
                    style={
                      currentPath === "/contact-us"
                        ? activeLinkStyle
                        : linkStyle
                    }
                  >
                    Contact Us
                  </Link>
                </Typography>
                <Link
                  href="/contact-us"
                  color="black"
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#E0A422",
                    outline: "none",
                    borderRadius: "10px",
                    padding: "10px 24px",
                    letterSpacing: "1px",
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 300,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Get Started{" "}
                </Link>
                {/* <Typography variant="body2">Team</Typography> */}
              </Box>
            </Box>
            {/* Logo  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "200px",
                }}
                src={Logo}
                alt="Logo"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                visibility: { xs: "hidden", md: "visible" },
                justifyContent: "space-around",
                alignItems: "center",
                minWidth: "70%",
                margin: "auto",
              }}
            >
              <Typography
                variant="body2"
                color="#FFF"
                sx={{
                  fontSize: "14px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                }}
              >
                <Link
                  href="/"
                  style={currentPath === "/" ? activeLinkStyle : linkStyle}
                >
                  HOME
                </Link>
              </Typography>
              <Typography
                variant="body2"
                color="#FFF"
                sx={{
                  fontSize: "14px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                }}
              >
                <Link
                  href="/practice-areas"
                  style={
                    currentPath === "/practice-areas"
                      ? activeLinkStyle
                      : linkStyle
                  }
                >
                  PRACTICE AREAS
                </Link>
              </Typography>
              <Typography
                variant="body2"
                color="#FFF"
                sx={{
                  fontSize: "14px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                }}
              >
                <Link
                  href="/about-us"
                  style={
                    currentPath === "/about-us" ? activeLinkStyle : linkStyle
                  }
                >
                  ABOUT US
                </Link>
              </Typography>
              <Typography
                variant="body2"
                color="#FFF"
                sx={{
                  fontSize: "14px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                }}
              >
                <Link
                  href="/contact-us"
                  style={
                    currentPath === "/contact-us" ? activeLinkStyle : linkStyle
                  }
                >
                  CONTACT US
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Link
                href="/contact-us"
                color="black"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#E0A422",
                  outline: "none",
                  borderRadius: "10px",
                  padding: "10px 24px",
                  marginRight: "20px",
                  letterSpacing: "1px",
                  fontSize: "14px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 300,
                  textDecoration: "none",
                }}
              >
                Get Started{" "}
              </Link>
            </Box>
            <Box
              onClick={() => setSideBar(!sideBar)}
              sx={{
                display: { md: "none", xs: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                onClick={() => setSideBar(!sideBar)}
                sx={{
                  display: { md: "none", xs: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  height: "35px",
                  width: "35px",
                  background: "#E0A422",
                  borderRadius: "5px",
                }}
              >
                <MenuIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

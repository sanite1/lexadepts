import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FaWhatsapp } from "react-icons/fa";

import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import Logo from "../assets/images/logo.png";
import footerField from "../assets/images/footerField.png";
import { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Footer = () => {
  const textFieldStyles = {
    "& .MuiInput-root": {
      color: "#fff",
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: "14px",
      padding: "5px",
      marginTop: "20px",
      // Bottom border
      "&:before": {
        borderColor: "#fff",
        borderWidth: "1px",
      },
      // Border on focus
      "&:after": {
        borderColor: "#fff",
        borderWidth: "1px",
      },
      ":hover:not(.Mui-focused)": {
        "&:before": {
          borderColor: "#fff",
          borderWidth: "1px",
        },
      },
    },
    // Label
    "& .MuiInputLabel-standard": {
      color: "#fff",
      "&.Mui-focused": {
        color: "fff",
      },
    },
  };

  const schema = yup.object().shape({
    name: yup.string().required("Name Is required"),
    email: yup.string().required("Email Is required"),
    details: yup.string().required("Message Is required"),
  });

  const { handleSubmit, trigger, control } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const handleLoadClick = async (data) => {
    setLoading(true);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const onSubmit = () => {
    const mailtoLink = `mailto:info@lexadepts.com?subject=Case%20Consultation&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0ADetails:%20${encodeURIComponent(details)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box
      sx={{
        background: "#131A34",
        margin: "auto",
        padding: "30px 10% 50px",
        position: "relative",
        marginTop: { xs: "0", md: "150px" },
      }}
    >
      <Grid container spacing={2} mb={"20px"} sx={{ paddingBottom: "0px" }}>
        <Grid item xs={12} md={7.5}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <img
                  style={{
                    marginBottom: "20px",
                  }}
                  src={Logo}
                  alt="Logo"
                />
                <Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    marginBottom: "15px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    letterSpacing: "1px",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  At Lex Adepts, our team of experienced lawyers provides expert
                  guidance and representation across range of areas, and we
                  pride ourselves on our sector strengths which cover diverse
                  areas of law including
                </Typography>
                <Box display={"flex"}>
                  <Link
                    href="https://www.instagram.com/lexadepts/"
                    target="_blank"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "#E0A422",
                      borderRadius: "15%",
                      color: "#000",
                      // marginRight: { xs: "16px", sm: "16px" },
                    }}
                  >
                    <InstagramIcon />
                  </Link>
                  {/* <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      background: "#E0A422",
                      borderRadius: "15%",
                      marginLeft: "16px",
                    }}
                  >
                    <XIcon fontSize="20px" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      background: "#E0A422",
                      borderRadius: "15%",
                      marginLeft: "16px",
                    }}
                  >
                    <FaLinkedinIn />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      background: "#E0A422",
                      borderRadius: "15%",
                      marginLeft: "16px",
                    }}
                  >
                    <FaFacebookF />
                  </Box> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                // display={"flex"}
                // justifyContent={{ xs: "start", sm: "center" }}
                // flexWrap={"wrap"}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        width: "100%",
                        marginBottom: "15px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        letterSpacing: "1px",
                        fontWeight: "700",
                        color: "#E0A422",
                      }}
                    >
                      Practice Areas
                    </Typography>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                      }}
                      aria-label="practices"
                    >
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon
                            fontSize="small"
                            sx={{ color: "#E0A422" }}
                          />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontFamily: '"Source Sans Pro", sans-serif',
                            marginLeft: "-25px",
                            color: "white",
                          }}
                        >
                          Corporate & Commercial Law
                        </Typography>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon
                            fontSize="small"
                            sx={{ color: "#E0A422" }}
                          />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            marginLeft: "-25px",
                            fontFamily: '"Source Sans Pro", sans-serif',
                            color: "white",
                          }}
                        >
                          Finance and Policy Law
                        </Typography>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon
                            fontSize="small"
                            sx={{ color: "#E0A422" }}
                          />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            marginLeft: "-25px",
                            color: "white",
                            fontFamily: '"Source Sans Pro", sans-serif',
                          }}
                        >
                          Corporate Governance, Risk and Compliance
                        </Typography>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon
                            fontSize="small"
                            sx={{ color: "#E0A422" }}
                          />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            marginLeft: "-25px",
                            fontFamily: '"Source Sans Pro", sans-serif',
                            color: "white",
                          }}
                        >
                          Real Estate – Property Law
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider color="white" sx={{ margin: "50px 0 10px" }} />
            <Box
              sx={{
                display: { xs: "", sm: "flex" },
                // justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
              }}
            >
              <LocationOnIcon sx={{ color: "#E0A422" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "white",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  marginLeft: "10px",
                }}
              >
                No. 13, Parakou Street, Wuse 2, Abuja-FCT
              </Typography>
              <CallIcon
                sx={{
                  color: "#E0A422",
                  marginLeft: { xs: "0", sm: "12px" },
                  marginTop: { xs: "12px", sm: "0" },
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "white",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  marginLeft: "10px",
                }}
              >
                Talk with us: +234 810 702 0108
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4.5}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: { xs: "relative", md: "absolute" },
                top: { xs: "0", md: "-100px" }, // Adjust this value as needed
                boxSizing: { xs: "border-box", md: "content-box" },
                padding: "10%",
                width: "100%",
                backgroundImage: `url(${footerField})`,
                backgroundSize: "cover", // Cover the entire box
                backgroundPosition: "center", // Center the image
                backgroundRepeat: "no-repeat", // Prevent tiling
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  width: "100%",
                  marginBottom: "25px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  letterSpacing: "1px",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Do you have Any case?
              </Typography>
              <Controller
                name="name"
                marginBottom={"4px"}
                control={control}
                defaultValue=""
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    sx={textFieldStyles}
                    variant="standard"
                    placeholder="Enter your full name"
                    size="small"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      trigger("name");
                      setName(fields.value);
                    }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    sx={textFieldStyles}
                    variant="standard"
                    placeholder="Enter your email"
                    size="small"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      trigger("email");
                      setEmail(fields.value);
                    }}
                  />
                )}
              />
              <Controller
                name="details"
                control={control}
                defaultValue=""
                render={({
                  field: { ref, ...fields },
                  fieldState: { error },
                }) => (
                  <TextField
                    sx={textFieldStyles}
                    variant="standard"
                    multiline
                    minRows={4}
                    placeholder="Write details of your case here"
                    size="small"
                    fullWidth
                    {...fields}
                    inputRef={ref}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    onKeyUp={() => {
                      trigger("details");
                      setDetails(fields.value);
                    }}
                  />
                )}
              />
              <Box>
                <Typography
                  sx={
                    {
                      // background: "#E0A422",
                      // outline: "none",
                      // borderRadius: "5px",
                      // padding: "5px 12px",
                    }
                  }
                  variant="body2"
                >
                  <Link
                    onClick={onSubmit}
                    style={{
                      marginTop: "20px",
                      width: "fit-content",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      background: "#E0A422",
                      outline: "none",
                      borderRadius: "10px",
                      padding: "10px 24px",
                      marginRight: "20px",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                      textDecoration: "none",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

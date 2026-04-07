import { Box, Grid, Typography, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactIntro from "../assets/images/homeIntro4.jpg";

const fadeIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const heroFade = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const AnimatedSection = ({ children, delay = "0s" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
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

/* ── Contact info card data ── */
// const contactCards = [
//   {
//     icon: <CallIcon sx={{ fontSize: "22px" }} />,
//     label: "Give us a Call",
//     value: "+234 810 702 0108",
//     href: "tel:+2348107020108",
//   },
//   {
//     icon: <EmailIcon sx={{ fontSize: "22px" }} />,
//     label: "Send us an Email",
//     value: "info@lexadepts.com",
//     href: "mailto:info@lexadepts.com",
//   },
//   {
//     icon: <LocationOnIcon sx={{ fontSize: "22px" }} />,
//     label: "Visit our Office",
//     value: "No. 13, Parakou Street, Wuse 2, Abuja-FCT",
//     href: null,
//   },
//   {
//     icon: <AccessTimeIcon sx={{ fontSize: "22px" }} />,
//     label: "Working Hours",
//     value: "Mon – Fri: 9:00 AM – 5:00 PM",
//     href: null,
//   },
// ];

/* ── Form styles ── */
const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: "14px",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#ddd",
      transition: "border-color 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: "#E0A422",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E0A422",
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: "14px",
    "&.Mui-focused": {
      color: "#E0A422",
    },
  },
};

/* ── Validation ── */
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup.string(),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const mailtoLink = `mailto:info@lexadepts.com?subject=${encodeURIComponent(
      data.subject
    )}&body=Name:%20${encodeURIComponent(
      data.name
    )}%0AEmail:%20${encodeURIComponent(
      data.email
    )}%0APhone:%20${encodeURIComponent(
      data.phone || "N/A"
    )}%0A%0A${encodeURIComponent(data.message)}`;
    window.location.href = mailtoLink;
  };

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
          backgroundImage: `url(${ContactIntro})`,
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
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontSize: "14px",
              fontFamily: '"Source Sans Pro", sans-serif',
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
            <Typography
              component="span"
              sx={{
                color: "#E0A422",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
              }}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Contact Form + Map ── */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          padding: { xs: "48px 5% 60px", md: "72px 40px 0px" },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Form */}
          <Grid item xs={12} md={6}>
            <AnimatedSection>
              <Box
                sx={{
                  background: "#FAFAFA",
                  borderRadius: "20px",
                  padding: { xs: "32px 24px", md: "40px 36px" },
                  border: "1px solid #eee",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#E0A422",
                    marginBottom: "8px",
                    display: "inline-block",
                    borderBottom: "2px solid #E0A422",
                    paddingBottom: "4px",
                  }}
                >
                  Get In Touch
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "28px" },
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "#1a1a2e",
                    marginBottom: "8px",
                  }}
                >
                  Send us a Message
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: "#888",
                    marginBottom: "28px",
                  }}
                >
                  Fill in the form below and our team will get back to you
                  within 24 hours.
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* Name + Email row */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={inputSx}
                            label="Full Name"
                            placeholder="John Doe"
                            size="small"
                            fullWidth
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={inputSx}
                            label="Email Address"
                            placeholder="john@example.com"
                            size="small"
                            fullWidth
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  {/* Phone + Subject row */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={inputSx}
                            label="Phone (optional)"
                            placeholder="+234 800 000 0000"
                            size="small"
                            fullWidth
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={inputSx}
                            label="Subject"
                            placeholder="Case Consultation"
                            size="small"
                            fullWidth
                            error={Boolean(errors.subject)}
                            helperText={errors.subject?.message}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  {/* Message */}
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        sx={inputSx}
                        label="Message"
                        placeholder="Tell us about your case..."
                        size="small"
                        fullWidth
                        multiline
                        minRows={5}
                        error={Boolean(errors.message)}
                        helperText={errors.message?.message}
                      />
                    )}
                  />

                  {/* Submit */}
                  <Box
                    component="button"
                    type="submit"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "flex-start",
                      background: "#E0A422",
                      color: "#131A34",
                      border: "none",
                      borderRadius: "8px",
                      padding: "12px 36px",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: '"Source Sans Pro", sans-serif',
                      letterSpacing: "0.5px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "#c48d1a",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 15px rgba(224,164,34,0.3)",
                      },
                    }}
                  >
                    Send Message
                  </Box>
                </Box>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={6}>
            <AnimatedSection delay="0.15s">
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #eee",
                  height: "100%",
                  minHeight: { xs: "350px", md: "100%" },
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.0457336053682!2d7.46747401399718!3d9.079522880834443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae5774a6d79%3A0xaf8eea7bb4bb9c0b!2s13%20Parakou%20St%2C%20Wuse%202%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1723039275440!5m2!1sen!2sng"
                  title="Lex Adepts Office Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    minHeight: "350px",
                    display: "block",
                  }}
                />
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;

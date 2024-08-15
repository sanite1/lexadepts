import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";
import { Box } from "@mui/material";
const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        boxSizing: "border-box",
        margin: "0",
      }}
    >
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        style={{ width: "100px", height: "100px" }}
      />
    </Box>
  );
};

export default Loader;

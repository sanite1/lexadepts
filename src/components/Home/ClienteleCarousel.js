// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Box, Typography } from "@mui/material";

// function Carousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Box sx={{ width: "50%", margin: "auto", mt: 4 }}>
//       <Slider {...settings}>
//         <Box>
//           <Typography variant="h6" align="center">
//             Slide 1
//           </Typography>
//           <img
//             src="https://via.placeholder.com/800x400"
//             alt="Slide 1"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </Box>
//         <Box>
//           <Typography variant="h6" align="center">
//             Slide 2
//           </Typography>
//           <img
//             src="https://via.placeholder.com/800x400"
//             alt="Slide 2"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </Box>
//         <Box>
//           <Typography variant="h6" align="center">
//             Slide 3
//           </Typography>
//           <img
//             src="https://via.placeholder.com/800x400"
//             alt="Slide 3"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </Box>
//       </Slider>
//     </Box>
//   );
// }

// export default Carousel;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Box } from "@mui/material";

// function LogoCarousel() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const logos = [
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//     "https://via.placeholder.com/150x100",
//   ];

//   return (
//     <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
//       <Slider {...settings}>
//         {logos.map((logo, index) => (
//           <Box key={index} sx={{ padding: 1 }}>
//             <img
//               src={logo}
//               alt={`Logo ${index + 1}`}
//               style={{ width: "100%", height: "auto" }}
//             />
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// }

// export default LogoCarousel;

import React from "react";
import { Box } from "@mui/material";

const logos = [
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
  "https://via.placeholder.com/150x100",
];

// Generate an array that duplicates the logos to make the scrolling continuous
const infiniteLogos = [...logos, ...logos];

const animationStyle = {
  "@keyframes smoothScroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
  display: "flex",
  animation: "smoothScroll 30s linear infinite",
  width: `${infiniteLogos.length * 100}px`, // Adjust width based on the number of logos
};

function LogoCarousel() {
  return (
    <Box sx={{ width: "80%", overflow: "hidden", margin: "auto", mt: 4 }}>
      <Box sx={animationStyle}>
        {infiniteLogos.map((logo, index) => (
          <Box key={index} sx={{ flex: "0 0 auto", padding: 1 }}>
            <Box
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              sx={{ width: "150px", height: "100px", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LogoCarousel;

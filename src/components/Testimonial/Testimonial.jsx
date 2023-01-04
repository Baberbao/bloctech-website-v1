import React from "react";
import { Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

import bg from "./assets/bg.png";
import t1 from "./assets/sd.PNG";
import t2 from "./assets/sf.png";
import t3 from "./assets/t3.png";

const useStyles = makeStyles((theme) => ({
  slider: {
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
    },
    "& .slick-list": {
      "& .slick-track": {
        display: "flex",
        "& .slick-slide": {
          [theme.breakpoints.down("sm")]: {
            marginRight: "0px",
          },
        },
      },
    },
  },
}));

function Testimonial() {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    nextArrow: false,
    prevArrow: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Box
      pt={{ sm: 7, md: 6 }}
      pb={"90px"}
      sx={{
        // background: `url(${bg})`,
        background:
          "radial-gradient(164.31% 249.62% at 88.6% 0%, #b349a6 5.42%, #66158D 36.23%, #172263 67.22%, #058BAE 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: { sm: "top center", xs: "left" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          m="0px"
          component="h2"
          pt="20px"
          textAlign="center"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          color="white"
          lineHeight={{ xs: "auto", sm: "56px" }}
        >
          Testimonial
        </Box>
        <Box
          component="h3"
          textAlign="center"
          fontSize={{ xs: "20px", sm: "32px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          color="white"
          lineHeight={{ xs: "auto", sm: "40px" }}
        >
          {" "}
          What our clients say about us
        </Box>
        <Slider {...settings} className={classes.slider}>
          {/* <Grid mt="0px" container spacing={5}>
          <Grid item xs={12} md={6} textAlign={"center"}> */}{" "}
          <Box
            textAlign={"center"}
            sx={{
              display: "flex !important ",
              alignItems: "center",
              justifyContent: { md: "flex-start", xs: "center" },
            }}
          >
            <img src={t1} width="80%" alt="testimonial" />
          </Box>
          {/* <Box height={"380px"} px={{ xs: 2, sm: 8 }}>
              <Box
                border="1px solid #E2E5E6"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={{ xs: 3, sm: 5 }}
                height={"100%"}
              >
                <img src={test1} alt="" />
                <Box
                  textAlign="center"
                  my={1}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="secondary.main"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  "The Bloctech team did a great job! Very responsive,
                  accommodating, and patient with every question I had! They are
                  reliable, trustworthy and very easy to work with”.
                </Box>
                <Box
                  mt={2}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={600}
                  letterSpacing="0.1px"
                  color="secondary.light"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  Will Kenny
                </Box>
              </Box>
            </Box> */}
          {/* </Grid>
          <Grid item xs={12} md={6} textAlign="center"> */}
          <Box
            textAlign={"center"}
            sx={{
              display: "flex !important ",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={t2} width="80%" alt="testimonial" />{" "}
          </Box>
          <Box
            mt="-10px"
            textAlign={"center"}
            sx={{
              display: "flex !important ",
              alignItems: "center",
              justifyContent: { md: "flex-end", xs: "center" },
            }}
          >
            <img src={t3} width="80%" alt="testimonial" />{" "}
          </Box>
          {/* <Box height={"380px"} px={{ xs: 2, sm: 8 }}>
              <Box
                border="1px solid #E2E5E6"
                p={{ xs: 3, sm: 5 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height={"100%"}
              >
                <img src={test2} alt="" />
                <Box
                  textAlign="center"
                  my={1}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="secondary.main"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  "Bloctech Solutions provided us with an excellent service, and
                  we are pleased with the results. We were looking for a company
                  to help us with our blockchain project, and one of our
                  partners recommended Bloctech, who checked all our
                  requirements. They were knowledgeable and committed to
                  providing us with the best service possible”.
                </Box>
                <Box
                  mt={2}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={600}
                  letterSpacing="0.1px"
                  color="secondary.light"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  Rev Shawn
                </Box>
              </Box>
            </Box>{" "} */}
          {/* </Grid>
        </Grid> */}
          {/* <Box px={{ xs: 2, sm: 8 }}>
            <Box
              border="1px solid #E2E5E6"
              p={{ xs: 3, sm: 5 }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={test1} alt="" />
              <Box
                textAlign="center"
                my={1}
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="secondary.main"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                "The Bloctech team did a great job! Very responsive,
                accommodating, and patient with every question I had! They are
                reliable, trustworthy and very easy to work with”.
              </Box>
              <Box
                mt={2}
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={600}
                letterSpacing="0.1px"
                color="secondary.light"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                Will Kenny
              </Box>
            </Box>
          </Box>

          <Box px={{ xs: 2, sm: 8 }}>
            <Box
              border="1px solid #E2E5E6"
              p={{ xs: 3, sm: 5 }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={test2} alt="" />
              <Box
                textAlign="center"
                my={1}
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="secondary.main"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                "The Bloctech team did a great job! Very responsive,
                accommodating, and patient with every question I had! They are
                reliable, trustworthy and very easy to work with”.
              </Box>
              <Box
                mt={2}
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={600}
                letterSpacing="0.1px"
                color="secondary.light"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                Rev Shawn
              </Box>
            </Box>
          </Box> */}
        </Slider>
      </Container>
    </Box>
  );
}

export default Testimonial;

import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

import left from "../../../assets/left.png";
import right from "../../../assets/right.png";

import front1 from "../assests/front1.png";
import front2 from "../assests/front2.png";
import front3 from "../assests/front3.png";
import front4 from "../assests/front4.png";
import frontbg from "../assests/frontbg.jpg";

const Carddata = [
  {
    img: front1,
    // title: "Ethereum",
    description:
      "AngularJS is a robust solution for faster front-end development. Therefore,We simplify the development of dynamic web dApps with such a feature-packed JavaScript framework.",
  },
  {
    img: front2,
    // title: "Hyperledger",
    description:
      "BootStrap, utilize an open-source toolkit supports to build a decentralized and responsive websites using HTML, CSS and JS. To maintain consistency among projects when using multiple developers, Bootstrap framework is best.",
  },
  {
    img: front3,
    // title: "Corda",
    description:
      "Since jQuery is SEO friendly, easily integrates with the Visual Studio IDE and promotes simplicity, we can’t deny the significance of it over other frameworks. We extensively take benefits from its features while building dApps for clients.",
  },
  {
    img: front4,
    // title: "Tezos",
    description:
      "React, an open-source JavaScript Library, provides excellent cross-platform support, handles dependencies to build UI for single page applications. It canalso be used to manage the view layer for both web and mobile apps.",
  },
];

const useStyles = makeStyles((theme) => ({
  slider: {
    padding: "50px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      // padding: "10px",
    },
    "& .slick-list": {
      "& .slick-track": {
        display: "flex",
        width: "100%",

        "& .slick-slide": {
          [theme.breakpoints.down("sm")]: {
            marginRight: "10px",
            // mx: "10px",
          },
        },
      },
    },
  },
}));

function Frontend({ openN, setOpenN }) {
  const matches = useMediaQuery("(max-width:700px)");
  const img = useMediaQuery("(max-width:800px)");

  const classes = useStyles();
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={right}
        style={{
          width: matches ? "45px" : "64px",
          height: matches ? "45px" : "64px",
        }}
        className={className}
        onClick={onClick}
        alt=""
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={left}
        style={{
          width: matches ? "45px" : "64px",
          height: matches ? "45px" : "64px",
        }}
        className={className}
        onClick={onClick}
        alt=""
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container maxWidth="md">
        <Box
          component="h2"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          lineHeight={{ xs: "auto", sm: "56px" }}
          color="#fff"
          textAlign="center"
          my={5}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Front-end Development Stack We Follow
        </Box>
      </Container>

      <Slider {...settings} className={classes.slider}>
        {Carddata.map(({ img, title, description }, index) => (
          <Box sx={{ padding: "15px" }}>
            <Box
              sx={{
                background: "#41015F",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                py: "20px",
                px: "10px",
                // width: "300px",
                height: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                // mt="20px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  py: "20px",
                }}
              >
                <img src={img} alt="icons" style={{ marginTop: "16px" }} />
              </Box>
              <Box
                component="p"
                py={2}
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="white"
                textAlign="center"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                {description}
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>

      <Box
        mt={2}
        sx={{
          display: "flex",
          alignitems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setOpenN(true)}
          sx={{
            width: "220px",
            height: "50px",
            // backgroundColor: "white",
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            border: "1px solid #3B3F6D",
            borderRadius: "0px",
            fontSize: matches ? "12px" : "14px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            fontWeight: 700,
            letterSpacing: "0.3px",
            "&:hover": {
              backgroundColor: "white",

              border: "1px solid #3B3F6D",
            },
            mb: "20px",
          }}
        >
          Get a Consultation
        </Button>
      </Box>
    </>
  );
}

export default Frontend;

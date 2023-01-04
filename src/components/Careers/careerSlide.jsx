import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

import left from "../../assets/left.png";
import right from "../../assets/right.png";

const useStyles = makeStyles((theme) => ({
  slider: {
    padding: "20px 20px 20px 40px",
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

function Process() {
  const matches = useMediaQuery("(max-width:700px)");
  const classes = useStyles();
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={right}
        style={{
          width: matches ? "45px" : "64px",
          height: matches ? "45px" : "64px",
          zIndex: "10",
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
          zIndex: "10",
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
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <Box id="process" bgcolor="#F8F9FF" pt={5}>
      <Container maxWidth="xl">
        <Slider {...settings} className={classes.slider}>
          {[1, 2, 3, 4, 5, 6].map((num, i) => {
            return (
              <Box key={i}>
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    background: "white",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src={
                      "data:image/png;base64,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"
                    }
                    style={{
                      minHeight: "180px",
                      width: "90%",
                    }}
                    alt=""
                  />
                  <Box
                    mt={4}
                    // textAlign="center"
                    fontSize={{ xs: "16px", md: "20px" }}
                    fontWeight="bold"
                    letterSpacing="1px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "24px" }}
                  >
                    Netguru Joins Certified B Corporations™
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
}

export default Process;

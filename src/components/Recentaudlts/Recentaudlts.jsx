import React from "react";
import { Box, Container, useMediaQuery, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

import left from "../../assets/left.png";
import right from "../../assets/right.png";

import solarimg from "../../assets/solar.png";
import fileDownload from "js-file-download";
import data from "./assets/Audit1.pdf";
const useStyles = makeStyles((theme) => ({
  slider: {
    margin: "50px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
    },
    "& .slick-list": {
      "& .slick-track": {
        display: "flex",
        "& .slick-slide": {
          // margin: "0px 18px",
          marginRight: "18px",
          [theme.breakpoints.down("sm")]: {
            marginRight: "0px",
          },
        },
      },
    },
  },
}));

const Recentaudlts = () => {
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
          zIndex: "100",
        }}
        className={className}
        onClick={onClick}
        alt=""
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <Box id="products" pt={{ xs: 10, sm: 10 }} my="50px">
      <Container maxWidth="lg">
        <Box
          component="h1"
          textAlign="center"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
          lineHeight={{ xs: "auto", sm: "56px" }}
          mb="50px"
        >
          Most Recent Audits
        </Box>
        <Slider {...settings} className={classes.slider}>
          <Box
            sx={{
              background: "#120319",
              boxShadow: "inset 31px 4px 183px #41015F",
              borderRadius: "5px",
              py: "70px",
              width: "100%",
            }}
          >
            <img
              src={solarimg}
              alt=""
              style={{ width: "40%", margin: "auto" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <a
                style={{ textDecoration: "none" }}
                href="Audit1.pdf"
                target="_blank"
              > */}
              <Button
                onClick={() => {
                  fileDownload(data, "Audit.pdf");
                }}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
                  borderRadius: "6px",
                  fontSize: matches ? "12px" : "14px",
                  textTransform: "capitalize",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  marginRight: "20px",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  },
                  p: 1,
                  mt: "50px",
                }}
              >
                View Audit
              </Button>
              {/* </a> */}
            </Box>{" "}
          </Box>
          <Box
            sx={{
              background: "#120319",
              boxShadow: "inset 31px 4px 183px #41015F",
              borderRadius: "5px",
              py: "70px",
              width: "100%",

              // px:1
            }}
          >
            <img
              src={solarimg}
              alt="solarimg"
              style={{ width: "40%", margin: "auto" }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <a
                style={{ textDecoration: "none" }}
                href="Audit1.pdf"
                target="_blank"
              > */}
              <Button
                onClick={() => {
                  fileDownload(data, "Audit.pdf");
                }}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
                  borderRadius: "6px",
                  fontSize: matches ? "12px" : "14px",
                  textTransform: "capitalize",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  marginRight: "20px",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  },
                  p: 1,
                  mt: "50px",
                }}
              >
                View Audit
              </Button>
              {/* </a> */}
            </Box>
          </Box>
        </Slider>
      </Container>
    </Box>
  );
};

export default Recentaudlts;

{
  /* {data.map(({ title, link }, index) => (
            <Box key={index}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  my={5}
                  fontSize={{ xs: "14px", sm: "18px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="primary.main"
                  textAlign="center"
                >
                  {title}
                </Box>

                <Link style={{ textDecoration: "none" }} to={link}>
                  <Button
                    sx={{
                      width: "140px",
                      height: "40px",
                      backgroundColor: "transparent",
                      border: "1px solid #3B3F6D",
                      borderRadius: "0px",
                      fontSize: matches ? "12px" : "14px",
                      textTransform: "capitalize",
                      color: "#3B3F6D",
                      fontWeight: 700,
                      letterSpacing: "0.3px",
                      "&:hover": {
                        backgroundColor: "#3B3F6D",
                        color: "#fff",
                        border: "1px solid #3B3F6D",
                      },
                    }}
                  >
                    Find Out More
                  </Button>
                </Link>
              </Box>
            </Box>
          ))} */
}

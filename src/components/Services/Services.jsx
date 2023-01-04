import { Box, Button, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

import left from "../../assets/left.png";
import right from "../../assets/right.png";
import { useNavigate } from "react-router-dom";
import c1 from "./assets/1.png";
import c2 from "./assets/2.png";
import c3 from "./assets/3.png";
import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";

import img1 from "./assets/img1.png";
import "./flip.css";
import s1bg from "./assets/s1bg.png";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";

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
            marginRight: "0px",
          },
        },
      },
    },
  },
}));

function Services() {
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width:700px)");
  const img = useMediaQuery("(max-width:800px)");

  const navigate = useNavigate();
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
    <Box>
      <CustomModal open={open} setOpen={setOpen} />
      <Box position={"relative"}>
        <img
          src={img1}
          style={{
            position: "absolute",
            left: "0",
            top: matches ? "-200px" : "-500px",
            zIndex: "1 !important",
            width: img ? "100%" : "60%",
          }}
          alt=""
        />
      </Box>
      <Box bgcolor="#120319" pt={8} id="service">
        <Container maxWidth="lg">
          <Box
            component="h2"
            textAlign="center"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            lineHeight={{ xs: "auto", sm: "40px" }}
            // sx={{
            //   background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            //   backgroundClip: "text",
            //   textFillColor: "transparent",
            // }}
            color="white"
          >
            Services
          </Box>
          {/* <Box
            component="h2"
            textAlign="center"
            fontSize={{ xs: "20px", sm: "32px" }}
            fontWeight={700}
            letterSpacing="0.1px"
            color="white"
            lineHeight={{ xs: "auto", sm: "40px" }}
          >
            At Bloctech, We Offer
          </Box> */}

          {/* <Slider {...settings} className={classes.slider}> */}

          <Grid spacing={4} container justifyContent={"center"} py="40px">
            <Grid item lg={4} sm={5} xs={12}>
              {" "}
              <Box
                pb="20px"
                height="100%"
                textAlign={"center"}
                display="flex !important"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                // mt={{ sm: "30px", xs: "50px" }}
                className="flip"
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundImage:
                      "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    px: "20px",
                    display: "flex",
                    aligItems: "center",
                    justifyContent: "cente",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow:
                        "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                    },
                    transition: "0.3s",
                    borderRadius: "5px",
                  }}
                  // className="back"
                >
                  <Box>
                    <Box py="20px">
                      {" "}
                      <img src={i1} alt="" />{" "}
                    </Box>
                    <Box
                      fontSize={"30px"}
                      fontWeight="700"
                      textAlign={"center"}
                      color="white"
                    >
                      Blockchain Development
                    </Box>
                    <Box
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "white",
                        textAlign: "center",
                        py: "30px",
                      }}
                    >
                      We offer a diverse portfolio in blockchain development,
                      including building blockchain products, smart contracts,
                      provide consultation through whole lifecycle of a project.
                    </Box>

                    <Box mt="0px">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/blockchain-development-services/"
                      >
                        <Button
                          // onClick={() => setOpenN(true)}
                          sx={{
                            textAlign: "center",
                            background:
                              "linear-gradient(202.6deg, #3940DB 11.43%, #A615BD 85.3%)",
                            fontSize: matches ? "14px" : "16px",
                            textTransform: "capitalize",
                            color: "#fff",
                            fontWeight: 700,
                            letterSpacing: "0.3px",
                            my: 3,
                            borderRadius: "5px",
                            px: "20px",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} sm={5} xs={12}>
              {" "}
              <Box
                pb="20px"
                height="100%"
                textAlign={"center"}
                display="flex !important"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                // mt={{ sm: "30px", xs: "50px" }}
                className="flip"
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundImage:
                      "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    px: "20px",
                    display: "flex",
                    aligItems: "center",
                    justifyContent: "cente",
                    transition: " .3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow:
                        "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                    },
                    borderRadius: "5px",
                  }}
                  // className="back"
                >
                  <Box>
                    <Box py="20px">
                      {" "}
                      <img src={i2} alt="" />{" "}
                    </Box>
                    <Box
                      fontSize={"30px"}
                      fontWeight="700"
                      textAlign={"center"}
                      color="white"
                    >
                      Smart Contracts Development & Audit
                    </Box>
                    <Box
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "white",
                        textAlign: "center",
                        py: "30px",
                      }}
                    >
                      For blockchain nodes, dApps, marketplaces, and smart
                      contracts,BlocTech Solutions provide security audits
                      services to reduce the fraud and ensure augmented security
                      protocols.
                    </Box>

                    <Box>
                      <Button
                        onClick={() => setOpen(true)}
                        sx={{
                          textAlign: "center",
                          background:
                            "linear-gradient(202.6deg, #3940DB 11.43%, #A615BD 85.3%)",
                          fontSize: matches ? "14px" : "16px",
                          textTransform: "capitalize",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          my: 3,
                          borderRadius: "5px",
                          px: "20px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "white",
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* <Box
                sx={{
                  backgroundImage: `url(${s1bg}),linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  px: "20px",
                  display: "flex",
                  aligItems: "center",
                  justifyContent: "cente",
                }}
                className="back"
              >
                <Box
                  component="p"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16.911px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  For blockchain nodes, dApps, marketplaces, and smart
                  contracts,BlocTech Solutions provide security audits services
                  to reduce the fraud and ensure augmented security protocols.
                </Box>
              </Box> */}
            </Grid>
            <Grid item lg={4} sm={5} xs={12}>
              {/* <Box width={"100%"}>
                  <img src={c3} width="95%" alt="" />
                </Box> */}
              <Box
                height="100%"
                textAlign={"center"}
                display="flex !important"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                // mt={{ sm: "30px", xs: "50px" }}
                className="flip"
                pb="20px"
              >
                <Box
                  height="100%"
                  sx={{
                    backgroundImage:
                      "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    px: "20px",
                    display: "flex",
                    aligItems: "center",
                    justifyContent: "cente",
                    transition: " .3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow:
                        "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                    },
                    borderRadius: "5px",
                  }}
                  // className="back"
                >
                  <Box>
                    <Box py="20px">
                      {" "}
                      <img src={i3} alt="" />{" "}
                    </Box>
                    <Box
                      fontSize={"30px"}
                      fontWeight="700"
                      textAlign={"center"}
                      color="white"
                    >
                      Dapp Development
                    </Box>
                    <Box
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "white",
                        textAlign: "center",
                        py: "30px",
                      }}
                    >
                      We offer dApp development services to assist startups and
                      established businesses in creating dependable, scalable,
                      and decentralized peer-to-peer applications that are
                      highly scalable and extendable to assist a variety of
                      businesses.
                    </Box>

                    <Box mt="18px">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/dapp-development-company/"
                      >
                        <Button
                          // onClick={() => setOpenN(true)}
                          sx={{
                            textAlign: "center",
                            background:
                              "linear-gradient(202.6deg, #3940DB 11.43%, #A615BD 85.3%)",
                            fontSize: matches ? "14px" : "16px",
                            textTransform: "capitalize",
                            color: "#fff",
                            fontWeight: 700,
                            letterSpacing: "0.3px",
                            my: 3,
                            borderRadius: "5px",
                            px: "20px",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "white",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* <Box
                sx={{
                  backgroundImage: `url(${s1bg}),linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  px: "20px",
                  display: "flex",
                  aligItems: "center",
                  justifyContent: "cente",
                }}
                className="back"
              >
                <Box
                  component="p"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16.911px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  We offer dApp development services to assist startups and
                  established businesses in creating dependable, scalable, and
                  decentralized peer-to-peer applications that are highly
                  scalable and extendable to assist a variety of businesses.
                </Box>
              </Box> */}
            </Grid>
          </Grid>

          {/* </Slider> */}
        </Container>
      </Box>
    </Box>
  );
}

export default Services;

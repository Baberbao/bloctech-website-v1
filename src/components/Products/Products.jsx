import React, { useState } from "react";
import {
  Box,
  Container,
  useMediaQuery,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

import left from "../../assets/left.png";
import right from "../../assets/right.png";
import { Link } from "react-router-dom";

import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";
import p7 from "./assets/p7.png";
import p8 from "./assets/p8.png";
import cardBg from "./assets/cardBg.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png";
import logo9 from "./assets/logo9.png";
import logo10 from "./assets/logo10.png";
import logo11 from "./assets/logo11.png";
import logo12 from "./assets/logo12.png";
import logo13 from "./assets/logo13.png";
import logo14 from "./assets/logo14.png";
import logo15 from "./assets/logo15.png";
import logo16 from "./assets/logo16.png";
import logo17 from "./assets/logo17.png";
import logo18 from "./assets/logo18.png";
import logo19 from "./assets/logo19.png";
import logo20 from "./assets/logo20.png";
import p1bg from "./assets/p1bg.png";
import cardbg2 from "./assets/cardbg2.png";

const useStyles = makeStyles((theme) => ({
  slider: {
    // margin: "50px",
    zIndex: "100 !important",
    [theme.breakpoints.down("sm")]: {
      // marginRight: "20px",
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

const data = [
  {
    title: "Blockchain Development ServicesContract",
    link: "/blockchain-development-services/",
    img: p1bg,
  },
  {
    title: "DAPP DEVELOPMENT COMPANY",
    link: "/dapp-development-company/",
    img: p2,
  },
  {
    title: "Private Blockchain Development Services",
    link: "/private-blockchain-services/",
    img: p3,
  },
  {
    title: "Token Development Services",
    link: "/token-development-services/",
    img: p4,
  },
  {
    title: "P2P Lending Platform Development",
    link: "/p2p-lending-platform-development/",
    img: p5,
  },
  {
    title: "Dao Service and Development",
    link: "/dao-service-and-development-company/",
    img: p6,
  },
  {
    title: "Crypto Wallet Development Services",
    link: "/crypto-wallet-development-service/",
    img: p7,
  },
  {
    title: "Centralized Exchange Development",
    link: "/centralized-exchange-development/",
    img: p8,
  },
  {
    title: "Multichain Development Services",
    link: "/multichain-development-services/",
    img: p5,
  },
];

const cardData = [
  { img: logo1, title: "Ethereum" },
  { img: logo2, title: "Solana" },
  {
    img: logo3,
    title: (
      <>
        Binance <br /> Smart Chain
      </>
    ),
  },
  { img: logo4, title: "Polygon" },
  { img: logo5, title: "Polkadot" },
  { img: logo6, title: "Cosmos" },
  { img: logo7, title: "Avalanche" },
  { img: logo8, title: "Hyperledger" },
  { img: logo9, title: "Curve" },
  { img: logo10, title: "Harmony" },
  { img: logo11, title: "Fantom" },
  { img: logo12, title: "Chain link" },
  { img: logo13, title: "NEAR" },
  { img: logo14, title: "COSMOS" },
  { img: logo15, title: "Cardano" },
  { img: logo16, title: "AXS" },
  { img: logo17, title: "Web 3.0" },
  { img: logo18, title: "Metaverse" },
  { img: logo19, title: "NFTs" },
  { img: logo20, title: "IPFS" },
];

function Products() {
  const matches = useMediaQuery("(max-width:700px)");

  let init = matches ? 4 : 8;

  const [no, setno] = useState(init);
  const classes = useStyles();
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={right}
        style={{
          width: matches ? "45px" : "64px",
          height: matches ? "45px" : "64px",
          zIndex: "10000",
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
          zIndex: "10000",
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
    speed: 2000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <Box
      id="products"
      // pt={{ xs: 10, sm: 10 }}
      pb={10}
      sx={{
        background: "#120319",
        zIndex: "10000 !important",
      }}
    >
      {/* <Container maxWidth="xl">
        <Box
          component="h2"
          pb="70px"
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
        >
          Products
        </Box>
        <Slider {...settings} className={classes.slider}>
          {data.map(({ title, link, img }, index) => (
            <Box key={index} px="20px">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt={{ sm: "0px", xs: "10px" }}
                // mr={{ sm: "0px", xs: "34px" }}
              >
                <Box
                // sx={{ backgroundColor: "#240035"}}
                >
                  <img src={img} width="100%" alt="" />
                </Box>

                <Box
                  component="h4"
                  mt={{ sm: "-130px", xs: "-70px" }}
                  fontSize={{ xs: "10px", sm: "18px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="white"
                  textAlign="center"
                  // ml={{ sm: "80px", xs: "70px" }}
                >
                  {title}
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link style={{ textDecoration: "none" }} to={link}>
                    <Button
                      sx={{
                        textAlign: "center",
                        backgroundColor: "transparent",
                        borderRadius: "0px",
                        fontSize: matches ? "10px" : "14px",
                        textTransform: "capitalize",
                        color: "#4162FF",
                        fontWeight: 700,
                        letterSpacing: "0.3px",

                        my: { sm: 3, xs: 1 },
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#4162FF",
                          border: "1px solid #4162FF",
                        },
                      }}
                    >
                      Find Out More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container> */}

      <Container>
        <Box
          component="h2"
          mt={7}
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          lineHeight={{ xs: "auto", sm: "60px" }}
          color="#fff"
          sx={{
            // background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            // backgroundClip: "text",
            // textFillColor: "transparent",
            width: { xs: "95%", md: "65%" },
            textAlign: "center",
            marginX: "auto",
          }}
        >
          Technologies we Believe in
        </Box>

        <Grid container justifyContent="center" spacing={2} mt={4}>
          {cardData.slice(0, no).map(({ img, title }, index) => (
            <Grid
              key={index + `ids`}
              item
              // p={{ xs: 1, md: 2 }}
              xs={12}
              md={3}
              textAlign="center"
            >
              <Box
                sx={{
                  background: `url(${cardbg2})`,
                  backgroundColor: "#240035",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  py: "20px",
                  px: "10px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: matches ? "column" : "row",
                }}
              >
                <img src={img} alt="icons" style={{ marginTop: "16px" }} />
                <Typography
                  ml={!matches && 2}
                  mt={2}
                  fontSize={{ xs: "16px", sm: "20px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="white"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  textAlign="left"
                >
                  {title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {cardData.length != no && (
          <Box
            mt="30px"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              zIndex: "100 !important",
            }}
          >
            {" "}
            <Button
              onClick={() => setno(no + (cardData.length - no))}
              sx={{
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
                py: 2,
                px: 4,
              }}
            >
              Load more
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Products;

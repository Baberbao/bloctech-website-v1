import React, { useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material";

import "./aboutus.css";
import Contact from "../Contact/Contact";
import arrow from "./assets/arrow.png";
import f1 from "./assets/f1.png";
import f2 from "./assets/f2.png";
import f3 from "./assets/f3.png";
import f4 from "./assets/f4.png";
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";
import { Link } from "react-router-dom";
import Aboutsvg from "./Aboutsvg";
import { Helmet } from "react-helmet-async";

const cardData = [
  {
    img: f1,
    bg: bg1,
    title: "Consistent quality and performance",
  },
  {
    img: f2,
    bg: bg2,
    title: "Providing dependable services",
  },
  {
    img: f3,
    bg: bg3,
    title: "Dedicate to excellence",
  },
  {
    img: f4,
    bg: bg4,
    title: "Rapid application development with application stability",
  },
];

const AboutusDetails = ({ openN, setOpenN }) => {
  const matches1 = useMediaQuery("(max-width: 500px");
  const matches = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BlocTech Solutions",
      alternateName: "BlocTech",
      url: "https://www.bloctechsolutions.com/about-us/",
      logo: "",
    };
    return JSON.stringify(data);
  };

  return (
    <Box pt="100px">
      <Helmet>
        <title>
          Blockchain software development | About Us | BlocTech Solutions
        </title>
        <meta
          name="description"
          content="As a blockchain software development company, we provide blockchain solutions to businesses and assist them with innovative blockchain applications and platforms."
        />
        <meta
          name="title"
          content="Blockchain software development | About Us | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Blockchain software development, Blockchain service provider"
        />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          backgroundColor: `#240035`,
        }}
      >
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              display="flex"
              alignItems="center"
              py={7}
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box
                  textAlign={{ xs: "center", md: "left" }}
                  // pt={5}
                  // pb={matches ? 10 : 24}
                >
                  <Box
                    component="h1"
                    mt={{ xs: 0, md: 8 }}
                    fontSize={{ xs: "25px", sm: "44px" }}
                    fontWeight={700}
                    letterSpacing="0.2px"
                    lineHeight={{ xs: "auto", sm: "56px" }}
                    color="#fff"
                    sx={{
                      background:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    About Us
                  </Box>

                  <Box
                    component="p"
                    m="auto"
                    my={2}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#fff"
                    textAlign="justify"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    width={{ xs: "90%", md: "100%" }}
                  >
                    BlocTech is a stocked Blockchain Consulting and Software
                    Development Company. We offer a wide range of blockchain
                    development services and cryptocurrency solutions
                    development (crypto wallets, exchanges, trading apps, etc).
                    Being early birds of the blockchain revolution, we have
                    gained deep expertise in cryptocurrency development and
                    became a reliable and experienced blockchain development
                    company.We’re specialized in developing decentralized
                    applications (dApps) and delivering blockchain startup
                    companies with consultation to enable them to develop new
                    products or improve existing ones.
                  </Box>
                  <Box mt={3}>
                    <Link
                      to="/blockchain-development-services/"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Button
                        // onClick={() => setOpenN(true)}
                        sx={{
                          width: "220px",
                          height: "50px",
                          // backgroundColor: "white",
                          background:
                            "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
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
                        }}
                      >
                        Our Services
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box textAlign="center">
                  <Aboutsvg />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container>
        <Grid my={3} container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" height="100%">
              <Box
                component="h3"
                py={4}
                width="100%"
                mt="10px"
                pl={4}
                fontSize={{ xs: "20px", sm: "28px" }}
                fontWeight={700}
                letterSpacing="0.3px"
                color="#FFFFFF"
                lineHeight={{ xs: "auto", sm: "22px" }}
                textAlign="left"
                sx={{
                  background: "#41015F",
                  boxShadow: "9px 0px 26px #000000",
                }}
              >
                Problems
              </Box>
              <Box
                sx={{
                  background: "#240035",
                  py: { xs: "20px", sm: "60px" },
                  px: { xs: "30px", sm: "60px" },
                }}
              >
                <ul>
                  <li className="list">
                    Cost is an important concern for customers looking to build
                    apps or develop their ideas
                  </li>
                  <li className="list">
                    Finding the right skillset to develop your ideas is a
                    challenge
                  </li>
                  <li className="list">
                    Maintaining and sustaining product at the early stage of
                    your startup is a hassle
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" height="100%">
              <Box
                component="h3"
                py={4}
                width="100%"
                mt="10px"
                pl={4}
                fontSize={{ xs: "20px", sm: "28px" }}
                fontWeight={700}
                letterSpacing="0.3px"
                color="#FFFFFF"
                lineHeight={{ xs: "auto", sm: "22px" }}
                textAlign="left"
                sx={{
                  background: "#41015F",
                  boxShadow: "9px 0px 26px #000000",
                }}
              >
                Solutions
              </Box>
              <Box
                sx={{
                  background: "#240035",
                  py: { xs: "20px", sm: "72px" },
                  px: { xs: "30px", sm: "60px" },
                }}
              >
                <ul>
                  <li className="list">
                    An all in one web service were we work with clients to bring
                    their ideas to live
                  </li>
                  <li className="list">
                    Save money without breaking the bank or comprising quality
                  </li>
                  <li className="list">
                    Tech support of 50+ skilled developers
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid my={3} container spacing={5}>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box display="flex" justifyContent="flex-start">
              <img
                src={arrow}
                alt="VISION"
                style={{ width: "100%", height: matches ? "350px" : "500px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: matches ? "center" : "start",
              }}
            >
              <Box
                component="h2"
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.1px"
                color="primary.main"
                lineHeight={{ xs: "auto", sm: "40px" }}
                mt={5}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  textTransform: "capitalize",
                }}
              >
                OUR VISION
              </Box>
              <Box sx={{ width: "86%" }}>
                <Box
                  component="p"
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "24px" }}
                  mt={8}
                  display="flex"
                  alignItems={"center"}
                  sx={{
                    textAlign: "justify",
                  }}
                >
                  Our vision is to help companies build innovative software with
                  a team of world class blockchain engineers with an innovative
                  approach to each project, so you can be confident in your
                  success with us. We dedicate our resources to build next-gen
                  applications, powerful products and blockchain solutions
                  across the globe. We can help take special care of your
                  blockchain project needs. With a credible group of research
                  engineers, designers, blockchain developers, smart contract
                  auditors, and product managers- all having technical expertise
                  in blockchain in our arsenal. We Are Relentlessly Working To
                  Contribute To The Ever-Evolving World Of Web3 Technology.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          component="h2"
          className="linbarcont"
          pt={{ xs: 0, md: 7 }}
          m="auto"
          my={2}
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          lineHeight={{ xs: "auto", sm: "40px" }}
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textTransform: "capitalize",
          }}
        >
          OUR GOALS
        </Box>
        <Box
          component="p"
          pt={{ xs: 0, md: 2 }}
          m="auto"
          my={2}
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
        >
          Our goals are directly related to your results
        </Box>

        <Grid
          container
          justifyContent="center"
          display="flex"
          spacing={2}
          my={4}
        >
          {cardData.map(({ img, title, bg }, index) => (
            <Grid key={index + `ids`} item xs={12} md={3} textAlign={"center"}>
              <Box
                sx={{
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  py: "20px",
                  px: "10px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={img} alt="icons" style={{ marginTop: "16px" }} />
                  <Typography
                    variant="h3"
                    fontSize={{ xs: "16px", sm: "23px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="white"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="center"
                    py="20px"
                    px="10px"
                  >
                    {title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Contact />
    </Box>
  );
};

export default AboutusDetails;

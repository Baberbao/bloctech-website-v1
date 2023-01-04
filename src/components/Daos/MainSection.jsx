import React from "react";
import { Box, Container, Grid, Button, useMediaQuery } from "@mui/material";
import dao2 from "./assets/dao2.png";
import daoimg from "./assets/daoimg.png";
import Daosvg from "./Daosvg";
import { Helmet } from "react-helmet-async";
import dao from './assets/daomain.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainSection({ setOpenN }) {
  const matches = useMediaQuery("(max-width:700px)");

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/dao-service-and-development-company/",
      },
      headline: "Dao Service and Development",
      description:
        "We, at BlocTech Solutions, challenge centralized businesses to be overlooked by converting them into decentralized businesses with DAO development services.",
      image: "",
      author: {
        "@type": "",
        name: "",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const matches1 = useMediaQuery("(max-width: 500px");

  return (
    <Box pt={{ sm: "95px", xs: "79px" }}>
      <Helmet>
        <title>DAO Service and Development company | BlocTech Solutions</title>
        <meta
          name="description"
          content="Being a dao development company, we integrate the full structure of decentralized autonomous organizations and satisfy our clients with the best dao services.s"
        />
        <meta
          name="title"
          content="DAO Service and Development company | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta name="keywords" content="dao development company, dao service" />

        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          background: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
        }}
      >
        <Container>
          <Grid container spacing={2} py={8} display="flex" alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Box
                  component="h1"
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
                  Dao Service and Development
                </Box>

                <Box
                  component="body1"
                  m="auto"
                  my={2}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="#fff"
                  textAlign={{ xs: "center", sm: "justify" }}
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  width={{ xs: "90%", md: "100%" }}
                >
                  We, at BlocTech Solutions, challenge centralized businesses to
                  be overlooked by converting into decentralized businesses with
                  DAO development services. We have developed top-level
                  functionalities with market needed features for the DAO
                  development to provide a single, secure, and feature-rich
                  shared system. Our blockchain experts will help you to refine
                  your offering and suggest the most suitable tech approach.
                </Box>
              </Box>
              <Box mt={3}>
                <Button
                  onClick={() => setOpenN(true)}
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
                  Get Your App Today
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                textAlign={"center"}
              // display="flex"
              // justifyContent={{ md: "flex-end", xs: "center" }}
              >
                {/* <Daosvg /> */}
                {/* <img
                  src={dao}
                  width={matches1 ? "100%" : "100%"}
                  alt="DAO Blockchain Development"
                />*/}
                <LazyLoadImage
                  src={dao}
                  width={matches1 ? "100%" : "100%"}
                  alt="DAO Blockchain Development" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={5} my={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Box height="100%">
              {/* <img src={daoimg} height="100%" width="100%" alt="daoimg" /> */}
              <LazyLoadImage
                src={dao}
                height="100%" width="100%"
                alt="DAO Blockchain Development" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              component="h1"
              fontSize={{ xs: "25px", sm: "44px" }}
              fontWeight={700}
              letterSpacing="0.2px"
              lineHeight={{ xs: "auto", sm: "56px" }}
              color="#fff"
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              BlocTech Solutions Professional DAO Blockchain Development
            </Box>
            <Box
              component="body1"
              m="auto"
              my={2}
              fontSize={{ xs: "13px", sm: "16px" }}
              fontWeight={400}
              letterSpacing="0.3px"
              color="#fff"
              textAlign={{ xs: "center", sm: "justify" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
              width={{ xs: "90%", md: "100%" }}
            >
              Blockchain has given us a single, secure shared system that comes
              with multiple rich features. DAO blockchain development is a
              cost-effective method that addresses the challenges faced by
              traditional centralized businesses. Learn more about protecting
              the interests of your business with DAO blockchain development
              with BlocTech Solutions Solutions.
            </Box>
            <Box mt={3}>
              <Button
                onClick={() => setOpenN(true)}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  border: "1px solid #3B3F6D",
                  borderRadius: "0px",
                  fontSize: matches ? "12px" : "14px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  height: "42px",
                  "&:hover": {
                    backgroundColor: "white",
                    border: "1px solid #3B3F6D",
                  },
                  px: 3,
                }}
              >
                Get a Quote
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} my={12}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              component="h1"
              fontSize={{ xs: "25px", sm: "44px" }}
              fontWeight={700}
              letterSpacing="0.2px"
              lineHeight={{ xs: "auto", sm: "56px" }}
              color="#fff"
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Introduction to DAO
            </Box>
            <Box
              component="body1"
              m="auto"
              my={2}
              fontSize={{ xs: "13px", sm: "16px" }}
              fontWeight={400}
              letterSpacing="0.3px"
              color="#fff"
              textAlign={{ xs: "center", sm: "justify" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
              width={{ xs: "90%", md: "100%" }}
            >
              A Decentralized Autonomous Organization or DAO is a transparent
              and autonomous community led entity without any central authority.
              This means that a DAO is governed by all the members of a project
              equally and all critical decisions are taken collectively by them.
              <br />
              <br />A DAO can be created by numerous crypto wallets that are
              controlled by either organizations or individuals. All the moments
              are executed voa code allows the management of assets and votes
              without having to undergo traditional banking and legal
              formalities.
            </Box>
            {/* <Box mt={3} justifyContent={{ xs: "center", sm: "left" }}>
              <Button
                onClick={() => setOpenN(true)}
                startIcon={<WhatsAppIcon />}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  border: "1px solid #3B3F6D",
                  borderRadius: "0px",
                  fontSize: matches ? "10px" : "14px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  height: "42px",
                  "&:hover": {
                    backgroundColor: "white",
                    border: "1px solid #3B3F6D",
                  },
                  px: 2,
                }}
              >
                Connect to Whatsapp
              </Button>
              <Button
                startIcon={<TelegramIcon />}
                onClick={() => setOpenN(true)}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  border: "1px solid #3B3F6D",
                  borderRadius: "0px",
                  fontSize: matches ? "10px" : "14px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  height: "42px",
                  "&:hover": {
                    backgroundColor: "white",
                    border: "1px solid #3B3F6D",
                  },
                  px: 2,
                  ml: 2,
                }}
              >
                Connect to telegram
              </Button>
            </Box> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              {/* <img
                src={dao2}
                height={matches ? "100%" : "450px"}
                width="100%"
                alt="dao2"
              /> */}
              <LazyLoadImage
                src={dao2}
                height={matches ? "100%" : "450px"}
                width="100%"
                alt="dao2" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MainSection;

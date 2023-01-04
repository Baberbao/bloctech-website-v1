import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Architecture from "./Architecture";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
import card6 from "./assets/card6.png";
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";
import bg5 from "./assets/bg5.png";
import bg6 from "./assets/bg6.png";
import bg from "./assets/bg.png";

// import archi from "./assets/bg6.png";
import Bloctechsvg from "./Bloctechsvg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const data = [card1, card2, card3, card4, card5, card6];

const Carddata = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    link: "/private-blockchain-services/",
    title: "Private blockchain networks",
    description:
      "Build private and controlled participants network, execute the consensus protocol to decide the mining rights and rewards, and maintain the shared ledger.",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Blockchain Consulting Services",
    link: "/blockchain-consulting-services/",
    description:
      "Get encrypted peer-to-peer apps with no single point of failure and zero downtime and get rid of data breach and hacking attempt.",
  },
  {
    img: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Centralized Exchange ",
    link: "/centralized-exchange-development/",
    description:
      "With smart contracts ensure protocols that guarantee the integrity of multi-party agreements and automatically enforce fixed obligations.",
  },

  {
    img: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "Crypto wallets",
    link: "/crypto-wallet-development-service/",
    description:
      "Get a physical medium or a device to store public and private keys for cryptocurrency transactions.",
  },
];

const Blockchainservices = ({ openN, setOpenN }) => {
  const matches = useMediaQuery("(max-width:700px)");
  const matches1 = useMediaQuery("(max-width: 500px");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blockchain-development-services/",
      },
      headline: "Blockchain Development Services",
      description:
        "Blockchain development services help create decentralized blockchain networks that provide increased traceability and security of data and transactions.",
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
  return (
    <Box
      pt={{ md: "95px", xs: "79px" }}
      pb={{ md: "100px", xs: "79px" }}
      sx={{
        backgroundColor: "black",
      }}
    >
      <Helmet>
        <title>Blockchain Development Services | BlocTech Solutions</title>
        <meta
          name="description"
          content="we provide Blockchain development services, we work on Data security and traceability, and help organizations to build credible and sustainable blockchain solutions."
        />
        <meta
          name="title"
          content="Blockchain Development Services | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Blockchain development services, Blockchain developmentsss"
        />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          background: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: { sm: "center", xs: "left" },
          // width: "100%",
          // height: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} py={6} display="flex" alignItems="center">
            <Grid item md={6} xs={12} order={{ xs: 2, md: 1 }}>
              <Box sx={{}}>
                <Box
                  textAlign={{ xs: "center", md: "left" }}
                  fontSize={{ xs: "25px", sm: "44px" }}
                  fontWeight={700}
                  letterSpacing="0.2px"
                  mb={3}
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  lineHeight={{ xs: "auto", sm: "56px" }}
                  component="h1"
                >
                  Blockchain Development Services
                  {/* WAQAS is a KING of Blocteck Slutions */}
                </Box>

                <Box
                  textAlign={{ xs: "justify", md: "left" }}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={400}
                  color="white"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                  component="p"
                >
                  Blockchain development services help create decentralized
                  blockchain networks that provide increased traceability and
                  security of data and transactions. A software development
                  company with several years of experience, BlocTech Solutions
                  offers end-to-end blockchain application development services
                  to help product companies and non-IT enterprises build
                  reliable blockchain solutions.
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
                  Get your Blockchain Product
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
              // display="flex"
              // justifyContent={{ md: "flex-end", xs: "center" }}
              >
                {/* <Bloctechsvg /> */}
                <img src={bg} alt="" width={matches1 ? "100%" : "80%"} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
          }}
        >
          <Typography
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              fontFamily: "Mulish",
              my: 5,
            }}
            textAlign={"center"}
            fontSize={{ xs: "20px", sm: "33px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            lineHeight={{ xs: "auto", sm: "40px" }}
            component="h2"
          >
            BlocTech Delivers Blockchain Solutions
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {Carddata.map(({ img, title, description, link }, index) => (
              <Grid
                key={index + `ids`}
                item
                p={{ xs: 1, md: 2 }}
                xs={12}
                md={4}
                textAlign={"center"}
              >
                <Box sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      background: img,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      py: 2,
                      px: 4,
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "5px",
                    }}
                  >
                    <Box
                      // mt="20px"
                      fontSize={{ xs: "16px", sm: "23px" }}
                      fontWeight={700}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      textAlign="center"
                      component="h3"
                    >
                      {title}
                    </Box>
                    <Box
                      py={2}
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      component="body1"
                    >
                      {description}
                    </Box>

                    <Link style={{ textDecoration: "none" }} to={link}>
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
              </Grid>
            ))}
          </Grid>
        </Box>

        <Architecture openN={openN} setOpenN={setOpenN} />
      </Container>
    </Box>
  );
};

export default Blockchainservices;

import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import bg from "./assets/bridgeBg.png";
import feature from "./assets/bridgeFeature.png";
import card1 from "./assets/bridgeCard1.png";
import card2 from "./assets/bridgeCard2.png";
import card3 from "./assets/bridgeCard3.png";
import card4 from "./assets/bridgeCard4.png";
import cardbg from "./assets/bridgeCardBg.png";
import cardDiamond1 from "./assets/cardDiamond1.png";
import cardDiamond2 from "./assets/cardDiamond2.png";
import cardDiamond3 from "./assets/cardDiamond3.png";
import cardDiamond4 from "./assets/cardDiamond4.png";
import cardDiamond5 from "./assets/cardDiamond5.png";
import multichainimg from "./assets/multichainimg.png";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    alt: "Lightweight Financial Systems",
    img: card1,
    title: "Lightweight Financial Systems",
    text: "We develop and deploy redeemable asset solutions using Multichain features like real-time automatic reconciliation for crowdfunding, loyalty points, local currencies, and direct peer-to-peer asset trading services. We also create internal accounting systems to streamline the control of funds with minimum cost and greater efficiency",
  },

  {
    alt: "Provenance Tracking",
    img: card2,
    title: "Provenance Tracking",
    text: "We provide digital token issuance services for end-to-end tracking of high-value items like luxury goods and pharmaceuticals and documentation of bills and letters of credit. The digital tokens act as transaction authenticators and provide blockchain features like decentralized trust, immutability, and no intermediary",
  },
  {
    alt: "Interorganizational Record Keeping",
    img: card3,
    title: "Interorganizational Record Keeping",
    text: "We develop shared databases for recording and notarizing inter-organizational record, and auditing communications between two or more institutions with unencrypted, encrypted, and hashed data. They are accompanied with shared digital audit trail, timestamping, digital signatures and a round robin consensus",
  },
  {
    alt: "Multiparty Aggregation",
    img: card4,
    title: "Multiparty Aggregation",
    text: "We develop shared internal databases which multiple parties can use to efficiently exchange verification data and avoid duplicate work. Our solutions enable multiple parties to list data in a collectively managed record system and merge information from various separate sources",
  },
];

const cardData = [
  {
    img: cardDiamond1,
    title: "MultiChain Explorer",
    description:
      "Web-based blockchain browser for tracking activities on the network with advanced configuration options.",
  },
  {
    img: cardDiamond2,
    title: "MultiChain Web Demo",
    description:
      "Web interface for nodes to provide intuitive front-end features with no additional configuration setup.",
  },
  {
    img: cardDiamond3,
    title: "Docker-multichain",
    description:
      "Open source Docker development for a standard 3-node private blockchain setup provided by Kunstmaan Labs.",
  },
  {
    img: cardDiamond4,
    title: "YobiChain",
    description:
      "Private blockchain ecosystem for a test environment with development tools, database, and web and FTP server.",
  },
  {
    img: cardDiamond5,
    title: "Libraries",
    description:
      "Different libraries to enhance the development process, like C#, GO, Java, PHP, Python, Ruby, and JavaScript (Node.JS).",
  },
];

function MultiChainBridge({ openN, setOpenN }) {
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
          "https://www.bloctechsolutions.com/multichain-development-services/",
      },
      headline: "Multichain Development Services",
      description:
        "We, at BlocTech Solutions, enables private business and enterprises to establish Private Blockchains that can be used within an organization for facilitating financial transactions.",
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
    <Box pt={{ sm: "95px", xs: "79px" }}>
      <Helmet>
        <title>Multichain Development Services | BlocTech Solutions</title>
        <meta
          name="description"
          content="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        />
        <meta
          name="title"
          content="Multichain Development Services | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="multichain development services, multichain blockchain development"
        />

        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          backgroundImage: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
          // backgroundPosition: { sm: "center", xs: "left" },
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              py={10}
              display="flex"
              alignItems="center"
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box
                  textAlign={{ xs: "center", md: "left" }}
                // pt={5}
                // pb={matches ? 10 : 24}
                >
                  <Box
                    // pt={{ xs: 0, md: 10 }}
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
                    Multichain Development Services
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
                    We, at BlocTech Solutions, enables private business and
                    enterprises to establish Private Blockchains that can be
                    used within an organization for facilitating financial
                    transactions. A full-fledged Multichain network is capable
                    of conducting as many as 1,000 transactions per second. It
                    provides a simple API and command-line interface to the
                    developers that helps set up and preserve the chain.
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
                      Get Free Assessment Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  display="flex"
                  justifyContent={{ md: "flex-end", xs: "center" }}
                >
                  {/* <img
                    src={multichainimg}
                    width={matches1 ? "100%" : "80%"}
                    alt="multichainimg"
                  />{" "} */}

                  <LazyLoadImage
                    src={multichainimg}
                    width={matches1 ? "100%" : "80%"}
                    alt="multichainimg" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box
          component="h3"
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
          Key Features of MultiChain
        </Box>
        <Box
          sx={{
            // background: "#240035",
            py: { xs: "20px", sm: "60px" },
            px: { xs: "30px", sm: "60px" },
          }}
        >
          <ul>
            <li className="list">
              Allows users to authorize and verify an extensively large number
              of assets on a Blockchain-based ledger
            </li>
            <li className="list">
              Get support for multi-asset and multi-party transactions.
            </li>
            <li className="list">
              Provides a permissioned environment for the users to connect at
              the enterprise level
            </li>
            <li className="list">
              With finely tuned permissions, the entities can grant access to
              operate within the Blockchain (public or private)
            </li>
            <li className="list">
              Provides requisite support for data sharing, archiving, data
              encryption and timestamping
            </li>
            <li className="list">
              Offers a lightning fast development process
            </li>
            <li className="list">
              Users can quickly establish new Blockchains and operate
              efficiently with a permissioned network
            </li>
          </ul>
        </Box>
        <Box width="80%" sx={{ margin: "auto" }}>
          {/* <img src={feature} alt="" width="100%" /> */}
          <LazyLoadImage
            src={feature} alt="" width="100%" />
        </Box>

        <Box
          component="h3"
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
          Our MultiChain application development services
        </Box>
        <Box
          component="p"
          pt={{ xs: 0, md: 2 }}
          m="auto"
          my={2}
          mx={4}
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
        >
          We develop applications using MultiChain to improve enterprise
          processes and provide authority to connect external entities with the
          developed network
        </Box>

        <Box>
          {data.map(({ img, title, text, alt }, index) => (
            <Grid container>
              <Grid item sm={4} xs={12}>
                <Box>
                  {/* <img
                    src={img}
                    alt={alt}
                    width="100%"
                    height="100%"
                    style={{
                      marginLeft: !matches && "30px",
                      margin: matches && "auto",
                    }}
                  /> */}

                  <LazyLoadImage
                    src={img}
                    alt={alt}
                    width="100%"
                    height="100%"
                    style={{
                      marginLeft: !matches && "30px",
                      margin: matches && "auto",
                    }} />
                </Box>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Box
                  mt={3.3}
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={{ sm: "start", xs: "center" }}
                  sx={{
                    background: "#240035",
                    height: "81%",
                    px: { sm: "30px", xs: "10px" },
                  }}
                >
                  <Typography
                    variant={"h3"}
                    py={4}
                    sx={{
                      fontWeight: 700,
                      fontSize: { sm: "28px", xs: "20px" },
                      color: "white",
                      textAlign: { sm: "start", xs: "center" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Box py={3} color="#fff" component={"p"}>
                    {text}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>

        <Box
          component="h1"
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
            width: "70%",
          }}
        >
          Tools and Libraries We Use for MultiChain application development
        </Box>
        <Box
          component="p"
          pt={{ xs: 0, md: 2 }}
          m="auto"
          my={2}
          // mx={4}
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
          width="75%"
          margin="auto"
        >
          Our developers analyze remains up to date with best market practices,
          and don’t hesitate to upgrade their development tools to meet custom
          solution needs with MultiChain’s advanced tools and libraries.
        </Box>

        <Grid
          container
          justifyContent="center"
          display="flex"
          spacing={2}
          mt={4}
        >
          {cardData.map(({ img, title, description }, index) => (
            <Grid
              mt={7}
              key={index + `ids`}
              item
              xs={12}
              md={4}
              textAlign={"center"}
            >
              <Box
                sx={{
                  background: `#41015F`,
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
                <Box position={"relative"}>
                  <img
                    src={img}
                    className="imgspin"
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, 0)",
                      marginTop: "-85px",
                    }}
                    alt=""
                  />
                </Box>
                <Typography
                  mt={12}
                  fontSize={{ xs: "20px", sm: "28px" }}
                  sx={{
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  {title}
                </Typography>
                <Box
                  mt={4}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="white"
                  mx={3}
                  textAlign="center"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  {description}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

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
              my: 4,
            }}
          >
            Get Free Assessment Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default MultiChainBridge;

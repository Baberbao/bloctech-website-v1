import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import TokenTypes from "./TokenizationTypes";

import React, { useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import icon1 from "./TokenImg/chip.svg";
import icon2 from "./TokenImg/debt.svg";
import icon3 from "./TokenImg/secure-data.svg";
import icon4 from "./TokenImg/tokenicon.svg";
import icon5 from "./assets/s1.png";
import icon6 from "./assets/s2.png";
import icon7 from "./assets/s3.png";
import icon8 from "./assets/s4.png";
import timg from "./assets/timg.png";

import token from "./TokenImg/token.jpg";

import tokenImg from "./assets/TokenImg.png";
import bgMulti from "./assets/bgMulti.jpg";

import Tokensvg from "./Tokensvg";
import { Helmet } from "react-helmet-async";

const Tokendata = [
  {
    title: "ICO Token Platform",
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    text: "Utility tokens are built as a method of fundraising for any entity. The tokens can be built on various blockchain platforms such as EOS, Hyperledger, Stellar, etc. or on tailor-made blockchain platform. Non-fungible utility tokens can also be built in order to have a unique identity which can’t be traded for other tokens.",
  },
  {
    title: "Security Token Platform",
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    text: "Security Tokens are either backed up crypto bonds/shares/assets. The tokens can be built on various existing blockchain platforms, depending on the business needs; or can also be built on a custom-made Blockchain platform.",
  },
  {
    title: "Asset Tokenization Platform",
    img: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    text: "The tokens are backed up assets such as real estate property, art, gold, etc. The tokens can be created either by leveraging the existing blockchain platforms such as Ethereum, Hyperledger, etc. or on custom-built blockchain platform.",
  },
  {
    title: "Non-Fungible Tokenization Platform (NFT)",
    img: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    text: "NFT allows the user to tokenize their unique assets like art, games assets, virtual land, accessories, and so on. The unique tokenization platform introduces various opportunities to create NFT which is under evolution. The NFT enables the creators to tokenize their unique creations and collectibles to NFTs and raise their asset value in the NFT marketplace.",
  },
];
const platformdata = [
  {
    alt: "Ethereum",
    title: "Ethereum",
    img: `${icon5}`,
    bg: bgMulti,
    text: "Ethereum platform offers an open-source blockchain with SDK functionality. The tokens created in this platform can be either ERC20/ERC721 compliant. Non-fungible tokens are built on ERC721 token type. At BlocTech Solutions, we build smart contracts to optimize gas prices.",
  },
  {
    alt: "Quorum",
    title: "Quorum",
    img: `${icon6}`,
    bg: bgMulti,
    text: "An enterprise version of Ethereum, the Quorum Blockchain is an ideal blockchain for applications which requires high speed and high throughput and help in the keeping the transactions private within permissioned group and adopted in the financial industry.",
  },
  {
    alt: "Hyperledger",
    title: "Hyperledger",
    img: `${icon7}`,
    bg: bgMulti,
    text: "We develop peer-to-peer Blockchain network on the Hyperledger composer that offers transparency, security, enables collaboration, scalability, etc. The solution can be deployed across various industries and organizations that require a personalized blockchain.",
  },
  {
    alt: "Stellar",
    title: "Stellar",
    img: `${icon8}`,
    bg: bgMulti,
    text: "We develop a blockchain on Stellar to trade across borders in no time, between any pair of currencies. The tokens built on this platform are “Lumen” compliant. This platform is more banking-sector friendly, providing a cost-effective and flexible mode of expansion.",
  },
];

const Tokenization = ({ openN, setOpenN }) => {
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
        "@id": "https://www.bloctechsolutions.com/tokenization-service/",
      },
      headline: "Tokenization services",
      description:
        "Security is critical in the blockchain space. We, at BlocTech Solutions, provide a comprehensive smart contract audit service that helps everyone from startups to enterprises launch and maintain their Ethereum blockchain applications.",
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
        <title>Custom Tokenization service | BlocTech Solutions</title>
        <meta
          name="description"
          content="We are providing a tokenization service. BlocTech solutions as a tokenization service provider brings custom token development and full assistance with tokenization platforms."
        />
        <meta
          name="title"
          content="Custom Tokenization service | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="tokenization service, tokenization service provider"
        />

        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          backgroundImage: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
          // backgroundPosition: { sm: "bottom", xs: "left" },
          // backgroundSize: { sm: "cover", xs: "left" },
          // backgroundRepeat: "no-repeat",
          // py: { sm: 15, xs: "100px" },
        }}
      >
        <Container>
          <Box>
            <Grid container spacing={2} py={10}>
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Box
                    component={"h1"}
                    // pt={{ xs: 0, md: 10 }}
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
                    Tokenization services
                  </Box>

                  <Box
                    component="p"
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
                    Security is critical in the blockchain space. We, at
                    BlocTech Solutions, provide comprehensive smart contract
                    audit service helps everyone from startups to enterprises
                    launch and maintain their Ethereum blockchain applications.
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
                        "&:hover": {
                          backgroundColor: "white",

                          border: "1px solid #3B3F6D",
                        },
                        py: 2,
                        px: 4,
                      }}
                    >
                      Get Free Assessment Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                // display="flex"
                // justifyContent={{ md: "flex-end", xs: "center" }}
                >
                  {/* <Tokensvg /> */}
                  <img
                    src={timg}
                    width={matches1 ? "100%" : "80%"}
                    alt="platform"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box>
          <Typography
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="#3B3F6D"
            lineHeight={{ xs: "auto", sm: "56px" }}
            my="50px"
            component="h1"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            Tokenization Platform Development
          </Typography>
          <Typography
            variant="h3"
            textAlign="center"
            my={4}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="#fff"
            letterSpacing="0.3px"
            lineHeight="22px"
            px={{ xs: 1, sm: 5 }}
          >
            Technology is transcending a new path in terms of trading &
            securities ecosystems, by adapting to Blockchain technology. The
            birth of crypto tokens has so happened, just to convert illiquid
            assets to liquids. The crypto tokens can be tethered to securities
            such as crypto bonds/equity shares/assets.
          </Typography>
          <Typography
            variant="h3"
            textAlign="center"
            my={4}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="#fff"
            letterSpacing="0.3px"
            lineHeight="22px"
            px={{ xs: 1, sm: 5 }}
          >
            BlocTech Solutions, with its unparalleled track record, offers a
            feature-rich compliant platform for digitizing & liquidating assets
            on the blockchain while ensuring the legal compliance of securities’
            tokens.
          </Typography>
        </Box>
        <Box mb={8}>
          <Box
            component="h2"
            textAlign="center"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="#3B3F6D"
            lineHeight={{ xs: "auto", sm: "56px" }}
            my={8}
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            Types of Tokenization Platforms
          </Box>

          <Box pt={5} pb={10}>
            <TokenTypes openN={openN} setOpenN={setOpenN} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => setOpenN(true)}
                sx={{
                  height: "50px",
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  borderRadius: "0px",
                  fontSize: { xs: "12px", md: "14px" },
                  color: "#fff",
                  letterSpacing: "0.3px",
                  textTransform: "Capitallize",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    color: "#3B3F6D",
                    border: "1px solid #3B3F6D",
                  },
                }}
              >
                <WhatsAppIcon sx={{ mr: "5px" }} /> Connect to Whatsapp
              </Button>
            </Box>
            &nbsp; &nbsp;
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => setOpenN(true)}
                sx={{
                  height: "50px",
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  borderRadius: "0px",
                  fontSize: { xs: "12px", md: "14px" },
                  color: "#fff",
                  letterSpacing: "0.3px",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    color: "#3B3F6D",
                    border: "1px solid #3B3F6D",
                  },
                }}
              >
                <TelegramIcon sx={{ mr: "5px" }} /> Connect to Telegram
              </Button>
            </Box>
          </Box>
        </Box>
        <Grid container mt="50px">
          <Grid item md={6} xs={12}>
            <img src={tokenImg} alt="Tokenize" width="90%" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography
                variant="h2"
                fontSize={{ xs: "20px", sm: "32px" }}
                fontWeight={700}
                letterSpacing="0.1px"
                color="#3B3F6D"
                my={4}
                lineHeight={{ xs: "auto", sm: "40px" }}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  textAlign: "left",
                  fontFamily: "Mulish",
                }}
              >
                Why Tokenize?
              </Typography>
              <Typography
                variant="p"
                my={4}
                fontSize={{ xs: "12px", sm: "16px" }}
                fontWeight={400}
                color="#fff"
                letterSpacing="0.3px"
                lineHeight="22px"
              >
                Minimalism is in order: Tokenization of Securities makes things
                easier, faster and radically upgradable for the traditional
                market, thereby making the trading lives of investors easy,
                efficient and cost-effective.
              </Typography>
              <Typography
                my={2}
                fontSize={{ xs: "12px", sm: "16px" }}
                fontWeight={400}
                color="#fff"
                letterSpacing="0.3px"
                lineHeight="22px"
              >
                Some of the advantages include:
              </Typography>
              <Box>
                <ul className="">
                  <li>Legal Compliance</li>
                  <li>Programmable Securities</li>
                  <li>Increased Liquidity</li>
                  <li>24*7 Market Accessibility</li>
                  <li>Fractionalization of Ownership</li>
                  <li>No Intermediaries</li>
                  <li>Cost-effective</li>
                  <li>Transparency</li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={20}>
          <Typography
            variant="h1"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="#3B3F6D"
            lineHeight={{ xs: "auto", sm: "56px" }}
            my="50px"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            What is Digital Asset Platform?
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            my={4}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="#fff"
            letterSpacing="0.3px"
            lineHeight="22px"
            px={{ xs: 1, sm: 5 }}
          >
            A tokenizer is a tokenization platform, in order to issue utility
            tokens, security tokens, or asset tokens. It is imperative to use an
            end-to-end integrated platform with built-in security & regulatory
            compliance, incl. of KYC/AML automation, neoteric technology to draw
            smart contracts, et al.
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            my={4}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="#fff"
            letterSpacing="0.3px"
            lineHeight="22px"
            px={{ xs: 1, sm: 5 }}
          >
            BlocTech Solutions provides Tokenizer/Tokenization as a Service
            (TaaS). As one of the leading pioneers in the Blockchain development
            landscape, we have the expertise to cater to your requirements by
            establishing a custom-made ethereum/hyperledger/stellar or to your
            own customized blockchain tokenization platform.
          </Typography>
          <Typography
            variant="h2"
            mt={10}
            fontSize={{ xs: "20px", sm: "32px" }}
            fontWeight={700}
            letterSpacing="1.3px"
            color="#fff"
            // my={4}
            lineHeight={{ xs: "auto", sm: "40px" }}
          >
            Some of the advantages include:
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ul className="LineSet">
                <li>End-to-end platform development</li>
                <li>Legal compliance</li>
                <li>Lifecycle management</li>
                <li>Unique identification of tokens</li>
                <li>Globalized KYC/AML Verification</li>
                <li>Multi-ledger Security Token Development</li>
              </ul>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul className="LineSet">
                <li>
                  Crypto/native tokens or fiat currency as a payment gateway
                </li>
                <li>Automated Compliance with Blockchain & Smart Contracts</li>
                <li>Automated Policy & Regulations with Smart Contracts</li>
                <li>Automated Reporting to Regulatory Authorities</li>
                <li>
                  Tokens issued have an interoperability layer for exchanges
                  across the world
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
        <Box mb={8}>
          <Box
            component="h1"
            textAlign="center"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="#3B3F6D"
            lineHeight={{ xs: "auto", sm: "56px" }}
            my={8}
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            Blockchains for Tokenization Platform
          </Box>

          <Grid container spacing={10}>
            {platformdata.map(({ title, text, bg, img, alt }) => {
              return (
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    height="100%"
                    // style={{backgroundColor: "gray"}}

                    sx={{
                      background: "#41015F",
                      backgroundPosition: { sm: "bottom", xs: "left" },
                      backgroundSize: { sm: "cover", xs: "left" },
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Box textAlign="center">
                      <img src={img} alt={alt} />
                    </Box>
                    <Typography
                      variant="h3"
                      py={3}
                      fontSize={{ xs: "16px", md: "20px" }}
                      fontWeight="700"
                      textAlign="center"
                      color="white"
                    >
                      {title}
                    </Typography>
                    <Box
                      component="h5"
                      textAlign="center"
                      color="white"
                      px={3}
                      pb={5}
                      fontSize={{ xs: "12px", sm: "16px" }}
                    >
                      {text}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box display="flex" justifyContent="center" mt={10} mb={10}>
          <Button
            onClick={() => setOpenN(true)}
            sx={{
              width: "220px",
              height: "50px",
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              borderRadius: "0px",
              fontSize: { xs: "12px", md: "14px" },
              color: "#fff",
              letterSpacing: "0.3px",
              "&:hover": {
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                color: "#3B3F6D",
                border: "1px solid #3B3F6D",
              },
            }}
          >
            Get a quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Tokenization;

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import bg1 from "./assests/bg1.png";
import bg2 from "./assests/bg2.png";
import bg3 from "./assests/bg3.png";
import bg4 from "./assests/bg4.png";
import bg5 from "./assests/bg5.png";

import i1 from "./assests/i1.png";
import i2 from "./assests/i2.png";
import i3 from "./assests/i3.png";
import i4 from "./assests/i4.png";
import i5 from "./assests/i5.png";
import c1 from "./assests/1.png";
import c2 from "./assests/2.png";
import c3 from "./assests/3.png";
import c4 from "./assests/4.png";
import PlatformCE01 from "./Platform/platformCE01";
import PlatformCE02 from "./Platform/platformCE02";
import centerlized from "./assests/centerlized.png";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    img: c1,
    title: "Research",
    des: "We Analyse the current digital currency market to validate your idea of a cryptocurrency exchange platform. Well informed decision-making about all processes and risks involved",
  },

  {
    img: c2,
    title: "Design",
    des: "Then, we move to the front-end development that should be interactive enough for trading without any difficulty. With our in-house design studio, we create compelling designs",
  },
  {
    img: c3,
    title: "Testing",
    des: "Quality assurance for avoiding the deployment of an erroneous platform risking the customers’ transactions and other financial activities with various types of testing and performance analysis",
  },
  {
    img: c4,
    title: "Development",
    des: "Our development team takes over and implements the best methods to create a secure cryptocurrency exchange platform that is fully functional",
  },
];

const mapData = [
  {
    alt: "Ease Of Access",
    title: "Ease Of Access",
    discription:
      "CEX simplifies the process of registering for an account and purchasing their first coin. This has aided in attracting new users to the system, as well as increasing the popularity of crypto marketplaces.",

    bg: 'linear-gradient(180deg, #F31783 0%, #F28E69 100%)',
    icon: i1,
  },
  {
    alt: "License",
    title: "License",
    discription:
      "The majority of these centralized exchanges are licensed and regulated by the government. This gives the trader peace of mind in the event that something goes wrong.",

    bg: 'linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)',
    icon: i2,
  },
  {
    alt: "Use Of Escrow",
    title: "Use Of Escrow",
    discription:
      "They keep the currency as an intermediary in exchanges until both parties have fulfilled their obligations. As a result, there's no need to be concerned about the transaction once it's completed.",

    bg: 'linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)',
    icon: i3,
  },
  {
    alt: "Transparency",
    title: "Transparency",
    discription:
      "They provide the dealers with their address and location. As a result, it makes it easier for customers to contact them if necessary.",

    bg: 'linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)',
    icon: i4,
  },
  {
    alt: "Offers And Discounts",
    title: "Offers And Discounts",
    discription:
      "CEX also gives you a discount if you trade in large numbers. Users can also trade fiat dollars for cryptocurrencies and cryptocurrencies for fiat currencies.",

    bg: 'linear-gradient(180deg, #2DA7F2 28.24%, #00E4E7 100%)',
    icon: i5,
  },
  // {
  // 	title: "Centralized Cryptocurrency Exchange Development Services",
  // 	discription: (
  // 		<Box>
  // 			We develop centralized crypto exchanges like Binance or Coinbase with
  // 			advanced features and security mechanisms that include, but are not
  // 			limited
  // 			<ul>
  // 				<li>Multiple Order Types</li>
  // 				<li>Powerful Trading Engine</li>
  // 				<li>Payment Gateway Integration</li>
  // 				<li>KYC & AML Integration</li>
  // 				<li>CSRF & SSRF Protection</li>
  // 				<li>Elliptic-curve cryptography wallet</li>
  // 				<li>DDoS protection and X-XSS-Protection</li>
  // 				<li>Advance Admin Dashboard</li>
  // 				<li>Multi-Signature Wallet</li>
  // 				<li>Multi-crypto Support</li>
  // 			</ul>
  // 		</Box>
  // 	),

  // 	bg: bg6,
  // 	icon: i6,
  // },
];

const CentralizedExchange = ({ openN, setOpenN }) => {
  const matches = useMediaQuery("(max-width:700px)");
  const matches1 = useMediaQuery("(max-width: 500px");

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/centralized-exchange-development/",
      },
      headline: "Centralized Exchange Development",
      description:
        "BLocTech Solutions helps you to acquire the best centralized crypto exchange platform like Binance, with high trade volume and liquidity, allowing users to trade cryptocurrencies seamlessly.",
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
        <title>Centralized Exchange Development | BlocTech Solutions</title>
        <meta
          name="description"
          content="we offer centralized exchange development services for businesses and organizations. centralized crypto exchanges help crypto traders to connect mutually."
        />
        <meta
          name="title"
          content="Centralized Exchange Development | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta name="keyword" content="centralized exchange" />
        <meta name="keyword" content="centralized exchange development" />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      {/* ---------Main section of crypto wallet page----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
          // backgroundPosition: { sm: "center", xs: "left" },
          // backgroundSize: { sm: "100% 100%", xs: "left" },
          // backgroundRepeat: "no-repeat",
          // py: { sm: 15, xs: "100px" },
        }}
      >
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              py={5}
              display="flex"
              alignItems="center"
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Box
                    component="h1"
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
                    Centralized Exchange Development
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
                    BLocTech Solutions helps you to acquire the best centralized
                    crypto exchange platform like Binance, with high trade
                    volume and liquidity, allowing users to trade
                    cryptocurrencies seamlessly.
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
                  display="flex"
                  justifyContent={{ md: "flex-end", xs: "center" }}
                >

                  <LazyLoadImage
                    src={centerlized}
                    width={matches1 ? "100%" : "80%"}
                    alt="Centralized Exchange Development" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}
      <Container>
        {/* start services */}
        <Box
          component="h1"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "100px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          What is Centralized Exchange Development?
        </Box>
        <Typography
          variant="body1"
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          sx={{ pt: "30px", m: "auto" }}
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
          width="87%"
        >
          Centralized cryptocurrency exchanges are online platforms used to buy
          and sell cryptocurrencies. They are the most common means that
          investors use to buy and sell cryptocurrency holdings.
        </Typography>
        <Typography
          variant="body1"
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          sx={{ py: "30px", m: "auto" }}
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
          width="87%"
        >
          In the term “centralized cryptocurrency exchange,” the idea of
          centralization refers to the use of a middle man or third party to
          help conduct transactions. Centralized exchanges are trading platforms
          that function like traditional brokerage or stock markets. In essence,
          centralized exchanges often act as the first point of contact for
          newcomers that are interested in trading cryptocurrency. Many
          individuals seek to have an interface that can connect them to both
          cryptocurrency trading and the real economy, and centralized exchanges
          provide that.
        </Typography>
        <Box
          component="h2"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "100px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Centralized Cryptocurrency Exchange Development Services
        </Box>
        <Typography
          variant="body1"
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          sx={{ py: "30px", m: "auto" }}
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
          width="87%"
        >
          We develop centralized crypto exchanges like Binance or Coinbase with
          advanced features and security mechanisms that include, but are not
          limited
        </Typography>
        <PlatformCE01 />

        <Box
          component="h1"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "100px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Features Of Centralized Exchange
        </Box>
        <Grid
          container
          spacing={3}
          py="60px"
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mapData.map(({ title, discription, bg, icon, alt }) => (
            <Grid item md={4} sm={6} xs={12} mt="60px">
              <Box position={"relative"}>
                <img
                  src={icon}
                  className="imgspin"
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    marginTop: "-65px",
                  }}
                  alt={alt}
                />
              </Box>
              <Box
                sx={{
                  background: bg,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: "100%",
                  pb: { sm: "40px", xs: "20px" },
                  pt: { sm: "80px", xs: "40px" },
                  px: "20px",
                }}
              >
                <Box
                  pb="30px"
                  component="h3"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "23px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {title}
                </Box>
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
                  {discription}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          component="h3"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "100px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Key Security Mechanism
        </Box>
        <PlatformCE02 />
        <Box
          component="h1"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "100px", xs: "50px" }}
          pb={{ sm: "100px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Our Development Process
        </Box>
        <Box>
          {data.map(({ img, title, des }, index) => (
            <Grid container mb={3}>
              <Grid item sm={4} xs={12} minHeight="295px">
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"center"}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                    p: "80px",
                    height: "100%",
                  }}
                >
                  <img src={img} alt="number" />
                </Box>
              </Grid>
              <Grid item sm={8} xs={12} minHeight="295px">
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={{ sm: "start", xs: "center" }}
                  sx={{
                    background: "#240035",
                    height: "100%",
                    px: { sm: "30px", xs: "10px" },
                  }}
                >
                  <Typography
                    variant={"h4"}
                    sx={{
                      fontWeight: 700,
                      fontSize: { sm: "28px", xs: "20px" },
                      color: "white",
                      textAlign: { sm: "start", xs: "center" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Box
                    component="p"
                    className="myUl"
                    textAlign={{ md: "left", xs: "center" }}
                  >
                    {des}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
        <Box
          py={2}
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
            }}
          >
            Get a Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CentralizedExchange;

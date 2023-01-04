import { useEffect } from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import dappimg from "./asset/dappimg.png";
import frontbg from "./asset/frontbg.jpg";

import c1 from "./asset/1.png";
import c2 from "./asset/2.png";
import c3 from "./asset/3.png";
import c4 from "./asset/4.png";

import f1 from "./asset/f1.png";
import f2 from "./asset/f2.png";
import f3 from "./asset/f3.png";
import f4 from "./asset/f4.png";
import f5 from "./asset/f5.png";
import f6 from "./asset/f6.png";

import bg1 from "./asset/bg1.png";
import bg2 from "./asset/bg2.png";
import bg3 from "./asset/bg3.png";
import bg4 from "./asset/bg4.png";
import bg5 from "./asset/bg5.png";
import bg6 from "./asset/bg6.png";

import w1 from "./asset/w1.png";
import w2 from "./asset/w2.png";
import w3 from "./asset/w3.png";
import { Helmet } from "react-helmet-async";

export default ({ openN, setOpenN }) => {
  const matches = useMediaQuery("(max-width:700px)");
  const matches1 = useMediaQuery("(max-width: 500px");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      img: c1,
      title: "By the type of key storage",
      ul: (
        <ul>
          <li>Custodial wallets</li>
          <li>Non-custodial wallets</li>
        </ul>
      ),
    },

    {
      img: c2,
      title: "By the method of storage",
      ul: (
        <ul>
          <li>Hot (software) wallets</li>
          <li>Cold (hardware) wallets</li>
        </ul>
      ),
    },
    {
      img: c3,
      title: "By the number of cryptocurrencies supported",
      ul: (
        <ul>
          <li>Coin-specific wallets (e.g., only Bitcoin, Etherium, Ripple)</li>
          <li>Multi-currency wallets</li>
        </ul>
      ),
    },
    {
      img: c4,
      title: "By the number of wallet users",
      ul: (
        <ul>
          <li>Single-signature (singlesig) wallets for personal use</li>
          <li>Multi-signature (multisig, shared) wallets for business needs</li>
        </ul>
      ),
    },
  ];

  const Carddata = [
    {
      img: f1,
      bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
      title: "Crypto asset security.",
      alt: "Crypto asset security.",
    },
    {
      img: f2,
      bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
      title: "Crypto asset management",
      alt: "Crypto asset management",
    },
    {
      img: f3,
      bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
      title: "Transaction tracking and tracing",
      alt: "Transaction tracking and tracing",
    },
    {
      img: f4,
      bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
      title: "Support for multiple crypto assets",
      alt: "Support for multiple crypto assets",
    },
    {
      img: f5,
      bg: " linear-gradient(180deg, #00E4E7 0%, #2DA7F2 100%)",
      title: "Multi-signature support",
      alt: "Multi-signature support",
    },
    {
      img: f6,
      bg: "linear-gradient(180deg, #67FE1A 0%, #139950 100%)",
      title: "QR code-based payments",
      alt: "QR code-based payments",
    },
  ];
  const data1 = [
    {
      img: w1,

      title: "Flexible cooperation models",
      ul: (
        <ul>
          <li>Full crypto wallet development outsourcing </li>
          <li>Dedicated teams or team augmentation</li>
        </ul>
      ),
      alt: "Flexible cooperation models",
    },
    {
      img: w2,

      title: "Fast crypto wallet development",
      ul: (
        <ul>
          <li>Quick project start (1-2 weeks)</li>
          <li>Frequent releases (every 2-3 weeks) </li>
          <li>Established Lean, Agile and DevOps culture</li>
        </ul>
      ),
      alt: "Fast crypto wallet development",
    },
    {
      img: w3,

      title: "High cryptocurrency wallet quality",
      ul: (
        <ul>
          <li>Proven technology skills </li>
          <li>Multi-industry expertise of our developers</li>
        </ul>
      ),
      alt: "High cryptocurrency wallet quality",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/crypto-wallet-development-service/",
      },
      headline: "Crypto Wallet Development Services",
      description:
        "To design, build, integrate, and maintain crypto wallet applications, we provide complete support to our clients by providing excellent end-to-end cryptocurrency wallet development services.",
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
        <title>Crypto Wallet Development Services | BlocTech Solutions</title>
        <meta
          name="description"
          content="we provide crypto wallet development services for businesses and organizations to build different end-to-end cryptocurrency wallets for blockchain projects."
        />
        <meta
          name="title"
          content="Crypto Wallet Development Services | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Crypto Wallet Development Services, crypto wallet services"
        />
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
              pt={1}
              pb={2}
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
                    Crypto Wallet Development Services
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
                    To design, build, integrate, and maintain crypto wallet
                    applications, we provide complete support to our clients by
                    providing excellent end-to-end cryptocurrency wallet
                    development services.
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
                      Get a reliable crypto wallet
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  display="flex"
                  justifyContent={{ md: "flex-end", xs: "center" }}
                >
                  <img src={dappimg} width={matches1 ? "100%" : "90%"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      <Container maxWidth="md">
        {/* --------Crypto wallets BlocTech Solutions part-------- */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <Box
          component="p"
          mt={7}
          fontSize={{ xs: "12px", sm: "16px" }}
          fontWeight={400}
          color="white"
          letterSpacing="0.3px"
          lineHeight="22px"
          textAlign="center"
        >
          <span style={{ fontWeight: "900" }}>
            Crypto Wallet Development Services{" "}
          </span>
          help to build different types of end-to-end cryptocurrency wallet for
          streamlined crypto asset management, secure cryptocurrency storage,
          easy, fast and safe cryptocurrency transfer.
        </Box>
      </Container>
      <Container>
        <Box my={5}>
          <Box
            component="h2"
            mb={4}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            // color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Crypto Wallet Development Services
          </Box>

          {data.map(({ img, title, ul }, index) => (
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
                  <img src={img} alt="icon" />
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
                    variant={"h3"}
                    sx={{
                      fontWeight: 700,
                      fontSize: { sm: "28px", xs: "20px" },
                      color: "white",
                      textAlign: { sm: "start", xs: "center" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Box textAlign="left" className="myUl">
                    {ul}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
        {/* /////////////////////////////////////////////////////////////////// */}

        {/* -------Key Features of crypto wallet part------- */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <Box py={5}>
          <Box
            component="h2"
            mb={4}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            // color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Key Features of Crypto Wallet Development Services
          </Box>
          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={2}
            mt={4}
          >
            {Carddata.map(({ img, title, bg, alt }, index) => (
              <Grid
                key={index + `ids`}
                item
                xs={12}
                md={4}
                textAlign={"center"}
              >
                <Box
                  sx={{
                    background: bg,
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
                    <img src={img} alt={alt} style={{ marginTop: "16px" }} />
                    <Typography
                      variant={"h3"}
                      fontSize={{ xs: "16px", sm: "23px" }}
                      fontWeight={700}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      textAlign="center"
                      py="20px"
                    >
                      {title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* /////////////////////////////////////////////////////////////////// */}

        {/* --------expert help for crypto part------- */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <Box
          my={5}
          p={5}
          bgcolor="#411F78"
          sx={{
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
            },
          }}
        >
          <Grid
            container
            // justifyContent="center"
            // alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Box>
                <Typography
                  variant={"h2"}
                  mb={4}
                  fontSize={{ xs: "20px", sm: "34px" }}
                  fontWeight={700}
                  letterSpacing="0.2px"
                  color="white"
                  lineHeight={{ xs: "auto", sm: "56px" }}
                >
                  Get Expert Help to Roll Out a Crypto Wallet
                </Typography>

                <Typography
                  my={3}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={400}
                  color="white"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                  // textAlign="center"
                >
                  BlocTech Solutions’s team is ready to design and build:
                </Typography>
                <Box
                  mb={5}
                  fontWeight={400}
                  color="white"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                >
                  <ul className="myUl">
                    <li>
                      <span style={{ fontWeight: "900" }}>
                        Crypto wallet products
                      </span>{" "}
                      for product companies to reduce time-to-market and drive
                      ROI fast.
                    </li>
                    <li>
                      <span style={{ fontWeight: "900" }}>
                        Custom crypto wallet applications
                      </span>{" "}
                      for non-IT enterprises to conveniently and securely
                      leverage crypto assets in their business activities.
                    </li>
                  </ul>
                </Box>
                <Button
                  onClick={() => setOpenN(true)}
                  sx={{
                    width: "200px",
                    height: "50px",
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    borderRadius: "0px",
                    fontSize: matches ? "12px" : "14px",
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                      fontWeight: "400",
                    },
                  }}
                >
                  Get a Quote
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* /////////////////////////////////////////////////////////////////// */}

        {/* -----------Why choose Crypto wallet development part------- */}
        {/* /////////////////////////////////////////////////////////////////// */}
        <Box py={5}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={8} md={8}>
              <Box>
                <Box
                  component="h2"
                  mb={4}
                  fontSize={{ xs: "20px", sm: "34px" }}
                  fontWeight={700}
                  letterSpacing="0.2px"
                  color="primary.main"
                  lineHeight={{ xs: "auto", sm: "56px" }}
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Why Choose BlocTech Solutions?
                </Box>
                <Box
                  fontWeight={400}
                  color="primary.main"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                >
                  <ul className="myUl">
                    <li>
                      Are experienced in leading blockchain frameworks:{" "}
                      <span style={{ fontWeight: "900" }}>
                        Ethereum, Hyperledger Fabric, Graphene.
                      </span>
                    </li>
                    <li>
                      Have
                      <span style={{ fontWeight: "900" }}>
                        C++, Golang, Node.js, Java, Python, and JavaScript
                      </span>
                      developers in the team.
                    </li>
                    <li>
                      Are in cybersecurity to ensure world-class cryptocurrency
                      wallet protection.
                    </li>
                    <li>
                      Provide mobile development to introduce reliable mobile
                      crypto wallets.
                    </li>
                    <li>
                      Have catered
                      <span style={{ fontWeight: "900" }}>30+ industries,</span>
                      including banking and fintech, retail, healthcare,
                      telecoms, professional services.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* /////////////////////////////////////////////////////////////////// */}

        {/* --------Perk of BlocTech Solutions crypto part------- */}
        {/* /////////////////////////////////////////////////////////////////// */}

        <Box py={5}>
          <Box
            component="h2"
            mb={4}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Perks of Working with BlocTech Solutions
          </Box>
          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={2}
            mt={4}
          >
            {data1.map(({ img, title, ul, alt }, index) => (
              <Grid
                key={index + `ids`}
                item
                // p={{ xs: 1, md: 2 }}
                xs={12}
                md={4}
                textAlign={"center"}
              >
                <Box
                  sx={{
                    background: "#41015F",
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
                    <img src={img} alt={alt} style={{ marginTop: "16px" }} />
                    <Typography
                      variant={"h3"}
                      fontSize={{ xs: "16px", sm: "23px" }}
                      fontWeight={700}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      textAlign="center"
                      py="20px"
                    >
                      {title}
                    </Typography>
                  </Box>
                  <Box textAlign="left" className="myUl">
                    {ul}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* /////////////////////////////////////////////////////////////////// */}

        {/* -------------Selected Crypto wallet project part--------------- */}
        {/* /////////////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////////////// */}
      </Container>
      <Box
        m="auto"
        sx={{ display: "flex", justifyContent: "center" }}
        my="50px"
      >
        <Button
          onClick={() => setOpenN(true)}
          sx={{
            py: 2,
            px: 2,
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            borderRadius: "0px",
            // fontSize: matches ? "12px" : "14px",
            textTransform: "capitalize",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: "0.3px",
            marginRight: "20px",
            "&:hover": {
              backgroundColor: "transparent",
              color: "white",
            },
          }}
        >
          REQUEST ASSISTANCE
        </Button>
      </Box>
    </Box>
  );
};

import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import Button from "@mui/material/Button";

import Benefitsdafi from "./Benefitsdafi";
import deffiiproducts from "../../assets/deffiiproducts.png";
import dafiimg from "./assets/dafiimg.png";
import dafibg from "./assets/dafibg.png";
import { Helmet } from "react-helmet-async";

export default ({ openN, setOpenN }) => {
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
        "@id": "https://www.bloctechsolutions.com/defi-development-services/",
      },
      headline: "DeFi Product Development",
      description:
        "Decentralized Finance (DeFi) and decentralized Applications (dApps) built on blockchain enable various financial services and allow for permissionless financial operations to be conducted within a peer-to-peer network.",
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
    <Box pt={{ sm: "95px", xs: "79px" }} bgcolor="black">
      <Helmet>
        <title>Decentralized Finance - Defi - Development Services</title>
        <meta
          name="description"
          content="We help with defi development services. Decentralized finance has changed the traditional financial models and improve payment verification methods and data of asset ownership."
        />
        <meta
          name="title"
          content="Decentralized Finance - Defi - Development Services"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="defi development services, decentralized finance development"
        />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box>
        <Box
          sx={{
            backgroundImage: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
            background: `url(${dafibg})`,
            backgroundPosition: { sm: "center", xs: "left" },
            backgroundSize: { sm: "100% 100%", xs: "left" },
            backgroundRepeat: "no-repeat",
            // py: { sm: 15, xs: "100px" },
            // height: "100%",
          }}
        >
          <Container>
            <Box>
              <Grid container spacing={2} py={14}>
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
                      DeFi Product Development
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
                      Decentralized Finance (DeFi) and decentralized
                      Applications (dApps) built on blockchain enable various
                      financial services and allow for permissionless financial
                      operations to be conducted within a peer-to-peer network.
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
                        Get Your Defi Product
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                {/*  */}
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                  <Box
                    display="flex"
                    justifyContent={{ md: "flex-end", xs: "center" }}
                  >
                    <img src={dafiimg} width={matches1 ? "100%" : "80%"} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
      <Container>
        <Box mt={"50px"}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box display="flex" justifyContent="flex-start">
                <img
                  src={deffiiproducts}
                  style={{ width: "100%", height: matches ? "388px" : "650px" }}
                  alt="Deffii Product"
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
                  // mt={{ xs: 5 }}
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  What are DeFi Products?
                </Box>
                <Box sx={{ width: "86%" }}>
                  <Box
                    component="p"
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    // color="primary.main"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    mt={"45px"}
                    display="flex"
                    alignItems={"center"}
                    sx={{
                      textAlign: "justify",
                    }}
                  >
                    The goal of DeFi product development is to bypass
                    traditional ways of financial services by disrupting the
                    role of intermediaries like banks, exchanges and lenders and
                    governing bodies. DeFi products are designed with blockchain
                    technology that enable decentralized finance. When we say
                    that blockchain is distributed and decentralized, that means
                    all parties using a DeFi application have an identical copy
                    of the public ledger, which records each and every
                    transaction in encrypted code. That secures the system by
                    providing users with anonymity, plus verification of
                    payments and a record of asset ownership that’s (nearly)
                    impossible to alter by fraudulent activity.
                  </Box>
                  <Box
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    my={2}
                  >
                    {/* Because of the way in which DeFi products are designed, they
                  are effectively modular – meaning that applications and
                  protocols can be added to and combined with each other. This
                  allows for much greater flexibility and variety in the
                  services that you can offer, in addition to the benefits
                  offered by blockchain technology. */}
                  </Box>
                  <Box
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    my={2}
                  >
                    BlocTech Solutions can develop some of the most popular
                    types of DeFi applications that include:
                  </Box>
                  <Box
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    my={2}
                  >
                    – Staking platforms
                    <br /> – Liquidity mining platforms <br />– Decentralized
                    Exchanges (DEX) <br />– Decentralized Lending Protocols and
                    Apps <br />– Non-custodial wallets
                  </Box>
                  <Box
                    component="p"
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    my={2}
                  >
                    Considering DeFi product development for your business? Here
                    are some of its benefits!
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Benefitsdafi setOpenN={setOpenN} />
    </Box>
  );
};

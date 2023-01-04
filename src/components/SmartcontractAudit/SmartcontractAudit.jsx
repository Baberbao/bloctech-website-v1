import { useEffect } from "react";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

import AuditServices from "./AuditServices";
import AuditCompany from "./AuditCompany";
import AuditSolutions from "./AuditSolutions";

import ModalD from "./ModalD";
import Recentaudlts from "../Recentaudlts/Recentaudlts";
import main from "./assets/main.png";
import AuditSvg from "./AuditSvg";
import { Helmet } from "react-helmet-async";

export default ({ openN, setOpenN, disclaimer, setDisclaimer, terms1 }) => {
  const matches = useMediaQuery("(max-width:700px)");
  const matches1 = useMediaQuery("(max-width: 500px");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var x = localStorage.getItem("disclaimer");
    if (x != "true") {
      setDisclaimer("block");
    } else {
      setDisclaimer("none");
    }
  }, []);

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/smart-contract-audit-company/",
      },
      headline: "Smart Contract Audit",
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
    <Box pt={{ md: "95px", xs: "79px" }}>
      <Helmet>
        <title>Smart contract audit - Services | BlocTech Solutions</title>
        <meta
          name="description"
          content="Being a smart contract audit company we offer smart contract audit service that facilitates businesses from startups to enterprises to optimize their blockchain applications."
        />
        <meta
          name="title"
          content="Smart contract audit - Services | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="smart contract audit, smart contract auditing, smart contract audit company, smart contract security audit"
        />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
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
            <Grid container spacing={2} py={1}>
              <Grid
                item
                xs={12}
                md={6}
                order={{ xs: 2, md: 1 }}
                display="flex"
                alignItems="center"
              >
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
                    Smart Contract Audit
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
                <Box textAlign="center">
                  {/* <img
                    src={bg}
                    width={matches1 ? "100%" : "80%"}
                    alt="Smart Contract Audit"
                  /> */}
                  <AuditSvg />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ------Contract Audit component----------- */}
      <Box>
        <Container>
          <Box py={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  pt={{ xs: 0, md: 0 }}
                  // sx={{
                  //   maxHeight: "350px",
                  //   maxWidth: "450px",
                  // }}
                >
                  <img
                    alt="Smart Contract Audit"
                    src={main}
                    width={matches ? "100%" : "80%"}
                    style={{
                      height: "auto",
                    }}
                  />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
              >
                <Box
                  component="h1"
                  fontSize={{ xs: "20px", sm: "34px" }}
                  fontWeight={700}
                  letterSpacing="0.2px"
                  // color="primary.main"
                  lineHeight={{ xs: "auto", sm: "56px" }}
                  textAlign={{ md: "left", xs: "center" }}
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Smart Contract Audit:
                </Box>

                <Box
                  component="p"
                  mt={2}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={400}
                  color="white"
                  letterSpacing="0.3px"
                  textAlign="justify"
                  lineHeight="22px"
                >
                  Smart Contract Audit is an accounting procedure to elaborate
                  on logical errors, security policies & optimized solutions
                  within code. Our Smart Contract Audit enhances this step by
                  eliminating loopholes and verifying economic logic to assemble
                  a report that is easy to understand for developers & community
                  members alike.
                </Box>
                <Box display="flex" justifyContent="flex-start" mt={5}>
                  <Button
                    onClick={() => setOpenN(true)}
                    sx={{
                      width: "330px",
                      height: "50px",
                      background:
                        " linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      borderRadius: "0px",
                      fontSize: matches ? "12px" : "14px",
                      color: "#fff",
                      letterSpacing: "0.3px",
                      "&:hover": {
                        background:
                          " linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      },
                    }}
                  >
                    Get your smart contract audited
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* ------Audit Services component----------- */}
          <Box pt={5} pb={10}>
            <AuditServices openN={openN} setOpenN={setOpenN} />
          </Box>
        </Container>

        {/* ------Audit Solutions component----------- */}
        <Box py={5} bgcolor="#240035">
          <Container>
            <AuditSolutions openN={openN} setOpenN={setOpenN} />
          </Container>
        </Box>

        {/* ------Audit Services component----------- */}
        {/* <Container>
          <Box pt={5} pb={10}>
            <AuditProcess openN={openN} setOpenN={setOpenN} />
          </Box>
        </Container> */}

        <Recentaudlts />

        {/* ------Audit Company component----------- */}
        <Box py={5}>
          <Container>
            <AuditCompany openN={openN} setOpenN={setOpenN} />
          </Container>
        </Box>
      </Box>
      <ModalD
        setDisclaimer={setDisclaimer}
        disclaimer={disclaimer}
        terms1={terms1}
      />
    </Box>
  );
};

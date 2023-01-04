import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import bg from "./assets/bg.png";
function Sitemap() {
  const menuItemsProduct = [
    {
      title: "Private Blockchain Development",
      link: "/private-blockchain-services/",
    },
    {
      title: "Tokenization services",
      link: "/tokenization-service/",
    },
    {
      title: "P2P Lending Platform Development",
      link: "/p2p-lending-platform-development/",
    },
    {
      title: "DAO Development Services",
      link: "/dao-service-and-development-company/",
    },

    {
      title: "Multichain Development Services",
      link: "/multichain-development-services/",
    },
  ];
  const menuItemsBlock = [
    {
      title: "Blockchain Services",
      link: "/blockchain-development-services/",
    },
    {
      title: "dApp development",
      link: "/dapp-development-company/",
    },
    {
      title: "Blockchain Consulting Services",
      link: "/blockchain-consulting-services/",
    },
    {
      title: "Token Development Services",
      link: "/token-development-services/",
    },
    {
      title: "Smart Contract Services",
      link: "/smart-contract-development-services/",
    },
    {
      title: "Crypto Wallet Development Services",
      link: "/centralized-exchange-development/",
    },
  ];

  const menuItemscompany = [
    {
      title: "Career",
      link: "/career/",
    },
    {
      title: "Faq's",
      link: "/faq/",
    },
    {
      title: "About us",
      link: "/about-us/",
    },

    {
      title: "Contact us",
      link: "/contact-us/",
    },
  ];

  //   Support
  // Privacy
  // Terms
  // Cookies Policy
  // Delivery Policy
  // Refund Policy

  const menuItemsSupport = [
    {
      title: "Privacy",
      link: "/privacy-policy/",
    },
    {
      title: "Terms",
      link: "/terms/",
    },
    {
      title: "Cookies Policy",
      link: "/cookiepolicy/",
    },
    {
      title: "Delivery Policy",
      link: "/delivery-policy/",
    },
    {
      title: "Refund Policy",
      link: "/refund-policy/",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingBottom: "50px" }}>
      <Container maxWidth="lg">
        <Box
          component="h1"
          pt="150px"
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
          Sitemap
        </Box>
        <Grid container spacing={3} py="80px">
          <Grid item md={4} sm={6} xs={12}>
            <Box height={"80%"}>
              <Box
                component="h3"
                sx={{
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { md: "28px", xs: "18px" },
                  color: "white",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Products
              </Box>
              <Box
                height={"100%"}
                sx={{ backgroundColor: "#240035", p: "20px" }}
              >
                {menuItemsProduct.map(({ title, link }) => (
                  <HashLink
                    to={link}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li
                      className="list"
                      style={{
                        "&:hover": {
                          color: "#CC10C6",
                        },
                      }}
                    >
                      {title}
                    </li>
                  </HashLink>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box height={"80%"}>
              <Box
                component="h3"
                sx={{
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { md: "28px", xs: "18px" },
                  color: "white",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Blockchain
              </Box>
              <Box
                height={"100%"}
                sx={{ backgroundColor: "#240035", p: "20px" }}
              >
                {menuItemsBlock.map(({ title, link }) => (
                  <HashLink
                    to={link}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li
                      className="list"
                      style={{
                        "&:hover": {
                          color: "#CC10C6",
                        },
                      }}
                    >
                      {title}
                    </li>
                  </HashLink>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Box height={"80%"}>
              <Box
                component="h3"
                sx={{
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { md: "28px", xs: "18px" },
                  color: "white",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Support
              </Box>
              <Box
                height={"100%"}
                sx={{ backgroundColor: "#240035", p: "20px" }}
              >
                {menuItemsSupport.map(({ title, link }) => (
                  <HashLink
                    to={link}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li
                      className="list"
                      style={{
                        "&:hover": {
                          color: "#CC10C6",
                        },
                      }}
                    >
                      {title}
                    </li>
                  </HashLink>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box height={"80%"}>
              <Box
                component="h3"
                sx={{
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { md: "28px", xs: "18px" },
                  color: "white",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Company
              </Box>
              <Box
                height={"100%"}
                sx={{ backgroundColor: "#240035", p: "20px" }}
              >
                {menuItemscompany.map(({ title, link }) => (
                  <HashLink
                    to={link}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <li
                      className="list"
                      style={{
                        "&:hover": {
                          color: "#CC10C6",
                        },
                      }}
                    >
                      {title}
                    </li>
                  </HashLink>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <Grid container spacing={5}>
          <Grid item md={4} sm={6} xs={12} textAlign={{ xs: "center" }}>
            <Box
              py={4}
              fontSize={{ xs: "30px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              color="primary.main"
              lineHeight={{ xs: "auto", sm: "40px" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Products
            </Box>
            {menuItemsProduct.map(({ id, title, link }) => (
              <Stack
                key={id}
                direction="column"
                rowGap={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <HashLink style={{ textDecoration: "none" }} to={`${link}`}>
                  <Box
                    fontWeight={"500"}
                    textAlign={{ xs: "center", md: "left" }}
                    fontSize="20px"
                    pt="30px"
                    sx={{ textDecoration: "none" }}
                  >
                    {title}
                  </Box>
                </HashLink>
              </Stack>
            ))}
          </Grid>
          <Grid item md={4} sm={6} xs={12} textAlign={{ xs: "center" }}>
            <Box
              py={4}
              fontSize={{ xs: "30px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              color="primary.main"
              lineHeight={{ xs: "auto", sm: "40px" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Blockchain
            </Box>
            {menuItemsBlock.map(({ id, title, link }) => (
              <Stack
                key={id}
                direction="column"
                rowGap={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <HashLink style={{ textDecoration: "none" }} to={`${link}`}>
                  <Box
                    fontWeight={"500"}
                    textAlign={{ xs: "center", md: "left" }}
                    fontSize="20px"
                    pt="30px"
                    sx={{ textDecoration: "none" }}
                  >
                    {title}
                  </Box>
                </HashLink>
              </Stack>
            ))}
          </Grid>
          <Grid item md={4} sm={6} xs={12} textAlign={{ xs: "center" }}>
            <Box
              py={4}
              fontSize={{ xs: "30px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              color="primary.main"
              lineHeight={{ xs: "auto", sm: "40px" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Services
            </Box>
            {data.map(({ id, digi, link }) => (
              <Stack
                key={id}
                direction="column"
                rowGap={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <HashLink
                  style={{ textDecoration: "none" }}
                  to={`${"/homeservices" + link}`}
                >
                  <Box
                    fontWeight={"500"}
                    textAlign={{ xs: "center", md: "left" }}
                    fontSize="20px"
                    pt="30px"
                    sx={{ textDecoration: "none" }}
                  >
                    {digi}
                  </Box>
                </HashLink>
              </Stack>
            ))}
          </Grid>
          <Grid item md={4} sm={6} xs={12} textAlign={{ xs: "center" }}>
            <Box
              py={4}
              fontSize={{ xs: "30px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              color="primary.main"
              lineHeight={{ xs: "auto", sm: "40px" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Support
            </Box>
            {menuItemsSupport.map(({ id, title, link }) => (
              <Stack
                key={id}
                direction="column"
                rowGap={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <HashLink style={{ textDecoration: "none" }} to={`${link}`}>
                  <Box
                    fontWeight={"500"}
                    textAlign={{ xs: "center", md: "left" }}
                    fontSize="20px"
                    pt="30px"
                    sx={{ textDecoration: "none" }}
                  >
                    {title}
                  </Box>
                </HashLink>
              </Stack>
            ))}
          </Grid>
          <Grid item md={4} sm={6} xs={12} textAlign={{ xs: "center" }}>
            <Box
              py={4}
              fontSize={{ xs: "30px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              color="primary.main"
              lineHeight={{ xs: "auto", sm: "40px" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Company
            </Box>
            {menuItemscompany.map(({ id, title, link }) => (
              <Stack
                key={id}
                direction="column"
                rowGap={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <HashLink style={{ textDecoration: "none" }} to={`${link}`}>
                  <Box
                    fontWeight={"500"}
                    textAlign={{ xs: "center", md: "left" }}
                    fontSize="20px"
                    pt="30px"
                    sx={{ textDecoration: "none" }}
                  >
                    {title}
                  </Box>
                </HashLink>
              </Stack>
            ))}
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
}

export default Sitemap;

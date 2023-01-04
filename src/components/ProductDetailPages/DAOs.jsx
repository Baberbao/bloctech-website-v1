import { ViewColumn } from "@mui/icons-material";
import { Button, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import main from "./assets/da.png";
import React, { useEffect } from "react";
import DAO1 from "./assets/DAO1.png";
import DAO2 from "./assets/DAO2.png";
import check from "./assets/check.svg";
import DAO3 from "./assets/DAO3.svg";
import DAO4 from "./assets/DAO4.png";
import DAOS1 from "./assets/DAOS1.svg";
import DAOS2 from "./assets/DAOS2.svg";
import DAOS3 from "./assets/DAOS3.svg";
import DAOS4 from "./assets/DAOS4.svg";
import DAOC1 from "./assets/DAOC1.svg";
import DAOC2 from "./assets/DAOC2.svg";
import DAOC3 from "./assets/DAOC3.svg";
import DAOC4 from "./assets/DAOC4.svg";
import DAOB1 from "./assets/DAOB1.svg";
import DAOB2 from "./assets/DAOB2.svg";
import DAOB3 from "./assets/DAOB3.svg";
import DAOB4 from "./assets/DAOB4.svg";
import DAOB5 from "./assets/DAOB5.svg";

import { Helmet } from "react-helmet-async";

const Data = [
  {
    img: DAOS1,
    title: "Open Source Code",
    description:
      "DAOs are reserved till the financing time frame concludes and the DAO is deployed. After this, it converts into an independent identity autonomous of outsiders and it’s makers by creating an open source code accessible to all participants.",
  },
  {
    img: DAOS2,
    title: "DAO Token",
    description:
      "The financing state continues as you set up the DAO rules. During this financing phase, it is important to make sure that these rules have an interior property that allows for genuine economic growth at any given point of time and permits financing.",
  },
  {
    img: DAOS3,
    title: "Based on Smart Contracts",
    description:
      "For a decentralised autonomous organization blockchain to be effective there need to be guidelines that dictate the way in which the platform is supposed to work. These guidelines or rules are coded as smart contracts so that they can eventually be taken as valid in the future.",
  },
  {
    img: DAOS4,
    title: "Using Blockchain Technology",
    description:
      "Organizations can work in an autonomous and decentralized manner by using the blockchain technology. This is because users are allowed to exercise command and make choices over the exchange. This makes DAOs transparent, incorrupt and immutable.",
  },
];
const Data1 = [
  {
    img: DAOC1,
    title: "Trusted  Timestamping",
  },
  {
    img: DAOC2,
    title: "Eliminate Security Threats",
  },
  {
    img: DAOC3,
    title: "Say Bye to Managerial Supervision",
  },
  {
    img: DAOC4,
    title: "Complete Autonomous Control",
  },
];

const Data2 = [
  {
    img: DAOB1,
    title: "Technical Prowess",
    description:
      "We exclusively work in Blockchain technologies. We do one thing, and we do it well..",
  },
  {
    img: DAOB2,
    title: "Expert Team",
    description:
      "We have many experts who help you refine your offering, suggest the best tech approach, and even help set up communities and campaigns..",
  },
  {
    img: DAOB3,
    title: "Rapid Development",
    description:
      "We deliver customized products suited to your target audience. A coherent roadmap ensures smooth and accelerated development and deployment.",
  },
  {
    img: DAOB4,
    title: "Complete Support",
    description:
      "Our work does not end with the product launch. We provide extensive post-delivery services so that you can focus on your growth.",
  },
  {
    img: DAOB5,
    title: "Meaningful Outcomes",
    description:
      "We create a tangible impact. We make sure you see value from your investments.",
  },
];
function DAOs({ openN, setOpenN }) {
  const matches = useMediaQuery("(max-width:700px)");
  const matches1 = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>DAO Service and Development company | BlocTech Solutions</title>
        <meta
          name="description"
          content="Being a dao development company, we integrate the full structure of decentralized autonomous organizations and satisfy our clients with the best dao services."
        />
        <meta
          name="title"
          content="DAO Service and Development company | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta name="keyword" content="dao development company" />
        <meta name="keyword" content=" dao service" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Box pt={{ md: "100px", xs: "79px" }}>
        <Box>
          <Container>
            <Box py={7}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                  <Box textAlign={{ xs: "center", md: "left" }}>
                    <Box
                      pt={{ xs: 0, md: 10 }}
                      fontSize={{ xs: "25px", sm: "44px" }}
                      fontWeight={700}
                      letterSpacing="0.2px"
                      color="#fff"
                      lineHeight={{ xs: "auto", sm: "56px" }}
                    >
                      Dao Service and Development
                    </Box>

                    <Box
                      m="auto"
                      my={2}
                      fontSize={{ xs: "12px", sm: "16px" }}
                      fontWeight={400}
                      color="#fff"
                      letterSpacing="0.3px"
                      width={{ xs: "90%", md: "100%" }}
                      lineHeight="22px"
                    >
                      BlocTech Solutions provides full-cycle smart contract
                      development services to deliver efficient, hack-proof, and
                      amendable blockchain-enabled smart contracts and oracles.
                    </Box>
                    <Box mt={3}>
                      <Button
                        onClick={() => setOpenN(true)}
                        sx={{
                          width: "220px",
                          height: "50px",
                          backgroundColor: "white",
                          border: "1px solid #3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "capitalize",
                          color: "#3B3F6D",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          "&:hover": {
                            backgroundColor: "#002244",
                            color: "#fff",
                            fontWeight: "400",
                            border: "1px solid #3B3F6D",
                          },
                        }}
                      >
                        Get Your Smart Contract
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                  <Box display="flex" justifyContent="flex-end">
                    <img src={main} width={matches1 ? "100%" : "100%"} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box color={"#3b3f6d !important"} bgcolor="#fff" width={"100%"} py={2}>
          <Container>
            <Box py={{ xs: 5, md: 10 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <img src={DAO1} alt="" width="100%" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    fontSize={{ xs: "20px", sm: "34px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "40px" }}
                  >
                    BlocTech Solutions
                  </Box>
                  <Box
                    fontSize={{ xs: "20px", sm: "34px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "40px" }}
                  >
                    Professional DAO Blockchain Development
                  </Box>
                  <Box
                    my={2}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                  >
                    Blockchain has given us a single, secure shared system that
                    comes with multiple rich features. DAO blockchain
                    development is a cost-effective method that addresses the
                    challenges faced by traditional centralized businesses.
                    Learn more about protecting the interests of your business
                    with DAO blockchain development with BlocTech Solutions
                    Solutions.
                  </Box>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems={{ xs: "center", md: "left" }}
                    spacing={4}
                  >
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://t.me/bloctechsolutions92"
                      target={"_blank"}
                    >
                      <Button
                        //   onClick={() => setOpenN(true)}
                        sx={{
                          textAlign: "center",
                          backgroundColor: "#3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "capitalize",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          my: 3,
                          py: 1,
                          px: 2,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#3B3F6D",
                            border: "1px solid #3B3F6D",
                          },
                        }}
                      >
                        CONNECT ON TELEGRAM
                      </Button>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://wa.me/+923138604818"
                      target={"_blank"}
                    >
                      <Button
                        //   onClick={() => setOpenN(true)}
                        sx={{
                          textAlign: "center",
                          backgroundColor: "#3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "capitalize",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          my: 3,
                          py: 1,
                          px: 2,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#3B3F6D",
                            border: "1px solid #3B3F6D",
                          },
                        }}
                      >
                        CONNECT ON WHATSAAP
                      </Button>
                    </a>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box py={{ xs: 5, md: 10 }}>
              <Grid container direction="row-reverse" spacing={4}>
                <Grid item xs={12} md={6}>
                  <img src={DAO2} alt="" width="100%" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    fontSize={{ xs: "20px", sm: "34px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "40px" }}
                  >
                    Introduction to DAO
                  </Box>
                  <Box
                    my={2}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                  >
                    A Decentralized Autonomous Organization or DAO is a
                    transparent and autonomous community led entity without any
                    central authority. This means that a DAO is governed by all
                    the members of a project equally and all critical decisions
                    are taken collectively by them.
                    <br />
                    <br />A DAO can be created by numerous crypto wallets that
                    are controlled by either organizations or individuals. All
                    the moments are executed voa code allows the management of
                    assets and votes without having to undergo traditional
                    banking and legal formalities.
                  </Box>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems={{ xs: "center", md: "left" }}
                    spacing={4}
                  >
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://t.me/bloctechsolutions92"
                      target={"_blank"}
                    >
                      <Button
                        //   onClick={() => setOpenN(true)}
                        sx={{
                          textAlign: "center",
                          backgroundColor: "#3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "capitalize",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          my: 3,
                          py: 1,
                          px: 2,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#3B3F6D",
                            border: "1px solid #3B3F6D",
                          },
                        }}
                      >
                        CONNECT ON TELEGRAM
                      </Button>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://wa.me/+923138604818"
                      target={"_blank"}
                    >
                      <Button
                        //   onClick={() => setOpenN(true)}
                        sx={{
                          textAlign: "center",
                          backgroundColor: "#3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "capitalize",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          my: 3,
                          py: 1,
                          px: 2,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#3B3F6D",
                            border: "1px solid #3B3F6D",
                          },
                        }}
                      >
                        CONNECT ON WHATSAAP
                      </Button>
                    </a>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box py={5}>
              <Box
                textAlign="center"
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#3B3F6D"
                lineHeight={{ xs: "auto", sm: "56px" }}
              >
                DAO vs Traditional Organizations
              </Box>
              <Grid container spacing={5} py={{ xs: 5, md: 10 }}>
                <Grid item xs={12} md={6}>
                  <Box boxShadow="0 0 15px #3B3F6D" p="40px 20px" height="100%">
                    <Box
                      pb={4}
                      fontSize={{ xs: "16px", sm: "24px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "40px" }}
                    >
                      Traditional Organizations
                    </Box>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Governance:</b> Top down management, many information
                        & decision bottlenecks
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Trust:</b> Based on experience and past relationships
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Decision-Making:</b> Based on expertise and seniority
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Operational Costs:</b> High
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box boxShadow="0 0 15px #3B3F6D" p="40px 20px" height="100%">
                    <Box
                      pb={4}
                      fontSize={{ xs: "16px", sm: "24px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "40px" }}
                    >
                      AI DAOs
                    </Box>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Governance:</b> Embedded in the code (smart
                        contracts)
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Trust:</b> Cryptography (Blockchain)
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Decision-Making:</b> Automatd thanks to AI
                        (independent agents or AGI) and smart contracts
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        <b>Operational Costs:</b> Low
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
              <Box
                textAlign="center"
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="primary.main"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                There are two types of centralized blockchain solutions if we
                are looking for the governance of organizations: COs
                (traditional or continuous organizations) and DAOs. Both these
                solutions are run by complex crypto- economic principles and
                smart contracts.
              </Box>
              <Box
                mt={2}
                textAlign="center"
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="primary.main"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                While DAO’s automate and decentralize the governance of
                corporations, COs aim to create a sustainable financial model
                for traditional organizations. Structurally DAOs are flat and
                thus depend on smart contracts to enforce rules and decision
                making. DAO Tokens are used to give the voting and decision
                making power to participants where more tokens mean more value.
                Contrary to this, COs use a Decentralized Autonomous Trust (DAT)
                which is an immutable smart contract that discourages
                speculation and also incentives long-term stakeholder
                participation.
              </Box>
              <Stack
                spacing={2}
                my={5}
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "center", md: "center" }}
                justifyContent={{ xs: "center", md: "center" }}
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://t.me/bloctechsolutions92"
                  target={"_blank"}
                >
                  <Button
                    //   onClick={() => setOpenN(true)}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "#3B3F6D",
                      borderRadius: "0px",
                      fontSize: matches ? "12px" : "14px",
                      textTransform: "capitalize",
                      color: "#fff",
                      fontWeight: 700,
                      letterSpacing: "0.3px",
                      my: 3,
                      py: 1,
                      px: 2,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#3B3F6D",
                        border: "1px solid #3B3F6D",
                      },
                    }}
                  >
                    CONNECT ON TELEGRAM
                  </Button>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://wa.me/+923138604818"
                  target={"_blank"}
                >
                  <Button
                    //   onClick={() => setOpenN(true)}
                    sx={{
                      textAlign: "center",
                      backgroundColor: "#3B3F6D",
                      borderRadius: "0px",
                      fontSize: matches ? "12px" : "14px",
                      textTransform: "capitalize",
                      color: "#fff",
                      fontWeight: 700,
                      letterSpacing: "0.3px",
                      my: 3,
                      py: 1,
                      px: 2,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#3B3F6D",
                        border: "1px solid #3B3F6D",
                      },
                    }}
                  >
                    CONNECT ON WHATSAAP
                  </Button>
                </a>
              </Stack>
            </Box>
            <Box py={{ xs: 5, md: 10 }}>
              <Box
                textAlign="center"
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#3B3F6D"
                lineHeight={{ xs: "auto", sm: "56px" }}
              >
                Features of a Decentralized Autonomous Network
              </Box>
              <Grid container>
                {Data.map(({ img, title, description }, index) => (
                  <Grid
                    item
                    p={{ xs: 1, md: 2 }}
                    xs={12}
                    sm={6}
                    md={3}
                    color="#3b3f6d"
                  // textAlign={"center"}
                  >
                    <Box>
                      <Box textAlign={"center"} my={{ xs: 1, md: 4 }}>
                        <img src={img} alt="" />
                      </Box>
                      <Box
                        mt="20px"
                        fontSize={{ xs: "16px", sm: "20px" }}
                        fontWeight={700}
                        letterSpacing="0.3px"
                        color="#3B3F6D"
                        lineHeight={{ xs: "auto", sm: "22px" }}
                        textAlign="center"
                      >
                        {title}
                      </Box>
                      <Box
                        py={4}
                        width="100%"
                        mx="auto"
                        textAlign="center"
                        fontSize={{ xs: "13px", sm: "16px" }}
                        fontWeight={400}
                        letterSpacing="0.3px"
                        color="#3b3f6d"
                        lineHeight={{ xs: "auto", sm: "22px" }}
                      >
                        {description}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box py={{ xs: 5, md: 10 }}>
              <Box
                pb={{ xs: 2, md: 5 }}
                textAlign="center"
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#3B3F6D"
                lineHeight={{ xs: "auto", sm: "56px" }}
              >
                How Does a DAO Work?
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <img src={DAO3} alt="" width="100%" />
                </Grid>
                <Grid item xs={12} md={6} alignItems="center">
                  <Box>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        A core team of community members establishes the DAO
                        rules through the use of smart contracts.
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        Smart contracts work as a foundational framework on
                        which the DAO will eventually operate and are thus
                        visible, verifiable and auditable by all members.
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        The DAO platform issues tokens to decide on different
                        ways to receive funding and bestow governance.
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        This protocol allows the DAO to sell tokens for raising
                        money and filling the treasury.
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        Token holders are issued voting rights in return for
                        their fiat and this is proportional to their holdings.
                      </Box>
                    </Stack>
                    <Stack direction="row " my={2} alignItems="center">
                      <Box marginRight="10px">
                        <img src={check} alt="" />
                      </Box>
                      <Box>
                        The DAO is ready to be deployed once the funding
                        completes. The code is pushed to production and cannot
                        be modified without a consensus concluded via member
                        voting.
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box py={{ xs: 5, md: 10 }}>
              <Grid container direction="row-reverse" spacing={4}>
                <Grid item xs={12} md={6}>
                  <img
                    src={DAO4}
                    alt=""
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    fontSize={{ xs: "20px", sm: "34px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "40px" }}
                  >
                    Why Choose DAO Blockchain Development?
                  </Box>
                  <Box
                    my={2}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                  >
                    If you are working on a project that requires funding and
                    includes transactions with a lot of unknown people, it can
                    be hard to trust them most of the time. Using a
                    decentralized autonomous organization blockchain introduces
                    several opportunities for your business.
                    <br />
                    <br />
                    Use DAO blockchain development for 100% transparent
                    transactions, mandatory voting for implementing new changes
                    and for handling services automatically in a standardized
                    manner.
                  </Box>
                </Grid>
              </Grid>
              <Grid container my={5}>
                {Data1.map(({ img, title, description }, index) => (
                  <Grid
                    item
                    p={{ xs: 1, md: 2 }}
                    xs={12}
                    sm={6}
                    md={3}
                    color="#3b3f6d"
                    textAlign={"center"}
                  >
                    <Box border={"1px solid lightgray"} height="100%">
                      <Box textAlign={"center"} my={{ xs: 1, md: 4 }}>
                        <img src={img} alt="" />
                      </Box>
                      <Box
                        mt="20px"
                        fontSize={{ xs: "16px", sm: "20px" }}
                        fontWeight={700}
                        letterSpacing="0.3px"
                        color="#3B3F6D"
                        lineHeight={{ xs: "auto", sm: "22px" }}
                        textAlign="center"
                      >
                        {title}
                      </Box>
                      <Box
                        py={4}
                        width="100%"
                        mx="auto"
                        fontSize={{ xs: "13px", sm: "16px" }}
                        fontWeight={400}
                        letterSpacing="0.3px"
                        color="#3b3f6d"
                        lineHeight={{ xs: "auto", sm: "28px" }}
                      >
                        {description}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box textAlign="center" my={2}>
                {" "}
                <Button
                  onClick={() => setOpenN(true)}
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#3B3F6D",
                    borderRadius: "0px",
                    fontSize: matches ? "12px" : "14px",
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                    my: 3,
                    py: 1,
                    px: 2,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#3B3F6D",
                      border: "1px solid #3B3F6D",
                    },
                  }}
                >
                  TALK TO OUT EXPERTS
                </Button>
              </Box>
            </Box>
            <Box py={{ xs: 5, md: 10 }}>
              <Box
                textAlign="center"
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#3B3F6D"
                lineHeight={{ xs: "auto", sm: "56px" }}
              >
                Why BlocTech Solutions for DeFi 2.0 Development?
              </Box>
              <Box
                my={2}
                textAlign="center"
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="primary.main"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                By partnering with BlocTech Solutions, you can rely on a team of
                technical experts with real-world experience creating success
                stories.
              </Box>
              <Grid container justifyContent="center">
                {Data2.map(({ img, title, description }, index) => (
                  <Grid
                    item
                    p={{ xs: 1, md: 2 }}
                    xs={12}
                    sm={6}
                    md={4}
                    color="#3b3f6d"
                  // textAlign={"center"}
                  >
                    <Box>
                      <Box textAlign={"center"} my={{ xs: 1, md: 4 }}>
                        <img src={img} alt="" />
                      </Box>
                      <Box
                        mt="20px"
                        fontSize={{ xs: "16px", sm: "20px" }}
                        fontWeight={700}
                        letterSpacing="0.3px"
                        color="#3B3F6D"
                        lineHeight={{ xs: "auto", sm: "22px" }}
                        textAlign="center"
                      >
                        {title}
                      </Box>
                      <Box
                        py={4}
                        width="100%"
                        mx="auto"
                        textAlign="center"
                        fontSize={{ xs: "13px", sm: "16px" }}
                        fontWeight={400}
                        letterSpacing="0.3px"
                        color="#3b3f6d"
                        lineHeight={{ xs: "auto", sm: "22px" }}
                      >
                        {description}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  onClick={() => setOpenN(true)}
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#3B3F6D",
                    borderRadius: "0px",
                    fontSize: matches ? "12px" : "14px",
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                    my: 3,
                    py: 1,
                    px: 2,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#3B3F6D",
                      border: "1px solid #3B3F6D",
                    },
                  }}
                >
                  TALK TO OUR EXPERTS
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default DAOs;

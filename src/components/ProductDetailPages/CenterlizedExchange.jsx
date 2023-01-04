import React, { useEffect } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import main from "./assets/exchange.png";

import chooseUs from "./assets/chooseUs.PNG";
import admin from "./assets/admin.PNG";
import bitcoin from "./assets/bitcoin.PNG";
import ddos from "./assets/ddos.PNG";
import file from "./assets/file.PNG";
import lock from "./assets/lock.PNG";
import multi from "./assets/multi.PNG";
import pay from "./assets/pay.PNG";
import search from "./assets/search.PNG";
import trade from "./assets/trade.PNG";
import wallet from "./assets/wallet.PNG";
import decenter1 from "./assets/decenter1.PNG";
import decenter2 from "./assets/decenter2.PNG";
import decenter3 from "./assets/decenter3.PNG";
import decenter4 from "./assets/decenter4.PNG";
import decenter5 from "./assets/decenter5.PNG";
import decenter6 from "./assets/decenter6.PNG";
import decenter7 from "./assets/decenter7.PNG";
import decenter8 from "./assets/decenter8.PNG";
import decenter9 from "./assets/decenter9.PNG";
import decenter10 from "./assets/decenter10.PNG";
import hybrid1 from "./assets/hybrid1.PNG";
import hybrid2 from "./assets/hybrid2.PNG";
import hybrid3 from "./assets/hybrid3.PNG";
import hybrid4 from "./assets/hybrid4.PNG";
import hybrid5 from "./assets/hybrid5.PNG";
import hybrid6 from "./assets/hybrid6.PNG";
import hybrid7 from "./assets/hybrid7.PNG";
import hybrid8 from "./assets/hybrid8.PNG";
import hybrid9 from "./assets/hybrid9.PNG";
import hybrid10 from "./assets/hybrid10.PNG";
import pic1 from "./assets/pic1.PNG";
import pic2 from "./assets/pic2.PNG";
import oodles1 from "./assets/oodles1.PNG";
import oodles2 from "./assets/oodles2.PNG";
import oodles3 from "./assets/oodles3.PNG";
import oodles4 from "./assets/oodles4.PNG";
import oodles5 from "./assets/oodles5.PNG";
import oodles6 from "./assets/oodles6.PNG";
import exchange1 from "./assets/exchange1.PNG";
import exchange2 from "./assets/exchange2.PNG";
import exchange3 from "./assets/exchange3.PNG";
import exchange4 from "./assets/exchange4.PNG";
import exchange5 from "./assets/exchange5.PNG";
import exchange6 from "./assets/exchange6.PNG";
import exchange7 from "./assets/exchange7.PNG";
import exchange8 from "./assets/exchange8.PNG";
import exchange9 from "./assets/exchange9.PNG";
import exchange10 from "./assets/exchange10.PNG";
import exchange11 from "./assets/exchange11.PNG";
import exchange12 from "./assets/exchange12.PNG";
import exchange13 from "./assets/exchange13.PNG";
import exchange14 from "./assets/exchange14.PNG";
import key1 from "./assets/key1.PNG";
import key2 from "./assets/key2.PNG";
import key3 from "./assets/key3.PNG";
import key4 from "./assets/key4.PNG";
import key5 from "./assets/key5.PNG";
import key6 from "./assets/key6.PNG";
import key7 from "./assets/key7.PNG";
import key8 from "./assets/key8.PNG";
import devProcess1 from "./assets/devProcess1.PNG";
import devProcess2 from "./assets/devProcess2.PNG";
import devProcess3 from "./assets/devProcess3.PNG";
import devProcess4 from "./assets/devProcess4.PNG";

const ButtonTag = ({ text }) => {
  return (
    <Button
      sx={{
        width: "200px",
        height: "50px",
        backgroundColor: "#3B3F6D",
        border: "1px solid #3B3F6D",
        borderRadius: "0px",
        fontSize: "14px",
        textTransform: "capitalize",
        color: "#fff",
        fontWeight: 700,
        letterSpacing: "0.3px",
        "&:hover": {
          backgroundColor: "transparent",
          color: "#3B3F6D",
          fontWeight: "400",
          border: "1px solid #3B3F6D",
        },
      }}
    >
      {text}
    </Button>
  );
};

function CenterlizedExchange({ openN, setOpenN }) {
  const matches = useMediaQuery("(max-width:870px)");
  const matches1 = useMediaQuery("(max-width: 500px");

  let exchangeDevCards = [
    {
      img: `${exchange1}`,
      heading: "Smart Contract Trading",
      text: "Robust smart contract protocols and escrow integration to augment the trading experience across platforms types like derivatives, decentralized and hybrid exchanges",
    },
    {
      img: `${exchange2}`,
      heading: "Blockchain Platform Stack",
      text: "A range of blockchain technology platforms like Ethereum, Hyperledger, Binance, BCH, NEM, Corda, Stellar, and more to build modern DEXs (decentralized exchanges)",
    },
    {
      img: `${exchange3}`,
      heading: "Over-The-Counter (OTC) Trading",
      text: "Direct deal with other parties with a wide range of assets and no limitation to exchange. Also, quickly sell and buy currencies with contract based Escrow system",
    },
    {
      img: `${exchange4}`,
      heading: "Margin Trading",
      text: "Increase in profit for investors, as they organize their interests in explicit digital currencies with auto leveraging, advanced order types, risk management, and more",
    },
    {
      img: `${exchange5}`,
      heading: "Crypto Liquidity",
      text: "Render customized API and SDK (software development kit) integration to enhance the liquidity and functionalities of a cryptocurrency exchange platform",
    },
    {
      img: `${exchange6}`,
      heading: "KYC and AML",
      text: "Advanced automated KYC/AML verification method integration for accredited investors and authentic transactions, ensuring system authenticity and security",
    },
    {
      img: `${exchange7}`,
      heading: "Token Representation",
      text: "Token with predefined value, multiple token can be exchanged at a time, no limit for token exchange, multiple token acceptance, and encrypted token transaction",
    },
    {
      img: `${exchange8}`,
      heading: "High TPS (Transactions per second)",
      text: "Implementation of the best-in-class blockchain platforms like BCH, Ethereum, and more to achieve high speed of transactions with low-latency",
    },
    {
      img: `${exchange9}`,
      heading: "Top-Notch Match Engine",
      text: "High-performance algorithms of matching buy and sell orders ensuring the most advantageable deals. combines buy and sell orders with reduced latency",
    },
    {
      img: `${exchange10}`,
      heading: "Admin Panel",
      text: "Robust panel, cryptocurrency trading platform management, increase in trade graphs, organize risk management, best backend, and easy to use dashboard",
    },
    {
      img: `${exchange11}`,
      heading: "Intuitive UI",
      text: "Freely-flowing UI design with content mapping on site, responsive layout Implementation, CRM API integration, push notifications, live chat, analytics, and more",
    },
    {
      img: `${exchange12}`,
      heading: "Escrow Service",
      text: "Coin exchange between buyers and sellers using a trusted third party or smart contract. Empowers the protected trade of digital assets among traders",
    },
    {
      img: `${exchange13}`,
      heading: "Payment Gateway Integration",
      text: "Freely-flowing UI design with content mapping on site, responsive layout Implementation, CRM API integration, push notifications, live chat, analytics, and more",
    },
    {
      img: `${exchange14}`,
      heading: "Exchange Wallet",
      text: "Safe storage and transfer of any number of cryptos, use for fund management and dealing of assets including crypto tokens for ensuring the best performance",
    },
  ];

  let keySecurityCards = [
    {
      img: `${key1}`,
      heading: "HTTP Authentication",
      text: "Secure HTTP Authentication tokens like OAuth for user authentication",
    },
    {
      img: `${key2}`,
      heading: "Data Encryption",
      text: "Encryption of data transmission for protecting user credentials and other confidential information",
    },
    {
      img: `${key3}`,
      heading: "Jail Login",
      text: "Prevents multiple failed attempts for a certain amount of time",
    },
    {
      img: `${key4}`,
      heading: "Anti-Denial of Service (DoS)",
      text: "Protection of the exchange from large requests sent to the server",
    },
    {
      img: `${key5}`,
      heading: "CSRF Protection",
      text: "Prevents state-changing requests and other unwanted user actions",
    },
    {
      img: `${key6}`,
      heading: "SSRF Protection",
      text: "Protects internal systems from attacks sent from pregnable web applications",
    },
    {
      img: `${key7}`,
      heading: "HTTP Parameter Pollution Protection",
      text: "Deters web attacks that craft an HTTP request in order to retrieve hidden information",
    },
    {
      img: `${key8}`,
      heading: "Anti-Distributed Denial of Service (DDoS)",
      text: "Defends the exchange from overwhelming traffic originating from multiple sources",
    },
  ];

  let devProcessPart = [
    {
      img: `${devProcess1}`,
      heading: "Research",
      text: "We Analyse the current digital currency market to validate your idea of cryptocurrency exchange platform. Well informed decision-making about all processes and risks involved",
    },
    {
      img: `${devProcess2}`,
      heading: "Design",
      text: "Then, we move to the front-end development that should be interactive enough for trading without any difficulty. With our in-house design studio, we create compelling designs",
    },
    {
      img: `${devProcess3}`,
      heading: "Testing",
      text: "Quality assurance for avoiding the deployment of an erroneous platform risking the customers’ transactions and other financial activities with various types of testing and performance analysis",
    },
    {
      img: `${devProcess4}`,
      heading: "Development",
      text: "Our development team takes over and implements the best methods to create a secure cryptocurrency exchange platform that is fully functional",
    },
  ];

  let centralizeCards = [
    {
      img: `${file}`,
      text: "Multiple Order Types",
    },
    {
      img: `${trade}`,
      text: "Powerful Trading Engine",
    },
    {
      img: `${pay}`,
      text: "Payment Gateway Integration",
    },
    {
      img: `${search}`,
      text: "KYC & AML Integration",
    },
    {
      img: `${lock}`,
      text: "CSRF & SSRF Protection",
    },
    {
      img: `${bitcoin}`,
      text: "Elliptic-curve cryptography wallet",
    },
    {
      img: `${ddos}`,
      text: "DDoS protection and X-XSS-Protection",
    },
    {
      img: `${admin}`,
      text: "Advance Admin Dashboard",
    },
    {
      img: `${wallet}`,
      text: "Multi-Signature Wallet",
    },
    {
      img: `${multi}`,
      text: "Multi-crypto Support",
    },
  ];

  let decentralizeCards = [
    {
      img: `${decenter1}`,
      text: "Robust Smart Contract",
    },
    {
      img: `${decenter2}`,
      text: "Liquidity Management",
    },
    {
      img: `${decenter3}`,
      text: "On-chain Governance",
    },
    {
      img: `${decenter4}`,
      text: "Referral Programs",
    },
    {
      img: `${decenter5}`,
      text: "Advanced Reporting",
    },
    {
      img: `${decenter6}`,
      text: "Blockchain Platform Stack",
    },
    {
      img: `${decenter7}`,
      text: "Multi-crypto Support",
    },
    {
      img: `${decenter8}`,
      text: "High TPS and Scalability",
    },
    {
      img: `${decenter9}`,
      text: "Atomic Swap",
    },
    {
      img: `${decenter10}`,
      text: "Multi-Sig Wallet",
    },
  ];

  let hybridcards = [
    {
      img: `${hybrid1}`,
      text: "List nearest Buyer",
    },
    {
      img: `${hybrid2}`,
      text: "Accurate Trade Matching Engine",
    },
    {
      img: `${hybrid3}`,
      text: "Dispute management system",
    },
    {
      img: `${hybrid4}`,
      text: "Reporting and Analytics",
    },
    {
      img: `${hybrid5}`,
      text: "Multi-Language Support",
    },
    {
      img: `${hybrid6}`,
      text: "Advanced Admin Panel",
    },
    {
      img: `${hybrid7}`,
      text: "Smart Contract- Powered Escrow",
    },
    {
      img: `${hybrid8}`,
      text: "Atomic Swapping",
    },
    {
      img: `${hybrid9}`,
      text: "KYC Verification",
    },
    {
      img: `${hybrid10}`,
      text: "Private messaging",
    },
  ];

  let oodlesCard = [
    {
      img: `${oodles1}`,
      text: "various exchange feature",
    },
    {
      img: `${oodles2}`,
      text: "Enhanced Wallets Security",
    },
    {
      img: `${oodles3}`,
      text: "Multiple Cryptocurrency Integration",
    },
    {
      img: `${oodles4}`,
      text: "Liquidity Provider Integration",
    },
    {
      img: `${oodles5}`,
      text: "Intuitive Admin Panel and Features",
    },
    {
      img: `${oodles6}`,
      text: "Advanced Performance and Scalability",
    },
  ];

  let list = [
    "Supports major digital currencies like Bitcoin, Bitcoin Cash, Ethereum, Litecoin and many more",
    "Supports USD and major fiat currencies",
    "Automates KYC/AML verification for accredited investors and legitimate transactions",
    "Comes integrated with a secure crypto wallet with multi currency and multi-signatures support",
    "Ensures GDPR compliance with advanced security protocols including DDoS, X-XSS, 2FA and many more",
    "Provides Dominant Matching engine and crypto price ticker tool",
    "Offers compatibility with both web and mobile applications, iOS and Android.",
    "Offers robust performance – 100K+ transactions per second",
    "Protects with advanced security with encryption, 2FA, cold storage, and access management",
    "Integrates customizable UI that can be designed in line with your brand book",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box pt="100px">
      {/* ---------Main section of crypto wallet page----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box bgcolor="#3b3f6d">
        <Container>
          <Box py={7}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Box
                    pt={{ xs: 0, md: 10 }}
                    fontSize={{ xs: "25px", sm: "44px" }}
                    fontWeight={700}
                    letterSpacing="0.2px"
                    color="#fff"
                    lineHeight={{ xs: "auto", sm: "56px" }}
                  >
                    Cryptocurrency Exchange Development Company
                  </Box>

                  <Box
                    m="auto"
                    my={3}
                    fontSize={{ xs: "12px", sm: "16px" }}
                    fontWeight={400}
                    color="#fff"
                    letterSpacing="0.3px"
                    width={{ xs: "90%", md: "100%" }}
                    lineHeight="22px"
                  >
                    Provide the power to buy, sell, and trade cryptocurrencies
                    securely and efficiently with our cryptocurrency exchange
                    development services
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
                      TALK TO OUR EXPERTS
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="flex-end">
                  <img src={main} width={matches1 ? "100%" : "80%"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------crypto exchange development part----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box bgcolor="#f8f8f8">
        <Box
          textAlign="center"
          py={7}
          m="auto"
          width={{ xs: "80%", md: "90%" }}
        >
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Cryptocurrency Exchange Development Services
          </Typography>
          <Typography color="primary.main" mt={4}>
            The applications, usage, and demand of cryptocurrencies are soaring
            at a breakneck speed. It is an attestation that they are less likely
            to experience a downturn soon in the future.
          </Typography>
        </Box>
        <Divider />

        <Typography
          textAlign="center"
          m="auto"
          py={7}
          fontSize={{ xs: "12px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          width={{ xs: "80%", md: "90%" }}
          lineHeight="22px"
          color="primary.main"
        >
          An exchange software is essential to facilitate trades between
          cryptocurrency buyers and sellers. However, only developing a crypto
          exchange platform is not sufficient to thrive in today's market. It
          has now become a priority to build an exchange with advanced features
          and functionalities. The platform needs to ensure fund security,
          information privacy, and operational efficiency while also
          continuously improving the user experience. Our crypto exchange
          development services assure that a platform thrives in the relentless
          competition in the crypto exchange market effortlessly
        </Typography>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------Centralized crypto cards----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}

      <Box textAlign="center" py={5} bgcolor="#f8f8f8">
        <Container>
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Centralized Cryptocurrency Exchange Development Services
          </Typography>
          <Typography
            mt={2}
            mb={3}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="primary.main"
            letterSpacing="0.3px"
            lineHeight="22px"
          >
            We develop centralized crypto exchanges like Binance or Coinbase
            with advanced features and security mechanisms that include, but are
            not limited
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {centralizeCards.map(({ img, text }, i) => {
              return (
                <Grid item xs={6} sm={4} md={3}>
                  <Box p={5} height="100%">
                    <Box height="60px">
                      <img src={img} />
                    </Box>
                    <Typography
                      pt={3}
                      textAlign="center"
                      fontSize={{ xs: "14px", sm: "18px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "24px" }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------decentralized crypto cards----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box textAlign="center" py={5}>
        <Container>
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Decentralized Cryptocurrency Exchange Development Services
          </Typography>
          <Typography
            mt={2}
            mb={3}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="primary.main"
            letterSpacing="0.3px"
            lineHeight="22px"
          >
            We develop centralized crypto exchanges like Binance or Coinbase
            with advanced features and security mechanisms that include, but are
            not limited
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {decentralizeCards.map(({ img, text }, i) => {
              return (
                <Grid item xs={6} sm={4} md={3}>
                  <Box p={5} height="100%">
                    <Box height="60px">
                      <img src={img} />
                    </Box>
                    <Typography
                      pt={3}
                      textAlign="center"
                      fontSize={{ xs: "14px", sm: "18px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "24px" }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------Hybrid crypto cards----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box textAlign="center" py={5} bgcolor="#f8f8f8">
        <Container>
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Hybrid Cryptocurrency Exchange Development Services
          </Typography>
          <Typography
            mt={2}
            mb={3}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="primary.main"
            letterSpacing="0.3px"
            lineHeight="22px"
          >
            We develop hybrid crypto exchanges, also known as p2p (peer-to-peer)
            crypto exchange, that combine the best of other two types while
            addressing their challenges
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {hybridcards.map(({ img, text }, i) => {
              return (
                <Grid item xs={6} sm={4} md={3}>
                  <Box p={5} height="100%">
                    <Box height="60px">
                      <img src={img} />
                    </Box>
                    <Typography
                      pt={3}
                      textAlign="center"
                      fontSize={{ xs: "14px", sm: "18px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "24px" }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      <Box py={7} m="auto" textAlign="center" width="93%">
        <Typography
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          color="primary.main"
          lineHeight={{ xs: "auto", sm: "56px" }}
        >
          Additional Cryptocurrency Exchange Development Services
        </Typography>
        <Typography color="primary.main" mt={3}>
          We develop hybrid crypto exchanges, also known as p2p (peer-to-peer)
          crypto exchange, that combine the best of other two types while
          addressing their challenges
        </Typography>
      </Box>

      {/* ---------Exchange Platform  development----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box py={5} bgcolor="#f8f8f8">
        <Container>
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            textAlign="center"
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Derivatives Exchange/Trading Platform Development
          </Typography>

          <Box mt={5}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  fontSize={{ xs: "12px", sm: "16px" }}
                  letterSpacing="0.1px"
                  color="primary.main"
                  lineHeight={{ xs: "auto", sm: "24px" }}
                >
                  We develop derivatives trading platforms that ensure
                  accelerated time-to-market with risk management capabilities
                  at the back-end and an engaging customer experience at the
                  front. Our derivatives exchange development services comprise
                  the following types
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box textAlign="right">
                  <img src={pic1} width={matches ? "100%" : ""} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={4} mb={2} px={5} textAlign="center">
            <Grid container spacing={3} justifyContent="center">
              {[
                "Future Trading",
                "Forwards Trading",
                "Options Trading",
                "Perpetual Trading",
              ].map((btnText) => {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <ButtonTag text={btnText} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------One page Exchange development----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box py={5}>
        <Container>
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            textAlign="center"
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            One-page Exchange Development
          </Typography>

          <Box mt={5}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={6}>
                <Box textAlign="left">
                  <img src={pic2} width={matches ? "100%" : ""} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Typography
                  fontSize={{ xs: "12px", sm: "16px" }}
                  letterSpacing="0.1px"
                  color="primary.main"
                  lineHeight={{ xs: "auto", sm: "24px" }}
                >
                  Enable beginner and intermediate level investors to trade
                  efficiently and securely with one-page crypto exchange
                  development at Oodles. Expedite the exchange's operational
                  efficiency with no KYC process verification and
                  deposit/withdrawal pricing
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={4} mb={2} px={5} textAlign="center">
            <Grid container spacing={3} justifyContent="center">
              {[
                "Multi-Crypto Trading",
                "Robust Matching Engine",
                "Multi-sig and Elliptic Cryptography Wallets",
                "Other back-end support and functionalities",
              ].map((btnText) => {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <ButtonTag text={btnText} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      <Box py={7} m="auto" bgcolor="#f8f8f8" textAlign="center">
        <Container>
          <Typography
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            White Label Crypto Exchange Platform Development
          </Typography>
          <Typography color="primary.main" mt={4}>
            How to quickly set up a cryptocurrency exchange with all the
            advanced functionalities and features? Explore a turnkey,
            white-label platform and enter the market in a matter of weeks. We
            offer ready-made, cost-effective white-lable crypto exchange
            solutions that you can brand and customize to bring alive your
            vision. Things we keep on priority when offering a white-label
            solution include a robust solution architecture, the platform's
            digital assets storage capabilities, compliance standards, security,
            scalability, and costs involved
          </Typography>
        </Container>
      </Box>

      <Box py={7}>
        <Container>
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            textAlign="center"
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Our white label exchange features
          </Typography>
          <Box>
            <ul className="cryptoWalletList">
              {list.map((text) => {
                return <li style={{ color: "#3b3f6d" }}>{text}</li>;
              })}
            </ul>
          </Box>
        </Container>
      </Box>

      {/* ---------Oodles Cards----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box textAlign="center" py={5} bgcolor="#f8f8f8">
        <Container>
          <Typography
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Oodles Scaffold
          </Typography>
          <Typography
            mt={2}
            mb={3}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="primary.main"
            letterSpacing="0.3px"
            lineHeight="22px"
          >
            Scaffold is our flagship cryptocurrency exchange platform solution.
            It comprises blazing-fast performance and state-of-the-art security
            mechanism
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {oodlesCard.map(({ img, text }, i) => {
              return (
                <Grid item xs={12} sm={4} md={4}>
                  <Box p={5} height="100%">
                    <Box height="80px">
                      <img src={img} />
                    </Box>
                    <Typography
                      pt={3}
                      textAlign="center"
                      fontSize={{ xs: "14px", sm: "18px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "24px" }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box textAlign="center" mb={2}>
            <Button
              onClick={() => setOpenN(true)}
              sx={{
                width: "200px",
                height: "50px",
                backgroundColor: "#3B3F6D",
                border: "1px solid #3B3F6D",
                borderRadius: "0px",
                fontSize: "14px",
                textTransform: "capitalize",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "0.3px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#3B3F6D",
                  fontWeight: "400",
                  border: "1px solid #3B3F6D",
                },
              }}
            >
              Request A Demo
            </Button>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------Crypto exchange development Cards----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box textAlign="center" py={5}>
        <Container>
          <Typography
            mb={5}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Crypto Exchange Development | Significant Features
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {exchangeDevCards.map(({ img, heading, text }, i) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    p={5}
                    height="100%"
                    boxShadow="0px 0px 32px 3px rgb(0 0 0 / 8%)"
                    borderRadius="6px"
                  >
                    <Box height="80px">
                      <img src={img} />
                    </Box>
                    <Typography
                      pt={3}
                      textAlign="center"
                      fontSize={{ xs: "14px", sm: "18px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "24px" }}
                    >
                      {heading}
                    </Typography>
                    <Typography
                      pt={2}
                      fontSize={{ xs: "12px", sm: "14px" }}
                      letterSpacing="0.2px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "20px" }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box textAlign="center" mt={5} mb={2}>
            <Button
              onClick={() => setOpenN(true)}
              sx={{
                width: "200px",
                height: "50px",
                backgroundColor: "#3B3F6D",
                border: "1px solid #3B3F6D",
                borderRadius: "0px",
                fontSize: "14px",
                textTransform: "capitalize",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "0.3px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#3B3F6D",
                  fontWeight: "400",
                  border: "1px solid #3B3F6D",
                },
              }}
            >
              Let's Connect
            </Button>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------Key Security Cards----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box textAlign="center" py={5} bgcolor="#f8f8f8">
        <Container>
          <Typography
            mb={5}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Key Security Mechanism
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {keySecurityCards.map(({ img, heading, text }, i) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    p={5}
                    height="100%"
                    bgcolor="#fff"
                    boxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                    borderRadius="8px"
                  >
                    <img src={img} />
                    <Typography
                      pt={1}
                      textAlign="center"
                      fontSize={{ xs: "14px", sm: "18px" }}
                      fontWeight={700}
                      letterSpacing="0.1px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "24px" }}
                    >
                      {heading}
                    </Typography>
                    <Typography
                      pt={5}
                      fontSize={{ xs: "12px", sm: "14px" }}
                      letterSpacing="0.2px"
                      color="primary.main"
                      lineHeight={{ xs: "auto", sm: "20px" }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box textAlign="center" mt={5} mb={2}>
            <Button
              onClick={() => setOpenN(true)}
              sx={{
                width: "200px",
                height: "50px",
                backgroundColor: "#3B3F6D",
                border: "1px solid #3B3F6D",
                borderRadius: "0px",
                fontSize: "14px",
                textTransform: "capitalize",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "0.3px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#3B3F6D",
                  fontWeight: "400",
                  border: "1px solid #3B3F6D",
                },
              }}
            >
              Let's Connect
            </Button>
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------Development Process----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box py={5} mb={4}>
        <Container>
          <Typography
            mb={5}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
            textAlign="center"
          >
            Our Development Process
          </Typography>

          <Box>
            {devProcessPart.map(({ img, heading, text }, i) => {
              return (
                <Box py={3}>
                  <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={4} sm={4} md={2}>
                      <Box textAlign="center">
                        <img src={img} />
                      </Box>
                    </Grid>
                    <Grid item xs={8} sm={8} md={10}>
                      <Typography
                        fontSize={{ xs: "14px", sm: "18px" }}
                        fontWeight={700}
                        letterSpacing="0.1px"
                        color="primary.main"
                        lineHeight={{ xs: "auto", sm: "24px" }}
                      >
                        {heading}
                      </Typography>
                      <Typography
                        pt={2}
                        fontSize={{ xs: "12px", sm: "16px" }}
                        letterSpacing="0.2px"
                        color="primary.main"
                        lineHeight={{ xs: "auto", sm: "20px" }}
                      >
                        {text}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}

      {/* ---------Why Choose us part----------- */}
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box textAlign="center" py={5} bgcolor="#f8f8f8">
        <Container>
          <Typography
            mb={3}
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Why Choose Us
          </Typography>
          <Box>
            <img src={chooseUs} width={matches ? "100%" : ""} />
          </Box>
        </Container>
      </Box>
      {/* /////////////////////////////////////////////////////////////////// */}
      <Box textAlign="center" py={5}>
        <Button
          onClick={() => setOpenN(true)}
          sx={{
            width: "200px",
            height: "50px",
            backgroundColor: "#3B3F6D",
            border: "1px solid #3B3F6D",
            borderRadius: "0px",
            fontSize: "14px",
            textTransform: "capitalize",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: "0.3px",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#3B3F6D",
              fontWeight: "400",
              border: "1px solid #3B3F6D",
            },
          }}
        >
          Let's Connect
        </Button>
      </Box>
    </Box>
  );
}

export default CenterlizedExchange;

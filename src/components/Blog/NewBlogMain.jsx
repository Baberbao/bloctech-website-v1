import React, { useEffect } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import bg from "./assets/bg.png";
import bg1 from "./assets/bg1.png";

import img2 from "./assets/img2.png";

import thumbnail from "./assets/thumbnail1.png";
import thumb4 from "./assets/thumb4.png";
import thumb5 from "./assets/thumb5.png";
import thum6 from "./assets/thum6.png";
import thumb7 from "./assets/thumb7.png";
import thumb12 from "./assets/thumb12.png";

import thumb8 from "./assets/thumb8.png";
import thumb9 from "./assets/thumb9.png";
import thumb10 from "./assets/thumb10.png";
import thumb11 from "./assets/thumb11.png";
import thumb13 from "./assets/thumb13.png";
import thumb14 from "./assets/thumb14.png";
import thumb15 from "./assets/thumb15.png";
import thumb16 from "./assets/thumb16.png";
import thumb17 from "./assets/thumb17.png";
import thumb18 from "./assets/thumb18.png";
import thumb20 from "./assets/thumb20.png";
import thumb19 from "./assets/thumb19.png";
import thumb21 from "./assets/thumb21.png";
import thumb23 from "./assets/thumb23.jpg";
import thumb22 from "./assets/thumb22.png";
import thumb24 from "./assets/thumb24.png";
import thumb25 from "./assets2/thumb25.png";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import CustomBreadCrumbs from "./CustomBreadCrumbs";
import blog2 from "./assets/blogtwo1.png";

const NewBlogMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogCards = [
    {
      pic: `${blog2}`,
      desc: "Smart contract ensures that all parties will be satisfied. Speed, efficiency, security and accuracy are considered the major benefits of smart contracts.",
      link: "understanding-the-working-and-benefits-of-smart-contract",
      title: "Understanding the working and benefits of Smart Contracts",
    },
    {
      pic: `${img2}`,
      desc: "Crypto assets are reffered to as tokens and when they operate in a chain of blocks, they are reffered as Blockchain Tokens. here you will be elaborated by types of tokens.",
      link: "what-is-a-blockchain-token-and-how-many-types-of-tokens-are-there",
      title:
        "What is a Blockchain Token? And how many Types of Tokens are there?",
    },
    {
      pic: `${thumb4}`,
      desc: "You will learn about what are decentralized applications. platforms and process of dapp development and benefits of decentralized applications.",
      link: "guide-to-dapp-development-and-benefits-of-decentralized-applications",
      title:
        "Guide to dApp Development and Benefits of Decentralized Applications",
    },
    {
      pic: `${thumb5}`,
      desc: "DAO is the decentralized autonomous organization where every individual often has a similar objective and makes an effort to behave in the entity's best interests.",
      link: "what-exactly-is-a-dao-Its-working-and-benefits",
      title:
        "What exactly is a DAO? (Decentralized Autonomous Organization), Its working and Benefits",
    },
    {
      pic: `${thum6}`,
      desc: "The decentralized finance system (DeFi) is swiftly gaining popularity as a safer, more open, and more effective substitute respect to conventional financial services.",
      link: "what-is-defi-a-beginners-guide-to-decentralized-finance-system",
      title: "What is Defi? A Beginners Guide to Decentralized Finance System",
    },
    {
      pic: `${thumb7}`,
      desc: "Peer to peer (p2p) lending platform and blockchain integration. understand the benefits of peer to peer lending platform",
      link: "complete-guide-to-peer-to-peer-lending-platforms-with-blockchain-Integration",
      title:
        "Complete guide to Peer to Peer Lending Platforms with Blockchain Integration",
    },
    {
      pic: `${thumb8}`,
      desc: "centralized exchanges are trading platforms where you can trade cryptocurrencies or crypto assets. centralized exchange platforms work as a third party between traders.",
      link: "what-is-a-centralized-exchange-CEX-and-how-CEX-work",
      title: "What is a centralized exchange (CEX) and how CEX work?",
    },
    {
      pic: `${thumb9}`,
      desc: "Multichain blockchain is a blockchain platform that was developed to generate blockchain applications that may operate both within and across organizations",
      link: "what-is-multichain-defining-the-working-of-multichain-blockchain",
      title:
        "What is Multichain? Defining the working of Multichain Blockchain",
    },
    {
      pic: `${thumb10}`,
      desc: "here you know about crypto wallet and its usage in cryptocurrency. We offer complete and secure crypto wallet development services",
      link: "defining-crypto-wallet-and-the-processes-of-crypto-wallet-development",
      title:
        "Defining Crypto wallet and the Processes of crypto wallet development.",
    },
    {
      pic: `${thumb11}`,
      desc: "Invest in peer to peer lending platforms and measure how P2P will benefit the lenders and borrowers. increase you return on investment ratio with P2P lending.",
      link: "advantages-and-disadvantages-of-peer-to-peer-lending-P2P",
      title: "Working, Pros & Cons of Peer to Peer Lending (P2P)",
    },
    {
      pic: `${thumb12}`,
      desc: "The 8 Most popular DApps in 2022. 1 Uniswap, 2 Pancakeswap, 3 Opensea, 4 MakerDAO, 5 Axie Infinity, 6 Upland, 7 STEPN, 8 AAVE.",
      link: "8-most-popular-DApps-of-2022",
      title: "8 most popular DApps of 2022 - BlocTech Solutions",
    },
    {
      pic: `${thumb13}`,
      desc: "The integration of Blockchain in the Real Estate Industry will revolutionize the future and Reshape the Transaction Process. This will eventually benefit the record system of real estate.",
      link: "blockchain-in-real-estate-industry-reshape-the-transaction-process",
      title:
        "Blockchain in Real Estate Industry: Reshape the Transaction Process",
    },
    {
      pic: `${thumb14}`,
      desc: "Discus NFT Smart Contracts. organizations knows the value of Smart contracts and we are going to educate about how they can help you with NFTs",
      link: "the-complete-guide-to-nft-smart-contracts",
      title: "The Complete Guide to NFT Smart Contracts",
    },
    {
      pic: `${thumb15}`,
      desc: "There are two types of crypto wallets that are pretty common, Hot wallets and Cold wallets. These are further divided into various parts that are completely based on Blockchain integration.",
      link: "varioys-types-of-crypto-wallets-with-distinguished-properties",
      title: "Types of Crypto Wallets & Properties - BlocTech",
    },
    {
      pic: `${thumb16}`,
      desc: "Here we are going to give you guys a Brief Guide for DeFi vs CeFi. How decentralized finance is way much better than centralized finance or traditional financing infrastructure",
      link: "brief-guide-for-defi-vs-cefi-every-aspect-you-need-to-know",
      title: "Brief Guide for DeFi vs CeFi: Every aspect you need to know",
    },
    {
      pic: `${thumb17}`,
      desc: "we will give you answers to why people talk about Centralized vs Decentralized Exchanges. Major differences and which will be beneficial for Business growth.",
      link: "centralized-vs-decentralized-exchanges-a-brief-comparison",
      title: "Centralized vs Decentralized Exchanges, A Brief Comparison",
    },
    {
      pic: `${thumb18}`,
      desc: "Crypto token vs coin, how do they relate, and what is the major difference between crypto token and coin? in this blog, we are going to discuss this in detail.",
      link: "crypto-token-vs-coin-what-is-the-major-difference",
      title: "Crypto Token vs Coin - What is the major difference ?",
    },
    {
      pic: `${thumb20}`,
      desc: "Read about smart contract use cases that can prove the effectiveness of Blockchain Technology in Business and other Real-world Examples.",
      link: "10-smart-contract-use-cases-beneficial-for-businesses",
      title:
        "10 Smart Contract Use-Cases That Are Practically Beneficial for Businesses",
    },
    {
      pic: `${thumb19}`,
      desc: "Here you will find about Best example of DAOs that are performing well and build a well-known example for other organizations to develop DAOs structure.",
      link: "best-examples-of-daos-you-need-to-know-about",
      title: "Best Examples of DAOs You Need to Know About",
    },
    {
      pic: `${thumb21}`,
      desc: "How Blockchain Started? What is happening in the current process and what will Blockchain's future be? Read Everything in History and Evolution of Blockchain Technology Blog.",
      link: "history-and-evolution-of-blockchain-technology",
      title: "History and Evolution of Blockchain Technology",
    },
    {
      pic: `${thumb22}`,
      desc: "How Blockchain Started? What is happening in the current process and what will Blockchain's future be? Read Everything in History and Evolution of Blockchain Technology Blog.",
      link: "the-core-difference-between-web-3.0-and-web-2.0",
      title:
        "Understand Web 3.0 and the Core Difference between Web 3.0 and Web 2.0",
    },
    {
      pic: `${thumb23}`,
      desc: "Both investors and consumers are making big profits by investing in WEB 3.0 you guys also need some understanding on How to invest in the web 3 ecosystem?",
      link: "how-to-invest-in-web3-ecosystem",
      title: "A Detailed Guide: How to invest in Web3 Ecosystem?",
    },
    {
      pic: `${thumb24}`,

      desc: "when we talk about the use cases of blockchain technology in business there are numbers of applications where blockchain can be used to secure the DATA.",
      link: "use-cases-of-blockchain-technology",
      title: "Rising Number of Use Cases of Blockchain Technology in Business",
    },
    {
      pic: `${thumb25}`,

      desc: "The economy is upgrading and NFTs are getting most of the attractions. We need to understand what are NFTs and How NFTs works?",
      link: "what-is-nft-and-how-does-nft-work",
      title:
        "What is NFT and how does NFT work? A Comprehensive Guide for Beginners",
    },
  ];
  //tabs
  // const [value, setValue] = React.useState(0);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const backward = () => {
  //   if (value > 0) {
  //     setValue(value - 1);
  //   }
  //   if (value == 0) {
  //     setValue(3);
  //   }
  // };

  // const forward = () => {
  //   if (value < 3) {
  //     setValue(value + 1);
  //   }
  //   if (value == 3) {
  //     setValue(0);
  //   }
  // };
  const link =
    "what-Is-blockchain-technology-how-Is-It-Important-for-data-security";
  return (
    <div>
      <Helmet>
        <title>Blockchain Blog | BlocTech Solutions</title>
        <meta
          name="description"
          content="The BlocTech solutions' Blockchain Blog, features blockchain technology, applications, multichain networking, smart contracts, crypto token, and their development process."
        />
        <meta name="title" content="Blockchain Blog | BlocTech Solutions" />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Blockchain blog, blockchain blog topic, blockchain blog platforms"
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Box

      // pt={{ md: "95px", xs: "79px" }}
      >
        <Box
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: { sm: "center", xs: "left" },
            backgroundSize: { sm: "cover", xs: "cover" },
            backgroundRepeat: "no-repeat",
          }}
          pt={{ xs: "79px", md: "95px" }}
          pb={"100px"}
        >
          <Container>
            {/* <CustomBreadCrumbs /> */}
            <Box
              component="h1"
              m="auto"
              pt={"50px"}
              textAlign="center"
              fontSize={{ xs: "25px", sm: "44px" }}
              fontWeight={700}
              letterSpacing="0.2px"
              lineHeight={{ xs: "auto", sm: "56px" }}
              color="white"
            >
              Blockchain Blog
            </Box>
            <Typography
              mt={2}
              variant="body1"
              fontSize="18px"
              textAlign="center"
              color="white"
            >
              BlocTech is guiding its audience with the tone of informational
              Blockchain Blogs. Every person related to the Tech field can feel
              the hype of Blockchain and Its Innovative infrastructure, which
              maintains and optimizes data transactional activity. WE are here
              to guide our audience and build the best blockchain solutions
              ever.
            </Typography>

            {/* ========================TAB  Components  ====================== */}
            <Box mt={{ xs: 5, md: 12 }}>
              {/* <TabPanel value={value} index={0}> */}
              {/* =========== Blockchain Components  =========== */}
              <Grid container spacing={5} sx={{ alignItems: "center" }}>
                <Grid item xs={12} sm={5}>
                  <Link
                    to={`/blog/${link}/`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={thumbnail}
                      alt="Blockchain Technology and its working in Data Security"
                      width="100%"
                      style={{
                        transaction: "0.5s",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Box>
                    <Link
                      to={`/blog/${link}/`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box component="h2" m="0px" p="px">
                        <Typography
                          color="#fff"
                          fontSize={{ xs: "25px", md: "35px" }}
                          fontWeight="700"
                          lineHeight="50px"
                        >
                          What Is Blockchain Technology? How Is It Important for
                          Data Security?
                          <Divider
                            sx={{
                              backgroundColor: "#fff",
                              width: "40px",
                              height: "2px",
                              borderRadius: "4px",
                            }}
                          />
                        </Typography>
                      </Box>
                    </Link>
                    <Typography
                      mt={"10px"}
                      variant="body1"
                      fontSize="18px"
                      color="#fff"
                      lineHeight="22px"
                    >
                      A distributed database or ledger that is shared by the
                      nodes of a computer network is what blockchain technology
                      is. For storing data in digital form, a blockchain acts as
                      an electronic database.
                    </Typography>
                    <Link
                      to={`/blog/${link}/`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        disableRipple={true}
                        sx={{
                          background:
                            "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                          width: "115px",
                          height: "42px",
                          marginTop: "10px",
                          borderRadius: "0px",
                          textTransform: "capitalize",
                          fontWeight: "700",
                          fontSize: "14px",
                          color: "#fff",
                          "&: hover": {
                            background:
                              "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                          },
                        }}
                      >
                        learn more
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        {/* =========== Latest Release Components =========== */}
        <Container>
          <Box py={10}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="body1"
                fontSize={{ xs: "18px", md: "23px" }}
                fontWeight="700"
                lineHeight="50px"
                color="#fff"
              >
                Latest Release
              </Typography>
              <Typography
                variant="body1"
                color="#fff"
                sx={{
                  background: "#41015F",
                  borderRadius: "4px",
                  height: "30px",
                  width: "131px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                All Topics{" "}
                <KeyboardDoubleArrowRightIcon
                  sx={{ fontSize: "16px", marginTop: "5px", marginLeft: "5px" }}
                />
              </Typography>
            </Box>

            <Box mt={5}>
              <Grid container spacing={3}>
                {blogCards.map(({ pic, desc, link, title }, i) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      position="relative"
                      mt="30px"
                    >
                      <Box
                        height="100%"
                        sx={{
                          backgroundImage: `url(${bg1})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100% 100%",
                          "&:hover": {
                            // position: "absolute",
                            transform: "translateY(20)",
                            marginTop: "-40px",
                            pb: "40px",
                          },
                          transition: "0.3s ease",
                        }}
                      >
                        <Link
                          to={`/blog/${link}/`}
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                          }}
                        >
                          <Box borderRadius="12px" overflow="hidden">
                            <img src={pic} alt="" width="100%" />
                            <Box p={2}>
                              <Box component={"h3"} py="10px" m="0px">
                                <Typography fontSize={"18px"} fontWeight="700">
                                  {title}
                                </Typography>
                              </Box>
                              <Typography
                                variant="body1"
                                color="#fff"
                                fontWeight="700"
                              >
                                {desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Link>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default NewBlogMain;

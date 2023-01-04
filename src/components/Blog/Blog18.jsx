import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bg from "./assets/bgf.png";
import blog3img from "./assets/blog18.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog18 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary: " Is Bitcoin a coin or token?",
      details:
        "A cryptocurrency like bitcoin allows users to exchange and make purchases using virtual tokens or coins.",
    },
    {
      summary: "Can a token become a coin?",
      details:
        "When a project creates its own blockchain and transfers its tokens to the new blockchain as coins, tokens can eventually turn into coins. ",
    },
    {
      summary: " Are tokens the same as coins?",
      details:
        "The primary difference between coins and tokens, according to the cryptocurrency sector, is that coins are the native asset of a Blockchain like Bitcoin or Ethereum, whereas tokens are produced by platforms and apps that are built on top of an existing Blockchain.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/crypto-token-vs-coin-what-is-the-major-difference/",
      },
      headline: "Crypto Token vs Coin - What is the major difference?",
      description:
        "crypto token describes a unique digital money token or the unit of measure for cryptocurrencies. These tokens stand for negotiable, marketable goods or services that are stored on separate blockchains.",
      image: "",
      author: {
        "@type": "",
        name: "Iqra Kanwal",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      FAQ: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Bitcoin a coin or token?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A cryptocurrency like bitcoin allows users to exchange and make purchases using virtual tokens or coins.",
            },
          },
          {
            "@type": "Question",
            name: "Can a token become a coin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When a project creates its own blockchain and transfers its tokens to the new blockchain as coins, tokens can eventually turn into coins.",
            },
          },
          {
            "@type": "Question",
            name: "Are tokens the same as coins?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The primary difference between coins and tokens, according to the cryptocurrency sector, is that coins are the native asset of a Blockchain like Bitcoin or Ethereum, whereas tokens are produced by platforms and apps that are built on top of an existing Blockchain.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "Crypto Token vs Coin - What is the major difference?";
  return (
    <div>
      <Box
        pb={10}
        pt={20}
        px={{ xs: 1, md: 7 }}
        sx={{
          // backgroundImage: `url(${blogDetailBG})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Helmet>
          <title>Crypto Token vs Coin - What is the major difference?</title>
          <meta
            name="description"
            content="
            Crypto token vs coin, how do they relate, and what is the major difference between crypto token and coin? in this blog, we are going to discuss this in detail.
         "
          />
          <meta
            name="title"
            content="Crypto Token vs Coin - What is the major difference?"
          />
          <meta charset="utf-8" />
          <meta name="keywords" content="crypto token vs coin" />

          <link rel="canonical" href={window.location.href} />
          <script type="application/ld+json">{structureData()}</script>
        </Helmet>
        <Container maxWidth="md">
          <Box
            display="flex"
            justify="space-evenly"
            flexWrap={"wrap"}
            color="white"
            align="center"
            fontWeight="bold"
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                paddingTop: "3px",
                "&:hover": {
                  color: "#CC10C6",
                },
              }}
            >
              {" "}
              Home{" "}
            </Link>
            <IconButton>
              <ArrowForwardIosIcon
                sx={{ color: "white", fontSize: "1rem", fontWeight: "400" }}
              />
            </IconButton>
            <Link
              to="/blog/"
              style={{
                textDecoration: "none",
                color: "white",
                paddingTop: "3px",
                "&:hover": {
                  color: "#CC10C6",
                },
              }}
            >
              {" "}
              Blogs
            </Link>
            <IconButton>
              <ArrowForwardIosIcon
                sx={{ color: "white", fontSize: "1rem", fontWeight: "400" }}
              />
            </IconButton>
            <Box
              style={{
                color: "white",
                paddingTop: "3px",
                cursor: "pointer",
                "&:hover": {
                  color: "#CC10C6",
                },
              }}
            >
              {" "}
              {title}
            </Box>
          </Box>
          <Box
            component="img"
            src={blog3img}
            alt="Peer to peer lending Platforms"
            width="100%"
          />
          <Box
            mt="20px"
            sx={{
              display: "flex",
              justifyContent: {
                xs: "flex-start",
                md: "flex-start",
              },
              alignItems: "center",
            }}
          >
            <Box pr="10px">
              <Avatar src={author} />{" "}
            </Box>{" "}
            <Box>
              <Typography
                color="white"
                fontSize="14px"
                fontStyle="italic"
                fontWeight="bold"
              >
                {" "}
                Iqra Kanwal{" "}
              </Typography>
              <Typography
                color="white"
                fontSize="12px"
                fontStyle="italic"
                fontWeight="bold"
              >
                {" "}
                OCT 10 2022
              </Typography>
            </Box>{" "}
          </Box>
          <Box>
            <Box
              component="h1"
              color="#fff"
              sx={{
                fontSize: { xs: "28px", md: "44px" },
                lineHeight: { xs: "40px", md: "50px" },
              }}
            >
              {title}
            </Box>
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="30px"
                fontWeight="700"
              >
                Crypto token:
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              "crypto token" describes a unique digital money token or the unit
              of measure for cryptocurrencies. These tokens stand for
              negotiable, marketable goods or services that are stored on
              separate blockchains.
            </Typography>
            <Typography mt={2}>A crypto token</Typography>
            <ul>
              <li>
                A decentralized project uses an existing blockchain to create a
                <Link
                  to="/blog/what-is-a-blockchain-token-and-how-many-types-of-tokens-are-there/"
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",

                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  cryptocurrency token
                </Link>
                (usually Ethereum, the most popular blockchain for decentralized
                projects to build upon)
              </li>
              <li>
                A token gives its holders platform-specific functionality or
                serves as a representation of an asset.
              </li>
              <li>
                Utility, security, and governance are just a few of the features
                that tokens provide.
              </li>
              <li>
                Uniswap, Very, Very Simple Finance, and Cronos are other
                examples (UNI)
              </li>
            </ul>
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="30px"
                fontWeight="700"
              >
                Purpose of token:
              </Typography>
            </Box>{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Like legal cash, crypto tokens can be used as a means of exchange
              or to reflect an investor's ownership share in the business. This
              implies that token owners can use them to fund transactions or
              sell them for profit, just like traditional securities.
            </Typography>
            <Box mt={4} color="#fff">
              <Box component="h2">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="30px"
                  fontWeight="700"
                >
                  Coin:
                </Typography>
              </Box>

              <Box mt={4} color="#fff">
                {/* <Box component="h3">
                                    <Typography
                                        sx={{
                                            background:
                                                "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                            textFillColor: "transparent",
                                        }}
                                        fontSize="25px"
                                        fontWeight="700"
                                    >
                                        Cost reduction:
                                    </Typography>
                                </Box> */}
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  a cryptocurrency or kind of electronic money that is not
                  dependent on another platform or blockchain. A coin's primary
                  characteristic is its usage as money, while the name "coin"
                  can also refer to a cryptocurrency asset that is not a token.
                  <br />
                  Coins, in a contrast to bitcoin tokens, are not meant to
                  perform utility activities, such as representing votes within
                  a community or signifying storage space on decentralized cloud
                  storage. An alternative is a coin, which functions as a local
                  currency inside a particular financial system and runs on its
                  own separate blockchain.
                  <br />
                  Therefore, inside a virtual economic network, a currency
                  serves as a store of value or a means of trade. Most
                  blockchains function as a decentralized, distributed ledger
                  that records and validates every transaction, and their native
                  currency may only be moved between users on this specific
                  network.
                </Typography>
              </Box>
              <Box mt={4} color="#fff">
                <Box component="h2">
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                    fontSize="30px"
                    fontWeight="700"
                  >
                    Uses of the coin:
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  It was intended for use as a replacement for conventional fiat
                  currencies when Bitcoin was first developed.
                  <br />
                  It was made to function similarly to paper money and metal
                  coins, along with other crypto coins, so that it may be used
                  for many of the same activities as US dollars or euros, for
                  example, for buying products online, paying bills, and so on.
                  Such as:
                  <ul>
                    <li>preserving value</li>
                    <li>converting to different currencies</li>
                    <li>spending money on goods and services</li>
                    <li>shifting to others</li>
                  </ul>
                </Typography>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  Some cryptocurrencies can employ
                  <Link
                    to="/blog/understanding-the-working-and-benefits-of-smart-contract/"
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",

                      color: "white",

                      fontWeight: "bold",
                    }}
                  >
                    smart contract technology
                  </Link>
                  to bring new capabilities to their established usage in
                  addition to these more conventional ones. DASH, for instance,
                  is an alternative currency that functions as a cryptocurrency
                  while also enabling its users to cast votes for
                  representatives in decentralized autonomous organizations
                  (DAO).
                </Typography>
              </Box>
              <Box mt={4} color="#fff">
                {/* <Box component="h3">
                                    <Typography
                                        sx={{
                                            background:
                                                "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                            textFillColor: "transparent",
                                        }}
                                        fontSize="25px"
                                        fontWeight="700"
                                    >
                                        The varying interest rate:
                                    </Typography>
                                </Box> */}
              </Box>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h2">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="30px"
                  fontWeight="700"
                >
                  What Is the Difference Between a Coin and a Token?
                </Typography>
              </Box>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  <ul>
                    <li>
                      Crypto coin, crypto token, and cryptocurrency are not the
                      same thing, despite the widespread usage of these terms as
                      synonyms. The distributed ledger technology—also referred
                      to as blockchain technology—used by both coins and tokens
                      has several key distinctions.
                    </li>
                    <li>
                      Cryptocurrency coins enable users to pay with their
                      digital money. Tokens, however, can be used for a wide
                      variety of other things. They can utilize them as a type
                      of cash, a store of value, and of course for trading.
                    </li>
                    <li>
                      Crypto tokens are digital assets that may perform a broad
                      range of tasks, from representing a real thing to allowing
                      access to platform-specific services and features. They
                      are constructed on top of an existing blockchain using
                      smart contracts.
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="30px"
                  fontWeight="700"
                >
                  Widely popular Crypto coins:
                </Typography>
              </Box>
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  Bitcoin:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Bitcoin, the first and best-known cryptocurrency in the world,
                was introduced in early 2009 by the enigmatic "Satoshi
                Nakamoto." Due to its early development, it has managed to
                become the most valuable cryptocurrency.
              </Typography>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  Ether (ETH):
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                is more than simply a cryptocurrency; it is one of the most
                widely used cryptocurrencies available. Ethereum has hundreds of
                blockchain projects and NFTs thanks to the development and use
                of smart contracts. In a sense, it serves as the foundation for
                the blockchain revolution.
              </Typography>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  Cardano (ADA):
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                is a decentralized, open-source blockchain network that was
                among the first to operate under the PoS consensus, earning it
                the nickname "green cryptocurrency." Peer-to-peer (P2P)
                transactions are made easier by Cardano, which was established
                in 2015 by Charles Hoskinson, a co-founder of Ethereum.
              </Typography>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="30px"
                  fontWeight="700"
                >
                  Common crypto token:
                </Typography>
              </Box>
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  Filecoin (FIL) Arweave(AR):
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                provide customers the option to pay with their utility tokens to
                have the privilege of storing data on their decentralized
                network, maximizing the potential of cloud storage.
              </Typography>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  Axie Infinity :
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                One of the most popular play-to-earn (P2E) platforms available
                is a utility token called Smooth Love Potions (SLP). Players can
                carry out special in-game missions by earning or purchasing SLP.
              </Typography>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  Cronos (CRO):
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Is the utility token. Token holders may exchange their crypto
                tokens for cash at a discounted rate by using CRO, which can be
                used to pay platform fees or staked for a variety of advantages.
              </Typography>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  Final thoughts :
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The disparity between a token and a coin isn't particularly
                large, but if routinely disregarded, it may be extremely
                problematic. Consider what you're purchasing as a simple
                strategy to choose which one you ought to employ. Most
                frequently, coins are required if it's a product. There are
                often utility tokens available to use if it's a service.
                <br />
                We spend tokens in an interesting way that is quite similar to
                how we use the currency. Cash transactions literally transfer
                your funds from your hand to the recipients. However, we did
                point out that only coins may be used to symbolize money and
                that they are completely immobile.
              </Typography>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  fontSize="25px"
                  fontWeight="700"
                >
                  People Also ask for:
                </Typography>
              </Box>
            </Box>
            <Box mt={4}>
              <Container maxWidth="md">
                {AccordionData.map((value, index, array) => {
                  return (
                    <Box sx={{ margin: "auto", width: "100%", py: "10px" }}>
                      <Accordion
                        expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)}
                        sx={{
                          marginTop: "20px",

                          backgroundColor: "transparent",
                          mb: "10px",
                        }}
                      >
                        <AccordionSummary
                          aria-controls={`panel${index + 1}bh-content`}
                          id={`panel${index + 1}bh-header`}
                          className="borderRad"
                          expandIcon={
                            <i
                              style={{ color: "white", fontSize: "30px" }}
                              className="fa-solid fa-plus"
                            ></i>
                          }
                          // aria-controls="panel1a-content"
                          // id="panel1a-header"
                          sx={{
                            padding: "0px 20px 0px 0px",
                            // background: "#3B3F6D",
                            borderRadius: "12px",
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: { sm: "center", xs: "left" },
                            backgroundSize: {
                              sm: "100% 100%",
                              xs: "100% 100%",
                            },
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              px="20px"
                              textAlign="center"
                              fontSize={{ md: "20px", sm: "16px" }}
                              lineHeight={"40px"}
                              fontFamily="Josefin Sans"
                              sx={{
                                color: "white",
                                fontWeight: "500",
                              }}
                            >
                              {value.summary}
                            </Box>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            background: "#621E82",
                            borderRadius: "12px",
                            paddingY: "30px",
                            marginTop: "-30px",
                          }}
                        >
                          <Box
                            mt={2}
                            textAlign="center"
                            fontSize={{ md: "16px", sm: "13px" }}
                            lineHeight={"30px"}
                            color="white"
                          >
                            {value.details}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  );
                })}
              </Container>
            </Box>
          </Box>
          <Box py="40px">
            {" "}
            <BlogSlider />{" "}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Blog18;

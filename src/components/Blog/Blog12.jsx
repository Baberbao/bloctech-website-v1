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
import blog3img from "./assets/blog12.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog12 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary: " Which network has the most dApps?",
      details:
        "For a number of reasons, the Ethereum network presently dominates dApp development. Ethereum has a development interface that speeds up project launches and cuts down on programming time.",
    },
    {
      summary: "Is Solana a DApps?",
      details:
        "One of the most significant blockchain networks is Solana, which is home to a well-known ecosystem of dApps (decentralized applications), Defi platforms, and other intriguing Web3 initiatives.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/8-most-popular-DApps-of-2022/",
      },
      headline: "The 8 most popular DApps of 2022",
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
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which network has the most dApps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For a number of reasons, the Ethereum network presently dominates dApp development. Ethereum has a development interface that speeds up project launches and cuts down on programming time.",
            },
          },
          {
            "@type": "Question",
            name: "Is Solana a DApps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "One of the most significant blockchain networks is Solana, which is home to a well-known ecosystem of dApps (decentralized applications), Defi platforms, and other intriguing Web3 initiatives.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "8 most popular DApps of 2022";
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
          <title>8 most popular DApps of 2022 - BlocTech Solutions</title>
          <meta
            name="description"
            content="
                        The 8 Most popular DApps in 2022. 1 Uniswap, 2 Pancakeswap, 3 Opensea, 4 MakerDAO, 5 Axie Infinity, 6 Upland, 7 STEPN, 8 AAVE."
          />
          <meta
            name="title"
            content="8 most popular DApps of 2022 - BlocTech Solutions"
          />
          <meta charset="utf-8" />
          <meta name="keywords" content="most popular dApps of 2022" />

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
                OCT 3rd 2022
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
              The 8 most popular DApps of 2022
            </Box>
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h2"></Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              DApps are the term used to describe decentralized apps running on
              the blockchain. They can include things like decentralized
              exchanges, blockchain-based games, NFT markets, financial
              dashboards, and more. There are several platforms available for
              dApp deployment, with some of the most well-known ones being
              Ethereum, BNB chain, Solana, and others. The top most popular
              dApps used decentralized applications for March 2022 are examined
              in this article.
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
                Uniswap:
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A DApp on the Ethereum blockchain with US roots, Uniswap was
              introduced in 2018. Users may primarily swap and exchange ERC-20
              tokens on the platform. As the fourth-largest cryptocurrency
              exchange overall on the internet, it is the most well-known
              decentralized exchange. Averaging $2.5 billion in daily trading
              activity, the site has more than 150k monthly users.
              <br />
              The unique aspect of Uniswap that stands out the most may be the
              fact that liquidity is not generated by buyers and sellers. Simply
              linking a crypto wallet allows anyone to use the platform. Users
              of Uniswap seem to choose the MetaMask wallet, for this reason,
              the most. The exchange charges a fixed 0.3% cost for every trade
              in addition to the variable Ethereum gas fee.
              <br />A year ago, in September 2020, Uniswap introduced its
              governance token, UNI. Users might now participate in future
              choices, increasing the likelihood of profitability. Its market
              value was $3.9 billion as of May 2022, when it was trading at
              $5.5.
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
                Pancakeswap:
              </Typography>
            </Box>{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              PancakeSwap, which was introduced in September 2020, has a
              significant lead over all other dApps available. It is a fork of
              the first DEX, Uniswap, but because it is based on the BNB chain,
              trading costs are substantially cheaper.
              <br />
              The decreased costs are a big part of why PancakeSwap gained so
              much popularity and has such a large user base. PancakeSwap is
              where the majority of recently released cryptocurrencies initially
              begin trading since anybody may list their token there, generating
              liquidity and a market.
              <br />
              For those who wish to wager on the future of the exchange,
              PancakeSwap also offers a native token called CAKE that customers
              may buy. Users that contribute funds to the exchange and other
              tokens are also rewarded with CAKE.
              <br />
              CAKE has a $1.5 billion market value as of this writing and is now
              trading at $5.43. There are 276.6 million tokens in circulation,
              and its 24-hour trading volume is $170 million
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
                  Opensea:
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
                  The NFT trading industry's innovator is OpenSea. It was the
                  first NFT marketplace to become public when it was introduced
                  in December 2017. In order to reduce transaction fees, the
                  application was initially built on the Ethereum network and
                  then merged on the Polygon blockchain.
                  <br />
                  More than 10,000 different NFT projects are now hosted by
                  OpenSea. It includes some of the most well-known names in the
                  NFT sector, like Bored Ape Yacht Club, Crypto Punks, The
                  Meebits, and others. More than 200 NFT categories, including
                  in-game items, skins, collectibles, property, and metaverse
                  objects, are available on the website. With up to 150
                  different cryptocurrencies supported, OpenSea has more than
                  1.5 million active users.
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
                    MakerDAO:
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  The credit service DApp MakerDAO runs on Ethereum. By locking
                  their ETH tokens as collateral, users of the network can
                  obtain DAI tokens in exchange. The value of DAI, a stablecoin,
                  is linked to the US dollar.
                  <br />
                  Because it enables traders to easily swap assets with cheap
                  transaction costs, a stablecoin is a crucial part of the DeFi
                  ecosystem. They would otherwise be forced to rely on
                  centralized institutions, such as banks, and pay exorbitant
                  fees for each transaction.
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
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                ></Typography>
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
                  fontSize="25px"
                  fontWeight="700"
                >
                  Axie Infinity:
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
                  Axie Infinity is a top choice for individuals wishing to make
                  money playing online games and is one of the most well-known
                  Metaverse crypto games available on the market using
                  blockchain technology.
                  <br />
                  Axie Infinity is renowned for being among the first Metaverse
                  and NFT-based games that allow players to earn a significant
                  sum of money by taking part in its economy, and it continues
                  to be a popular choice for gamers to explore today. Users may
                  acquire Axies to use in-game thanks to Axie Infinity's
                  decentralized NFT market application.
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
                  fontSize="25px"
                  fontWeight="700"
                >
                  Upland:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Upland is an EOS-based blockchain Metaverse game that was
                released in May 2019. Upland was created to provide players with
                more opportunities for earning and adding value to the game. The
                most well-liked dApp on EOS at the time of writing is Upland,
                followed by AtomicAssets. To begin playing, users must buy a
                resource. Players may acquire UPX tokens every three hours, with
                each property earning them at a rate of 14.7% yearly.
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
                  STEPN:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                A well-known Move-To-Earn initiative and one of the most
                original dapps to generate money, STEPN rewards players for
                being active with GMT coins. It incorporates elements of both
                DeFi and NFTs to build a strong economy centered around its
                platform. An excellent choice to investigate if you want to earn
                money while being active.
                <br />
                On the platform, users may buy NFT shoes to make money. Users
                that are active can earn a sizable income by receiving
                incentives in cryptocurrencies.
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
                  fontSize="22px"
                  fontWeight="700"
                >
                  AAVE:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                AAVE, a reputable open-source lending software and protocol that
                was first developed on the Ethereum blockchain and then linked
                with the Polygon network to provide traders cheaper transaction
                fees, is one of the most well-known dApp platforms on the market
                for making money through loans.
                <br />
                AAVE is the ideal dApp for individuals wishing to earn money
                passively through a lending protocol since it enables people to
                lend and borrow a variety of crypto assets from its collection
                of liquidity pools at affordable rates.
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
                  fontSize="22px"
                  fontWeight="700"
                >
                  Summary:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                With less than a decade of history, the decentralized apps
                sector is still in its infancy. Even so, we foresee it spreading
                into a number of the commercial and entertainment industries.
                <br />
                With the help of blockchain innovation, developers and
                programmers are committed to making the existing tech industry
                better. Every day, it's great to see new initiatives start up
                with the goal of delivering better answers to various problems.
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
                  fontSize="22px"
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

export default Blog12;

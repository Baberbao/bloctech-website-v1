import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  IconButton,
  TableContainer,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import bg from "./assets/bgf.png";
import blog16 from "./assets/blog16.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import defiblog16 from "./assets/defiblog16.png";

import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog16 = () => {
  // const check = useMediaQuery("(max-width:750px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary:
        "Q. Why decentralized finance is better than centralized finance?",
      details:
        "By enabling anybody to utilize financial services wherever they are, regardless of who they are or where they are located, decentralized finance eliminates the necessity for a centralized finance model. Through individual-focused trade services and personal wallets, DeFi apps provide consumers with more control over their finances.",
    },
    {
      summary: "Q. Is crypto CeFi or DeFi?",
      details:
        "Centralized Finance was the industry standard for cryptocurrency trading until DeFi was created. It controls a sizable portion of the bitcoin market. All cryptocurrency trading orders are processed through a central exchange in centralized finance (CeFi). The central exchange is administered by certain people who manage the funds.",
    },
    {
      summary: "Q. Is NFT the same as DeFi?",
      details:
        "It is a distinct data unit that is kept on the blockchain and cannot be exchanged with other data units. DeFi provides financial products without the need of middlemen like banks or exchanges. NFTs offer services with value added. They can hold certain unique values and aid in the tokenization of assets.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/brief-guide-for-defi-vs-cefi-every-aspect-you-need-to-know/",
      },
      headline: "Brief Guide for Defi vs Cefi: Every aspect you need to know.",
      description:
        "Following the advent of the blockchain, there is a growing consensus that decentralized alternatives will eventually supplant traditional financial services. 'DeFi against CeFi' or 'centralized vs decentralized cryptocurrency' is the name of the rivalry.",
      image: "",
      author: {
        "@type": "",
        name: "Shehryar",
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
            name: "Why decentralized finance is better than centralized finance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "By enabling anybody to utilize financial services wherever they are, regardless of who they are or where they are located, decentralized finance eliminates the necessity for a centralized finance model. Through individual-focused trade services and personal wallets, DeFi apps provide consumers with more control over their finances.",
            },
          },
          {
            "@type": "Question",
            name: "Is crypto CeFi or DeFi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Centralized Finance was the industry standard for cryptocurrency trading until DeFi was created. It controls a sizable portion of the bitcoin market. All cryptocurrency trading orders are processed through a central exchange in centralized finance (CeFi). The central exchange is administered by certain people who manage the funds.",
            },
          },
          {
            "@type": "Question",
            name: "Is NFT the same as DeFi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It is a distinct data unit that is kept on the blockchain and cannot be exchanged with other data units. DeFi provides financial products without the need of middlemen like banks or exchanges. NFTs offer services with value added. They can hold certain unique values and aid in the tokenization of assets.",
            },
          },
        ],
      },

      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "Brief Guide for Defi vs Cefi: Every aspect you need to know.";
  return (
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
        <title>
          Brief Guide for DeFi vs CeFi: Every aspect you need to know
        </title>
        <meta
          name="description"
          content="
          Here we are going to give you guys a Brief Guide for DeFi vs CeFi. How decentralized finance is way much better than centralized finance or traditional financing infrastructure"
        />
        <meta
          name="title"
          content="Brief Guide for DeFi vs CeFi: Every aspect you need to know"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="decentralized finance, centralized finance, defi vs cefi"
        />

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
          src={blog16}
          alt="Decentralized Finance vs Centralized Finance"
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
              Shehryar Ahmed{" "}
            </Typography>
            <Typography
              color="white"
              fontSize="12px"
              fontStyle="italic"
              fontWeight="bold"
            >
              {" "}
              OCT 8th 2022
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
            Brief Guide for Defi vs Cefi: Every aspect you need to know
          </Box>
        </Box>

        <Box>
          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Following the advent of the blockchain, there is a growing
              consensus that decentralized alternatives will eventually supplant
              traditional financial services. "DeFi against CeFi" or
              "centralized vs decentralized cryptocurrency" is the name of the
              rivalry.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              While for a while CeFi was the main cryptocurrency trading
              platform, DeFi is currently becoming more and more popular among
              investors who are rebelling against the authority, uniformity, and
              control of{" "}
              <a
                style={{ color: "white", fontWeight: "bold" }}
                href="/blog/what-is-a-centralized-exchange-CEX-and-how-CEX-work/"
              >
                centralized exchanges
              </a>{" "}
              . But does this imply that CeFi will lose its appeal to DeFi?
              Let's compare them to discover the solution.
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
                What is DeFi (Decentralized Finance)?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              DeFi is an open, international financial system that increases
              accessibility and transparency in the blockchain industry. You may
              self-manage a variety of services with DeFi, including trading,
              insurance, lending, money issuance, staking, payments, financial
              data, over-the-counter (OTC) trading, asset management, and more.
              <br />
              Here you can read more about{" "}
              <a
                style={{ color: "white", fontWeight: "bold" }}
                href="/blog/what-is-a-centralized-exchange-CEX-and-how-CEX-work/"
              >
                Centralized Exchange and Its working
              </a>{" "}
              .
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
                How Does A Centralized Crypto Exchange Work?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              On controlled exchanges, users may buy and sell cryptocurrencies
              for fiat money like the US dollar or digital assets like BTC and
              ETH. In transactions, they serve as trustworthy brokers and
              usually as custodians, keeping and safeguarding your money.
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
                fontSize="28px"
                fontWeight="700"
              >
                DeFi examples
              </Typography>
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
                Totle
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A decentralized liquidity aggregator with automated price
              optimization.
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
                Augur
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A decentralized predictions market exists here.
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
                Kyber
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A decentralized marketplace
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
                MakerDAO
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A decentralized device for stablecoin minting and lending.
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
                bZx
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              It is a decentralized platform for lending and margin trading.
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
                What is CeFi (Centralized Finance)?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              CeFi, or centralized finance, refers to the practice of giving
              your money to centralized businesses, such as cryptocurrency
              exchange platforms, to hold and administer.
              <br />
              To comply with the laws of the various jurisdictions, the majority
              of CeFi service providers have a Know Your Customer (KYC) and Anti
              Money Laundering (AML) policy in place. It implies that you must
              provide them access to your personal data and guarantee that your
              money is not being used for illicit purposes or originating from
              sources that are.
              <br />
              To comply with the laws of the various jurisdictions, the majority
              of CeFi service providers have a Know Your Customer (KYC) and Anti
              Money Laundering (AML) policy in place. It implies that you must
              provide them access to your personal data and guarantee that your
              money is not being used for illicit purposes or originating from
              sources that are.
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
                Features of CeFi (Centralized Finance)
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              without interruption of client service - Each Centralized Exchange
              has an internal account for handling users' cash. Large CeFi firms
              also protect user data and aid clients with a specialized customer
              support team, improving the degree of trust.
              <br />
              Flexible conversion - CeFi streamlines the exchange of fiat money
              for cryptocurrencies. Greater client onboarding results from the
              platforms' simplicity of use; Coinbase, with 89 million members
              worldwide, is one example.
              <br />
              Flexible conversion - CeFi streamlines the exchange of fiat money
              for cryptocurrencies. Greater client onboarding results from the
              platforms' simplicity of use; Coinbase, with 89 million members
              worldwide, is one example.
              <br />
              Services for cross-chain swaps allow the trading of
              cryptocurrencies on the basis of separate blockchain platforms
              thanks to centralized financing. Defi struggles with cross-chain
              swaps because they are difficult and time-consuming, whereas CeFi
              secures asset custody from numerous chains.
              <br />
              Centralized Exchange (CEX) - With the help of the centralized
              exchange, you may manage your portfolio through a private account
              and save money on blockchain transaction costs. Additionally, you
              do not have to worry about the administration aspect of it because
              the money is on the exchange.
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
                fontSize="28px"
                fontWeight="700"
              >
                CeFi examples
              </Typography>
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
                Coinbase
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              An exchange for cryptocurrencies that makes it easier to trade,
              borrow, use margin, use native stablecoins, lend money, make
              payments, and more.
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
                BlockFi
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              It is a platform for lending and borrowing in cash and
              cryptocurrencies.
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
                Celsius
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A system for lending and borrowing cryptocurrency.
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
                Ledn
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A platform for borrowing and lending that works with DAI to
              guaranteed Bitcoin.
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
                Libra
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A global cryptocurrency layer, as well as a financial system.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              It's time to examine the distinctions between centralized finance
              and decentralized finance after examining the fundamentals of DeFi
              versus CeFi (or, centralized vs. decentralized bitcoin) in terms
              of what they are and the features they offer.
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
                DeFi vs CeFi: The key differences
              </Typography>
            </Box>
            <Box my={2}>
              <img
                src={defiblog16}
                width="100%"
                alt=" Difference between Defi and Cefi."
              />
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              There are several significant contrasts between centralized
              finance and decentralized finance, despite the fact that both aim
              to increase the usage of blockchain globally. Let's investigate
              these disparities.
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
                Public verification
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Even if the Defi code may not always be available online, its
              execution must be accessible to public inspection in order to
              qualify as a non-custodial Defi. This means that, in contrast to
              Cefi, any Defi user may see the execution of Defi state changes
              and afterward confirm it.
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
                Atomicity
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A blockchain transaction makes it possible to carry out successive
              tasks. It is possible to make these operations atomic, which means
              that they will either succeed all at once or fail. CeFi does not
              have this configurable atomicity component.
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
                Custody
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              DeFi provides its clients total control over their assets, in
              contrast to CeFi. The difficulty with this is that consumers must
              deal with all the technological risks. CeFi is more advantageous
              in this situation. As custodians, centralized financial platforms
              are a well-liked option for handling bitcoin holdings. Read about
              the integration of{" "}
              <a
                style={{ color: "white", fontWeight: "bold" }}
                href="/blog/blockchain-in-real-estate-industry-reshape-the-transaction-process/"
              >
                Blockchain in Real Estate
              </a>{" "}
              .
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
                Anonymous development
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Users who utilize centralized finance have less anonymity than
              those who use decentralized money. Most DeFi initiatives are
              managed by unnamed teams of people.
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
                The malleability of execution order
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              On a P2P network, users that use permissionless blockchains often
              share the transactions they want to execute. DeFi recognizes a
              variety of market manipulation strategies as a result of this
              order's malleability. CeFi, in contrast, has strict regulatory
              requirements in place that exclude any room for market
              manipulation.
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
                Transaction cost
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Transaction fees are frequently charged in DeFi. The institutions
              in CeFi, on the other hand, provide transactions at no additional
              cost since CeFi conducts stringent KYC and AML checks.
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
                Cross-chain services
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Most cryptocurrencies are regularly traded on centralized
              financial platforms. These coins are often not supported by
              decentralized finance since they are complicated and slow down
              cross-chain trade.
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
                Fiat conversion flexibility
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              It is simpler for customers to trade on a CeFi platform than a
              DeFi platform since CeFi operates on a fiat currency exchange
              paradigm.
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
                Security
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Despite CeFi's best efforts to uphold absolute security, there
              have been several instances of breaches involving CeFi-based
              bitcoin exchange platforms. Contrarily, in the case of DeFi, users
              simply need to be aware of the coding and the consensus process
              employed in the decentralized finance initiative.
            </Typography>
          </Box>

          <Box mt={4}>
            <TableContainer>
              <table id="customers">
                <tr>
                  <th>Parameters</th>
                  <th>DeFi</th>
                  <th>CeFi</th>
                </tr>
                <tr>
                  <td>Services</td>
                  <td>Borrowing, Lending, Trading, Payments</td>
                  <td>Payments, Lending, Trading, Borrowing, Fiat-to-crypto</td>
                </tr>
                <tr>
                  <td>Public verification</td>
                  <td>Execution should be publicly verifiable</td>
                  <td>Not mandatory to verify publicly</td>
                </tr>
                <tr>
                  <td>Atomicity element</td>
                  <td>Present</td>
                  <td>Not present</td>
                </tr>
                <tr>
                  <td>Anonymous development</td>
                  <td>More anonymity</td>
                  <td>Less anonymity</td>
                </tr>
                <tr>
                  <td>Custody</td>
                  <td>Gives customers complete control over assets</td>
                  <td>Acts as custodians</td>
                </tr>
                <tr>
                  <td>Malleability of execution order</td>
                  <td>Multiple market manipulation tactics possible</td>
                  <td>
                    Stringent regulatory requirement leaving no scope for market
                    manipulation
                  </td>
                </tr>
                <tr>
                  <td>Transaction cost</td>
                  <td>Charges transaction fee</td>
                  <td>Offers transactions at no extra cost</td>
                </tr>
                <tr>
                  <td>Cross-chain services</td>
                  <td>Delay in completing cross-chain exchange</td>
                  <td>Majority of cryptocurrencies are traded frequently</td>
                </tr>
                <tr>
                  <td>Fiat conversion flexibility</td>
                  <td>No fiat conversion flexibility</td>
                  <td>Fiat currency is involved for exchange</td>
                </tr>
                <tr>
                  <td>Security</td>
                  <td>More secure</td>
                  <td>Less secure</td>
                </tr>
              </table>
            </TableContainer>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Now even though there lies some crucial differences in centralized
              finance vs decentralized finance, it is difficult to think of a
              scenario where only one architecture would exist.
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
                Closing Remarks:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              CeFi offers guarantees of fair commerce and fund security.
              Additionally, investors using fiat money may participate in
              cryptocurrency trading with the help of a responsive customer care
              team. DeFi, on the other hand, attempts to remove middlemen and
              intervention from the blockchain realm.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Well, every model has its own properties that verify its
              advantages and disadvantages. Pick DeFi if privacy and
              transparency are crucial to you, and choose CeFi if you want more
              flexibility and to share risks with other users of the blockchain
              network.
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
                          backgroundSize: { sm: "100% 100%", xs: "100% 100%" },
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
  );
};

export default Blog16;

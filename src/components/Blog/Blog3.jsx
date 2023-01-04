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
import Blockchaintypes from "./assets/Blockchaintypes.jpg";
import bg from "./assets/bgf.png";
import blog3img from "./assets/blog3img.jpg";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog3 = () => {
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
      summary: "Why are tokens needed for blockchain?",
      details:
        "Security tokens track who owns what assets using blockchain technology, which is a decentralized database. Trading may take place outside of traditional banking and stock market hours with the use of blockchain-based security tokens, and transactions may be completed more quickly.",
    },
    {
      summary: "How do crypto tokens work?",
      details:
        "Virtual currency or cryptocurrency denominations are known as 'crypto tokens.' It symbolizes a utility or tradable asset that exists on its own blockchain and lets the possessor utilize it for trading or financial transactions.",
    },
    {
      summary: "Can cryptocurrencies be security tokens?",
      details:
        "Security tokens are quite similar to cryptocurrencies. They originate from and are kept on a blockchain. Although they are both tokens, the main distinction between them is in their function, intended usage, and actual use. A cryptocurrency is made to be used as money, a form of payment, or both.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/what-is-a-blockchain-token-and-how-many-types-of-tokens-are-there/",
      },
      headline:
        "What is a Blockchain Token? And how many Types of Tokens are there?",
      description:
        "In the cryptocurrency world, the word 'token' is frequently used. In fact, given that theoretically all crypto assets may be referred to as tokens, you may hear Bitcoin referred to as a 'crypto token' or something like that.",
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
            name: "Why are tokens needed for blockchain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Security tokens track who owns what assets using blockchain technology, which is a decentralized database. Trading may take place outside of traditional banking and stock market hours with the use of blockchain-based security tokens, and transactions may be completed more quickly.",
            },
          },
          {
            "@type": "Question",
            name: "How do crypto tokens work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: 'Virtual currency or cryptocurrency denominations are known as "crypto tokens." It symbolizes a utility or tradable asset that exists on its own blockchain and lets the possessor utilize it for trading or financial transactions.',
            },
          },
          {
            "@type": "Question",
            name: "Can cryptocurrencies be security tokens?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Security tokens are quite similar to cryptocurrencies. They originate from and are kept on a blockchain. Although they are both tokens, the main distinction between them is in their function, intended usage, and actual use. A cryptocurrency is made to be used as money, a form of payment, or both.",
            },
          },
        ],
      },

      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "What is a Blockchain Token? And how many Types of Tokens are there?";
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
        <title>What is a Blockchain Token? | Types of Tokens Explained</title>
        <meta
          name="description"
          content="
          Crypto assets are reffered to as tokens and when they operate in a chain of blocks, they are reffered as Blockchain Tokens. here you will be elaborated by types of tokens."
        />
        <meta
          name="title"
          content="What is a Blockchain Token? | Types of Tokens Explained"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Introduction to blockchain token , Types of blockchain token "
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
          src={blog3img}
          alt="What-is-blockchain-token-?"
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
              SEP 16th 2022
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
            What is a Blockchain Token? And how many Types of Tokens are there?
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                fontSize="30px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Introduction to blockchain token:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              In the cryptocurrency world, the word "token" is frequently used.
              In fact, given that theoretically all crypto assets may be
              referred to as tokens, you may hear Bitcoin referred to as a
              "crypto token" or something like that. However, there is a high
              likelihood that you will come across one of two increasingly
              prevalent interpretations of the word. Other than Bitcoin and
              Ethereum, any cryptocurrency is frequently referred to as a
              "token" (even though they are also technically a{" "}
              <Link
                style={{ color: "white", fontWeight: "bold" }}
                to="/blog/what-Is-blockchain-technology-how-Is-It-Important-for-data-security/"
              >
                blockchain
              </Link>{" "}
              token). Considering Bitcoin and Ethereum are by far the two most
              popular cryptocurrencies, having a term to cover the whole
              cryptocurrency realm is helpful. (An alternative term with nearly
              the same meaning is "altcoin.")
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                fontSize="30px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Types of blockchain tokens:
              </Typography>
            </Box>
            {/* <Container maxWidth="lg"> */}
            <Box my={2}>
              <img
                src={Blockchaintypes}
                width="100%"
                alt="Types-of-blockchain-tokens"
              />
            </Box>
            {/* </Container> */}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              <ul>
                <li>Utility tokens</li>
                <li>Security tokens</li>
                <li>Payment tokens</li>
                <li>Exchange tokens</li>
                <li>Non-fungible tokens</li>
                <li>Defi tokens</li>
                <li>Stablecoins/fiat</li>
                <li>Asset-backed tokens</li>
                <li>privacy -tokens</li>
              </ul>
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Utility tokens:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Any cryptocurrency token with a use case within a particular
              ecosystem is called a utility token. Users are able to carry out
              specified actions on a particular network thanks to these tokens.
              <br />
              For its ecosystem, a utility token is special. For instance, the
              Basic Attention Token (BAT) from Brave can only be used in the
              Brave browser or with other programs that have BAT wallets built
              in, such as Twitter. Beyond gambling on its value, BAT has no
              other purpose. Any utility token is comparable in this regard.
              <br />
              Blockchain tokens, used for utility purposes cannot be mined.
              Usually, they are pre-mined, meaning that they are all produced at
              once and dispersed in a way that the project team determines.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="35px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Example:
              </Typography>
              <Typography fontSize="22px" fontWeight="700">
                Basic attention coin(BAT), Chainlink(LINK), 0x(ZRX),
                Zilliqa(ZIL),Aurora(AOA)
              </Typography>
              <Typography
                fontSize="30px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Security tokens:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              In order to authenticate their identity throughout the login
              process, users can employ security tokens, which can be either
              physical or digital devices, to offer two-factor authentication
              (2FA). It is frequently applied as a means of physical
              identification or as a way to get access to a computer system. A
              <Link
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                to="/token-development-services/"
              >
                {" "}
                blockchain token{" "}
              </Link>
              specifically designed for security purposes may be a tangible
              object or a card that shows or holds security data about a person
              and may be used by the system to verify them.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Types of security tokens are the following:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              <ul>
                <li>One-time passwords(OTP) </li>
                <li>Disconnected tokens</li>
                <li>Connected tokens</li>
                <li>Contactless tokens</li>
                <li>Single sign-on (SSO) software tokens</li>
                <li>Programmable tokens </li>
              </ul>
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Payment tokens:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Payment tokens are the most basic type of cryptocurrency and
              function as units of intrinsic value that are comparable to
              recognized fiat currencies. Although they are methods of payment,
              they are not considered securities.
            </Typography>
            <Typography
              fontSize="30px"
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontWeight="700"
            >
              Bitcoin, Ethereum, and Monero are a few popular payment tokens.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Exchange tokens :
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A native digital asset of a cryptocurrency exchange is referred to
              as a{" "}
              <Link
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                to="/blog/what-is-a-centralized-exchange-CEX-and-how-CEX-work/"
              >
                {" "}
                crypto exchange{" "}
              </Link>
              token. For a number of reasons, a crypto exchange could introduce
              its own blockchain token, and exchange owners frequently provide
              tokens as incentives to customers. Generally speaking, the
              majority of exchange tokens are made to boost an exchange's
              liquidity, encourage trade, or simplify the community governance
              process.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Non-fungible tokens:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              NFTs (non-fungible tokens) are unique cryptographic blockchain
              tokens that exist but cannot be copied. <b />
              NFTs may be used to represent real-world items like works of art
              and real estate. These tangible, physical goods might be
              "tokenized" which would improve the efficiency of buying, selling,
              and trading such assets while reducing the possibility of fraud.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Defi tokens :
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A DeFi coin functions much like a digital equivalent of a fiat
              currency in that it transfers value during a transaction. DeFi
              currencies are based on distinctive native blockchain token
              networks and frequently bear their names. Maker, Compound,
              Uniswap, Aave, Chainlink, and Ankr are some of the most widely
              used{" "}
              <Link
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                to="/blog/what-is-defi-a-beginners-guide-to-decentralized-finance-system/"
              >
                DeFi
              </Link>{" "}
              currencies in spring 2021.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Stablecoins/fiat:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Stablecoins offer a way to bridge the divide between
              cryptocurrencies and fiat money, such as the US dollar. Since
              price stability is built into the assets themselves, stablecoins
              provide a unique solution to the volatility of cryptocurrencies.
              They are price-stable digital assets that behave roughly like cash
              yet preserve the mobility and usefulness of bitcoin. Fiat-backed,
              crypto-backed, commodity-backed, and algorithmic stablecoins are
              the four main categories, which may be distinguished by their
              underlying collateral structure.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Asset-backed tokens:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A developing type of digital assets called asset-backed tokens
              makes investing in digital ledgers compliant and regulated
              possible. According to some, these "Security Tokens" will power
              financial transactions on digital capital markets.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Privacy -tokens:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Privacy tokens will hide the data included in a standard
              transaction, unlike other digital coins. Consequently, these coins
              enable non-disclosure of identification, giving users financial
              privacy.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontWeight="700"
              >
                Importance of blockchain tokens in the digital economy:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Tokens are smart contracts that may store different degrees of
              value, whereas cryptocurrency coins are essentially digital
              replacements for fiat money. They should be viewed as programmable
              assets. With a token, you can create a smart contract that will
              automatically send two tokens to that person on a specific date as
              long as their{" "}
              <Link
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                to="/crypto-wallet-development-service/"
              >
                wallet balance
              </Link>{" "}
              wallet balance is greater than a predetermined threshold. While
              you can send two bitcoins to someone else very easily using the
              blockchain, you can do so with a token instead.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                fontSize="25px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
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

export default Blog3;

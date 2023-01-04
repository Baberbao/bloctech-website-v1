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

import blog8img from "./assets/blog8img.png";
import blog8 from "./assets/blog8.jpg";
import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "Q.1 Can cryptocurrency be centralized?",
    details:
      "A company-created and -operated cryptocurrency exchange is referred to as a centralized exchange. These exchanges are regarded as centralized since a single organization controls all transactions and establishes the exchange's guidelines and charges.",
  },
  {
    summary: "Q.2 Are centralized exchanges regulated?",
    details:
      "Centralized exchanges are governed by the laws of the countries in which they are located, however, these laws might be very different. Businesses that deal in cryptocurrencies may be governed by a single financial authority in various nations.",
  },
  {
    summary: "Q.3 Are centralized crypto exchanges safe?",
    details:
      "When it comes to transactions and trading, centralized exchanges provide an additional degree of security and dependability. Controlled exchanges give better levels of comfort since they make the transaction possible through an established, centralized platform.",
  },
];

const Blog8 = () => {
  const [expanded, setExpanded] = React.useState(false);
  // const check = useMediaQuery("(max-width:750px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/what-is-a-centralized-exchange-CEX-and-how-CEX-work/",
      },
      headline: "What is a centralized exchange (CEX) and how does it work?",
      description:
        "The blockchain has allowed CEX crypto exchanges to do away with the necessity for a middleman broker. This is so because each exchange has its own interface via which all transactions are directly resolved.",
      image: "",
      author: {
        "@type": "",
        name: "Shahriyar",
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
            name: "Can cryptocurrency be centralized?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A company-created and -operated cryptocurrency exchange is referred to as a centralized exchange. These exchanges are regarded as centralized since a single organization controls all transactions and establishes the exchange's guidelines and charges.",
            },
          },
          {
            "@type": "Question",
            name: "Are centralized exchanges regulated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Centralized exchanges are governed by the laws of the countries in which they are located, however, these laws might be very different. Businesses that deal in cryptocurrencies may be governed by a single financial authority in various nations.",
            },
          },
          {
            "@type": "Question",
            name: "Are centralized crypto exchanges safe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When it comes to transactions and trading, centralized exchanges provide an additional degree of security and dependability. Controlled exchanges give better levels of comfort since they make the transaction possible through an established, centralized platform.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "What is a centralized exchange (CEX) and how CEX work?";
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
        <title>What is a centralized exchange (CEX) and how CEX work?</title>
        <meta
          name="description"
          content="
          centralized exchanges are trading platforms where you can trade cryptocurrencies or crypto assets. centralized exchange platforms work as a third party between traders."
        />
        <meta
          name="title"
          content="What is a centralized exchange (CEX) and how CEX work?"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="centralized exchange , centralized crypto exchanges , centralized cryptocurrency"
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
          src={blog8}
          alt="Centralized Exchange (CEX)"
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
              SEP 23th 2022
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
            What is a centralized exchange (CEX) and how does it work?
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                A new business model for entities that serve as middlemen for
                buyers and sellers—that is, cryptocurrency exchanges—has evolved
                with the introduction of the blockchain, a technology that is
                supposed to be decentralized by nature.
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Since the beginning of cryptocurrencies, exchanges for
              cryptocurrencies have traditionally been centralized, which means
              that all transactions must pass through their systems and
              infrastructure in order to be processed.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The next essay will cover all the essential information concerning
              CEXs (centralized exchanges), including how they operate and how
              they differ from DEXs.
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
                What is a centralized exchange (CEX)?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              In essence, a centralized cryptocurrency exchange is a platform
              that allows users to securely trade digital assets. These
              marketplaces offer a setting where buyers and sellers can easily
              complete deals. Through their market-making activities, they also
              serve as liquidity providers for the coins they support.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              All of the exchanges' transactions are done digitally, and they
              are all documented in the blockchain that underpins the specific
              digital assets being traded.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The blockchain has allowed CEX crypto exchanges to do away with
              the necessity for a middleman broker. This is so because each
              exchange has its own interface via which all transactions are
              directly resolved.
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
                How does a centralized exchange (CEX) work?
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Orders for digital assets are placed on centralized exchanges by
              individuals or institutions, and these exchanges usually match
              orders for both buying and selling at the same price. On the other
              side, they might also function as market makers, supplying
              liquidity to the tokens that are supported by their platforms to
              increase the speed of execution.
              <br />
              These exchanges are able to provide market players with access to
              that data for analysis since they are in charge of managing all
              the data derived from the orders that are being made. For offering
              access to this data, the exchange typically earns a fee.
              <br />
              As long as the assets pass a verification process, they also give
              developers the ability to list the tokens associated with their
              projects.
              <br />
              Because customers don't always need to travel to a broker to make
              an order, crypto CEXs offer a layer of decentralization. Instead,
              customers are free to shift their assets whenever they want to
              trade them to the exchange from where they are currently being
              held in a wallet.
              <br />
              The regulation of centralized exchanges is a key feature. The
              local governments of the nations in which these institutions
              operate often have to grant them permission to offer their
              services because they handle billions of dollars and serve
              millions of consumers from all over the world.
              <br />
              The Know Your Customer (KYC), anti-money laundering (AML), and
              counter-terrorism financing (CFT) protocols are just a few of the
              numerous laws and regulations that these exchanges must abide by.
              They must also follow particular processes that stop market
              players from manipulating asset prices in order to ensure that all
              activities are carried out swiftly and openly.
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
                Advantages of Centralized Crypto Exchanges
              </Typography>
            </Box>
            <Box my={2}>
              <img
                src={blog8img}
                width="100%"
                alt=" Advantages of Centralized Exchange CEX"
              />
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
                fontSize="22px"
                fontWeight="700"
              >
                1. User-friendly
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Centralized exchanges provide novice investors with a comfortable,
              familiar method of cryptocurrency trading and investment. Users of
              centralized exchanges can log into their accounts, view their
              account balances, and make transactions through applications and
              websites as opposed to using crypto wallets and peer-to-peer
              transactions, which can be complicated.
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
                2. Trustworthy
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              When it comes to transactions and trading, centralized exchanges
              provide an additional layer of security and dependability.
              Controlled exchanges give better levels of comfort because they
              make the transaction possible through a developed, centralized
              platform.
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
                3. Leverage
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The capability of margin trading, which allows you to leverage
              your investments using borrowed funds from the exchange, is one of
              the other advantages of some CEXs. Though losses can potentially
              be exacerbated, it enables investors to earn bigger profits.
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
                Conclusion
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              95% of the trading volumes for digital assets were handled by a
              centralized exchange as of September 2020, according to a Gemini
              report. In August 2021, DEX to CEX spot transaction volume is
              estimated to have accounted for 8.11% according to more recent
              data released by the Block. 91.8% of the trading volume on the
              cryptocurrency market is still accounted for by CEXs, according to
              that statistic.
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
                People also ask for:
              </Typography>
            </Box>
          </Box>
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
        <Box py="40px">
          {" "}
          <BlogSlider />{" "}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog8;

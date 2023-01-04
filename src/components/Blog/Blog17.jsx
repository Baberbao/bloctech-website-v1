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
import blog17 from "./assets/blog17.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import defiblog17 from "./assets/defiblog17.png";

import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog17 = () => {
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
      summary: "1. What is the difference between CEX and DEX?",
      details:
        "Decentralized exchanges enable users to keep their own assets, provide reduced transaction costs, and sidestep some regulatory requirements. The advantages of centralized exchanges, on the other hand, include quick transactions, simplicity, high liquidity, and more.",
    },
    {
      summary: "2. Are decentralized exchanges safe?",
      details:
        "Decentralized exchanges are subject to liquidity issues just like centralized exchanges are. All financial instruments and assets exchanged on a specific exchange require liquidity. Liquidity, however, continues to be a major problem for decentralized exchanges.",
    },
    {
      summary: "3. What are the major downsides of decentralized exchanges?",
      details:
        "There are a few drawbacks to decentralized exchanges. When an investor attentively monitors the price of an item and waits for the ideal moment to purchase or sell before prices increase or fall sharply, these exchanges' sluggish transaction times play a crucial role. Decentralized exchanges have received criticism for being difficult to use and providing a poor user experience.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/centralized-vs-decentralized-exchanges-a-brief-comparison/",
      },
      headline: "Centralized vs Decentralized Exchanges, A Brief Comparison",
      description:
        "The major question at this point is: which exchange should I choose? Understanding the distinction between centralized and decentralized exchange is essential before responding to this issue.",
      image: "",
      author: {
        "@type": "",
        name: "Shahryar",
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
            name: "What is the difference between CEX and DEX?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Decentralized exchanges enable users to keep their own assets, provide reduced transaction costs, and sidestep some regulatory requirements. The advantages of centralized exchanges, on the other hand, include quick transactions, simplicity, high liquidity, and more.",
            },
          },
          {
            "@type": "Question",
            name: "Are decentralized exchanges safe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Decentralized exchanges are subject to liquidity issues just like centralized exchanges are. All financial instruments and assets exchanged on a specific exchange require liquidity. Liquidity, however, continues to be a major problem for decentralized exchanges.",
            },
          },
          {
            "@type": "Question",
            name: "What are the major downsides of decentralized exchanges?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There are a few drawbacks to decentralized exchanges. When an investor attentively monitors the price of an item and waits for the ideal moment to purchase or sell before prices increase or fall sharply, these exchanges' sluggish transaction times play a crucial role. Decentralized exchanges have received criticism for being difficult to use and providing a poor user experience",
            },
          },
        ],
      },

      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "Centralized vs Decentralized Exchanges, A Brief Comparison";
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
          Centralized vs Decentralized Exchanges, A Brief Comparison
        </title>
        <meta
          name="description"
          content="
          we will give you answers to why people talk about Centralized vs Decentralized Exchanges. Major differences and which will be beneficial for Business growth."
        />
        <meta
          name="title"
          content="Centralized vs Decentralized Exchanges, A Brief Comparison"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Centralized vs Decentralized Exchanges"
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
          src={blog17}
          alt="Centralized vs Decentralized Exchange"
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
            Centralized vs Decentralized Exchanges, A Brief Comparison
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
              As the number of cryptocurrencies has grown tremendously over the
              previous several years, traders' need for crypto exchanges to
              conduct trading has skyrocketed. Investors may instantly trade,
              purchase, and sell cryptocurrencies using these exchanges.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The major question at this point is: which exchange should I
              choose? Understanding the distinction between centralized and
              decentralized exchange is essential before responding to this
              issue.
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
                Centralized Exchange (CEX)
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              As its name suggests, centralized cryptocurrency exchanges act as
              a go-between for buyers and sellers. Virtually all cryptocurrency
              transactions take place on centralized exchanges, which provide
              more reliability.
              <br />
              Here you can read more about{" "}
              <a
                style={{ color: "white", fontWeight: "bold" }}
                href="/blog/what-exactly-is-a-dao-Its-working-and-benefits/"
              >
                Decentralized Autonomous Organizations
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
                Centralized cryptocurrency exchanges include
              </Typography>
            </Box>
            <Box mt={2} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight={700}
              >
                <ul>
                  <li>Bitfinex</li>
                  <li>Coinbase</li>
                  <li>Gemini</li>
                  <li>GDAX</li>
                  <li>Huobi Global</li>
                  <li>Kraken</li>
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
                fontSize="22px"
                fontWeight="700"
              >
                Pros Of Centralized Exchange
              </Typography>
              <Box mt={2} color="#fff">
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                  fontWeight={700}
                >
                  <ul>
                    <li>An easy-to-use UI and simples platforms</li>
                    <li>An additional layer of reliability and security</li>
                  </ul>
                </Typography>
              </Box>
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
                Cons Of Centralized Exchange
              </Typography>
            </Box>
            <Box mt={2} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight={700}
              >
                <ul>
                  <li>very susceptible to cyber threats or hacking</li>
                  <li>extra costs for services</li>
                  <li>
                    may theoretically be turned off and is managed by a single
                    entity{" "}
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
                fontSize="22px"
                fontWeight="700"
              >
                Decentralized Exchange (DEX)
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Unified control over the assets is not present in a decentralized
              exchange, which is a non-centralized alternative to a centralized
              exchange. Instead of using centralized exchanges like in the past,
              smart contracts and{" "}
              <a
                style={{ color: "white", fontWeight: "bold" }}
                href="/blog/guide-to-dapp-development-and-benefits-of-decentralized-applications/"
              >
                decentralized apps
              </a>{" "}
              are utilized to automate trades and transactions.
              <br />
              If the smart contract is correctly built, there can be no security
              breach, making this solution much safer.
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
                What Does Decentralized Mean In Cryptocurrency?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              By conducting its crucial operations on the blockchain,
              decentralized cryptocurrency exchanges differ from centralized
              cryptocurrency exchanges in that they let users maintain ownership
              over their assets. How does decentralized exchange operate then?
              Either an AMM (Automated Market Maker) or conventional order book
              model powers decentralized exchanges.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The order book model entails
            </Typography>
            <Box mt={2} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight={700}
              >
                <ol>
                  <li>
                    A token owner places an order to exchange his or her assets
                    for another asset available on DEX. The token's owner
                    decides how many units must be sold, how much it will cost,
                    and how long it will take to accept bids for the assets.
                  </li>
                  <li>
                    After the selling order has been made, other users may
                    submit bids by placing a purchasing order.
                  </li>
                  <li>
                    Once the sellers have established the day and time, both
                    parties will review and implement each offer.
                  </li>
                </ol>
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
                fontSize="22px"
                fontWeight="700"
              >
                Some common examples of decentralized cryptocurrency exchanges
                are…
              </Typography>
            </Box>
            <Box mt={2} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight={700}
              >
                <ul>
                  <li>0x Protocol (Matcha)</li>
                  <li>PancakeSwap</li>
                  <li>Uniswap</li>
                  <li>Sushiswap</li>
                  <li>Curve</li>
                  <li>Venus</li>
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
                fontSize="22px"
                fontWeight="700"
              >
                Pros Of Decentralized Exchange
              </Typography>
            </Box>
            <Box mt={2} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight={700}
              >
                <ul>
                  <li>Private and completely anonymous</li>
                  <li>You don't have to give your assets to a third party.</li>
                  <li>
                    Fees are spread to liquidity providers rather than to a
                    single organization.
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
                fontSize="22px"
                fontWeight="700"
              >
                Cons Of Decentralized Exchange
              </Typography>
            </Box>
            <Box mt={2} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight={700}
              >
                <ul>
                  <li>Trading in fiat money is prohibited.</li>
                  <li>
                    A temporary loss risk exists for those who provide
                    liquidity.
                  </li>
                  <li>
                    Large orders can be more challenging to execute when
                    liquidity is scarce.
                  </li>
                </ul>
                <br />
                Here you can read about{" "}
                <a
                  style={{ color: "white", fontWeight: "bold" }}
                  href="/blog/8-most-popular-DApps-of-2022/"
                >
                  8 popular Decentralized Applications of 2022
                </a>{" "}
                .
              </Typography>
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
                Centralized Vs Decentralized Cryptocurrency Exchange: A
                Comparison
              </Typography>
            </Box>
            <Box my={2}>
              <img
                src={defiblog17}
                width="100%"
                alt=" Centralized vs Decentralized Cryptocurrency Exchange"
              />
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Now that we are more familiar with centralized and decentralized
              exchanges, let's examine how they differ from one another in terms
              of functionality, security, variety of crypto assets, liquidity,
              fees, and authority.
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
                Features
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              In terms of functionality, centralized crypto exchanges beat out
              decentralized ones. You may use advanced order types, portfolio
              management tools, and margin trading to increase your trading
              performance.
              <br />
              Contrarily, users of decentralized cryptocurrency exchanges have
              access to fewer order types and are not permitted to engage in
              margin trading (or equivalent services). Perhaps more functioning
              decentralized systems will be available as more sophisticated ones
              hit the market.
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
              At a centralized exchange, frauds are quite rare. When a project
              turns out to be a fraud and thieves escape with millions of
              dollars worth of bitcoin, those who bought unidentified currencies
              lose all they invested.
              <br />
              Similar to how your personal security, also known as your wallet,
              is stored in the centralized exchange. This implies that if you
              forget your password, you may request a reset from the exchange.
              <br />
              On the decentralized exchange, there is no way to recover your
              money if you are scammed. In addition, if you forget your seed
              phrase since you own your wallet, you won't be able to reset your
              password (a series of random words given to you while setting up
              your wallet).
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
                Crypto Asset Diversity
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Over 4,000 different cryptocurrencies will be available on the
              market by 2021.
              <br />
              To be listed on a CEX, an asset must meet the following
              conditions:
            </Typography>
            <Box mt={2} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight={700}
              >
                <ul>
                  <li>Security requirements</li>
                  <li>Trading operations</li>
                  <li>Regulatory prerequisites</li>
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
                fontSize="22px"
                fontWeight="700"
              >
                Liquidity
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The inability of decentralized exchanges to reach levels of
              liquidity equivalent to centralized exchanges is one of their main
              limitations. Certain DEXs have lately adopted automated market
              makers as an innovative liquidity tool to deal with this issue
              (AMMs).
              <br />
              The accuracy and performance of centralized order books are not
              replaced by centralized liquidity in the AMM model, despite its
              significant value proposition.
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
                Fees
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Most cryptocurrency investors are worried about trading fees.
              While a centralized exchange functions like a per-trade fee, a
              white-label DEX operates similarly to a CEX in that it charges a
              portion of the cost for each transaction. In order for your deal
              to be validated through blockchain when a transaction is ready to
              be added to a decentralized exchange, you must pay a gas fee,
              which might be pricey depending on the chain.
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
                Speed
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Speed is one factor that centralized exchanges have going for
              them. Compared to decentralized exchanges, they are quicker. A
              decentralized exchange takes 15 seconds to match and execute an
              order, compared to an average of 10 seconds for a centralized
              exchange to complete a transaction.
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
                Usability
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Centralized exchanges offer an advantage in usability.
              Comparatively speaking to decentralized exchanges, are quite
              simple to utilize. Users may easily access their money by
              entrusting transactions to an intermediary and paying a nominal
              charge (such as ATMs and debit cards). Additionally, they have
              resources at their disposal, such as internet banking applications
              that enable them to display their assets on aesthetically
              appealing platforms.
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
                Authority
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Another advantage of DEX bitcoin is that users may continue to own
              their assets. In a CEX, the exchange maintains complete control
              over the currency. On the other side, delaying the key exchange
              can result in a quicker execution because the user would not be
              needed to provide access. But this may result in cryptocurrency
              theft!
              <br />
              You have a concrete example of this. The $713 million in 2018
              thefts were mostly attributable to the Coincheck Exchange hack.
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
                Compliance
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              For as long as there have been cryptocurrencies, there have been
              regulatory barriers to their use. Discussions on compliance have
              also been sparked by decentralized exchanges. As they follow the
              rules and are in compliance with the local regulatory agencies,
              centralized exchanges have an advantage over decentralized
              exchanges in this situation. A KYC database is kept up to date by
              centralized exchanges, and software is used to ensure that trades
              are completely error-free.
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
                Regulations
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The majority of centralized exchanges are governed and licensed by
              the government. It may be against the law to operate a
              cryptocurrency exchange in some nations, such as China, South
              Korea, India, and Russia, thus CEX should adhere to the rules in
              those nations.
              <br />
              On the other hand, governments and regulators have no impact on
              the decentralized exchange or its most popular subdomain like
              {""}{" "}
              <a
                style={{ color: "white", fontWeight: "bold" }}
                href="/blog/what-is-defi-a-beginners-guide-to-decentralized-finance-system/"
              >
                decentralized finance
              </a>{" "}
              (Defi). Simply put, they can't be turned off. That is their
              biggest benefit, but it also has a lot of disadvantages, such as
              the fact that customer support isn't on their side.
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
                Decentralized Exchange Vs Centralized Exchange: Summary
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The key distinctions between centralized and decentralized bitcoin
              exchanges are laid out as follows:
            </Typography>
          </Box>

          <Box mt={4}>
            <TableContainer>
              <table id="customers">
                <tr>
                  <th>
                    {" "}
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
                      Feature
                    </Typography>
                  </th>
                  <th>
                    {" "}
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
                      Centralized Exchange
                    </Typography>{" "}
                  </th>
                  <th>
                    {" "}
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
                      Decentralized Exchange
                    </Typography>{" "}
                  </th>
                </tr>
                <tr>
                  <td>Ease of use</td>
                  <td>User-friendly</td>
                  <td>Complicated</td>
                </tr>
                <tr>
                  <td>Security</td>
                  <td>Risk of being hacked</td>
                  <td>Risk of Smart Contract Exploit</td>
                </tr>
                <tr>
                  <td>Features</td>
                  <td>Variety of features</td>
                  <td>Limited features</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>Instant</td>
                  <td>Order needs to be confirmed on blockchain</td>
                </tr>
                <tr>
                  <td>Fees</td>
                  <td>Charges standard fee</td>
                  <td>Gas fees</td>
                </tr>
                <tr>
                  <td>Trading volume</td>
                  <td>High</td>
                  <td>Lower</td>
                </tr>
                <tr>
                  <td>Liquidity</td>
                  <td>High</td>
                  <td>Lower</td>
                </tr>
                <tr>
                  <td>Regulations</td>
                  <td>Easily regulated</td>
                  <td>Complicated regulation</td>
                </tr>
                <tr>
                  <td>Fiat payment</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
              </table>
            </TableContainer>
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
                Final Verdict: Centralized Vs Decentralized Cryptocurrency
                Exchange
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              In terms of immediate benefits, DEXs are riskier environments with
              more returns if you play the game properly, but CEXs offer a
              secure introduction into the world of cryptocurrency trading.
              <br />
              In the end, you ought to carry out both. The golden rule of
              cryptocurrency trading is to never invest money that you cannot
              afford to lose.
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
                FAQs Related to Centralized Vs Decentralized Exchanges.
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

export default Blog17;

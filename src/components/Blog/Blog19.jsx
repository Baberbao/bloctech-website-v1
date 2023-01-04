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

import blog8img from "./assets/blog19two.png";
import blog8 from "./assets/blog19.png";
import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "What are the most popular DAOs?",
    details: (
      <div>
        <ul>
          <li>AAVE</li>
          <li>Maker DAO</li>
          <li>CURVEDAO</li>
          <li>UNISWAP</li>
        </ul>
      </div>
    ),
    list: true,
  },
  {
    summary: "How many DAOs are there?",
    details:
      "There are, however, many other DAO kinds. DAOs are used to organize, administer, and control the finances of media companies like Bankless and public financing groups like Gitcoin.",
  },
];

const Blog19 = () => {
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
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/best-examples-of-daos-you-need-to-know-about/",
      },
      headline: "Best Examples of DAOs You Need to Know About.",
      description:
        "A web3 concept called the Decentralized Autonomous Organization (DAO) makes use of blockchain technology to enable communities, businesses, or any other kind of collective organization to be managed and controlled, and decentralized.",
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
            name: "What are the most popular DAOs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "1-AAVE 2-Maker DAO 3- CURVEDAO  4-UNISWAP",
            },
          },
          {
            "@type": "Question",
            name: "How many DAOs are there?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There are, however, many other DAO kinds. DAOs are used to organize, administer, and control the finances of media companies like Bankless and public financing groups like Gitcoin.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "Best Examples of DAOs You Need to Know About";
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
        <title>Best Examples of DAOs People Need to Know About</title>
        <meta
          name="description"
          content="
                    Here you will find about Best example of DAOs that are performing well and build a well-known example for other organizations to develop DAOs structure."
        />
        <meta
          name="title"
          content="Best Examples of DAOs People Need to Know About"
        />
        <meta charset="utf-8" />
        <meta name="keywords" content="examples of DAOs" />

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
          alt="Best example of DAOs you need to know about"
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
              Iqra Kanwal
            </Typography>
            <Typography
              color="white"
              fontSize="12px"
              fontStyle="italic"
              fontWeight="bold"
            >
              {" "}
              SEP 24th 2022
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
            Best Examples of DAOs You Need to Know About
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
                Introduction to DAO:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A web3 concept called the Decentralized Autonomous Organization
              (DAO) makes use of blockchain technology to enable communities,
              businesses, or any other kind of collective organization to be
              managed and controlled, and decentralized.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              So, what does that actually mean? However, blockchains like
              Ethereum enable the{" "}
              <Link
                style={{ color: "white", fontWeight: 700 }}
                to="/smart-contract-development-services/"
              >
                {" "}
                development of smart contracts{" "}
              </Link>{" "}
              , which are basically sets of rules, to be applied in a safe
              manner, preventing any one party from overriding the choices of
              other parties when they lack the necessary power.
              <br />
              Using blockchain technology's encryption and distributed storage
              features, this is largely accomplished. In addition to removing
              the power of network or infrastructure owners, or even central
              governments, to impose their will on how the organization is
              managed, supporters claim that it may also increase efficiency and
              allow consumers greater control over how their data is utilized.
              <br />
              But the fundamental idea of the{" "}
              <Link
                style={{ color: "white", fontWeight: 700 }}
                to="/blog/what-exactly-is-a-dao-Its-working-and-benefits/"
              >
                DAO{" "}
              </Link>{" "}
              is interesting, and it symbolizes a space where technological
              developments like artificial intelligence (AI), blockchain, and
              the internet of things (IoT) are interacting to open up new
              possibilities.
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
                Why Were DAOs Created?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The introduction of Bitcoin, the first blockchain and
              cryptocurrency, made it possible for us to conduct peer-to-peer
              (P2P) transactions for the first time without requiring a third
              party (banks, government, etc.). Since then, individuals and
              developers in every country have been interested in the potential
              and reach of blockchain technology.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              In the years that followed, as additional coins appeared, interest
              in this new, decentralized industry grew. Soon after, individuals
              began to understand how cryptocurrencies had the power to
              challenge central banks' hegemony over the contemporary financial
              system.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              This encouraged sector growth while posing a danger to the
              centralized authority that had already been created.
              <br />
              In addition to incorporating conventional payment methods into
              regular P2P transactions, the objective of this new decentralized
              system was to build the whole financial system around it.
              <br />
              Decentralized autonomous organizations (DAO) were developed as a
              result to meet the demands of the users. These organizations
              provide them the freedom to direct their own experiences and make
              choices that will benefit both the organization and the community.
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
                Best DAO examples:
              </Typography>
            </Box>
            <Box my={2}>
              <img src={blog8img} width="100%" alt="Best DAO examples" />
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Some of the Best DAO examples are here.
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
                Uniswap:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              One of the biggest and most well-known DAOs, Uniswap functions as
              a cryptocurrency exchange that is based on the Ethereum
              blockchain. Holding the UNI token, which grants voting rights on
              how the organization is organized and handled, entitles anybody to
              membership.
              <br />
              You can apply for governance powers inside the organization and
              join as an integrated member if you have been a frequent user for
              a while. Due to its tight hold on the Defi markets, Uniswap's
              volume and membership have experienced exponential development.
              Over the past several years, Uniswap DAO has received significant
              media attention. Uniswap now has a $3.6 billion market value and
              the well-liked DAO token UNI.
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
                DAO maker:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The DAO Maker wants to dominate the blockchain sector's market for
              growth solutions for emerging cryptocurrency firms. Infinity Pad
              (IPAD), Seascape Network (CWS), My Neighbour Alice (ALICE), and
              Orion Protocol, among other successful initiatives, were all
              driven by the organization in the previous year (ORN).
              <br />
              DAO serves as the platform's native cryptocurrency. Users can
              stake it on the vaults of DAO Maker to receive a yield. The token
              will soon be utilized to support community governance as well.
              With a market capitalization of $116.3 million, the token's
              current supply is around 71 million DAO.ss
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
                Bit DAO:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Anyone may purchase a share in web3 and de-fi firms and projects
              through BitDAO, a decentralized investment fund supported by
              PayPal founder Peter Thiel. Voting on the distribution of managed
              funds among the projects funded by the fund is available to token
              holders.
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
                Aragon:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Another well-known decentralized autonomous organization, Aragon,
              permits the introduction of DAOs on various platforms. Within a
              DAO architecture, Aragon allows users to communicate with anybody,
              from anywhere, globally. Users seem to like Aragon's ANT DAO
              token. Users are given the freedom to choose how any project they
              are interested in will develop in the future. With one of the best
              DAO tokens available, Aragon enables token holders to start or
              join DAOs that are based on the platform.
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
                Constitution DAO:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              This DAO was established in 2021 as a decentralized, crowdsourced
              attempt to win a valuable copy of the US constitution that was
              being offered for sale by Sotheby's. In the end, it failed despite
              receiving over $40 million from 15,000 donors. The project's
              organizers insisted that even though they lost the auction, it was
              a success because it had informed many people about the
              possibility of DAOs as a means of crowdsourcing funding.
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
                Decred:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Among the best platforms for DAO initiatives is Decred. As a
              governance cryptocurrency, DCR, the platform's native coin,
              functions. An amalgam of the proof-of-work and proof-of-stake
              consensus models, Decred's functioning mechanism combines both of
              these. There isn't much opportunity for significant policy changes
              in Decred because it is decentralized and self-governing.
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
                Pleaser:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              a group of art enthusiasts and creators who invest in digital
              treasures like{" "}
              <Link
                to="/blog/the-complete-guide-to-nft-smart-contracts/"
                style={{ color: "white", fontWeight: 700 }}
              >
                NFT artwork
              </Link>{" "}
              . It plays with the concept of "fractional" ownership of art as
              each member owns a portion of the expanding collection and focuses
              on works that its members feel reflect significant ideas and
              causes.
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
                Dash:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Another illustration of a DAO initiative that has propelled DeFi
              to success is Dash. It is a decentralized kind of digital payment
              designed to facilitate transactions more quickly than those made
              with Bitcoin and other cryptocurrencies. The DAO's utility token
              is DASH.
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
                Closing thoughts:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The future of online transactions and decentralized networks lies
              with decentralized autonomous organizations, which are in a strong
              position to take that role. The majority of users are quite
              pleased with the level of autonomy and self-governance that the
              DAOs provide. Another fantastic characteristic that draws
              consumers to DAOs is the tokens' potential for price appreciation
              over time, contingent upon the project's performance.
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
                        textAlign={value.list ? "left" : "center"}
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

export default Blog19;

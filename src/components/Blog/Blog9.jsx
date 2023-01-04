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

import blog8img from "./assets/blog9two.png";
import blog8 from "./assets/blog9.png";
import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "How do I create a multichain wallet?",
    details: (
      <div>
        Because of the previously established backend infrastructure, we can
        design a multi-chain wallet in only five easy steps because of the
        previously established backend infrastructure:
        <ul>
          <li>Creating a Moralis Server</li>
          <li>Initializing Moralis and the SDK</li>
          <li>Creating the UI</li>
          <li>Adding the application logic</li>
          <li>Developing the Transfer Functions.</li>
        </ul>
      </div>
    ),
    list: true,
  },
  {
    summary: "Which multichain is Blockchain?",
    details:
      "The open-source Multichain blockchain is a blockchain platform that was developed to generate blockchain applications that may operate both within and across organizations.",
  },
  {
    summary: "What is a Multichain Token?",
    details:
      "An open-source cross-chain router protocol (CRP) called Multichain enables users to bridge tokens between different blockchains. Since its establishment in July 2020, the project has changed its name to Multichain.",
  },
];

const Blog9 = () => {
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
          "https://www.bloctechsolutions.com/blog/what-is-multichain-defining-the-working-of-multichain-blockchain/",
      },
      headline:
        "What is Multichain? Defining the working of Multichain Blockchain",
      description:
        "The open-source Multichain blockchain is a blockchain platform that was developed to generate blockchain applications that may operate both within and across organizations. Organizations are able to conduct financial transactions on these private blockchains.",
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
            name: "How do I create a multichain wallet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Because of the previously established backend infrastructure, we can design a multi-chain wallet in only five easy steps because of the previously established backend infrastructure:1- Creating a Moralis Server 2-Initializing Moralis and the SDK 3- Creating the UI 4- Adding the application logic5- Developing the Transfer Functions.",
            },
          },
          {
            "@type": "Question",
            name: "Which multichain is Blockchain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The open-source Multichain blockchain is a blockchain platform that was developed to generate blockchain applications that may operate both within and across organizations.",
            },
          },
          {
            "@type": "Question",
            name: "What is a Multichain Token?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An open-source cross-chain router protocol (CRP) called Multichain enables users to bridge tokens between different blockchains. Since its establishment in July 2020, the project has changed its name to Multichain.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "What is Multichain? Defining the working of Multichain Blockchain";
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
          What is Multichain? Defining the working of Multichain Blockchain
        </title>
        <meta
          name="description"
          content="
          Multichain blockchain is a blockchain platform that was developed to generate blockchain applications that may operate both within and across organizations."
        />
        <meta
          name="title"
          content="What is Multichain? Defining the working of Multichain Blockchain"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="multichain , multichain blockchain , multichain Bridge"
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
          alt="Multichain Blockchain"
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
            What is Multichain? Defining the working of Multichain Blockchain
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
                Introduction to Multichain:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Users can bridge tokens between blockchains using the open-source
              cross-chain router (CRP) known as Multichain. Since its founding
              in July 2020, the project has adopted the name Multichain.
              Additionally, as part of its accelerator program, Binance gave
              $350,000 to Multichain, and Binance Labs oversaw a $60,000,000
              funding round. IDG Capital, Sequoia Capital, and the Tron
              Foundation participated in this round.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              BNB Smart Chain, Fantom, and Harmony are just a few of the more
              than 42 chains that Multichain supports. Users may easily move
              their assets between blockchains using the platform's cross-chain
              bridges and cross-chain routers. Additionally, MULTI, the
              project's governance token, enables holders of Multichain to
              participate in the eventual governance system.
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
                Multichain blockchain:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The open-source Multichain blockchain is a blockchain platform
              that was developed to generate blockchain applications that may
              operate both within and across organizations. Organizations are
              able to conduct financial transactions on these private
              blockchains. Along with providing transaction stability and
              control, the multichain blockchain's goal is to maintain tight
              visibility only amongst the selected parties. Demonstrating that
              the job was done facilitates the mining process while also
              allowing for cost management.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              For financial transactions, the platform offers a straightforward
              command-line interface and an API. Permission management, native
              assets, data stream, and straightforward per-chain configuration
              are just a few of the many features that the multichain blockchain
              comes with as standard. These applications, which offer
              scalability, secrecy, and compliance, make them a good fit for
              enterprise-level applications.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The tools inside the network are versatile and developer-friendly,
              and multichain blockchain is a relatively lightweight private
              network that is simpler to create and manage. Additionally, it
              supports the usage of several programming languages. On the
              network, users may produce and trade native tokens, which are the
              network's assets.
              <br />
              The tools inside the network are versatile and developer-friendly,
              and multichain blockchain is a relatively lightweight private
              network that is simpler to create and manage. Additionally, it
              supports the usage of several programming languages. Using native
              tokens on the network, In order to do this, Multichain extends the
              Bitcoin platform and API, making it compatible with a wide range
              of tools and open-source platforms designed for Bitcoin.
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
                Characteristics of multichain blockchain:
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Multichain is an off-the-shelf network that mimics some of the
              characteristics of Bitcoin.
              <ul>
                <li>The network's nodes don't need to be uniform.</li>
                <li>They only need to be linked. </li>
                <li>
                  All participating systems join a multichain blockchain network
                  as a result, which is essentially what this entails.
                </li>
              </ul>
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
                Working of multichain:
              </Typography>
            </Box>
            <Box my={2}>
              <img
                src={blog8img}
                width="100%"
                alt="working of Multichain Blockchain"
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
                Multichain bridges tokens using two fundamental techniques
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              To start, it locks tokens on one blockchain using smart contracts
              and mints-wrapped tokens on another blockchain. When this isn't
              feasible, it trades bridging tokens through a network of liquidity
              pools that span different chains. All of these can often be
              completed without slipping in about 30 minutes.
              <br />
              Multichain supports multiple blockchain networks, including Terra
              and Cosmos, as well as Ethereum Virtual Machine (EVM) networks.
              <br />A comparable bridging service for NFTs is also provided by
              Multichain (Non-Fungible Tokens). With the help of Multichain,
              projects who wish to issue their tokens on new blockchains may do
              so. It will take less than a week to finish this service, which is
              free.
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
                Multichain features a network of Secure Multi-Party Computation
                (SMPC)
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Nodes that are managed by multiple parties to make all of this
              work easier. There is a wide range of bridges available right now.
              Why, then, should you select Multichain? The project has a number
              of features that distinguish it from other similar endeavors and
              draw attention:
              <ul>
                <li>
                  Multichain enables projects to create tokens for many chains.
                  This feature indicates that they make bridging for both
                  projects and users easier.
                </li>
                <li>
                  The 1:1 cross-chain bridge is not all that Multichain
                  provides. In order to access liquidity between blockchains, it
                  also has a reliable infrastructure. The secure and
                  reliableoperation of this system has historically proven
                  difficult. Multichain provides more than 2,000 bridges for
                  crypto tokens and NFTs for thousands of projects and DeFi
                  protocols, such as SushiSwap and Curve Finance.
                </li>
                <li>
                  It enjoys the support and investment of reputable industry
                  titans and venture capital firms. Because of this, it is
                  simpler to trust this than anonymous bridging services.
                </li>
                <li>
                  Other bridges find it difficult to compete with the wide
                  variety of tokens it gives. This covers assistance with
                  cryptocurrencies and NFTs on more than 42 blockchain networks,
                  both EVM-based and not.
                </li>
              </ul>
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
                Final thoughts:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              As part of its goal to become "the ultimate router in Web3,"
              Multichain provides one of the broadest choices of bridgeable
              tokens. Multichain makes it simple to switch between networks like
              Solana (SOL), Avalanche (AVAX), and the Ethereum network (ETH) if
              you're interested in DeFi. Multichain facilitates communication
              between dApps and the whole blockchain ecosystem by boosting
              interoperability. Given how crucial interoperability is to Web3,
              it appears that Multichain will play a significant role in
              achieving this.
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

export default Blog9;

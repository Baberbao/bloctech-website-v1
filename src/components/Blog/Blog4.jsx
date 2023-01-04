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
import blog1 from "./assets/blog4two.jpg";
import bg from "./assets/bgf.png";
import blog3img from "./assets/blog4.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog4 = () => {
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
      summary: "Which blockchain is more reliable for dapp?",
      details:
        "The most well-known blockchain platform is, by far, Ethereum. It is regarded as the greatest dApp platform since it has its own language, Solidity, and leverages the Ethereum Virtual Machine (EVM) to create SCs.",
    },
    {
      summary: "How do decentralized apps generate revenue?",
      details:
        " Most dApp are charging transaction fees. One of the most lucrative ways to earn money by creating dApps is by charging people to use your service.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/Guide-to-dapp-development-and-benefits-of-decentralized-applications/",
      },
      headline:
        "Guide to dApp Development and Benefits of Decentralized Applications",
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
            name: "Which blockchain is more reliable for dapp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The most well-known blockchain platform is, by far, Ethereum. It is regarded as the greatest dApp platform since it has its own language, Solidity, and leverages the Ethereum Virtual Machine (EVM) to create SCs.",
            },
          },
          {
            "@type": "Question",
            name: "How do decentralized apps generate revenue?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most dApp are charging transaction fees. One of the most lucrative ways to earn money by creating dApps is by charging people to use your service.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "Guide to dApp Development and Benefits of Decentralized Applications";
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
          Guide to dApp Development and Benefits of Decentralized Applications
        </title>
        <meta
          name="description"
          content="
          You will learn about what are decentralized applications. platforms and process of dapp development and benefits of decentralized applications. "
        />
        <meta
          name="title"
          content="Guide to dApp Development and Benefits of Decentralized Applications"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Introduction to dApp development , What are decentralized applications? , Causes of DApp development: , Platforms for dApp development: , Benefits of decentralized applications: "
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
          alt="dApp-development-and-benefits-of-dapp-development"
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
              SEP 17th 2022
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
            Guide to dApp Development and Benefits of Decentralized Applications
          </Box>
        </Box>

        <Box mt={4} color="#fff">
          <Box component="h2">
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
              Introduction to dApp development:
            </Typography>
          </Box>
          <Typography
            mt={2}
            variant="body1"
            textAlign={{ md: "justify", xs: "left" }}
            fontSize="18px"
          >
            Building decentralized apps (dApps) is the process of creating
            backend programming that runs on a{" "}
            <strong> decentralized peer-to-peer network</strong>. The process of
            programming is what separates traditional and dApp development.
          </Typography>
        </Box>

        <Box mt={4} color="#fff">
          <Box component="h2">
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
              What are decentralized applications?
            </Typography>
          </Box>

          <Typography
            mt={2}
            variant="body1"
            textAlign={{ md: "justify", xs: "left" }}
            fontSize="18px"
          >
            A blockchain or peer to peer network (P2P) of computers instead of a
            single computer is where decentralized apps (dApps) are created and
            executed. Decentralized applications, sometimes known as "dapps,"
            are{" "}
            <strong>
              programs that run without the involvement of any single authority
            </strong>{" "}
            . DApps, which are frequently created on the{" "}
            <strong>Ethereum platform</strong> , may be created for a variety of
            uses, including gaming, banking, and social networking. Here you can
            find out about a dApp development company that can help you with
            your decentralized application. Here you can find out about a dApp
            development company that can help you with your decentralized
            application.
          </Typography>
        </Box>

        <Box mt={4} color="#fff">
          <Box component="h2">
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
              Causes of DApp development:
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography fontSize="18px" fontWeight="700">
                Enterp25se:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The cost of DApp development is significantly impacted by the
              sector in which the DApp will be used. The main reason for this is
              that every industry is distinct and calls for varying degrees of
              expertise. It is necessary to accommodate some industries'
              stringent compliance standards. In some cases, there may be
              several users interacting with the dApp development
              simultaneously.
              <br />
              For instance, in the insurance industry, one application may be
              required to be used simultaneously by clients, brokers, and
              insurers. The overall cost of development is impacted by all of
              these variations.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography fontSize="18px" fontWeight="700">
                Ambig25ty:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Each project has a different level of complexity, and thus this is
              one of the main variables influencing the price of constructing a
              DApp. Choosing a blockchain platform is what? Which technological
              framework will be applied? Will you utilize a ready-made API, or
              do you need to design one specifically for this project? By
              providing answers to these questions, you can determine the degree
              of your project's complexity.
              <br />
              Using a payment application built around current cryptocurrencies
              as an example, a low-complexity DApp might be described as such.
              On the other hand, building a blockchain platform from the ground
              up would be extremely complicated and very expensive.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography fontSize="18px" fontWeight="700">
                Labor surc25rges:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Finally, a major factor in your DApp development budget is the
              cost of labor. The team's size, location, and qualifications will
              all affect the fees. Remember to factor in HR-related expenses
              like hiring, insurance, and holidays in addition to your salary.
              Making the decision to develop in-house vs. outsourcing should be
              carefully considered given how difficult it may be to find
              blockchain professionals.
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
                Platforms for dApp development:
              </Typography>
              {/* <Container maxWidth="md"> */}{" "}
              <img
                src={blog1}
                alt=" platforms-for-dapp-development"
                width={"100%"}
              />{" "}
              {/* </Container> */}
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The Ethereum platform is the foundation for the vast majority of
              dApp. With more than 3,500 dApp already created and daily active
              users approaching 160k, it’s possible these applications will soon
              become the norm.
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
              According to the state of dapps, as of May 2021, the top 5
              development platforms are
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
              fontWeight={700}
            >
              <ul>
                <li>Ethereum</li>
                <li>EOS</li>
                <li>Steem</li>
                <li>TRON</li>
                <li>Klaytn</li>
              </ul>
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
                Benefits of decentralized applications:
              </Typography>
            </Box>
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
                Zero latency
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              When a smart contract is implemented on a blockchain, the network
              as a whole can always support users who want to engage with the
              contract. Denial-of-service attacks directed at specific dapps are
              thus prohibited by malicious actors.
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
                Confidentiality
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              To deploy or use a dApp, you do not need to provide your
              real-world identity.
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
                Opposition to restrictions
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Users cannot be prevented from submitting transactions,
              establishing dapp, or accessing data from the blockchain by a
              single entity on the network.
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
                Perfect data safety
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Thanks to cryptographic primitives, data saved on the blockchain
              is unchangeable and unchallengeable. Transactions and other data
              that have already been made public are not susceptible to forgery
              by malicious parties.
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
                Verifiable action/trustless computation
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Without requiring faith in a centralized authority, smart
              contracts are examined and are assured to operate in predictable
              ways. This is not the case with conventional models; for instance,
              while using online banking platforms, we must have faith that
              financial companies won't abuse our financial information, tamper
              with records, or suffer a hack.
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
                Types of decentralized applications:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Decentralized apps fall into one of three types based on the
              blockchain model that is being used:
              <ol>
                <li>
                  These decentralized apps (dApps), like Bitcoin, have their own
                  blockchain. This category also includes other alternative
                  coins with their own blockchain.
                </li>
                <li>
                  {" "}
                  This subset of dApp development makes use of the Type 1 app
                  blockchain. These decentralized applications are protocols,
                  and thus require coins to operate. The Omni Protocol is a Type
                  2 application that works well. Omni is a distributed trading
                  platform created as a "layer" on top of the Bitcoin blockchain
                  to enable the "peerless, trustless, and easy" exchange of
                  goods or value between participants without the use of
                  middlemen.
                </li>
                <li>
                  {" "}
                  The protocol used by Type 2 applications is used by Type 3
                  dApps. A Type 3 dApp is one such as the SAFE Network (Secure
                  Access for Everyone). It is a decentralized data storage and
                  communications network that uses the extra computing power of
                  its users to replace data centers and servers. It is an
                  independent data network that enables the development of
                  applications and websites that are impervious to censorship.
                  To issue Safe Coins, which are later utilized to enable its
                  functional characteristics, it makes use of the Omni Protocol.
                </li>
              </ol>
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
                Conclusion:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The aforementioned essay goes over the background of smart
              contracts and dApps on Ethereum. Then, in graphic detail, the
              operation of decentralized apps is discussed. The article also
              enumerates the advantages and disadvantages of dApps.
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

export default Blog4;

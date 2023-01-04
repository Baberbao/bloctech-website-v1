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
import blog21 from "./assets/blog21.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog21 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary: "Is blockchain an evolving technology?",
      details:
        "One of the newest technologies in use today, blockchain has just recently become the subject of significant research and innovation. Since its creation, Bitcoin has been the most widely used cryptographic money, and it is the most remarkable illustration of a blockchain-based currency.",
    },
    {
      summary: "How fast is blockchain growing?",
      details:
        "The value of the blockchain market was $4.9 billion in 2021 and is anticipated to grow at a compound annual growth rate (CAGR) of 68.4% to reach $67.4 billion by 2026.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/history-and-evolution-of-blockchain-technology/",
      },
      headline: "History and Evolution of Blockchain Technology: A Brief Guide",
      description:
        "The development of blockchain history technology has seen it progress from one great stage to another. Blockchain technology has developed from version 1.0 to version 4.0, with a tone of improved and more sophisticated capabilities.",
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
            name: "Is blockchain an evolving technology?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "One of the newest technologies in use today, blockchain has just recently become the subject of significant research and innovation. Since its creation, Bitcoin has been the most widely used cryptographic money, and it is the most remarkable illustration of a blockchain-based currency.",
            },
          },
          {
            "@type": "Question",
            name: "How fast is blockchain growing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The value of the blockchain market was $4.9 billion in 2021 and is anticipated to grow at a compound annual growth rate (CAGR) of 68.4% to reach $67.4 billion by 2026.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "History and Evolution of Blockchain Technology: A Brief Guide";
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
          <title>
            History and Evolution of Blockchain Technology: A Brief Guide
          </title>
          <meta
            name="description"
            content="
            How Blockchain Started? What is happening in the current process and what will Blockchain's future be? Read Everything in History and Evolution of Blockchain Technology Blog.
         "
          />
          <meta
            name="title"
            content="History and Evolution of Blockchain Technology: A Brief Guide"
          />
          <meta charset="utf-8" />
          <meta
            name="keywords"
            content="History and Evolution of Blockchain Technology"
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
            src={blog21}
            alt="history and evolution of blockchain"
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
                OCT 14 2022
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
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The development of blockchain history technology has seen it
              progress from one great stage to another. Blockchain technology
              has developed from version 1.0 to version 4.0, with a tone of
              improved and more sophisticated capabilities.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A{" "}
              <a
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                href="/blog/complete-guide-to-peer-to-peer-lending-platforms-with-blockchain-Integration/"
              >
                peer-to-peer network
              </a>{" "}
              of computers that records and maintains bitcoin transactions is
              known as a "blockchain," and it may be summed up as such.
              Essentially, it is an electronic, decentralized public ledger that
              is spread over a network of computer systems.{" "}
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
                History of blockchain technology - Infographic Background:
              </Typography>
            </Box>{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              For blockchain enthusiasts and aspiring blockchain developers, a
              full understanding of blockchain is essential. Therefore, we have
              provided a full history of blockchain technology with a detailed
              explanation of its progress in order to aid our readers.
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
                  The structure of blockchain organization:
                </Typography>
              </Box>

              <Box mt={4} color="#fff">
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  Blockchain, in its most basic form, is a safe peer-to-peer
                  distributed ledger that is utilized to log transactions across
                  several computers. Only by linking a new block to the one
                  before it can the ledger's contents be changed. Another way to
                  think about it is as a peer-to-peer network sitting on top of
                  the internet.
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    The constructed database is transparently distributed among
                    network users, allowing anybody to view its data.
                    Peer-to-peer networks and a time-stamping server are used
                    for the database's autonomous management. A{" "}
                    <a
                      style={{
                        color: "white",
                        fontWeight: "bold",
                      }}
                      href="/blog/what-Is-blockchain-technology-how-Is-It-Important-for-data-security/"
                    >
                      blockchain's blocks
                    </a>{" "}
                    are organized so that each block contains a reference to the
                    information in the block before it.
                  </Typography>
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    A blockchain's blocks include groups of transactions that
                    network users have endorsed. Each block includes a
                    cryptographic hash of the block before it is in the chain.
                    Now we will discuss the history of blockchain technology in
                    different phases.
                  </Typography>
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
                    Phase 1 of Evolution of Blockchain: Blockchain 1.0
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  Decentralization as a whole underwent iteration throughout the
                  blockchain 1.0 period, which was entirely focused on the
                  development of cryptocurrencies. The creation of the first
                  cryptocurrency, Bitcoin, marked the beginning of the
                  blockchain's growth (BTC).
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    From the history of blockchain, we realize that a group of
                    professionals known as Cypherpunks voiced for the future and
                    evolution of the internet and the banking system, and the
                    early stages of Blockchain came into existence. The group
                    anticipated that the internet would be monitored and
                    restricted in the future. They thus made an effort to create
                    an electronic currency system that would guarantee the
                    privacy and maintain the open internet from an economic
                    standpoint.
                  </Typography>
                </Typography>
              </Box>
              <Box mt={4} color="#fff"></Box>
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
                  Phase 2 of Evolution of Blockchain: Blockchain 2.0
                </Typography>
              </Box>
            </Box>
            <Box mt={4} color="#fff">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                As one of the first contributors to the Bitcoin codebase and in
                a world where innovation is the norm, Vitalik Buterin is among a
                growing number of engineers who believe that Bitcoin has not yet
                fully used the potential of blockchain technology.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                In addition to being a peer-to-peer network, Buterin began
                developing what he believed to be a customizable blockchain that
                may serve a variety of purposes. A crucial turning point in the
                history of blockchain came when Ethereum was introduced as a
                brand-new public blockchain in 2013 with more features than
                Bitcoin.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Because it can allow{" "}
                <a
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                  href="/blog/understanding-the-working-and-benefits-of-smart-contract/"
                >
                  smart contracts
                </a>{" "}
                and decentralized apps, the Ethereum blockchain handles the most
                transactions each day. In the cryptocurrency industry, its
                market cap has also dramatically grown.
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
                  Phase 3 of Evolution of Blockchain: Blockchain 3.0
                </Typography>
              </Box>

              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                This stage of blockchain development aims to enhance scalability
                while enabling interoperability between blockchains. Cardano
                (ADA) is being introduced by Blockchain 3.0. Though there are no
                precise definitions or agreed-upon ideas of what the blockchain
                offers the internet, it is assumed to use a Proof-of-Stake (PoS)
                process.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                3rd phase of the history of Blockchain or more precisely you can
                say, Blockchain 3.0 is viewed as an institutional and business
                blockchain. It aims to improve the security characteristics of
                the blockchain while also lowering the high gas prices
                associated with the earlier version.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Blockchain 3.0 is an improved version of blockchain 2.0 that was
                created to enhance the technology's capabilities while utilizing
                decentralized applications. It focuses on finding solutions to
                blockchain technology's current issues. Additionally, it aspires
                to make transactions easier, quicker, and more affordable.
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
                  Phase 4 of Evolution of Blockchain: New technology 4.0
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Blockchain 3.0 apparently gives way to Blockchain 4.0, the next
                generation of blockchain technology. It aims to completely
                mainstream blockchain technology by making it eventually usable
                in commercial contexts for developing and running apps.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The earlier iterations of blockchain technology have already
                demonstrated potential benefits for organizations, including
                security, automatic record-keeping, immutability, and the
                ability to pay bills, salaries, and invoices in a completely
                secure environment. However, there is still potential for
                improvement in terms of speed and the restricted capacity for
                rapid blockchain innovation. Blockchain 4.0 aims to improve the
                industry's user experience.
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
                  Forecasting the Future of Blockchain:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Governments and businesses are making significant investments in
                Blockchain technology as they strive to encourage breakthroughs
                and uses, which bodes well for the technology's future. There
                will eventually be a public blockchain that anybody can use, it
                is becoming more and more obvious.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The need for blockchain specialists has grown as a result of
                recent advancements in blockchain technology. In order to profit
                from Blockchain applications, businesses are using them as well.
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
                  Final thoughts:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Blockchain technology has made progress thus far, and it appears
                that the mainstream is not far away. Low speed and a complicated
                user interface were drawbacks of Blockchain 1.0, which was
                created exclusively to support a cryptocurrency. Blockchain 2.0
                was created to surpass Blockchain 1.0, so it could be used for
                more than just cryptocurrencies. As a result, a blockchain
                similar to Ethereum emerged, one that was specifically designed
                to support a variety of tasks and uses. Blockchain 3.0 evolved
                as the industry pushed for fully developed blockchain
                technology, and now it is anticipating Blockchain 4.0, the next
                generation of blockchain technology.
              </Typography>
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

export default Blog21;

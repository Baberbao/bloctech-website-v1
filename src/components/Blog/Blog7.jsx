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
import blog1 from "./assets/blog5two.png";
import bg from "./assets/bgf.png";
import blog3img from "./assets/blog7.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog7 = () => {
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
        "How peer to peer lending platforms are beneficial for investors?",
      details:
        "P2P platforms give investors freedom and control by letting them decide everything from the loan's kind and term length to the requirements that a borrower must satisfy in order to be accepted.",
    },
    {
      summary: "How does p2p investment work?",
      details:
        "Peer-to-peer lending, sometimes known as 'P2P,' enables investors to make cash loans to other people directly using P2P platforms like Lending Works. Investors benefit from capital and interest payments while also assisting others in achieving their objectives.",
    },
    {
      summary: "How to become a peer-to-peer lender?",
      details:
        "Choose a P2P lending platform once you've decided what kind of peer-to-peer loan you want. Next, fill out an application on the website. A mild credit check will likely follow. You must study the loan conditions and interest rate if your application is accepted.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/complete-guide-to-peer-to-peer-lending-https://www.bloctechsolutions.com/blog/complete-guide-to-peer-to-peer-lending-platforms-with-blockchain-Integration/platforms-with-blockchain-Integration/",
      },
      headline:
        "Complete guide to Peer to Peer Lending Platforms with Blockchain Integration.",
      description:
        "Peer to peer (P2P) lending platforms eliminates the middleman by allowing people to borrow money directly from other people.",
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
            name: "How peer to peer lending platforms are beneficial for investors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "P2P platforms give investors freedom and control by letting them decide everything from the loan's kind and term length to the requirements that a borrower must satisfy in order to be accepted.",
            },
          },
          {
            "@type": "Question",
            name: "How does p2p investment work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: 'Peer-to-peer lending, sometimes known as "P2P," enables investors to make cash loans to other people directly using P2P platforms like Lending Works. Investors benefit from capital and interest payments while also assisting others in achieving their objectives.',
            },
          },
          {
            "@type": "Question",
            name: "How to become a peer-to-peer lender?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Choose a P2P lending platform once you've decided what kind of peer-to-peer loan you want. Next, fill out an application on the website. A mild credit check will likely follow. You must study the loan conditions and interest rate if your application is accepted.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "Complete guide to Peer to Peer Lending Platforms with Blockchain Integration.";
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
            Guide to Peer to Peer Lending Platforms (P2P) | BlocTech Solutions
          </title>
          <meta
            name="description"
            content="
            Peer to peer (p2p) lending platform and blockchain integration. understand the benefits of peer to peer lending platform "
          />
          <meta
            name="title"
            content="Guide to Peer to Peer Lending Platforms (P2P) | BlocTech Solutions"
          />
          <meta charset="utf-8" />
          <meta
            name="keywords"
            content="Peer to peer lending platforms , p2p lending platforms , blockchain peer to peer lending"
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
                SEP 22th 2022
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
              Complete guide to Peer to Peer Lending Platforms with Blockchain
              Integration.
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
                An Introduction to peer to peer lending platforms:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Peer to peer lending platforms, commonly known as P2P lending, is
              the practice of making financial loans to private individuals or
              companies using Internet marketplaces that connect lenders and
              borrowers. Companies that offer peer to peer lending platform
              services frequently do so online in an effort to operate more
              cost-effectively than conventional financial institutions and
              offer their services at a lower cost. <br />
              Peer to peer lending platforms motivate supporters of a charity or
              non-profit organization to raise money on their own. It falls
              under the crowdfunding umbrella somewhat. Peer to peer lending
              platforms allows users to create many personal fundraising sites
              that they can each share with their own networks, instead of
              having a single primary crowdfunding website where everyone gives.
              <br />
              Peer to peer (P2P) lending platforms eliminates the middleman by
              allowing people to borrow money directly from other people.
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
                Peer to Peer Lending Blockchain:
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              With its ability to disrupt several sectors, blockchain has
              recently taken over the international financial markets. The
              blockchain has a good effect on many different industries, but the
              lending industry is also prepared to use it. <br />
              By enhancing confidence and transparency in the system, the
              Blockchain is ready to completely reimagine the peer to peer
              lending platform structure. Blockchain and smart contracts have
              already been used by businesses like SALT Lending, Lendoit, and
              Jibrel Network to build peer to peer lending platforms. <br />
              However, why is it necessary to use the blockchain for p2p
              lending? What potential weak spots may there be in the
              conventional lending process? <br />A loan or credit application
              might take a few weeks, and interest rates vary greatly throughout
              the world. In nations like Algeria, Argentina, Bangladesh, and the
              United States, for instance, the interest rates on loans are 8%,
              31.2%, 9.5%, and 4.8%, respectively. <br />
              To establish confidence in the traditional lending process,
              parties need intermediaries like loan officers, banks,
              underwriters, and loan processors. However, the hefty costs are a
              result of adding intermediaries and restrictions to the loan
              process.
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
                Benefits of p2p lending platforms:
              </Typography>
            </Box>{" "}
            <img
              src={blog1}
              alt=" Benefits of Peer to peer lending platforms"
              width={"100%"}
            />{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Peer to peer (P2P) lending platforms are gradually integrating
              blockchain technology to enable secure and rapid access to funds
              without requiring users to go through the more involved and
              expensive bank processes. Beyond that, this study investigates
              trust-enhancing procedures that highlight the necessity of using
              blockchain to support monitoring and bad loan recovery.
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
                  How peer-to-peer lending platforms may improve the
                  effectiveness of the loan process on the blockchain:
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
                    Cost reduction:
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  Blockchain technology might save expenses by enabling direct
                  communication between borrowers and lenders.
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
                    Time:
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  Using blockchain, the process might be streamlined by
                  incorporating rules into smart contracts.
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
                    The varying interest rate:
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  The fixed rate of interest might be automatically generated by
                  smart contracts depending on the borrower's characteristics.
                  Through a decentralized network, the blockchain may link
                  lenders and borrowers from all over the world. The
                  blockchain-based P2P lending platforms' procedures as a whole
                  may become reliable and frictionless.
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
                  How P2P Lending platforms on Blockchain may operate:
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
                  A profile is made by the lender:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                An informational profile might be made by a lender with the
                following details:
                <ul>
                  <li>Identifying details (name, address, and ID number)</li>
                  <li>Details about a bank account</li>
                  <li>
                    The lender's preferred kind of investment, For instance, a
                    lender could want to provide funding to borrowers who are
                    looking for a loan for commercial purposes.
                  </li>
                  <li>
                    different borrower eligibility requirements, or how to
                    calculate interest rates based on a borrower's
                    creditworthiness.
                  </li>
                  <li>
                    Lenders and borrowers can locate one another on the
                    marketplace where the profile is posted.
                  </li>
                </ul>
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
                  The lender receives loan applications:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The lender awaits the borrower's loan request when the account
                has been successfully created. Lenders set up interviews with
                borrowers as soon as they receive a request.
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
                  The borrower opens a new account:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Personal information such as names, addresses, and
                government-issued identification Collateral: digital currency,
                official papers, and a surety
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
                  The borrower submits a loan request:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Once an account has been properly created, a borrower can make a
                loan request to any lender in the world. Borrowers may use smart
                contracts to transmit loan requests to lenders that are keen on
                the kind of investment they are looking to make.
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
                  The borrower interviews the lender:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                A lender interviews the borrower after receiving the loan
                request and queries:
                <ul>
                  <li>Why do you want to borrow money?</li>
                  <li>What is the monthly amount you make?</li>
                  <li>What percentage do you repay?</li>
                  <li>How many times have you already applied for credit?</li>
                </ul>
                The answers to the aforementioned questions will determine
                whether a lender will accept or reject a loan application
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
                  The Smart Contract fixes the rate of interest:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                In the event that the lender approves the loan request, the
                smart contract determines the set interest rate for various
                borrower categories by evaluating their creditworthiness. Based
                on their repayment rates, the borrowers may be divided into
                three groups: high-risk, medium-risk, and low-risk borrowers.
                For a low-risk borrower with a high payback rate, for instance,
                lenders may establish a low-interest rate. The interest rate
                stays constant around the world while using the P2P Lending
                Blockchain Platform.
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
                  Conclusion
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                In short, without a central server, peer-to-peer (P2P) lending
                networks are made up of two or more computers that interact to
                communicate, share data, and offer lending services. The
                integration of P2P lending networks from the past with
                blockchain-based smart contracts is starting to advance
                decentralized finance (DeFi). By eliminating intermediaries, the
                resulting networks enable trustless transactions that save time
                and money. Peer-to-peer lending has developed into a sizable
                portion of the DeFi ecosystem, and it is expanding quickly.
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

export default Blog7;

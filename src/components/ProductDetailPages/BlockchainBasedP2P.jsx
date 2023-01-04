import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

import bgBox1 from "./assets/bgBox1.png";
import bgBox2 from "./assets/bgBox2.png";
import bgBox3 from "./assets/bgBox3.png";
import bgBox4 from "./assets/bgBox4.png";
import bgBox5 from "./assets/bgBox5.png";
import bgBox6 from "./assets/bgBox6.png";
import bgP2P from "./assets/bgP2P.png";
import p2pimg from "./assets/p2pimg.png";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BlockchainBasedP2P({ openN, setOpenN }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const matches = useMediaQuery("(max-width:870px)");
  const matches1 = useMediaQuery("(max-width: 500px");

  const cardsData = [
    {
      bg: ` linear-gradient(180deg, #F31783 0%, #F28E69 100%)`,
      title: "Delicate Network",
      content:
        "By providing information to participating borrowers and lenders, a blockchain-based P2P lending network promotes more confidence. When a new transaction occurs, the network as a whole is informed about it. All participants that provide complete transparency to all activities will reveal all previous and present transactions. Additionally, since the mechanism is managed by several parties, lenders and borrowers can interact directly at any point in the process, which lowers friction.",
    },
    {
      bg: `linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)`,
      title: "Realistic Information Exchange",
      content:
        "Peer review of transactions and public-key cryptography, which enables direct interaction, are two methods used to ensure information integrity. Each user may therefore verify the veracity of the material being broadcast using predetermined laws.",
    },
    {
      bg: `linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)`,
      title: "Immovable Data",
      content:
        "Immutability of data is the last crucial element in developing trust. Because of the way it is created, nobody can change transactions once they are joined to a blockchain-based database. A proof-of-work agreement method, which involves a computational issue that other network users must solve, is used to add information to a block.",
    },
    {
      bg: `linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)`,
      title: "Mechanisms of Privacy",
      content:
        "Depending on the form of blockchain, pseudonyms will mask the identities of the users. It, with the use of public-key cryptography to protect interactions, promotes a degree of privacy for P2P loan platform users. Find out more about the various forms of blockchain in the “Blockchain Forms” section below.",
    },
    {
      bg: `linear-gradient(180deg, #2DA7F2 28.24%, #00E4E7 100%)`,
      title: "Integrity",
      content:
        "By transmitting and preserving information about network transactions, promoting automated processes that reduce the need for manual involvement and, consequently, the possibility of individual errors, and other factors, the system's authenticity is created.",
    },
    {
      bg: `linear-gradient(180deg, #67FE1A 0%, #139950 100%)`,
      title: "Flexibility",
      content:
        "Blockchain technology enables peers to contribute to the development of the database's supporting code, resulting in the construction of an open and scalable framework where participants may develop and share their own code and functionality.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/p2p-lending-platform-development/",
      },
      headline: "P2P Lending Platform Development",
      description:
        "BlocTech Solutions helps to connect lenders and borrowers to tap into the world of the billion-dollar market with our peer-to-peer lending and borrowing solutions backed with blockchain.",
      image: "",
      author: {
        "@type": "",
        name: "",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };

  return (
    <div>
      <Helmet>
        <title>P2P Lending Platform Development | BlocTech Solutions</title>
        <meta
          name="description"
          content="p2p lending platforms structure designing, development, and implementation by BlocTech experienced p2p lending software developers. check out our guide and start the process."
        />
        <meta
          name="title"
          content="P2P Lending Platform Development | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="p2p lending platform development, p2p lending software development"
        />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box pt={{ sm: "95px", xs: "79px" }}>
        <Box
          sx={{
            backgroundImage: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
            // backgroundPosition: { sm: "center", xs: "left" },
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <Box>
              <Grid
                container
                spacing={2}
                py={5}
                display="flex"
                alignItems="center"
              >
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                  <Box
                    textAlign={{ xs: "center", md: "left" }}
                  // pt={5}
                  // pb={matches ? 10 : 24}
                  >
                    <Box
                      component="h1"
                      // pt={{ xs: 0, md: 10 }}
                      fontSize={{ xs: "25px", sm: "44px" }}
                      fontWeight={700}
                      letterSpacing="0.2px"
                      lineHeight={{ xs: "auto", sm: "56px" }}
                      color="#fff"
                      sx={{
                        background:
                          "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                      }}
                    >
                      P2P Lending Platform Development
                    </Box>

                    <Box
                      component="p"
                      m="auto"
                      my={2}
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="#fff"
                      textAlign="justify"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      width={{ xs: "90%", md: "100%" }}
                    >
                      BlocTech Solutions helps to connect lenders and borrowers
                      to tap into the world of the billion-dollar market with
                      our peer-to-peer lending and borrowing solutions backed
                      with blockchain.
                    </Box>
                    <Box mt={3}>
                      <Button
                        onClick={() => setOpenN(true)}
                        sx={{
                          width: "220px",
                          height: "50px",
                          background:
                            "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                          border: "1px solid #3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "none",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          "&:hover": {
                            backgroundColor: "white",

                            border: "1px solid #3B3F6D",
                          },
                        }}
                      >
                        Get Free Assessment
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                  <Box
                    display="flex"
                    justifyContent={{ md: "flex-end", xs: "center" }}
                  >
                    {/* <img
                      src={p2pimg}
                      width={matches1 ? "100%" : "80%"}
                      alt="P2P Lending Platform"
                    /> */}

                    <LazyLoadImage
                      src={p2pimg}
                      width={matches1 ? "100%" : "80%"}
                      alt="P2P Lending Platform" />

                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box py={10} textAlign="center">
            {/* <Typography
              fontSize={{ xs: "13px", sm: "16px" }}
              letterSpacing="1.3px"
              color="#fff"
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              In this post, we will take a close look at the challenges that
              conventional p2p lending platforms deal, and how <br /> blockchain
              technology app development can help to solve some of these
              challenges.
            </Typography> */}

            <Typography
              variant="h1"
              m="auto"
              my={5}
              sx={{
                fontSize: { xs: "25px", md: "44px" },
                fontWeight: "700",
                lineHeight: { xs: "auto", sm: "56px" },
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                width: "fit-content",
              }}
            >
              Blockchain-Based P2P Lending
            </Typography>

            <Typography
              variant="p"
              sx={{
                m: "auto",
                fontSize: "16px",
                lineHeight: "21px",
                letterSpacing: "1.3px",
                color: "#FFFFFF",
                width: { xs: "95%", md: "60%" },
              }}
            >
              Peer-to-peer lending links investors/lenders with borrowers
              through an online platform that acts as an authentic third party.
              The stakeholders that get involved in the operation are:
            </Typography>

            <Box mt={7}>
              <Grid container spacing={4}>
                {[
                  "Private individuals or organizations which provide funding",
                  "An online p2p transaction management tool",
                  "A company or private person seeking funding",
                ].map((content, i) => {
                  return (
                    <Grid item xs={12} sm={4}>
                      <Box
                        bgcolor="#41015F"
                        height="100%"
                        px={3}
                        py={4}
                        sx={{
                          background: `#41015F`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontSize={{ xs: "17px", md: "23px" }}
                          fontWeight="700"
                          lineHeight="34px"
                          color="#fff"
                        >
                          {content}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            <Box m="auto" mt={7} color="#fff" width={{ xs: "95%", md: "85%" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "21px",
                  letterSpacing: "1.3px",
                  textAlign: "justify",
                }}
              >
                However, the need for intermediaries and regulation in the
                conventional P2P lending model means transactions on traditional
                peer-to-peer sites are subject to additional cost and time
                restrictions, as well as security concerns.
              </Typography>
              <Typography
                variant="body1"
                mt={2}
                sx={{
                  fontSize: "16px",
                  lineHeight: "21px",
                  letterSpacing: "1.3px",
                  textAlign: "justify",
                }}
              >
                Blockchain is at the core of theBlocTech Solutions revolution
                and can fundamentally transform a wide variety of sectors, from
                financial services and lending to P2P. In peer-to-peer lending,
                the main benefit of using blockchain technology is that it can
                eliminate intermediaries from the lending process. It has a wide
                range of advantages which we will discuss in the next segment.
                First, we will include a brief introduction to blockchain
                technology and how blockchain’s core features are also crucial
                in lending to P2P.
              </Typography>
            </Box>
          </Box>

          <Box pb={10} textAlign="center">
            <Typography
              variant="h1"
              m="auto"
              sx={{
                fontSize: { xs: "25px", md: "44px" },
                fontWeight: "700",
                lineHeight: { xs: "auto", sm: "56px" },
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                width: "fit-content",
              }}
            >
              Key Features of P2P Blockchain-Based P2P Lending
            </Typography>
          </Box>

          <Box pb={10}>
            <Grid container spacing={1}>
              {cardsData.map(({ bg, title, content }, i) => {
                return (
                  <Grid item xs={12} sm="4">
                    <Box
                      height="100%"
                      p={2}
                      sx={{
                        backgroundImage: bg,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "17px", md: "23px" }}
                        fontWeight="700"
                        lineHeight="34px"
                        variant="h4"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        mt={2}
                        fontSize="16px"
                        lineHeight="22px"
                      >
                        {content}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <Box mt={4} textAlign="center">
              <Button
                onClick={() => setOpenN(true)}
                sx={{
                  width: "220px",
                  height: "50px",
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  border: "1px solid #3B3F6D",
                  borderRadius: "0px",
                  fontSize: matches ? "12px" : "14px",
                  textTransform: "none",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  "&:hover": {
                    backgroundColor: "white",

                    border: "1px solid #3B3F6D",
                  },
                }}
              >
                Book Free Assessment Now
              </Button>
            </Box>
          </Box>

          {/* <Box>
            <Typography
              m="auto"
              sx={{
                fontSize: { xs: "25px", md: "44px" },
                fontWeight: "700",
                lineHeight: { xs: "auto", sm: "56px" },
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                textAlign: "center",
                width: "fit-content",
              }}
            >
              Smart Contracts in P2P Lending
            </Typography>

            <Box
              m="auto"
              mt={4}
              textAlign="center"
              color="#fff"
              width={{ xs: "95%", md: "79%" }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "21px",
                  letterSpacing: "1.3px",
                }}
              >
                Another significant aspect of using blockchain in peer-to-peer
                lending, though, is the ability to build smart contract
                solutions. They ensure that transactions negotiated by the
                parties (lenders/borrowers) get autonomously executed according
                to rules specified in the smart contract. In other words, a
                smart contract is a file based on the parameters defined by the
                parties, with a self-execution code. We call blockchains that
                support smart contract functionality blockchain 2.0.
              </Typography>
              <Typography
                mt={2}
                sx={{
                  fontSize: "16px",
                  lineHeight: "21px",
                  letterSpacing: "1.3px",
                }}
              >
                A smart contract in P2P lending will include the initial amount
                of the loan and the terms of repayment, including penalties if
                payments are late or skipped. For example, a company makes a
                loan of $100,000 with a repayment period of 24 months at $5,000.
                A smart contract solution will automatically execute the payment
                requests, obtain the payments, and change the due sum without
                any intermediary having to be involved. Additionally, it
                incorporates automated compensation features in the smart
                contract, such as deducting percentages for early loan
                repayment, changing credit scores, or converting to a higher
                yield currency.
              </Typography>
            </Box>
          </Box> */}

          <Box
            my={14}
            py={6}
            textAlign="center"
            bgcolor="#411F78"
            borderRadius="5px"
          >
            <Container>
              <Typography
                variant="h2"
                m="auto"
                sx={{
                  fontSize: { xs: "25px", md: "44px" },
                  fontWeight: "700",
                  lineHeight: { xs: "auto", sm: "56px" },
                  color: "#fff",
                  width: "fit-content",
                }}
              >
                Smart Contracts in P2P Lending
              </Typography>

              <Typography
                variant="body1"
                m="auto"
                mt={3}
                sx={{
                  fontSize: "16px",
                  lineHeight: "21px",
                  letterSpacing: "1.3px",
                  color: "#fff",
                  width: { xs: "95%", md: "78%" },
                  textAlign: "justify",
                }}
              >
                A smart contract in P2P lending will include the initial amount
                of the loan and the terms of repayment, including penalties if
                payments are late or skipped. For example, a company makes a
                loan of $100,000 with a repayment period of 24 months at $5,000.
                A smart contract solution will automatically execute the payment
                requests, obtain the payments, and change the due sum without
                any intermediary having to be involved. Additionally, it
                incorporates automated compensation features in the smart
                contract, such as deducting percentages for early loan
                repayment, changing credit scores, or converting to a higher
                yield currency.
              </Typography>
              <Box mt={5} mb={2}>
                <Button
                  onClick={() => setOpenN(true)}
                  sx={{
                    width: "178px",
                    height: "42px",
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
                    fontSize: matches ? "12px" : "14px",
                    fontWeight: 700,
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "6px",
                    letterSpacing: "0.3px",
                    "&:hover": {
                      backgroundColor:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      color: "#fff",
                    },
                  }}
                >
                  Talk to our Experts
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default BlockchainBasedP2P;

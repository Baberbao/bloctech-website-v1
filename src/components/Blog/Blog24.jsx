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

import imgone from "./assets/blog24one.png";
import imgtwo from "./assets/blog24two.png";
import imgthree from "./assets/blog24three.png";
import imgfour from "./assets/blog24four.png";

import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "Q.1 What was the first application of blockchain?",
    details:
      "The world's first cryptocurrency, Bitcoin, was created by the enigmatic and reclusive Satoshi Nakamoto in January 2009 and is merely the first use of blockchain technology.",
  },
  {
    summary: "Q.2 How is blockchain used in society?",
    details:
      "Blockchain could be able to repair such connections between centralized systems and the users they serve thanks to its monitored, audited, and publicly shared information. ",
  },
  {
    summary: "Q.3 Can blockchain replace the Internet?",
    details:
      "By making all transactions transparent and data verifiable, blockchain promotes confidence in data and its source. As there is no one owner of the internet's communications backbone, blockchain is similar to the IP transportation infrastructure of the internet.",
  },
];

const Blog24 = () => {
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
          "https://www.bloctechsolutions.com/blog/use-cases-of-blockchain-technology/",
      },
      headline:
        "Rising Number of Use Cases of Blockchain Technology in Business",
      description:
        "when we talk about the use cases of blockchain technology in business there are numbers of applications where blockchain can be used to secure the DATA",
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
            name: "What was the first application of blockchain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The world's first cryptocurrency, Bitcoin, was created by the enigmatic and reclusive Satoshi Nakamoto in January 2009 and is merely the first use of blockchain technology.",
            },
          },
          {
            "@type": "Question",
            name: "How is blockchain used in society?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Blockchain could be able to repair such connections between centralized systems and the users they serve thanks to its monitored, audited, and publicly shared information.",
            },
          },
          {
            "@type": "Question",
            name: "Can blockchain replace the Internet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "By making all transactions transparent and data verifiable, blockchain promotes confidence in data and its source. As there is no one owner of the internet's communications backbone, blockchain is similar to the IP transportation infrastructure of the internet.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "Rising Number of Use Cases of Blockchain Technology in Business";
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
        <title>Use Cases of Blockchain Technology</title>
        <meta
          name="description"
          content="
          when we talk about the use cases of blockchain technology in business there are numbers of applications where blockchain can be used to secure the DATA
        
          "
        />
        <meta name="title" content="Use Cases of Blockchain Technology" />
        <meta charset="utf-8" />
        <meta name="keywords" content="Use Cases of Blockchain Technology" />

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
          src={imgone}
          alt=" blockchain in real estate industry"
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
              OCT 18 2022
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
            Rising Number of Use Cases of Blockchain Technology in Business
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                At its core, blockchain technology is easy to comprehend. The
                technology basically consists of a shared database with entries
                that must be encrypted and verified using peer-to-peer networks.
                <br /> Imagine it as a shared Google Document that is strongly
                encrypted, authenticated, and where each entry in the sheet
                depends on a logical relationship to all of its predecessors and
                is accepted by everyone on the network.
                <br /> However,{" "}
                <Link
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  to="/blog/what-Is-blockchain-technology-how-Is-It-Important-for-data-security/"
                >
                  blockchain technology
                </Link>
                is capable of far more than merely powering the Bitcoin
                currency. We've included a few of its cutting-edge uses in the
                business, government, and other sectors of the economy below.
              </Typography>
            </Box>
          </Box>

          <Box component="h2">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="30px"
              fontWeight="700"
            >
              Banking and Finance Use Cases for Blockchain
            </Typography>
          </Box>
          <Box
            component="img"
            src={imgtwo}
            alt=" blockchain in real estate industry"
            width="100%"
          />
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              International Payments
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain offers a method for quickly and securely compiling a
              tamper-proof record of sensitive activities. This makes it ideal
              for money transfers and international payments.
              <br /> For instance, Banco Santander introduced the first
              blockchain-based money transfer service in the world in April
              2018. The "Santander One Pay FX" service enables clients to send
              money internationally the same day or the day after using Ripple's
              xCurrent.
              <br />
              Santander has decreased the number of intermediaries traditionally
              needed in these transactions by automating the whole process on
              the blockchain, which has improved the process efficiency.
              <br />
              As a significant commercial bank, Santander has a big number of
              retail customers who would profit from faster and less expensive
              payments, especially for international transactions.
              <br />
              By eliminating the need for banks to manually process
              transactions, blockchain technology may be utilized to lower the
              cost of these payments.
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
                fontSize="25px"
                fontWeight="700"
              >
                Capital Markets
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Systems built on the blockchain might potentially enhance capital
              markets. Benefits that blockchain technologies provide capital
              markets include some of the following, according to a McKinsey
              report:
              <ul>
                <li> the quickening of clearance and settlement</li>
                <li>unifying audit trail</li>
                <li>operational upgrades</li>
              </ul>
              The blockchain-based startup Axoni was established in 2013 with
              the goal of enhancing the capital market. The creation of a
              distributed ledger network to manage stock swap transactions was
              most recently announced by Axoni. This network will allow both
              sides of an equity swap to remain synced throughout the swap's
              lifespan and communicate changes to one another in real-time
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
                fontSize="25px"
                fontWeight="700"
              >
                Trade Finance
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Due to the lengthy procedures that frequently create business
              interruptions and make managing liquidity challenging, traditional
              trade finance techniques have been a big source of pain for
              companies. When exchanging information, such as the nation of
              origin and product specifics, cross-border trading entails a lot
              of variables, and transactions require a lot of paperwork.
              <br />
              Blockchain has the potential to streamline cross-border trade
              finance transactions.
              <Link
                to="/blog/what-is-defi-a-beginners-guide-to-decentralized-finance-system/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                Defi
              </Link>
              is the main practice that works on Blockchain. It makes it
              possible for businesses to communicate more freely across national
              and geographic barriers.
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
                fontSize="25px"
                fontWeight="700"
              >
                Regulatory Compliance and Audit
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain's incredibly secure features make it fairly handy for
              accounting and auditing since they greatly reduce the likelihood
              of human error and guarantee the accuracy of the data.
              Additionally, once the account records are secured using
              blockchain technology, nobody, not even the record owners, is able
              to change them. The trade-off is that blockchain technology may
              eventually do away with the need for auditors and kill employment.
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
                fontSize="25px"
                fontWeight="700"
              >
                Money Laundering Protection
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Again, the blockchain's inherent use of encryption makes it
              incredibly beneficial in the fight against money laundering. The
              technology that underpins record-keeping enables "Know Your
              Customer (KYC)," the procedure by which a company recognizes and
              confirms the identity of its customers.
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
                fontSize="25px"
                fontWeight="700"
              >
                Insurance
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Smart contracts are maybe the biggest blockchain used for
              insurance. Customers and insurers may manage claims in a clear and
              secure manner thanks to these contracts. Since the blockchain
              would reject numerous claims on the same accident, all contracts
              and claims could be stored there and verified by the network. This
              would remove any claims that were not genuine.
              <br />
              For instance, openIDL, a network developed by the American
              Association of Insurance Services and IBM on the IBM Blockchain
              Platform, automates insurance regulatory reporting and streamlines
              compliance procedures
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
                fontSize="25px"
                fontWeight="700"
              >
                Peer-to-Peer Transactions
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Although handy,
              <Link
                to="/blog/advantages-and-disadvantages-of-peer-to-peer-lending-P2P/"
                style={{
                  fontWeight: "bold",
                  marginLeft: "5px",
                  marginRight: "5px",
                  color: "white",
                }}
              >
                P2P payment platforms
              </Link>
              like Venmo have some limitations. Certain services limit
              transactions depending on location. Others demand payment in
              exchange for use. Additionally, a lot of them are hacker-prone,
              which is unattractive to clients who are disclosing their
              sensitive financial information. With all of the aforementioned
              advantages, blockchain technology might remove these obstacles.
            </Typography>
          </Box>

          {/* //2nd section */}

          <Box component="h2">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="30px"
              fontWeight="700"
            >
              Blockchain use cases & applications in Business
            </Typography>
          </Box>
          <Box
            component="img"
            src={imgthree}
            alt=" blockchain in real estate industry"
            width="100%"
          />
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Supply Chain Management
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain is ideally suited for activities like real-time
              tracking of items as they travel and change hands across the
              supply chain because of its immutable ledger. The use of a
              blockchain expands the possibilities available to businesses that
              deliver these items. Events related to a supply chain can be
              queued up using entries on a blockchain, such as assigning
              recently received items to various shipping containers. Blockchain
              offers a fresh and dynamic way to arrange monitoring data and
              utilize it.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Healthcare
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              General information like age and gender, as well as maybe more
              fundamental medical history information like vaccination records
              or vital signs, are examples of health data that is appropriate
              for blockchain. None of this data by itself could be used to
              individually identify any one patient, which makes it possible to
              place it on a public blockchain that many users may access without
              having their privacy violated.
              <br />
              Blockchain can link these devices with a person's health data as
              specialized connected medical devices grow more prevalent and more
              closely associated with it. Devices will be able to add the
              generated data to individual medical records and keep it on a
              healthcare blockchain. The siloing of the data that linked medical
              devices produce is a major problem right now, but blockchain
              technology might help.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Real Estate
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Every five to seven years, the typical homeowner will sell their
              house, and over their lifetime, the typical person will move close
              to 12 times. Blockchain might undoubtedly be useful in the real
              estate industry given the volume of movement there. By immediately
              confirming finances, it would speed up house sales. Thanks to
              encryption, it would also decrease fraud and provide transparency
              throughout the whole selling and buying process.
              <br />
              Get detailed info
              <Link
                to="/blog/blockchain-in-real-estate-industry-reshape-the-transaction-process/"
                style={{
                  fontWeight: "bold",
                  marginLeft: "5px",
                  marginRight: "5px",
                  color: "white",
                }}
              >
                Working of Blockchain in Real Estate Industry
              </Link>
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Media
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain technology is already being used by media firms to
              combat fraud, cut expenses, and even safeguard the Intellectual
              Property (IP) rights of material, such as music recordings.
              MarketWatch projects that by 2024, the worldwide market for
              blockchain in media and entertainment would be worth $1.54
              billion.
              <br />
              Eluvio, Inc. is one platform that has captured attention for using
              blockchain for media. Eluvio Content Fabric, which was formally
              introduced in 2019, leverages blockchain technology to let content
              creators manage and distribute premium videos without the aid of
              content delivery networks to customers and business partners.
              Additionally, media behemoth MGM Studios has chosen the platform
              for "global streaming to online, mobile, and TV everywhere
              audiences of "certain IP."
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Energy
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              According to PWC, blockchain technology has the potential to
              underpin systems for metering, invoicing, and clearing in addition
              to carrying out energy supply transactions. Ownership
              documentation, asset management, origin assurances, emission
              permits, and renewable energy certifications are some more
              possible uses.
            </Typography>
          </Box>
          {/* //3rd section  */}

          <Box component="h2">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="30px"
              fontWeight="700"
            >
              Blockchain use cases & Applications in Government
            </Typography>
          </Box>
          <Box
            component="img"
            src={imgfour}
            alt=" blockchain in real estate industry"
            width="100%"
          />
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Record Management
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Governments at the federal, state and municipal levels are in
              charge of keeping track of personal information on citizens, such
              as dates of birth and death, marital status, and property
              transfers. However, handling this data may be challenging, and
              some of these records continue to be kept on paper. Additionally,
              it's occasionally required for residents to physically visit their
              local government offices to request changes, which is
              time-consuming, pointless, and annoying. Blockchain technology has
              the potential to streamline recordkeeping processes and enhance
              data security.
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Identity Management
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              People would only need to disclose the bare minimum (such as their
              date of birth) to establish their identities, according to
              proponents of blockchain technology for identity management.
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Voting
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain technology has the potential to increase security while
              also simplifying the voting process. Blockchain technology would
              be impenetrable to hackers since even if they had access to the
              terminal, they couldn't modify other nodes. Each vote would be
              associated with a single ID, and since it would be difficult to
              produce a false ID, election officials could count ballots more
              quickly and accurately.
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Taxes
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              With enough data saved on the blockchain, the laborious,
              prone-to-human-error process of filing taxes might be made
              considerably more effective.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Non-Profit Agencies
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain technology offers the capacity to demonstrate to donors
              that NPOs are actually using their donations as intended, which
              might help charity tackle the anti-trust issues they are
              increasingly experiencing. Additionally, blockchain technology may
              enable such NPOs to manage their resources more effectively,
              transfer those assets more effectively, and improve their tracking
              capabilities.
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Compliance/Regulatory Oversight
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Although recordkeeping is the primary source of regulatory
              supervision, the penalties of failing to retain records are
              unquestionably far greater. As a result, compliance is a need for
              businesses. Blockchain can reduce time delays and enable the
              quicker detection of red flags and discrepancies by making record
              changes available to authorities and enterprises in real-time.
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="25px"
              fontWeight="700"
            >
              Closing Remarks
            </Typography>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain applications originating from Hyperledger projects are
              anticipated to be the next growth engine for businesses in the
              years to come, after the widespread use of AI, ML, and big data in
              recent years.
              <br />
              Therefore, in the future, the demand for people with an extensive
              domain understanding of blockchain technology will increase.
            </Typography>
          </Box>

          <Box component="h2">
            <Typography
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              fontSize="30px"
              fontWeight="700"
            >
              People Also Ask For
            </Typography>
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

export default Blog24;

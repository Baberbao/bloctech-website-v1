import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import blog1 from "./assets/blog1img.png";
import blog2 from "./assets/blog2.png";
import { Helmet } from "react-helmet-async";
import bg from "./assets/bgf.png";
import author from "./assets/auth1.png";
import BlogSlider from "./BlogSlider";

const structureData = () => {
  let data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.bloctechsolutions.com/blog/what-Is-blockchain-technology-how-Is-It-Important-for-data-security/",
    },
    headline:
      "What Is Blockchain Technology? How Is It Important for Data Security?",
    description:
      "A distributed database or ledger that is shared by the nodes of a computer network is what blockchain technology is. For storing data in digital form, a blockchain acts as an electronic database.",
    image:
      "https://www.bloctechsolutions.com/static/media/blog1.14cf954505e358a0214c.png",
    author: {
      "@type": "",
      name: "Shehryar Ahmed",
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
          name: "What are the drawbacks of blockchain technology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three significant additional hazards exist for the use of business blockchain and smart contracts: 1- outdated software 2- software faults 3- operational issues.",
          },
        },
        {
          "@type": "Question",
          name: "Why is blockchain the future of Data Transactions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It develops a reliable, uncensorable, and accessible global storehouse of data and information. Which will eventually help in Data credibility.",
          },
        },
        {
          "@type": "Question",
          name: "Can blockchain be hacked?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blockchain itself cannot be hacked or compromised, but there are some technical ways to breach the chain of blocks. That is unknown to common hackers.",
          },
        },
      ],
    },
    datePublished: "",
  };
  return JSON.stringify(data);
};

const AccordionData = [
  {
    summary: "Q: What are the drawbacks of blockchain technology?",
    details: (
      <>
        Three significant additional hazards exist for the use of business
        blockchain and smart contracts:
        <List>
          <ListItem>1-outdated software.</ListItem>
          <ListItem>2-software faults.</ListItem>
          <ListItem>3-operational issues</ListItem>
        </List>{" "}
      </>
    ),
  },
  {
    summary: "Q: Why is blockchain the future of Data Transactions?",
    details:
      "It develops a reliable, uncensorable, and accessible global storehouse of data and information. Which will eventually help in Data credibility.",
  },
  {
    summary: "Q: Can blockchain be hacked?",
    details:
      "Blockchain itself cannot be hacked or compromised, but there are some technical ways to breach the chain of blocks. That is unknown to common hackers.",
  },
];
function NewBlogDetail() {
  const [expanded, setExpanded] = React.useState(false);
  // const check = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title =
    "What Is Blockchain Technology? How Is It Important for DataSecurity?";
  return (
    <Box
      pb={10}
      pt={20}
      px={{ xs: 1, md: 7 }}
      sx={{
        // backgroundImage: `url(${blogDetailBG})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#120319",
      }}
    >
      <Helmet>
        <title>
          What Is Blockchain Technology? | Its Importance for Data Security
        </title>
        <meta
          name="description"
          content="
          blockchain consists of nodes of computer network. it makes data secure and traceable which is really good for every organization and business to operate."
        />
        <meta
          name="title"
          content="What Is Blockchain Technology? | Its Importance for Data Security"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="blockchain , blockchain technology , benefits of blockchain technology"
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
          src={blog1}
          alt="Blockchain Technology and its working in Data Security"
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
              Shehryar Ahmed
            </Typography>
            <Typography
              color="white"
              fontSize="12px"
              fontStyle="italic"
              fontWeight="bold"
            >
              {" "}
              SEP 14th 2022
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
            What Is Blockchain Technology? How Is It Important for Data
            Security?
          </Box>

          {/* <Box
            my={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="#fff"
          >
            <Typography
              variant="body1"  textAlign="justify"
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                width: "fit-content",
              }}
            >
              Published Jun 20, 2022
            </Typography>

            <Typography
              variant="body1"  textAlign="justify"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                width: "fit-content",
              }}
            >
              <img src={time} alt="" style={{ marginRight: "5px" }} />5 min
            </Typography>
          </Box> */}
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
                What is blockchain technology?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              A distributed database or ledger that is shared by the nodes of a
              computer network is what blockchain technology is. For storing
              data in digital form, a blockchain acts as an electronic database.
              The most applicable use of blockchain technology is in
              cryptocurrency systems and crypto wallet development . A
              blockchain innovates by promoting confidence without the need for
              a reliable third party by guaranteeing the security and
              correctness of the data.
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
                Why is blockchain technology important?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              Information is essential to business. It’s ideal if it's received
              promptly and is correct. This information can be sent instantly,
              shared, and in total transparency thanks to blockchain technology,
              which stores data on an immutable ledger that only members of a
              permissioned network may access. Among other things, Blockchain
              technology provides security, credibility, and transparency and
              makes data trackable throughout the network. Furthermore, since
              everyone has access to the same version of the truth, you can
              observe every facet of a transaction from start to finish,{" "}
              decentralized finance is used in this process, which will
              eventually boost your confidence and trust in it. That is the main
              reason why companies that provide{" "}
              <a
                style={{ color: "white" }}
                href="https://www.bloctechsolutions.com/blockchain-development-services/"
              >
                <strong> blockchain services</strong>
              </a>{" "}
              are increasing.
            </Typography>
          </Box>
          {/* <Container maxWidth="md"> */}
          <Box my={2}>
            <img
              src={blog2}
              width="100%"
              alt="How does blockchain technology work"
            />
          </Box>
          {/* </Container> */}
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
                How does blockchain technology work?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              <ol>
                <li>
                  At the start, a piece of information is requested or placed
                  throughout the network. In the blockchain, this process is
                  referred to as a transaction request.
                </li>
                <li>
                  A new Block that represents the transaction is created among
                  the existing chain of blocks.
                </li>
                <li>
                  Every Node gets information about newly created blocks and
                  validates their integrity through the history of existing
                  blocks in the chain.
                </li>
                <li>
                  When most of the nodes confirm the signature and history of
                  that Block. The ledger is updated with a new block in the
                  blockchain network and completes the transaction.
                </li>
              </ol>
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
                What are the major benefits of blockchain technology?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              Blockchain improves data sharing across a company network's trust,
              security, transparency, and traceability while also delivering
              cost savings through new efficiencies. Business applications of
              blockchain . Here are some benefits of blockchain technology.
              <ul>
                <li>Augmented security</li>
                <li>Greater Transparency</li>
                <li>Instant traceability</li>
                <li> Decentralized structure</li>
                <li>Automation</li>
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
                Augmented security
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              Your data is sensitive and important, and blockchain technology
              has the potential to fundamentally alter how people perceive your
              important information. Blockchain reduces fraud and unauthorized
              activity by creating a record that cannot be changed and is
              encrypted end-to-end. By employing permissions to restrict access
              and anonymize personal data, privacy issues can also be solved on
              the blockchain. In order to prevent hackers from accessing data,
              information is kept across a network of computers rather than on a
              single server.
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
                Greater Transparency
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              Every business would have to manage a distinct database in the
              absence of blockchain. A distributed ledger makes use of a
              distributed ledger to make sure that all transactions and data are
              recorded consistently. Since all authorized network users may view
              the same information at once, complete transparency is guaranteed.
              Every transaction is an immutable record with a time and date
              stamp. This virtually eliminates the potential for fraud by
              allowing members access to the complete transaction history
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
                Instant traceability
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              Blockchain creates an audit trail that details the beginnings of
              an asset at each point in its journey. This helps to give proof in
              businesses where customers are worried, concerning concerns
              regarding a product's relationship to the environment or human
              rights, or in fields where fraud and counterfeiting are common.
              Blockchain makes it possible to directly communicate provenance
              information to customers. Data on traceability can also reveal
              flaws in any supply chain, as goods may be stored on a loading
              dock while waiting to be transported.
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
                Decentralized structure
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              According to Daniel Field, head of the blockchain at UST, a
              leading global provider of digital technology and services,
              blockchain really displays its usefulness when there isn't a
              central player that facilitates trust. Blockchain thus permits
              data sharing across an ecosystem of enterprises where no single
              entity is solely in charge, in addition to facilitating trust when
              players lack trust since they are unfamiliar with one another. A
              good example is the supply chain: However, no one is in charge of
              supporting all that information exchange. Various businesses, from
              suppliers and transportation firms to producers, distributors, and
              retailers, desire or require information from others in that
              chain. That problem is resolved by the decentralized structure of
              the blockchain. Here you can read more about Decentralized
              Autonomous Organizations .
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
                Automation
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              You may increase your productivity and speed up the process even
              further by automating transactions with "smart contracts." The
              next step of a transaction or process is automatically started
              when pre-specified conditions are met. Smart contracts require
              less human involvement and rely less on third parties to verify
              that a contract's terms have been followed. For instance, if the
              client has provided the necessary proof while filing an insurance
              claim, the claim may be instantly resolved and reimbursed.
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
                Conclusion
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign="justify"
              fontSize="18px"
            >
              In short, no one owns the network, but being part of the network
              means everyone has shared authority. Blockchain technology
              provides decentralization, removes intermediaries, optimizes
              transactions, and augments security, which eventually leads to
              cost-effectiveness. Blockchain technology also allows quick and
              easy transactions for those that desire them. In actuality, it
              simply requires a few minutes, but other transaction methods may
              require many days to complete.
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
}

export default NewBlogDetail;

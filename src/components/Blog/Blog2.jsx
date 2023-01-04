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
import blog1 from "./assets/blogtwo1.png";
import blog2 from "./assets/blogtwo2.png";
import blog3 from "./assets/blogtwo3.png";
import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "Q.1 Does bitcoin have smart contracts?",
    details:
      "Based on intricate computer logic, they enable self-enforcing payments between users. Sadly, Bitcoin, the biggest and by far most popular cryptocurrency, does not enable sophisticated smart contracts.",
  },
  {
    summary: "Q.2 Can smart contracts be hacked?",
    details:
      "Approximately 34,200 of the current Ethereum smart contracts, valued at $4.4 million in ether, are susceptible to hacking because of poor, bug-filled coding.",
  },
  {
    summary: "Q.3 Are smart contracts the future?",
    details:
      "As more people understand and have faith in blockchain technology, smart contracts will very soon become much more commonplace.",
  },
];

const Blog2 = () => {
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
      headline: "Understanding the working and benefits of Smart Contracts",
      description:
        "Blockchain-based programmes called 'smart contracts' that execute when certain criteria are met. Usually, they automate the execution of a contract so that all parties can be certain of the outcome right away, without the need for an intermediary or a delay.",
      image: "",
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
            name: "Does bitcoin have smart contracts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Based on intricate computer logic, they enable self-enforcing payments between users. Sadly, Bitcoin, the biggest and by far most popular cryptocurrency, does not enable sophisticated smart contracts.",
            },
          },
          {
            "@type": "Question",
            name: "Can smart contracts be hacked?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Approximately 34,200 of the current Ethereum smart contracts, valued at $4.4 million in ether, are susceptible to hacking because of poor, bug-filled coding.",
            },
          },
          {
            "@type": "Question",
            name: "Are smart contracts the future?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "As more people understand and have faith in blockchain technology, smart contracts will very soon become much more commonplace.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "Understanding the working and benefits of Smart Contracts";
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
        <title>Understanding smart contract working and its benefits</title>
        <meta
          name="description"
          content="
          smart contract ensures that all parties will be satisfied. Speed, efficiency, security and accuracy are considered the major benefits of smart contracts"
        />
        <meta
          name="title"
          content="Understanding smart contract working and its benefits"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Smart contracts, smart contract benefits, blockchain smart contract"
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
          alt="Understanding Smart Contract"
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
            Understanding the working and benefits of Smart Contracts
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
                What exactly are blockchain smart contracts?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain-based programmes called "smart contracts" that execute
              when certain criteria are met. Usually, they automate the
              execution of a contract so that all parties can be certain of the
              outcome right away, without the need for an intermediary or a
              delay. They can also automate a workflow, starting the subsequent
              step when certain criteria are satisfied. Developing companies
              like{" "}
              <Link
                style={{ fontWeight: "bold", color: "white" }}
                to="/blog/what-exactly-is-a-dao-Its-working-and-benefits/"
              >
                decentralized autonomous organizations
              </Link>{" "}
              widely use smart contracts.
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
                How Smart contracts work?
              </Typography>
            </Box>
            {/* <Container maxWidth="lg"> */}
            <Box my={2}>
              <img src={blog2} width="100%" alt="How do smart contracts work" />
            </Box>
            {/* </Container> */}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Simple "if/when...then" phrases typed into code and placed on a
              blockchain are how smart contracts operate. When certain
              circumstances have been satisfied and validated, the activities
              are carried out via a network of computers. These procedures could
              involve paying out money to the right people, registering a car,
              sending out notices, or writing a ticket. After the transaction is
              finished, the blockchain is updated. This indicates that the
              transaction cannot be altered and that only parties to whom
              permission has been granted can view the outcome. Highlight every
              potential exception, and specify a procedure for resolving
              conflicts.
              <br />
              Any number of conditions may be included in a{" "}
              <Link
                style={{ color: "white", fontWeight: "bold" }}
                to="/smart-contract-audit-company/"
              >
                {" "}
                smart contract
              </Link>{" "}
              to ensure that all parties will be satisfied with the task's
              satisfactory completion. Participants must decide how transactions
              and their data are represented on the blockchain, come to an
              understanding of the "if/when...then..." rules that govern those
              transactions, consider any potential exceptions, and design a
              structure for resolving disputes in order to set the terms.
              <br />
              The smart contract can then be created by a developer, though more
              and more businesses using blockchain for growth are using
              templates, web interfaces, and other online tools to make the
              process easier.
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
                Benefits of Smart Contracts
              </Typography>
            </Box>
            {/* <Container maxWidth="md"> */}
            <Box my={2}>
              <img src={blog3} width="100%" alt="Benefits of Smart contracts" />
            </Box>
            {/* </Container> */}
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
                1. Accuracy
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The explicit recording of all terms and conditions is one of a
              smart contract's key criteria. Due to the possibility of
              transaction problems, this is a must. Therefore, computerized
              contracts eliminate the drawbacks of manually filling out a tonne
              of paperwork.
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
                2. Transparency
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              All relevant parties are fully aware of and have access to these
              contracts' terms and conditions. Once the contract is made, there
              is no way to contest them. This helps ensure complete transparency
              of the transaction for all parties involved.
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
                3. Clear Communication
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Everything is explicit since the contract needs to be detailed
              accurately. Miscommunication or misinterpretation cannot be an
              option. Therefore, the efficiency lost due to communication
              breakdowns can be significantly reduced via smart contracts.
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
                4. Speed
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              These agreements are online contracts that are powered by computer
              code. They are able to complete transactions fast as a result.
              This speed can cut hours off of many conventional commercial
              operations. Document processing doesn't require doing it by hand.
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
                5. Security
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Automated contracts use modern crypto-currencies' greatest level
              of data encryption, which is also the standard used by automated
              contracts. They are among the things on the internet that are
              among the most secure due to this level of security.
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
                6. Efficiency
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The efficiency with which these contracts function is a logical
              outcome of their quickness and accuracy. More transactions that
              add value are handled in a given amount of time thanks to higher
              efficiency.
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
                7. Paper Free
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Businesses all across the world are becoming more aware of how
              their actions affect the environment. Because they exist and
              function entirely online, smart contracts support the "go-green"
              trend. There is no longer a need for numerous reams of paper.
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
                8. Storage & Backup
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              These agreements capture crucial information about every
              transaction. Your information is thus permanently preserved for
              future records if it is utilized in a contract. These
              characteristics are simple to recover in the event of data loss.
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
                9. Savings
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The fact that automated contracts do away with the necessity for
              an extensive network of middlemen is arguably one of their most
              important benefits. There is no requirement for attorneys,
              witnesses, banks, or other middlemen.
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
                10. Trust
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Absolute faith in smart contracts' execution is generated. The
              agreement's transparency, independence, and security eliminate the
              chance for manipulation, bias, or error. After being solemnized,
              the contract is automatically carried out via the network.
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
                11. Guaranteed Outcomes (Bonus)
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              These contracts might also have the ability to drastically cut
              down on or perhaps do away with the necessity for legal action and
              courtrooms. Parties agree to abide by the laws and judgments of
              the underlying code by employing a self-executing contract.
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
                CONCLUSION
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The most intriguing development in blockchain technology to far is
              smart contracts. We must have to admit that listening to
              self-described "bitcoin investors" blather on about how bitcoin
              was the best thing since sliced bread because it will drive out
              the banks became very old. Since smart contracts are so
              complicated, their potential extends beyond the straightforward
              transfer of assets. They have the ability to carry out
              transactions in many different areas, including legal proceedings,
              insurance premiums, crowdfunding agreements, and financial
              derivatives. By streamlining and automating repetitive, ordinary
              tasks for which individuals currently pay banks and lawyers
              significant fees, smart contracts have the potential to reduce the
              need for intermediaries in the legal and financial sectors.
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
};

export default Blog2;

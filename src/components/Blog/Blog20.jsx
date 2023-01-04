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
import blog20 from "./assets/blog20.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog20 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary: "Q.1 What is the best use case for smart contracts?",
      details:
        "There is no competition for best or worse when it comes to smart contracts use cases, while NFT smart contracts are one of the best examples of smart contract use cases.",
    },
    {
      summary: "Q.2 Which industries are using smart contracts?",
      details:
        "Smart contracts are widely used in trading, real estate, and healthcare.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/10-smart-contract-use-cases-beneficial-for-businesses/",
      },
      headline:
        "10 Smart Contract Use-Cases That are Practically Beneficial for Businesses",
      description:
        "Smart contracts would significantly reduce these costs by automating the now extremely labor-intensive approval operations and clearance computations. Read More about Smart Contract Use Cases",
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
            name: "What is the best use case for smart contracts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There is no competition for best or worse when it comes to smart contracts use cases, while NFT smart contracts are one of the best examples of smart contract use cases.",
            },
          },
          {
            "@type": "Question",
            name: "Which industries are using smart contracts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Smart contracts are widely used in trading, real estate, and healthcare.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "10 Smart Contract Use-Cases That are Practically Beneficial for Businesses";
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
            10 Smart Contract Use-Cases for Businesses - BlocTech Solutions
          </title>
          <meta
            name="description"
            content="
            Read about smart contract use cases that can prove the effectiveness of Blockchain Technology in Business and other Real-world Examples.
         "
          />
          <meta
            name="title"
            content="10 Smart Contract Use-Cases for Businesses - BlocTech Solutions"
          />
          <meta charset="utf-8" />
          <meta name="keywords" content="Smart contract use cases" />

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
            src={blog20}
            alt="use cases of smart contracts"
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
                OCT 13 2022
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
              Trade Finance will gain a lot from the use of smart contracts. By
              2022, it is anticipated that blockchain technology would provide
              annual savings of over $25 billion.
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
                SMART CONTRACTS USE CASE #1: TRADE FINANCE
              </Typography>
            </Box>{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Smart contracts would significantly reduce these costs by
              automating the now extremely labor-intensive approval operations
              and clearance computations. This automation will significantly cut
              down on mistakes and computation time in addition to assisting in
              the reduction of labor hours.
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
                  SMART CONTRACTS USE CASE #2: RECORDS
                </Typography>
              </Box>

              <Box mt={4} color="#fff">
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  a cryptocurrency or kind of electronic money that is not
                  dSmart contracts will enable nearly all potential industries
                  to increase the efficiency and security of their
                  record-keeping. The healthcare sector is one in particular
                  that has a great deal to gain.
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    Private health record databases might be stored and securely
                    secured using blockchain technology. The technology also
                    makes it possible to employ a private key, which limits
                    access to just specific people, which is an added plus.
                  </Typography>
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    Other{" "}
                    <a
                      style={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                      href="/blog/blockchain-in-real-estate-industry-reshape-the-transaction-process/"
                    >
                      applications for blockchain{" "}
                    </a>{" "}
                    smart contracts include the issuance of prescriptions, the
                    storage of receipts, general stock management, the archiving
                    of test results, and so on.
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
                    SMART CONTRACTS USE CASE #3: PROPERTY OWNERSHIP
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  When it comes to the real estate industry, smart contracts
                  have two enormous applications. They can be used to document
                  property ownership, to start. Smart contracts are a much
                  superior alternative to current methods since their use is
                  quicker and more economical.
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    Smart contracts can eliminate the need for pricey services
                    like those offered by attorneys and real estate agents in
                    the home market. Additionally, thanks to this new
                    technology, sellers may now manage the transaction entirely
                    on their own for the first time ever.
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
                  SMART CONTRACTS USE CASE #4: MORTGAGES
                </Typography>
              </Box>
            </Box>
            <Box mt={4} color="#fff">
              <Box component="h3">
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  The real estate sector will also profit from smart
                  contract-based mortgage transactions that are less expensive,
                  quicker, and more secure. This will not only make it possible
                  for purchasers to move in faster, but it will also make the
                  whole process a bit less complicated.
                </Typography>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  With the{" "}
                  <a
                    style={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                    href="/blog/understanding-the-working-and-benefits-of-smart-contract/"
                  >
                    use of smart contracts,
                  </a>{" "}
                  the sale might be digitally approved by both parties prior to
                  the payment being made. The contract would then be updated to
                  reflect the change in ownership after this was done.
                </Typography>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  The procedure will be more secure overall and will result in
                  fewer cases of fraud since it will need special computer code
                  key authorization on behalf of the original owner.
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
                  fontSize="30px"
                  fontWeight="700"
                >
                  SMART CONTRACTS USE CASE #5: INSURANCE
                </Typography>
              </Box>

              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The handling of claims costs the insurance sector tens of
                millions of dollars annually. Furthermore, it really loses
                millions of dollars due to false claims.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                In addition to supporting the initial insurance policy, smart
                contracts offer several benefits that enhance the processing of
                claims. They might permit mistake checks and choose compensation
                amounts in accordance with a set of standards that take into
                account the sort of policy that the person or business has.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Once more, the key advantages of smart contract technology are
                shorter processing times, lower prices, and far fewer mistakes.
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
                  SMART CONTRACT USE CASE #6: MEDICAL RESEARCH
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Similar advantages to those enjoyed by the healthcare sector
                will also be enjoyed by the medical research sector. Well first
                of all, after being securely encrypted using blockchain
                technology, extremely sensitive data like patient records might
                be transmitted between departments or research facilities.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Keeping this information secure is crucial since many of the
                people taking part in medical research have delicate medical
                issues that they frequently desire to keep confidential.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The same is true for medical research organizations, which must
                safeguard a vast quantity of data, including test findings and
                novel medication formulae.
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
                  SMART CONTRACTS USE CASE #7: VOTING
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Claims of voter fraud are often made by political parties in
                elections. We traditionally use computer systems for voting cost
                millions of dollars, yet fraudsters still find inventive methods
                to trick the system.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                This issue can be easily and affordably solved using smart
                contracts. They may be applied to both registered voters and
                verify their identities.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                After all, voting has ended, this information may then be
                utilized to start a process. Manipulation of this record is not
                feasible since blocks in a blockchain cannot be changed after
                they have been recorded.
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
                  USE CASE #8: PEER-TO-PEER TRANSACTIONS
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Many different{" "}
                <a
                  style={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                  href="/blog/complete-guide-to-peer-to-peer-lending-platforms-with-blockchain-Integration/"
                >
                  {" "}
                  peer-to-peer transactions
                </a>{" "}
                may be carried out using smart contracts. The Ethereum Project
                and numerous similar businesses were founded on this
                justification.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                These platforms enable users of various sizes and shapes to
                draft and accept smart contracts. Then, until a number of
                certain requirements are satisfied, these contracts are in
                effect.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Peer-to-peer smart contracts have virtually limitless potential.
                They may theoretically take over many of the responsibilities
                now played by cash.
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
                  USE CASE #9: PRODUCT DEVELOPMENT
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Using smart contracts to maintain a ledger of a product's
                development stages is another fascinating use. The contract
                would be activated by the signature of two parties.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The phases and any other pertinent information may be recorded
                to the smart contract as the agreed-upon project was created. If
                the parties had agreed to divide payments, for example, the
                contract would trigger their release when certain milestones
                were met.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Smart contracts' capacity to protect information and establish
                its provenance is a major draw. It goes without saying that a
                business that has spent a lot of money on a project doesn't want
                the data to be stolen.
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
                  USE CASE #10: STOCKTAKING
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Theoretically, in-house theft might be practically eliminated
                through smart contract supply chains as management would be able
                to track down a missing product to the precise moment and
                location where it vanished.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                These smart contracts would provide managers access to real-time
                stock levels and the amount of time it takes for things to
                travel across massive supply networks, such as those seen in
                enormous warehouses. This information might be used by managers
                to enhance delivery times by adjusting stock levels and creating
                new operating procedures.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                An automated smart contract might carry out all of the tasks
                mentioned earlier for supply chains that involve several
                organizations or locations, as well as start automatic reorders
                and payments for already-placed orders.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                These contracts' information might also be utilized to determine
                which items to store throughout different seasons of the year
                and upcoming busy periods.{" "}
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
                  My Final Thought
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                I consider smart contracts to be the most fascinating
                development in blockchain technology yet.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                I firmly believe that smart contract applications as a whole
                will fundamentally alter how we live our lives and endure long
                after everyone has forgotten about bitcoin.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Blockchain-enabled smart contracts have the potential to
                liberate us from the control of organizations like banks. Having
                the opportunity to increase democracy on our planet is a
                fantastic outcome of this.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Since we can use them to exchange something as simple as labor,
                or more complex things such as loans, as they gain in
                popularity, the number of these services will grow
                exponentially.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                We will be able to choose to access mortgages, which could be
                pooled from groups of investors, under the protection of smart
                contracts. No longer would be forced to pay whatever the few
                large banks decide to offer.{" "}
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                We would have the power to negotiate rates given the strength or
                weaknesses of our positions. Also, these investors would be less
                likely to want to hastily foreclose on our collateral and leave
                us homeless in the process.
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

export default Blog20;

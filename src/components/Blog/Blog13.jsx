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

import blog13img from "./assets/blog13img.png";
import blog13 from "./assets/blog13.png";
import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "Q.1 Will blockchain eliminate real estate agents?",
    details:
      "The quick response is no. Real estate agents will not go extinct as a result of blockchain technology, but rather will find new ways to enrich and increase the quality of their services.",
  },
  {
    summary: "Q.2 Is blockchain the future of real estate?",
    details:
      "The real estate sector may undergo a revolution as a result of this.Blockchain technology has the potential to significantly alter real estate transactions in the future.",
  },
  {
    summary: "Q.3 Can you sell real estate on the blockchain?",
    details:
      "Platforms built on the blockchain are also beginning to appear, enabling consumers to purchase and sell real estate without the need for conventional middlemen. ",
  },
];

const Blog13 = () => {
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
          "https://www.bloctechsolutions.com/blog/blockchain-in-real-estate-industry-reshape-the-transaction-process/",
      },
      headline:
        "Blockchain in Real Estate Industry: Reshape the Transaction Process",
      description:
        "Property ownership has traditionally been governed by a set of written rules and guidelines that are decided by a judge or court. The old world is giving way to the new, digital one, therefore things are different now. A blockchain ecosystem effectively grants ownership rights, removing the need for paper effort, expenditure, and bureaucracy while ensuring openness. Everyone may agree to these principles in peace and with confidence.",
      image: "",
      author: {
        "@type": "",
        name: "Shahriyar",
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
            name: "Will blockchain eliminate real estate agents?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The quick response is no. Real estate agents will not go extinct as a result of blockchain technology, but rather will find new ways to enrich and increase the quality of their services.",
            },
          },
          {
            "@type": "Question",
            name: "Is blockchain the future of real estate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The real estate sector may undergo a revolution as a result of this. Blockchain technology has the potential to significantly alter real estate transactions in the future.",
            },
          },
          {
            "@type": "Question",
            name: "Can you sell real estate on the blockchain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Platforms built on the blockchain are also beginning to appear, enabling consumers to purchase and sell real estate without the need for conventional middlemen.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "Blockchain in Real Estate Industry: Reshape the Transaction Process";
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
          Blockchain in Real Estate Industry: Reshape the Transaction Process
        </title>
        <meta
          name="description"
          content="
                    The integration of Blockchain in the Real Estate Industry will revolutionize the future and Reshape the Transaction Process. This will eventually benefit the record system of real estate.
          "
        />
        <meta
          name="title"
          content="Blockchain in Real Estate Industry: Reshape the Transaction Process"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Blockchain in Real Estate Industry. Blockchain Technology in Real Estate"
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
          src={blog13}
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
              OCT 4th 2022
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
            Blockchain in Real Estate Industry: Reshape the Transaction Process
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Property ownership has traditionally been governed by a set of
                written rules and guidelines that are decided by a judge or
                court. The old world is giving way to the new, digital one,
                therefore things are different now. A blockchain ecosystem
                effectively grants ownership rights, removing the need for paper
                effort, expenditure, and bureaucracy while ensuring openness.
                Everyone may agree to these principles in peace and with
                confidence.
              </Typography>
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
                What is meant by blockchain transaction?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A digital transaction that appears on a public ledger is known as
              a blockchain transaction. This ledger is dispersed throughout a
              network of computers, making it independent of any single
              centralized authority. A blockchain transaction is particularly
              safe since it is validated by a network of computers. Transactions
              on a blockchain are secure and transparent. As real estate
              transactions are sometimes quite complicated and include several
              stakeholders, this makes them perfect. There is no space for error
              or fraud with blockchain since all participants can always monitor
              the transaction's status. Additionally quick and effective,
              blockchain transactions. They may be finished in a matter of
              minutes as opposed to weeks or even months for conventional real
              estate transactions. In general, blockchain technology has the
              power to transform the real estate sector. It may increase the
              efficiency, security, and transparency of transactions.
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
                What values Blockchain in real estate can add?
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              As the benefits of this system are better understood, blockchain
              technology is increasingly being used in real estate transactions.
              Blockchain offers a safe, decentralized method to track and
              transfer asset ownership. The real estate sector may undergo a
              revolution as a result of this. Blockchain technology has the
              potential to significantly alter real estate transactions in the
              future. One benefit is that it can speed up and simplify the
              process of purchasing and selling real estate.
              <br />
              Additionally, many of the procedures required in a real estate
              transaction, such as title searches and escrow services, might be
              automated with the use of smart contracts. Another benefit of
              blockchain is that it offers a more secure way to track property
              ownership. Using outdated ways to register property ownership
              leaves you open to fraud and mistakes. Blockchain provides a
              hacker-proof method to store this data. This may contribute to a
              decrease in fraud and real estate scams.
              <br />
              Generally speaking, the process of purchasing and selling real
              estate might be substantially streamlined and simplified by
              blockchain technology. Additionally, it may aid in boosting
              security and lowering fraud occurrences.
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
                Tools and materials to look about
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The real estate industry is undoubtedly evolving as a result of
              blockchain technology. For those who are unfamiliar with
              blockchain, it may be thought of as a secure decentralized
              database that can be used to store data. As a result, there is no
              one point of control, which makes it very challenging for hackers
              to break into. Additionally, because blockchain is transparent,
              all participants to a transaction may see the data instantly. If
              you want to use blockchain for real estate transactions, you will
              need to take a few distinct components and technologies into
              account. Finding a reliable platform that provides this service is
              the first step. There are many choices available, so be sure to do
              your homework before making a decision. You must register an
              account and deposit money once you have chosen a platform. Once it
              is complete, you may begin using blockchain for transactions.
              <br />
              The ability of blockchain to simplify the entire process of
              purchasing or selling real estate is one of its many wonderful
              features. There won't be a need for paper contracts or any other
              kind of physical paperwork because all necessary information will
              be recorded on the blockchain. This may considerably speed up the
              process and make things simpler for everyone concerned.
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
                Major Benefits of Blockchain in Real Estate:
              </Typography>
            </Box>
            <Box my={2}>
              <img
                src={blog13img}
                width="100%"
                alt=" Benefits of Blockchain in Real Estate"
              />
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Blockchain technology has opened up new possibilities for real
              estate deals. The purchase and sale of real estate may be
              streamlined and made safer with the use of blockchain technology.
              This entails being able to trace a property's ownership history
              for purchasers. It implies being able to offer more openness to
              the sale process for sellers.
              <br />
              The peculiarity of blockchain is that it's frequently hard to
              predict where the technology will lead. The majority of people are
              aware of how blockchain technology has the power to alter the
              banking industry, but they frequently ignore how it may affect
              real estate. Nevertheless, there are a variety of ways that
              blockchain might alter real estate deals in the future, for better
              or ill.
              <br />
              Time may be greatly reduced if everything is done electronically.
              Blockchain's high level of security is an additional advantage.
              Each transaction is recorded on a decentralized ledger that is
              impenetrable to deletion or tampering. Knowing that their
              transaction is safe and secure provides both buyers and sellers
              peace of mind.
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
                Privacy: Who is the data's owner?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Data is getting more and more valuable, which is no secret. It's
              currently regarded as one of the most precious commodities in the
              world. Therefore, it should come as no surprise that several
              businesses are attempting to acquire as much of it as they can.
              The real estate sector is one that has long been gathering data.
              <br />
              Additionally, real estate firms may now gather more data than ever
              thanks to the development of blockchain technology.
              <br />
              But whose data is this? And maybe more crucially, who gets to
              decide? Although this issue is still up for discussion, there is
              little doubt that blockchain technology will change how real
              estate transactions are conducted in the future. Blockchain is
              making it simpler for everyone to acquire the information they
              need to make educated decisions by providing buyers and sellers
              with a safe and transparent means to conduct business. Platforms
              built on the blockchain are also beginning to appear, enabling
              consumers to purchase and sell real estate without the need for
              conventional middlemen. This may further lower expenses and
              increase the effectiveness of the real estate purchasing and
              selling process.
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
                Blockchain reality: Are tokenized systems subject to any
                restrictions?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The peculiarity of blockchain is that it's frequently hard to
              predict where the technology will lead. The majority of people are
              aware of how blockchain technology has the power to alter the
              banking industry, but they frequently ignore how it may affect
              real estate. Nevertheless, there are a variety of ways that
              blockchain might alter real estate deals in the future, for better
              or ill.
              <br />
              By tokenizing assets, blockchain technology has the potential to
              have a significant influence. The act of turning an asset into a
              digital token that can be exchanged on a blockchain network is
              known as tokenization. Greater liquidity and fractional ownership
              of assets would be possible as a result.
              <br />
              For instance, owners might tokenize their properties and sell
              tokens that represented a portion of their own rather than needing
              to sell a property in its whole to make money. Both people and
              organizations may have access to a whole new universe of
              investment options as a result.
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
                Conclusion:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Using smart contracts is another way that blockchain might alter
              the real estate industry. Self-executing contracts known as "smart
              contracts" are kept on a blockchain network. Many other sorts of
              transactions, including real estate transactions, may be automated
              using them. A smart contract may be used, for instance, to
              automatically transfer ownership of a house to the buyer whenever
              particular requirements are satisfied. Blockchain-based systems
              may employ smart contracts in large quantities as well. They may
              be used to more effectively transfer ownership from one person or
              corporation to another as well as to validate many layers of
              paper.
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

export default Blog13;

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
import blog6 from "./assets/blog6.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/auth1.png";
import defiblog6 from "./assets/defiblog6.png";

import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const Blog6 = () => {
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
      summary: "Will decentralized finance affect the World Economy?",
      details:
        "According to a Financial Stability Board research from 2019, decentralized financial technology might increase financial stability, competitiveness, and a varied financial system while decreasing the significance and effect of current institutions.",
    },
    {
      summary: "Is decentralized finance legal?",
      details:
        "A legal or technical definition of 'Decentralized Finance' (DeFi) is not available. Nevertheless, it is becoming more frequently used when talking about how finance will be regulated and developed in the future.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/what-is-defi-a-beginners-guide-to-decentralized-finance-system/",
      },
      headline:
        "What is Defi? A Beginners Guide to Decentralized Finance System",
      description:
        "Decentralized finance is abbreviated as DeFi, which is meant to sound like the word 'defy' DeFi was first used in 2018. The decentralized finance system is swiftly gaining popularity as a safer, more open, and more effective substitute respect to conventional financial services.",
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
            name: "Will decentralized finance affect the World Economy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "According to a Financial Stability Board research from 2019, decentralized financial technology might increase financial stability, competitiveness, and a varied financial system while decreasing the significance and effect of current institutions.",
            },
          },
          {
            "@type": "Question",
            name: "Is decentralized finance legal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: 'A legal or technical definition of "Decentralized Finance" (DeFi) is not available. Nevertheless, it is becoming more frequently used when talking about how finance will be regulated and developed in the future.',
            },
          },
        ],
      },

      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "What is Defi? A Beginners Guide to Decentralized Finance System.";
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
          What is Defi? A Beginners Guide to Decentralized Finance System
        </title>
        <meta
          name="description"
          content="
          The decentralized finance system (DeFi) is swiftly gaining popularity as a safer, more open, and more effective substitute respect to conventional financial services."
        />
        <meta
          name="title"
          content="What is Defi? A Beginners Guide to Decentralized Finance System"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="waht is defi, decentralized finance system , decentralized finance applications , defi finance "
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
          src={blog6}
          alt="Decentralized Finance System Defi"
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
              SEP 21th 2022
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
            What is Defi? A Beginners Guide to Decentralized Finance System.
          </Box>
        </Box>

        <Box>
          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Decentralized finance is abbreviated as DeFi, which is meant to
              sound like the word "defy." DeFi was first used in 2018. The
              decentralized finance system is swiftly gaining popularity as a
              safer, more open, and more effective substitute respect to
              conventional financial services. It establishes a more open,
              reliable, and accessible financial system by doing away with the
              need for centralized financial institutions.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Decentralized finance will lower the dangers of fraud, corruption,
              and improper asset management thanks to blockchain security. Aside
              from eliminating overdraft fees, wire transfer costs, and the need
              to wait until banking hours for a transaction to be validated, it
              will also make managing finances much more affordable and
              efficient.
            </Typography>
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography fontSize="22px" fontWeight="700">
                How does defi work?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The blockchain technology that cryptocurrencies employ, is used in
              a decentralized finance system. A distributed and secure database
              or ledger is referred to as a blockchain. The blockchain is
              operated and transactions are handled by programmes known as
              dApps. The blockchain records transactions as blocks that are
              later confirmed by other users. If all of these verifiers concur
              on a transaction, the block is closed and encrypted, and a new
              block is made with details of the old block inside of it. The
              information in each succeeding block "chains" the blocks together,
              giving the technology its name. There is no way to edit a
              blockchain since changes to the information in earlier blocks
              always have an impact on later blocks. This idea, coupled with
              other security measures, gives a blockchain its security.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography fontSize="22px" fontWeight="700">
                Why is a decentralized finance system important?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The fundamental idea behind Bitcoin is that it is digital money. A
              decentralized finance system is built on this idea to create an
              entirely digital alternative to Wall Street, but without all the
              accompanying fees (think office towers, trading floors, banker
              salaries). Financial markets that are more accessible to everyone
              with an internet connection and more open, free, and fair may
              result from this.
              <br />
              Consider how financial products are offered and supported today:
              In most cases with little transparency when you go to a bank or
              lender, you must abide by their rules and charges. We are
              compelled to believe these financial entities and follow their
              rules because they control the gates. In certain nations, it is
              simple to have this trust, which is crucial. However, other
              nations with high rates of inflation, corruption, and monopoly
              financial infrastructure may not make this trust as clear. In
              these marketplaces, it is common for consumers to lack access to a
              secure location where they can park their belongings, borrow
              money, or even make long-term investments.
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
                Benefits of decentralized finance System (Defi):
              </Typography>
            </Box>
            <Box my={2}>
              <img
                src={defiblog6}
                width="100%"
                alt="Benefits of Decentralized Finance System Defi"
              />
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The DeFi movement seeks to introduce a range of advantages for
              investors and customers. A decentralized finance system has a
              number of important benefits, including the removal of middlemen
              and centralized control.
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
                Accessibility
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              There are no geographical limitations on how DeFi transactions are
              conducted. With a DeFi platform, everybody with an Internet
              connection has access, however, with traditional finance some
              people cannot create bank accounts or get loans.
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
                Transparency
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Transparency is one of the key features of blockchain technology.
              On the blockchain, every transaction, piece of data, and line of
              code is visible to everyone. Users develop trust as a result of
              this amount of transparency.
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
                Security
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Users do not need to worry about the security of their funds
              because they are always in full control of them because there is
              no central authority involved. However, it is important to keep in
              mind that, as with any new technology, there will always be some
              risk involved in using it, even though this risk is not much
              higher than that of conventional finance.
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
                Interoperability
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Interoperability in the blockchain realm refers to the capacity of
              two blockchain systems to communicate with one another and
              exchange money. Multiple DeFi platforms can already interact
              safely with one another, even if there is still much to be done.
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
                Programmable
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Platforms utilizing DeFi, eliminate all middlemen and human
              interaction. The business rules are automatically carried out by
              the smart contracts that are set up on the Blockchain platform
              without the need for manual intervention.
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
                Is the future of finance Decentralized?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Even though it has only been in existence for a few years, this
              alternative global financial system, which is based on open
              blockchains like Bitcoin and Ethereum, has grown immensely in
              scope and diversity. Could a decentralized finance system change
              the existing financial landscape as we know it?
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Let's deconstruct it. Decentralizing financial operations and
              giving people more financial authority are the main goals. DeFi
              has been changing the financial landscape, and because of this,
              many analysts and industry players see the network as the way of
              the future.
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
                Conclusion
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Financial industry disruption won't be going away any time soon.
              That is the result of the quick speed of technological
              advancement. It takes the agility, openness, and strategic
              thinking to maneuver through this frenetic pace. Consider
              blockchain as an example. Banks were reluctant to adopt at first.
              Several large banks are now making investments in businesses
              involved with cryptocurrencies and the blockchain. Traditional
              financial institutions can join in as soon as they realize that a
              decentralized finance system is here to stay and integrate this
              technology into their current frameworks. A fantastic illustration
              of the opportunity for cooperation in this area is provided by ING
              Bank. In a paper titled "Lessons Learned from Decentralized
              Finance," the bank with headquarters in the Netherlands recently
              examined the benefits and hazards of DeFi. ING Bank comes to the
              conclusion that cooperation between centralized and decentralized
              financial services results in the "best of both worlds" after
              weighing the advantages and disadvantages.
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

export default Blog6;

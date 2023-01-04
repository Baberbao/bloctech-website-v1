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
import blog3img from "./assets/blog5.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";
const Blog5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary: "what is DAO in NFT? ",
      details:
        "A community-led organization that allows members to vote on the direction of their entity is known as a 'Decentralized Autonomous Organization,' or DAO. The ability for numerous people to hold a portion of an NFT using Collector DAOs enables smaller NFT traders to participate in more expensive projects.",
    },
    {
      summary: "How does DAO make money?",
      details:
        " The DAO generates revenue from profits from investments the company makes. In addition to founding a DAO, individuals may make money by persuading people to invest in them personally based on their business concept.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/what-exactly-is-a-dao-Its-working-and-benefits/",
      },
      headline:
        "What exactly is a DAO? (Decentralized Autonomous Organization), Its working and Benefits",
      description:
        "An emerging type of legal structure is the decentralized autonomous organization (DAO). Every individual inside a DAO often has a similar objective and makes an effort to behave in the entity's best interests, but there is no single governing authority.",
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
            name: "what is DAO in NFT?",
            acceptedAnswer: {
              "@type": "Answer",
              text: 'A community-led organization that allows members to vote on the direction of their entity is known as a "Decentralized Autonomous Organization," or DAO. The ability for numerous people to hold a portion of an NFT using Collector DAOs enables smaller NFT traders to participate in more expensive projects.',
            },
          },
          {
            "@type": "Question",
            name: "How does DAO make money?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The DAO generates revenue from profits from investments the company makes. In addition to founding a DAO, individuals may make money by persuading people to invest in them personally based on their business concept.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "What exactly is a DAO? (Decentralized Autonomous Organization), Its working and Benefits";
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
          <title>What exactly is a DAO?, Its working and Benefits</title>
          <meta
            name="description"
            content="
            DAO is the decentralized autonomous organization where every individual often has a similar objective and makes an effort to behave in the entity's best interests "
          />
          <meta
            name="title"
            content="What exactly is a DAO?, Its working and Benefits"
          />
          <meta charset="utf-8" />
          <meta
            name="keywords"
            content="dao, daos, decentralized autonomous organization , benefits of a dao , working of dao "
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
            alt="DAO Decentralized Autonomous Organization"
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
                SEP 20th 2022
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
              What exactly is a DAO? (Decentralized Autonomous Organization),
              Its working and Benefits
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
                What is a DAO?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              An emerging type of legal structure is the decentralized
              autonomous organization (DAO). Every individual inside a DAO often
              has a similar objective and makes an effort to behave in the
              entity's best interests, but there is no single governing
              authority. DAO is utilized in a bottoms-up management style to
              make choices and has become popularized by bitcoin enthusiasts and
              blockchain technology. <br />
              An entity structure known as a decentralized autonomous
              organization allows token holders to participate in the
              administration and decision-making of an entity. A DAO lacks a
              centralized authority; instead, token holders cast votes on behalf
              of one another to divide power.
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
                How does a DAO work in Blockchain Technology?
              </Typography>
            </Box>{" "}
            <img
              src={blog1}
              alt=" Working of Decentralized autonomous organization DAO"
              width={"100%"}
            />{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              To function on a blockchain, DAOs need smart contracts. Code
              fragments used in these smart contracts enable activities to be
              carried out automatically when a set of conditions are satisfied.
              While smart contracts were initially implemented on the Ethereum
              blockchain, they are now used on a number of other blockchains.
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
                The following are the steps to building a DAO:
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
                  Establish a mission statement and goals:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                You must first create a mission statement, as with any type of
                business. Since you'll be deciding how the DAO will be run and
                what its objectives are at this stage, it's possible to argue
                that it's the most crucial. It resembles a business plan that
                you might find in more established corporate structures. Being
                as open and honest as you can during this time is ideal.
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
                  Establish a Community:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Perhaps the most challenging phase in the process is creating a
                DAO community. First, you must decide if your DAO will be big or
                small, public or private. This must be addressed in the first
                step's mission statement.
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
                  Selecting Members:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                You will need to put in a lot of effort to expand the community
                if you want your DAO to have thousands of members. On the other
                hand, you'll need to restrict membership if your DAO intends to
                have a membership that is limited to a particular group of
                individuals or audience with a particular interest. The
                difficult part is creating a communication center to draw people
                interested in decentralized groups.
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
                  Regular Interaction:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                It is essential for the DAO to communicate openly with its
                members. Because there is no management structure in DAOs,
                members must be honest with one another in order for the
                organization to function. Additionally, you may use several
                platforms to communicate with your members, which brings us to
                our next point.
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
                  Utilize community resources:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Utilize methods to stay in touch with people concerning
                DAO-related tasks, such as voting or discussing organizational
                changes, based on what we said previously about discovering
                possible community members.
                <br />
                An excellent strategy to protect your DAO's obligations is by
                using messaging apps like Discord and Telegram. Another
                excellent method of contact is through forums.
                <br />
                For instance, Discord enables server administrators to impose
                membership requirements, possibly removing the possibility of
                third parties discovering your DAO's activities. This is
                especially useful if your DAO includes membership requirements.
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
                  Set funding objectives:
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
                  fontSize="22px"
                  fontWeight="700"
                >
                  Setting up the Treasury:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The DAO type underpins the Treasury's architecture. For
                instance, if your DAO levies a use fee, you can add money to the
                Treasury. The same guidelines are applicable to DAOs that grant
                membership access using other means, such as non-fungible tokens
                (NFTs).
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
                  Acquiring Tokens:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The native token of the organization, a type of virtual
                currency, is available for purchase by people or organizations
                wanting to join the DAO. Voting privileges may be assigned to
                members who own tokens proportionally to their holdings.
                Additionally, they might hold stock in the company to influence
                its direction.
                <br />
                The most crucial thing to keep in mind is that you should invest
                as much money as you can into your treasury since doing so will
                help the community of the organization. Our next move is made
                possible by this.
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
                  Learn Governance:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                DAO participants will need to weigh in on debates and
                suggestions that might have an impact on the DAO's development.
                For the organization to proceed, decisions about changes and
                activities must be made by vote.
                <span style={{ fontWeight: "700" }}>
                  <ul>
                    <li>Formal Governance</li>
                    <li>Delegated Governance </li>
                  </ul>
                </span>
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
                  Identify Ownership:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                In a DAO, distributing ownership is how you give members voting
                rights and reflect membership access. NFTs and fungible tokens
                are two options for sharing ownership (ERC-20 token). While some
                DAOs utilize ERC-20s as their governance weight, others use
                NFTs. Depending on the kind of DAO you have and how it
                functions, both have advantages and cons that are different.
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
                  Benefits of a DAO:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontWeight="600"
                fontSize="18px"
              >
                <ul>
                  <li>Accountability</li>
                  <li>Impartiality</li>
                  <li>Equal Stakes</li>
                  <li>Independent Structure</li>
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
                  fontSize="22px"
                  fontWeight="700"
                >
                  Independent Structure:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Due to their top-down organizational structures, modern
                businesses and organizations face significant management
                challenges. By utilizing an autonomous framework, DAOs ensure
                that each organization member is independent. As a result, it
                can facilitate the advantages of not being subject to
                centralized control.
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
                  Equal Stakes:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                In decentralized autonomous organizations, all investors have
                the power to influence how the organizations will be operated in
                the future. Investors' voting power in the DAO is based on the
                quantity of DAO tokens they own.
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
                  Impartiality:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Most problems and disputes in contemporary organizations are the
                results of persistent violations of a set of rules. Obviously,
                the neutral atmosphere that DAO generates for an organization
                would be the main emphasis of the discussion of the benefits and
                drawbacks of DAO. There are no power struggles or disputes since
                there are no managers or middlemen with substantial influence in
                DAOs. From a technological standpoint, the smart contract is the
                center of a decentralized autonomous organization.
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
                  Accountability:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Accountability is undoubtedly the most significant point in the
                summary of the benefits of decentralized autonomous
                organizations. The utilization of blockchain technology is
                indicated by the important accountability highlighted in the
                benefits of a DAO. The organization's entire activity is
                recorded on the blockchain for all time, making it possible to
                easily trace back transactions to their inception.
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
                  Final thoughts:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Given that this organizational structure is more recent in
                comparison to other company models, there are several unanswered
                questions regarding DAO operations. It will be fascinating to
                watch how popular DAOs become and how they shape the corporate
                landscape as the years go by.
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

export default Blog5;

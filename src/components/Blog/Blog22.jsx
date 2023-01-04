import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  IconButton,
  TableContainer,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import blog1 from "./assets/blog22one.png";
import blog2 from "./assets/blog22two.png";
import bg from "./assets/bgf.png";
import blog3img from "./assets/blog22.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlogSlider from "./BlogSlider";

const Blog22 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary: "Can Web3 be hacked?",
      details:
        "Hackers target the flaws in the project's smart contracts whereas the blockchains that host Web3 apps are immune to being taken captive by attackers.",
    },
    {
      summary: "Is Web3 a metaverse?",
      details:
        "Contrary to popular belief, the Metaverse is not the same as Web3, the third evolution of the World Wide Web. Users may interact with virtual objects and each other in a 3D environment in the parallel online world known as the Metaverse, which is based on virtual reality.",
    },
    {
      summary: "Is NFT part of Web3?",
      details:
        "Blockchain (as cryptocurrency and NFTs) is included in the Web3 group of open technologies and protocols, according to IDC, which supports the usage of decentralized data, knowledge, and value in a natively trustworthy manner.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/the-core-difference-between-web-3.0-and-web-2.0/",
      },
      headline:
        "Understand Web 3.0 and the Core Difference between Web 3.0 and Web 2.0",
      description:
        "The World Wide Web has experienced several changes over its existence and is still developing today. It's critical to look back on earlier generations and contrast them with the upcoming ones as interest in Web 3.0 grows along with the popularity of blockchain and security technology. As the world realized what the 'information superhighway' might provide, Web 1.0 was a pioneering era with numerous firsts. After multiple technological generations evolved, a lot has changed in the decades since the creation of the internet.",
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
            name: "Can Web3 be hacked?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hackers target the flaws in the project's smart contracts whereas the blockchains that host Web3 apps are immune to being taken captive by attackers.",
            },
          },
          {
            "@type": "Question",
            name: "Is Web3 a metaverse?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contrary to popular belief, the Metaverse is not the same as Web3, the third evolution of the World Wide Web. Users may interact with virtual objects and each other in a 3D environment in the parallel online world known as the Metaverse, which is based on virtual reality.",
            },
          },
          {
            "@type": "Question",
            name: "Is NFT part of Web3?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Blockchain (as cryptocurrency and NFTs) is included in the Web3 group of open technologies and protocols, according to IDC, which supports the usage of decentralized data, knowledge, and value in a natively trustworthy manner.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "Understand Web 3.0 and the Core Difference between Web 3.0 and Web 2.0";
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
          <title>The Core Difference between Web 3.0 and Web 2.0</title>
          <meta
            name="description"
            content="
            Understand the Core Difference between Web 3.0 and Web 2.0 when the Era of technology is moving towards Decentralized Networks, which improves Data Security and Trust."
          />
          <meta
            name="title"
            content="The Core Difference between Web 3.0 and Web 2.0"
          />
          <meta charset="utf-8" />
          <meta
            name="keywords"
            content="Difference Between Web 3.0 and Web 2.0"
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
            alt=" Difference between web 3.0 and web 2.0"
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
                OCT 14th 2022
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
              Difference Between Web 3.0 and Web 2.0
            </Box>
          </Box>

          <Box mt={4} color="#fff">
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The World Wide Web has experienced several changes over its
              existence and is still developing today. It's critical to look
              back on earlier generations and contrast them with the upcoming
              ones as interest in Web 3.0 grows along with the popularity of
              blockchain and security technology. As the world realized what the
              "information superhighway" might provide, Web 1.0 was a pioneering
              era with numerous firsts. After multiple technological generations
              evolved, a lot has changed in the decades since the creation of
              the internet.
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
                Introduction to Web 2.0:
              </Typography>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Start with Web 2.0 if you want to understand more in-depth the
              differences between Web 2.0 and Web 3.0.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              It alludes to the second generation of internet services, which
              emphasised giving consumers the ability to engage with web
              content. Along with interoperability and usability for end users,
              Web 2.0 promoted the expansion of user-generated content.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              In addition to the benefits of interactivity and usability, web
              2.0 also encourages interoperability across multiple services.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Web browser technologies are another crucial aspect of Web 2.0
              that should be highlighted when comparing{" "}
              <Link
                to="/blog/history-and-evolution-of-blockchain-technology/"
                style={{ color: "white", fontWeight: 700 }}
              >
                Web 2.0 to Web 3.0
              </Link>{" "}
              . As powerful tools for building web 2.0 websites, AJAX and
              JavaScript have been developed.
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
                Features of web 2.0:
              </Typography>
            </Box>{" "}
            <LazyLoadImage
              src={blog1}
              alt=" features of web 2.0"
              width={"100%"}
            />{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              <ul>
                <li>
                  Access to web information through Internet-connected kettles,
                  TVs, consoles, tablets, mobile devices, and more
                </li>
                <li>
                  A vital component of the second generation of internet
                  services is making sure that dynamic material is very
                  responsive to user inputs.
                </li>
                <li>
                  Users contribute to content development by not just sharing
                  and commenting on articles and videos, but also by creating
                  them.
                </li>
                <li>
                  There is a distinct "intermediary" - a controlling platform -
                  in the data transmission process.
                </li>
                <li>
                  creation of an API to facilitate communication between various
                  programmes
                </li>
              </ul>
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              You may compare web 2.0 with web 3.0 with a different set of
              features by outlining the applications of web 2.0.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              There are many online resources and portals that enable people to
              exchange their experiences, viewpoints, thoughts, and views. With
              additional chances for engagement with end users, the web 2.0 apps
              have demonstrated a powerful front-end revolution. Users might
              discover a variety of apps on web 2.0 for various purposes. Among
              these include social media, blogging, voting on web content,
              social bookmarking, podcasting, and tagging.
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
                  What is Web 3.0? The Basics:
                </Typography>
              </Box>

              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Although web 2.0 may appear to be a more sophisticated approach
                to the internet, it has several drawbacks. Because Web 2.0
                requires trustworthy intermediates, trusted institutions
                increasingly have influence over user data. Web 3.0 looks to be
                a promising advancement over Web 2.0 with significant
                infrastructural changes. The third generation of the web, also
                known as the semantic web, makes use of a cutting-edge metadata
                system. The metadata system aids in organizing and managing
                various forms of data such that it is understandable to both
                people and machines. The most significant distinction between
                Web 2.0 and Web 3.0 is the primary benefit of Web 3.0.
                Introducing the universality of information in Web 3.0
                eliminates the necessity for centralized intermediaries.
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
                    Features of Web 3.0:
                  </Typography>
                </Box>
                <LazyLoadImage
                  src={blog2}
                  alt=" features of web 3.0"
                  width={"100%"}
                />{" "}
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  <ul>
                    <li>
                      Artificial intelligence, which chooses the information's
                      most pertinent possibilities (search engines are actively
                      engaged in it, reducing the role of organic search results
                    </li>
                    <li>
                      {" "}
                      By comprehending and interpreting the meaning of human
                      words, the Semantic Web or a similar alternative enables
                      robots to engage with people more effectively.{" "}
                    </li>
                    <li>
                      Freedom from censorship and monitoring owing to the lack
                      of a control center, a new degree of security and privacy
                      provided by decentralization (blockchain), distributed
                      ledgers, and decentralized finance Defi.
                    </li>
                  </ul>
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
                    Web 2.0 vs Web 3.0: Key Differences
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  Web 2.0 and Web 3.0 are similar technologies with a shared
                  history, but they approach problem-solving differently. The
                  primary distinction is that Web 2.0 focuses on reading and
                  writing content, whereas Web 3.0 is fundamentally about
                  creating content (Semantic Web). However, the latter uses
                  technology to facilitate information sharing between Internet
                  users while enhancing security, making it even better than
                  before.
                </Typography>
              </Box>

              <Box mt={4}>
                <TableContainer>
                  <table id="customers">
                    <tr>
                      <th>
                        {" "}
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
                          Criteria
                        </Typography>
                      </th>
                      <th>
                        {" "}
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
                          WEB 2.0
                        </Typography>{" "}
                      </th>
                      <th>
                        {" "}
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
                          WEB 3.0
                        </Typography>{" "}
                      </th>
                    </tr>
                    <tr>
                      <td>Definition</td>
                      <td>
                        Today's interactive Internet is known as Web 2.0. A
                        hypothetical Web 3.0 in the future that would
                        incorporate new cutting-edge technology to improve how
                        we will probably utilize the web decades from now.
                      </td>
                      <td>
                        A notion for a new version of the World Wide Web called
                        Web3 (sometimes referred to as Web 3.0) integrates ideas
                        including decentralization, blockchain technology, and a
                        token-based economy.
                      </td>
                    </tr>
                    <tr>
                      <td>Focus</td>
                      <td>The goal is to provide each </td>
                      <td>The growth of the community is the</td>
                    </tr>
                    <tr>
                      <td>Technologies</td>
                      <td>AJAX JAVASCRIPT HTML CSS3</td>
                      <td>
                        Artificial intelligence Machine learning Decentralized
                        protocols
                      </td>
                    </tr>
                    <tr>
                      <td>Types of application</td>
                      <td>WEB applications</td>
                      <td>Intelligent software based on AI and ML</td>
                    </tr>
                    <tr>
                      <td>State of data </td>
                      <td>The data networks on</td>
                      <td>
                        The ownership of the data, as well as its distribution
                        and usage, is with entities.
                      </td>
                    </tr>
                    <tr>
                      <td>Features</td>
                      <td>enhanced attraction</td>
                      <td>
                        apps and functionalities on the web that are clever
                        Better knowledge representations and web technologies
                      </td>
                    </tr>
                  </table>
                </TableContainer>
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
                    Final thoughts:
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  The comparison between web 2.0 and web 3.0's clear observation
                  of highlights demonstrates how the latter offers more
                  advantages than the former. Most importantly, web 3.0 offers
                  enhanced privacy, security, and trust. Many people also refer
                  to web 3.0, which will be mostly built on decentralized
                  protocols, as the "decentralized web." On the other hand, many
                  of the online apps we use today still have a common core with
                  web 2.0.
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

export default Blog22;

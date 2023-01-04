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
import blog23 from "./assets2/blog25.png";
import blog25two from "./assets2/blog25two.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlogSlider from "./BlogSlider";

const Blog25 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionData = [
    {
      summary: "How NFTs make money?",
      details:
        "Selling NFTs on NFT-specific marketplaces is the most common way to make money with them.",
    },
    {
      summary: "How does nft marketplace work?",
      details:
        "Users are able to purchase and sell exclusive digital assets on an NFT marketplace. But specifics differ from platform to platform. For instance, digital assets might be anything, from artwork and music to collectibles linked to games and sports.",
    },
    {
      summary: "Can NFTs be traded?",
      details:
        "Non-fungible tokens (NFTs) are cryptographic assets that are identified by specific identification numbers and other metadata. They are stored on a blockchain. They cannot be exchanged or traded at equivalent value, unlike cryptocurrencies.",
    },
  ];

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/what-is-nft-and-how-does-nft-work/",
      },
      headline:
        "What is NFT and How Does NFT Work? A Comprehensive Guide for Beginners",
      description:
        "The economy is upgrading and NFTs are getting most of the attractions. We need to understand what are NFTs and How NFTs works?",
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
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How NFTs make money?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Selling NFTs on NFT-specific marketplaces is the most common way to make money with them.",
            },
          },
          {
            "@type": "Question",
            name: "How does nft marketplace work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Users are able to purchase and sell exclusive digital assets on an NFT marketplace. But specifics differ from platform to platform. For instance, digital assets might be anything, from artwork and music to collectibles linked to games and sports.",
            },
          },
          {
            "@type": "Question",
            name: "Can NFTs be traded?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non-fungible tokens (NFTs) are cryptographic assets that are identified by specific identification numbers and other metadata. They are stored on a blockchain. They cannot be exchanged or traded at equivalent value, unlike cryptocurrencies.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "What is NFT and how does NFT work? A Comprehensive Guide for Beginners";
  return (
    <div>
      {" "}
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
            What is NFT and how does NFT work? | Guide for Beginners
          </title>
          <meta
            name="description"
            content="
            The economy is upgrading and NFTs are getting most of the attractions. We need to understand what are NFTs and How NFTs works?
   "
          />
          <meta
            name="title"
            content="What is NFT and how does NFT work? | Guide for Beginners"
          />
          <meta charset="utf-8" />
          <meta name="keywords" content="what is nft, how does nft work?" />

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
            src={blog23}
            alt="Non Fungible Token NFT"
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
                OCT 19 2022
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
                  Basics of NFT:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                The term "NFT" refers to non-fungible tokens, which are
                frequently created using the same code as cryptocurrencies.
                Simply explained, blockchain technology is the foundation for
                these cryptographic assets. They cannot be exchanged or traded
                equally as other digital assets may.
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                <ul>
                  <li>
                    The identities of people, their property rights, and other
                    things may all be represented by NFTs.
                  </li>
                  <li>
                    As NFTs' value first rose but has subsequently moderated,
                    collectors have been interested in them.
                  </li>
                  <li>
                    Using blockchain technology, NFTs enable people to produce,
                    acquire, and trade goods in a straightforwardly verifiable
                    manner.
                  </li>
                </ul>
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
                How Does NFT Work? 4 Major Steps:
              </Typography>
            </Box>{" "}
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Now that you have begun to comprehend what an NFT is, you should
              go forward and discover how NFT works in 4 simple steps.
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              <ul>
                <li>
                  Most NFTs are found on the blockchain, a distributed public
                  ledger used to record transactions.
                </li>
                <li>NFTs are unique tokens that hold priceless data.</li>
                <li>
                  They are comparable to other physical forms of art in that
                  they may be purchased and sold since their worth is mostly
                  determined by the market and demand.
                </li>
                <li>
                  Due to the distinctive data of NFTs, it is simple to confirm
                  and authenticate their ownership as well as the transfer of
                  tokens between owners.
                </li>
              </ul>
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
                  Why NFTs Are Vital:
                </Typography>
              </Box>

              <Box mt={4} color="#fff">
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  Cryptocurrencies' seemingly straightforward idea has evolved
                  into non-fungible tokens. Various assets kinds, such as real
                  estate, lending agreements, and works of art, are covered by
                  sophisticated trading and loan systems in today's financial
                  systems. NFTs further this infrastructure's reinvention by
                  enabling digital representations of physical assets.
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    Here you can read about{" "}
                    <Link
                      style={{ color: "white", fontWeight: 700 }}
                      to={"/blog/the-complete-guide-to-nft-smart-contracts/"}
                    >
                      {" "}
                      NFT Smart Contracts{" "}
                    </Link>{" "}
                    . The idea of a unique identity or digital representation of
                    actual objects is neither particularly original. But when
                    these ideas are coupled with the advantages of a smart
                    contract blockchain that is impervious to manipulation, they
                    become a powerful force for change. Efficiency in the market
                    is the main advantage of NFTs. Processes are streamlined and
                    middlemen are eliminated when a physical asset is converted
                    into a digital one.
                    <ul>
                      <li>
                        By eliminating the need for agencies and allowing
                        artists to interact directly with their fans, NFTs
                        represent digital or physical artwork on a blockchain.{" "}
                      </li>
                      <li>They can enhance operational procedures as well.</li>
                      <li>
                        {" "}
                        An NFT for a wine bottle, for instance, would facilitate
                        interactions between various supply chain participants
                        and aid in tracking the bottle's creation, origin, and
                        sale across the whole chain.
                      </li>
                      <li>
                        {" "}
                        One of the clients of consulting company Ernst & Young
                        has previously used this solution.
                      </li>
                    </ul>
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
                    NFT Examples:
                  </Typography>
                </Box>
                <Typography
                  mt={2}
                  variant="body1"
                  textAlign={{ md: "justify", xs: "left" }}
                  fontSize="18px"
                >
                  People are still learning about the NFT industry. Here are a
                  few examples of current NFTs:
                  <Typography
                    mt={2}
                    variant="body1"
                    textAlign={{ md: "justify", xs: "left" }}
                    fontSize="18px"
                  >
                    <ul>
                      <li>An electronic collectible</li>
                      <li>Domain names</li>
                      <li>Games </li>
                      <li>Essays</li>
                      <li>Sneakers in the fashion line </li>
                    </ul>
                  </Typography>
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
                  Uses of NFTs:
                </Typography>
              </Box>
            </Box>
            <Box mt={4} color="#fff">
              <LazyLoadImage
                src={blog25two}
                alt=" uses of nfts"
                width={"100%"}
              />{" "}
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                NFTs are frequently used by those with an interest in
                cryptocurrency trading and art collecting. In addition, it may
                also be used for the following things:
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
                  fontSize="30px"
                  fontWeight="700"
                >
                  Digital objects:
                </Typography>
              </Box>

              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                NFTs are presently the most widely employed in digital content.
                In a creator economy, where artists give up ownership of their
                work to the platforms they use to market it, NFTs help content
                providers become more profitable.
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
                  fontSize="24px"
                  fontWeight="700"
                >
                  Playing Cards:
                </Typography>
              </Box>

              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                Interest in NFTs has grown significantly as video games have
                developed. NFT participants have a lot to gain from them. In an
                online game, you often have the option to purchase goods for
                your character, but that's it. When using NFTs, you may repay
                your investment by selling the products once you're done with
                them.
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
                  fontSize="24px"
                  fontWeight="700"
                >
                  NFT market on Solana:
                </Typography>
              </Box>

              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                A decentralized, open environment is provided by the Solana
                blockchain for the initiation of smart contracts,{" "}
                <Link
                  style={{ color: "white", fontWeight: 700 }}
                  to={"/blog/8-most-popular-DApps-of-2022/"}
                >
                  {" "}
                  {""} dApps
                </Link>{" "}
                , and NFTs. The network was introduced in 2020, but because of
                its enormous capacity and exceptionally cheap transaction costs,
                it quickly became one of the most popular Ethereum alternatives.
                This essay will outline the benefits of using blockchain
                technology to build an NFT marketplace on Solana and the
                associated costs.
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
                  fontSize="24px"
                  fontWeight="700"
                >
                  How to purchase NFTs:
                </Typography>
              </Box>

              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                You might want to consider purchasing NFTs now that you are
                aware of what they are used for and their unique benefits over
                other cryptocurrencies. If that's the case, you must first
                obtain a few necessary items:
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                <ul>
                  <li>
                    To keep your NFTs and cryptocurrencies secure, you will need
                    a digital wallet.
                  </li>
                  <li>
                    Afterward, you must buy some cryptocurrency, perhaps Ether,
                    depending on the types of payment your NFT provider takes.
                    To buy cryptocurrencies, you may do it using services like
                    OpenSea, Coinbase, Kraken, PayPal, and others.
                  </li>
                  <li>
                    Once you've completed a transaction and removed your bitcoin
                    from the exchange, you may move it to your wallet.
                  </li>
                  <li>
                    A lot of exchanges charge small transaction fees for buying
                    cryptocurrencies, so keep that in mind.
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
                  Summary:
                </Typography>
              </Box>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
              >
                A non-fungible token (NFT) is one, undivided cryptocurrency
                token. An NFT cannot be changed for another NFT, nor can it be
                divided into smaller pieces and utilized separately. Original
                artwork and blockchain-integrated collectible games like
                CryptoKitties are just a few choices available for generating
                and selling digital goods on NFTs. NFTs are helpful for
                demonstrating the rarity and provenance of expensive items, both
                digitally and physically. Using the ERC-721 token standard,
                non-fungible tokens are primarily developed on Ethereum.
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
                  Peoples Also Ask:
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

export default Blog25;

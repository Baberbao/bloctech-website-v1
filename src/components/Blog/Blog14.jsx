import React, { useEffect } from "react";
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
import blog14 from "./assets/blog14img.png";
import blog14two from "./assets/blog14imgtwo.png";

import { Helmet } from "react-helmet-async";
import bg from "./assets/bgf.png";
import author from "./assets/auth1.png";
import BlogSlider from "./BlogSlider";

const structureData = () => {
  let data = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.bloctechsolutions.com/blog/the-complete-guide-to-nft-smart-contracts/",
    },
    headline: "The Complete Guide to NFT Smart Contracts",
    description: `Learn what makes NFT smart contracts "smart, " how they function, what characteristics they possess, and examples of both current and future applications for smart contracts.`,
    image: "",
    author: {
      "@type": "",
      name: "Shahryar",
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
          name: "What is a Smart Contract NFT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Smart contracts that issue ownership and reassign it when transferred or sold are used to create NFTs. Smart contracts serve as a tool to carry out a sale agreement on a fundamental level.",
          },
        },
        {
          "@type": "Question",
          name: "Why do you need a smart contract for NFT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can confirm, much like a vending machine, that you have insured enough money to pay for your Twix without the use of a middleman or a centralized authority.",
          },
        },
        {
          "@type": "Question",
          name: "How to use smart contract NFT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Making an NFT is referred to as minting. In essence, you are building the smart contract's underlying code. The NFT's attributes are determined by the smart contract code, which adds them to the appropriate blockchain where the particular NFT is written.",
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
    summary: " Q.1 What is a Smart Contract NFT?",
    details:
      "Smart contracts that issue ownership and reassign it when transferred or sold are used to create NFTs. Smart contracts serve as a tool to carry out a sale agreement on a fundamental level.",
  },
  {
    summary: "Q.2 Why do you need a smart contract for NFT?",
    details:
      "They can confirm, much like a vending machine, that you have insured enough money to pay for your Twix without the use of a middleman or a centralized authority.",
  },
  {
    summary:
      "Q.3 How to use smart contract NFT?Q.3 How to use smart contract NFT?",
    details:
      " Making an NFT is referred to as minting. In essence, you are building the smart contract's underlying code. The NFT's attributes are determined by the smart contract code, which adds them to the appropriate blockchain where the particular NFT is written.",
  },
];
function Blog14() {
  const [expanded, setExpanded] = React.useState(false);
  // const check = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "The Complete Guide to NFT Smart Contracts";
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
        <title>{title}</title>
        <meta
          name="description"
          content="
                    Discus NFT Smart Contracts. organizations knows the value of Smart contracts and we are going to educate about how they can help you with NFTs"
        />
        <meta
          name="title"
          content="The Complete Guide to NFT Smart Contracts"
        />
        <meta charset="utf-8" />
        <meta name="keywords" content="NFT smart contracts, smart contracts" />

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
          src={blog14}
          alt="NFT Smart Contracts"
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
              OCT 5 2022
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
            The Complete Guide to NFT Smart Contracts
          </Box>

          {/* <Box
            my={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="#fff"
          >
            <Typography
              variant="body1"  textAlign={{md:"justify", xs: 'left'}}
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
              variant="body1"  textAlign={{md:"justify", xs: 'left'}}
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
                Principal Lessons
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              <ul>
                <li>
                  {" "}
                  In a wide range of blockchain use cases, smart contracts are
                  crucial.
                </li>
                <li>
                  The importance of NFT smart contracts in particular is rising
                  as interest in the metaverse and Web3 rises.
                </li>
                <li>
                  Here is a brief introduction to NFT smart contracts, their
                  operation, and their potential applications.
                </li>
              </ul>
            </Typography>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Learn what makes NFT smart contracts "smart," how they function,
              what characteristics they possess, and examples of both current
              and future applications for smart contracts.
              <br />
              Did you know that NFTs are controlled by smart contracts and exist
              on the blockchain? Whenever you purchase or sell an NFT, you
              almost certainly use smart contracts to carry out the transaction.
              <br />
              Learn more about this dependable software program and how it may
              be used to verify ownership, stop counterfeiting, and other
              things.
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
                What is a smart contract?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A smart contract is a piece of software that is kept on a
              blockchain and that, when certain criteria are satisfied,
              automatically enacts certain activities. In a decentralized
              system, as we see in
              {""}{" "}
              <Link
                style={{ color: "white", fontWeight: "bold" }}
                to="/blog/what-exactly-is-a-dao-Its-working-and-benefits/"
              >
                decentralized autonomous organizations
              </Link>
              , two parties can communicate by using a smart contract in place
              of the usual middleman to conduct transactions.
              {""}{" "}
              <Link
                style={{ color: "white", fontWeight: "bold" }}
                to="/blog/understanding-the-working-and-benefits-of-smart-contract/"
              >
                Smart contracts
              </Link>{" "}
              {""}
              have been utilized by blockchains, such as Bitcoin and Ethereum,
              to speed up transactions and automate procedures.
              <br />
              What defines "smart contracts"? These lines of code streamline
              operations and eliminate human mistakes, thereby cutting the time
              and expense of conventional contracts. In addition to mitigating
              human error, smart contracts provide additional advantages that
              are crucial for the blockchain sector.
            </Typography>
          </Box>
          {/* <Container maxWidth="md"> */}

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
                Core Benefits of smart contracts:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              <ul>
                <li>
                  They make it possible for parties to engage without knowing or
                  needing to trust one another by facilitating transactions in a
                  trustless system.
                </li>
                <li>
                  They reduce expenses and increase speed by eliminating the
                  need for middlemen and paperwork.
                </li>

                <li>
                  They are more secure since they are immutable and cannot be
                  altered after deployment.
                </li>
                <li>
                  When smart contracts are used on a public blockchain, everyone
                  can see them and they are transparent.
                </li>
                <li>
                  They are adaptable for a variety of purposes since they may be
                  customized before use.
                </li>
                <li>
                  They only carry out the tasks that have been designed for them
                  because they are deterministic.
                </li>
                <li>
                  Human mistake is not a possibility because they are automated.
                </li>
              </ul>
              <br />
              Despite this, unlike conventional contracts, smart contracts are
              not actually legally binding. Thus, while these lines of code aid
              in executing results on a blockchain, they are unable to enforce
              off-chain agreements.
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
                Utilizing Smart Contracts to Create NFTs
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Through a process called minting, which entails transforming
              pictures, movies, sound snippets, and other digital media into
              cryptographic assets on a blockchain, NFTs are produced. In
              essence, you configure the smart contract code that determines the
              characteristics of your crypto assets when you mint NFTs.
              <br />
              For smart contracts, a number of standards have been designed to
              guarantee that NFTs can readily communicate with applications. For
              instance, numerous smart contract blockchains like TRON, EOS, and
              Tezos provide NFT creation tools. NFTs created on various
              platforms could not be able to trade on the same NFT markets if
              there is no agreed-upon standard for how smart contracts, and
              eventually NFTs, should be constructed.
              <br />
              Here you can Read About our
              {""}{" "}
              <Link
                style={{ color: "white", fontWeight: "bold" }}
                to="/smart-contract-development-services/"
              >
                Smart Contract Services.
              </Link>
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
                Standards for constructing NFTs using smart contracts
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              As the first non-fungible token standard on Ethereum, ERC-721 is
              one of the most popular standards among those accessible in the
              crypto world. This standard is widely utilized by many to produce
              and launch NFTs because it was a pioneer in the NFT minting
              industry. Other standards may not enforce the rule that all tokens
              must be non-fungible and have distinct token IDs, which is one
              that ERC-721 does.
              <br />
              In addition to ERC-721, there is another standard that is mostly
              utilized in the NFT gaming industry. Both fungible assets, such as
              in-game currency, and non-fungible assets, such as limited edition
              skins, are supported under the ERC-1155 standard.
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
                The metaverse, NFTs, and smart contracts
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The metaverse is a 3D digital environment that connects the real,
              virtual, and financial worlds. The metaverse would include NFTs,
              blockchain games, and cryptocurrency as we currently understand
              and utilize it.
              <br />
              Given that smart contracts constitute the backbone of NFTs, it
              should come as no surprise that they are an essential tool for
              creating the metaverse. For instance, smart contracts may be able
              to sustain the existing metaverse's NFT art and gaming industries.
              Smart contracts may also be used to ease monetary transactions,
              removing the need for a middleman and lowering the friction of
              interactions on the metaverse.
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
                Smart Contract Use Cases in other NFTs
              </Typography>
            </Box>
            <Box
              component="img"
              src={blog14two}
              alt="NFT Smart Contracts"
              width="100%"
            />
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Verifying legitimacy and enforcing ownership
              <br />
              Data authentication and ownership enforcement are two benefits of
              using smart contracts to create NFTs. Anybody may access
              information regarding ownership and creation time if these NFTs
              are hosted on open blockchains.
              <br />
              In the case of digital degrees, educational institutions may
              provide distinctive NFTs to students on open blockchains.
              Employers wishing to recruit students can use the applicable block
              explorer to conduct a search to confirm the validity of a
              candidate's degree. Anyone may access the public information
              stored on the blockchain using this search engine. NFT license can
              also be included in this. The next NFT token holder same as the
              blockchain token may quickly generate a record of the transferred
              rights to an image or music file. Anyone may examine the ownership
              as well as the privileges granted to purchasers
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
                Preventing Infringement and fraud
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Smart contracts can also aid in the fight against plagiarism and
              piracy leveraging NFTs. Smart contracts can automatically verify
              an NFT or token's creation time and location since they are built
              on the blockchain, specifically, the first logged wallet address.
              Additionally, smart contracts can track the ownership of creative
              works, thwart phony certifications, and aid in the eradication of
              counterfeit goods. For instance, if such items do not satisfy
              particular requirements, they may be automatically filtered away.
              <br />
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
                Facilitating commercial transactions
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The speed and safety of company transactions may both be enhanced
              using smart contracts
              <br />
              When two parties sign a smart contract, the previously agreed upon
              outcome is guaranteed to be enforced after the conditions have
              been satisfied. The elimination of trust-related delays makes the
              transaction process more effective. A smart contract can comfort
              parties that may not trust one another by executing the
              transaction as soon as the conditions of the contract are
              satisfied.
              <br />
              Think about the home-buying procedure. A smart contract may
              simultaneously disburse payments to the seller and transfer
              ownership to the buyer as soon as the buyer has satisfied all of
              the conditions, including successful down payment and successful
              credit checks. The transaction will also be documented on the
              blockchain, and it may include the transfer of a title deed.
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
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Since they can be tailored, smart contracts can be used in
              practically any business. The significance of smart contracts is
              anticipated to increase with increased NFT adoption and the growth
              of the metaverse since they serve as the foundation for one of the
              hottest classes of digital assets available today.
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

export default Blog14;

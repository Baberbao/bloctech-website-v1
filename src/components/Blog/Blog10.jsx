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

import blog8img from "./assets/blog10two.png";
import blog8 from "./assets/blog10.png";
import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "What distinguishing qualities does a crypto wallet app have?",
    details: (
      <div>
        All crypto wallets need to include the following essential features,
        among others:
        <ul>
          <li>Customer identification</li>
          <li>Economic gateways</li>
          <li>QR-scanner</li>
          <li>Multiple currency capability</li>
          <li>Amounts of conversion</li>
        </ul>
      </div>
    ),
    list: true,
  },
  {
    summary: "Can I Make My Own CryptoWallet?",
    details:
      "Businesses may create their own cryptocurrency wallets and combine them with payment and other business solutions. A popular type of blockchain wallet is a mobile cryptocurrency wallet.",
  },
];

const Blog10 = () => {
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
          "https://www.bloctechsolutions.com/defining-crypto-wallet-and-the-processes-of-crypto-wallet-development/",
      },
      headline:
        "Defining Crypto wallet and the Processes of crypto wallet development.",
      description:
        "A crypto wallet is an application that serves as your crypto wallet app. Because you utilize it in a manner similar to putting cash and cards in a wallet, it is called a wallet. Rather than retaining these tangible assets, it maintains the passkeys you need to sign for your bitcoin transactions and offers the interface that enables you to access your money.",
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
            name: "Can I Make My Own CryptoWallet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Businesses may create their own cryptocurrency wallets and combine them with payment and other business solutions. A popular type of blockchain wallet is a mobile cryptocurrency wallet.",
            },
          },
          {
            "@type": "Question",
            name: "What distinguishing qualities does a crypto wallet app have?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All crypto wallets need to include the following essential features, among others: 1- Customer identification 2- Economic gateways 3- QR-scanner 4- Multiple currency capability 5 -Amounts of conversion 6- Instantaneous logoff",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title =
    "Defining Crypto wallet and the Processes of crypto wallet development.";
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
        <title>Complete guide on Crypto wallet and Development Processes</title>
        <meta
          name="description"
          content="
          here you know about crypto wallet and its usage in cryptocurrency. We offer complete and secure crypto wallet development services"
        />
        <meta
          name="title"
          content="Complete guide on Crypto wallet and Development Processes"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="crypto wallet, crypto wallet development, cryptocurrency wallet"
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
          src={blog8}
          alt="crypto wallet development"
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
              Iqra Kanwal
            </Typography>
            <Typography
              color="white"
              fontSize="12px"
              fontStyle="italic"
              fontWeight="bold"
            >
              {" "}
              SEP 24th 2022
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
            Defining Crypto wallet and the Processes of crypto wallet
            development
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
                Introduction to crypto wallet:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              A crypto wallet is an application that serves as your crypto
              wallet app. Because you utilize it in a manner similar to putting
              cash and cards in a wallet, it is called a wallet. Rather than
              retaining these tangible assets, it maintains the passkeys you
              need to sign for your bitcoin transactions and offers the
              interface that enables you to access your money.
              <br />
              The blockchain is available to everyone thanks to modern crypto
              wallet app development. Sending bitcoin was a labor-intensive
              manual process that required lengthy keys when it was initially
              launched. Today, the crypto wallet app does most of it for you.
              <br />
              The first wallet was created by Satoshi Nakamoto, who created
              Bitcoin. The second wallet was Hal Finney's; he interacted with
              Nakamoto and is said to have been the first to use the Bitcoin
              client software wallet. The Bitcoin excitement started when
              Nakamoto handed him 10 bitcoins as a test.
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
                Why Is Crypto Wallet Development Needed?
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              As a result of the extraordinary success of cryptocurrencies like
              Bitcoin and Ethereum, more and more individuals are beginning to
              invest in cryptocurrencies. In actuality, a lot of brand-new coins
              occasionally enter the industry.
              <br />
              While certain cryptocurrencies, such as Bitcoin and Ethereum, have
              developed their own cryptocurrency wallets and crypto wallet apps,
              investors who want to buy into a variety of cryptocurrencies
              search for crypto wallet development that is compatible with a
              wide range of cryptocurrencies.
              <br />
              In addition, there are a variety of commercial uses for
              cryptocurrency wallets. Companies can create their own
              cryptocurrency wallet apps and incorporate them with payment and
              other business solutions.
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
                Process of crypto wallet development:
              </Typography>
              <Box my={2}>
                <img
                  src={blog8img}
                  width="100%"
                  alt="process of crypto wallet development"
                />
              </Box>
            </Box>

            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              When developing a crypto wallet, we can use the following
              languages, frameworks, and blockchain protocols.
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
                languages:
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                textAlign={{ md: "justify", xs: "left" }}
                fontSize="18px"
                fontWeight="700"
              >
                JavaScript,TypeScript,Solidity, Node.js
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
                Frameworks:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
              fontWeight="700"
            >
              REACT
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
                The following steps are commonly included in the crypto wallet
                development process:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
              fontWeight="700"
            >
              <ul>
                <li>Technological and commercial analysis</li>
                <li>Architectural planning</li>
                <li>Low-fidelity and high-fidelity wallet interface designs</li>
                <li>Creation of smart contracts for wallets</li>
                <li>Construction of backend services</li>
                <li>Frontend development</li>
                <li>Deployment</li>
              </ul>
              Now, we will briefly describe the process of crypto wallet
              development.
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
                Technological and commercial analysis:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              An extensive examination of the technical and commercial elements
              must be done before any crypto wallet development can begin. For
              developers to comprehend the function of the wallet, its
              relationship to the blockchain project, and the technological
              prerequisites for its fulfillment, this study is required.
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
                Architectural planning:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The architecture of the crypto wallet app is built and coordinated
              with customers once the business and technical requirements of the
              crypto wallet have been identified. This stage establishes the
              connection between the wallet's frontend and backend, how the
              wallet is created, how data is saved and retrieved, and how
              transactions are carried out. All the next phases of crypto wallet
              app development are guided by the architecture.
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
                Low-fidelity and high-fidelity wallet interface designs:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Fidelity designs are used to establish how the wallet will appear
              and function while the architecture describes the many components
              and their interactions. Then, using a basic sketch of the UI/UX
              features, we design a low-fidelity prototype to indicate how the
              wallet would appear. Our high-fidelity design is produced after
              your approval.
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
                Creation of smart contracts for wallets:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Wallet smart contracts development may be necessary, depending on
              the project requirements. Smart contracts are used to control key
              triggering events and integrate new wallet features including
              bundle transactions, transfer limitations, account recovery
              procedures, and more. Prior to implementation, all necessary smart
              contracts for the wallet are thoroughly examined and tested.
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
                Construction of backend services:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Backend services are also developed as needed. These are essential
              for both the front end's interactions with the blockchain and the
              execution of any smart contracts.
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
                Frontend development:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The frontend is designed prior to deployment, resulting in the
              wallet app's final iteration. After that, the app is examined for
              any errors or defects that could have happened.
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
                Deployment:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The wallet is deployed and made accessible to users when the
              aforementioned processes have been finished
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
                Types of crypto wallets:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Numerous blockchain wallets are available. There are other
              desktops, hardware, and even paper wallets in addition to those
              that are listed here. The most widely used forms of blockchain
              wallets are as follows:
              <ul>
                <li>Mobile wallets </li>
                <li>Web wallets </li>
                <li>Smart wallets</li>
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
                Mobile wallets:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The information from credit and debit cards is kept in a virtual
              wallet called a mobile wallet. Users can use mobile wallets at
              businesses that are listed with the mobile wallet service provider
              as a simple method to make in-store payments. You may set up this
              kind of wallet on a mobile device. Mobile wallets are incredibly
              user-friendly and ideal for supporting on-the-go transactions.
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
                Web wallets:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Cryptocurrencies and other digital assets can be kept in e-wallets
              by users. With Blockchain Wallet, users may control their
              cryptocurrency balances across a number of different
              cryptocurrencies, including the widely-known Bitcoin and Ether as
              well as stellar, Tether, and Paxos Standard. Users must log in to
              these online interfaces in order to perform transactions using
              these wallets.
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
                Smart wallets:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The advantages of smart contract wallets over traditional bitcoin
              wallets are numerous. These wallets can provide their consumers
              with more recovery and security capabilities by employing smart
              contracts.
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
                Final thoughts about crypto wallet app development:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              The crypto economy cannot function without crypto wallets. As a
              result, developing crypto wallet apps presents several
              opportunities for forward-thinking businesses. If you're
              interested in developing a crypto wallet for your company, get in
              touch with a crypto wallet app development partner to find out
              more details.
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
                        textAlign={value.list ? "left" : "center"}
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

export default Blog10;

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import c1 from "./assets/1.png";
import c2 from "./assets/2.png";
import c3 from "./assets/3.png";
import c4 from "./assets/4.png";
import c5 from "./assets/5.png";
import c6 from "./assets/6.png";

import key1 from "./assets/key1.png";
import key2 from "./assets/key2.png";
import key3 from "./assets/key3.png";
import key4 from "./assets/key4.png";
import keybg from "./assets/keybg.jpg";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";
import bg5 from "./assets/bg5.png";

import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import i4 from "./assets/i4.png";
import i5 from "./assets/i5.png";
import main from "./assets/main.png";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./my.css";
import Tokenani from "./Tokenani";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    img: c1,
    title: "Detailed",
    ul: (
      <ul>
        <li>
          Comply entirely with the concept of ERC20 and compatible worldwide
          with each ERC20 wallet.
        </li>
        <li>Has a name, a symbol, and a number of decimals.</li>
      </ul>
    ),
  },

  {
    img: c2,
    title: "Burnable",
    ul: (
      <ul>
        <li>Enable us to burn our tokens.</li>
        <li>Can reduce the circulating stock by burning any of the tokens.</li>
      </ul>
    ),
  },
  {
    img: c3,
    title: "Mintable",
    ul: (
      <ul>
        <li>Produce tokens via minting.</li>
        <li>Only the owner of the token can mint.</li>
        <li>Can also disable minting.</li>
      </ul>
    ),
  },
  {
    img: c4,
    title: "Pausable",
    ul: (
      <ul>
        <li>Can delay your token movement.</li>
        <li>
          Useful to prohibit trading until all token transactions have been
          unfrozen.
        </li>
      </ul>
    ),
  },
  {
    img: c5,
    title: "Access to ownership",
    ul: (
      <ul>
        <li>Get complete ownership over your token.</li>
        <li>Owners can also get to mint new tokens and manage them.</li>
      </ul>
    ),
  },
  {
    img: c6,
    title: "Capped",
    ul: (
      <ul>
        <li>Cannot create more tokens than the token limit specified.</li>
        <li>Ensures that people don't create more than declared tokens.</li>
      </ul>
    ),
  },
];
const mapData = [
  {
    title: "Frictionless Market",
    bg: 'linear-gradient(180deg, #F31783 0%, #F28E69 100%)',
    icon: i1,
    ul: (
      <ul>
        <li>Generate verified represention on the blockchain.</li>
        <li>
          Easily traded or exchanged for any other assets without any
          intermediaries on a global scale.
        </li>
      </ul>
    ),
  },
  {
    title: "Deep integrations",
    bg: 'linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)',
    icon: i2,
    ul: (
      <ul>
        <li>
          With web ushered into humanity get the ability to integrate different
          services to create meaningful experiences for users.
        </li>
        <li>
          Integrations can be done in a decentralized fashion without the pain
          of setting standards and creating dedicated channels.{" "}
        </li>
      </ul>
    ),
  },
  {
    title: "Earn",
    bg: 'linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)',
    icon: i3,
    ul: (
      <ul>
        <li>
          Making waves in the financial world through new concepts such as
          Decentralised Finance (Defi), Initial Coin Offering (ICO), and
          Security Token Offering (STO).
        </li>
        <li>
          Created a new asset class, opening doors for a very active trading
          ecosystem.
        </li>
      </ul>
    ),
  },
  {
    title: "Disrupt",
    bg: 'linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)',
    icon: i4,
    ul: (
      <ul>
        <li>
          Paves the way to new business models, doing away with the
          intermediates and middlemen, who add no value to the transaction.
        </li>
        <li>
          Disrupt the incumbents in multiple industries, while creating a more
          decentralized world.
        </li>
      </ul>
    ),
  },
  {
    title: "Pseudo-Confidentiality",
    bg: 'linear-gradient(180deg, #67FE1A 0%, #139950 100%)',
    icon: i5,
    ul: (
      <ul>
        <li>
          Does not collect or store any personal information about our users.
        </li>
        <li>
          Ensure you are leveraging the best in class privacy and security
          standards for your blockchain transactions.
        </li>
      </ul>
    ),
  },
];

const data2 = [
  {
    img: key1,
    heading: "Technical support",
    ul: (
      <ul>
        <li>supports clients in the post-development phase too</li>
        <li>provide timely technical support when the need arises.</li>
      </ul>
    ),
  },
  {
    img: key2,
    heading: "Skillful blockchain developers",
    ul: (
      <ul>
        <li>
          execute projects to perfection with our 50+ skillful blockchain
          developers
        </li>
        <li>ensure best market practices to minimize project cost</li>
      </ul>
    ),
  },
  {
    img: key3,
    heading: "Multiple token standards",
    ul: (
      <ul>
        <li>
          execute token development on multiple token standards like ERC20,
          ERC1400, ERC721, ERC721x, ERC223, ERC777, ERC1155, BEP20, BEP721,
          BEP1155, TRC10, TRC20, TRC721, etc.
        </li>
      </ul>
    ),
  },
  {
    img: key4,
    heading: "Increased security",
    ul: (
      <ul>
        <li>incorporation multiple security protocols and auditing measures</li>
        <li>ensure high token’s quality and high value</li>
      </ul>
    ),
  },
];

export default ({ openN, setOpenN }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const matches = useMediaQuery("(max-width:700px)");
  const matches1 = useMediaQuery("(max-width: 500px");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.bloctechsolutions.com/token-development-services/",
      },
      headline: "Token Development Services",
      description:
        "BlocTech Solutions is the leading token development company to create token on desired blockchain network in a short span of time. We have certified blockchain professionals who can develop custom tokens with tamper-proof security practices that safe-guard tokens from hacks and attacks.",
      image: "",
      author: {
        "@type": "",
        name: "",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };

  return (
    <Box
      pt={{ sm: "95px", xs: "79px" }}
      sx={{ overflowX: "hidden", backgroundColor: "#120319" }}
    >
      <Helmet>
        <title>Token Development Services by BlocTech Solutions</title>
        <meta
          name="description"
          content="BlocTech brings Token development services, our developers make custom tokens on desired blockchain network. They specifically work on securing the tokens from cyber attacks."
        />
        <meta
          name="title"
          content="Token Development Services by BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Token development services, token developers"
        />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          backgroundImage: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
          // backgroundPosition: { sm: "center", xs: "left" },
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // // backgroundPosition: { sm: "top center", xs: "left" },
          // py: { sm: 15, xs: "100px" },
        }}
      >
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              py={5}
              display="flex"
              alignItems="center"
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Box
                    component="h1"
                    // pt={{ xs: 0, md: 10 }}
                    fontSize={{ xs: "25px", sm: "44px" }}
                    fontWeight={700}
                    letterSpacing="0.2px"
                    lineHeight={{ xs: "auto", sm: "56px" }}
                    color="#fff"
                    sx={{
                      background:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    Token Development Services
                  </Box>

                  <Box
                    component="p"
                    m="auto"
                    my={2}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#fff"
                    textAlign="justify"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    width={{ xs: "90%", md: "100%" }}
                  >
                    BlocTech Solutions is the leading token development company
                    to create token on desired blockchain network in a short
                    span of time. We have certified blockchain professionals who
                    can develop custom tokens with tamper-proof security
                    practices that safe-guard tokens from hacks and attacks.
                  </Box>
                  <Box mt={3}>
                    <Button
                      onClick={() => setOpenN(true)}
                      sx={{
                        // width: "220px",
                        // height: "50px",
                        // backgroundColor: "white",
                        background:
                          "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                        border: "1px solid #3B3F6D",
                        borderRadius: "0px",
                        fontSize: matches ? "12px" : "14px",
                        textTransform: "capitalize",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        letterSpacing: "0.3px",
                        "&:hover": {
                          backgroundColor: "white",

                          border: "1px solid #3B3F6D",
                        },
                        py: 2,
                        px: 4,
                      }}
                    >
                      Get Token Development Services Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
              {/*  */}
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  textAlign="center"
                // display="flex"
                // justifyContent={{ md: "flex-end", xs: "center" }}
                >
                  {/* <Tokenani /> */}
                  {/* <img src={bg} width={matches1 ? "100%" : "80%"} /> */}
                  <LazyLoadImage
                    alt="Private Blockchain Development"
                    src={main} // use normal <img> attributes as props
                    width={matches1 ? "100%" : "80%"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          component="h2"
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          mt="120px"
        >
          <Box
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.1px"
            color="white"
            lineHeight={{ xs: "auto", sm: "40px" }}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            TOKEN DEVELOPMENT SERVICES
          </Box>
          <Box
            component="p"
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="white"
            lineHeight={{ xs: "auto", sm: "22px" }}
            textAlign="center"
            py={3}
          >
            We provide premium token development services for startups and
            enterprises to develop scalable tokens with an extraordinary
            security implementation to regulate, track and trace every token
            transaction. Here are some of the core services that we offer for
            crypto seekers all over the world.
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box
          component="h2"
          className="linbarcont"
          pt={{ xs: 0, md: 7 }}
          m="auto"
          my={2}
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          color="white"
          lineHeight={{ xs: "auto", sm: "40px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Tokenized Assets: the Essence
        </Box>
        <Box
          component="p"
          pt={{ xs: 0, md: 2 }}
          m="auto"
          my={2}
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          lineHeight={{ xs: "auto", sm: "22px" }}
        >
          Tokenized asset offering paves the way for financial markets to move
          into blockchain through automated KYC/AML, investor verification and a
          fully transparent voting rights.
        </Box>

        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Non-Fungible Token (NFT) Development
        </Typography>
        <ul className="myUl">
          <li>Build NFT around usability</li>
          <li>ensure NFT’s security, functionality, and uniqueness</li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          DeFi Token Development
        </Typography>
        <ul className="myUl">
          <li>create DeFi tokens as end-user entities</li>
          <li>
            build DeFi token to improve Defi functions such as lending, staking,
            trading and risk management{" "}
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Ethereum Token Development
        </Typography>
        <ul className="myUl">
          <li>
            create Ethereum Tokens with custom smart contract creation and
            auditing
          </li>
          <li>
            make sure various Ethereum Standards like ERC-20, ERC-223, ERC-777,
            ERC-1400, ERC-827, ERC-1155 etc.
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Tron Token Development
        </Typography>
        <ul className="myUl">
          <li>can develop and launch you own token on the TRON blockchain</li>
          <li>
            use the platform of TRC-10, TRC-20, and TRC-721 standards based on
            your requirements.
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          BEP20 Token Development
        </Typography>
        <ul className="myUl">
          <li>
            create BEP tokens built on Binance Smart Chain to raise funds via
            ICO
          </li>
          <li>
            enable fast transaction speeds and is extremely scalable with BEP 20
            Tokens{" "}
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Solana Token Development
        </Typography>
        <ul className="myUl">
          <li>
            develop unique tokens with high-end functionality based on your
            business needs
          </li>
          <li>
            provide token creation services to developcoins pioneers on Solana
            and other blockchain networks with custom smart contract
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Polygon Token Development
        </Typography>
        <ul className="myUl">
          <li>
            offer best-in-class crypto token development services on Polygon
            blockchain network
          </li>
          <li>ensure security and efficiency of polygon toke</li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Avalanche Token Development Company
        </Typography>
        <ul className="myUl">
          <li>
            offer the smart contract-able decentralized token on Avalanche(AVAX)
            Blockchain Platform
          </li>
          <li>
            guarantee high transaction speed, low costs, and eco-friendliness
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Mintable Token Development
        </Typography>
        <ul className="myUl">
          <li>create mintable ERC20 tokens with a non-fixed total supply</li>
          <li>
            pave your way where you’re allowed to “mint” more tokens whenever
            you want
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Decentralized Non- Fungible Token (DNFT) Development
        </Typography>
        <ul className="myUl">
          <li>
            create decentralized Non-fungible tokens on the top blockchain
            platforms
          </li>
          <li>
            provide uniqueness and non-interchangeability to prevent replacement
            by any other similar tokens
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Semi Fungible Token (SFT) Development
        </Typography>
        <ul className="myUl">
          <li>
            develop SFT Tokens with launch of ERC-1155 tokens using the Ethereum
            network{" "}
          </li>
          <li>
            ensure security, tradability, high efficiency, and immunity to
            hacking
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Token Generator Platform Development
        </Typography>
        <ul className="myUl">
          <li>develop your exclusive token generator platform </li>
          <li>
            provide crypto entrepreneurs a reliable platform that can create and
            launch their tokens in the crypto market
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Token Wallet Development
        </Typography>
        <ul className="myUl">
          <li>provide state-of-the-art token wallet development solutions</li>
          <li>
            develop crypto token wallet to enable users to execute transactions
            easily
          </li>
        </ul>

        <Box
          component="h2"
          className="linbarcont"
          pt={{ xs: 0, md: 7 }}
          m="auto"
          my={2}
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          lineHeight={{ xs: "auto", sm: "40px" }}
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Key Capabilities Tokenized Assets Provide
        </Box>
        <Box
          component="p"
          pt={{ xs: 0, md: 2 }}
          m="auto"
          my={2}
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
        >
          Asset-backed tokens and underlying smart contracts provide unique
          capabilities to meet specific asset management needs, improve asset
          liquidity, and streamline asset management.
        </Box>
      </Container>
      <Container>
        <Grid
          container
          spacing={3}
          py="60px"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {mapData.map(({ title, ul, bg, icon }) => (
            <Grid item md={4} sm={6} xs={12} mt="60px">
              <Box position={"relative"}>
                <img
                  src={icon}
                  className="imgspin"
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    marginTop: "-65px",
                  }}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  background: bg,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: "100%",
                  pb: { sm: "40px", xs: "20px" },
                  pt: { sm: "80px", xs: "40px" },
                  px: "20px",
                }}
              >
                <Box
                  component="h3"
                  pb="30px"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "23px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {title}
                </Box>
                <Box className="myUl">{ul}</Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        {/* ////////////////////////////////////////////////////////////////////// */}
        <Box
          component="h2"
          className="linbarcont"
          mt="50px"
          mb="50px"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Features of Token Development
        </Box>

        {/* /////////////////////  Stepers  ////////////////////////////////////// */}
        <Box>
          {data.map(({ img, title, ul }, index) => (
            <Grid container mb={3}>
              <Grid item sm={4} xs={12} minHeight="295px">
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"center"}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                    p: "80px",
                    height: "100%",
                  }}
                >
                  <img src={img} alt="icons" />
                </Box>
              </Grid>
              <Grid item sm={8} xs={12} minHeight="295px">
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={{ sm: "start", xs: "center" }}
                  sx={{
                    background: "#240035",
                    height: "100%",
                    px: { sm: "30px", xs: "10px" },
                  }}
                >
                  <Typography
                    variant={"h3"}
                    sx={{
                      fontWeight: 700,
                      fontSize: { sm: "28px", xs: "20px" },
                      color: "white",
                      textAlign: { sm: "start", xs: "center" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Box className="myUl">{ul}</Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
        {/* //////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////// */}
        <Grid
          container
          // spacing={5}
          style={{
            boxShadow: "0 2px 20px 0 rgb(0 0 0 / 10%)",
            padding: "0px 50px",
            backgroundColor: "#411F78",
          }}
        >
          <Grid item xs={12} md={8}>
            <Box
              component="h2"
              className="linbarcontnew"
              pt={{ xs: 0, md: 7 }}
              m="auto"
              my={2}
              fontSize={{ xs: "20px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              color="white"
              lineHeight={{ xs: "auto", sm: "40px" }}
            >
              Get Expert Help on Asset Tokenization
            </Box>
            <Box
              component="p"
              sx={{
                alignItem: "center",
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
                textAlign: "initial",
              }}
              fontSize={{ xs: "13px", sm: "16px" }}
              fontWeight={400}
              letterSpacing="0.3px"
              color="white"
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              BlocTech Solutions’s team is ready to tokenize your assets to
              enhance their liquidity and tradability, enable fast, secure,
              cost-effective and fully traceable transfer of asset ownership.
            </Box>
            <Button
              onClick={() => setOpenN(true)}
              sx={{
                textAlign: "center",
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                borderRadius: "0px",
                fontSize: matches ? "12px" : "14px",
                textTransform: "capitalize",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "0.3px",
                my: 3,
                py: 1,
                px: 2,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#3B3F6D",
                  border: "1px solid #3B3F6D",
                },
              }}
            >
              TOKENIZE MY ASSETS
            </Button>
          </Grid>
        </Grid>

        {/* /////////////////////////////////////////////////////////////////// */}

        <Grid
          my="50px"
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data2.map(({ img, heading, ul }) => (
            <Grid item xs={12} sm={6} md={4}>
              <Box
                height="100%"
                sx={{
                  background: '#240035',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  py: "30px",
                  px: "20px",
                }}
              >
                <Stack direction={"row"} justifyContent="space-evenly">
                  <Box textAlign="center">
                    <img src={img} width="68px" alt="icons" />
                  </Box>{" "}
                  <Box
                    component="h3"
                    mt="20px"
                    fontSize={{ xs: "14px", sm: "18px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="white"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="center"
                  >
                    {heading}
                  </Box>
                </Stack>
                <Box
                  className="myUl"
                  mt="30px"
                  color="white"
                  sx={{ fontSize: { sm: "12px", xs: "10px" } }}
                >
                  {ul}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        py={2}
        sx={{
          display: "flex",
          alignitems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setOpenN(true)}
          sx={{
            width: "220px",
            height: "50px",
            // backgroundColor: "white",
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            border: "1px solid #3B3F6D",
            borderRadius: "0px",
            fontSize: matches ? "12px" : "14px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            fontWeight: 700,
            letterSpacing: "0.3px",
            "&:hover": {
              backgroundColor: "white",

              border: "1px solid #3B3F6D",
            },
          }}
        >
          Get a Consultation
        </Button>
      </Box>
    </Box>
  );
};

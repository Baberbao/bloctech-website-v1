import { Box, Container, Grid, useMediaQuery, Typography } from "@mui/material";
import { useEffect } from "react";
import Button from "@mui/material/Button";

import Platform from "./Platform/platform";
import Tools from "./Tools/Tools.jsx";
import Languages from "./Languages/Languages.jsx";
import Frontend from "./Frontend/Frontend.jsx";

// images
import bg from "./assests/bg.png";

import bg1 from "./assests/bg1.png";
import bg2 from "./assests/bg2.png";
import bg3 from "./assests/bg3.png";
import bg4 from "./assests/bg4.png";
import bg5 from "./assests/bg5.png";
import bg6 from "./assests/bg6.png";
import bg7 from "./assests/bg7.png";
import bg8 from "./assests/bg8.png";

import i1 from "./assests/i1.png";
import i2 from "./assests/i2.png";
import i3 from "./assests/i3.png";
import i4 from "./assests/i4.png";
import i5 from "./assests/i5.png";
import i6 from "./assests/i6.png";
import i7 from "./assests/i7.png";
import i8 from "./assests/i8.png";
import dapbg from "./assests/dapbg.png";
import Dappani from "./Dappani";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const mapData = [
  {
    title: "MVP Consulting",
    discription:
      "Our dApp Development Experts insight and well researched approach toward market demand and trend help you to figure out the functioning, finance and feasibility of  your ideas. We analyze every prospect for stakeholders to measure out technical components and advise the right blockchain platform as per the client’s requirements.",

    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: i1,
  },
  {
    title: "User Interface",
    discription:
      "User friendliness comes through friendly UI/UX design while using an app. Therefore, we go for the most easy to understand yet fully structured user interface designs in dApps development.   Our design process passes through multiple stages right from ideation, wireframe designs, then low fidelity and high fidelity design testing to make interactive prototypes. The extravagant nature in our already done projects (50 apps since 2020), owe a lot to creative, user friendly, and prolific design which earned record breaking praises",

    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: i2,
  },
  {
    title: "Decentralized Exchange Development",
    discription:
      "Decentralized Exchange Development has grown to gigantic dimensions in recent years, allowing customers to obtain direct trades without the involvement of third intermediaries. We can help you to innovate a highly modular and tailored exchange platform as per your specifications. Choose us for decentralized exchange development as we’re a one-stop solution, our expert address queries in no time and fully aware of security measures while developing secure code",

    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: i3,
  },
  {
    title: "Cloud Services",
    discription:
      "True end-to-end decentralization happens when decentralization of the settlement layer from the financial system synced with the compute layer from data centers to distributed computed networks gets done at the same time.Therefore, we advise our clients to encapsulate dApps as microservices that are externalized by APIs. Our microservices will have you at ease to hyperfocus on single business prospects. We provide cloud data stores for each microservice.",

    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    icon: i4,
  },
  {
    title: "Smart Contracts",
    discription:
      "Smart contracts are deployed on the blockchain that allow dApps users to interact. We offer smart contract services including writing, testing and deploying contracts on various platforms like Ethereum, Neo and others. We guide our clients to adopt the most suitable platform that fits their business specifications.",

    bg: "linear-gradient(180deg, #00E4E7 0%, #2DA7F2 100%)",
    icon: i5,
  },
  {
    title: "Decentralized Storage",
    discription:
      "In decentralized storage, files are broken down and spread across several nodes.There are several decentralized cloud storage platforms that For peer-to-peer transactions, there are considerable decentralized cloud storage platforms that ensure security, privacy and efficient cloud storage. We single out a platform that sits perfectly for a project.",

    bg: "linear-gradient(180deg, #FE9500 0%, #F2D400 100%)",
    icon: i6,
  },
  {
    title: "dApp Porting",
    discription:
      "Many companies find it back-breaking when it comes to migrate their dApp from one blockchain to another. To resolve this issue, we provide across the board a sweeping approach in dApp Porting with fully functional reusable codebase on any operating system. We can move your current application to any blockchain platform that meets the business requirements.",

    bg: "linear-gradient(180deg, #67FE1A 0%, #139950 100%)",
    icon: i7,
  },
  {
    title: "dApp Upgrade Services",
    discription:
      "To conduct business operations steadily and effortlessly, applications have to undergo upgrades from time to time. Whenever need arises, we render our outright migration and upgrade services to clients. Our team helps clients to entirely deploy new smart contracts and upgrade the microservices for the dApps",

    bg: "linear-gradient(180deg, #F28E69 0%, #F31783 100%)",
    icon: i8,
  },
];

const Carddata = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    link: "/p2p-lending-platform-development/",
    title: "P2P Lending Platform Development",
    description:
      "Build private and controlled participants network, execute the consensus protocol to decide the mining rights and rewards, and maintain the shared ledger.",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Dao Service and Development",
    link: "/dao-service-and-development-company/",
    description:
      "Get encrypted peer-to-peer apps with no single point of failure and zero downtime and get rid of data breach and hacking attempt.",
  },
  {
    img: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Multichain Development Services",
    link: "/multichain-development-services/",
    description:
      "With smart contracts ensure protocols that guarantee the integrity of multi-party agreements and automatically enforce fixed obligations.",
  },

  {
    img: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "DEFI Development",
    link: "/defi-development-services/",
    description:
      "Get a physical medium or a device to store public and private keys for cryptocurrency transactions.",
  },
];
const DappDevelopment = ({ openN, setOpenN }) => {
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
        "@id": "https://www.bloctechsolutions.com/dapp-development-company/",
      },
      headline: "DAPP DEVELOPMENT COMPANY",
      description:
        "We help companies to innovate in blockchain technology by devising a comprehensive plan to lay out and develop peer to peer decentralized Applications (dApps).",
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
      pt={{ md: "100px", xs: "79px" }}
      sx={{ overflowX: "hidden", backgroundColor: "#120319" }}
    >
      <Helmet>
        <title>
          dApp Development Company | dApp services | BlocTech Solutions
        </title>
        <meta
          name="description"
          content="As a dApp development company we provide logistics, supply chain and health care industries with decentralized applications to improve their business ecosystem"
        />
        <meta
          name="title"
          content="dApp Development Company | dApp services | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="dApp development company, dApp development services"
        />

        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          backgroundColor: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
          backgroundImage: `url(${dapbg})`,
          backgroundPosition: { sm: "center", xs: "left" },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: { sm: "top center", xs: "left" },
          // py: { sm: 6, xs: "100px" },
          // py: { sm: 6, xs: "0px" },
          // pb: { sm: 0, xs: "80px" },
        }}
      >
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              py={6}
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
                    DAPP DEVELOPMENT COMPANY
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
                    We help companies to innovate in blockchain technology by
                    devising a comprehensive plan to lay out and develop peer to
                    peer decentralized Applications (dApps). Currently, we’re
                    facilitating the healthcare industry, supply chain,
                    logistics, utility and startups to evolve from traditional
                    centralized structure of work to modern decentralized mode
                    of work. Our expert team of dApp developers is exactly aware
                    how to convert ideas into dApp development that can bring
                    transparency and security to your business ecosystem.
                  </Box>
                  <Box mt={3}>
                    <Button
                      onClick={() => setOpenN(true)}
                      sx={{
                        width: "220px",
                        height: "50px",
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
                      }}
                    >
                      Get A Reliable crypto wallet
                    </Button>
                  </Box>
                </Box>
              </Grid>
              {/*  */}
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  // display="flex"
                  // justifyContent={{ md: "flex-end", xs: "center" }}
                  textAlign="center"
                >
                  {/* <Dappani /> */}
                  <img src={bg} width={matches1 ? "100%" : "85%"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        {/* new section */}

        <Box
          sx={{
            my: 4,
          }}
        >
          <Typography
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              fontFamily: "Mulish",
              my: 5,
            }}
            textAlign={"center"}
            fontSize={{ xs: "20px", sm: "33px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            lineHeight={{ xs: "auto", sm: "40px" }}
            component="h2"
          >
            BlocTech Delivers Blockchain Solutions
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {Carddata.map(({ img, title, description, link }, index) => (
              <Grid
                key={index + `ids`}
                item
                p={{ xs: 1, md: 2 }}
                xs={12}
                md={4}
                textAlign={"center"}
              >
                <Box sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      background: img,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      py: 2,
                      px: 4,
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "5px",
                    }}
                  >
                    <Box
                      // mt="20px"
                      fontSize={{ xs: "16px", sm: "23px" }}
                      fontWeight={700}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      textAlign="center"
                      component="h3"
                    >
                      {title}
                    </Box>
                    <Box
                      py={2}
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      component="body1"
                    >
                      {description}
                    </Box>

                    <Link style={{ textDecoration: "none" }} to={link}>
                      <Button
                        // onClick={() => setOpenN(true)}
                        sx={{
                          textAlign: "center",
                          background:
                            "linear-gradient(202.6deg, #3940DB 11.43%, #A615BD 85.3%)",
                          fontSize: matches ? "14px" : "16px",
                          textTransform: "capitalize",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          my: 3,
                          borderRadius: "5px",
                          px: "20px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "white",
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* start services */}

        <Box
          component="h2"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "100px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Our dApp Development Services
        </Box>

        <Typography
          variant="p"
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          sx={{ py: "30px", m: "auto" }}
          lineHeight={{ xs: "auto", sm: "22px" }}
          textAlign="center"
          width="87%"
        >
          We cultivate consistently growing product development experience that
          helps our clients to multiply their profit generation. We devise our
          work strategy in a way that our clients could easily track and
          understand progress of their projects. This thing remains clients at
          the safe side in terms of budget and optimization of work and time. We
          cover all from smart contracts to decentralized exchanges and
          applications, Our dApp Development Company helps businesses to beat
          all odds in the decentralized applications world.
        </Typography>

        <Grid
          container
          spacing={3}
          py="60px"
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mapData.map(({ title, discription, bg, icon }) => (
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
                <Box
                  component="p"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16.911px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {discription}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          mt={2}
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

        <Platform />
        <Tools />
        <Languages />
        <Frontend openN={openN} setOpenN={setOpenN} />
      </Container>
    </Box>
  );
};

export default DappDevelopment;

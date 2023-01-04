import { useEffect } from "react";
import {
  Button,
  Box,
  Container,
  Grid,
  useMediaQuery,
  Typography,
} from "@mui/material";

// import privateimg from "./assets/privateimg.png";
import sheild from "./assets/shield.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Privatesvg from "./Privatesvg";
import { Helmet } from "react-helmet-async";
import main from './assets/main.png'

const cardData = [
  {
    bg: 'linear-gradient(180deg, #F31783 0%, #F28E69 100%)',
    title: "Reduced Costs",
    text: "Thanks to smart contract development , processes in the network are largely automated which reduces all sorts of operational and administrative costs. Transactions in the network are also cheaper because they do not need to be verified by all nodes but only a few trusted ones.",
  },
  {
    bg: 'linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)',
    title: "Scalability",
    text: "Private blockchain networks are more scalable and have greater transaction throughput – a key requirement for enterprises. They can process significantly more files than their public counterparts.This is because not all nodes need to participate in the validation of transactions. Validation can be limited to only a few nodes with greater processing power.",
  },
  {
    bg: 'linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)',
    title: "Control",
    text: "With a private blockchain, an enterprise has control over the infrastructure which allows it to more easily adjust to legal and compliance requirements.The rules of a private blockchain are set and revised by the enterprise that run it. Ensure such a network, where transactions can be reverted and balances modified, if necessary.",
  },
  {
    bg: 'linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)',
    title: "Security",
    text: "A private blockchain is restricted and access is granted only to trusted parties. This guarantees that confidential information does not become public. Regardless of the nature of the blockchain, any stored information is also cryptographically secured.",
  },
  {
    bg: 'linear-gradient(180deg, #67FE1A 0%, #139950 100%)',
    title: "Efficiency",
    text: "Due to limited number of participants, downtime on private blockchain networks remains significantly lower, whereas uptime remains higher. Moreover, you can have better node connections and faults can be fixed more easily.",
  },
];

const PrivateStartUps = ({ openN, setOpenN }) => {
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
        "@id": "https://www.bloctechsolutions.com/private-blockchain-services/",
      },
      headline: "Private Blockchain Development Services",
      description:
        "We, at BlocTech Solutions, leverage companies to rank up their private blockchains to optimize their business processes.We have robust private blockchain development experience with in-depth knowledge. Thus, we deliver dynamic, infiltration free, and amenadable private blockchain development services.",
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
    <Box pt={{ sm: "95px", xs: "79px" }}>
      <Helmet>
        <title>
          Private Blockchain Development Services | BlocTech Solutions
        </title>
        <meta
          name="description"
          content="We provide private blockchain development services for companies to bring a decentralized blockchain system in their businesses, by organized and secured private blockchain development."
        />
        <meta
          name="title"
          content="Private Blockchain Development Services | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Private Blockchain development services, Private Blockchain development "
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
                <Box
                  textAlign={{ xs: "center", md: "left" }}
                // pt={5}
                // pb={matches ? 10 : 24}
                >
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
                    Private Blockchain Development Services
                  </Box>

                  <Box
                    m="auto"
                    my={2}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#fff"
                    textAlign="justify"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    width={{ xs: "90%", md: "100%" }}
                    component="p"
                  >
                    We, at BlocTech Solutions, leverage companies to rank up
                    their private blockchains to optimize their business
                    processes.We have robust private blockchain development
                    experience with in-depth knowledge. Thus, we deliver
                    dynamic, infiltration free, and amenadable private
                    blockchain development services.
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
                      Get Free Assessment
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  // display="flex"
                  // justifyContent={{ md: "flex-end", xs: "center" }}
                  textAlign="center"
                >
                  {/* <Privatesvg /> */}
                  {/* <img
                    src={privateimg}
                    width={matches1 ? "100%" : "80%"}
                    alt="Private Blockchain Development"
                  /> */}
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
        <Grid mt={4} container spacing={5}>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box display="flex" justifyContent="flex-start">
              <img
                src={sheild}
                alt="private blockchain"
                style={{ width: "100%", height: matches ? "388px" : "650px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: matches ? "center" : "start",
              }}
            >
              <Box
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.1px"
                color="primary.main"
                lineHeight={{ xs: "auto", sm: "40px" }}
                // mt={{ xs: 5 }}
                component="h1"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  textTransform: "capitalize",
                }}
              >
                What is a private blockchain?
              </Box>
              <Box sx={{ width: "86%" }}>
                <Box
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  component="p"
                  // color="primary.main"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  mt={"45px"}
                  display="flex"
                  alignItems={"center"}
                  sx={{
                    textAlign: "justify",
                  }}
                >
                  A private blockchain is a closed ecosystem that is not open
                  for public participation. A private blockchain is run by a
                  centralized entity and its use is restricted to those who have
                  been granted access.Key features of a private blockchain
                  include the following:
                </Box>
                <Box
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  my={2}
                >
                  <ul className="myUl">
                    <li className="list">
                      – Users need permission to access the blockchain.
                    </li>
                    <li className="list">
                      – Members of the chain can negotiate the level of
                      decentralization for their network.
                    </li>
                    <li className="list">
                      – Can provide varying levels of access to users and can
                      enact customized restrictions.
                    </li>
                    <li className="list">
                      – User cannot obtain entry to the blockchain until they
                      are granted access by the central entity controlling the
                      blockchain.
                    </li>
                    <li className="list">
                      – Each participant on the blockchain can be easily
                      identified.
                    </li>
                    <li className="list">
                      – Enable much faster transactions than on public
                      blockchains.
                    </li>
                    <li className="list">
                      – Central authority sets the rules to be followed by the
                      users of private blockchain.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          className="linbarcont"
          pt={{ xs: 0, md: 7 }}
          m="auto"
          my={2}
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          lineHeight={{ xs: "auto", sm: "40px" }}
          textAlign="center"
          component="h1"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textTransform: "capitalize",
          }}
        >
          Benefits of Private Blockchain Development for Businesses
        </Box>

        <Grid
          container
          justifyContent="center"
          display="flex"
          spacing={2}
          mt={4}
        >
          {cardData.map(({ text, title, bg }, index) => (
            <Grid key={index + `ids`} item xs={12} md={4} textAlign={"center"}>
              <Box
                sx={{
                  background: bg,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  py: "20px",
                  px: "10px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  boxShadow: 5
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontSize={{ xs: "16px", sm: "23px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="white"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="center"
                    py="20px"
                    variant="h2"
                  >
                    {title}
                  </Typography>

                  <Typography
                    variant="h3"
                    fontSize={{ xs: "14px", sm: "17px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="white"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="justify"
                    py="10px"
                    sx={{ wordSpacing: "2px" }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          component="h1"
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
            textTransform: "capitalize",
          }}
        >
          Our Blockchain Development Services
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
          BlocTech Solutions offers the following types of services related to
          the process of developing on private blockchain:
        </Box>

        <Grid mt={3} container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" height="100%">
              <Box
                component="h2"
                py={4}
                width="100%"
                mt="10px"
                pl={4}
                fontSize={{ xs: "20px", sm: "28px" }}
                fontWeight={700}
                letterSpacing="0.3px"
                color="#FFFFFF"
                lineHeight={{ xs: "auto", sm: "22px" }}
                textAlign="left"
                sx={{
                  background: "#41015F",
                  boxShadow: "9px 0px 26px #000000",
                }}
              >
                Our Blockchain Development Services
              </Box>
              <Box
                sx={{
                  background: "#240035",
                  py: { xs: "20px", sm: "77px" },
                  px: { xs: "30px", sm: "60px" },
                }}
              >
                <Box
                  component="p"
                  width="100%"
                  mx="auto"
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  BlocTech Solutions offers the following types of services
                  related to the process of developing on private blockchain:
                </Box>
                <ul>
                  <li className="list">
                    – End-to-end private blockchain development
                  </li>
                  <li className="list">– Proof of concept (PoC) development</li>
                  <li className="list">– Consulting</li>
                  <li className="list">– Private blockchain integration</li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" height="100%">
              <Box
                component="h2"
                py={4}
                width="100%"
                mt="10px"
                pl={4}
                fontSize={{ xs: "20px", sm: "28px" }}
                fontWeight={700}
                letterSpacing="0.3px"
                color="#FFFFFF"
                lineHeight={{ xs: "auto", sm: "22px" }}
                textAlign="left"
                sx={{
                  background: "#41015F",
                  boxShadow: "9px 0px 26px #000000",
                }}
              >
                Platforms
              </Box>
              <Box
                sx={{
                  background: "#240035",
                  py: { xs: "20px", sm: "60px" },
                  px: { xs: "30px", sm: "60px" },
                }}
              >
                <Box
                  width="100%"
                  mx="auto"
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  For this purpose, we make use of the following platforms when
                  developing your company’s network:
                </Box>
                <ul>
                  <li className="list">– Hyperledger Fabric</li>
                  <li className="list">– Hyperledger Besu</li>
                  <li className="list">– Hyperledger Indy</li>
                  <li className="list">
                    – The complete Hyperledger tool stack
                  </li>
                  <li className="list">– Corda</li>
                  <li className="list">– Quorom</li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid mt={4} container spacing={3}>
          <Grid item xs={12} sm={10} md={10}>
            <Box>
              <Box
                component="h1"
                mb={4}
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="primary.main"
                lineHeight={{ xs: "auto", sm: "56px" }}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Private Blockchain Development by BlocTech Solutions
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
                textAlign="left"
              >
                BlocTech Solutions offers the following types of services
                related to the process of developing on private blockchain:
              </Box>
              <Box
                fontWeight={400}
                color="primary.main"
                letterSpacing="0.3px"
                lineHeight="22px"
              >
                <ul className="myUl">
                  <li>
                    We are a one-stop shop for development of highly secured,
                    infiltration proof private blockchain for your business.
                  </li>
                  <li>
                    We can find you the feasibility of a project by verifying
                    that your idea has the potential in a real-world situation
                    or not with proof of concept.
                  </li>
                  <li>
                    We provide consultation services for businesses to maintain,
                    upgrade and fix issues in their private blockchain.
                  </li>
                  <li>
                    We provide private blockchain integration services which
                    creates an immutable record of transactions and leads to
                    optimize business processes.
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
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
              my: 4,
            }}
          >
            Get Free Assessment
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivateStartUps;

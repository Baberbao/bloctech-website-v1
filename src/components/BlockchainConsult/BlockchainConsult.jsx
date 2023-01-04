import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Typography,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import Button from "@mui/material/Button";

import "./flip.css";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";
import bg5 from "./assets/bg5.png";

import issue1 from "./assets/issue1.png";
import issue2 from "./assets/issue2.png";
import issue3 from "./assets/issue3.png";
import issue4 from "./assets/issue4.png";
import issue5 from "./assets/issue5.png";
import main from "./assets/main.png";

import key1 from "./assets/key1.png";
import key2 from "./assets/key2.png";
import key3 from "./assets/key3.png";
import key4 from "./assets/key4.png";
import Consultanimation from "./Consultanimation";

import keybg from "./assets/keybg.jpg";
import { Helmet } from "react-helmet-async";

const data1 = [
  {
    issue: "Complicated Assessment of Blockchain",
    fixed:
      "We do use-case analysis according to client’s specifications to examine feasiblity, and study of proof of work to test the prospects of blockchain solution.",
    bg: bg1,
    icon: issue1,
  },
  {
    issue:
      "Lack of in-house competencies to create a clear Blockchain solution",
    fixed:
      "We provide robust blockchain solutions from proposing an architecture design to implement integration plan for required software. ",
    bg: bg2,
    icon: issue2,
  },
  {
    issue: "Mounting Cost of Blockchain Project",
    fixed:
      "By conducting a parallel prospect analysis of possible approaches to the blockchain, we single out most cost-effective approach for your blockchain project.",
    bg: bg3,
    icon: issue3,
  },
  {
    issue:
      "Lack of Project Management Skills to accurately plan the Blockchain Implementation",
    fixed:
      "We create an in detail standard procedure for blockchain implementation, with fair consideration of a risk mitigation plan, project cost, and time estimation.",
    bg: bg4,
    icon: issue4,
  },
  {
    issue:
      "Lack of in-house capabilities to build smooth Blockchain solution  integrated with softwares",
    fixed:
      "We offer end-to-end blockchain implementation, which equip companies to integrate their software with blockchain solution and ensure quality, maintenance and support.",
    bg: bg5,
    icon: issue5,
  },
];

const data2 = [
  {
    img: key1,
    heading: "Finance management",
    ul: (
      <ul>
        <li>
          We ensure flashing, fully protected, and economical domestic and
          cross-border payments, currency exchange, and lending transactions.
        </li>
        <li>
          We safeguard all the manual errors across financial transaction
          processing by multiple revisions and testing.
        </li>
      </ul>
    ),
    alt: "Finance management",
  },
  {
    img: key2,
    heading: "Supply chain and logistics",
    ul: (
      <ul>
        <li>
          To track a product from origin to consumption, we provide traceability
          in supplychain and logistics.
        </li>
        <li>
          We facilitate clients with verification of goods authenticity, and
          automated enforcement of fixed multi-party agreement.
        </li>
      </ul>
    ),
    alt: "Supply chain and logistics",
  },
  {
    img: key3,
    heading: "Medical record management",
    ul: (
      <ul>
        <li>
          We help healthcare industry to become immutable, and secure HIPPA
          compliance by safe and easy medical record sharing with patients.
        </li>

        <li>
          We keep the channel infiltration free to transfer sensitive medical
          data between multiple healthcare providers.
        </li>
      </ul>
    ),
    alt: "Medical record management",
  },
  {
    img: key4,
    heading: "Asset management",
    ul: (
      <ul>
        <li>
          We help in tokenization by providing immutablity to asset records for
          different industries, from FMCG’s to media and real estate.
        </li>
        <li>
          We ensure proof of ownership for assets and prevente fraud
          counterfeiting with blockchain solutions.
        </li>
      </ul>
    ),
    alt: "Asset management",
  },
];

export default ({ openN, setOpenN }) => {
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
        "@id":
          "https://www.bloctechsolutions.com/blockchain-consulting-services/",
      },
      headline: "Blockchain Consulting Services",
      description:
        "Our in-depth knowledge of blockchain technology and prosperous Blockchain development experience constantly bring a revolution for companies to conceptualize their blockchain idea, analyze its prospects, and accurately strategize and implement their blockchain projects.",
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
    // pt={{ md: "100px", xs: "79px" }} pb={{ md: "100px", xs: "79px" }}
    >
      <Helmet>
        <title>
          Blockchain Consulting Services & Solutions | BlocTech Solutions
        </title>
        <meta
          name="description"
          content="Get the best Blockchain consulting services to revolutionized you company structure."
        />
        <meta
          name="title"
          content="Blockchain Consulting Services & Solutions | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="Blockchain Consulting Services, blockchain consulting company"
        />

        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box
        sx={{
          background: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
        }}
      >
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              py={12}
              display="flex"
              alignItems="center"
            >
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Box
                    component="h1"
                    // pt={{ xs: 0, md: 10 }}
                    // mt={{ md: "80px", xs: "0px" }}
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
                    Blockchain Consulting Services
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
                    Our Blockchain development consultation assists
                    organizations to overcome all obstacles in the finding best
                    blockchain based solutions. We foster steadily expanding
                    product development competence that benefits our clients by
                    boosting their revenue. We plan our workflow so that our
                    clients may simply monitor and comprehend the status of
                    their projects. Regarding spending, time and labor
                    efficiency, this keeps clients on the safe side.
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
                      Talk To Our Experts
                    </Button>
                  </Box>
                </Box>
              </Grid>
              {/*  */}
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box textAlign="center">
                  {/* <Consultanimation /> */}
                  <img src={main} width={matches1 ? "100%" : "80%"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
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
          Get Best Bockchain Consultation Now
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
        <Box
          component="h2"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "50px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          How Blockchain Consulting Services by BlocTech Solutions Can Help?
        </Box>
        <Box
          mt="50px"
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data1.map(({ issue, fixed, bg, icon }) => (
              <Grid item xs={12} md={4}>
                <Box
                  height="100%"
                  width={"100%"}
                  position={"relative"}
                  className="flip"
                >
                  <Box
                    className="front"
                    sx={{
                      background: `url(${bg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      px: "15px",
                    }}
                    height="100%"
                  >
                    <Box textAlign="center" py="30px">
                      {" "}
                      <img src={icon} alt="Icons" />{" "}
                    </Box>

                    <Box
                      component="p"
                      pb="50px"
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      textAlign="center"
                    >
                      {issue}
                    </Box>
                  </Box>
                  <Box
                    className="back"
                    sx={{
                      background: `url(${bg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      px: "15px",
                    }}
                    height="100%"
                  >
                    <Box
                      component="h1"
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      textAlign="center"
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      {fixed}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          component="h2"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          // color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          // mt={{ xs: 5 }}
          pt={{ sm: "50px", xs: "50px" }}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Key Blockchain Use Cases BlocTech Solutions Supports
        </Box>

        <Grid
          mt="50px"
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data2.map(({ img, heading, ul, alt }) => (
            <Grid item xs={12} sm={6} md={4}>
              <Box
                height="100%"
                sx={{
                  background: "#240035",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  py: "30px",
                  px: "20px",
                }}
              >
                <Stack direction={"row"} justifyContent="space-evenly">
                  <Box textAlign="center">
                    <img src={img} width="68px" alt={alt} />
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

      <Container maxWidth="lg">
        <Box
          mt="50px"
          py="50px"
          mb="50px"
          px={{ sm: "50px", xs: "20px" }}
          sx={{
            background: "#411F78",
          }}
        >
          <Box
            component="p"
            mt={3}
            fontSize={{ xs: "12px", sm: "14px" }}
            fontWeight={400}
            color="#bdc4cc"
            letterSpacing="0.3px"
            textAlign="center"
            lineHeight="22px"
          >
            We covey easy to understand, flawless audits of smart contacts by
            ensuring best practices to audit for tokens, NFTs, crowd sales,
            marketplaces, gambling games, financial protocols, and much more. We
            provide the best combos of automated tools, static analysis, and a
            robust review process to provide recommendations for the project.
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              onClick={() => setOpenN(true)}
              sx={{
                width: "220px",
                height: "50px",
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
                borderRadius: "6px",
                fontSize: { xs: "12px", md: "14px" },
                color: "#fff",
                letterSpacing: "0.3px",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  color: "white",
                },
              }}
            >
              Book Free Assessment
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

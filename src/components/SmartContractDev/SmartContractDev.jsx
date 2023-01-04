import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import Button from "@mui/material/Button";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import i1 from "./assets/smarticon1.png";
import i2 from "./assets/smarticon2.png";
import i3 from "./assets/smarticon3.png";
import platformbg from "./assets/platformbg.jpg";

import platform1 from "./assets/smartbanking.png";
import platform2 from "./assets/smartlogistics.png";
import platform3 from "./assets/smartecommerce.png";
import platform4 from "./assets/smarthealth.png";
import platform5 from "./assets/insurance.png";
import platform6 from "./assets/smartgoverment.png";
import sm1 from "./assets/sm1.png";
import sm2 from "./assets/sm2.png";

import smartimg from "./assets/smartimg.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const mapData = [
  {
    title: "Design and Development",
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: i1,
    ul: (
      <ul>
        <li>Design of multiple smart contract logic scenarios.</li>
        <li>
          Development of proxy contracts to facilitate updates and iterative
          development of smart contracts.
        </li>
        <li>
          Built-in ‘contract self-destruct’ command for contract termination.
        </li>
      </ul>
    ),
  },
  {
    title: "Audit, Testing, and Deployment",
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: i2,
    ul: (
      <ul>
        <li>Testing to guarantee zero vulnerabilities zero</li>
        <li>Code reviews and audits. </li>
        <li>
          Logic audit (in the presence of the involved parties) to ensure
          reflection of stipulated agreements.
        </li>
        <li>Post-deployment contract testing (via test oracles).</li>
      </ul>
    ),
  },
  {
    title: "Oracle Development",
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: i3,
    ul: (
      <ul>
        <li>
          Development of oracles for seamless integration with off-chain data
          sources (sensors, databases, bank systems, etc.
        </li>
        <li>
          Integration of oracles with smart contracts and businesses’ IT
          ecosystems.
        </li>
      </ul>
    ),
  },
];
const Carddata = [
  {
    img: platform1,
    title: "Banking and Finance",
    description: (
      <ul>
        <li>Peer-to-peer transactions, seamless KYC processing .</li>
        <li>Error-free insurance claim processing</li>
        <li>Transparent audits </li>
      </ul>
    ),
    alt: "Banking and Finance",
  },
  {
    img: platform2,
    title: "Logistics and Supply Chain",
    description: (
      <ul>
        <li>Improve the transparency .</li>
        <li>Traceability and efficiency of a supply chain</li>
        <li>More agile while strengthening relationships among stakeholders</li>
      </ul>
    ),
    alt: "Logistics and Supply Chain",
  },
  {
    img: platform3,
    title: "eCommerce",
    description: (
      <ul>
        <li>Supplychain tracking and monitoring</li>
        <li>Affordability: cheaper and faster</li>
        <li>Transparency and security</li>
      </ul>
    ),
    alt: "ECommerce",
  },
  {
    img: platform4,
    title: "Healthcare",
    description: (
      <ul>
        <li>Helping to automate process</li>
        <li>Promote transparency</li>
        <li>Improve efficiency</li>
        <li>Minimize service time</li>
      </ul>
    ),
    alt: "Healthcare",
  },
  {
    img: platform5,
    title: "Insurance",
    description: (
      <ul>
        <li>Automate policies and services</li>
        <li>Reduce administrative and claims processing costs</li>
        <li>Increase transparency and prevent fraud</li>
      </ul>
    ),
    alt: "Insurance",
  },
  {
    img: platform6,
    title: "Government",
    description: (
      <ul>
        <li>Prevent incompliance in voting system</li>
        <li>Streamline the tax collection process</li>
        <li>Social security deductions</li>
        <li>Improved data security in defence sector</li>
      </ul>
    ),
    alt: "Government",
  },
];

const Carddata2 = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    link: "/token-development-services/",
    title: "Token Development",
    description:
      "Build private and controlled participants network, execute the consensus protocol to decide the mining rights and rewards, and maintain the shared ledger.",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Tokenization services",
    link: "/tokenization-service/",
    description:
      "Get encrypted peer-to-peer apps with no single point of failure and zero downtime and get rid of data breach and hacking attempt.",
  },
];

const SmartContractDev = ({ openN, setOpenN }) => {
  const matches = useMediaQuery("(max-width:700px)");
  const matches1 = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.bloctechsolutions.com/smart-contract-services/",
      },
      headline: "Smart contract development Services",
      description:
        "BlocTech Solutions have robust blockchain-enabled smart contract development experience with in-depth knowledge. We deliver dynamic, infiltration free, and amenadable smart contracts and oracles development services.",
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
    <Box pt={{ md: "60px", xs: "79px" }}>
      <Helmet>
        <title>Smart Contract Development Services | BlocTech Solutions</title>
        <meta
          name="description"
          content="Reform your Business with our Smart contract development services. Along with cyber security and efficiency we provide easier smart contract integration."
        />
        <meta
          name="title"
          content="Smart Contract Development Services | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="smart contract services, smart contract development services"
        />

        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Box bgcolor="#3b3f6d">
        <Box
          sx={{
            background: `linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)`,
            // backgroundPosition: { sm: "center", xs: "left" },
            // backgroundSize: { sm: "100% 100%", xs: "cover" },
            // backgroundRepeat: "no-repeat",
            // py: { sm: 10, xs: "100px" },
          }}
        >
          <Container>
            <Box>
              <Grid
                container
                spacing={2}
                py={10}
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
                      color="#fff"
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
                      Smart Contract Development Services
                    </Box>

                    <Box
                      m="auto"
                      component="p"
                      my={2}
                      fontSize={{ xs: "12px", sm: "16px" }}
                      fontWeight={400}
                      color="#fff"
                      letterSpacing="0.3px"
                      // width={{ xs: "90%", md: "100%" }}
                      lineHeight="22px"
                    >
                      BlocTech Solutions have robust blockchain-enabled smart
                      contract development experience with in-depth knowledge.
                      We deliver dynamic, infiltration free, and amenadable
                      smart contracts and oracles development services.
                    </Box>
                    <Box mt={3}>
                      <Button
                        onClick={() => setOpenN(true)}
                        sx={{
                          background:
                            "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",

                          width: "220px",
                          height: "50px",
                          // backgroundColor: "white",
                          border: "1px solid #3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "capitalize",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          // "&:hover": {
                          //   backgroundColor: "#002244",
                          //   color: "#fff",
                          //   fontWeight: "400",
                          //   border: "1px solid #3B3F6D",
                          // },
                        }}
                      >
                        Request Quote
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                  <Box
                    display="flex"
                    justifyContent={{ md: "flex-end", xs: "center" }}
                  >
                    <img src={smartimg} width={matches1 ? "100%" : "70%"} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box color={"#3b3f6d !important"} bgcolor="#fff"></Box>
          </Container>
        </Box>
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
            {Carddata2.map(({ img, title, description, link }, index) => (
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
        <Box
          component="p"
          sx={{
            py: "103px",
            textAlign: "center",
          }}
          width="100%"
          mx="auto"
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="#FFFFFF"
          // "primary.main"
          lineHeight={{ xs: "auto", sm: "22px" }}
        >
          Although, Smart contract development is not an easy to go process,and
          comprised of complex development stages, testing, and blockchain
          deployment of smart contract logic, but we also make this journey
          smooth and satisfying for our clients by adopting best practices which
          also help in reducing cost and guarantee cyber immunity.
        </Box>
        <Box
          component="h2"
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          color="primary.main"
          lineHeight={{ xs: "auto", sm: "40px" }}
          textAlign="left"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Scope of Our Smart Contract Development Services
        </Box>
        <Box
          component="p"
          pt={4}
          width="100%"
          mx="auto"
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="#FFFFFF"
          lineHeight={{ xs: "auto", sm: "22px" }}
        >
          Along with guaranteeing cybersecurity and efficiency of smart
          contracts, BlocTech Solutions also enables easier smart contract
          integration and updatability by implementing:
        </Box>
        <Box my={"20px"}>
          <li className="list">
            {" "}
            Oracles – entities that connect blockchains to external systems,
            thereby enabling smart contracts to execute based upon inputs and
            outputs from the real world.
          </li>
          <li className="list">
            {" "}
            Proxy contracts – stores an address of the latest deployed contract
            and redirect calls to that, currently valid, logic.
          </li>
        </Box>
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
                    alt=" icon "
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

        <Box
          component="h2"
          py={4}
          fontSize={{ xs: "20px", sm: "34px" }}
          fontWeight={700}
          letterSpacing="0.1px"
          color="primary.main"
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
          Industrial Smart Contract Services
        </Box>

        <Grid
          container
          justifyContent="center"
          display="flex"
          spacing={2}
          mt={4}
        >
          {Carddata.map(({ img, title, description, alt }, index) => (
            <Grid
              key={index + `ids`}
              item
              // p={{ xs: 1, md: 2 }}
              xs={12}
              md={4}
              textAlign={"center"}
            >
              <Box
                sx={{
                  background: "#41015F",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  py: "20px",
                  px: "10px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
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
                  <img src={img} alt={alt} style={{ marginTop: "16px" }} />{" "}
                  <Typography
                    variant={"h3"}
                    fontSize={{ xs: "16px", sm: "23px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    // color="white"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="center"
                    py="20px"
                    sx={{
                      background:
                        "linear-gradient(180deg, #FE9500 0%, #F2D400 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
                <Box
                  component="p"
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="white"
                  textAlign="left"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  {description}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box py={4}>
          <Grid
            container
            style={{
              padding: 50,
              background: "#411F78",
            }}
          >
            <Grid item xs={12} sm={12}>
              <Box
                component="h2"
                pt={4}
                sx={{
                  fontFamily: "Mulish",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: { xs: "20px", sm: "34px" },
                  lineHeight: { xs: "auto", sm: "40px" },
                  textAlign: { xs: "center", sm: "left" },
                  letterSpacing: "1.3px",
                  color: "#FFFFFF",
                }}
              >
                Haven’t Found Your Business Case?{" "}
              </Box>
              <Box
                component="p"
                py={4}
                width="100%"
                mx="auto"
                sx={{
                  fontFamily: "Mulish",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: { xs: "13px", sm: "16px" },
                  lineHeight: "21px",
                  letterSpacing: "1.3px",
                  color: "#FFFFFF",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                BlocTech Solutions have catered over 30+ industries with the
                most diverse business needs. Get in touch with our experts to
                discuss the feasibility of leveraging smart contracts in your
                domain.
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} textAlign="left" alignSelf={"center"}>
              <Button
                onClick={() => setOpenN(true)}
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
                  borderRadius: "6px",
                }}
              >
                DISCUSS MY NEEDS
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="h2"
          my={"50px"}
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
          Estimated Time Duration and Cost Factors for Smart Contract
          Development
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" height="100%">
              {" "}
              <Box
                textAlign={"center"}
                sx={{
                  background: "#41015F",
                  boxShadow: "9px 0px 26px #000000",
                }}
                py={"30px"}
                width="100%"
              >
                <img src={sm1} alt="1" />
              </Box>
              <Box
                sx={{
                  background: "#240035",
                  py: { xs: "20px", sm: "60px" },
                  px: { xs: "30px", sm: "60px" },
                }}
              >
                <Box
                  component="h3"
                  pb={4}
                  mt="20px"
                  fontSize={{ xs: "16px", sm: "20px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  textAlign="left"
                >
                  Estimated Time Duration
                </Box>
                <Box
                  width="100%"
                  mx="auto"
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                >
                  <b>High-level estimates</b> for a small-scale smart contract
                  development project:
                </Box>
                <ul>
                  <li className="list">
                    Business analysis – <b>2 weeks.</b>{" "}
                  </li>
                  <li className="list">
                    Logic and architecture design – <b> 2 weeks.</b>
                  </li>
                  <li className="list">
                    Smart contract development – <b>1 month.</b>
                  </li>
                  <li className="list">
                    Oracle development – <b>1 month.</b>
                  </li>
                  <li className="list">
                    Deployment and integration – <b>1-2 weeks.</b>
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              // border={"1px solid #3b3f6d"}

              textAlign="left"
              // p={4}
              height="100%"
            >
              {" "}
              <Box
                textAlign={"center"}
                sx={{
                  background: "#41015F",
                  boxShadow: "9px 0px 26px #000000",
                }}
                py={"30px"}
                width="100%"
              >
                <img src={sm2} alt="2" />
              </Box>
              <Box
                sx={{
                  background: "#240035",
                  py: { xs: "20px", sm: "40px" },
                  px: { xs: "30px", sm: "60px" },
                }}
                // height="100%"
              >
                <Box
                  component="h3"
                  pb={4}
                  mt="20px"
                  fontSize={{ xs: "16px", sm: "20px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  textAlign="left"
                >
                  Cost Factors
                </Box>

                <ul>
                  <li className="list">Complexity of smart contract logic.</li>
                  <li className="list">
                    Logic and architecture design – <b> 2 weeks.</b>
                  </li>
                  <li className="list">
                    Number of parties/organizations involved.
                  </li>
                  <li className="list">
                    Scope of an entire blockchain solution.
                  </li>
                  <li className="list">Number of required integrations.</li>
                  <li className="list">Key pricing models:</li>
                  <li className="list">
                    Fixed price – for small projects and PoC.
                  </li>
                  <li className="list">
                    T&M – for most smart contract projects.
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
            Request Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SmartContractDev;

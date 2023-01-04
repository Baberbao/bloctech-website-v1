import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import bg from "./assets/bg.png";
import { Helmet } from "react-helmet-async";

function Faqs({ openN, setOpenN }) {
  const [expanded, setExpanded] = React.useState(false);
  const check = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let AccordionData = [
    {
      summary:
        "What should I have to do? If I want to create a cryptocurrency, a token, or an exchange?",
      details:
        "To work on cryptocurrency, token, or an exchange, first you must have a credible token/crypto proposal, which we will evaluate and take decision either we can entertain you or not. We will not be able to help unless there is a real use case/utility. We might not be the ideal fit to work together if your main objective is just to generate money. Because we at BlocTech respect vision/concept behind an initiative more than anything.",
    },
    {
      summary: "Do you provide auditing services for smart contracts?",
      details:
        "Yes. We feel it is our fundamental obligation to protect against threats and malice when it comes to smart contract security. Smart Contract Audit is an accounting procedure to elaborate on logical errors, security policies & optimized solutions within code. Our Smart Contract Audit enhances this step by eliminating loopholes and verifying economic logic to assemble a report that is easy to understand for developers & community members alike.",
    },
    {
      summary: "What payment options do BlocTech Solutions provide?",
      details: (
        <List>
          <ListItem>
            1. Fiat - Total cost is paid in USDs or stable currency.
          </ListItem>
          <ListItem>
            2. Fiat + Token - The total cost is paid in a fiat-to-token ratio.
            Before starting the project, everyone agrees on the % ratio.
          </ListItem>
          <ListItem>
            3. Token - The project token provides BlocTech Solutions with token
            allocation. Before starting the project, the proportion and vesting
            are agreed upon by both parties.
          </ListItem>
        </List>
      ),
    },
    {
      summary:
        "Do you have any experience working with start-ups? If that’s the case, then how can I afford you for my start-up?",
      details:
        "Because BlocTech is a startup that understands how things operate in the startup world, you will find us to be highly compatible with you. We can come up with a costing/compensation strategy that works for both of us. In this way, we believe we’re best fit for each other as we both are start-ups, completely understand the elements, and meeting criterias to follow on for start-ups.",
    },
    {
      summary:
        "When and how can I have project estimated cost or get your quotation?",
      details:
        "We'll coordinate our technical team to proceed through the discovery phase once we finish the introduction call. In this, we will do a thorough examination of the requirements. Following that, we'll offer you a quote.",
    },
    {
      summary: "Can we collaborate with you, BlocTech Solutions?",
      details:
        "Yes! We'd be delighted to collaborate with you. Since its inception, BlocTech has been a development/technology partner for a number of firms.",
    },
    {
      summary: "What makes BlocTech so unique?",
      details:
        "We only collaborate with items and concepts that we believe in as a company. Once you've shared your ideas with us, we'll not only provide suggestions for improvements, but we'll also work on it as if it were one of our own products. Our team has a distinct culture that allows us to adapt to change. We believe in keeping our promises and have a track record of completing projects on schedule.",
    },
    {
      summary:
        "Is it safe for me to share my project concept with you privately?",
      details:
        "We realize how difficult it is to come up with original concepts in this industry. However, we want you to know that we will keep all of your thoughts confidential. Your secrets are also ours. We may send you an NDA (Non-Disclosure Agreement) as soon as you connect with us, which legally binds us to not divulge any private information. ",
    },
    {
      summary: "App Development Company",
      details:
        "We, at BlocTech Solutions, seamlessly integrates into your business workflow whether you are looking to create a new application, or need help with development and/or QA of your existing solution. We provide teams capable of increasing the velocity of your development and extending your technical capabilities.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="faq"
      style={{
        paddingTop: "150px",
        paddingBottom: "50px",
      }}
    >
      <Helmet>
        <title>
          Frequently asked questions BlocTech Solutions | BlocTech Solutions
        </title>
        {/* <meta
          name="description"
          content="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        /> */}
        <meta
          name="title"
          content="Frequently asked questions BlocTech Solutions | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        {/* <meta name="keyword" content="multichain blockchain development" />
        <meta name="keyword" content="multichain development services" /> */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Container maxWidth="lg">
        <Box
          textAlign="center"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
          lineHeight={{ xs: "auto", sm: "56px" }}
          mb={"50px"}
        >
          FAQ's
        </Box>

        <Container maxWidth="md">
          {AccordionData.map((value, index, array) => {
            return (
              <Box sx={{ margin: "auto", width: "100%" }}>
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
                      my: "10px",
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
                      background: check ? "#621E82" : "#621E82",
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
        <Box display="flex" justifyContent="center" mt={"50px"} mb={"50px"}>
          <Button
            onClick={() => setOpenN(true)}
            sx={{
              width: "280px",
              height: "50px",
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              borderRadius: "0px",
              fontSize: { xs: "12px", md: "14px" },
              color: "#fff",
              letterSpacing: "0.3px",
              "&:hover": {
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                color: "#3B3F6D",
                border: "1px solid #3B3F6D",
              },
            }}
          >
            Get Free Assessment Now
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Faqs;

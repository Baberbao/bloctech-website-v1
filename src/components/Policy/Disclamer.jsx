import { Box, Button, Container, Stack, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function Disclamer({ setDisclaimer }) {
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:700px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const agreeHandler = () => {
    localStorage.setItem("disclaimer", "true");
    navigate("/smart-contract-audit-company/");
    setDisclaimer("none");
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <Helmet>
        <title>Disclamer BlocTech Solutions | BlocTech Solutions</title>
        {/* <meta
          name="description"
          content="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        /> */}
        <meta
          name="title"
          content="Disclamer BlocTech Solutions | BlocTech Solutions"
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
            width: "fit-content",
          }}
          lineHeight={{ xs: "auto", sm: "56px" }}
          mb={12}
        >
          Disclaimer!
        </Box>

        <Box
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="white"
          lineHeight={{ xs: "auto", sm: "22px" }}
          my={5}
          textAlign="justify"
          px="8px"
        >
          Bloctech Solutions team conducts security assessments on the provided
          source code exclusively. To get a full view of our analysis, you must
          read the full report. We have done our best in conducting our analysis
          and producing In this report, it is important to note that you should
          not rely on this report and cannot claim against us based on what it
          says or does not say, or how we produced it, and you need to conduct
          your independent investigations before making any decisions. The audit
          documentation is for discussion purposes only. The analysis of the
          security is purely based on the smart contracts alone. No applications
          or operations were reviewed for security. No product code has been
          reviewed. This material is offered solely for informational reasons
          and is not intended to be relied upon as investment advice. BlocTech
          Solutions and its affiliates (including holding companies,
          shareholders, subsidiaries, employees, directors, officers, and other
          representatives) owe no duty of care to you or anyone else, and
          BlocTech Solutions makes no warranty or representation to anyone about
          the report's reliability or completeness. BlocTech Solutions hereby
          excludes all representations, warranties, conditions, and other terms
          (including, without limitation, the warranties implied by law of
          satisfactory quality, fitness for purpose, and the application of
          reasonable care and skill) that could affect the report if this
          provision were not included. Except to the extent prohibited by law,
          BlocTech Solutions hereby disclaims all liability obligation, and
          neither you nor any other person shall have any claim against BlocTech
          Solutions for any amount or kind of loss or damage that may arise to
          you or any other person (including, without limitation, any direct,
          indirect, special, punitive, consequential, or pure economic loss or
          damages, or any loss of income, profits, data, contracts, use of
          money, or business disruption). In any way arising from or connected
          with this report and the use, inability to use, or results of the use
          of this report, and any reliance on this report, whether in delict,
          tort (including without limitation negligence), contract, breach of
          statutory duty, misrepresentation (whether innocent or negligent), or
          otherwise under any claim of any nature anywhere in any jurisdiction).
          This cyber immunity-bearing report is evaluated on the basis of smart
          contracts. There were no security checks performed on any apps or
          activities. There hasn't been a review of any product codes.
        </Box>
        <Stack pb="50px" width="100%" mt="40px" justifyContent={"center"}>
          <Button
            onClick={agreeHandler}
            sx={{
              width: "250px",
              height: "40px",
              backgroundColor: "#3B3F6D",
              borderRadius: "0px",
              fontSize: matches ? "12px" : "14px",
              textTransform: "capitalize",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: "0.3px",
              fontFamily: "Mulish",
              "&:hover": {
                color: "white",
                background: "#3B3F6D",
              },
            }}
          >
            Agree to terms and services
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default Disclamer;

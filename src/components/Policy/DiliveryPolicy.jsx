import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";

import bg from "./assets/mainBg.png";
import { Helmet } from "react-helmet-async";

function DiliveryPolicy() {
  const matches = useMediaQuery("(max-width:700px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box pt={{ xs: "60px", md: "60px" }}>
      <Helmet>
        <title>Dilivery Policy BlocTech Solutions | BlocTech Solutions</title>
        {/* <meta
          name="description"
          content="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        /> */}
        <meta
          name="title"
          content="Dilivery Policy BlocTech Solutions | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        {/* <meta name="keyword" content="multichain blockchain development" />
        <meta name="keyword" content="multichain development services" /> */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box textAlign="center" pt={5} pb={matches ? 10 : 14}>
          <Box
            component="h1"
            mt={15}
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            lineHeight={{ xs: "auto", sm: "60px" }}
            color="#fff"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              width: { xs: "95%", md: "65%" },
              marginX: "auto",
            }}
          >
            Delivery Policy for Products & Services
          </Box>

          <Box
            component="p"
            m="auto"
            my={3}
            fontSize={{ xs: "16px", sm: "20px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="#fff"
            textAlign="center"
            lineHeight={{ xs: "auto", sm: "25px" }}
            width={{ xs: "90%", md: "63%" }}
          >
            Following receipt of your order, the services will be delivered to
            you in accordance with the conditions of the services you purchased.
            The nature of the services you purchased and the date you acquired
            them may have an impact on when they are delivered. Upon completion
            of the services, the services will be considered effectively
            supplied to you.
          </Box>
          <Box
            component="p"
            m="auto"
            my={3}
            fontSize={{ xs: "16px", sm: "20px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="#fff"
            textAlign="center"
            lineHeight={{ xs: "auto", sm: "25px" }}
            width={{ xs: "90%", md: "63%" }}
          >
            We occasionally schedule a meeting with our customers to gather
            clarification on the service they want us to provide. For
            specialised services, we give invoices as well as a detailed
            breakdown of the delivery timeline.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DiliveryPolicy;

import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";

import bg from "./assets/mainBg.png";
import { Helmet } from "react-helmet-async";

function RefundPolicy() {
  const matches = useMediaQuery("(max-width:700px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box pt={{ xs: "60px", md: "60px" }}>
      <Helmet>
        <title>Refund Policy BlocTech Solutions | BlocTech Solutions</title>
        {/* <meta
          name="description"
          content="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        /> */}
        <meta
          name="title"
          content="Refund Policy BlocTech Solutions | BlocTech Solutions"
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
            Refund Policy
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
            width={{ xs: "90%", md: "55%" }}
          >
            Users may find content and products of other companies or
            organizations on our website and/or links to the sites and services
            of our suppliers, licensors, or other third parties. Please note
            that we do not control these sites. Each such third party is solely
            responsible for complying with the laws, rules and regulations
            applicable to its business and the operation of its own website. For
            any questions regarding your personal data please feel free to
            contact Bloctech Data Protection Officer at
            dpo@bloctechsolutions.com.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RefundPolicy;

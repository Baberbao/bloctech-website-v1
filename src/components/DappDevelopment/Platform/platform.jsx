import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import platform1 from "../assests/platform1.png";
import platform2 from "../assests/platform2.png";
import platform3 from "../assests/platform3.png";
import platform4 from "../assests/platform4.png";
import platform5 from "../assests/platform5.png";
import platform6 from "../assests/platform6.png";
import platform7 from "../assests/platform7.png";
import platform8 from "../assests/platform8.png";
import platformbg from "../assests/platformbg.jpg";

const Carddata = [
  {
    img: platform1,
    title: "Ethereum",
    description:
      "An open-source decentralized public platform with smart contract functionality",
    alt: "Ethereum",
  },
  {
    img: platform2,
    title: "Hyperledger",
    description:
      "A project of open-source blockchain platforms and related tools",
    alt: "Hyperledger",
  },
  {
    img: platform3,
    title: "Corda",
    description:
      "An open-source blockchain platform to build cross-industry apps",
    alt: "Corda",
  },
  {
    img: platform4,
    title: "Tezos",
    description:
      "An Open-Source Platform for Decentralized Assets and Applications",
    alt: "Tezos",
  },
  {
    img: platform5,
    title: "Stellar",
    description:
      "Stellar An open platform to build decentralized financial products",
    alt: "Stellar",
  },
  {
    img: platform6,
    title: "EOS",
    description:
      "A blockchain, which can support scalable and industrial-grade dApps",
    alt: "EOS",
  },
  {
    img: platform7,
    title: "Hashgrap",
    description:
      "An enterprise-grade public network based on Asynchronous Byzantine Fault Tolerance algorithm",
    alt: "Hashgrap",
  },
  {
    img: platform8,
    title: "Tron",
    description:
      "A decentralized platform to develop high-performance blockchain apps",
    alt: "Tron",
  },
];
function Platform() {
  return (
    <>
      <Container maxWidth="md">
        <Box
          component="h2"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          lineHeight={{ xs: "auto", sm: "56px" }}
          color="#fff"
          textAlign="center"
          p={4}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          dApp Development Platforms we work on
        </Box>
      </Container>
      <Grid container justifyContent="center" display="flex" spacing={2} mt={4}>
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
                background: "#240035",
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
                <img src={img} alt={alt} style={{ marginTop: "16px" }} />
                <Typography
                  variant={"h3"}
                  fontSize={{ xs: "16px", sm: "23px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="white"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  textAlign="center"
                  py="20px"
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
                textAlign="center"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                {description}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Platform;

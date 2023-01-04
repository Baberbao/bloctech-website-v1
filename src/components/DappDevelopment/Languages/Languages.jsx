import React from "react";
import { Box, Container, Grid } from "@mui/material";

import lang1 from "../assests/lang1.png";
import lang2 from "../assests/lang2.png";
import lang3 from "../assests/lang3.png";
import lang4 from "../assests/lang4.png";
import lang5 from "../assests/lang5.png";
import lang6 from "../assests/lang6.png";
import langbg from "../assests/langbg.jpg";

const Carddata = [
  {
    img: lang1,
    // title: "Ethereum",
    description:
      "Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum. We use solidity to write smart contracts for blind auctions, voting, multi-signature wallets and crowdfunding",
  },
  {
    img: lang2,
    // title: "Hyperledger",
    description:
      "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. Our experts use Golang for writing chaincodes in Hyperledger Fabric as it provides platform independency.",
  },
  {
    img: lang3,
    // title: "Corda",
    description:
      "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. We use JS to store all the code of a dApp to support object-orientation and declarative styles.",
  },
  {
    img: lang4,
    // title: "Tezos",
    description:
      "Java supports portability feature and provides Automatic Garbage Collection. We utilize Java programming language to write code for microservices to be used in a dApp if required. Also, various SDKs for different blockchain platforms are written in Java.",
  },
  {
    img: lang5,
    // title: "Stellar",
    description:
      "Extensibility to meet customized requirements and reduces loading time by quick caching. Our developers use Node.js to build backend of real-time multi-user decentralized applications as it helps in building cross-platform applications.",
  },
  {
    img: lang6,
    // title: "EOS",
    description:
      "Developers don’t have to worry about placing codes in the right place when using PHP, as it is written between tags. Besides, PHP can interact with different database languages, we use PHP to build dynamic web applications on top of the blockchain platform.",
  },
];

function Languages() {
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
          my={5}
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Back-end Programming Languages We Understand
        </Box>
      </Container>

      <Grid container justifyContent="center" display="flex" spacing={2} mt={4}>
        {Carddata.map(({ img, title, description }, index) => (
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
                background: "#411F78",
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
                // mt="20px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  py: "20px",
                }}
              >
                <img src={img} alt="icons" style={{ marginTop: "16px" }} />
              </Box>
              <Box
                component="p"
                py={2}
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

export default Languages;

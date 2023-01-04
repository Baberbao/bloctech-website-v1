import React from "react";
import { Box, Container, Grid } from "@mui/material";

import toolsbg from "../assests/toolsbg.jpg";

import tools1 from "../assests/tools1.png";
import tools2 from "../assests/tools2.png";
import tools3 from "../assests/tools3.png";
import tools4 from "../assests/tools4.png";
import tools5 from "../assests/tools5.png";
import tools6 from "../assests/tools6.png";

const Carddata = [
  {
    img: tools1,
    // title: "Ethereum",
    description:
      "Geth is the command-line interface for implementing an Ethereum node in Google's Go programming language. We use ethereum Geth to deploy Ethereum nodes, transfer funds between addresses, examine block history, mine Ether and build contracts.",
  },
  {
    img: tools2,
    // title: "Hyperledger",
    description:
      "A testnet is a collection of nodes that are used to test the Ethereum protocol. To avoid the system from bugs and issues, we test out dApp on Blockchain Testnet before deploying it on the mainnet.",
  },
  {
    img: tools3,
    // title: "Corda",
    description:
      "Zeppelin provides a complete suite of security products to build, manage, and inspect all aspects of operations for Ethereum projects.We use Zeppelin tools to conduct security audits on the smart contracts and regulate reusable smart contracts effectively.",
  },
  {
    img: tools4,
    // title: "Tezos",
    description:
      "Blockstack is a decentralized computing platform, built on blockchain technology, that focuses on individual control of online data and identity. We use Blockstack to build dApps that allow users to own their data and enables us to write the dApps in any programming language.",
  },
  {
    img: tools5,
    // title: "Stellar",
    description:
      "Truffle is a world-class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM). We use Truffle because it offers custom deployments for many public and private networks.",
  },
  {
    img: tools6,
    // title: "EOS",
    description:
      "Remix is an open-source Ethereum IDE, used to write, compile and debug Solidity code. We create, deploy, debug and test smart contracts written in Solidity language on Remix as it  connects with Ethereum Blockchain via Metamask.",
  },
];

function Tools() {
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
          Technology Tools that pillar our dApp Development Services
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

export default Tools;

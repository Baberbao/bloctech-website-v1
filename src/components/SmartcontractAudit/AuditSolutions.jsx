import { Box, Grid, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

import i1 from "./assets/i4.png";
import i2 from "./assets/i5.png";
import i3 from "./assets/i6.png";
const data = [
  "Smart Contract Audit is a process of a precisional analysis of the code written by the developers in the term of Smart Contract. An audit secures the code by resolving any vulnerabilities or errors that could expose the users or have the potential for future bugs.",
  "Anyone dealing with a smart contract or looking for launching a project, including a Defi, DApp, game, stablecoin, tokens, NFTs, or more on a blockchain platform, must seek a third-party security auditing solution to prevent their projects from an economic exploit.",
  "Smart contracts are self-executing codes that usually deal with financial and other valuable assets and tokens. Since blockchain is an immutable ledger, a smart contract, once deployed, cannot be altered. Hence, it is vital to audit a smart contract for its vulnerabilities and debug complex codes that often interact with each other, integrating a third-party system that makes the project susceptible to hacking and cybercrimes.",
];

export default ({ openN, setOpenN }) => {
  const [index, setindex] = React.useState(0);
  const responsiveButtons = useMediaQuery("(max-width:420px)");

  return (
    <>
      <Box
        component="h3"
        textAlign="center"
        fontSize={{ xs: "16px", sm: "24px" }}
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
      >
        Why Smart Contract Audit?
      </Box>

      <Box pt={10} pb={7}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box
              component="p"
              pt="100px"
              my={4}
              fontSize={{ xs: "12px", sm: "14px" }}
              fontWeight={400}
              color="white"
              textAlign="center"
              letterSpacing="0.3px"
              lineHeight="24px"
              sx={{
                transition: "0.5",
              }}
            >
              {data[index]}
            </Box>

            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              flexDirection={responsiveButtons ? "column" : "row"}
              mt={2}
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://wa.me/+923138604818"
                target={"_blank"}
              >
                <Button
                  sx={{
                    width: "220px",
                    height: "50px",
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    borderRadius: "0px",
                    fontSize: { xs: "12px", md: "14px" },
                    color: "#fff",
                    letterSpacing: "0.3px",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    },
                    mt: "10px",
                  }}
                >
                  CONNECT TO WHATSAPP
                </Button>
              </a>

              <a
                style={{ textDecoration: "none" }}
                href="https://t.me/bloctechsolutions92"
                target={"_blank"}
              >
                <Button
                  sx={{
                    width: "220px",
                    height: "50px",
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    borderRadius: "0px",
                    fontSize: { xs: "12px", md: "14px" },
                    color: "#fff",
                    letterSpacing: "0.3px",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    },
                    mt: "10px",
                  }}
                >
                  CONNECT TO TELEGRAM
                </Button>
              </a>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  onClick={() => setindex(0)}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                    transition: "0.5s",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  color="white"
                >
                  <Box
                    m="auto"
                    // textAlign={"center"}

                    p={3}
                    height="100%"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box mt={1} mb={3}>
                      <img src={i1} alt="icon" />
                    </Box>
                    <Box
                      component="h3"
                      fontSize={{ xs: "14px", md: "18px" }}
                      fontWeight={700}
                    >
                      What is a smart contract audit?
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box
                  onClick={() => setindex(1)}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                    transition: "0.5s",
                    cursor: "pointer",
                    textAlign: "center",

                    // mx: "5px",
                  }}
                  color="white"
                  bgcolor="#fff"
                >
                  <Box
                    m="auto"
                    // textAlign={"center"}

                    p={3}
                    height="100%"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box mt={1} mb={3}>
                      <img src={i2} alt="icon" />
                    </Box>
                    <Box
                      component="h3"
                      fontSize={{ xs: "14px", md: "18px" }}
                      fontWeight={700}
                    >
                      Who needs a smart contract audit?
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Box
                  onClick={() => setindex(2)}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                    transition: "0.5s",
                    cursor: "pointer",
                    textAlign: "center",

                    // mx: "5px",
                  }}
                  color="white"
                  bgcolor="#fff"
                >
                  <Box
                    m="auto"
                    // textAlign={"center"}

                    p={3}
                    height="100%"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box mt={1} mb={3}>
                      <img src={i3} alt="icon" />
                    </Box>
                    <Box
                      component="h3"
                      fontSize={{ xs: "14px", md: "18px" }}
                      fontWeight={700}
                    >
                      Why is Smart Contract Audit important?
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

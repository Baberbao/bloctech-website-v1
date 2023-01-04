import React from "react";
import { Box, Container, Grid } from "@mui/material";

function DaoDifference() {
  return (
    <Box mt={{ xs: 8, sm: 15 }}>
      <Container>
        <Box
          component="h1"
          textAlign={"center"}
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          lineHeight={{ xs: "auto", sm: "56px" }}
          color="#fff"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Digital Autonmous Organzation VS Traditional Organisation
        </Box>
        <Grid container spacing={6} mt={5} mb={5}>
          <Grid item xs={12} sm={12} md={6}>
            <Box bgcolor="#240035" pb={5}>
              <Box
                component="h3"
                px={5}
                bgcolor="#41015F"
                height="103px"
                display="flex"
                alignItems="center"
                fontSize={{ xs: "20px", sm: "28px" }}
                fontWeight={700}
                letterSpacing="0.1px"
                lineHeight={{ xs: "auto", sm: "34px" }}
                color="#fff"
                boxShadow={"9px 0px 26px #000000"}
              >
                DAO
              </Box>
              <Box px={5}>
                <ul
                  style={{
                    fontSize: { xs: "14px", sm: "20px" },
                    fontWeight: 400,
                    lineHeight: { xs: "auto", sm: "26px" },
                    color: "#fff",
                    letterSpacing: "1.3 px",
                    marginTop: "30px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Fully Transparent & Public for all activity
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Low cost for operational process
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Everything is on the Cryptography (Blockchain)
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Usually flat and fully democratized
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Voting has required by members for any changes to be
                    implemented
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    The smart contract has embedded in the Governance process
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Fully Automated and smart contracts for decision making
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box bgcolor="#240035" pb={5}>
              <Box
                component="h3"
                px={5}
                bgcolor="#41015F"
                height="103px"
                display="flex"
                alignItems="center"
                fontSize={{ xs: "20px", sm: "28px" }}
                fontWeight={700}
                letterSpacing="0.1px"
                lineHeight={{ xs: "auto", sm: "34px" }}
                color="#fff"
                boxShadow={"9px 0px 26px #000000"}
              >
                Traditional Organizations
              </Box>
              <Box px={5}>
                <ul
                  style={{
                    fontSize: { xs: "14px", sm: "20px" },
                    fontWeight: 400,
                    lineHeight: { xs: "auto", sm: "26px" },
                    color: "#fff",
                    letterSpacing: "1.3 px",
                    marginTop: "30px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Limited activity is shown to the public, basically Private
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Trust is built based on experience and relationships
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    High cost for operational process
                  </li>
                  <li style={{ marginBottom: "10px" }}>Usually hierarchical</li>
                  <li style={{ marginBottom: "10px" }}>
                    Depending on the structure, changes can be demanded from a
                    sole party, or voting may be offered
                  </li>{" "}
                  <li style={{ marginBottom: "10px" }}>
                    Top-down management, many information & decision bottlenecks
                    for the Governance process
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Based on expertise and seniority each decision has done
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <Box
          textAlign={"center"}
          fontSize={{ xs: "12px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="1.3px"
          lineHeight={{ xs: "auto", sm: "21px" }}
          color="#fff"
          my={5}
        >
          There are two types of centralized blockchain solutions if we are
          looking for the governance of organizations: COs (traditional or
          continuous organizations) and DAOs. Both these solutions are run by
          complex crypto- economic principles and smart contracts.
          <br />
          <br />
          While DAO’s automate and decentralize the governance of corporations,
          COs aim to create a sustainable financial model for traditional
          organizations. Structurally DAOs are flat and thus depend on smart
          contracts to enforce rules and decision making. DAO Tokens are used to
          give the voting and decision making power to participants where more
          tokens mean more value. Contrary to this, COs use a Decentralized
          Autonomous Trust (DAT) which is an immutable smart contract that
          discourages speculation and also incentives long-term stakeholder
          participation.
        </Box>

        <Box display="flex" justifyContent={"center"}>
          <Button
            startIcon={<WhatsAppIcon />}
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              border: "1px solid #3B3F6D",
              borderRadius: "0px",
              fontSize: matches ? "10px" : "14px",
              textTransform: "capitalize",
              color: "#FFFFFF",
              fontWeight: 700,
              letterSpacing: "0.3px",
              height: "42px",
              "&:hover": {
                backgroundColor: "white",
                border: "1px solid #3B3F6D",
              },
              px: 2,
            }}
          >
            Connect to Whatsapp
          </Button>
          <Button
            startIcon={<TelegramIcon />}
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              border: "1px solid #3B3F6D",
              borderRadius: "0px",
              fontSize: matches ? "10px" : "14px",
              textTransform: "capitalize",
              color: "#FFFFFF",
              fontWeight: 700,
              letterSpacing: "0.3px",
              height: "42px",
              "&:hover": {
                backgroundColor: "white",
                border: "1px solid #3B3F6D",
              },
              px: 2,
              ml: 2,
            }}
          >
            Connect to telegram
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
}

export default DaoDifference;

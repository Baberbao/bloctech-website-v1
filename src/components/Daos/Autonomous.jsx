import { Box, Container, Grid, Button } from "@mui/material";
import React from "react";
import dao3 from "./assets/dao3.png";
import dao4 from "./assets/dao4.png";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";

import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import i4 from "./assets/i4.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Autonomous() {
  const mapData = [
    {
      alt: "Open Source Code",
      title: "Open Source Code",
      discription:
        "DAOs are reserved till the financing time frame concludes and the DAO is deployed. After this, it converts into an independent identity autonomous of outsiders and it’s makers by creating an open source code accessible to all participants.",

      bg: 'linear-gradient(180deg, #F31783 0%, #F28E69 100%)',
      icon: i2,
    },
    {
      alt: "DAO Token",
      title: "DAO Token",
      discription:
        "The financing state continues as you set up the DAO rules. During this financing phase, it is important to make sure that these rules have an interior property that allows for genuine economic growth at any given point of time and permits financing.",
      bg: 'linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)',
      icon: i1,
    },
    {
      alt: "Based on Smart Contract",
      title: "Based on Smart Contract",
      discription:
        "For a decentralised autonomous organization blockchain to be effective there need to be guidelines that dictate the way in which the platform is supposed to work. These guidelines or rules are coded as smart contracts so that they can eventually be taken as valid in the future.",
      bg: 'linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)',
      icon: i3,
    },
    {
      alt: "Using Blockchain Technology",
      title: "Using Blockchain Technology",
      discription:
        "Organizations can work in an autonomous and decentralized manner by using the blockchain technology. This is because users are allowed to exercise command and make choices over the exchange. This makes DAOs transparent, incorrupt and immutable.",
      bg: 'linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)',
      icon: i4,
    },
  ];
  return (
    <Box mt={20}>
      <Container>
        <Box justifyContent="center" display="flex">
          <Box
            component="h1"
            width={{ xs: "100%", sm: "85%" }}
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
            Features of a Decentralized Autonomous Network
          </Box>
        </Box>
        <Box mt={5}>
          <Grid
            container
            spacing={7}
            py="60px"
            sx={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mapData.map(({ title, discription, bg, icon, alt }) => (
              <Grid item md={5} sm={6} xs={12} mt="60px">
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
                    alt={alt}
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
                    pb="30px"
                    component="h3"
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
                  <Box
                    component="p"
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16.911px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {discription}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={3} my={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              {/* <img src={dao3} width="100%" alt="dao3" /> */}
              <LazyLoadImage
                src={dao3} width="100%" alt="dao3" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              component="h1"
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
              How Does a DAO Work?
            </Box>

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
                Smart contract development is behind the foundation of the DAO.
                Samrt contracts regulate the rules of the organization and group
                treasury. Once the smart contract is conveyed to live on the
                Ethereum platform, then no one can make variations in the rules
                guidance except by a consensus. This is possible because smart
                contracts are tamper-proof once they go live on Ethereum.
              </li>
              <li style={{ marginBottom: "10px" }}>
                It will fail if someone tries to change something that isn't
                covered by the code's rules and reasons. Because the treasury is
                also established by the smart contract, no one can use the money
                without the permission of the organization.
              </li>
              <li style={{ marginBottom: "10px" }}>
                As a result, DAOs do not necessitate a centralized authority.
                Instead, the group makes decisions collectively, and when votes
                are passed, transactions are automatically permitted. You can't
                arbitrarily change the code (the DAO's rules) without everyone
                noticing because everything is public.
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid container spacing={5} my={6}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              component="h1"
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
              How does a DAO Works?
            </Box>
            <Box
              m="auto"
              my={2}
              fontSize={{ xs: "13px", sm: "16px" }}
              fontWeight={400}
              letterSpacing="0.3px"
              color="#fff"
              textAlign={{ xs: "center", sm: "justify" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
              width={{ xs: "90%", md: "100%" }}
            >
              BlocTech Solutions is a premium Blockchain development company
              that offers DAO Blockchain service. DAOs are also incredibly
              transparent like Everything is recorded, and votes, proposals, and
              even the code can be audited, making DAOs extremely transparent.
              In comparison to traditional work environments, DAO is the idea of
              self-sustainability.
              <br />
              <br />
              We create sophisticated dApps, like crypto wallets, allowing DAO
              users to earn and trade on the platform. As well as the creation
              of DAO smart contracts, Users can engage in different activities
              independently using dApps.
              <br />
              <br />
              You are in right place, Get Consultation With Our young and
              skillful Specialists!
            </Box>

            <Box display="flex" justifyContent={{ xs: "center", sm: "left" }}>
              <Button
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  border: "1px solid #3B3F6D",
                  borderRadius: "0px",
                  fontSize: { xs: "10px", sm: "14px" },
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
                Book Free Assessment Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              {/* <img src={dao4} width="100%" alt="dao4" /> */}
              <LazyLoadImage
                src={dao4} width="100%" alt="Book Free Assessment Now" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Autonomous;

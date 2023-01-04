import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import bg from "./assets/platformbg.jpg";

import img1 from "./assets/DAOC1.png";
import img2 from "./assets/DAOC2.png";
import img3 from "./assets/DAOC3.png";
import img4 from "./assets/DAOC4.png";

function Defi() {
  const Card = [
    {
      img: img1,
      title: "Ethereum",
      description:
        "An open-source decentralized public platform with smart contract functionality",
    },
    {
      img: img2,
      title: "Hyperledger",
      description:
        "A project of open-source blockchain platforms and related tools",
    },
    {
      img: img3,
      title: "Corda",
      description:
        "An open-source blockchain platform to build cross-industry apps",
    },
    {
      img: img4,
      title: "Tezos",
      description:
        "An Open-Source Platform for Decentralized Assets and Applications",
    },
    {
      img: img1,
      title: "Stellar",
      description:
        "Stellar An open platform to build decentralized financial products",
    },
  ];
  const Carddata = [
    {
      img: img1,
      title: "Trusted Timestamping",

      discription:
        "Complete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous Control",
    },
    {
      img: img2,
      title: "Eliminate Security Threats",

      discription:
        "Complete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous Control",
    },
    {
      img: img3,
      title: "Say Bye to Managerial Supervision",

      discription:
        "Complete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous Control",
    },
    {
      img: img4,
      title: "Complete Autonomous Control",
      discription:
        "Complete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous ControlComplete Autonomous Control",
    },
  ];
  return (
    <Box>
      <Container>
        <Grid
          container
          justifyContent="center"
          display="flex"
          spacing={3}
          mt={4}
        >
          {Carddata.map(({ img, title, description }, index) => (
            <Grid
              key={index + `ids`}
              item
              // p={{ xs: 1, md: 2 }}
              xs={12}
              md={3}
              textAlign={"center"}
            >
              <Box
                sx={{
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
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
                  <img src={img} alt="icons" style={{ marginTop: "16px" }} />
                  <Typography
                    fontSize={{ xs: "16px", sm: "20px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="white"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="center"
                    py="20px"
                    mb={"10px"}
                    px={1}
                  >
                    {title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box my={5} display="flex" justifyContent="center">
          <Button
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
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
              px: 3,
            }}
          >
            Talk to our Experts
          </Button>
        </Box>
        <Box
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={10}
        >
          <Box
            width={{ xs: "100%", sm: "70%" }}
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
            Why BlocTech Solutions for DeFi 2.0 Development?
          </Box>
          <Box
            width={{ xs: "100%", sm: "70%" }}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="1.3px"
            color="white"
            lineHeight={{ xs: "auto", sm: "21px" }}
            textAlign="center"
            py="20px"
          >
            By partnering with BlocTech Solutions, you can rely on a team of
            technical experts with real-world experience creating success
            stories.
          </Box>
        </Box>

        <Grid
          container
          justifyContent="center"
          display="flex"
          spacing={2}
          mt={4}
        >
          {Card.map(({ img, title, description }, index) => (
            <Grid
              key={index + `ids`}
              item
              // p={{ xs: 1, md: 2 }}
              xs={12}
              md={4}
              mt={3}
              textAlign={"center"}
            >
              <Box
                sx={{
                  background: `url(${bg})`,
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
                  <img src={img} alt="icons" style={{ marginTop: "16px" }} />
                  <Typography
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
        <Box my={5} display="flex" justifyContent="center">
          <Button
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
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
              px: 3,
            }}
          >
            Talk to our Experts
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Defi;

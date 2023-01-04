import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import Group101 from "./assets/Group01.png";
import Group102 from "./assets/Group02.png";
import Group103 from "./assets/Group03.png";
import Group104 from "./assets/Group04.png";
import Group105 from "./assets/Group05.png";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";

const Carddata = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    title: "Get Rid from Intermediaries and Gatekeepers",
    description:
      "Get more authority as there is no limit or restriction to create and use DeFi applications for participants. This system disqualifies the role of gatekeepers and intermediaries and encourages greater participation.It also rewards users freedom as DeFi apps typically allow them to retain their private keys, and be in control of their finances.",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Attain 100% Transparency",
    description:
      "With DeFi applications’ code transparency of data and transactions reaches to maximal level. This enables participants to completely comprehend how the application works or even to enhance its efficiency by identifying bugs.Public distribution of transaction details brings greater market efficiency because there is no information asymmetry such as in traditional finances.",
  },
  {
    img: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Give Major Relief to Your Budget",
    description:
      "All praises to the efficiency and resourcefulness of blockchain, the automation of smart contracts, and their immutability, transaction costs with DeFi apps are significantly lower than for traditional services. This guarantees greater buy-in from users.The reason behind such cost-effectiveness basically comes due to elimination of third party involvement like intermediaries and governing bodies.",
  },
  {
    img: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "No Need to Put Your Trust at Risk",
    description:
      "DeFi applications users are free to put their trust at stake of any authority. On the contrary, users enjoy full control over their assets and investments. They can have access to their assets and handle them any time and from anywhere in the world without acquiring any permission from anyone.",
  },
  {
    img: "linear-gradient(180deg, #00E4E7 0%, #2DA7F2 100%)",
    title: " Provide Interoperability",
    description:
      "DeFi applications can form entirely new products by combining or collaborating with others. Thanks to the nature of smart contracts which enables us to form such products. In this way, a host of different services can be created collectively to meet various user requirements.",
  },
];

const data = [
  {
    img: one,
    title: "Use-case analysis",
    description:
      "Use case analysis is a technique first used to identify and understand the requirements of a client, then offer the client a suitable solution on the basis of collected information and minute observations of client’s interest and demand. This creates the basic plan for the development of the DeFi product and the next steps.",
  },
  {
    img: two,
    title: "External Dependencies and Integrations Analysis",
    description:
      "Besides the use-case analysis itself, external dependencies of the DeFi product must be addressed and taken into account. This analysis is necessary to plan integrations with third-parties that are essential for transactions or other services.",
  },
  {
    img: three,
    title: "Use-Case Smart Contracts Development and Testing",
    description:
      "In the wake of initial analysis, work on smart contract development gets initiated. Smart contracts are held accountable for the seamless and automated operation of the DeFi. Smart contracts are immutable and cannot easily be modified. Due to this reason, once developed, they are also tested extensively and repeatedly to ensure that there are no bugs or errors left in them.",
  },
  {
    img: four,
    title: "Front-end Application Development",
    description:
      "Finally, before the DeFi is launched, the application’s front-end is developed. Following its completion and after further tests, the DeFi is ready to use!",
  },
];

const Benefitsdafi = ({ setOpenN }) => {
  return (
    <Box
      pt={"50px"}
      sx={{
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="lg">
        <Box
          // py={5}
          // my={8}
          // p={2}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          mt="50px"
        >
          <Box
            component="h2"
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.1px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "40px" }}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Benefits of DeFi Product
            <br /> Development for Your Business
          </Box>
          <Box
            component="p"
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="white"
            lineHeight={{ xs: "auto", sm: "22px" }}
            display="flex"
            textAlign="center"
            py={3}
            // maxWidth="700px"
          >
            Foundation of DeFi Product Development lies in altering ways of
            traditional financial services and offering easy and open access to
            the participants in a network. Businesses backed with Defi products
            provide value to all the participants by distributed ledger
            technology beyond simple value transfer to include more complex
            operations. Here are some of the benefits of DeFi product
            development:
          </Box>
        </Box>
        <Grid container justifyContent="center" display="flex" spacing={1}>
          {Carddata.map(({ img, title, description }, index) => (
            <Grid
              key={index + `ids`}
              item
              p={{ xs: 1, md: 2 }}
              xs={12}
              md={4}
              textAlign={"center"}
            >
              <Box height="350px" sx={{}}>
                <Box
                  sx={{
                    background: img,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    pt: 2,
                    px: 3,
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="h3"
                    // mt="20px"
                    fontSize={{ xs: "16px", sm: "23px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="white"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="center"
                  >
                    {title}
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
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          mt="50px"
        >
          <Box
            component="h2"
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.1px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "40px" }}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            The DeFi Product Development
            <br />
            Process
          </Box>
          <Box
            component="p"
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="white"
            lineHeight={{ xs: "auto", sm: "22px" }}
            textAlign="center"
            pb={2}
            maxWidth="600px"
          >
            The DeFi product development process goes through multiple stages to
            ensure that client requirements and needs have been understood and
            met. These stages include:
          </Box>
        </Box>

        {/* prosses   ..>>>>>>>> */}

        <Box>
          {data.map(({ img, title, description }, index) => (
            <Grid container mb={3}>
              <Grid item sm={4} xs={12} minHeight="295px">
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"center"}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                    p: "80px",
                    height: "100%",
                  }}
                >
                  <img src={img} alt="" />
                </Box>
              </Grid>
              <Grid item sm={8} xs={12} minHeight="295px">
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={{ sm: "start", xs: "center" }}
                  sx={{
                    background: "#240035",
                    height: "100%",
                    px: { sm: "30px", xs: "10px" },
                  }}
                >
                  <Typography
                    variant={"h3"}
                    sx={{
                      fontWeight: 700,
                      fontSize: { sm: "28px", xs: "20px" },
                      color: "white",
                      textAlign: { sm: "start", xs: "center" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{
                      fontWeight: 400,
                      fontSize: { sm: "20px", xs: "15px" },
                      color: "white",

                      textAlign: { sm: "justify", xs: "center" },
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>

        {/* DeFi Product Development by BlocTech Solutions..>>>>>>>> */}

        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          mt="50px"
        >
          <Box
            component="h2"
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.1px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "40px" }}
            textAlign="center"
            // mt={"50px"}
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            DeFi Product Development by
            <br /> BlocTech Solutions
          </Box>
          <Box
            component="p"
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="white"
            lineHeight={{ xs: "auto", sm: "22px" }}
            my={5}
            // maxWidth="900px"
            textAlign="center"
          >
            Since 2020, We at BlocTech Solutions are not merely building dApps
            but also striving hard to nurture innovative practices in Web 3.0
            and inspire product companies and non-IT enterprises to build
            reliable blockchain solutions. We have completed more than 150
            blockchain projects till date. Over the course of this period, we
            have gained extensive experience in developing DeFi products, dApps,
            smart contract development and crypto wallet development. In working
            with notable customers such as Solar Dex, CARDENCE and others, we
            learnt a lot about market trends and latest innovations in the
            blockchain industry. Our expertise in the field includes end-to-end
            DeFi product development, the development of features such as
            staking, liquidity mining, non-custodial wallets, and more.
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#411F78",
              maxWidth: "800px",
            }}
          >
            <Box
              fontSize={{ xs: "20px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              lineHeight={{ xs: "auto", sm: "40px" }}
              color="#fff"
              //   display="flex"
              //   justifyContent="center"
              p={4}
              component="h2"
            >
              Are you working on a new DeFi project?
            </Box>
            <Box
              fontSize={{ xs: "13px", sm: "16px" }}
              fontWeight={400}
              letterSpacing="0.3px"
              color="#fff"
              lineHeight={{ xs: "auto", sm: "22px" }}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
              textAlign={{ xs: "center" }}
              my={2}
              component="p"
            >
              Get in touch with us to tell us more and find out how we can help
              you in this journey!
              <Button
                onClick={() => setOpenN(true)}
                sx={{
                  px: 4,
                  py: 2,
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  fontFamily: "Mulish",
                  marginTop: "40px",
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Benefitsdafi;

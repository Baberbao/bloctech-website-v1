import React from "react";
import { Box, Container, Grid, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "./assets/img1.png";
import text from "./assets/text.png";
import about from "./assets/about.png";

function AboutUs() {
  const matches = useMediaQuery("(max-width:700px)");
  const img = useMediaQuery("(max-width:800px)");
  return (
    <Box>
      <Box position={"relative"}>
        <img
          src={img1}
          style={{
            position: "absolute",
            right: "0",
            top: matches ? "0px" : "-500px",
            zIndex: "0 !important",
            width: img ? "100%" : "60%",
          }}
          alt="AboutUs"
        />
      </Box>
      <Box
        id="about"
        pt={{ sm: "20px", xs: "70px" }}
        pb={{ sm: "20px", xs: "70px" }}
        sx={{
          background: `#260238`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { sm: "top center", xs: "left" },
        }}
      >
        <Container maxWidth="lg">
          <Box
            pt={"30px"}
            pl={2}
            component="h2"
            textAlign="center"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            lineHeight={{ xs: "auto", sm: "40px" }}
            // sx={{
            //   background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            //   backgroundClip: "text",
            //   textFillColor: "transparent",
            // }}
            color="white"
          >
            About Us
          </Box>
          <Grid container spacing={8}>
            {/* <Grid item xs={2} sm={1}>
              <img width={"100%"} src={text} alt="AboutUs art" />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <Box ml={{ xs: 1, sm: 2 }}>
                <Box
                  component="h2"
                  fontSize={{ xs: "20px", sm: "34px" }}
                  fontWeight={700}
                  letterSpacing="0.1px"
                  sx={{
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                  lineHeight={{ xs: "auto", sm: "40px" }}
                >
                  Bloctech is a stocked Blockchain Consulting and Software
                  Development Company.
                </Box>
                <Box
                  component="p"
                  fontSize={{ xs: "16px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="white"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  my={5}
                  textAlign="justify"
                >
                  We’re specialized in developing decentralized applications
                  (dApps) and delivering blockchain startup companies with
                  consultation to enable them to develop new products or improve
                  existing ones.
                </Box>

                <Link style={{ textDecoration: "none" }} to={"/about-us/"}>
                  <Button
                    sx={{
                      backgroundColor: "#CC10C6",
                      borderRadius: "0px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      color: "#fff",
                      fontWeight: 700,
                      letterSpacing: "0.3px",
                      marginRight: "20px",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#CC10C6",
                        border: "1px solid #CC10C6",
                      },
                      py: 1,
                      px: 2,
                    }}
                  >
                    Find Out More
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} mt={{ md: "-90px", xs: "-50px" }}>
              <img src={about} width="100%" alt="" />
            </Grid>
          </Grid>
          {/* <Box
          textAlign="left"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          color="white"
          lineHeight={{ xs: "auto", sm: "56px" }}
          // mb={12}
          pt={8}
          sx={{ transform: "rotate(270deg)" }}
        >
          About Us
        </Box> */}
          {/* <Grid container spacing={{ xs: 0, sm: 4 }}>
          <Grid xs={12} sm={12} md={6}>
            <img src={about1} width="100%" height="100%" alt="" />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
           
          </Grid>
        </Grid> */}
        </Container>
      </Box>
    </Box>
  );
}

export default AboutUs;

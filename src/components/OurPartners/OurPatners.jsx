import React from "react";
import { Container, Box, Grid } from "@mui/material";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";

const mapArr = [p1, p2, p3, p4, p5];

function OurPatners() {
  return (
    <div id="partners">
      <Container maxWidth="lg">
        <Box pt="50px">
          <Box
            component="h2"
            pt="30px"
            textAlign="center"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            // sx={{
            //   background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            //   backgroundClip: "text",
            //   textFillColor: "transparent",
            // }}
            color="white"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Our Global Partners
          </Box>
          <Box
            // mt={13}
            sx={{
              padding: "25px 00px",
              borderRadius: "20px",
              boxShadow: "40",
              background: "transparent",
            }}
          >
            <Container maxWidth="xl">
              <Grid
                width="100%"
                container
                spacing={5}
                justifyContent="space-between"
              >
                {mapArr.map((item, i) => (
                  <Grid key={i} item md={2} sm={4} xs={12}>
                    <Box>
                      <Box textAlign={"center"}>
                        <img width={"200px"} src={item} alt="AlBarza logo" />
                      </Box>
                    </Box>
                  </Grid>
                ))}

                {/* <Grid item md={4} sm={6} xs={12}>
                  <Box
                    sx={
                      {
                        // display: "flex",
                        // alignItems: "center",
                        // justifyContent: "center",
                        // flexDirection: "column",
                      }
                    }
                  >
                    <Box textAlign={"center"}>
                      <img width={"100%"} src={p2} alt="RAB BLOCKCHAIN WEE" />
                    </Box>
                  </Box>
                </Grid> */}
              </Grid>
            </Container>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default OurPatners;

import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import archi from "./assets/archi.png";
import expertbg from "./assets/expertbg.png";

const Architecture = ({ openN, setOpenN }) => {
  return (
    <Box>
      <Box
        component="h2"
        textAlign="center"
        fontSize={{ xs: "20px", sm: "33px" }}
        fontWeight={700}
        letterSpacing="0.2px"
        lineHeight={{ xs: "auto", sm: "56px" }}
        my={6}
        sx={{
          fontFamily: "Mulish",
          background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        A Sample Blockchain Architecture
      </Box>

      <Box
        sx={{
          pb: 4,
        }}
      >
        <LazyLoadImage src={archi} alt="Blockchain Architecture" width="100%" />
        {/* <img /> */}
      </Box>
      <Box
        sx={{
          padding: "25px 20px",
          // my: 6,
          boxShadow: "5px 15px 30px 0px rgb(0 13 42 / 8%)",
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Box
            sx={{
              background: `url(${expertbg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: { sm: "top center", xs: "left" },
              p: 6,
            }}
          >
            <Grid item md={6} xs={12}>
              <Box py={2}>
                <Typography
                  variant="h2"
                  fontSize={{ xs: "20px", sm: "33px" }}
                  fontWeight={700}
                  letterSpacing="0.2px"
                  // color="#3B3F6D"
                  lineHeight={{ xs: "auto", sm: "40px" }}
                  sx={{
                    fontFamily: "Mulish",
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Get Expert Help to Roll Out Blockchain Software
                </Typography>
                <Typography
                  variant="body1"
                  my={3}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={400}
                  color="white"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                >
                  BlocTech Solutions is ready to build:
                </Typography>
                <Box
                  fontWeight={400}
                  color="white"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                >
                  <ul className="blocklist">
                    <li>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Blockchain-based products
                      </span>
                      for product companies to generate revenue fast.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Tailored blockchain solutions
                      </span>
                      for non-IT enterprises to improve the trust, transparency
                      and security of their businesses.
                    </li>
                  </ul>
                </Box>
                <Button
                  onClick={() => setOpenN(true)}
                  sx={{
                    borderRadius: "10px",
                    py: 2,
                    px: 2,
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                    marginRight: "20px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#3B3F6D",
                      border: "1px solid #3B3F6D",
                    },
                    background:
                      "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  }}
                >
                  REQUEST ASSISTANCE
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Architecture;

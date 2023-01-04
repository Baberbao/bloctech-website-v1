import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Stack, Container } from "@mui/material";
import { Link } from "react-router-dom";

function ModalD({ disclaimer, setDisclaimer, terms1 }) {
  const style = {
    position: "fixed",
    bottom: terms1 == "block" ? "40px" : "0",
    width: "100%",
    bgcolor: "#3B3F6D",
    boxShadow: 24,
  };
  return (
    <div>
      {/* <Container maxWidth="lg"> */}
      <Stack justifyContent={"center"}>
        <Box
          sx={style}
          height={{ md: "40px", xs: "120px" }}
          display={disclaimer}
        >
          {/* <Grid container justifyContent="space-around"> */}
          {/* <Grid item xs={12} md={10}> */}
          <Box
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="white"
            lineHeight={{ xs: "auto", sm: "22px" }}
            // my={5}
            textAlign="center"
            px="8px"
            pt="10px"
          >
            Please Review our
            <Link to={"/disclaimer/"} style={{ color: "white" }}>
              {" "}
              Disclaimer
            </Link>{" "}
            first before you cantact us.
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={12} md={2}>
              <Stack
                direction="row"
                rowGap={2}
                justifyContent="space-evenly"
                alignItems="center"
                // pt="30px"
                height={"100%"}
              >
                <Button
                  variant="contained"
                  onClick={setValueToLocalStorage}
                  sx={{
                    color: "white",
                    background: "#3B3F6D",
                    marginTop: "10px",
                    fontWeight: "700",
                    transition: "1s",
                    "&:hover": {
                      color: "#3B3F6D",
                      background: "white",
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                      },
                    },
                    "&:active": {
                      color: "#3B3F6D",
                      background: "white",
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                      },
                    },
                  }}
                >
                  Agree
                </Button>
                <Link to="/terms" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      color: "white",
                      background: "#3B3F6D",
                      marginTop: "10px",
                      fontWeight: "700",
                      transition: "1s",
                      "&:hover": {
                        color: "#3B3F6D",
                        background: "white",
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                        },
                      },
                      "&:active": {
                        color: "#3B3F6D",
                        background: "white",
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                        },
                      },
                    }}
                    variant="outlined"
                    onClick={readTermsAndModalOff}
                  >
                    Read
                  </Button>
                </Link>
              </Stack>
            </Grid> */}
          {/* </Grid> */}
        </Box>
        {/* </Modal> */}
      </Stack>
      {/* </Container> */}
    </div>
  );
}

export default ModalD;

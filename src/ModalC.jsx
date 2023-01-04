import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

import { Link } from "react-router-dom";
const style = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  bgcolor: "#002244",
  boxShadow: 24,
  zIndex: 1000,
};
function ModalC({ setTerms, open, setOpen, terms1, setTerms1, terms }) {
  const setValueToLocalStorage = () => {
    localStorage.setItem("terms", "true");
    setTerms1("none");
    setTerms(true);
  };

  return (
    <div>
      {/* <Container maxWidth="lg"> */}
      <Stack justifyContent={"center"}>
        <Box sx={style} height={{ md: "50px", xs: "80px" }} display={terms1}>
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
            Please Review our{" "}
            <Link to={"/terms/"} style={{ color: "white" }}>
              {" "}
              terms & conditions{" "}
            </Link>{" "}
            by using this site, you agree to our terms and
            <Link to={"/cookiepolicy/"} style={{ color: "white" }}>
              {" "}
              cookie policy.
            </Link>
            <Button
              variant="contained"
              onClick={setValueToLocalStorage}
              sx={{
                color: "#3B3F6D",
                background: "white",
                fontWeight: "700",
                mx: 2,
                fontSize: {
                  xs: "11px",
                  md: "13px",
                },
                "& hover": {
                  background: "white",
                  color: "#3B3F6D",
                },
              }}
            >
              Agree
            </Button>
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

export default ModalC;

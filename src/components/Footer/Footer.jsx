import React from "react";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./footer.css";
// import bg from "./assets/bg.svg";
import backgroundfooter from "./assets/backgroundfooter.png";
import logo from "./assets/logo.png";
function Footer() {
  const check = useMediaQuery("(max-width:750px)");
  return (
    <>
      <Box
        sx={{
          background: `url(${backgroundfooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: { sm: "cover", xs: "cover" },
          backgroundPosition: { sm: "right", xs: "center" },
        }}
        // bgcolor="text.secondary"
        py={8}
      >
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              textAlign={{ md: "left", xs: "center" }}
            >
              <img src={logo} alt="Logo" />
            </Grid>
            <Grid
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
              item
              xs={6}
              sm={4}
              md={3}
            >
              <Box
                fontSize={{ xs: "16px", sm: "14px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#fff"
                lineHeight={{ xs: "auto", sm: "20px" }}
                mb={2}
              >
                Company
              </Box>

              <HashLink
                smooth
                className="txt_dec"
                style={{ textDecoration: "none" }}
                to={"/career/"}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Career
                </Box>
              </HashLink>

              <HashLink
                smooth
                className="txt_dec"
                style={{ textDecoration: "none" }}
                to={"/faq/"}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Faq's
                </Box>
              </HashLink>
              <HashLink
                smooth
                className="txt_dec"
                style={{ textDecoration: "none" }}
                to={"/about-us/"}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  About us
                </Box>
              </HashLink>

              <HashLink
                smooth
                className="txt_dec"
                style={{ textDecoration: "none" }}
                to={"/sitemap/"}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Sitemap
                </Box>
              </HashLink>
            </Grid>
            <Grid
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
              item
              xs={6}
              sm={4}
              md={3}
            >
              <Box
                fontSize={{ xs: "16px", sm: "14px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#fff"
                lineHeight={{ xs: "auto", sm: "20px" }}
                mb={2}
              >
                Support
              </Box>
              <a
                smooth
                style={{ textDecoration: "none" }}
                target="_blank"
                className="txt_dec"
                href="https://wa.me/+923138604818"
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Support
                </Box>
              </a>

              <Link
                className="txt_dec"
                to={"/privacy-policy/"}
                style={{ textDecoration: "none" }}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Privacy
                </Box>
              </Link>
              <Link
                className="txt_dec"
                to={"/terms/"}
                style={{ textDecoration: "none" }}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Terms
                </Box>
              </Link>

              <Link
                className="txt_dec"
                to={"/cookiepolicy/"}
                style={{ textDecoration: "none" }}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Cookies Policy
                </Box>
              </Link>

              <Link
                className="txt_dec"
                to={"/delivery-policy/"}
                style={{ textDecoration: "none" }}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Delivery Policy
                </Box>
              </Link>
              <Link
                className="txt_dec"
                to={"/refund-policy/"}
                style={{ textDecoration: "none" }}
              >
                <Box
                  fontSize={{ xs: "16px", sm: "14px" }}
                  fontWeight={400}
                  letterSpacing="0.2px"
                  lineHeight={{ xs: "auto", sm: "20px" }}
                >
                  Refund Policy
                </Box>
              </Link>
            </Grid>
            <Grid
              sx={{
                textAlign: { xs: "center", md: "left" },
                mt: check ? 4 : 0,
              }}
              item
              xs={12}
              sm={4}
              md={3}
            >
              {/* <Box
                fontSize={{ xs: "16px", sm: "14px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#fff"
                lineHeight={{ xs: "auto", sm: "20px" }}
                mb={2}
              >
                Follow Us
              </Box> */}
              {/* 
              <Stack
                px={check ? "40px" : "10px"}
                mt="10px"
                direction="row"
                alignItems={"center"}
                justifyContent="space-evenly"
              >
                <a
                  href="https://twitter.com/BloctechS"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Box
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    lineHeight={{ xs: "auto", sm: "20px" }}
                  >
                    <TwitterIcon />
                  </Box>
                </a>
                <Box
                  width={"2px"}
                  sx={{
                    background: "#002244",
                  }}
                  height="20px"
                  background="#002244"
                ></Box>
                <a
                  href="https://www.facebook.com/BlocTechSolutions/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Box
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    lineHeight={{ xs: "auto", sm: "20px" }}
                  >
                    <FacebookIcon />
                  </Box>
                </a>
                <Box
                  width={"2px"}
                  height="20px"
                  sx={{
                    background: "#002244",
                  }}
                  background="#002244"
                ></Box>
                <a
                  href="
              https://www.linkedin.com/company/bloctech-solution/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Box
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    lineHeight={{ xs: "auto", sm: "20px" }}
                  >
                    <LinkedInIcon />
                  </Box>
                </a>
              </Stack> */}
              {/* 
              <Stack
                px={check ? "80px" : "50px"}
                mt="10px"
                direction="row"
                alignItems={"center"}
                justifyContent="space-evenly"
              >
                <a
                  href="https://www.instagram.com/bloctechsolutions/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Box
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    lineHeight={{ xs: "auto", sm: "20px" }}
                  >
                    <InstagramIcon />
                  </Box>
                </a>
                <Box
                  width={"2px"}
                  height="20px"
                  sx={{
                    background: "#002244",
                  }}
                  background="#002244"
                ></Box>
                <a
                  href="
                https://medium.com/@bloctechsolutions090"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Box
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    lineHeight={{ xs: "auto", sm: "20px" }}
                  >

                    <BsMedium style={{ fontSize: "16px" }} />
                  </Box>
                </a>
              </Stack> */}
              <Box
                fontSize={{ xs: "16px", sm: "14px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                color="#fff"
                lineHeight={{ xs: "auto", sm: "20px" }}
                mb={2}
              >
                Company Address
              </Box>

              {check ? (
                <></>
              ) : (
                <>
                  {" "}
                  <Box
                    // pt="20px"
                    width="100%"
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    textAlign={{ xs: "center ", md: "left" }}
                    color="white"
                    sx={{
                      // overflowX: "hidden",
                      // textOverflow: "ellipsis",
                      wordBreak: "break-word",
                      // wordWrap: "wrap",
                    }}
                  >
                    5th Floor, GM Plaza, Kohinoor City, Faisalabad, Punjab 38000
                  </Box>
                </>
              )}

              {check ? (
                ""
              ) : (
                <a
                  style={{ color: "#fff", textDecoration: "none" }}
                  href="mailto:contact@bloctechsolutions.com"
                >
                  <Box
                    width="100%"
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    textAlign={{ xs: "center ", md: "left" }}
                    color="white"
                    sx={{
                      // overflowX: "hidden",
                      // textOverflow: "ellipsis",
                      wordBreak: "break-word",
                      // wordWrap: "wrap",
                    }}
                  >
                    contact@bloctechsolutions.com
                  </Box>
                </a>
              )}
              {check ? (
                <></>
              ) : (
                <>
                  {" "}
                  <Box
                    width="100%"
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    textAlign={{ xs: "center ", md: "left" }}
                    color="white"
                    sx={{
                      // overflowX: "hidden",
                      // textOverflow: "ellipsis",
                      wordBreak: "break-word",
                      // wordWrap: "wrap",
                    }}
                  >
                    Phone# (+92)03138604818
                  </Box>
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#1B0525",
          display: "flex",
          justifyContent: "center",
          py: "30px",
          color: "#FFFFFF",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "15px",
        }}
      >
        All rights Reserved @ bloctechsolutions 2022
      </Box>
    </>
  );
}

export default Footer;

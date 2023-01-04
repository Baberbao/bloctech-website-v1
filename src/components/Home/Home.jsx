import React from "react";
import {
  Box,
  Container,
  Button,
  useMediaQuery,
  Stack,
  Grid,
} from "@mui/material";
import bg1 from "./assets/bg.png";
import { HashLink } from "react-router-hash-link";
import move2 from "./assets/move2.png";
import { useEffect } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap, { Bounce, Linear, TweenLite } from "gsap";
import Draggable from "gsap/Draggable";
import lefttop from "./assets/topleft.png";
import bottom from "./assets/bottm.png";
import last from "./assets/last.png";
import Rotateanimation from "./Rotateanimation";

gsap.registerPlugin(
  MotionPathPlugin,
  Draggable
); /* register the MotionPath plugin */

function Home({ openN, setOpenN }) {
  const [openE, setOpenNE] = React.useState(false);
  const matches = useMediaQuery("(max-width:700px)");
  const ani = useMediaQuery("(max-width: 899px");

  useEffect(() => {
    (async () => {
      gsap.to(".homemove2", {
        // yoyo: true,
        repeat: -1,
        duration: 8,
        ease: Linear.easeIn,
        motionPath: {
          path: ".homepath2",
          align: ".homepath2",
          alignOrigin: [0.5, 0.5],
          autoRotate: 70,
        },
      });
    })();
  }, [ani]);

  React.useEffect(() => {
    setTimeout(() => {
      setOpenNE(true);
    }, 2000);
  }, []);

  // React.useEffect(() => {
  //   if (openE) {
  //     gsap.to(".homemove11", {
  //       yoyo: true,
  //       repeat: -1,
  //       duration: 8,
  //       ease: Linear.easeIn,
  //       motionPath: {
  //         path: ".homepath11",
  //         align: ".homepath11",
  //         alignOrigin: [0.5, 0.5],
  //         autoRotate: true,
  //       },
  //     });
  //   }
  // }, [openE, ani]);

  React.useEffect(() => {
    // draggable

    let lastPos = { x: 0, y: 0 };
    Draggable.create(".drag", {
      type: "x,y",
      onPress: function () {
        lastPos.x = this.x;
        lastPos.y = this.y;
        console.log(" last position : " + lastPos.x, lastPos.y); // get Draggable current position
      },
      onDragEnd: function () {
        TweenLite.to(
          this.target,
          1,
          { x: lastPos.x, y: lastPos.y },
          Bounce.easeIn
        );
      },
    });
  }, []);

  return (
    <>
      <Box position={"relative"} zIndex="0">
        <svg
          className="simpe"
          style={{
            position: "absolute",
            top: ani ? "0px" : "-100px",
            left: ani ? "-40px" : "-100px",
            zIndex: "-1 !important",
          }}
          width={ani ? "200" : "700"}
          height={ani ? "200" : "700"}
          viewBox="0 0 775 775"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="homepath2"
            d="M387.5 775C284.012 775 186.672 734.7 113.512 661.488C40.3 588.277 0 490.988 0 387.5C0 284.012 40.3 186.672 113.512 113.512C186.723 40.3 284.012 0 387.5 0C490.988 0 588.328 40.3 661.488 113.512C734.7 186.723 775 284.012 775 387.5C775 490.988 734.7 588.328 661.488 661.488C588.328 734.648 490.988 775 387.5 775ZM387.5 4.39166C176.287 4.39166 4.39167 176.235 4.39167 387.5C4.39167 598.713 176.235 770.608 387.5 770.608C598.765 770.608 770.608 598.765 770.608 387.5C770.608 176.235 598.765 4.39166 387.5 4.39166Z"
            fill="url(#paint0_linear_1283_16)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1283_16"
              x1="0.000516667"
              y1="387.473"
              x2="775.007"
              y2="387.473"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0F98C5" />
              <stop offset="0.2243" stopColor="#0D4996" />
              <stop offset="0.327" stopColor="#194696" />
              <stop offset="0.5919" stopColor="#962C92" />
              <stop offset="0.7811" stopColor="#DE658C" />
              <stop offset="1" stopColor="#FFB3B3" />
            </linearGradient>
          </defs>
        </svg>

        {/* {!ani && (
          <img
            className="homemove2"
            src={move2}
            style={{ position: "absolute", transform: "rotate(90deg)" }}
            alt=""
          />
        )} */}
        {/* <img
          className="drag"
          style={{
            position: "absolute",
            left: "30%",
            top: ani ? "0px" : "-60px",
          }}
          width={ani ? "130px" : "300px"}
          src={dragimg}
          alt=""
        /> */}
        {/* {!ani && (
          <img
            src={lefttop}
            alt=""
            width={ani ? "180px" : "300px"}
            style={{
              position: "absolute",
              right: "0px",
              top: ani ? "79px" : "50px",
            }}
          />
        )} */}
      </Box>
      <Box
        sx={{
          // background: `url(${bg1})`,
          background:
            "radial-gradient(164.31% 249.62% at 18.6% 0%, #A75D9E 5.42%, #66158D 36.23%, #172263 67.22%, #058BAE 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { sm: "top center", xs: "left" },
          zIndex: "1000",
          py: { sm: 3, xs: "100px" },
        }}
      >
        <Box id="home" pb={{ sm: "100px", xs: "100px" }}>
          <Container>
            <Grid container pt={{ xs: 10, sm: 20 }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                order={{ xs: 2, md: 1 }}
                sx={{ zIndex: "100 !important" }}
              >
                <Box
                  component={"h1"}
                  textAlign={{ md: "left", xs: "center" }}
                  fontSize={{ xs: "25px", sm: "44px" }}
                  fontWeight={700}
                  letterSpacing="0.2px"
                  color="white"
                  lineHeight={{ xs: "auto", sm: "56px" }}
                  mt={8}
                  sx={{
                    fontFamily: "Mulish",
                    zIndex: "5",
                  }}
                >
                  We Build Blockchain Solutions, Softwares and Applications
                </Box>
                <Box
                  textAlign={{ sm: "left", xs: "center" }}
                  my={4}
                  component={"p"}
                  fontSize={{ xs: "16px", sm: "16px" }}
                  fontWeight={400}
                  color="white"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                  // px={{ xs: 1, sm: 5 }}
                  sx={{ zIndex: "5" }}
                >
                  A leading blockchain development company nurturing innovative
                  practices in Web 3.0 and inspiring product companies and
                  non-IT enterprises to build reliable blockchain solutions.
                </Box>
                <Box
                  display="flex"
                  justifyContent={{ sm: "flex-start", xs: "center" }}
                  mt={6}
                >
                  <HashLink
                    smooth
                    style={{
                      textDecoration: "none",
                      position: "relative",
                      zIndex: "5",
                    }}
                    to={"/contact-us/"}
                  >
                    <Button
                      // onClick={() => setOpenN(true)}
                      sx={{
                        width: "120px",
                        height: "40px",
                        // backgroundColor: "#3B3F6D
                        background:
                          " linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",

                        borderRadius: "0px",
                        fontSize: matches ? "12px" : "14px",
                        textTransform: "capitalize",
                        color: "#fff",
                        fontWeight: 700,
                        letterSpacing: "0.3px",
                        marginRight: "20px",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#280959",
                          border: "1px solid #280959",
                        },
                      }}
                    >
                      Contact us
                    </Button>
                  </HashLink>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sm={12} order={{ xs: 1, md: 2 }}>
                {/* =================thy animation============== */}

                <Box
                  display="flex"
                  justifyContent={{ md: "center", xs: "center" }}
                  flexDirection={"column"}
                  alignItems="center"
                >
                  <Box
                    textAlign={{ md: "right", xs: "center" }}
                    // mt={{ md: "40px", xs: "20px" }}
                    width="100%"
                    zIndex="1"
                    position="relative"
                  >
                    {/* <svg
                      width="80%"
                      height="auto"
                      viewBox="0 0 172 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="homepath11"
                        d="M85.83 171.66C133.233 171.66 171.66 133.233 171.66 85.83C171.66 38.4274 133.233 0 85.83 0C38.4274 0 0 38.4274 0 85.83C0 133.233 38.4274 171.66 85.83 171.66Z"
                        fill="url(#paint0_radial_1258_22594)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_1258_22594"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(227.303 188.614) rotate(-10.4919) scale(345.172 345.172)"
                        >
                          <stop stopColor="#0F98C5" />
                          <stop offset="0.2243" stopColor="#0D4996" />
                          <stop offset="0.327" stopColor="#194696" />
                          <stop offset="0.5919" stopColor="#962C92" />
                          <stop offset="0.7811" stopColor="#DE658C" />
                          <stop offset="1" stopColor="#FFB3B3" />
                        </radialGradient>
                      </defs>
                    </svg> */}
                    <Box>
                      <Rotateanimation />
                    </Box>
                    <Box>
                      {/* {openE && (
                        <img
                          className="homemove11"
                          style={{
                            position: "absolute",
                            width: "200px",
                            zIndex: "-1",
                          }}
                          src={move1}
                          alt=""
                        />
                      )} */}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Stack alignItems={"center"} justifyContent="center">
            <Box height={"auto"} position="relative">
              {/* <MainImage /> */}

              <Box>
                <Container maxWidth="md"></Container>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box position={"relative"}>
          {!ani && (
            <img
              src={bottom}
              style={{
                position: "absolute",
                left: "0px",
                top: "-522px",
              }}
              alt=""
            />
          )}

          {!ani && (
            <img
              src={last}
              style={{
                position: "absolute",
                left: "20%",
                top: "-240px",
              }}
              alt=""
            />
          )}
        </Box>
      </Box>
    </>
  );
}

export default Home;

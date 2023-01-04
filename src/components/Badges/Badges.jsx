import React, { useEffect } from "react";
import { Box, Container, Grid, Button, Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import b1 from "./assets/b1.svg";
import b2 from "./assets/b2.svg";
import b4 from "./assets/b4.svg";
import b5 from "./assets/b5.svg";
import b6 from "./assets/b6.svg";
import b7 from "./assets/b7.svg";

function Badges() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselData = [
    // {
    //   id: 1,
    //   image: b3,
    //   link: "https://www.appfutura.com/companies/bloctech-solutions",
    // },
    {
      id: 2,
      image: b5,
      link: "https://www.bark.com/en/us/company/bloctech-solutions/vlYY0/",
      alt: "bark",
    },
    {
      id: 3,
      image: b2,
      link: "https://clutch.co/profile/bloctech-solutions-0#summary",
      alt: "clutch",
    },
    {
      id: 4,
      image: b7,
      link: "https://www.glassdoor.com/Overview/Working-at-BlocTech-Solutions-EI_IE7062920.11,29.htm",
      alt: "glassdoor",
    },
    {
      id: 5,
      image: b1,
      link: "https://www.goodfirms.co/community/profile/bloctech-solutions",
      alt: "goodfirms",
    },
    {
      id: 6,
      image: b4,
      link: "https://www.upwork.com/o/companies/~0171857b6814761962/",
      alt: "upwork",
    },
    {
      id: 7,
      image: b6,
      link: "https://www.trustpilot.com/review/bloctechsolutions.com",
    },
    {
      id: 8,
      image: b1,
      link: "https://www.topdevelopers.co/profile/bloctechsolutions",
      alt: "topdevelopers",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="lg">
        {/* <Box
          textAlign="center"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          color="#3B3F6D"
          lineHeight={{ xs: "auto", sm: "56px" }}
        >
          Achivments and Badges
        </Box> */}
        <Grid item xs={12} mt={13}>
          <Box
            sx={{
              padding: "25px 0px",
              borderRadius: "20px",
              boxShadow: "0px 9px 21px 0px rgb(0 13 42 / 8%)",
            }}
          >
            <Carousel
              showDots={false}
              responsive={responsive}
              autoPlaySpeed={2000}
              autoPlay={true}
              infinite={true}
              transitionDuration={500}
              arrows={true}
            >
              {carouselData.map(({ id, image, link, alt }) => (
                <div key={id} style={{ textAlign: "center" }}>
                  <a
                    smooth
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href={link}
                    rel="noreferrer"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        boxSizing: "border-box",
                        margin: "auto",
                        // maxWidth: "30rem",
                        // height: "10rem",
                        justifyContent: "center",
                      }}
                    >
                      <img src={image} alt={alt} style={{ width: "85%" }} />
                    </Box>
                  </a>
                </div>
              ))}
            </Carousel>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

export default Badges;

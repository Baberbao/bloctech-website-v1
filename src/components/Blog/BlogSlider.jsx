import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import thumb23 from "./assets/thumb23.jpg";
import thumb22 from "./assets/thumb22.png";
import thumb24 from "./assets/thumb24.png";
import thumb25 from "./assets2/thumb25.png";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import bg1 from "./assets/bg1.png";

const blogCards = [
  {
    pic: `${thumb22}`,
    desc: "How Blockchain Started? What is happening in the current process and what will Blockchain's future be? Read Everything in History and Evolution of Blockchain Technology Blog.",
    link: "the-core-difference-between-web-3.0-and-web-2.0",
    title:
      "Understand Web 3.0 and the Core Difference between Web 3.0 and Web 2.0",
  },
  {
    pic: `${thumb23}`,
    desc: "Both investors and consumers are making big profits by investing in WEB 3.0 you guys also need some understanding on How to invest in the web 3 ecosystem?",
    link: "how-to-invest-in-web3-ecosystem",
    title: "A Detailed Guide: How to invest in Web3 Ecosystem?",
  },
  {
    pic: `${thumb24}`,

    desc: "when we talk about the use cases of blockchain technology in business there are numbers of applications where blockchain can be used to secure the DATA.",
    link: "use-cases-of-blockchain-technology",
    title: "Rising Number of Use Cases of Blockchain Technology in Business",
  },
  {
    pic: `${thumb25}`,

    desc: "The economy is upgrading and NFTs are getting most of the attractions. We need to understand what are NFTs and How NFTs works?",
    link: "what-is-nft-and-how-does-nft-work",
    title:
      "What is NFT and how does NFT work? A Comprehensive Guide for Beginners",
  },
];

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

const BlogSlider = () => {
  return (
    <div>
      <Box py="30px">
        <Box component="h3">
          <Typography
            fontSize="25px"
            // sx={{
            //   background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            //   backgroundClip: "text",
            //   textFillColor: "transparent",
            // }}
            color="white"
            fontWeight="700"
            textAlign={"center"}
          >
            More Related Blogs
          </Typography>
        </Box>{" "}
      </Box>
      <Carousel
        showDots={false}
        responsive={responsive}
        autoPlaySpeed={2000}
        autoPlay={true}
        infinite={true}
        transitionDuration={500}
        arrows={true}
      >
        {blogCards.map(({ pic, desc, link, title }, i) => {
          return (
            <Box p="50px">
              <Box
                height="100%"
                sx={{
                  backgroundImage: `url(${bg1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <Link
                  to={`/blog/${link}/`}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <Box borderRadius="12px" overflow="hidden">
                    <img src={pic} alt="" width="100%" />
                    <Box p={2}>
                      <Box component={"h3"} py="10px" m="0px">
                        <Typography fontSize={"18px"} fontWeight="700">
                          {title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="#fff" fontWeight="700">
                        {desc}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BlogSlider;

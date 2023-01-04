import React, { useState, useEffect } from "react";
import { Box, Container, Hidden, Button, useMediaQuery } from "@mui/material";

import { Link as LinkR, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { HashLink } from "react-router-hash-link";
import MenuItems from "./MenuItems";
import "./Dropdown.css";

import CustomDrawer from "./CustomDrawer";

import logo1 from "./assets/logo.png";

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: "70px",
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#fff !important",
    justifyContent: "space-between",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
  colorChange: {
    boxShadow: "1px 1px 6px #727272",
    backgroundColor: "#fff",
  },
});

function Navbar({ openN, setOpenN }) {
  const matches = useMediaQuery("(max-width:700px)");
  const classes = useStyles();

  const location = useLocation();

  const [colorChange, setColorchange] = useState(false);
  const [locations, setlocations] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    setlocations(locations);
  }, [location]);

  const menuItemsProduct = [
    {
      title: "Products",
      link: locations,
      submenu: [
        {
          title: "Private Blockchain Development",
          link: "/private-blockchain-services/",
        },
        {
          title: "Token Development",
          link: "/token-development-services/",
        },
        {
          title: "P2P Lending Platform Development",
          link: "/p2p-lending-platform-development/",
        },
        {
          title: "DAO Development Services",
          link: "/dao-service-and-development-company/",
        },
        {
          title: "Centralized Exchange Development",
          link: "/centralized-exchange-development/",
        },
        {
          title: "Multichain Development Services",
          link: "/multichain-development-services/",
        },
      ],
    },
  ];

  const learnArray = [
    {
      title: "Learn",
      link: locations,
      submenu: [
        {
          title: "Blogs",
          link: "/blog/",
        },
        {
          title: "Academy",
          link: locations,
        },
      ],
    },
  ];
  const menuItemsBlock = [
    {
      title: "Services",
      link: locations,
      submenu: [
        {
          title: " Smart Contract Audit",
          link: "/smart-contract-audit-company/",
        },
        {
          title: "Blockchain Development Services",
          link: "/blockchain-development-services/",
        },
        {
          title: "Defi Development Services",
          link: "/defi-development-services/",
        },
        {
          title: "dApp development company",
          link: "/dapp-development-company/",
        },
        {
          title: "Blockchain Consulting Services",
          link: "/blockchain-consulting-services/",
        },
        {
          title: "Tokenization services",
          link: "/tokenization-service/",
        },

        {
          title: "Smart Contract Services",
          link: "/smart-contract-development-services/",
        },
        {
          title: "Crypto Wallet Development Services",
          link: "/crypto-wallet-development-service/",
        },
      ],
    },
  ];
  return (
    <Box id="nav" position="relative">
      <Box
        sx={{
          position: "fixed",
          zIndex: 1000,
          background: "#280959",
        }}
        width="100vw"
        className={colorChange ? classes.colorChange : null}
        py={1}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height="65px"
          >
            <HashLink smooth style={{ textDecoration: "none" }} to={"/"}>
              <Box>
                <img src={logo1} alt="" />
              </Box>
            </HashLink>
            <Hidden mdDown>
              <Box
                display="flex"
                flexBasis="70%"
                justifyContent="flex-end"
                alignItems="center"
              >
                <HashLink
                  smooth
                  style={{ textDecoration: "none" }}
                  to={"/about-us/"}
                >
                  <Box
                    fontSize={{ xs: "12px", sm: "16px" }}
                    fontWeight={600}
                    letterSpacing="0.2px"
                    color="white"
                    sx={{
                      "&:hover": {
                        color: "#CC10C6",
                      },
                      "&:active": {
                        color: "#CC10C6",
                      },
                      cursor: "pointer",
                      padding: "5px  8px",
                      borderRadius: "10px",
                      transition: "1s",
                      fontFamily: "Mulish",
                    }}
                  >
                    About Us
                  </Box>
                </HashLink>
                {/* <Box sx={{ background: "#280959" }} position="relative">
                  <ul className="menus">
                    {menuItemsBlock.map((menu, index) => {
                      const depthLevel = 0;
                      return (
                        <MenuItems
                          items={menu}
                          key={index}
                          depthLevel={depthLevel}
                          services={false}
                        />
                      );
                    })}
                  </ul>
                </Box> */}

                <Box
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={600}
                  letterSpacing="0.2px"
                  color="white"
                  sx={{
                    "&:hover": {
                      color: "#CC10C6",
                    },
                    "&:active": {
                      color: "#CC10C6",
                    },
                    cursor: "pointer",
                    padding: "5px  8px",
                    borderRadius: "10px",
                    transition: "1s",
                    fontFamily: "Mulish",
                  }}
                >
                  Services
                </Box>

                <Box
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={600}
                  letterSpacing="0.2px"
                  color="white"
                  sx={{
                    "&:hover": {
                      color: "#CC10C6",
                    },
                    "&:active": {
                      color: "#CC10C6",
                    },
                    cursor: "pointer",
                    padding: "5px  8px",
                    borderRadius: "10px",
                    transition: "1s",
                    fontFamily: "Mulish",
                  }}
                >
                  Products
                </Box>

                {/* -----------learn dropdown-------------- */}
                <Box sx={{ background: "#280959" }} position="relative">
                  <ul className="menus">
                    {learnArray.map((menu, index) => {
                      const depthLevel = 0;
                      return (
                        <MenuItems
                          items={menu}
                          key={index}
                          depthLevel={depthLevel}
                          services={false}
                        />
                      );
                    })}
                  </ul>
                </Box>
                {/* <Box position="relative" sx={{}}>
                  <ul className="menus">
                    {menuItemsProduct.map((menu, index) => {
                      const depthLevel = 0;
                      return (
                        <MenuItems
                          items={menu}
                          key={index}
                          depthLevel={depthLevel}
                          services={false}
                        />
                      );
                    })}
                  </ul>
                </Box> */}

                {/* <LinkR
                  style={{ textDecoration: "none" }}
                  to={"/smart-contract-audit-company/"}
                >
                  <Box
                    fontSize={{ xs: "12px", sm: "14px" }}
                    fontWeight={600}
                    letterSpacing="0.2px"
                    color="white"
                    sx={{
                      "&:hover": {
                        color: "#CC10C6",
                      },
                      "&:active": {
                        color: "#CC10C6",
                      },
                      cursor: "pointer",
                      padding: "5px  8px",
                      borderRadius: "10px",
                      transition: "1s",
                      fontFamily: "Mulish",
                    }}
                  >
                    Smart Contract Audit
                  </Box>
                </LinkR> */}

                {/* <HashLink
                  smooth
                  style={{ textDecoration: "none" }}
                  to={"/contact-us/"}
                >
                  <Box
                    fontSize={{ xs: "12px", sm: "14px" }}
                    fontWeight={600}
                    letterSpacing="0.2px"
                    color="white"
                    sx={{
                      "&:hover": {
                        color: "#CC10C6",
                      },
                      "&:active": {
                        color: "#CC10C6",
                      },

                      transition: "1s",
                      cursor: "pointer",
                      padding: "5px  8px",
                      borderRadius: "10px",
                      fontFamily: "Mulish",
                    }}
                  >
                    Contact Us
                  </Box>
                </HashLink> */}
                {/* <HashLink
                  smooth
                  style={{ textDecoration: "none" }}
                  to={"/blog/"}
                >
                  <Box
                    fontSize={{ xs: "12px", sm: "14px" }}
                    fontWeight={600}
                    letterSpacing="0.2px"
                    color="white"
                    sx={{
                      "&:hover": {
                        color: "#CC10C6",
                      },
                      "&:active": {
                        color: "#CC10C6",
                      },
                      cursor: "pointer",
                      padding: "5px  8px",
                      borderRadius: "10px",
                      transition: "1s",
                      fontFamily: "Mulish",
                    }}
                  >
                    Blogs
                  </Box>
                </HashLink> */}
              </Box>
              <Box>
                <Button
                  onClick={() => setOpenN(true)}
                  sx={{
                    textAlign: "center",
                    background:
                      "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",
                    // border: "1px solid #CC10C6",
                    // borderRadius: "0px",
                    fontSize: matches ? "14px" : "16px",
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: "0.3px",
                    my: 3,
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                      // border: "1px solid #CC10C6",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Hidden>

            <Hidden mdUp>
              <CustomDrawer openN={openN} setOpenN={setOpenN} />
            </Hidden>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Navbar;

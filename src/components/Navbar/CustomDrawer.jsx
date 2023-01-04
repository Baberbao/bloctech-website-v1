import React, { useState } from "react";
import {
  Box,
  Button,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  Menu,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import clsx from "clsx";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { Link as LinkR } from "react-router-dom";
import logo1 from "./assets/logo.png";
import Hamburger from "hamburger-react";

const StyledMenu = styled((props) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 160,
    color: "white",
    border: "none",

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
  },
}));

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
    background: "#280959 !important",
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

const blockchainData = [
  {
    title: "Blockchain Services",
    link: "/blockchain-development-services/",
  },
  {
    title: "Defi Product Development",
    link: "/defi-development-services/",
  },
  {
    title: "dApp development",
    link: "/dapp-development-company/",
  },
  {
    title: "Tokenization services",
    link: "/tokenization-service/",
  },
  {
    title: "Blockchain Consulting Services",
    link: "/blockchain-consulting-services/",
  },

  {
    title: "Smart Contract Services",
    link: "/smart-contract-development-services/",
  },
  {
    title: "Crypto Wallet Development Services",
    link: "/centralized-exchange-development/",
  },
];

const productData = [
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
    title: "Multichain Development Services",
    link: "/multichain-development-services/",
  },
];

function CustomDrawer({ openN, setOpenN }) {
  const [isOpen, setOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width:700px)");
  const classes = useStyles();
  const [state, setState] = useState(false);

  //----------------------accordion setup------------------------

  const [expanded, setExpanded] = React.useState(false);
  const check = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //-------------------DRawer------------------------------------
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setOpen(open);
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      style={{ background: "#280959" }}
      role="presentation"
    >
      <LinkR to="/" style={{ cursor: "pointer" }}>
        <Box
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          mb={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img width={"100px"} src={logo1} alt="" />
        </Box>
      </LinkR>

      <List>
        <ListItem sx={{ justifyContent: "center", p: "0px" }}>
          <Box
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <LinkR style={{ textDecoration: "none" }} to="/">
              <Box
                fontSize={{ md: "16px", sm: "16px" }}
                lineHeight={"40px"}
                sx={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Home
              </Box>
            </LinkR>
          </Box>
        </ListItem>
        <ListItem sx={{ justifyContent: "center", p: "0px" }}>
          <Accordion
            expanded={expanded === `panel${1}`}
            onChange={handleChange(`panel${1}`)}
            sx={{
              backgroundColor: "#280959",
              boxShadow: "none",
              height: "auto",
              p: "0px",
            }}
          >
            <AccordionSummary
              aria-controls={`panel${1}bh-content`}
              id={`panel${1}bh-header`}
              className="borderRad"
              expandIcon={
                <ArrowDropDownIcon sx={{ color: "white", fontSize: "20px" }} />
              }
              sx={{
                backgroundColor: "#280959",
                boxShadow: "none",
                px: "50px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  px="20px"
                  textAlign="center"
                  fontSize={{ md: "16px", sm: "13px" }}
                  lineHeight={"40px"}
                  sx={{
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  BlockChain
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: check ? "#280959" : "#280959",
              }}
            >
              <Stack alignItems="center" justifyContent={"center"}>
                {blockchainData.map(({ title, link }, index) => (
                  <LinkR
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                    key={index}
                    style={{ textDecoration: "none" }}
                    to={link}
                  >
                    <Box
                      py="10px"
                      textAlign="center"
                      fontSize={{ md: "16px", sm: "16px" }}
                      lineHeight={"30px"}
                      color="white"
                    >
                      {title}
                    </Box>
                  </LinkR>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        {/* -------------------------product list ----------------------- */}

        <ListItem sx={{ justifyContent: "center", p: "0px" }}>
          <Accordion
            expanded={expanded === `panel${3}`}
            onChange={handleChange(`panel${3}`)}
            sx={{
              backgroundColor: "#280959",
              boxShadow: "none",
              height: "auto",
              p: "0px",
            }}
          >
            <AccordionSummary
              aria-controls={`panel${3}bh-content`}
              id={`panel${3}bh-header`}
              className="borderRad"
              expandIcon={
                <ArrowDropDownIcon sx={{ color: "white", fontSize: "20px" }} />
              }
              sx={{
                backgroundColor: "#280959",
                boxShadow: "none",
                px: "50px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  px="20px"
                  textAlign="center"
                  fontSize={{ md: "16px", sm: "13px" }}
                  lineHeight={"40px"}
                  sx={{
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Products
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: check ? "#280959" : "#280959",
              }}
            >
              <Stack alignItems="center" justifyContent={"center"}>
                {productData.map(({ title, link }, index) => (
                  <LinkR
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                    key={index}
                    style={{ textDecoration: "none" }}
                    to={link}
                  >
                    <Box
                      py="10px"
                      textAlign="center"
                      fontSize={{ md: "16px", sm: "16px" }}
                      lineHeight={"30px"}
                      color="white"
                    >
                      {title}
                    </Box>
                  </LinkR>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem sx={{ justifyContent: "center", p: "0px" }}>
          <Box
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <LinkR
              style={{ textDecoration: "none" }}
              to="/smart-contract-audit-company/"
            >
              <Box
                fontSize={{ md: "16px", sm: "16px" }}
                lineHeight={"40px"}
                sx={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Smart Contract Audit
              </Box>
            </LinkR>
          </Box>
        </ListItem>
        <ListItem sx={{ justifyContent: "center", p: "0px" }}>
          <Box
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <LinkR style={{ textDecoration: "none" }} to="/about-us/">
              <Box
                fontSize={{ md: "16px", sm: "16px" }}
                lineHeight={"40px"}
                sx={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                About Us
              </Box>
            </LinkR>
          </Box>
        </ListItem>
        <ListItem sx={{ justifyContent: "center", p: "0px" }}>
          <Box
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <LinkR style={{ textDecoration: "none" }} to="/blog/">
              <Box
                fontSize={{ md: "16px", sm: "16px" }}
                lineHeight={"40px"}
                sx={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Blogs
              </Box>
            </LinkR>
          </Box>
        </ListItem>
      </List>
      <Box mt={3} display="flex" justifyContent="center">
        <Button
          onClick={() => setOpenN(true)}
          sx={{
            width: "120px",
            height: "40px",
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            borderRadius: "0px",
            fontSize: matches ? "12px" : "14px",
            textTransform: "capitalize",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: "0.3px",
            fontFamily: "Mulish",
          }}
        >
          Get a Quote
        </Button>
      </Box>
    </div>
  );
  return (
    <div>
      <Box>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              onClick={toggleDrawer(anchor, true)}
              style={{
                zIndex: 1,
              }}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
            </Button>
            <Paper style={{ background: "#1C0D38" }}>
              <SwipeableDrawer
                classes={{ paper: classes.paper }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </Paper>
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
}

export default CustomDrawer;

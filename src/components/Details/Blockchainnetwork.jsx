import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

const data = [
  {
    title: "Private blockchain networks",
    text: "Secure and scalable permission-based ecosystems with minimized downtime.",
  },
  {
    title: "Decentralized apps (dApps)",
    text: "Encrypted peer-to-peer apps with no single point of failure and zero downtime.",
  },
  {
    title: "Smart contracts",
    text: "Protocols that guarantee the integrity of multi-party agreements and automatically enforce fixed obligations.",
  },
  {
    title: "Crypto wallets",
    text: "Digital wallets for storing and manipulating cryptocurrencies (Bitcoin, Etherium, Ripple, etc.).",
  },
  {
    title: "Asset tokenization platforms",
    text: "Decentralized platforms that allow users to create, manage and trade their tokens (including NFT platforms).",
  },
  {
    title: "Blockchain-based market platforms",
    text: "Peer-to-peer platforms (e.g., lending plaftorms, blockchain-based marketplaces, etc.) for transparent, fraud-free transactions between the involved parties.",
  },
];

const Blockchainnetwork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        my: 4,
      }}
    >
      <Typography
        textAlign={"center"}
        fontSize={{ xs: "20px", sm: "33px" }}
        fontWeight={700}
        letterSpacing="0.2px"
        color="#3B3F6D"
        lineHeight={{ xs: "auto", sm: "40px" }}
        sx={{
          fontFamily: "Mulish",
          my: 5,
        }}
      >
        BlocTech Delivers Blockchain Solutions
      </Typography>
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid item md={4} xs={12}>
              <Box
                width="100%"
                display="block"
                boxShadow="1px 1px 18px 5px #d6d0d0"
                transition=".25s"
                height="100%"
                sx={{
                  border: "1px solid gray",
                  p: 2,
                  "&:hover": {
                    boxShadow: "10px 5px 40px 20px darken(#341cac, 10%)",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  fontSize={{ xs: "14px", sm: "18px" }}
                  fontWeight={700}
                  letterSpacing="0.1px"
                  color="primary.main"
                  sx={{
                    textAlign: "center",
                    my: 2,
                  }}
                >
                  {item.title}
                </Box>
                <Typography
                  color="primary.main"
                  sx={{
                    textAlign: "center",
                    my: 2,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Blockchainnetwork;

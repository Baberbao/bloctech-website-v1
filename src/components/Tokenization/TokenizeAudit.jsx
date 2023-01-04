import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

import platformbg from "./assets/platformbg.jpg";

const Carddata = [
  {
    title: "Ethereum",
    description:
      "An open-source decentralized public platform with smart contract functionality",
  },
  {
    title: "Hyperledger",
    description:
      "A project of open-source blockchain platforms and related tools",
  },
  {
    title: "Corda",
    description:
      "An open-source blockchain platform to build cross-industry apps",
  },
];

export default ({ openN, setOpenN }) => {
  const responsiveButtons = useMediaQuery("(max-width:420px)");

  return (
    <>
      <Box
        textAlign="center"
        fontSize={{ xs: "16px", sm: "24px" }}
        fontWeight={700}
        letterSpacing="0.2px"
        sx={{
          background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
        lineHeight={{ xs: "auto", sm: "56px" }}
      >
        Smart Contract Audit Tools We Use
      </Box>

      <Grid container justifyContent="center" display="flex" spacing={2} mt={4}>
        {Carddata.map(({ img, title, description }, index) => (
          <Grid
            key={index + `ids`}
            item
            // p={{ xs: 1, md: 2 }}
            xs={12}
            md={6}
            textAlign={"center"}
          >
            <Box
              sx={{
                background: `url(${platformbg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                py: "20px",
                px: "10px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  fontSize={{ xs: "16px", sm: "23px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="white"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  textAlign="center"
                  py="20px"
                >
                  {title}
                </Typography>
              </Box>
              <Box
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="white"
                textAlign="center"
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                {description}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        mt="60px"
        textAlign="center"
        fontSize={{ xs: "16px", sm: "24px" }}
        fontWeight={700}
        letterSpacing="0.2px"
        sx={{
          background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
        lineHeight={{ xs: "auto", sm: "56px" }}
      >
        Your trusted partner for smart contract security audits
      </Box>

      <Container maxWidth="md">
        <Box
          mt={3}
          fontSize={{ xs: "12px", sm: "14px" }}
          fontWeight={400}
          color="#fff"
          letterSpacing="0.3px"
          textAlign="center"
          lineHeight="22px"
        >
          We deliver user-friendly loophole-free audits of your Smart Contact.
          By following best practices our team performs audits for tokens, NFTs,
          crowd sales, marketplaces, gambling games, financial protocols, and
          much more. We provide the best combos of automated tools, static
          analysis, and a robust review process to provide recommendations for
          the project.
        </Box>
      </Container>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          onClick={() => setOpenN(true)}
          sx={{
            width: "220px",
            height: "50px",
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            borderRadius: "0px",
            fontSize: { xs: "12px", md: "14px" },
            color: "#fff",
            letterSpacing: "0.3px",
            "&:hover": {
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              color: "#3B3F6D",
              border: "1px solid #3B3F6D",
            },
          }}
        >
          Get a quote
        </Button>
      </Box>
    </>
  );
};

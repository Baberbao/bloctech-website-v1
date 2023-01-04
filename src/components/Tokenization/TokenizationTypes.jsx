import { Box, Grid, Container } from "@mui/material";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";

import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import i4 from "./assets/i4.png";

const mapData = [
  {
    alt: "ICO Token Platform",
    title: "ICO Token Platform",
    discription:
      "Utility tokens are built as a method of fundraising for any entity. The tokens can be built on various blockchain platforms such as EOS, Hyperledger, Stellar, etc. or on tailor-made blockchain platform. Non-fungible utility tokens can also be built in order to have a unique identity which can’t be traded for other tokens.",

    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: i1,
  },
  {
    alt: "Security Token Platform",
    title: "Security Token Platform",
    discription:
      "Security Tokens are either backed up crypto bonds/shares/assets. The tokens can be built on various existing blockchain platforms, depending on the business needs; or can also be built on a custom-made Blockchain platform.",

    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: i2,
  },
  {
    alt: "Asset Tokenization Platform",
    title: "Asset Tokenization Platform",
    discription:
      "The tokens are backed up assets such as real estate property, art, gold, etc. The tokens can be created either by leveraging the existing blockchain platforms such as Ethereum, Hyperledger, etc. or on custom-built blockchain platform.",

    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: i3,
  },
  {
    alt: "Non-Fungible Tokenization Platform",
    title: "Non-Fungible Tokenization Platform",
    discription:
      "NFT allows the user to tokenize their unique assets like art, games assets, virtual land, accessories, and so on. The unique tokenization platform introduces various opportunities to create NFT which is under evolution. The NFT enables the creators to tokenize their unique creations and collectibles to NFTs and raise their asset value in the NFT marketplace.",

    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    icon: i4,
  },
];

export default ({ openN, setOpenN }) => {
  return (
    <>
      <Box
        variant="h4"
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
        Smart Contract Security Audit Services
      </Box>
      <Box
        component="p"
        textAlign="center"
        fontSize={{ xs: "12px", sm: "14px" }}
        fontWeight={400}
        color="white"
        letterSpacing="0.3px"
        lineHeight="22px"
        px={{ xs: 1, sm: 5 }}
      >
        We offer end-to-end smart contract audit solutions that help our clients
        launch highly secure and error-free blockchain applications.
      </Box>

      <Container>
        <Box mt={5}>
          <Grid
            container
            spacing={10}
            py="60px"
            sx={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mapData.map(({ title, discription, bg, icon, alt }) => (
              <Grid item md={6} sm={6} xs={12} mt="60px">
                <Box position={"relative"}>
                  <img
                    src={icon}
                    className="imgspin"
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, 0)",
                      marginTop: "-65px",
                    }}
                    alt={alt}
                  />
                </Box>
                <Box
                  sx={{
                    background: bg,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    height: "100%",
                    pb: { sm: "60px", xs: "20px" },
                    pt: { sm: "80px", xs: "40px" },
                    px: "20px",
                    //   width: { sm: "90%", xs: "100%" },
                    //   margin: "0px auto"
                  }}
                >
                  <Box
                    component="h3"
                    pb="30px"
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "23px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {title}
                  </Box>
                  <Box
                    component="h5"
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16.911px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {discription}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";

import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";

const mapData = [
  {
    alt: "Security Audits",
    title: "Security Audits",
    discription:
      "A comprehensive assessment of the code by the top smart contract auditors, to detect the loopholes in your smart contract.",

    bg: bg1,
    icon: i1,
  },
  {
    alt: "Penetration Testing",
    title: "Penetration Testing",
    discription:
      "An extensive exercise attempting to find the vulnerabilities and system exploits was performed by an independent team of expert penetration testers.",

    bg: bg2,
    icon: i2,
  },
  {
    alt: "Security Consulting",
    title: "Security Consulting",
    discription:
      "ImmuneBytes is one of the leading security consulting companies that helps you with an all-around systemic analysis to manage the security of the overall product.",

    bg: bg3,
    icon: i3,
  },
];

export default ({ openN, setOpenN }) => {
  return (
    <>
      <Box
        component="h3"
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

      <Box mt={5}>
        <Grid
          container
          spacing={3}
          py="60px"
          sx={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mapData.map(({ title, discription, bg, icon, alt }) => (
            <Grid item md={4} sm={6} xs={12} mt="60px">
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
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: "100%",
                  pb: { sm: "40px", xs: "20px" },
                  pt: { sm: "80px", xs: "40px" },
                  px: "20px",
                }}
              >
                <Box
                  pb="30px"
                  component="h4"
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
                  component="p"
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

      <Box mt={3}>
        <Box
          component="p"
          textAlign="center"
          fontSize={{ xs: "12px", sm: "14px" }}
          fontWeight={800}
          color="white"
          letterSpacing="0.3px"
          lineHeight="22px"
        >
          Capitalize on our expertise to conduct smart contract audit.
        </Box>

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
      </Box>
    </>
  );
};

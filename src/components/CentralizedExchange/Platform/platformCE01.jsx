import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import platform1 from "../assests/platform1.png";
import platform2 from "../assests/platform2.png";
import platform3 from "../assests/platform3.png";
import platform4 from "../assests/platform4.png";
import platform5 from "../assests/platform5.png";
import platform6 from "../assests/platform6.png";
import platform7 from "../assests/platform7.png";
import platform8 from "../assests/platform8.png";
import platform9 from "../assests/platform9.png";
import platform10 from "../assests/platform10.png";
import platformbg from "../assests/platformbg.jpg";

const Carddata = [
  {
    alt: "Multiple Order Types",
    img: platform1,
    title: "Multiple Order Types",
  },
  {
    alt: "Powerful Trading Engine",
    img: platform2,
    title: "Powerful Trading Engine",
  },
  {
    alt: "Payment Gateway Integration",
    img: platform3,
    title: "Payment Gateway Integration",
  },
  {
    alt: "KYC & AML Integration",
    img: platform4,
    title: "KYC & AML Integration",
  },
  {
    alt: "CSRF & SSRF Protection",
    img: platform5,
    title: "CSRF & SSRF Protection",
  },
  {
    alt: "Elliptic-curve cryptography wallet",
    img: platform6,
    title: "Elliptic-curve cryptography wallet",
  },
  {
    alt: "DDoS protection and X-XSS-Protection",
    img: platform7,
    title: "DDoS protection and X-XSS-Protection",
  },
  {
    alt: "Advance Admin Dashboard",
    img: platform8,
    title: "Advance Admin Dashboard",
  },
  {
    alt: "Multi-Signature Wallet",
    img: platform9,
    title: "Multi-Signature Wallet",
  },
  {
    alt: "Multi-crypto Support",
    img: platform10,
    title: "Multi-crypto Support",
  },
];
function PlatformCE01() {
  return (
    <>
      <Grid container justifyContent="center" display="flex" spacing={2} mt={4}>
        {Carddata.map(({ img, title, alt }, index) => (
          <Grid
            key={index + `ids`}
            item
            // p={{ xs: 1, md: 2 }}
            xs={12}
            md={4}
            textAlign={"center"}
          >
            <Box
              sx={{
                background: `#41015F`,
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
                <img src={img} alt={alt} style={{ marginTop: "16px" }} />
                <Typography
                  variant={"h4"}
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
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PlatformCE01;

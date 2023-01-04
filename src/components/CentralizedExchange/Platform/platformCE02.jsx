import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import platform11 from "../assests/platform1.png";
import platform12 from "../assests/platform2.png";
import platform13 from "../assests/platform3.png";
import platform14 from "../assests/platform4.png";
import platform15 from "../assests/platform5.png";
import platform16 from "../assests/platform6.png";
import platform17 from "../assests/platform7.png";
import platform18 from "../assests/platform8.png";
import platformbg from "../assests/platformbg.jpg";

const Carddata = [
  {
    img: platform11,
    title: "HTTP Authentication",
    description:
      "Secure HTTP Authentication tokens like OAuth for user authentication",
  },
  {
    img: platform12,
    title: "Data Encryption",
    description:
      "Encryption of data transmission for protecting user credentials and other confidential information",
  },
  {
    img: platform13,
    title: "Jail Login",
    description:
      "Prevents multiple failed attempts for a certain amount of time",
  },
  {
    img: platform14,
    title: "Anti-Denial of Service (DoS)",
    description:
      "Protection of the exchange from large requests sent to the server",
  },
  {
    img: platform15,
    title: "CSRF Protection",
    description:
      "Prevents state-changing requests and other unwanted user actions",
  },
  {
    img: platform16,
    title: "SSRF Protection",
    description:
      "Protects internal systems from attacks sent from pregnable web applications",
  },
  {
    img: platform17,
    title: "HTTP Parameter Pollution Protection",
    description:
      "Deters web attacks that craft an HTTP request in order to retrieve hidden information",
  },
  {
    img: platform18,
    title: "Anti-Distributed Denial of Service (DDoS)",
    description:
      "Defends the exchange from overwhelming traffic originating from multiple sources",
  },
];
function PlatformCE02() {
  return (
    <>
      <Grid container justifyContent="center" display="flex" spacing={2} mt={4}>
        {Carddata.map(({ img, title, description }, index) => (
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
                <img src={img} alt="icons" style={{ marginTop: "16px" }} />
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
    </>
  );
}

export default PlatformCE02;

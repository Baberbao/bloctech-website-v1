import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";

import processIcon1 from "../../assets/processIcon1.svg";
import processIcon2 from "../../assets/processIcon2.svg";
import processIcon3 from "../../assets/processIcon3.png";

export default ({ openN, setOpenN }) => {
  return (
    <>
      <Box
        textAlign="center"
        fontSize={{ xs: "16px", sm: "24px" }}
        fontWeight={700}
        letterSpacing="0.2px"
        color="#3B3F6D"
        lineHeight={{ xs: "auto", sm: "56px" }}
      >
        Our Smart Contract Audit Process
      </Box>
      <Box
        textAlign="center"
        fontSize={{ xs: "12px", sm: "14px" }}
        fontWeight={400}
        color="secondary.light"
        letterSpacing="0.3px"
        lineHeight="22px"
        px={{ xs: 1, sm: 5 }}
      >
        A three-step audit process ensures that your smart contract is credible
        at the core.
      </Box>

      <Box mt={5}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box p={3} height="100%">
              <Box mt={1} mb={3} textAlign="center">
                <img src={processIcon1} />
              </Box>
              <Box
                fontSize={{ xs: "14px", md: "18px" }}
                fontWeight={700}
                color="#3B3F6D"
                textAlign="center"
              >
                Evaluate
              </Box>
              <Box
                mt={1}
                fontSize={{ xs: "12px", sm: "14px" }}
                fontWeight={400}
                color="#3B3F6D"
                letterSpacing="0.3px"
                textAlign="center"
                lineHeight="22px"
              >
                We evaluate the business logic of your smart contract and devise
                a coherent strategy to conduct the audit.
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box p={3} height="100%">
              <Box mt={1} mb={3} textAlign="center">
                <img src={processIcon2} />
              </Box>
              <Box
                fontSize={{ xs: "14px", md: "18px" }}
                fontWeight={700}
                color="#3B3F6D"
                textAlign="center"
              >
                Expert Review
              </Box>
              <Box
                mt={1}
                fontSize={{ xs: "12px", sm: "14px" }}
                fontWeight={400}
                color="#3B3F6D"
                letterSpacing="0.3px"
                textAlign="center"
                lineHeight="22px"
              >
                Our experienced security auditors and blockchain engineers work
                together to check your code for existing and potential loopholes
                while eliminating the same.
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box p={3} height="100%">
              <Box mt={1} mb={3} textAlign="center">
                <img src={processIcon3} />
              </Box>
              <Box
                fontSize={{ xs: "14px", md: "18px" }}
                fontWeight={700}
                color="#3B3F6D"
                textAlign="center"
              >
                Deliver
              </Box>
              <Box
                mt={1}
                fontSize={{ xs: "12px", sm: "14px" }}
                fontWeight={400}
                color="#3B3F6D"
                letterSpacing="0.3px"
                textAlign="center"
                lineHeight="22px"
              >
                We provide a complete report highlighting any risks that exist
                to the project or users and suggest recommendations to resolve
                the same.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={3}>
        <Box
          textAlign="center"
          fontSize={{ xs: "12px", sm: "14px" }}
          fontWeight={800}
          color="secondary.light"
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
              backgroundColor: "#3B3F6D",
              borderRadius: "0px",
              fontSize: { xs: "12px", md: "14px" },
              color: "#fff",
              letterSpacing: "0.3px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#3B3F6D",
                border: "1px solid #3B3F6D",
              },
            }}
          >
            TALK TO OUR EXPERTS
          </Button>
        </Box>
      </Box>
    </>
  );
};

import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 800 },
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: "transparent",
  mt: { xs: "100px", md: "0px" },
};

const CustomModal = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <div>
      <Modal
        sx={{ overflow: { xs: "scroll", md: "hidden" }, py: "30px" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="md">
          <Box sx={style}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box
                  height="100%"
                  textAlign={"center"}
                  display="flex !important"
                  flexDirection="column"
                  justifyContent="flex-end"
                  alignItems="center"
                  // mt={{ sm: "30px", xs: "50px" }}
                  className="flip"
                >
                  <Box
                    height="100%"
                    sx={{
                      backgroundImage:
                        "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",

                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      px: "20px",
                      py: "30px",
                      display: "flex",
                      aligItems: "center",
                      justifyContent: "cente",
                      transition: " .3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow:
                          "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                      },
                      borderRadius: "5px",
                    }}
                  >
                    <Box>
                      <Box
                        fontSize={"30px"}
                        fontWeight="700"
                        textAlign={"center"}
                        color="white"
                      >
                        Smart Contracts Development
                      </Box>
                      <Box
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "white",
                          textAlign: "center",
                          py: "30px",
                        }}
                      >
                        For blockchain nodes, dApps, marketplaces, and smart
                        contracts,BlocTech Solutions provide security audits
                        services to reduce the fraud and ensure augmented
                        security protocols.
                      </Box>

                      <Box>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/smart-contract-development-services/"
                        >
                          <Button
                            onClick={() => setOpen(true)}
                            sx={{
                              textAlign: "center",
                              background:
                                "linear-gradient(202.6deg, #3940DB 11.43%, #A615BD 85.3%)",
                              fontSize: matches ? "14px" : "16px",
                              textTransform: "capitalize",
                              color: "#fff",
                              fontWeight: 700,
                              letterSpacing: "0.3px",
                              my: 3,
                              borderRadius: "5px",
                              px: "20px",
                              "&:hover": {
                                backgroundColor: "transparent",
                                color: "white",
                              },
                            }}
                          >
                            Learn more
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  height="100%"
                  textAlign={"center"}
                  display="flex !important"
                  flexDirection="column"
                  justifyContent="flex-end"
                  alignItems="center"
                  // mt={{ sm: "30px", xs: "50px" }}
                  className="flip"
                >
                  <Box
                    height="100%"
                    sx={{
                      backgroundImage:
                        "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",

                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      px: "20px",
                      py: "30px",
                      display: "flex",
                      aligItems: "center",
                      justifyContent: "cente",
                      transition: " .3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow:
                          "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                      },
                      borderRadius: "5px",
                    }}
                  >
                    <Box>
                      <Box
                        fontSize={"30px"}
                        fontWeight="700"
                        textAlign={"center"}
                        color="white"
                      >
                        Audits
                      </Box>
                      <Box
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          color: "white",
                          textAlign: "center",
                          py: "30px",
                        }}
                      >
                        For blockchain nodes, dApps, marketplaces, and smart
                        contracts,BlocTech Solutions provide security audits
                        services to reduce the fraud and ensure augmented
                        security protocols.
                      </Box>

                      <Box>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/smart-contract-audit-company/"
                        >
                          <Button
                            onClick={() => setOpen(true)}
                            sx={{
                              textAlign: "center",
                              background:
                                "linear-gradient(202.6deg, #3940DB 11.43%, #A615BD 85.3%)",
                              fontSize: matches ? "14px" : "16px",
                              textTransform: "capitalize",
                              color: "#fff",
                              fontWeight: 700,
                              letterSpacing: "0.3px",
                              my: 3,
                              borderRadius: "5px",
                              px: "20px",
                              "&:hover": {
                                backgroundColor: "transparent",
                                color: "white",
                              },
                            }}
                          >
                            Learn more
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Modal>
    </div>
  );
};

export default CustomModal;

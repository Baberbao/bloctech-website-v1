import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Button,
  Dialog,
  TextField,
  Stack,
} from "@mui/material";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import BackDrop from "../../BackDrop";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CustomPhoneInput from "../CustomPhoneInput/CustomPhoneInput";
import Terms from "../Policy/Terms";
import Slide from "@mui/material/Slide";
import bg from "./assets/bg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BsMedium } from "react-icons/bs";
import Badges from "../Badges/Badges";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const inputStyle = {
  width: "100%",
  fontWeight: "400",
  color: "white",
  borderBottomColor: "white",
  "& .MuiInput-underline": {
    borderBottomColor: "white",
  },
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0AC693 ",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:hover": {
    borderBottomColor: "#0AC693 ",
  },
  "& .MuiStandardInput-root": {
    borderBottomColor: "white !important",
    "& fieldset": {
      color: "white",
      borderBottomColor: "white",
    },

    "&:hover fieldset": {
      color: "white",
      borderBottomColor: "white",
    },
    "&.Mui-focused fieldset": {
      color: "white",
      borderBottomColor: "white",
    },
  },

  input: {
    color: "white !important",
    fontSize: { xs: "16px", md: "14px" },
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "white",
    },
  },
};

function Contact() {
  const matches = useMediaQuery("(max-width:700px)");
  const matches2 = useMediaQuery("(max-width:1050px)");
  const sml = useMediaQuery("(max-width:550px)");
  const check = useMediaQuery("(max-width:750px)");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // Email Function

  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [feedback, setfeedback] = useState("");
  const [formsubmit, setformsubmit] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [budget, setbudget] = React.useState("");
  const [service, setservice] = React.useState("");
  const [howdid, sethowdid] = React.useState("");
  const [country, setcountry] = React.useState("");

  const handleClick = () => {
    var data = {
      email: email,
      name: name,
      number: number,
      subject: service,
      feedback: feedback,
      budget: budget,
      howdid: howdid,
      country: country,
      company: company,
    };

    let SERVICE_ID = "service_5zt26is";
    let TEMPLATE_ID = "template_quxwpvp";
    let Public_key = "vMEEVwDBD6PTxOHqy";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, Public_key).then(
      function (response) {
        setbudget("");
        setname("");
        setemail("");
        setservice("");
        setfeedback("");
        sethowdid("");
        setcompany("");
        setformsubmit(false);
        toast.success("Email Sent Successfully");
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
        setformsubmit(false);
        toast.success("Something Went Wrong");
      }
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box
        pb={{ sm: "30px", xs: "20px" }}
        sx={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { sm: "top center", xs: "center" },
        }}
      >
        <Dialog
          TransitionComponent={Transition}
          fullWidth={true}
          maxWidth={"lg"}
          open={open}
          onClose={handleClose}
          sx={{ padding: "20px" }}
        >
          <Terms setOpen={setOpen} setChecked={setChecked} dialog={true} />
        </Dialog>
        <Box id="contact" py={{ sm: 15, xs: 8 }}>
          <BackDrop progress={formsubmit} />
          <Container maxWidth="lg">
            <Box>
              <Grid container spacing={5}>
                <Grid item sm={6} xs={12}>
                  <Box
                    sx={{
                      background: "rgba(217, 217, 217, 0.13)",
                      backdropFilter: "blur(76px)",
                      borderRadius: "36px",
                      px: { sm: "40px", xs: "20px" },
                      py: { sm: "30px", xs: "20px" },
                      border: "solid 1px #DB24B0",
                      marginTop: "100px",
                    }}
                    py="20px"
                  >
                    <Box>
                      <Box
                        component="h2"
                        pb={{ sm: "40px", xs: "30px" }}
                        textAlign="center"
                        fontSize={{ xs: "25px", sm: "44px" }}
                        fontWeight={700}
                        letterSpacing="0.2px"
                        color="white"
                        lineHeight={{ xs: "auto", sm: "56px" }}
                      >
                        Contact Us
                      </Box>
                      <form action="" autoComplete="off">
                        <Grid container spacing={{ xs: 2, sm: 5 }} mt={3}>
                          <Grid item sm={6} xs={12}>
                            <TextField
                              variant="standard"
                              label="Name"
                              sx={inputStyle}
                              id="standard-name"
                              value={name}
                              onChange={(e) => {
                                setname(e.target.value);
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <TextField
                              variant="standard"
                              label="Email"
                              type={"email"}
                              sx={inputStyle}
                              id="standard-name"
                              value={email}
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <TextField
                              variant="standard"
                              label="Company/ Organization"
                              sx={inputStyle}
                              id="standard-name"
                              value={company}
                              onChange={(e) => {
                                setcompany(e.target.value);
                              }}
                            />
                          </Grid>

                          <Grid item sm={6} xs={12}>
                            <CustomPhoneInput
                              number={number}
                              setnumber={setnumber}
                            />
                          </Grid>

                          <Grid item sm={12} xs={12}>
                            <TextField
                              variant="standard"
                              label="Country"
                              sx={inputStyle}
                              id="standard-name"
                              value={country}
                              onChange={(e) => {
                                setcountry(e.target.value);
                              }}
                            />
                          </Grid>
                          {/* 
                          <Grid item sm={6} xs={12}>
                            <TextField
                              variant="standard"
                              label="Which service are you interested in?"
                              sx={inputStyle}
                              id="standard-name"
                              value={service}
                              onChange={(e) => {
                                setservice(e.target.value);
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <TextField
                              variant="standard"
                              label="Project Budget"
                              sx={inputStyle}
                              id="standard-name"
                              value={budget}
                              onChange={(e) => {
                                setbudget(e.target.value);
                              }}
                            />
                          </Grid> */}
                          {/* 
                          <Grid item sm={6} xs={12}>
                            <TextField
                              variant="standard"
                              label="How did you hear about Bloctech Solutions?"
                              sx={inputStyle}
                              id="standard-name"
                              value={howdid}
                              onChange={(e) => {
                                sethowdid(e.target.value);
                              }}
                            />
                          </Grid> */}

                          <Grid item sm={12} xs={12}>
                            <TextField
                              variant="standard"
                              label="Share your requirements"
                              sx={inputStyle}
                              id="standard-name"
                              value={feedback}
                              onChange={(e) => {
                                setfeedback(e.target.value);
                              }}
                            />
                          </Grid>

                          <Grid item sm={12} xs={12}>
                            <Box>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      color="primary"
                                      sx={{
                                        color: "white",
                                        "& label": {
                                          color: "white",
                                          "& .checked": {
                                            color: "#13c552",
                                          },
                                        },
                                      }}
                                      checked={checked}
                                      onChange={(e) => {
                                        // let x = localStorage.getItem("dialog");
                                        // if (!x == "true" || x == null) {
                                        //   setOpen(e.target.checked);
                                        // } else {
                                        //   console.log(x, "===>>>>>>");
                                        handleChange(e);
                                        // }
                                      }}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                  }
                                  label="I agree, to terms and conditions"
                                />
                              </FormGroup>
                            </Box>
                          </Grid>
                        </Grid>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            mt: "30px",
                          }}
                        >
                          <Button
                            disabled={!checked}
                            onClick={() => {
                              if (
                                name &&
                                email &&
                                feedback
                                // budget &&
                                // service &&
                                // howdid
                              ) {
                                let mailformat =
                                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                if (email.match(mailformat)) {
                                  setformsubmit(true);
                                  handleClick();
                                } else {
                                  toast.error(
                                    "Please Enter correct Email format"
                                  );
                                }
                              } else {
                                toast.error("Please fill all required field");
                              }
                            }}
                            sx={{
                              width: { md: "334px", xs: "100%" },
                              height: "40px",
                              background:
                                "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                              borderRadius: "33px",
                              fontSize: matches ? "12px" : "14px",
                              textTransform: "capitalize",

                              color: "white !important",
                              fontWeight: 700,
                              letterSpacing: "0.3px",
                              marginTop: "30px",

                              "&:hover": {
                                backgroundColor: "transparent",
                                color: "white",
                                border: "1px solid #DB24B0",
                              },
                            }}
                          >
                            Send
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  </Box>
                </Grid>

                <Grid item sm={6} xs={12} width="100%">
                  <Box mt={{ md: "100px", xs: "40px" }}>
                    <Box
                      mt={{ md: "40px", xs: "20px" }}
                      component="h2"
                      pb={{ sm: "40px", xs: "30px" }}
                      textAlign="center"
                      fontSize={{ xs: "25px", sm: "44px" }}
                      fontWeight={700}
                      letterSpacing="0.2px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "56px" }}
                    >
                      Follow Us
                    </Box>
                    <Stack
                      px={check ? "40px" : "10px"}
                      mt="10px"
                      direction="row"
                      alignItems={"center"}
                      justifyContent="space-evenly"
                    >
                      <a
                        href="https://twitter.com/BloctechS"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        <Box
                          fontSize={{ xs: "16px", sm: "35px" }}
                          sx={{
                            transition: "0.4s",
                            "&: hover": {
                              color: "#0AC693",
                            },
                            backgroundColor: "#240035",
                            borderRadius: "50%",
                            width: { md: "70px", xs: "30px" },
                            height: { md: "70px", xs: "30px" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <TwitterIcon
                            sx={{ fontSize: { md: "35px", xs: "16px" } }}
                          />
                        </Box>
                      </a>
                      <a
                        href="
                https://medium.com/@bloctechsolutions090"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        <Box
                          fontSize={{ xs: "16px", sm: "35px" }}
                          sx={{
                            transition: "0.4s",
                            "&: hover": {
                              color: "#0AC693",
                            },
                            backgroundColor: "#240035",
                            borderRadius: "50%",
                            width: { md: "70px", xs: "30px" },
                            height: { md: "70px", xs: "30px" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {/* <i className="fa-brands fa-medium" style={{fontSize: '12px' , color: 'white'}} ></i> */}

                          <BsMedium />
                          {/* <i class="fa-brands fa-medium"></i> */}
                        </Box>
                      </a>
                      <a
                        href="https://www.facebook.com/BlocTechSolutions/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        <Box
                          fontSize={{ xs: "16px", sm: "35px" }}
                          sx={{
                            transition: "0.4s",
                            "&: hover": {
                              color: "#0AC693",
                            },
                            backgroundColor: "#240035",
                            borderRadius: "50%",
                            width: { md: "70px", xs: "30px" },
                            height: { md: "70px", xs: "30px" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FacebookIcon
                            sx={{ fontSize: { md: "35px", xs: "16px" } }}
                          />
                        </Box>
                      </a>
                      <a
                        href="https://www.instagram.com/bloctechsolutions/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        <Box
                          fontSize={{ xs: "16px", sm: "35px" }}
                          sx={{
                            transition: "0.4s",
                            "&: hover": {
                              color: "#0AC693",
                            },
                            backgroundColor: "#240035",
                            borderRadius: "50%",
                            width: { md: "70px", xs: "30px" },
                            height: { md: "70px", xs: "30px" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <InstagramIcon
                            sx={{ fontSize: { md: "35px", xs: "16px" } }}
                          />
                        </Box>
                      </a>
                      <a
                        href="
              https://www.linkedin.com/company/bloctech-solution/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        <Box
                          fontSize={{ xs: "16px", sm: "35px" }}
                          sx={{
                            transition: "0.4s",
                            "&: hover": {
                              color: "#0AC693",
                            },

                            backgroundColor: "#240035",
                            borderRadius: "50%",
                            width: { md: "70px", xs: "30px" },
                            height: { md: "70px", xs: "30px" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <LinkedInIcon
                            sx={{ fontSize: { md: "35px", xs: "16px" } }}
                          />
                        </Box>
                      </a>
                    </Stack>
                  </Box>
                  <Box>
                    <Box
                      component="h2"
                      mb="-76px"
                      pt="100px"
                      // pb={{ sm: "40px", xs: "30px" }}
                      textAlign="center"
                      fontSize={{ xs: "25px", sm: "44px" }}
                      fontWeight={700}
                      letterSpacing="0.2px"
                      // sx={{
                      //   background:
                      //     "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      //   WebkitBackgroundClip: "text",
                      //   WebkitTextFillColor: "transparent",
                      //   backgroundClip: "text",
                      //   textFillColor: "transparent",
                      // }}
                      color="white"
                      lineHeight={{ xs: "auto", sm: "56px" }}
                    >
                      Ratings & Reviews
                    </Box>
                    <Badges />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Contact;

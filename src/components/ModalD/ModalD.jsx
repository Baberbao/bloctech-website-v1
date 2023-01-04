import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Dialog,
  Grid,
  IconButton,
  TextField,
  useMediaQuery,
} from "@mui/material";
import "./PreSale.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import BackDrop from "../../BackDrop";
import CloseIcon from "@mui/icons-material/Close";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CustomPhoneInput from "../CustomPhoneInput/CustomPhoneInput";
import Terms from "../Policy/Terms";
import Slide from "@mui/material/Slide";
import { Container } from "@mui/system";
import { withStyles } from "@mui/styles";

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
    borderBottomColor: "#CC10C6 ",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:hover": {
    borderBottomColor: "#CC10C6 ",
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

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
const StyledModal = withStyles(() => ({
  root: {
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
      margin: "0px !important ",
      backgroundColor: "#120319 !important ",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
      backgroundColor: "#120319 !important ",
    },
    "& .MuiDialog-paperScrollPaper": {
      background: "#120319 !important ",
      height: "auto",
      boxShadow: "#F0B90B 0px 0px 8px 1px",
      border: "5px solid #F0B90B",
    },
    "& .dialoge__content__section": {
      background: "#ffffff !important",
      backgroundColor: "#120319 !important ",
    },
    "& .MuiDialogContent-root": {
      paddingTop: "20px",
      paddingBottom: "20px",
      position: "relative",
    },
  },
}))(Dialog);

const style = {
  position: "absolute",
  bottom: "0",

  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "5px",
};
function ModalD({ openN, setOpenN }) {
  const matches = useMediaQuery("(max-width:700px)");
  const matches2 = useMediaQuery("(max-width:1050px)");
  const sml = useMediaQuery("(max-width:550px)");
  const handleOpen = () => setOpenN(true);
  const handleClose = () => setOpenN(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
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

  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        overlayStyle={{ backgroundColor: "#120319 !important " }}
        onClose={handleClose2}
        sx={{
          padding: "0px",
          zIndex: "10000000 !important",
          backgroundColor: "#120319",
          "& .MuiDialog-paper": {
            backgroundColor: "#120319 !important",
            p: "0px !important",
          },
          "&. MuiPaper-root": {
            backgroundColor: "#120319 !important ",
          },
        }}
      >
        <Terms setOpen={setOpen} setChecked={setChecked} dialog={true} />
      </Dialog>
      <BackDrop progress={formsubmit} />
      <Modal
        TransitionComponent={Transition}
        sx={{
          top: "0px",
          zIndex: "100000 !important",
          overflow: "scroll",
          py: 6,
        }}
        open={openN}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="md">
          <Box>
            <Box
              sx={{
                background: "rgba(217, 217, 217, 0.13)",
                backdropFilter: "blur(76px)",
                borderRadius: "36px",
                px: { sm: "90px", xs: "20px" },
                py: { sm: "5px", xs: "10px" },
                border: "solid 1px #DB24B0",
              }}
            >
              <Box textAlign={"right"}>
                <IconButton
                  onClick={handleClose}
                  sx={{ px: "20px", color: "white" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box
                component="h1"
                // pb={{ sm: "20px", xs: "20px" }}
                textAlign="center"
                fontSize={{ xs: "25px", sm: "44px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
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
                    <CustomPhoneInput number={number} setnumber={setnumber} />
                  </Grid>

                  <Grid item sm={6} xs={12}>
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
                  </Grid>

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
                  </Grid>

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

                  {/* <Grid item sm={12} xs={12}>
                      <Box sx={{ marginTop: "30px" }}>
                        <Box>
                          <select
                            onChange={(e) => {
                              setbudget(e.target.value);
                            }}
                            style={{
                              width: "100%",
                              height: "42px",
                              paddingLeft: "10px",
                              color: "white",
                              borderBottom: "1px solid white",
                              backgroundColor: "transparent",
                              outline: "none",
                              border: "none",
                              "&:focus ": {
                                outline: "none",
                                border: "none",
                                backgroundColor: "transparent",
                                color: "white",
                                borderBottom: "1px solid #CC10C6",
                              },
                              // "&:active": {
                              //   outline: "none",
                              //   backgroundColor: "transparent",
                              //   color: "white",
                              //   borderBottom: "1px solid #CC10C6",
                              // },
                            }}
                          >
                            <option
                              style={{
                                paddingLeft: "10px",
                                color: "white",
                                marginTop: "30px",
                                background: "rgba(217, 217, 217, 0.13)",
                                border: "none",
                                outline: "none",
                                "&:focus": {
                                  border: "none",
                                  outline: "none",
                                  background: "#CC10C6",
                                  backdropFilter: "blur(76px)",
                                  color: "white",
                                },
                              }}
                              value=""
                            >
                              PROJECT BUDGET*
                            </option>
                            <option
                              style={{
                                paddingLeft: "10px",
                                color: "white",
                                marginTop: "30px",

                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                "&:focus": {
                                  border: "none",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                  color: "white",
                                },
                              }}
                              value="Under $100,000"
                            >
                              Under $100,000
                            </option>
                            <option
                              style={{
                                paddingLeft: "10px",
                                color: "white",
                                marginTop: "30px",

                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                "&:focus": {
                                  border: "none",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                  color: "white",
                                },
                              }}
                              value="$100,000 - $250,000"
                            >
                              $100,000 - $250,000
                            </option>
                            <option
                              style={{
                                paddingLeft: "10px",
                                color: "white",
                                marginTop: "30px",

                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                "&:focus": {
                                  border: "none",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                  color: "white",
                                },
                              }}
                              value="$250,000 - $500,000"
                            >
                              $250,000 - $500,000
                            </option>
                            <option
                              style={{
                                paddingLeft: "10px",
                                color: "white",
                                marginTop: "30px",

                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                "&:focus": {
                                  border: "none",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                  color: "white",
                                },
                              }}
                              value="Above $500,000"
                            >
                              Above $500,000
                            </option>
                          </select>
                        </Box>
                      </Box>
                    </Grid> */}

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
                                let x = localStorage.getItem("dialog");
                                if (!x == "true" || x == null) {
                                  setOpen(e.target.checked);
                                } else {
                                  console.log(x, "===>>>>>>");
                                  handleChange(e);
                                }
                              }}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label="I agree, to terms and conditions"
                        />
                      </FormGroup>
                    </Box>
                  </Grid>

                  {/* <Grid
                  item
                  xs={matches2 ? 12 : 6}
                  display="flex"
                  justifyContent={matches2 ? "center" : "normal"}
                  alignItems="center"
                  sx={{
                    marginTop: sml ? "50px" : matches2 ? "150px" : "0px",
                  }}
                >
                  <img src={about2} width="100%" alt="" />

                </Grid> */}
                  {/* <Grid item xs={matches2 ? 12 : 12}>
                    <Box>
                      <input
                        placeholder="Name"
                        style={{
                          width: "100%",
                          height: "42px",
                          paddingLeft: "10px",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          color: "white",
                        }}
                        value={name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />

                      <input
                        placeholder="Email"
                        style={{
                          width: "100%",
                          height: "42px",
                          paddingLeft: "10px",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          color: "white",
                          marginTop: "30px",
                        }}
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                      <input
                        placeholder="Company Name"
                        style={{
                          width: "100%",
                          height: "42px",
                          paddingLeft: "10px",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          color: "white",
                          marginTop: "30px",
                        }}
                        value={company}
                        onChange={(e) => {
                          setcompany(e.target.value);
                        }}
                      />
                   

                      <CustomPhoneInput number={number} setnumber={setnumber} />

                      <textarea
                        placeholder="Write something"
                        style={{
                          width: "100%",
                          height: "147px",
                          padding: "10px",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          color: "white",
                          fontFamily: "Mulish",
                        }}
                        value={feedback}
                        onChange={(e) => {
                          setfeedback(e.target.value);
                        }}
                      />
                      

                      <Button
                        disabled={!checked}
                        onClick={() => {
                          if (name && email && feedback) {
                            let mailformat =
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                            if (email.match(mailformat)) {
                              setformsubmit(true);
                              handleClick();
                            } else {
                              toast.error("Please Enter correct Email format");
                            }
                          } else {
                            toast.error("Please fill all required field");
                          }
                        }}
                        sx={{
                          width: "164px",
                          height: "40px",
                          backgroundColor: "#3B3F6D",
                          borderRadius: "0px",
                          fontSize: matches ? "12px" : "14px",
                          textTransform: "capitalize",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          marginTop: "30px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#3B3F6D",
                            border: "1px solid #3B3F6D",
                          },
                        }}
                      >
                        Get instant access
                      </Button>
                    </Box>
                  </Grid> */}
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
                        feedback &&
                        budget &&
                        service &&
                        howdid
                      ) {
                        let mailformat =
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if (email.match(mailformat)) {
                          setformsubmit(true);
                          handleClick();
                        } else {
                          toast.error("Please Enter correct Email format");
                        }
                      } else {
                        toast.error("Please fill all required field");
                      }
                    }}
                    sx={{
                      width: "334px",
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
        </Container>
      </Modal>
    </div>
  );
}

export default ModalD;

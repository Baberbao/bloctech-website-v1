import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import CustomPhoneInput from "../CustomPhoneInput/CustomPhoneInput";
import Slide from "@mui/material/Slide";
import { useParams } from "react-router-dom";
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

const Applyform = () => {
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
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [feedback, setfeedback] = useState("");
  const [formsubmit, setformsubmit] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [city, setcity] = React.useState("");
  const [imputfile, setimputfile] = React.useState("");

  const handleClick = () => {
    var data = {
      email: email,
      name: name,
      number: number,
      designation: feedback,
      city: city,
      file: imputfile,
    };
    let SERVICE_ID = "service_5zt26is";
    let TEMPLATE_ID = "template_kug91qg";
    let Public_key = "vMEEVwDBD6PTxOHqy";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, Public_key).then(
      function (response) {
        setname("");
        setemail("");
        setfeedback("");
        setcity("");
        toast.success("Email Sent Successfully");
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
        toast.success("Something Went Wrong");
      }
    );
  };

  const { job } = useParams();

  useEffect(() => {
    if (job == "1") {
      setfeedback("Human Resources Manager");
    } else if (job == "2") {
      setfeedback("Full Stack Developer (Mern, Node, React)");
    } else if (job == "3") {
      setfeedback("Blockchain Developer");
    } else if (job == "4") {
      setfeedback("UI/UX Designer");
    } else if (job == "5") {
      setfeedback("IT Business Developer");
    } else {
      setfeedback("Blockchain Intern");
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="md">
      <Box
        my={3}
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
            m="0px"
            component="h2"
            pb={{ sm: "40px", xs: "30px" }}
            textAlign="center"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="white"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Apply Now
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
                <CustomPhoneInput number={number} setnumber={setnumber} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  variant="standard"
                  label="City Name"
                  sx={inputStyle}
                  id="standard-name"
                  value={city}
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Typography color={"white"}>Upload Your CV</Typography>
                <TextField
                  type="file"
                  accept="application/pdf"
                  variant="standard"
                  sx={inputStyle}
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setimputfile(e.target.files[0]);
                  }}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <TextField
                  variant="standard"
                  label="Designation"
                  sx={inputStyle}
                  id="standard-name"
                  value={feedback}
                  //   onChange={(e) => {
                  //     setfeedback(e.target.value);
                  //   }}
                />
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
                onClick={() => {
                  if (name && email && city && imputfile) {
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
    </Container>
  );
};

export default Applyform;

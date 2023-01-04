import { Button, Container, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/system";

function GetinTouch() {
  const matches = useMediaQuery("(max-width:700px)");
  // const matches2 = useMediaQuery("(max-width:1050px)");
  // const sml = useMediaQuery("(max-width:550px)");

  // Email Function

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [feedback, setfeedback] = useState("");
  const [formsubmit, setformsubmit] = useState(false);

  const handleClick = () => {
    var data = {
      from_email: email,
      from_name: name,
      from_feedback: feedback,
    };

    let SERVICE_ID = "service_xa9xhjg";
    let TEMPLATE_ID = "template_ksnlj8g";
    let USER_ID = "user_1B3LqOtiTj5ueil9XZuSw";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        setname("");
        setemail("");
        setfeedback("");
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
    <div style={{ paddingTop: "130px", paddingBottom: "50px" }}>
      <Container maxWidth="md">
        <Box>
          <input
            placeholder="Name"
            style={{
              width: "100%",
              height: "42px",
              paddingLeft: "10px",
              backgroundColor: "#F4F5F4",
              border: "none",
              outline: "none",
              color: "#737B7D",
            }}
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            placeholder="Subject"
            style={{
              width: "100%",
              height: "42px",
              paddingLeft: "10px",
              backgroundColor: "#F4F5F4",
              border: "none",
              outline: "none",
              color: "#737B7D",
              marginTop: "30px",
            }}
            value={subject}
            onChange={(e) => {
              setsubject(e.target.value);
            }}
          />

          <input
            placeholder="Email"
            style={{
              width: "100%",
              height: "42px",
              paddingLeft: "10px",
              backgroundColor: "#F4F5F4",
              border: "none",
              outline: "none",
              color: "#737B7D",
              margin: "30px 0px",
            }}
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <textarea
            placeholder="Write something"
            style={{
              width: "100%",
              height: "147px",
              padding: "10px",
              backgroundColor: "#F4F5F4",
              border: "none",
              outline: "none",
              color: "#737B7D",
              fontFamily: "Mulish",
            }}
            value={feedback}
            onChange={(e) => {
              setfeedback(e.target.value);
            }}
          />

          <Button
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
      </Container>
    </div>
  );
}

export default GetinTouch;

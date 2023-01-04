import {
  Box,
  Grid,
  Container,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";

import CustomPhoneInput from "../CustomPhoneInput/CustomPhoneInput";

function JobDetail() {
  const matches = useMediaQuery("(max-width:830px)");

  // let jobResponsibilities = [
  //   "Responsible for leading the Technical accounting matters like consolidation, business combination, statutory reporting etc",
  //   "Responsible for Financial reporting comply with statutory requirements, company policies, processes, procedures, internal controls, and Finance objectives",
  //   "Responsible for the timely implementation of newly adopted IFRS and relevant changes",
  //   "Ensure adherence to budgets through monitoring systems, dashboards and automated alerting mechanisms Act as the single point of contact for financial and operational performance, both historical and target-related, across all verticals and regions",
  //   "Create scorecards, measurement tools and KPIs to monitor performance, highlight trends and analyze drivers of variances vs budgets",
  //   "Facilitate monthly business reviews of Xord leadership team with mountain peaks and help identify focus areas for improvement",
  //   "Create reports for the board for weekly / monthly/ annual meetings and support team on adhoc initiatives / special projects",
  //   "Overall responsible for Preparation/Presentation of Financial Statements and Management of overall External and Internal Audits",
  // ];

  // let jobRequirement = [
  //   "Bachelor's degree in Computer Science with any Professional skills",
  //   "Fresh or 6 months of experience in Frontend Development",
  //   "Proficiency in building Web frontend, spreadsheets and dashboards Outstanding communication and presentation skills, ability to translate and effectively communicate analytical data to non-technical professionals Ability to engage with all levels of the organization and collaborate cross-functionally",
  // ];
  return (
    <Box pt="150px">
      <Container>
        <Box
          textAlign="center"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          color="#3B3F6D"
          lineHeight={{ xs: "auto", sm: "56px" }}
          my={8}
          // py={5}
          sx={{
            fontFamily: "Mulish",
          }}
        >
          Stay Tune
        </Box>
        {/* <Box py={5}>
          <Typography
            pb={3}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Job Description
          </Typography>
          <Typography
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="primary.main"
            letterSpacing="0.3px"
            lineHeight="22px"
          >
            Bloctech is looking for a Frontend Developer
          </Typography>
        </Box>

        <Box pb={5}>
          <Typography
            pb={2}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Job Responsibilities
          </Typography>

          <Box
            pl={1}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="primary.main"
            letterSpacing="0.3px"
            lineHeight="22px"
          >
            <ul className="cryptoWalletList">
              {jobResponsibilities.map((listItem) => {
                return <li>{listItem}</li>;
              })}
            </ul>
          </Box>
        </Box>

        <Box pb={5}>
          <Typography
            pb={2}
            fontSize={{ xs: "20px", sm: "34px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="primary.main"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Job Requirements
          </Typography>

          <Box
            pl={1}
            fontSize={{ xs: "12px", sm: "16px" }}
            fontWeight={400}
            color="primary.main"
            letterSpacing="0.3px"
            lineHeight="22px"
          >
            <ul className="cryptoWalletList">
              {jobRequirement.map((listItem) => {
                return <li>{listItem}</li>;
              })}
            </ul>
          </Box>
        </Box> */}

        {/* ------------Form for applicant--------------- */}
        {/* /////////////////////////////////////////////////// */}
        <Container>
          <Box pb={5}>
            <Grid container spacing={3}>
              <Grid item xs={matches ? 12 : 6}>
                <Box>
                  <Typography
                    fontSize={{ xs: "14px", sm: "18px" }}
                    fontWeight="700"
                    color="primary.main"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                    mb={0.5}
                  >
                    Name
                  </Typography>
                  <input
                    placeholder="Name"
                    style={{
                      width: "100%",
                      height: "42px",
                      paddingLeft: "10px",
                      backgroundColor: "rgb(199 207 199)",
                      border: "none",
                      outline: "none",
                      color: "#201313",
                    }}
                    //   value={name}
                    //   onChange={(e) => {
                    //     setname(e.target.value);
                    //   }}
                  />
                </Box>
              </Grid>

              <Grid item xs={matches ? 12 : 6}>
                <Box>
                  <Typography
                    fontSize={{ xs: "14px", sm: "18px" }}
                    fontWeight="700"
                    color="primary.main"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                    mb={0.5}
                  >
                    Email Address
                  </Typography>
                  <input
                    placeholder="Enter your Email Address"
                    style={{
                      width: "100%",
                      height: "42px",
                      paddingLeft: "10px",
                      backgroundColor: "rgb(199 207 199)",
                      border: "none",
                      outline: "none",
                      color: "#201313",
                    }}
                    //   value={email}
                    //   onChange={(e) => {
                    //     setemail(e.target.value);
                    //   }}
                  />
                </Box>
              </Grid>

              <Grid item xs={matches ? 12 : 6}>
                <Box>
                  <Typography
                    fontSize={{ xs: "14px", sm: "18px" }}
                    fontWeight="700"
                    color="primary.main"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                    mb={0.5}
                  >
                    Phone Number
                  </Typography>
                  <CustomPhoneInput career={true} />
                </Box>
              </Grid>

              <Grid item xs={matches ? 12 : 6}>
                <Box>
                  <Typography
                    fontSize={{ xs: "14px", sm: "18px" }}
                    fontWeight="700"
                    color="primary.main"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                    mb={0.5}
                  >
                    Location
                  </Typography>
                  <input
                    placeholder="Location"
                    style={{
                      width: "100%",
                      height: "42px",
                      paddingLeft: "10px",
                      backgroundColor: "rgb(199 207 199)",
                      border: "none",
                      outline: "none",
                      color: "#201313",
                    }}
                    //   value={email}
                    //   onChange={(e) => {
                    //     setemail(e.target.value);
                    //   }}
                  />
                </Box>
              </Grid>

              <Grid item xs={matches ? 12 : 6}>
                <Typography
                  fontSize={{ xs: "14px", sm: "18px" }}
                  fontWeight="700"
                  color="primary.main"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                  mb={0.1}
                >
                  Experience{" "}
                  <span style={{ fontSize: "10px" }}>
                    (Enter 0 in years if your experience is less than 1)
                  </span>
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <input
                    placeholder="Experience in Years"
                    style={{
                      width: "100%",
                      height: "42px",
                      paddingLeft: "10px",
                      backgroundColor: "rgb(199 207 199)",
                      border: "none",
                      outline: "none",
                      color: "#201313",
                    }}
                    //   value={email}
                    //   onChange={(e) => {
                    //     setemail(e.target.value);
                    //   }}
                  />

                  <input
                    placeholder="Experience in Months"
                    style={{
                      width: "100%",
                      height: "42px",
                      paddingLeft: "10px",
                      backgroundColor: "rgb(199 207 199)",
                      border: "none",
                      marginLeft: "30px",
                      outline: "none",
                      color: "#201313",
                    }}
                    //   value={email}
                    //   onChange={(e) => {
                    //     setemail(e.target.value);
                    //   }}
                  />
                </Box>
              </Grid>

              <Grid item xs={matches ? 12 : 6}>
                <Box>
                  <Typography
                    fontSize={{ xs: "14px", sm: "18px" }}
                    fontWeight="700"
                    color="primary.main"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                    mb={0.5}
                  >
                    Upload CV
                  </Typography>
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      height: "42px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                      backgroundColor: "rgb(199 207 199)",
                      border: "none",
                      outline: "none",
                      color: "#201313",
                    }}
                    //   value={email}
                    //   onChange={(e) => {
                    //     setemail(e.target.value);
                    //   }}
                  />
                </Box>
              </Grid>
            </Grid>
            {/* ------------submit button--------------- */}
            <Box textAlign="center" pt={4}>
              <Button
                sx={{
                  width: "200px",
                  height: "40px",
                  backgroundColor: "#3B3F6D",
                  borderRadius: "0px",
                  fontSize: "14px",
                  textTransform: "capitalize",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: "0.3px",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#3B3F6D",
                    border: "1px solid #3B3F6D",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
        {/* /////////////////////////////////////////////////// */}
      </Container>
    </Box>
  );
}

export default JobDetail;

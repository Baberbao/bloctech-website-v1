import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

import privacyBg from "./assests/privacyBg.png";
import boxBg from "./assests/boxBg.png";
import bgBox1 from "./assests/bgBox1.png";
import bgBox2 from "./assests/bgBox2.png";
import bgBox4 from "./assests/bgBox4.png";
import c1 from "./assests/1.png";
import c2 from "./assests/2.png";
import { Helmet } from "react-helmet-async";

const StyledHeadingBox = ({ children }) => {
  return (
    <Box display="flex">
      <Box
        width="12px"
        height="12px"
        borderRadius="50%"
        mt={{ xs: 2, md: 2.5 }}
        sx={{
          background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
        }}
      ></Box>
      <Typography
        variant="h2"
        ml={2}
        sx={{
          fontSize: { xs: "25px", md: "44px" },
          fontWeight: "700",
          lineHeight: { xs: "auto", sm: "56px" },
          background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          width: "fit-content",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

function PrivacyPolicy() {
  const introCards = [
    {
      bg: `${bgBox1}`,
      content:
        "You declare your consent for us processing your personal data for contacting purposes.",
    },
    {
      bg: `${bgBox2}`,
      content:
        "You declare your consent for us processing your personal data for internal administrative reasons; and you are deemed notified of such processing.",
    },
    {
      bg: `${bgBox4}`,
      content:
        "If you do not agree with the processing of your personal data, please do not provide us with your personal data via the Bloctech website.",
    },
  ];

  const securityCards = [
    {
      title: "Fairness and lawfulness",
      content:
        "We process your personal data only after obtaining your consent for the processing, and for a determined specific purpose.",
    },
    {
      title: "Transparency",
      content:
        "We process your personal data in a transparent manner, and only with your knowledge.",
    },
    {
      title: "Purpose limitation",
      content:
        "Your personal data is processed within the purposes outlined above.",
    },
    {
      title: "Data minimization",
      content:
        "we only process your personal data to the extent that it is actually needed to achieve the processing purposes.",
    },
    {
      title: "Accuracy",
      content:
        "we ensure that your personal data is accurate and kept up to date.",
    },
    {
      title: "Storage limitation",
      content:
        "your personal data will be processed for the limited period of 5 years, if no other contractual obligations with you allow a longer time period.",
    },
    {
      title: "Integrity and confidentiality",
      content:
        "we secure your personal data with suitable organizational and technical measures.",
    },
    {
      title: "Accountability",
      content:
        "we will be responsible for, and be able to demonstrate compliance with the above- mentioned principles.",
    },
  ];
  const collectDataCards = [
    {
      img: c1,
      title: "Persistent cookies",
      ul: "We use persistent cookies to improve your experience of using the Bloctech website.",
    },

    {
      img: c2,
      title: "Session cookies",
      ul: "Session cookies are temporary and removed at once from your device after your web browser closes. We use session cookies to help us track the internet usage as described herein. You may refuse to accept cookies by changing the corresponding settings in your web browser. However, if you choose to do so, you might be unable to access certain content of the Bloctech website. Unless you change your web browser settings regarding cookies, our systems will place cookies on your device when you visit our website.",
    },
  ];
  const matches = useMediaQuery("(max-width:700px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box pt={{ md: "70px", xs: "79px" }}>
      <Helmet>
        <title>Privacy Policy BlocTech Solutions | BlocTech Solutions</title>
        {/* <meta
          name="description"
          content="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        /> */}
        <meta
          name="title"
          content="Privacy Policy BlocTech Solutions | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        {/* <meta name="keyword" content="multichain blockchain development" />
        <meta name="keyword" content="multichain development services" /> */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Box
        sx={{
          backgroundImage: `url(${privacyBg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box textAlign="center" py={matches ? 15 : 25}>
          <Box
            component="h1"
            m="auto"
            // mt={20}
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            lineHeight={{ xs: "auto", sm: "60px" }}
            color="#fff"
            sx={{
              background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              width: "fit-content",
            }}
          >
            PRIVACY POLICY
          </Box>

          <Box
            component="p"
            m="auto"
            mt={3}
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="#fff"
            textAlign="center"
            lineHeight={{ xs: "auto", sm: "22px" }}
            width={{ xs: "90%", md: "60%" }}
          >
            This Privacy Policy governs the manner in which
            bloctechsolutions.com collects, uses, maintains and discloses
            information collected from users (each, a "User") of the
            bloctechsolutions.com website ("Bloctech website", "our website",
            "this website"). This privacy policy applies to Bloctech website and
            all products and services offered by bloctechsolutions.com.
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* introduction section */}
        <Box py={10}>
          <StyledHeadingBox>Introductory statement</StyledHeadingBox>
          <Box
            component="p"
            mt={2}
            ml={4}
            sx={{
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: "0.3px",
              color: "#FFFFFF",
              textAlign: "justify",
            }}
          >
            The privacy and confidentiality of your personal data is a top
            priority for Bloctech Analytics (“Bloctech”). This privacy policy
            governs the manner in which Bloctech processes personal data
            obtained from its website users. By using our website, providing us
            with your personal data, and reading this policy:
          </Box>

          <Grid
            container
            spacing={5}
            sx={{
              marginTop: "2px",
              marginBottom: "40px",
              paddingLeft: 4,
            }}
          >
            {introCards.map(({ bg, content }, i) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Box
                    bgcolor="#41015F"
                    height="100%"
                    px={3}
                    py={4}
                    sx={{
                      backgroundImage: `url(${bg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <Typography
                      variant="p"
                      fontSize={{ xs: "14px", md: "16px" }}
                      lineHeight="34px"
                      color="#fff"
                    >
                      {content}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          {/* //////////////////////// */}

          {/* personal data part */}
          <StyledHeadingBox>
            The personal data we may collect and how we may use it
          </StyledHeadingBox>

          <Box
            component="p"
            mt={2}
            ml={4}
            sx={{
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: "0.3px",
              color: "#FFFFFF",
              textAlign: "justify",
            }}
          >
            We only collect personal data from you that is necessary for us to
            allow you to utilize our Bloctech website. Examples of personal data
            that we may collect from you are the following:
            <ul>
              <li>Full Name.</li>
              <li>Record of communication.</li>
              <li>Email.</li>
            </ul>
            We keep a record of your communication with us to address potential
            issues you might face. We may use your email address to inform you
            about our services, changes or improvements. When using our website,
            we may collect the following information about you:
          </Box>

          <Grid
            container
            spacing={1}
            sx={{
              marginTop: "15px",
              textAlign: "center",
              paddingLeft: 4,
            }}
          >
            {[
              "Information about your computer.",
              "Login information.",
              "The frequency and duration of your website visits.",
              "Information about searches made on our website.",
              "Internet protocol address and cookies.",
              "Pages you visit on our site.",
            ].map((content, i) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Box
                    bgcolor="#41015F"
                    height="100%"
                    px={3}
                    py={6}
                    sx={{
                      backgroundImage: `url(${boxBg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="p"
                      fontSize={{ xs: "17px", md: "23px" }}
                      fontWeight="700"
                      lineHeight="34px"
                      color="#fff"
                    >
                      {content}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Box
            component="p"
            mt={4}
            ml={4}
            sx={{
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: "0.3px",
              color: "#FFFFFF",
              textAlign: "justify",
            }}
          >
            All of the above collected information is used for organizational,
            administrative and internal reasons. We do not provide this
            information to third parties, except as required by law. <br />
            <br /> The Bloctech website is not directed at children under the
            age of 16 and does not knowingly collect any personally identifiable
            information from children under the age of 16.
          </Box>
          {/* //////////////////////// */}

          {/* how Collect data part */}
          <Box mt={5}>
            <StyledHeadingBox>
              How we collect your personal data:
            </StyledHeadingBox>
            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              We use cookies, web beacons, tags and scripts, and other similar
              technologies including local storage objects such as HTML5. These
              technologies allow us to manage access to and use of the Bloctech
              website, recognize you and help us understand how you use our
              website. <br /> <br /> Cookies are files or pieces of information
              that may be stored on your computer (or other devices, such as
              smartphone or tablet) when you visit Bloctech website. This allows
              us to distinguish your device from those of other users of our
              website. A cookie will usually contain the name of the website the
              cookie has come from, how long it will stay on your device, and a
              randomly generated unique id number. <br />
              <br /> We use the following types of cookies:
            </Box>

            {collectDataCards.map(({ img, title, ul }, index) => (
              <Grid
                container
                mb={3}
                sx={{
                  marginTop: "30px",
                  paddingLeft: 4,
                }}
              >
                <Grid item sm={4} xs={12} minHeight="295px">
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                    sx={{
                      background: "#41015F",
                      boxShadow: "9px 0px 26px #000000",
                      p: "80px",
                      height: "100%",
                    }}
                  >
                    <img src={img} alt="icons" />
                  </Box>
                </Grid>
                <Grid item sm={8} xs={12} minHeight="295px">
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems={{ sm: "start", xs: "center" }}
                    sx={{
                      background: "#240035",
                      height: "100%",
                      px: { sm: "30px", xs: "10px" },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: { sm: "28px", xs: "20px" },
                        color: "white",
                        textAlign: { sm: "start", xs: "center" },
                      }}
                    >
                      {title}
                    </Typography>
                    <Box mt={1} textAlign="left" className="myUl">
                      {ul}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
          {/* //////////////////////// */}

          {/* purposes data part */}
          <Box mt={5}>
            <StyledHeadingBox>Main purposes of processing</StyledHeadingBox>
            <Box
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              We use your personal data for the following purposes:
              <ul>
                <li> To personalize the user experience.</li>
                <li>
                  To operate, provide, improve, and maintain our website and
                  services.
                </li>
                <li>
                  To respond to your inquiries and for other customer service
                  purposes and for other administrative and internal business
                  purposes.
                </li>
              </ul>
            </Box>
          </Box>
          {/* //////////////////////// */}

          {/* Security data part */}
          <Box mt={5}>
            <StyledHeadingBox>Security of your personal data</StyledHeadingBox>
            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              Bloctech uses a variety of security measures to keep your personal
              data protected from unauthorised access and disclosure. Bloctech
              processes your personal data, e.g., based on the following
              principles:
            </Box>

            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "15px",
                textAlign: "center",
                paddingLeft: 4,
              }}
            >
              {securityCards.map(({ title, content }, i) => {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <Box
                      bgcolor="#41015F"
                      height="100%"
                      px={3}
                      py={6}
                      sx={{
                        backgroundImage: `url(${boxBg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <Typography
                        variant="h3"
                        pb={3}
                        fontSize={{ xs: "17px", md: "20px" }}
                        fontWeight="700"
                        lineHeight="22px"
                        color="#fff"
                      >
                        {title}
                      </Typography>

                      <Typography
                        variant="p"
                        fontSize={{ xs: "14px", md: "16px" }}
                        lineHeight="22px"
                        color="#fff"
                      >
                        {content}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {/* //////////////////////// */}

          {/* access data part */}
          <Box mt={5}>
            <StyledHeadingBox>Access to your personal data</StyledHeadingBox>

            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
                width: "90%",
              }}
            >
              Only a limited number of Bloctech employees who are responsible
              for the maintenance of our website and for customer relations have
              access to your personal data.
            </Box>
          </Box>
          {/* //////////////////////// */}

          {/* processing actions part */}
          <Box mt={5}>
            <StyledHeadingBox>
              Main processing actions with your personal data{" "}
            </StyledHeadingBox>

            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
                width: "90%",
              }}
            >
              We may process your personal data mostly by way of collection,
              storing, recording and structuring. However, we cannot exclude
              other ways of data processing, if necessary for the
              above-mentioned purposes.
            </Box>
          </Box>
          {/* //////////////////////// */}

          {/* store personal data part */}
          <Box mt={5}>
            <StyledHeadingBox>
              Where we store your personal data
            </StyledHeadingBox>

            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
                width: "90%",
              }}
            >
              All your personal data collected by us is stored on our secure
              servers and hosting company such as godaddy.com.
            </Box>
          </Box>
          {/* //////////////////////// */}

          {/* Disclosure personal data part */}
          <Box mt={5}>
            <StyledHeadingBox>
              Disclosure of your personal data
            </StyledHeadingBox>

            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
                width: "90%",
              }}
            >
              We use our best efforts not to disclose any confidential
              information to third parties. The Bloctech website maintains a
              secure site, but you should know that computer use may be
              monitored by third parties such as network administrators,
              employers, internet providers, and operation system & internet
              browser vendors, and, thus, we cannot guarantee the security of
              information you post online. You disclose all information online
              at your own risk. Please remember that this website may be hosted
              outside your home country, and your email communications to us may
              be directed to a server that is hosted outside your home country.
              Communications over the Internet may not be secure.
            </Box>
          </Box>
          {/* //////////////////////// */}

          {/* Third party part */}
          <Box mt={5}>
            <StyledHeadingBox>
              Third party provided content/links
            </StyledHeadingBox>

            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
                width: "90%",
              }}
            >
              Users may find content and products of other companies or
              organizations on our website and/or links to the sites and
              services of our suppliers, licensors, or other third parties.
              Please note that we do not control these sites. Each such third
              party is solely responsible for complying with the laws, rules and
              regulations applicable to its business and the operation of its
              own website. For any questions regarding your personal data please
              feel free to contact Bloctech Data Protection Officer at
              dpo@bloctechsolutions.com.
            </Box>
          </Box>
          {/* //////////////////////// */}
        </Box>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;

import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

import privacyBg from "./assests/privacyBg.png";
import bgBox1 from "./assests/bgBox1.png";
import bgBox2 from "./assests/bgBox2.png";
import bgBox4 from "./assests/bgBox4.png";
import { Helmet } from "react-helmet-async";

const StyledHeadingBox = ({ children }) => {
  return (
    <Box display="flex">
      <Helmet>
        <title>Cookie Policy BlocTech Solutions | BlocTech Solutions</title>
        {/* <meta
          name="description"
          content="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        /> */}
        <meta
          name="title"
          content="Cookie Policy BlocTech Solutions | BlocTech Solutions"
        />
        <meta charset="utf-8" />
        {/* <meta name="keyword" content="multichain blockchain development" />
        <meta name="keyword" content="multichain development services" /> */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>
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

function CookiePolicy() {
  const introCards = [
    {
      bg: `${bgBox1}`,
      title: "Strictly Necessary Cookies",
      content:
        "These are cookies that are required for the operation of our Website.",
    },
    {
      bg: `${bgBox2}`,
      title: "Performance and Functionality Cookies",
      content:
        "These are used to recognize you when you return to our Website. This enables us to personalize our content for you and remember your preferences, but are non-essential to the performance of the Website.",
    },
    {
      bg: `${bgBox4}`,
      title: "Analytical or Customization Cookies",
      content:
        "These cookies collect information about how users access and move through the Website. We use this information in either aggregate form to help us to improve the way our Website works, or to personalize our Website to your interests.",
    },
    {
      bg: `${bgBox4}`,
      title: "Social Media Cookies",
      content:
        "These cookies allow us to integrate social media functions into our Website. Depending on the lifetime cycle, the cookies might be: Persistent Cookies will remain stored on your device until deleted or until they reach their expiry date, and Session Cookies that are temporary and removed at once from your device after your web browser closes.",
    },
  ];

  const matches = useMediaQuery("(max-width:700px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box pt={{ md: "70px", xs: "79px" }}>
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
            Cookies Policy
          </Box>

          {/* <Box
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
          </Box> */}
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Typography
          component="p"
          fontSize={{ xs: "14px", md: "16px" }}
          lineHeight="34px"
          color="#fff"
          py={5}
        >
          Last updated: April 25, 2022
        </Typography>

        {/* Recitals section */}
        <Box pb={10}>
          <StyledHeadingBox>Recitals</StyledHeadingBox>
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
            This Policy describes the usage of cookies on Bloctech Solutions
            website (“Website”) and explains your rights to control our use of
            them. We use cookies to improve user experience on our Website
            through personalization and analytics. Should you have any questions
            about this Policy, please contact us at
            support@bloctechsolutions.com .<br />
            <br /> By using the Website, you are consenting to our use of
            cookies in accordance with this Policy. If you do not agree to our
            cookies in this way, you should set your browser settings
            accordingly as recommended in section 4 below or not use the
            Website. Please note that if you disable cookies that we use, this
            may impact your user experience while on the Website or prevent you
            from visiting the Website at all.
            <br />
            <br /> When you first access the Website, you may receive a message
            advising you that cookies are in use. By clicking the OK button, or
            closing the message, or continuing to browse the Website, you
            signify that you understand and agree to the use of the respective
            technologies, as described in this Cookies Policy.
          </Box>
          {/* //////////////////////// */}

          {/*  What are Cookies? part */}
          <Box mt={5}>
            <StyledHeadingBox>What are Cookies?</StyledHeadingBox>

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
              Cookies are small files containing a string of characters that may
              be stored on your computer (or other devices, such as smartphone
              or tablet) when you visit the Website. This allows us to
              distinguish your device from those of other users of our Website.
              Cookies will usually contain the name of a website the cookies
              come from, how long it will stay on your device and a randomly
              generated unique id number. Cookies may store your preferences and
              other information but cannot read data off your hard disk or read
              cookie files created by other sites. <br />
              <br /> Cookies set by a website owner are called “first party
              cookies”. Cookies set by parties other than the website owner are
              called “third party cookies”. Third party cookies enable third
              party features or functionality to be provided on or through the
              Website (i.e. social media functions and analytics). Third parties
              that place cookies on the Website control the personal data they
              collect about you. You are encouraged to read their privacy
              policies to understand their data processing activities, policies
              and procedures.
            </Box>
          </Box>
          {/* //////////////////////// */}

          {/*  Cookies we use part */}
          <Box mt={5}>
            <StyledHeadingBox>The Cookies we use</StyledHeadingBox>

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
              We use cookies for a variety of reasons. Cookies make it easier
              for you to log on to and use the Website during visits. The
              aggregate information collected permits us to analyze traffic
              patterns and target the interests of our users. This helps us
              provide you with a better experience by improving the content and
              making our Website easier to use.
              <br />
              <br />
              We use the following categories of cookies:
            </Box>
            <Grid
              container
              spacing={3}
              sx={{
                marginTop: "2px",
                marginBottom: "40px",
                paddingLeft: 4,
              }}
            >
              {introCards.map(({ bg, title, content }, i) => {
                return (
                  <Grid item xs={11} sm={5.5}>
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
                        variant="h3"
                        fontSize={{ xs: "14px", md: "16px" }}
                        lineHeight="25px"
                        fontWeight="700"
                        color="#fff"
                      >
                        {title}
                      </Typography>
                      <Typography
                        mt={2}
                        varient={"p"}
                        fontSize={{ xs: "14px", md: "16px" }}
                        lineHeight="25px"
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

          {/*  control Cookies part */}
          <Box mt={5}>
            <StyledHeadingBox>How to control Cookies</StyledHeadingBox>

            <Box
              component="p"
              mt={2}
              ml={4}
              sx={{
                fontSize: "16px",
                lineHeight: "25px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                textAlign: "justify",
              }}
            >
              You may refuse to accept cookies by changing the corresponding
              settings in your web browser. However, if you choose to do so, you
              might be unable to access certain content of the Website or it may
              prevent you from visiting the Website at all. Unless you change
              your web browser settings regarding cookies, our systems will
              place cookies on your device when you visit our Website. You can
              refuse the setting of all or some cookies.
              <br /> Please follow the links below to helpful information for
              the most popular browsers:
              <ul>
                <li style={{ wordBreak: "break-word" }}>
                  Microsoft Internet Explorer: <br />
                  <a
                    target="_blank"
                    href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                    style={{ color: "#fff" }}
                  >
                    https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                  </a>
                </li>
                <li style={{ marginTop: "20px", wordBreak: "break-word" }}>
                  Google Chrome: <br />
                  <a
                    target="_blank"
                    href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en"
                    style={{ color: "#fff" }}
                  >
                    https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en
                  </a>
                </li>
                <li style={{ marginTop: "20px", wordBreak: "break-word" }}>
                  Mozilla Firefox: <br />
                  <a
                    target="_blank"
                    href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    style={{ color: "#fff" }}
                  >
                    https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                  </a>
                </li>
                <li style={{ marginTop: "20px", wordBreak: "break-word" }}>
                  Safari: <br />
                  <a
                    target="_blank"
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    style={{ color: "#fff" }}
                  >
                    https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                  </a>
                </li>
              </ul>
            </Box>
          </Box>
          {/* //////////////////////// */}

          {/*  General part */}
          <Box mt={5}>
            <StyledHeadingBox>General</StyledHeadingBox>

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
              We may change this policy from time to time, please check it
              regularly for any changes. If there are any discrepancies between
              the cookies we use and the cookies listed in section 3
              hereinabove, they will be aligned during the next periodic review
              that we run quarterly. <br />
              <br />
              <span style={{ fontWeight: "700" }}>
                Should you have any questions about this Policy, please contact
                us at support@bloctechsolutions.com.
              </span>
            </Box>
          </Box>
          {/* //////////////////////// */}
        </Box>
      </Container>
    </Box>
  );
}

export default CookiePolicy;

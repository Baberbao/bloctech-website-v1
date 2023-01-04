import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import blog8img from "./assets/blog11two.png";
import blog8 from "./assets/blog11.png";
import bg from "./assets/bgf.png";
import { Helmet } from "react-helmet-async";
import author from "./assets/iqra.png";
import { useEffect } from "react";
import BlogSlider from "./BlogSlider";

const AccordionData = [
  {
    summary: "What are the risks of peer-to-peer lending?",
    details:
      "Inadequate diversification, money lost as a result of poor debts, losing money because a P2P lending platform failed.",
  },
  {
    summary: "Is peer-to-peer lending worth it?",
    details:
      "Regarding portfolio diversification, P2P lending might be a great option. P2P lending is not only a desirable alternative asset; in a low-interest-rate environment, it can produce significant returns for investors.",
  },
  {
    summary: "Who regulates peer to peer lending?",
    details:
      "The Reserve Bank of India, India's Central Bank, now controls peer-to-peer lending in that country. In order to regulate peer-to-peer lending, it prepared a consultation paper, and the final rules were published in 2017. In 2016, India had over 30 platforms for peer-to-peer lending.",
  },
];

const Blog11 = () => {
  const [expanded, setExpanded] = React.useState(false);
  // const check = useMediaQuery("(max-width:750px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blog/advantages-and-disadvantages-of-peer-to-peer-lending-P2P/",
      },
      headline: "Advantages and disadvantages  of  Peer to Peer Lending (P2P)",
      description:
        "Invest in peer to peer lending platforms and measure how P2P will benefit the lenders and borrowers. increase you return on investment ratio with P2P lending.",
      image: "",
      author: {
        "@type": "",
        name: "Iqra Kanwal",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      FAQ: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the risks of peer-to-peer lending?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Inadequate diversification, money lost as a result of poor debts, losing money because a P2P lending platform failed.",
            },
          },
          {
            "@type": "Question",
            name: "Is peer-to-peer lending worth it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Regarding portfolio diversification, P2P lending might be a great option. P2P lending is not only a desirable alternative asset; in a low-interest-rate environment, it can produce significant returns for investors.",
            },
          },
          {
            "@type": "Question",
            name: "Who regulates peer to peer lending?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Reserve Bank of India, India's Central Bank, now controls peer-to-peer lending in that country. In order to regulate peer-to-peer lending, it prepared a consultation paper, and the final rules were published in 2017. In 2016, India had over 30 platforms for peer-to-peer lending.",
            },
          },
        ],
      },
      datePublished: "",
    };
    return JSON.stringify(data);
  };
  const title = "Advantages and disadvantages of Peer to Peer Lending (P2P)";
  return (
    <Box
      pb={10}
      pt={20}
      px={{ xs: 1, md: 7 }}
      sx={{
        // backgroundImage: `url(${blogDetailBG})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet>
        <title>Working, Pros & Cons of Peer to Peer Lending (P2P)</title>
        <meta
          name="description"
          content="
          Invest in peer to peer lending platforms and measure how P2P will benefit the lenders and borrowers. increase you return on investment ratio with P2P lending."
        />
        <meta
          name="title"
          content="Working, Pros & Cons of Peer to Peer Lending (P2P)"
        />
        <meta charset="utf-8" />
        <meta
          name="keywords"
          content="advantages of Peer to peer lending , disadvantages of peer to peer lending"
        />

        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{structureData()}</script>
      </Helmet>
      <Container maxWidth="md">
        <Box
          display="flex"
          justify="space-evenly"
          flexWrap={"wrap"}
          color="white"
          align="center"
          fontWeight="bold"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              paddingTop: "3px",
              "&:hover": {
                color: "#CC10C6",
              },
            }}
          >
            {" "}
            Home{" "}
          </Link>
          <IconButton>
            <ArrowForwardIosIcon
              sx={{ color: "white", fontSize: "1rem", fontWeight: "400" }}
            />
          </IconButton>
          <Link
            to="/blog/"
            style={{
              textDecoration: "none",
              color: "white",
              paddingTop: "3px",
              "&:hover": {
                color: "#CC10C6",
              },
            }}
          >
            {" "}
            Blogs
          </Link>
          <IconButton>
            <ArrowForwardIosIcon
              sx={{ color: "white", fontSize: "1rem", fontWeight: "400" }}
            />
          </IconButton>
          <Box
            style={{
              color: "white",
              paddingTop: "3px",
              cursor: "pointer",
              "&:hover": {
                color: "#CC10C6",
              },
            }}
          >
            {" "}
            {title}
          </Box>
        </Box>
        <Box
          component="img"
          src={blog8}
          alt="advantages and disadvantages of peer to peer lending platforms"
          width="100%"
        />
        <Box
          mt="20px"
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-start",
              md: "flex-start",
            },
            alignItems: "center",
          }}
        >
          <Box pr="10px">
            <Avatar src={author} />{" "}
          </Box>{" "}
          <Box>
            <Typography
              color="white"
              fontSize="14px"
              fontStyle="italic"
              fontWeight="bold"
            >
              {" "}
              Iqra Kanwal
            </Typography>
            <Typography
              color="white"
              fontSize="12px"
              fontStyle="italic"
              fontWeight="bold"
            >
              {" "}
              SEP 28th 2022
            </Typography>
          </Box>{" "}
        </Box>
        <Box>
          <Box
            component="h1"
            color="#fff"
            sx={{
              fontSize: { xs: "28px", md: "44px" },
              lineHeight: { xs: "40px", md: "50px" },
            }}
          >
            Advantages and disadvantages of Peer to Peer Lending (P2P)
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="30px"
                fontWeight="700"
              >
                Introduction to peer to peer lending:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Peer to peer lending is one of the investment opportunities that
              is growing the fastest in the UK. Each year, thousands of people
              use P2P platforms to lend their money in return for interest, some
              of whom are seasoned investors and others who are new to the
              market.
              <br />
              Whether you're considering making your very first investment or
              increasing an existing one, it's important to understand that
              there are benefits and drawbacks to investing in peer to peer
              lending.
              <br />
              The advantages and disadvantages of peer-to-peer lending are
              briefly discussed here. Let's briefly examine how peer to peer
              lending functions before moving on to the advantages and
              disadvantages of this type of lending.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="30px"
                fontWeight="700"
              >
                Working of Peer to Peer Lending (P2P):
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Online marketplaces (P2P) link borrowers and lenders. You have two
              choices if you need to borrow money: you may apply directly
              through one of the many P2P websites in the UK, or you can utilize
              a comparison website for peer-to-peer loans, which will compare
              rates for you.
              <br />
              Your loan request will be assessed similarly to a typical bank
              loan request. A credit reference bureau will be used by the
              peer-to-peer lending platform to search through publicly available
              data, such as the electoral register, and analyze your financial
              history to calculate your credit rating or the risk associated
              with lending to you. Your application will be approved, and a
              peer-to-peer loan provider will connect you with other borrowers
              who want to give you money.
              <br />
              If you're interested in investing or lending, you may create an
              account and submit the money for your investment on the P2P
              website. If you can choose the return you desire and divide your
              money among several borrowers, the risk that a loan won't be
              repaid may be lessened. You may even make bids on loans on some
              websites. Because each platform will operate differently and
              provide investors with differing levels of protection, it's
              critical to undertake research to find the ideal solution for you.
              In general, the safer investment is seen as being, the lower the
              rate of return offered to investors.
            </Typography>
          </Box>
          <Box my={2}>
            <img
              src={blog8img}
              width="100%"
              alt="process of crypto wallet development"
            />
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="30px"
                fontWeight="700"
              >
                Advantages of Peer to Peer lending (P2P):
              </Typography>
            </Box>
          </Box>

          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="22px"
                fontWeight="700"
              >
                Rate of interest:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
              fontWeight="700"
            >
              The main benefit for most P2P lenders is the interest that is
              given; for instance, with Kuflink, you might earn up to 7.2%
              yearly. Despite the fact that the two products are not comparable
              and ordinary savings accounts offer such low-interest rates, more
              customers are looking at alternative money management methods like
              peer-to-peer investing.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="22px"
                fontWeight="700"
              >
                Benefits for the investor/lender in p2p:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
              fontWeight="700"
            >
              <ul>
                <li>
                  It may be possible to get a rate of return that is far higher
                  than what is now provided by traditional assets like bonds or
                  savings accounts.
                </li>
                <li>
                  You may choose how much risk you're prepared to take on based
                  on the borrower's profile.
                </li>
                <li>
                  On certain websites, backup reserves are provided to protect
                  investors in the event that a borrower defaults.
                </li>
                <li>
                  P2P lending income is tax-free if you invest through an
                  Innovative Finance Individual Savings Account (IFISA).
                </li>
              </ul>
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="25px"
                fontWeight="700"
              >
                Globalization:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Most P2P platforms will provide at least one product that
              automatically diversifies (spreads) your investment across a range
              of potential outcomes, reducing your risk because you aren't
              putting your entire portfolio into one loan.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="25px"
                fontWeight="700"
              >
                Variation:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              P2P loans may be used for a wide variety of purposes, giving
              investors a wide range of alternatives when it comes to lending
              their money. The most well-liked uses are creating new businesses,
              helping clients increase the size of their real estate portfolios,
              and assisting with house building.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="25px"
                fontWeight="700"
              >
                Market Structure:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Secondary markets allow investors the chance to sell their loan
              sections to other investors, even if you shouldn't ever expect to
              be able to exit your investment early. This provides liquidity in
              the event that your circumstances change and you need to access
              your money sooner than anticipated.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="25px"
                fontWeight="700"
              >
                Fresh FCA Rules:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Although P2P has long been subject to regulation in the UK, the
              FCA recently assessed the sector and issued new regulatory
              guidelines for companies. Even while it's essential to always do
              your own research and never make an investment only because a
              company is regulated by the FCA, these stronger rules should
              result in better safety for you as an investor.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h2">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="30px"
                fontWeight="700"
              >
                Disadvantages of peer to peer lending(P2P) :
              </Typography>
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="25px"
                fontWeight="700"
              >
                Drawbacks of lender:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              For loans you make, the Financial Services Compensation Scheme
              does not apply. As a result, if a borrower defaults on the loan,
              you might suffer financial loss. If you want to get your money
              back for the duration of the loan arrangement, you might need to
              find a new lender ready to take on the loan. Although the
              procedure might not always proceed as swiftly as you'd want, the
              platform can usually manage this for you. There can also be a fee.
              Returns on a P2P loan might be less than expected if a borrower
              pays it off early.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="25px"
                fontWeight="700"
              >
                Platform Divergence:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              Peer to peer lending encompasses a wide variety of websites,
              loans, and security types. Before making an investment, you should
              carefully research each possibility since their levels of due
              diligence will vary. Although past performance is not a reliable
              indicator of future performance, it is a good idea to investigate
              the platform's management team, their professional credentials,
              and the performance of their loans in the past. Online review
              portals like Trustpilot are a great way to acquire customer
              feedback if you don't already have family members and friends who
              have made investments through your preferred platform.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="25px"
                fontWeight="700"
              >
                Accountability for Taxes:
              </Typography>
            </Box>
            <Typography
              mt={2}
              variant="body1"
              textAlign={{ md: "justify", xs: "left" }}
              fontSize="18px"
            >
              It is your duty to ensure that you comply with the tax obligations
              imposed by HMRC on the interest you get from your P2P investments.
              The good news is that P2P earnings may be used for your Personal
              Savings Allowance, which is worth £1,000 for basic rate taxpayers
              and £500 for higher rate taxpayers. In other words, you won't be
              required to pay tax on interest up to this sum.
            </Typography>
          </Box>
          <Box mt={4} color="#fff">
            <Box component="h3">
              <Typography
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                fontSize="22px"
                fontWeight="700"
              >
                People also ask for:
              </Typography>
            </Box>
          </Box>
          <Container maxWidth="md">
            {AccordionData.map((value, index, array) => {
              return (
                <Box sx={{ margin: "auto", width: "100%", py: "10px" }}>
                  <Accordion
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    sx={{
                      marginTop: "20px",

                      backgroundColor: "transparent",
                      mb: "10px",
                    }}
                  >
                    <AccordionSummary
                      aria-controls={`panel${index + 1}bh-content`}
                      id={`panel${index + 1}bh-header`}
                      className="borderRad"
                      expandIcon={
                        <i
                          style={{ color: "white", fontSize: "30px" }}
                          className="fa-solid fa-plus"
                        ></i>
                      }
                      // aria-controls="panel1a-content"
                      // id="panel1a-header"
                      sx={{
                        padding: "0px 20px 0px 0px",
                        // background: "#3B3F6D",
                        borderRadius: "12px",
                        backgroundImage: `url(${bg})`,
                        backgroundPosition: { sm: "center", xs: "left" },
                        backgroundSize: { sm: "100% 100%", xs: "100% 100%" },
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          px="20px"
                          textAlign="center"
                          fontSize={{ md: "20px", sm: "16px" }}
                          lineHeight={"40px"}
                          fontFamily="Josefin Sans"
                          sx={{
                            color: "white",
                            fontWeight: "500",
                          }}
                        >
                          {value.summary}
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        background: "#621E82",
                        borderRadius: "12px",
                        paddingY: "30px",
                        marginTop: "-30px",
                      }}
                    >
                      <Box
                        mt={2}
                        textAlign={value.list ? "left" : "center"}
                        fontSize={{ md: "16px", sm: "13px" }}
                        lineHeight={"30px"}
                        color="white"
                      >
                        {value.details}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              );
            })}
          </Container>
        </Box>
        <Box py="40px">
          {" "}
          <BlogSlider />{" "}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog11;

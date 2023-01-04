import React, { useEffect, lazy, Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer/Footer";
// import { LocalDining } from "@mui/icons-material";
import ModalD from "./components/ModalD/ModalD";
import { Box } from "@mui/system";
import LoadingSuspence from "./LoadingSuspence";
import Applyform from "./components/Careers/Applyform";
import Blog2 from "./components/Blog/Blog2";
import Blog3 from "./components/Blog/Blog3";
import Blog4 from "./components/Blog/Blog4";
import Errorpage from "./components/Errorpage/Errorpage";
import Blog5 from "./components/Blog/Blog5";
import Blog6 from "./components/Blog/Blog6";
import Blog7 from "./components/Blog/Blog7";
import Blog8 from "./components/Blog/Blog8";
import Blog9 from "./components/Blog/Blog9";
import Blog10 from "./components/Blog/Blog10";
import Blog11 from "./components/Blog/Blog11";
import Blog12 from "./components/Blog/Blog12";
import Blog13 from "./components/Blog/Blog13";
import Blog14 from "./components/Blog/Blog14";
import Blog15 from "./components/Blog/Blog15";
import Blog16 from "./components/Blog/Blog16";
import Blog17 from "./components/Blog/Blog17";
import Blog18 from "./components/Blog/Blog18";
import Blog20 from "./components/Blog/Blog20";
import Blog19 from "./components/Blog/Blog19";
import Blog21 from "./components/Blog/Blog21";
import Blog23 from "./components/Blog/Blog23";
import Blog22 from "./components/Blog/Blog22";
import Blog24 from "./components/Blog/Blog24";
import Blog25 from "./components/Blog/Blog25";

const AboutusDetails = lazy(() =>
  import("./components/AboutusViewAll/AboutusDetails")
);

const PrivacyPolicy = lazy(() => import("./components/Policy/PrivacyPolicy"));
const DiliveryPolicy = lazy(() => import("./components/Policy/DiliveryPolicy"));
const CookiePolicy = lazy(() => import("./components/Policy/CookiePolicy"));
const Terms = lazy(() => import("./components/Policy/Terms"));
const ModalC = lazy(() => import("./ModalC"));

const RefundPolicy = lazy(() => import("./components/Policy/RefundPolicy"));
const NewCareers = lazy(() => import("./components/Careers/NewCareers"));

const SmartcontractAudit = lazy(() =>
  import("./components/SmartcontractAudit/SmartcontractAudit")
);
const Blockchainservices = lazy(() =>
  import("./components/Details/Blockchainservices")
);
const TokenOffering = lazy(() =>
  import("./components/TokenOffering/TokenOffering")
);

const SmartContractDev = lazy(() =>
  import("./components/SmartContractDev/SmartContractDev")
);
const BlockchainConsult = lazy(() =>
  import("./components/BlockchainConsult/BlockchainConsult")
);
const CryptoWalletDev = lazy(() =>
  import("./components/CryptoWalletDev/CryptoWalletDev")
);
const DefiProduct = lazy(() => import("./components/DefiProduct/DefiProduct"));
const DappDevelopment = lazy(() =>
  import("./components/DappDevelopment/DappDevelope")
);
const CenterlizedExchange = lazy(() =>
  import("./components/CentralizedExchange/CentralizedExchange")
);
const MultiChainBridge = lazy(() =>
  import("./components/ProductDetailPages/MultiChainBridge")
);
const PrivateStartup = lazy(() =>
  import("./components/Privatestartups/Privatestartups")
);
const Disclamer = lazy(() => import("./components/Policy/Disclamer"));
const Tokenization = lazy(() =>
  import("./components/Tokenization/Tokenization")
);
const JobDetail = lazy(() => import("./components/Careers/JobDetail"));
const Sitemap = lazy(() => import("./components/Sitemap/Sitemap"));
const Main = lazy(() => import("./components/Daos"));

const NewBlogMain = lazy(() => import("./components/Blog/NewBlogMain"));
const NewBlogDetail = lazy(() => import("./components/Blog/NewBlogDetail"));
const BlockchainBasedP2P = lazy(() =>
  import("./components/ProductDetailPages/BlockchainBasedP2P")
);
const Faqs = lazy(() => import("./components/Pricing/Faqs"));

const Services = lazy(() => import("./components/Services/Services"));
const Products = lazy(() => import("./components/Products/Products"));
const Testimonial = lazy(() => import("./components/Testimonial/Testimonial"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const AboutUs = lazy(() => import("./components/About/AboutUs"));
const OurPatners = lazy(() => import("./components/OurPartners/OurPatners"));

const renderLoader = () => (
  <Box
    sx={{
      width: "100vh",
      height: "100vh",
    }}
  >
    <LoadingSuspence />
  </Box>
);

const structureData = () => {
  let data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlocTech Solutions",
    alternateName: "BlocTech",
    url: "https://bloctechsolutions.com/",
    logo: "",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+9203138604818",
      contactType: "customer service",
      areaServed: ["US", "GB", "AE", "PK"],
      availableLanguage: "en",
    },
    sameAs: "https://bloctechsolutions.com/",
  };
  return JSON.stringify(data);
};

const structureContact = () => {
  let data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BlocTech Solutions",
    image: "",
    "@id": "",
    url: "https://www.bloctechsolutions.com/contact-us/",
    telephone: "+9203138604818",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Faisalabad",
      postalCode: "38000",
      addressCountry: "PK",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "07:00",
    },
  };
  return JSON.stringify(data);
};
//pages of all sites
function App() {
  const [terms, setTerms] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openN, setOpenN] = React.useState(false);
  const [terms1, setTerms1] = React.useState("none");
  const [disclaimer, setDisclaimer] = React.useState("none");

  useEffect(() => {
    var x = localStorage.getItem("terms");
    if (x === "true") {
      setTerms(false);
      setOpen(false);
      setTerms1("none");
    } else {
      setTerms1("block");
      setTerms(true);
      setOpen(true);
    }

    window.scrollTo(0, 0);

    let zz = typeof 90 + " " + 90;
    console.log(zz, "-------->>>");
  }, []);

  return (
    <>
      <ModalD openN={openN} setOpenN={setOpenN} />
      <ModalC
        setTerms={setTerms}
        open={open}
        terms1={terms1}
        setOpen={setOpen}
        setTerms1={setTerms1}
        terms={terms}
      />
      {/* <CustomCurser /> */}
      <ScrollToTop
        color="#fff"
        width="20px"
        height="20px"
        style={{
          background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
        }}
        smooth
      />

      {/* <MainImage /> */}
      <Navbar openN={openN} setOpenN={setOpenN} />

      <Routes>
        {terms && (
          <Route
            path="/terms/"
            element={
              <Suspense fallback={renderLoader()}>
                <Terms setTerms1={setTerms1} />
              </Suspense>
            }
          />
        )}

        <Route
          path="/terms/"
          element={
            <Suspense fallback={renderLoader()}>
              <Terms setTerms={setTerms} setTerms1={setTerms1} />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy/"
          element={
            <Suspense fallback={renderLoader()}>
              <PrivacyPolicy />
            </Suspense>
          }
        />

        <Route
          path="/cookiepolicy/"
          element={
            <Suspense fallback={renderLoader()}>
              <CookiePolicy />
            </Suspense>
          }
        />
        <Route
          path="/sitemap/"
          element={
            <Suspense fallback={renderLoader()}>
              <Sitemap />
            </Suspense>
          }
        />

        <Route
          path="/blog/"
          element={
            <Suspense fallback={renderLoader()}>
              <NewBlogMain openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />

        <Route
          path="/blog/:title/"
          element={
            <Suspense fallback={renderLoader()}>
              <NewBlogDetail openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/blog/understanding-the-working-and-benefits-of-smart-contract/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog2 />
            </Suspense>
          }
        />
        <Route
          path="/blog/what-is-a-blockchain-token-and-how-many-types-of-tokens-are-there/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog3 />
            </Suspense>
          }
        />
        <Route
          path="/blog/guide-to-dapp-development-and-benefits-of-decentralized-applications/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog4 />
            </Suspense>
          }
        />
        <Route
          path="/blog/what-exactly-is-a-dao-Its-working-and-benefits/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog5 />
            </Suspense>
          }
        />
        <Route
          path="/blog/what-is-defi-a-beginners-guide-to-decentralized-finance-system/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog6 />
            </Suspense>
          }
        />
        <Route
          path="/blog/complete-guide-to-peer-to-peer-lending-platforms-with-blockchain-Integration/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog7 />
            </Suspense>
          }
        />
        <Route
          path="/blog/what-is-a-centralized-exchange-CEX-and-how-CEX-work/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog8 />
            </Suspense>
          }
        />
        <Route
          path="/blog/what-is-multichain-defining-the-working-of-multichain-blockchain/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog9 />
            </Suspense>
          }
        />
        <Route
          path="/blog/defining-crypto-wallet-and-the-processes-of-crypto-wallet-development/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog10 />
            </Suspense>
          }
        />
        <Route
          path="/blog/advantages-and-disadvantages-of-peer-to-peer-lending-P2P/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog11 />
            </Suspense>
          }
        />

        <Route
          path="/blog/advantages-and-disadvantages-of-peer-to-peer-lending-P2P/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog11 />
            </Suspense>
          }
        />
        <Route
          path="/blog/8-most-popular-DApps-of-2022/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog12 />
            </Suspense>
          }
        />
        <Route
          path="/blog/blockchain-in-real-estate-industry-reshape-the-transaction-process/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog13 />
            </Suspense>
          }
        />
        <Route
          path="/blog/the-complete-guide-to-nft-smart-contracts/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog14 />
            </Suspense>
          }
        />
        <Route
          path="/blog/varioys-types-of-crypto-wallets-with-distinguished-properties/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog15 />
            </Suspense>
          }
        />
        <Route
          path="/blog/brief-guide-for-defi-vs-cefi-every-aspect-you-need-to-know/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog16 />
            </Suspense>
          }
        />
        <Route
          path="/blog/centralized-vs-decentralized-exchanges-a-brief-comparison/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog17 />
            </Suspense>
          }
        />
        <Route
          path="/blog/crypto-token-vs-coin-what-is-the-major-difference/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog18 />
            </Suspense>
          }
        />
        <Route
          path="/blog/best-examples-of-daos-you-need-to-know-about/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog19 />
            </Suspense>
          }
        />
        <Route
          path="/blog/10-smart-contract-use-cases-beneficial-for-businesses/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog20 openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/blog/history-and-evolution-of-blockchain-technology/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog21 openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/blog/how-to-invest-in-web3-ecosystem/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog23 openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/blog/the-core-difference-between-web-3.0-and-web-2.0/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog22 openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />

        <Route
          path="/blog/use-cases-of-blockchain-technology/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog24 openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/blog/what-is-nft-and-how-does-nft-work/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blog25 openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/faq/"
          element={
            <Suspense fallback={renderLoader()}>
              <Faqs openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/refund-policy/"
          element={
            <Suspense fallback={renderLoader()}>
              <RefundPolicy />
            </Suspense>
          }
        />
        <Route
          path="/delivery-policy/"
          element={
            <Suspense fallback={renderLoader()}>
              <DiliveryPolicy />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={renderLoader()}>
              <Errorpage />
            </Suspense>
          }
        />

        <Route
          path="/about-us/"
          element={
            <Suspense fallback={renderLoader()}>
              <AboutusDetails openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />

        <Route
          path="/career/"
          element={
            <Suspense fallback={renderLoader()}>
              <NewCareers />
            </Suspense>
          }
        />
        <Route
          path="/apply-form/:job/"
          element={
            <Suspense fallback={renderLoader()}>
              <Applyform />
            </Suspense>
          }
        />

        <Route
          path="/jobDetail/"
          element={
            <Suspense fallback={renderLoader()}>
              <JobDetail />
            </Suspense>
          }
        />

        {/* Block chain details  */}

        <Route
          path="/token-development-services/"
          element={
            <Suspense fallback={renderLoader()}>
              <TokenOffering openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/smart-contract-development-services/"
          element={
            <Suspense fallback={renderLoader()}>
              <SmartContractDev openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/dapp-development-company/"
          element={
            <Suspense fallback={renderLoader()}>
              <DappDevelopment openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/defi-development-services/"
          element={
            <Suspense fallback={renderLoader()}>
              <DefiProduct openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/crypto-wallet-development-service/"
          element={
            <Suspense fallback={renderLoader()}>
              <CryptoWalletDev openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/blockchain-consulting-services/"
          element={
            <Suspense fallback={renderLoader()}>
              <BlockchainConsult openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/blockchain-development-services/"
          element={
            <Suspense fallback={renderLoader()}>
              <Blockchainservices openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/private-blockchain-services/"
          element={
            <Suspense fallback={renderLoader()}>
              <PrivateStartup openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />

        <Route
          path="/centralized-exchange-development/"
          element={
            <Suspense fallback={renderLoader()}>
              <CenterlizedExchange openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/multichain-development-services/"
          element={
            <Suspense fallback={renderLoader()}>
              <MultiChainBridge openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/tokenization-service/"
          element={
            <Suspense fallback={renderLoader()}>
              <Tokenization openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/p2p-lending-platform-development/"
          element={
            <Suspense fallback={renderLoader()}>
              <BlockchainBasedP2P openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />
        <Route
          path="/dao-service-and-development-company/"
          element={
            <Suspense fallback={renderLoader()}>
              <Main openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />

        {/* end  */}

        <Route
          path="/smart-contract-audit-company/"
          element={
            <Suspense fallback={renderLoader()}>
              <SmartcontractAudit
                openN={openN}
                setOpenN={setOpenN}
                setDisclaimer={setDisclaimer}
                disclaimer={disclaimer}
                terms1={terms1}
              />
            </Suspense>
          }
        />
        <Route
          path="/disclaimer/"
          element={
            <Suspense fallback={renderLoader()}>
              <Disclamer setDisclaimer={setDisclaimer} />
            </Suspense>
          }
        />
        <Route
          path="/contact-us/"
          element={
            <Suspense fallback={renderLoader()}>
              <Helmet>
                <title>
                  Free blockchain consulting service | Contact Us | BlocTech
                  Solutions
                </title>
                <meta
                  name="description"
                  content="You can get initially a free blockchain consulting service, BlocTech solutions always available for organizations to assist them and develop engaging blockchain solutions."
                />
                <meta
                  name="title"
                  content="Free blockchain consulting service | Contact Us | BlocTech Solutions"
                />
                <meta charset="utf-8" />
                <meta
                  name="keywords"
                  content="Blockchain consulting, blockchain service"
                />
                <link rel="canonical" href={window.location.href} />
                <script type="application/ld+json">{structureContact()}</script>
              </Helmet>
              <Contact openN={openN} setOpenN={setOpenN} />
            </Suspense>
          }
        />

        <Route
          exact
          path="/"
          element={
            <>
              <Helmet>
                <title>
                  Blockchain Development Company | BlocTech Solutions
                </title>
                <meta
                  name="description"
                  content="Bloctech solutions is one of the best blockchain development company based on competitive team of Blockchian developers, web engineers and blockchain consultants"
                />
                <meta
                  name="title"
                  content="Blockchain Development Company | BlocTech Solutions"
                />
                <meta charset="utf-8" />
                <meta
                  name="keywords"
                  content="Blockchain development company, blockchain services"
                />
                <link rel="canonical" href={window.location.href} />
                <script type="application/ld+json">{structureData()}</script>
              </Helmet>
              <Box sx={{ background: "#120319" }} width="100%">
                <Suspense fallback={renderLoader()}>
                  <Home openN={openN} setOpenN={setOpenN} />
                  <AboutUs />
                  <Services />
                  <Products />
                  <Testimonial />
                  <OurPatners />
                  <Contact />
                </Suspense>
              </Box>
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

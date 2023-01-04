import React, { Suspense } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from "react-dom";
import LoadingSuspence from "./LoadingSuspence";
import "./animation.css";

// ReactDOM.render(
//   <React.StrictMode>

//   </React.StrictMode>,
//   document.getElementById("root")
// );
const renderLoader = () => <LoadingSuspence />;

const Wraper = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <HelmetProvider>
        <ToastContainer />
        <Suspense fallback={renderLoader()}>
          <App />
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Wraper, rootElement);
} else {
  render(Wraper, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

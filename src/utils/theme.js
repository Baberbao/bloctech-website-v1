import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3B3F6D",
      light: "#4349DC",
    },
    secondary: {
      main: "#373F41",
      light: "#737B7D",
    },
    text: {
      primary: "#9282D3",
      secondary: "#3B3F6D",
      tertiary: "#3B3F6D",
    },
  },
});

theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Mulish",
        backgroundColor: "#120319 !important",
        color: "white",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;

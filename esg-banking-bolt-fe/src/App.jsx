import React from 'react';
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import LandingPage from './routes/landingPage';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4E83FA",
      contrastText: "white",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontFamily: "Inter",
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LandingPage />
    </MuiThemeProvider>
  );
}

export default App;

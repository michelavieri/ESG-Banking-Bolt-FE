import React, { useState } from 'react';
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import LandingPage from './routes/landingPage';
import HomePage from './routes/homePage';

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
  const [showLanding, setShowLanding] = useState(true);

  return (
    <MuiThemeProvider theme={theme}>
      {showLanding &&
        <LandingPage setShowLanding={setShowLanding} />
      }
      {!showLanding &&
        <HomePage />
      }
    </MuiThemeProvider>
  );
}

export default App;

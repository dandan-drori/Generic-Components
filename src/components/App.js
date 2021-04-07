import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles";
import Home from "./Home";
import Nav from "./Nav";
import WelcomePage from "./WelcomePage";

const App = () => {
  const links = [
    { text: "Home", to: "/" },
    { text: "Test", to: "/test" },
    { text: "Test", to: "/test" },
  ];

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav links={links} logo="Hello World" containerBgColor="#61DBFB" />
        <Switch>
          <Route path="/" exact>
            <WelcomePage
              containerHeight="calc(100vh - 6rem)"
              containerPadding="9vh 16vw"
            />
          </Route>
          <Route path="/test" exact>
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;

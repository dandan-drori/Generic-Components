import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles";
import Home from "./Home";
import Nav from "./Nav";
import WelcomePage from "./WelcomePage";
import Footer from "./Footer";

const App = () => {
  const links = [
    { text: "Home", to: "/" },
    { text: "Test", to: "/test" },
  ];

  const footerLinks = [
    { text: "Home", to: "/" },
    { text: "Test", to: "/test" },
    { text: "Privacy Policy", to: "/privacy-policy" },
    { text: "Privacy Policy", to: "/privacy-policy" },
    { text: "Privacy Policy", to: "/privacy-policy" },
    { text: "Privacy Policy", to: "/privacy-policy" },
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
        <Footer
          links={footerLinks}
          logo="Hello World"
          bgColor="#000011"
          color="#eee"
          height="20rem"
        />
      </ThemeProvider>
    </Router>
  );
};

export default App;

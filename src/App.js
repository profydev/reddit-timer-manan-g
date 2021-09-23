import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/home';
import Reddit from './Pages/reddit';
import Header from './Components/Header';
import Footer from './Components/Footer';
import theme from './Components/Theme';
import GlobalStyle from './Components/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/#how-it-works">
          How It Works
        </Route>
        <Route exact path="/#about">
          About
        </Route>
        <Route exact path="/terms">
          terms-privacy
        </Route>
        <Route path="/search">
          <Reddit />
        </Route>
        <Route>404 - Not Found</Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

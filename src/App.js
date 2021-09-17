import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/app">
            <Reddit />
          </Route>
          <Route path="/howitworks">How It Works</Route>
          <Route path="/about">About</Route>
          <Route>404 - Not Found</Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

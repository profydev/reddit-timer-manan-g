import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Reddit from './Pages/reddit';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/app">
            <Reddit />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Checkout from './Checkout'
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path = "/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path = "/login">
            <h1>Login Page</h1>
          </Route>
          <Route path = "/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

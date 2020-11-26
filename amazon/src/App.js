import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';

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
            <Header />
            <Login />
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

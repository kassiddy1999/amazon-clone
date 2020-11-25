import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
<<<<<<< HEAD
import Checkout from './Checkout'
=======
<<<<<<< HEAD
import Checkout from './Checkout'
=======
>>>>>>> main
>>>>>>> main
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path = "/checkout">
            <Header />
<<<<<<< HEAD
            <Checkout />
=======
<<<<<<< HEAD
            <Checkout />
=======
            <h1>checkout</h1>
>>>>>>> main
>>>>>>> main
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

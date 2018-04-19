
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//
const Main = () => (
  <Router>
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Handy Neighbors</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>
      </nav>
      <Route exact path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    
    </div>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('route'));


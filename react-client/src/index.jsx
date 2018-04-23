
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

//


const Main = () => (
  
  <Router >
  <HashRouter>
    <div >
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand " href="#" style={{color:'#E9AB17'}}>Handy Neighbors</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    
    </div>
    </HashRouter>
  </Router>
  
);

ReactDOM.render(<Main />, document.getElementById('route'));


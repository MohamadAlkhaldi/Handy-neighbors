
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
      <ul>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
       
      </ul>

      <hr />

      <Route exact path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    
    </div>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('route'));


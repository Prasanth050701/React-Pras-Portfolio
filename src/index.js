import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch, } from "react-router-dom";
import Home from './Home';
import Project from './Project';
import Youtube from './Youtube';

const Routing =(
  
  <Router>
     <div>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/project' component={Project} />
         <Route exact path='/youtube' component={Youtube} />
       </Switch>
     </div> 
  </Router>

);

  ReactDOM.render(Routing,document.getElementById("root"));

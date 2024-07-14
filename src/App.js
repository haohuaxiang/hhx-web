// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import React from 'react';
import Login from './Login';
import Logout from './Logout';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default App;

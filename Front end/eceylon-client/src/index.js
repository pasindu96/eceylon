import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Homepage from './components/homepage/Homepage';

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/homepage" exact component={Homepage} />
          
        </Switch>
      </div>   
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

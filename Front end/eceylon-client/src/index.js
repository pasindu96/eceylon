import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import App from './App';
import * as serviceWorker from './serviceWorker';
import SignUp from './component/SignUp';
//import Login from './component/Login';
import Login from './component/login/Login';
import Signin from './component/signin/Signin';



import Test from './component/Test';
ReactDOM.render(
  <React.StrictMode>
    <Router>
              <div className="col-md-6">
                  <Switch>
                      <Route path="/signup" exact component={SignUp} />
                      <Route path="/login" exact component={Login} />
                      <Route path="/signin" exact component={Signin}/>
                      
                      
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

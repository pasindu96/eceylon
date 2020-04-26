import React, { Component } from 'react';
/*import PropTypes from 'prop-types';
import { connect } from "react-redux";*/
//import { loginUser } from "../actions/authActions.js";
import './Login.css';
//import classnames from 'classnames';

class Login extends Component {
    constructor(){
        super();
    
    }



    render(){

    

        return(

            <div className="content">
                <img src="/images/logo.png" className="logo-connect" alt="logo"/>
                <br />
                <b className="connect-welcome">Welcome Back</b>
                <br />
                <p className="connect-text">Stay Logged in, Stay Connect with your Uni - Mates</p>
                <br />
                <form  >
                    <div className="input">
                            <input 
                                placeholder="Email"
                                
                                id="email"
                                type="email"
                            />
                    </div>
                    
                    <br />
                    <div className="input">
                            <input 
                                type="password"
                                placeholder="Password"
                               
                                id="password"
                            />
                    </div>
                    
                    <br />
                    <button type="submit" className="btn btn-primary">Connect</button>
                </form>

                <br />
                <br />
                <br />
                <a href="/" className="f-pw">Forgot Password?</a>
                <p>Doesn't have an account? <a href="/register" className="join-now-text">Join Now</a></p>
            </div>
            
        
        )
    }
}


export default Login;
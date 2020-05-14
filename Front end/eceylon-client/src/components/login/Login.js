import React,{Component} from 'react';
import './login.css';
import axios from "axios";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        };
    }
    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }
    

    onSubmit = e => {
        e.preventDefault();
        const user = {
            email : this.state.email,
            password : this.state.password
        };
        console.log(user);
        axios.post(`http://localhost:8080/api/eceylon/login`, { email:user.email,password:user.password})
        .then(res => {
          console.log(res);
          console.log(res.data);
          if(res.data=== true)
            this.props.history.push("/homepage");
            else{
                alert('Invalid Username or Password !')
                window.location.reload(true);
            }
        })
    }
    render(){

        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">ECEYLON.COM <br/>Sign In</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <div className="form-label-group">
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email address"  onChange={this.onChange}
                                             value={this.state.email}required/>
                                        <label htmlFor= "email"> Email address</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange}
                                            value={this.state.password} required/>
                                        <label htmlFor= "password">Password</label>
                                    </div>
                                    
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    <br></br>
                                    <a href="/signup" className="link"> Don't have an account? Sign Up</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
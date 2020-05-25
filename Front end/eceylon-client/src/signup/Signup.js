import React,{Component} from 'react';
import './signup.css';
import axios from "axios";

class Signup extends Component{

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            firstname:"",
            lastname:"",
            mobile:"",
            address1:"",
            address2:"",
            address3:"",
            position:"buyer",
        };
    }
    

    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }

    handleOptionChange=e => {
        this.setState({
          position: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const user = {
            email : this.state.email,
            password : this.state.password,
            name:this.state.firstname+" "+this.state.lastname,
            mobile:this.state.mobile,
            address:this.state.address1+", "+this.state.address2+", "+this.state.address3,
            position:this.state.position
        };
        console.log(user);
        axios.post(`http://localhost:8080/api/eceylon/signin`, { 
            email:user.email,
            password:user.password,
            fullname:user.name,
            mobile:user.mobile,
            address:user.address,
            type:user.position
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.data=== true)
                this.props.history.push("/login");
            else{
                alert('Error occured... !')
                window.location.reload(true);
            }
        })
    }

    render(){

        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">ECEYLON.COM <br/>Signup</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="firstname" name="firstname" className="form-control" placeholder="First name" onChange={this.onChange}
                                                        value={this.state.firstname} required/>
                                                    <label htmlFor= "firstname">First Name</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Last name" onChange={this.onChange}
                                                        value={this.state.lastname} required/>
                                                    <label htmlFor= "lastname">Last Name</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="email" id="email" name="email" className="form-control" placeholder="Email address"  onChange={this.onChange}
                                                        value={this.state.email}required/>
                                                    <label htmlFor= "email"> Email address</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="mobile" name="mobile" className="form-control" placeholder="Mobile number" onChange={this.onChange}
                                                        value={this.state.mobile} required/>
                                                    <label htmlFor= "mobile">Mobile Number</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="address1" name="address1" className="form-control" placeholder="Address Line 1" onChange={this.onChange}
                                                        value={this.state.address1} required/>
                                                    <label htmlFor= "address1">Address Line 1</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="address2" name="address2" className="form-control" placeholder="Address Line 2" onChange={this.onChange}
                                                        value={this.state.address2} required/>
                                                    <label htmlFor= "address2">Address Line 2</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                            <div className="form-label-group">
                                                <input type="text" id="address3" name="address3" className="form-control" placeholder="Address Line 3" onChange={this.onChange}
                                                        value={this.state.address3} required/>
                                                    <label htmlFor= "address3">Address Line 3</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <label className="form-check-label" htmlFor="inlineRadio1">User Type</label>
                                            </div>

                                            <div className="col-sm">
                                                <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="buyer"onChange={this.handleOptionChange} />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Buyer</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="seller" onChange={this.handleOptionChange} />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">Seller</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>

                                    <div className="form-label-group">
                                        <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange}
                                            value={this.state.password} required/>
                                        <label htmlFor= "password">Password</label>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="true"/>
                                                <label className="form-check-label" htmlFor="inlineCheckbox1"> By creating an account, you agree to the ECEYLON.LK Agreement and Privacy Policy  </label>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    <br></br>
                                    <a href="/login" className="link">Already have an account? Sign in..</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signup;
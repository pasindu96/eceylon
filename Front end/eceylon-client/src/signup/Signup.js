import React,{Component} from 'react';
import './signup.css';
import axios from "axios";
import PopUp from './PopUp';

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
            checked:true,
            popup:"false",
            errors:{
                email:'',
                firstname:'',
                lastname:'',
                mobile:''
            }
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

    handleCheck=e=>{ 
        this.setState({
            checked: !this.state.checked
        });
      }

    togglePop = () => {
        this.setState({
            popup: !this.state.popup
        });
    };


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

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
            case 'firstname': 
                errors.firstname = 
                value.length < 4
                    ? 'First Name must be 4 characters long!'
                    : '';
                break;
            case 'lastname': 
                errors.lastname = 
                value.length < 4
                    ? 'Last Name must be 4 characters long!'
                    : '';
                break;
                case 'mobile': 
                errors.mobile = 
                value.length < 10 || value.length>10
                    ? 'Mobile must be 10 numbers long!'
                    : '';
                break;
            default:
                break;
        }
        
        this.setState({errors, [name]: value}, ()=> {
            //console.log(errors.firstname)
        })
    }
    
      

    

    render(){
        const checked=this.state.checked;

        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">ECEYLON.LK <br/>Signup</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="firstname" name="firstname" className="form-control" placeholder="First name" onChange={this.onChange}
                                                        value={this.state.firstname} onChange={this.handleChange} required/>
                                                    <label htmlFor= "firstname">First Name</label>
                                                    <span id="warn">{this.state.errors.firstname}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Last name" onChange={this.onChange}
                                                        value={this.state.lastname}  onChange={this.handleChange} required/>
                                                    <label htmlFor= "lastname">Last Name</label>
                                                    <span id="warn">{this.state.errors.lastname}</span>
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
                                                        value={this.state.mobile}  onChange={this.handleChange} required/>
                                                    <label htmlFor= "mobile">Mobile Number</label>
                                                    <span id="warn">{this.state.errors.mobile}</span>
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
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="buyer" onChange={this.handleOptionChange} />
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
                                                {/* handleCheck={this.handleCheck()} */}
                                                <input className="form-check-input" type="checkbox" onChange={this.handleCheck}/>
                                                {/* {this.togglePop} onClick={this.togglePop} */}
                                                <label className="form-check-label" htmlFor="inlineCheckbox1"> By creating an account, you agree to the ECEYLON.LK<a id="policy" href="/policy"> Agreement and Privacy Policy  </a></label>
                                                {this.state.popup ? <PopUp toggle={this.togglePop} /> : null}    
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* disabled={isEnabled} */}
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" id="submitbutton"type="submit" disabled={checked} >Sign in</button>
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
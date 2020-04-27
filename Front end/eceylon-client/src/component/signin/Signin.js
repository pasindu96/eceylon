import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { FormControl,FormLabel } from '@material-ui/core';
import Copyright from '../Copyright';
import './signin.css';
import logo from './com.jpg';
import axios from "axios";

class Signin extends Component{
    
    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            firstname:"",
            lastName:"",
            mobile:"",
            address:"",
            position:""
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
            name:this.state.firstname+" "+this.state.lastName,
            mobile:this.state.mobile,
            address:this.state.address,
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
        })
    }

    render(){
        
        
        return(
            <div className="App" style={{backgroundImage: `url(${logo})` }}> 
                <Container component="main" maxWidth="xs" >
                
                    <CssBaseline />
                
                    <form noValidate onSubmit={this.onSubmit}>
                        
                        <div className = "section">
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstname"
                                        label="First Name"
                                        name="firstname"
                                        autoComplete="fname"
                                        onChange={this.onChange}
                                        value={this.state.firstname}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        onChange={this.onChange}
                                        value={this.state.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="mobile"
                                        label="Mobile Number"
                                        name="mobile"
                                        autoComplete="mobile"
                                        onChange={this.onChange}
                                        value={this.state.mobile}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        autoComplete="address"
                                        onChange={this.onChange}
                                        value={this.state.address}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                    />
                                    </Grid>
                            
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend"><p>User Type</p></FormLabel>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="buyer">
                                    <FormControlLabel
                                        value="buyer"
                                        control={<Radio color="primary" />}
                                        label="Buyer" 
                                        onChange={this.handleOptionChange} 
                                         
                                    />
                                    <FormControlLabel
                                        value="seller"
                                        control={<Radio color="primary" />}
                                        label="Seller"
                                        onChange={this.handleOptionChange} 
                                        
                                    />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                                </Grid>
                            </Grid>

                            <div>
                            <br></br>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="btn btn-primary"
                            >
                                Sign Up
                            </Button>
                            <div>
                            <br></br>
                            </div>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                            <div>
                                <br></br>
                            </div>
                            <React.StrictMode> <Copyright/> </React.StrictMode>
                        </div>
                    </form>
                </Container>
                
            </div>

        );
    }
}
export default Signin;
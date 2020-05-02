import React,{Component} from 'react';
import './login.css';
import logo from '../com.jpg';
/*import {Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';*/
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
/*import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';*/
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright';

import axios from "axios";


class Login extends Component{
    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            errors:{}
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
          if(res.data===    true)
            this.props.history.push("/main");
            else{
                alert('Invalid Username or Password !')
                window.location.reload(true);
            }
        })
    }
    /*
    handleChange=(event)=>{
        event.preventDefault();
        const{name,value}=event.target;
        let errors=this.state.errors;
        switch(name){
            case 'email':
                errors.email=value.length<5?'Invalid email':'';
                break;
            case 'password':
                errors.password=value.length<8?'Invalid Password':'';
                break;
        }
        this.setState({errors,[name]:value});
    }
    */
    


    
    render(){
        /*const useStyles = makeStyles((theme) => ({
            paper: {
              marginTop: theme.spacing(8),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            avatar: {
              margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main,
            },
            form: {
              width: '100%',
              marginTop: theme.spacing(1),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
            },
          }));*/

        const { email, password } = this.state;
        const isEnabled = email.length > 0 && password.length > 0;

        
        return(
            <div className="App" style={{backgroundImage: `url(${logo})` }}>
                <br></br>
                <h1 class="login-header"><b>User Login</b></h1>
                <Container component="main" maxWidth="xs">
                    <br></br>
                    
                    
                    <CssBaseline />
                    
                    <form  noValidate onSubmit={this.onSubmit}>
                        
                        <div className = "section">
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth

                            onChange={this.onChange}
                            value={this.state.email}

                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            />
                            
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"

                            onChange={this.onChange}
                            value={this.state.password}

                            autoComplete="current-password"
                            />
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            />
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="btn btn-primary"
                            disabled={!isEnabled}
                            >
                            Login
                            </Button>
                        <div>
                            <br></br>
                        </div>
                        <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="signin" variant="body2">
                            {"Don't have an account? Sign Up"}
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
        )
    }
}
export default Login;
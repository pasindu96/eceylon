import React,{Component} from 'react';
import axios from 'axios';
import NavBar from '../homepage/NavBar';

class Profile extends Component{

    constructor(){
        super();
        this.state = {
            email : "",
            fullname:"",
            mobile:"",
            address:"",
            currentpassword:"",
            newpassword:"",
            errors:{
                email:'',
                firstname:'',
                lastname:'',
                mobile:'',
                address:'',
                currentpassword:'',
                newpassword:'',
                orders:[],
                ord:[]
            }
        };
    }

    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }
    handleCheck=e=>{ 
        this.setState({
            checked: !this.state.checked
        });
      }

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
            case 'fullname': 
                errors.firstname = 
                value.length < 4
                    ? 'First Name must be 4 characters long!'
                    : '';
                break;
                case 'mobile': 
                errors.mobile = 
                value.length < 10 || value.length>10 || isNaN(value)
                    ? 'Mobile number must be 10 numbers long!'
                    : '';
                break;
                case 'address': 
                errors.address = 
                value.length < 10
                    ? 'Address should contains at least 10 charactors'
                    : '';
                break;
                case 'newpassword':
                    errors.newpassword=
                    value.length < 4
                    ? 'New Password Should contain at least 4 charactors !'
                    :'';
                    break;
            default:
                break;
        }
        
        this.setState({errors, [name]: value}, ()=> {
            //console.log(errors.firstname)
        })
    }

    changePassword = e=>{
        e.preventDefault();
        const changePass= {email:this.state.email,currentPassword:this.state.currentpassword,newPassword:this.state.newpassword};
        axios.post(`http://localhost:8080/api/eceylon/user/update/password`,changePass)
        .then( res => {
            alert(res.data);
        })
        setTimeout("location.href = 'profile'",500);
    }

    onSubmit = e => {

        const user= {email:this.state.email,fullname:this.state.fullname,mobile:this.state.mobile,address:this.state.address};
        e.preventDefault();
        axios.post(`http://localhost:8080/api/eceylon/user/update`,user)
        .then(res => {
            if(res.data===true){
                alert("User details updated successfully....");
            }else{
                alert("Error occured....");
            }
        })
        setTimeout("location.href = 'profile'",500);
    }

    async componentDidMount(){
        if(localStorage.getItem('email')==="logout")
            window.location.href="/";
            
        axios.get(`http://localhost:8080/api/eceylon/user/id=`+localStorage.getItem('email').toString())
        .then(res => {
            this.setState({
                email : res.data.email,
                fullname:res.data.fullname,
                mobile:res.data.mobile,
                address:res.data.address
            })
        })

        axios.get(`http://localhost:8080/api/eceylon/order/buyer/email=`+localStorage.getItem('email').toString())
        .then(res => {
            this.state.ord=res.data;
            this.setState({
                    orders : res.data,
                    // ord:res.data
            })
        })
    }

    renderTableData() {
        console.log(this.state.ord)
        if(this.state.orders !== undefined){
            return this.state.orders.map((order, index) => {
            const { orderid,  orderdate, amount } = order 
            return (
                    <tr key={orderid}>
                        {/* <td onClick={() => this.onClick(productID, description, displayName, price,delivery_area,qty_on_hand,categoryid)}>{productID}</td> */}
                        <td>{orderid}</td>
                        <td>{orderdate}</td>
                        <td>{amount}</td>
                        {/* onClick={() => this.onClick(orderID)} */}
                        <td><button >View Orderdetails</button></td>
                    </tr>
                )
            })
        }
        else{
            // alert("bye");
        }
        
    }


    render(){
        return(
            <div>
                <NavBar/>

                <div className="container" >
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <p style={{textAlign:"center", fontsize:"200%"}}>Update user profile</p>
                                    <form className="form-signin"  onSubmit={this.onSubmit} >
                                    
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-label-group">
                                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email address"  onChange={this.onChange}
                                                            value={this.state.email} disabled/>
                                                        <label htmlFor= "email"> Email address</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-label-group">
                                                        <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Last name" onChange={this.onChange}
                                                            value={this.state.fullname}  onChange={this.handleChange} maxLength="30" required/>
                                                        <label htmlFor= "fullname">Name</label>
                                                        <span id="warn">{this.state.errors.fullname}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-label-group">
                                                        <input className="number" id="mobile" name="mobile"  className="form-control" placeholder="Mobile number" onChange={this.onChange}
                                                            value={this.state.mobile}  onChange={this.handleChange} maxLength="10" required/>
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
                                                    <input type="text" id="address" name="address" className="form-control" placeholder="Address" onChange={this.onChange}
                                                            value={this.state.address} onChange={this.handleChange} required/>
                                                        <label htmlFor= "address">Address</label>
                                                        <span id="warn">{this.state.errors.address}</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>     
                                        <br></br>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" id="submitbutton"type="submit">Update information</button>
                                        <br></br>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <p style={{textAlign:"center", fontsize:"200%"}}>Change Password</p>
                                    <div className="container">
                                        <form className="form-signin"  onSubmit={this.changePassword} >

                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-label-group">
                                                        <input type="password" id="currentpassword" name="currentpassword" className="form-control" placeholder="Current Password" onChange={this.onChange}
                                                            value={this.state.currentpassword}  onChange={this.handleChange} maxLength="30" required/>
                                                        <label htmlFor= "currentpassword">Current Password</label>
                                                        <span id="warn">{this.state.errors.currentpassword}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-label-group">
                                                        <input type="password" id="newpassword" name="newpassword" className="form-control" placeholder="New Password" onChange={this.onChange}
                                                            value={this.state.newpassword}  onChange={this.handleChange} maxLength="30" required/>
                                                        <label htmlFor= "newpassword">New Password</label>
                                                        <span id="warn">{this.state.errors.newpassword}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase" id="submitbutton"type="submit">Update Password</button>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <p style={{textAlign:"center", fontsize:"200%"}}>Order History</p>
                            <div className="container" >
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                <div className="table-responsive">
                                    <table id='orders' className="table" style={{border:'border: 3px solid #ddd'}} >
                                        <tbody>
                                            <tr style={{color:"green"}}>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">Order ID</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Order Date and Time</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Amount</div>
                                                </th><th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Order details</div>
                                                </th>
                                            </tr>
                                            {this.renderTableData()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;
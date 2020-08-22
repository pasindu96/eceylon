import React,{Component} from 'react';
import './dashboard.css';
import axios from 'axios';


class ProductDashboard extends Component{
    constructor(){
        super();
        this.state={
            category:'',
            seller:'',
            product:''
        }
    }
    
    async componentDidMount(){
        if(localStorage.getItem('email')==="logout")
            window.location.href="/";
        
        axios.get('http://localhost:8080/api/eceylon/search/category')
        .then(res=>{
            this.setState({
                category:res.data
            })
        })
        axios.get('http://localhost:8080/api/eceylon/orderdetail/report')
        .then(res=>{
            this.setState({
                seller:res.data.name,
                product:res.data.product
            })
        })
    }

    onSubmit = e => {
        e.preventDefault();
        // axios.get('http://localhost:8080/api/eceylon/order/income/period='+period)
        // .then(res=>{
        //     this.setState({
        //         orders:res.data.orders,
        //         income:res.data.income,
        //         duration:res.data.timePeriod
        //         //data is here
        //     })
        // })
    }
    logOut(event){
        localStorage.setItem('email','logout');
    }

    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }
    render(){

        return(
            
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Admin Dashboard</h3>
                    </div>
                    <ul className="list-unstyled components">
                        {/* <li>
                            <a href="#" >Approve Sellers</a>
                        </li> */}
                        <li>
                            <a href="/dashboard">View Sales Report</a>
                        </li>
                        {/* <li>
                            <a href="#">Manage Category</a>
                        </li>
                        <li>
                            <a href="#">Manage Prodcuts</a>
                        </li> */}
                        <li>
                            <a href="/productdashboard">Product Reports</a>
                        </li>
                        <li>
                            <a href="/homepage">Homepage</a>
                        </li>
                        <li>
                            <a href="/" onClick={(e) => {this.logOut(e)}}>Log out</a>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    <div className="container" >
                        <div className="row">
                            <div className="col-sm-9 col-md-7 mx-auto">
                                <div className="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">ECEYLON.LK <br/>Product Report</h5>
                                            <form className="form-signin" onSubmit={this.onSubmit}>
                                                <div className="form-label-group">
                                                    <input type="text" id="category" name="category" className="form-control" 
                                                        value={this.state.category} disabled/>
                                                        <label htmlFor= "category">Most Searched Category</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="seller" name="seller" className="form-control" 
                                                        value={this.state.seller} disabled/>
                                                        <label htmlFor= "seller">Most Popular Seller</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="product" name="product" className="form-control" 
                                                        value={this.state.product} disabled/>
                                                        <label htmlFor= "product">Most sold product</label>
                                                </div>
                                            </form>
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
export default ProductDashboard;
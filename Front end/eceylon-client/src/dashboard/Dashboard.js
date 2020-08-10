import React,{Component} from 'react';
import './dashboard.css';
import axios from 'axios';


class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            duration:'',
            orders:'',
            income:'',
            time_period:'daily'
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const period=this.state.time_period;
        axios.get('http://localhost:8080/api/eceylon/order/income/period='+period)
        .then(res=>{
            this.setState({
                orders:res.data.orders,
                income:res.data.income,
                duration:res.data.timePeriod
                //data is here
            })
        })
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
                            <a href="/login">Log out</a>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    <div className="container" >
                        <div className="row">
                            <div className="col-sm-9 col-md-7 mx-auto">
                                <div className="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">ECEYLON.LK <br/>Sales Report</h5>
                                            <form className="form-signin" onSubmit={this.onSubmit}>
                                                <div className="form-label-group">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <label >Select Time Period</label>
                                                        </div>
                                                        <div className="col-3">
                                                        {/* value={this.state.value} onChange={this.onChange} */}
                                                            <select id="time_period" name="time_period" value={this.state.value} onChange={this.onChange}>            
                                                                <option value="daily">Daily</option>
                                                                <option value="weekly">Weekly</option>
                                                                <option value="monthly">Monthly</option>
                                                                <option value="yearly">Yearly</option>
                                                            </select> 
                                                        </div>
                                                    </div>    
                                                </div>

                                                <button className="btn btn-lg btn-secondary btn-block text-uppercase" type="submit">Show reports</button>
                                                <br/><br/>
                                                {/* {this.state.sub_category} */}
                                                <div className="form-label-group">
                                                    <input type="text" id="duration" name="duration" className="form-control" 
                                                        value={this.state.duration} disabled/>
                                                        <label htmlFor= "duration">Time Period</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="orders" name="orders" className="form-control" 
                                                        value={this.state.orders} disabled/>
                                                        <label htmlFor= "orders">Number of orders</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="income" name="income" className="form-control" 
                                                        value={this.state.income} disabled/>
                                                        <label htmlFor= "income">Income [LKR]</label>
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
export default Dashboard;
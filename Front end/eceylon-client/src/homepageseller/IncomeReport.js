import React,{Component} from 'react';
import NavBar from '../homepage/NavBar';

class IncomeReport extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h3>Seller Dashboard</h3>
                            </div>
                            <ul className="list-unstyled components">
                                <li>
                                    <a href="/addproducts">Manage Products</a>
                                </li>
                                <li>
                                    <a href="/vieworder">View Orders</a>
                                </li>
                                <li>
                                    <a href="/viewproduct">View Products</a>
                                </li>
                                <li>
                                    <a href="/report">Income Reports</a>
                                </li>
                                <li>
                                    <a href="/login">Log out</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-10">
                        <NavBar/>
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
                                                            <select id="time_period" name="time_period" >            
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
                                                        value="2020-06-20 to 2020-06-27" disabled/>
                                                        <label htmlFor= "duration">Time Period</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="orders" name="orders" className="form-control" 
                                                        value="12" disabled/>
                                                        <label htmlFor= "orders">Number of orders</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="income" name="income" className="form-control" 
                                                        value="10600.00/=" disabled/>
                                                        <label htmlFor= "income">Income</label>
                                                </div>
                                                {/*
                                                <div className="form-label-group">
                                                    <input type="file" id="product_image1" name="product_image1" className="form-control" onChange={this.onChange}
                                                        value={this.state.product_image1} required/>
                                                        <label htmlFor= "product_image1">Product Image 1</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="file" id="product_image2" name="product_image2" className="form-control" onChange={this.onChange}
                                                        value={this.state.product_image2} required/>
                                                        <label htmlFor= "product_image2">Product Image 2</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="file" id="product_image3" name="product_image3" className="form-control" onChange={this.onChange}
                                                        value={this.state.product_image3} required/>
                                                        <label htmlFor= "product_image3">Product Image 3</label>
                                                </div> */}
                                            </form>
                                        </div>
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

export default  IncomeReport;

import React,{Component} from 'react';
import NavBar from '../homepage/NavBar';
import axios from "axios";
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class IncomeReport extends Component{

    constructor(){
        super();
        this.state={
            p:"",
            displayname:"",
            products:[],
            dataPoints:[],
            duration:'',
            orders:'',
            income:'',
            time_period:'daily'
        };
    }
    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }
    onClick =e=>{
        axios.get(`http://localhost:8080/api/eceylon/order/product/productid=`+this.state.p)
        .then(res => {
            this.setState({
                dataPoints : res.data
            })
        })
    }

    logOut(event){
        localStorage.setItem('email','logout');
    }

    async componentDidMount(){
        if(localStorage.getItem('email')==="logout")
            window.location.href="/";
        
        axios.get(`http://localhost:8080/api/eceylon/products/seller/email=`+localStorage.getItem('email').toString())
        .then(res => {
            this.setState({
                products : res.data
            })
        })
    }

    loadData(){
        // return(
        //     <option value="1">Hello</option>
        // )
        return this.state.products.map((product, index) => {
            const { productID ,displayName } = product 
            return (
                <option value={productID} key={productID}>{displayName}</option>
            )
         })
    }

    onSubmit = e => {
        e.preventDefault();
        const period=this.state.time_period;
        axios.get('http://localhost:8080/api/eceylon/order/seller/income/email='+localStorage.getItem('email').toString()+'/period='+period)
        .then(res=>{
            this.setState({
                orders:res.data.orders,
                income:res.data.income,
                duration:res.data.timePeriod
                //data is here
            })
        })
    }
    // onDropdownSelected(e) {
    //     // console.log("THE VAL", e.target.value);


    //     alert(this.state.p);
        // axios.get(`http://localhost:8080/api/eceylon/order/product/productid=`+'1')
        // .then(res => {
        //     this.setState({
        //         dataPoints : res.data
        //     })
        // })
    // }
   
//    onDropdownSelected(e) {
//        console.log("THE VAL", e.target.value);
//    }

    render(){
        const options = {
			title: {
				text: "Orders Distribution"
            },
            axisY: {
                title: "Number of orders"
            },
            axisX: {
                title: "Month"
            },
			animationEnabled: true,
			data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints:this.state.dataPoints
                }
			]
		}
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
                                    <a href="/" onClick={(e) => {this.logOut(e)}}>Log out</a>
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
                            <div className="row">
                                <div className="col-sm-12 col-md-10 mx-auto">
                                    <div className="card card-signin my-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">ECEYLON.LK <br/>Product Sales graph</h5>
                                            <div className="col-3">
                                                <label htmlFor= "p">Select Product   </label>
                                            </div>
                                            <div className="col-3">
                                                <select id="p" name="p" value={this.state.value}  onChange={this.onChange}>
                                                    {this.loadData()}
                                                    {/* {this.state.productid.map((team) => <option key={team.value} value={team.value}>{team.value}</option>)} */}
                                                </select>
                                            </div>
                                            <div className="col-3">
                                                <button onClick={this.onClick}>Get graph</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <CanvasJSChart options = {options} />
                            </div>
                        </div> 
                    </div>
                </div>    
            </div> 
        )
    }
}

export default  IncomeReport;

import React,{Component} from 'react';
import './vieworder.css';
import axios from 'axios';

class ViewOrder extends Component{

    constructor(){
        super();
        this.state={
            orders:[],
            user:[]
        };
    }
    async componentDidMount(){
        if(localStorage.getItem('email')==="logout")
            window.location.href="/";

        axios.get(`http://localhost:8080/api/eceylon/orders/email=`+localStorage.getItem('email').toString())
        .then(res => {
            console.log(res.data);
            this.setState({
                    orders : res.data
                })
        })

    }
    logOut(event){
        localStorage.setItem('email','logout');
    }
    renderTableData() {
        return this.state.orders.map((order, index) => {
           const { orderID, quantity, amount, date,productID,displayName,email, name, address,mobile } = order 
           return (
                <tr key={orderID}>
                    {/* <td onClick={() => this.onClick(productID, description, displayName, price,delivery_area,qty_on_hand,categoryid)}>{productID}</td> */}
                    <td>{orderID}</td>
                    <td>{displayName}</td>
                    <td>{quantity}</td>
                    <td>{amount}</td>
                    <td>{date}</td>
                    <td>{email}</td>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{mobile}</td>
                    <td><button onClick={() => this.onClick(orderID)}>Confirm Order</button></td>
                </tr>
            )
        })
     }

     onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }

    onClick(oid){
        axios.post('http://localhost:8080/api/eceylon/order/confirm',{orderid:oid})
        .then(res => {
            if(res.data ===true){
                alert("Order confirmed...")
                window.location.reload(true);
            }else{
                alert("Error occured...");
                window.location.reload(true);
            }

        })
        // alert(orderid);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="container text-white py-5 text-center">
                    <h1 className="display-4">Current orders</h1>
                </div>
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
                        <div className="container" >
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                <div className="table-responsive">
                                    <table id='orders' className="table" style={{border:'border: 3px solid #ddd'}} >
                                        <tbody>
                                            <tr>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">Order ID</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">Display Name</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Amount</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Date</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Email</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Name</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Address</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Mobile</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Confirm Order</div>
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
        )
    }
}
export default ViewOrder;
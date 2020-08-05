import React,{Component} from 'react';
import './productcart.css';
import NavBar from '../homepage/NavBar';
import axios from 'axios';

class ProductCart extends Component{
    constructor(){
        super();
        this.state = {
              products:[],
              orderSubTotal:0,
              total:0,
              errors:{
                card:'',
                cvv:'',
            },
            credit:'',
            cvv:''
        };
    }
    

    async componentDidMount(){
        
        // const user = {
        //     pid : []
        // };

        axios.get(`http://localhost:8080/api/eceylon/cart/email=`+localStorage.getItem('email').toString())
        .then(res => {
            this.setState({
                    products : res.data
            })
            // console.log(tot);
            var tot=0;
            for(var i=0;i<this.state.products.length;i++){
                tot+=this.state.products[i].orderQty*this.state.products[i].unitPrice;
            }
            this.setState({
                total : "Rs "+tot ,
                tot:tot,
                orderSubTotal:"Rs "+tot
        })  
            // console.log(res.data);
        })
    }

    renderTableData() {
        return this.state.products.map((product, index) => {
           const { cartID, productID, displayName, orderQty,unitPrice } = product 
           return (
                <tr key={cartID}>
                    {/* <td onClick={() => this.onClick(cartID, productID, displayName, orderQty,unitPrice)}>{productID}</td> */}
                    <td>{productID}</td>
                    <td>{displayName}</td>
                    <td>{unitPrice}</td>
                    <td>{orderQty}</td>
                    <td><button>Remove</button></td>
                </tr>
           )
        })
     
    }

    handleChange = e => {
        e.preventDefault();

        const { id, value } = e.target;
        let errors = this.state.errors;

        switch (id) {
            case 'credit': 
                errors.credit = 
                (value.length !== 16)
                    ? 'Credit card must be 16 digits long !'
                    : '';
                break;
            case 'cvv': 
                errors.cvv = 
                (value.length === 3)
                    ? 'CVV must be 3 characters long !'
                    : '';
                break;
            default:
                break;
        }
        
        this.setState({errors, [id]: value}, ()=> {
            //console.log(errors.firstname)
        })
    }

    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }

    onClick(){
        const product = {
            user : {email:localStorage.getItem('email').toString()},
            amount:2000
        };
        alert(this.products);
        axios.post(`http://localhost:8080/api/eceylon/order`,product)
        .then(res => {
            
        })
            //alert("Hiii");
     }

     onSubmit = e => {
        e.preventDefault();
        const product = {
            user : {email:localStorage.getItem('email').toString()},
            amount:this.state.tot,
            status:"Not confirmed"
        };
        const oid=3;
        axios.post(`http://localhost:8080/api/eceylon/order`,product)
        .then(res => {
            oid=res.data.orderid;
            console.log(res.data.orderid);
            console.log(res.data.orderid);
        })
        setTimeout("2000");

        for(var i=0;i<this.state.products.length;i++){
            // axios.post(`http://localhost:8080/api/eceylon/orderdetail`,{order:{orderID:1},product:{productID:this.state.products[i].productID},quantity:this.state.products[i].orderQty})
            axios.post(`http://localhost:8080/api/eceylon/orderdetail`,{orderid:oid,productid:this.state.products[i].productID,quantity:this.state.products[i].orderQty,cartid:this.state.products[i].cartID})
            .then(res => {
                console.log(res);
            })
        }

        setTimeout("location.href = 'cart'",2000);
        // window.location.reload(true);
    }
    render(){
        return(
            <div>

            <NavBar/>
                <div className="px-4 px-lg-0">
                    <div className="container text-white py-5 text-center">
                        <h1 className="display-4">Product cart</h1>
                    </div>

                    <div className="pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr style={{backgroundColor:'#4CAF50' }}>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">ProductID</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Display name</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Price</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Quantity</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Remove</div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {/* <tr> */}
                                                    {/* <th scope="row" className="border-0">
                                                        <div className="p-2">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU" alt="" width="70" className="img-fluid rounded shadow-sm"/>
                                                        <div className="ml-3 d-inline-block align-middle">
                                                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">Birthday cake 500g</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Food Items</span>
                                                        </div>
                                                        </div>
                                                    </th>
                                                    <td className="border-0 align-middle"><strong>Rs 750.00</strong></td>
                                                    <td className="border-0 align-middle"><strong>1</strong></td>
                                                    <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td> */}
                                                {/* </tr> */}
                                                
                                                {/* <tr style={{backgroundColor:'#4CAF50'}} >
                                                    <td>Product ID</td>
                                                    <td>Display Name</td>
                                                    <td>Order Quantity</td>
                                                    <td>Unit Price</td>
                                                    <td>Remove</td>
                                                </tr> */}
                                                {this.renderTableData()}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                        <div className="p-4">
                                            <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                            <div className="input-group mb-4 border rounded-pill p-2">
                                            <input className="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0"/>
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                                            </div>
                                        </div>
                                </div>

                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Payment Details</div>
                                    <div className="p-4">
                                        <label htmlFor="credit">Credit Card Number</label>
                                        <div className="input-group mb-4 border rounded-pill p-2">
                                        {/* onChange={this.handleChange}  */}
                                            <input className="number" min="0" maxLength="16" id="credit" name="credit" onChange={this.onChange} placeholder="Credit card number"  className="form-control border-0" required/>
                                            <span id="warn">{this.state.errors.card}</span>
                                        </div>
                                        <label htmlFor="cvv">CVV Number</label>
                                        <div className="input-group mb-4 border rounded-pill p-2">
                                        {/* onChange={this.handleChange} */}
                                            <input className="number" min="0" maxLength="3" id="cvv" name="cvv" placeholder="CVV number"  onChange={this.onChange} className="form-control border-0"required/>
                                            <span id="warn">{this.state.errors.cvv}</span>
                                        </div>
                                        {/* <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                        <textarea name="" cols="30" rows="2" className="form-control"></textarea> */}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                    <div className="p-4">

                                        <form onSubmit={this.onSubmit}>
                                            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                            <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom" name="orderSubTotal" onChange={this.onChange}><strong className="text-muted">Order Subtotal </strong><strong>{this.state.orderSubTotal}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>Rs 0.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>Rs 0.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom" name="orderSubTotal" onChange={this.onChange}><strong className="font-weight-bold">Total </strong><strong>{this.state.total}</strong></li>
                                            {/* <li className="d-flex justify-content-between py-3 border-bottom" name="total" ><strong className="text-muted">{this.state.total}</strong>
                                                <h5 className="font-weight-bold">Rs 750.00</h5>
                                            </li> */}
                                            

                                            </ul><button className="btn btn-dark rounded-pill py-2 btn-block" type="submit">Procceed to checkout</button>
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
export default ProductCart;
import React,{Component} from 'react';
import './vieworder.css';
import axios from 'axios';

class Viewproduct extends Component{

    constructor(props) {
        super(props)
        this.state = {
            products:[],
            students: [
              { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
              { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
              { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
              { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
           ],
           productid:"",
           display_name:"",
           quantity:"",
           description:"",
           price:"",
           delivery:"",
           categoryid:""

        }
     }

    async componentDidMount(){
        // const user = {
        //     pid : []
        // };
        axios.get(`http://localhost:8080/api/eceylon/productlist/email=`+localStorage.getItem('email').toString())
        .then(res => {
            this.setState({
                    products : res.data
                })
            // console.log(res.data);
            // console.log(this.state.students);
            // console.log(this.state.products);

            
            // this.setState({
            //     products : res.data
            // })
        })
        // console.log(this.state.products);
    }

    onSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/eceylon/product/update`, 
        { 
            productID:this.state.productid,
            description:this.state.description,
            unitPrice:this.state.price,
            displayName:this.state.display_name,
            delivery_Area:this.state.delivery,
            qty_on_hand:this.state.quantity,
            // category:{categoryID : this.state.categoryid},
            // user:{email:localStorage.getItem('email')} 
        }
        )
        .then(res => {
            if(res.data===true){
                alert("Updated Successfully...")
                window.location.reload(true);
            }else{
                alert("Error occured...");
                window.location.reload(true);
            }
        })
    }

    renderTableData() {
        return this.state.products.map((product, index) => {
           const { productID, description, displayName, price,delivery_area,qty_on_hand,categoryid } = product 
           return (
                <tr key={productID}>
                    <td onClick={() => this.onClick(productID, description, displayName, price,delivery_area,qty_on_hand,categoryid)}>{productID}</td>
                    <td>{displayName}</td>
                    <td>{qty_on_hand}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>{delivery_area}</td>
                    <td>{categoryid}</td>
                </tr>
           )
        })
     }

     onClick(id,desc, dName, pricee,delivery_area,qty_on_hand,catid){
        this.setState({
            productid:id,
            description:desc,
            display_name:dName,
            price:pricee,
            delivery:delivery_area,
            quantity:qty_on_hand,
            categoryid:catid
        });
     }

     onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }

    //  onClick = e => {
    //     // e.preventDefault();
    //     const data=e.productID;
    //     alert(data);
    //  }
    //  renderTableHeader() {
    //     let header = Object.keys(this.state.products[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key.toUpperCase()}</th>
    //     })
    //  }

    render(){
        return(
            <div className="wrapper">
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
                <div id="content">
                    <table id='students' style={{border:'border: 3px solid #ddd'}} >
                        <tbody>
                            {/* <tr>{this.renderTableHeader()}</tr> */}
                            <tr style={{backgroundColor:'#4CAF50'}} >
                                <td>Product ID</td>
                                <td>Display Name</td>
                                <td>Available Quantity</td>
                                <td>Description</td>
                                <td>Price</td>
                                <td>Delivery Area</td>
                                <td>CategoryID</td>
                            </tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    {/*<table id='students' style={{border:'border: 3px solid #ddd'}}>
                        <tbody>
                            <td style={{border:'border: 3px solid #ddd'}}>HI</td>
                            <td style={{border:'border: 3px solid #ddd'}}>HI</td>
                        </tbody>
                    </table> */}
                    <br/>
                    <div className="center" style={{padding: "10px"}}>
                        {/* <form>
                            <label htmlFor="productid">Product ID</label>
                            <input name="productid" type="text"></input>
                        </form> */}
                        <div className="card card-signin my-5" style={{width:"500px",alignContent:"centre"}}>
                            <div className="card-body">
                                <h5 className="card-title text-center">ECEYLON.LK <br/>Edit Product details</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                    <div className="form-label-group">
                                        <input type="text" style={{width:"400px"}} id="productid" name="productid" className="form-control" onChange={this.onChange}
                                         value={this.state.productid}   readOnly/>
                                            <label htmlFor= "productid">PrdouctID</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" style={{width:"400px"}} id="display_name" name="display_name" className="form-control" onChange={this.onChange}
                                         value={this.state.display_name}  required />
                                            <label htmlFor= "display_name">Display Name</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="number" min="0" style={{width:"400px"}} id="quantity" name="quantity" className="form-control"  onChange={this.onChange}
                                         value={this.state.quantity} required   />
                                            <label htmlFor= "quantity">Quantity</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" style={{width:"400px"}} id="description" name="description" className="form-control"  onChange={this.onChange}
                                         value={this.state.description} required  />
                                            <label htmlFor= "description">Description</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="number" min="0" style={{width:"400px"}} step="0.01" id="price" name="price" className="form-control" onChange={this.onChange}
                                        value={this.state.price}  required  />
                                            <label htmlFor= "price">Price</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" style={{width:"400px"}} id="delivery" name="delivery" className="form-control" onChange={this.onChange}
                                        value={this.state.delivery}  required  />
                                            <label htmlFor= "delivery">Delivery Area</label>
                                    </div>
                                        <button className="btn btn-lg btn-secondary btn-block text-uppercase" style={{width:"400px"}} type="submit">Edit product</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Viewproduct;
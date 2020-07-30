import React,{Component} from 'react';
import axios from 'axios';

class AddProduct extends Component{

    constructor(){
        super();
        this.state = {
            display_name : "",
            unit_price : "",
            delivery_area:"",
            category:"1",
            sub_category:"",
            qty_on_hand:"",
            product_image:[],
            product_image1:"",
            product_image2:"",
            product_image3:"",
            description:"",
            email:localStorage.getItem('email').toString()
        };
    }
    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }


    onSubmit = e => {
        e.preventDefault();
        const product = {
            display_name : this.state.display_name,
            unit_price : this.state.unit_price,
            delivery_area:this.state.delivery_area,
            category:this.state.category,
            sub_category:this.state.sub_category,
            product_image:[this.state.product_image1,this.state.product_image2,this.state.product_image3],
            description:this.state.description,
            email:this.state.email,
            qty_on_hand:this.state.qty_on_hand

        };
        console.log(product);
        axios.post(`http://localhost:8080/api/eceylon/product`, 
        { 
            description:product.description,
            unitPrice:product.unit_price,
            displayName:product.display_name,
            deliveryArea:product.delivery_area,
            subCategory:product.sub_category,
            qty_on_hand:product.qty_on_hand,
            category:{categoryID : product.category},
            user:{email:product.email}    
        }
        )
        .then(res => {
        console.log(res);
        console.log(res.data);
        var pid=res.data.productID;
        //   console.log("ID : "+ res.data.productID);
        if(res.data!== ""){
            for(var i=0;i<3;i++){
                
                axios.post(`http://localhost:8080/api/eceylon/image`, 
                { 
                    imageurl:product.product_image[i],
                    product:{productID:pid}   
                    
                }).then(res=>{
                    // console.log(res.data);
                })
                // console.log(pid + " "+ product.product_image[i]);
                
                // .then(res => {
                //     console.log(res);
                //     console.log(res.data);
                //     if(res.data!== ""){
                    
                //     }else{

                //     }
                // })
            }
                // console.log(res.data.fullname+ " : "+res.data.type);
                //this.props.history.push("/homepage");   
                // localStorage.setItem('userID',user.email);   
                alert("Product has been addedd successfully....");
                window.location.reload(true);
            } 
            else{
                alert('Error occured !')
                window.location.reload(true);
            }
        })
        
    }
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
                        <div className="container" >
                            <div className="row">
                                <div className="col-sm-9 col-md-7 mx-auto">
                                    <div className="card card-signin my-5">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">ECEYLON.LK <br/>Add new products</h5>
                                            <form className="form-signin" onSubmit={this.onSubmit}>
                                                <div className="form-label-group">
                                                    <input type="text" id="display_name" name="display_name" className="form-control" placeholder="The displaying name for product" onChange={this.onChange}
                                                        value={this.state.display_name} required/>
                                                        <label htmlFor= "display_name">Display Name</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="description" name="description" className="form-control" placeholder="Product description (Maximum 255 charactors)" onChange={this.onChange}
                                                        value={this.state.description} maxLength="255" required/>
                                                        <label htmlFor= "description">Product Description</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="unit_price" name="unit_price" className="form-control" placeholder="Unit Price" step="0.01" onChange={this.onChange}
                                                        value={this.state.unit_price}required/>
                                                        <label htmlFor= "unit_price">Unit Price</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="number" id="qty_on_hand" name="qty_on_hand" className="form-control" placeholder="Quantity on hand" onChange={this.onChange}
                                                        value={this.state.qty_on_hand}required/>
                                                        <label htmlFor= "qty_on_hand">Quantity On Hand</label>
                                                </div>
                                            
                                                <div className="form-label-group">
                                                    <input type="text" id="delivery_area" name="delivery_area" className="form-control" placeholder="Enter the possible delivery area" onChange={this.onChange}
                                                        value={this.state.delivery_area} required/>
                                                        <label htmlFor= "delivery_area">Delivery Area</label>
                                                </div>
                                                <div className="form-label-group">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <label >Select Category</label>
                                                        </div>
                                                        <div className="col-3">
                                                            <select id="category" name="category" value={this.state.value} onChange={this.onChange}>            
                                                                <option value="1">Food Items</option>
                                                                <option value="2">Jewellery</option>
                                                                <option value="3">Mobile Phones</option>
                                                                <option value="4">Handicrafts</option>
                                                                <option value="5">Paintings</option>
                                                                <option value="6">Masks</option>
                                                                <option value="7">Clothes</option>
                                                                <option value="8">Footwear</option>
                                                                <option value="9">Furnitures</option>
                                                                <option value="10">Electronic Appliances</option>
                                                                <option value="11">Household Items</option>
                                                                <option value="12">Stationaries</option>


                                                            </select> 
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="form-label-group">
                                                    <input type="text" id="sub_category" name="sub_category" className="form-control" placeholder="Enter the subcategory" onChange={this.onChange}
                                                        value={this.state.sub_category} required/>
                                                        <label htmlFor= "sub_category">Sub category</label>
                                                </div>
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
                                                </div>
                                                <button className="btn btn-lg btn-secondary btn-block text-uppercase" type="submit">Add product</button>
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
export default AddProduct;
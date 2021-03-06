import React,{Component} from 'react';
import './description.css';
import NavBar from './NavBar';
import axios from "axios";

class Description extends Component{

    constructor(props){
        super(props);
        this.state = {
            products:{},
            productID:localStorage.getItem('productid').toString() ,
            qty_on_hand:0,
            description:"null",
            displayName:"null",
            unitPrice:"null" ,
            deliveryArea:"null",
            qty:"",
            price: "",
            status:"No"  ,
            useremail:"", 
            t:false,
            img1:"./resources/cake1.jpg",
            img2:"",
            img3:""
        }
    }

    async componentDidMount(){
        if(localStorage.getItem('email')==="logout")
            window.location.href="/";
            
        axios.get(`http://localhost:8080/api/eceylon/product/id=`+this.state.productID)
        .then(res => {
            this.setState({
                products: res.data
            })


            if(res.data!== ""){
                
                // this.state.qty_on_hand=(res.data.qty_on_hand);
                // this.state.unitPrice=(res.data.unitPrice);
                // this.state.displayName=(res.data.displayName);
                // this.state.description=(res.data.description);
                // this.state.deliveryArea=(res.data.delivery_Area)
                console.log(res.data);

                this.setState({
                    qty_on_hand:(res.data.qty_on_hand),
                    // qty:res.data.qty_on_hand,
                    unitPrice:("Rs "+res.data.unitPrice+".00"),
                    price:res.data.unitPrice, 
                    displayName:(res.data.displayName),
                    description:(res.data.description),
                    deliveryArea:(res.data.delivery_Area),
                    useremail:(res.data.user.fullname),
                    t:(res.data.qty_on_hand)===0 ? true : false
                })
                

            }
            this.setState({

                // names.push(res.data[i].displayName);
            })
            
            // this.setState({
            //     products: res.data
            // })
            

            // for(var i=0;i<res.data.length-1;i++){
            //    // console.log(res.data[i]);
            //    this.state.displayName.push(res.data[i].displayName);
            //    this.state.unitPrice.push("SLR " + res.data[i].unitPrice + ".00");
            //    this.state.productID.push(res.data[i].productID);

            //     this.setState({
            //         //names.push(res.data[i].displayName);
            //     })
            // }
            console.log(res.data);
        })

        axios.get(`http://localhost:8080/api/eceylon/get/image/id=`+this.state.productID)
        .then(res => {
            console.log(res.data[0]);
            this.setState({
                img1:res.data[0].toString(),
                img1:res.data[1],
                img1:res.data[2]

            })
        })
        console.log(this.state.img1)
    }

    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const cart = {
            user: {email : localStorage.getItem('email').toString()},
            product:{productID : localStorage.getItem('productid').toString()},
            quantity:this.state.qty,
            price:this.state.price,
            status:this.state.status
        };
        axios.post(`http://localhost:8080/api/eceylon/cart`, cart)
        .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.data!== ""){
                alert("Added to the product cart !")
                setTimeout("location.href = 'description'",1000);
                
            } 
            else{
                alert('Can\'t add to your cart !')
                window.location.reload(true);
            }
        })
        // alert("It worked");
    }

    // onClick = e => {
    //     console.log("A");
    // }
    render(){
        // function myFunction(imgs) {
        //     var expandImg = document.getElementById("expandedImg");
        //     var imgText = document.getElementById("imgtext");
        //     expandImg.src = imgs.src;
        //     imgText.innerHTML = imgs.alt;
        //     expandImg.parentElement.style.display = "block";
        // }
        
        return(
            
            	
	        <div className="wrap">
                <NavBar/>
                <div className="cardd">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic1"><img src={require("./resources/cake2.jpg")}/></div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li><a data-target="#pic1" data-toggle="tab" ><img id="pic" src={require("./resources/cake2.jpg")} /></a></li>
                                    <li><a data-target="#pic2" data-toggle="tab"><img id="pic" src={require("./resources/cake2.jpg")} /></a></li>
                                    <li><a data-target="#pic3" data-toggle="tab"><img id="pic" src={require("./resources/cake2.jpg")} /></a></li>
                                </ul>
                                
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{this.state.displayName}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    {/* <span className="review-no">41 reviews</span> */}
                                </div>
                                <p className="product-description">{this.state.description}</p>
                                <h4 className="price">current price : <span>{this.state.unitPrice}</span></h4>
                                <h4 className="price">Delivery Area : <span>{this.state.deliveryArea}</span></h4>
                                <h4 className="price">Available Quantity : <span>{this.state.qty_on_hand}</span></h4>
                                {/* <h4 className="price">Quantity : <input type="number" id="qty" name="qty" min="0" max={this.state.qty_on_hand} onChange={this.onChange} required/></h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong></strong></p> */}
                                
                                <div className="row">
                                    
                                    <form style={{width:'1000px'}} onSubmit={this.onSubmit}>
                                    <h4 className="price">Quantity : <input type="number" id="qty" name="qty" min="0" max={this.state.qty_on_hand} onChange={this.onChange} required/></h4>
                                    {/* <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong></strong></p> */}
                                        <div className="col-md-4">
                                            <button className="add-to-cart btn btn-default" type="submit" style={{width:'200px'}} disabled={this.state.t} >Add to cart</button>
                                        </div>
                                    </form>
                                    
                                    <div className="col-md-8">
                                        <br/>
                                        <p className="vote"><strong>Seller: </strong> {this.state.useremail} <strong></strong></p>
                                    </div>
                                    {/* <div className="col-md-8">
                                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Description;
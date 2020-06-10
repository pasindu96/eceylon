import React,{Component} from 'react';
import './description.css';
import NavBar from './NavBar';

class Description extends Component{

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
                                    <div className="tab-pane active" id="pic1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU"/></div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li><a data-target="#pic1" data-toggle="tab" ><img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU"  /></a></li>
                                    <li><a data-target="#pic2" data-toggle="tab"><img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU" /></a></li>
                                    <li><a data-target="#pic3" data-toggle="tab"><img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU" /></a></li>
                                    <li><a data-target="#pic4" data-toggle="tab"><img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU" /></a></li>
                                    <li><a data-target="#pic5" data-toggle="tab"><img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU" /></a></li>
                                </ul>
                                
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">Birthday Cake 500g</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                                <h4 className="price">current price: <span>Rs 750.00</span></h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong></strong></p>
                                
                                <div className="row">
                                    <div className="col-md-4">
                                        <button className="add-to-cart btn btn-default" type="button" >add to cart</button>
                                    </div>
                                    <div className="col-md-8">
                                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
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
export default Description;
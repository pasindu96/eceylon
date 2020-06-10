import React,{Component} from 'react';
import NavBar from './NavBar';
import './productdescription.css';

class ProductDescription extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="container">
                    <div className="card">
                        <div className="container-fluid">
                            <div className="wrapper row">
                                <div className="preview col-md-6">
                                    <div className="preview-pic tab-content">
                                        <div className = "tab-pane active" id="pic1"><image src="https://i.pinimg.com/474x/f9/17/1f/f9171f124b4838002ca8b04fb128187f--teen-beach-round-cakes.jpg"/></div>
                                        <div className = "tab-pane " id="pic2"><image src="./cake.jpg"/></div>
                                        <div className = "tab-pane " id="pic3"><image src="./cake.jpg"/></div>
                                        <div className = "tab-pane " id="pic4"><image src="./cake.jpg"/></div>    
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="active"><a data-target="#pic1" data-toggle="tab"><img src="https://i.pinimg.com/474x/f9/17/1f/f9171f124b4838002ca8b04fb128187f--teen-beach-round-cakes.jpg" /></a> </li>
                                        <li><a data-target="#pic1" data-toggle="tab"><img src="https://i.pinimg.com/474x/f9/17/1f/f9171f124b4838002ca8b04fb128187f--teen-beach-round-cakes.jpg" /></a> </li>
                                        <li><a data-target="#pic1" data-toggle="tab"><img src="https://i.pinimg.com/474x/f9/17/1f/f9171f124b4838002ca8b04fb128187f--teen-beach-round-cakes.jpg" /></a> </li>
                                        <li><a data-target="#pic1" data-toggle="tab"><img src="https://i.pinimg.com/474x/f9/17/1f/f9171f124b4838002ca8b04fb128187f--teen-beach-round-cakes.jpg" /></a> </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDescription;
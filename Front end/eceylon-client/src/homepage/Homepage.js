import React,{Component} from 'react';
import NavBar from './NavBar';
import '../homepage/homepage.css';
import axios from "axios";




class D extends Component{

    async componentDidMount(){
        axios.get(`http://localhost:8080/api/eceylon/products`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        //   if(res.data!== ""){
        //         console.log(res.data.fullname+ " : "+res.data.type);
        //         switch(res.data.type){
        //             case "seller":this.props.history.push("/sellerhome");break;
        //             case "buyer" :this.props.history.push("/homepage");break;
        //             case "admin" : this.props.history.push("/dashboard");break;
        //             default : window.location.reload(true);;
        //         }
        //         //this.props.history.push("/homepage");   
        //         // localStorage.setItem('userID',user.email);   
                
        //   } 
        //     else{
        //         alert('Invalid Username or Password !')
        //         window.location.reload(true);
        //     }
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h3>Categories</h3>
                            </div>
                            <ul className="list-unstyled components">
                                <li>
                                    <a href="#" className="list-group-item" data-toggle="collapse" aria-expanded="true">Food Items</a>
                                    <div className="collapse" id="menu1sub1">
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 b</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">Electronic Appliances</a>
                                </li>
                                <li>
                                    <a href="#">Handicrafts</a>
                                </li>
                                <li>
                                    <a href="#">Paintings</a>
                                </li>
                                <li>
                                    <a href="#">Masks</a>
                                </li>
                                <li>
                                    <a href="#">Clothes</a>
                                </li>
                                <li>
                                    <a href="#">Footwear</a>
                                </li>
                                <li>
                                    <a href="#">Furnitures</a>
                                </li>
                                <li>
                                    <a href="#">Jewellery</a>
                                </li>
                                <li>
                                    <a href="#">Stationaries</a>
                                </li>
                                <li>
                                    <a href="#">Household items</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-10">
                        <NavBar/>   

                        <div className="row">
                            <br></br>
                        </div>
                        <div className="row">
                            <h1 id="category" text-align="center"> Food Items  </h1>
                        </div>
                        <br></br>
                        <div className="row">
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://i.pinimg.com/474x/f9/17/1f/f9171f124b4838002ca8b04fb128187f--teen-beach-round-cakes.jpg"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Birthday Cake 1 kg</h5>
                                            <p className="card-text">SLR 1200.00</p>
                                            <a href="/description">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Birthday Cake 500g</h5>
                                            <p className="card-text">SLR 570.00</p>
                                            <a href="/description">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM9W2SzBrTAxCSDQLaffyv9tu8zozEso24S3p55vc191pm81wY&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Birthday Cake 750g</h5>
                                            <p className="card-text">SLR 900.00</p>
                                            <a href="/product/{id}">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA4P_TuoD7gLQXwJAeDztNli8dbMfu-e1qlNTkqQlTOnyBpfEx&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Birthday Cake 1kg</h5>
                                            <p className="card-text">SLR 1400.00</p>
                                            <a href="/product/{id}">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <br></br>
                        <div className="row">
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://www.lolascupcakes.co.uk/photos/SubMenu1Item/2651/resized/360%C2%AC295%C2%AC21st_Birthday_Cakes_parentversion_131962802771135904.jpg"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Butter Cake 1kg</h5>
                                            <p className="card-text">SLR 400.00</p>
                                            <a href="/product">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYbj9YAY0LLv1YGTcG07mmp6TLtGwCcnjR_t1w5r5r3o4Ip-k3&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Chocolate Cake 1kg</h5>
                                            <p className="card-text">SLR 450.00</p>
                                            <a href="/product/{id}">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0No8zkJ36yvGEboUcn61hiRvSlf8Tf3DtFl9SzRlrVuz5EqMB&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Date Cake 500g</h5>
                                            <p className="card-text">SLR 440.00</p>
                                            <a href="/product/{id}">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://www.rockrecipes.com/wp-content/uploads/2019/10/Fruitcake-Loaf-Cake-close-up-of-cut-cake-and-slice-on-white-plate.jpg"  alt="No Images Found"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Fruit Cake 1kg</h5>
                                            <p className="card-text">SLR 500.00</p>
                                            <a href="/product/{id}">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="row" id="check">
                            <div className="col-9" >
                                
                            </div> 
                            <div className="col-3" >
                                <a href="nextPage()" className="previous">&laquo; Previous</a>
                                <a href="previousPage()" className="next">Next &raquo;</a>
                            </div>    
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
export default D;

import React,{Component} from 'react';
import NavBar from './NavBar';
import './homepage.css';

class Homepage extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="row">
                    <div className="col-2">
                        <br></br>
                        <h1>Categories</h1>
                        <br></br>
                        <ul className="navbar-nav ml-auto">
                            <div className="btn-group-vertical btn-group-lg" role="group" aria-label="...">
                                <button type="button" className="btn btn-secondary">Food Items</button>
                                <button type="button" className="btn btn-secondary">Electronic Appliances</button>
                                <button type="button" className="btn btn-secondary">Mobile Phones</button>
                                <button type="button" className="btn btn-secondary">Handi Crafts</button>
                                <button type="button" className="btn btn-secondary">Paintings</button>
                                <button type="button" className="btn btn-secondary">Masks</button>
                                <button type="button" className="btn btn-secondary">Clothes</button>
                                <button type="button" className="btn btn-secondary">Footwear</button>
                                <button type="button" className="btn btn-secondary">Furnitures</button>
                                <button type="button" className="btn btn-secondary">Jewellery</button>
                                <button type="button" className="btn btn-secondary">Household Items</button>
                                <button type="button" className="btn btn-secondary">Stationaries</button>

                            </div>
                        </ul>
                    </div>
                    <div className="col-10">
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
                                            <a href="/product/{id}">More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Birthday Cake 500g</h5>
                                            <p className="card-text">SLR 570.00</p>
                                            <a href="/product/{id}">More details ...</a>
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
export default Homepage;
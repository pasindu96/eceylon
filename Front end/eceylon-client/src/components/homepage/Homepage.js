import React,{Component} from 'react';
import NavBar from './NavBar';

class Homepage extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div class="row">
                    <div class="col-2">
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
                        .col-10
                    </div>
                </div>
            </div>
        )
    }
}
export default Homepage;
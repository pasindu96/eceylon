import React,{Component} from 'react';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {
            email : "",
            username:"pasi"
        };
    }

    currentUser = e =>{
        return this.username;
    
    }

    render(){
        
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                <a className="navbar-brand" href="/homepage">
                    <h>ECEYLON.LK</h>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
                    aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               
                <div className="collapse navbar-collapse" id="basicExampleNav1">

             
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <a href="/cart" className="nav-link waves-effect">
                            <img src="https://img.icons8.com/plasticine/2x/user.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                            My Cart
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/wishlist" className="nav-link waves-effect">
                            <img src="https://img.icons8.com/plasticine/2x/user.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                            Wishlist
                            </a>
                        </li>
                        
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            
                            <a href="/homepage" type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
                                <img src="https://img.icons8.com/plasticine/2x/user.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                                Pasindu</a>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="true" href="#">
                            <i className="united kingdom flag m-0"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/orders">My Orders</a>
                                <a className="dropdown-item" href="/login">Log out</a>
                            </div>
                        </li>

                    </ul>

                </div>

            </nav>

                      
            

        )
    }
}
export default NavBar;

/*
<li className="nav-item">
                            <a href="/login" className="nav-link waves-effect">
                            Sign in
                            </a>
                        </li>
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            <a href="/signup" type="button"
                            className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
                        </li>

*/
/*
<li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="true">
                            <i className="united kingdom flag m-0"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#!">Action</a>
                                <a className="dropdown-item" href="#!">Another action</a>
                                <a className="dropdown-item" href="#!">Something else here</a>
                            </div>
                        </li>
*/
//////////////////////////////////////////////////Use this one////////////////////////////////////////////////////
/*
<nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/homepage">ECEYLON.LK</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <a className="navbar-brand" href="/cart">
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    My Cart
                </a>
                <a className="navbar-brand" href="/cart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlgszQepBAUAB8B2uIPZXqZnVHatBrjo9iag-e40PcErfHSM6H&usqp=CAU" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Wishlist
                </a>
                <a className="navbar-brand" href="/homepage">
                    <img src="https://www.pinclipart.com/picdir/big/91-919500_individuals-user-vector-icon-png-clipart.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <span>Pasindu Wijesinghe</span>
                </a>
                
            </nav>

*/

/*

<div className="container">
                <div className="row">
                    <div className=".col-xl-3">
                        <nav className="navbar navbar-dark bg-dark">
                            <a className="navbar-brand" href="/homepage">ECEYLON.LK</a>
                        </nav>
                    </div>
                    <div className=".col-xl-9">
                        <nav className="navbar navbar-dark bg-dark">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <a className="navbar-brand" href="/cart">
                                <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                                My Cart
                            </a>
                            <a className="navbar-brand" href="/cart">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlgszQepBAUAB8B2uIPZXqZnVHatBrjo9iag-e40PcErfHSM6H&usqp=CAU" width="30" height="30" className="d-inline-block align-top" alt=""/>
                                Wishlist
                            </a>
                            <a className="navbar-brand" href="/homepage">
                                <img src="https://www.pinclipart.com/picdir/big/91-919500_individuals-user-vector-icon-png-clipart.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                                <span>Pasindu Wijesinghe</span>
                            </a>
                        </nav> 
                    </div>
                </div>
            </div>      
*/

/*
<nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <a className="navbar-brand" href="/homepage">ECEYLON.LK</a>
                        </div>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col-8">
                                    <form className="form-inline">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                                <div className="col-3">
                                    <a className="navbar-brand" href="/cart">
                                        <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                                        My Cart
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a className="navbar-brand" href="/cart">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlgszQepBAUAB8B2uIPZXqZnVHatBrjo9iag-e40PcErfHSM6H&usqp=CAU" width="30" height="30" className="d-inline-block align-top" alt=""/>
                                        Wishlist
                                    </a>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div> 
            </nav>
*/
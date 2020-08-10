import React,{Component} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

class NavBar extends Component{
    
    constructor(){
        super();
        this.state = {
            search: "",
            username:localStorage.getItem('username').toString() , 
            email:localStorage.getItem('email').toString(),
            checked:'false',
            filter:'',
            check:localStorage.getItem('filter')==="1" ? true:false
        };
        // alert(this.username);
    }

    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }
    handleCheck=e=>{ 
        var checked = e.target.checked;
        if(checked){
            localStorage.setItem('filter',"1");
            // this.setState({
            //     defaultChecked:true
            // })
            setTimeout("location.href = 'homepage'",500);

            //reload homepage here
        }else{
            localStorage.setItem('filter',"2");
            // this.setState({
            //     defaultChecked:false
            // })
            setTimeout("location.href = 'homepage'",500);
            //reload homepage here
        }
        
    }

    onSubmit = e => {
        e.preventDefault();
        const user = {
            searchItem : this.state.search,
            user : {email:this.state.email},
            categoryID:"0"
        };
        axios.post(`http://localhost:8080/api/eceylon/search`, user)
        .then(res => {
            // localStorage.setItem('categoryid','1');  
            // localStorage.setItem('categoryid',res.data);
            // console.log(localStorage.getItem('categoryid').toString());
            // console.log(res.data);
            if(res.data!== ""){
                localStorage.setItem('categoryid',res.data);
                console.log(localStorage.getItem('categoryid').toString());
                // this.props.history.push('/homepage');
                window.location.href = '/homepage';        
            }
        });


        //This shit cause the error --------------------> please check again bro..yack... I'm totally hate this shit
        // window.location.href = '/homepage';
        // this.props.history.push('/homepage');

    }
    // currentUser = e =>{
    //     return this.username;
    
    // }

    render(){
        
        let userID = this.state.userID;
        return(
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">

                <a className="navbar-brand" href="/homepage">
                    <h1>ECEYLON.LK</h1>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
                    aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
               
                <div className="collapse navbar-collapse" id="basicExampleNav1">

                
                    <ul className=" navbar-nav ml-auto">
                        
                        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                            <input className="form-control mr-sm-2" type="text" id="search" name="search" placeholder="Search products"  onChange={this.onChange}
                                value={this.state.search} required/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <li className="nav-item">
                            {/* <a href="#" className="nav-link waves-effect"> */}
                            <ol>
                            <p  style={{color: "#FFFFFF", fontSize:"15px", fontFamily:"bold"}} >Filter</p>

                            <input className="form-check-input" type="checkbox" name="filter" id="inlineCheckbox1" onChange={this.handleCheck} checked={this.state.check} />
                            <label className="form-check-label" htmlFor="inlineCheckbox1" style={{color: "#FFFFFF"}}> Price low - high </label>


                            {/* <img src="https://cdn1.iconfinder.com/data/icons/instagram-ui-flat/48/Instagram_UI-07-512.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                            Wishlist */}
                            </ol>
                            {/* </a> */}
                        </li>
                        <li className="nav-item">
                            
                            <a href="/cart" className="nav-link waves-effect">
                            <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                            My Cart
                            </a>
                        </li>
                        
                        {/* nav-item pl-2 mb-2 mb-md-0 */}
                        <li className="nav-item pl-2 mb-2 mb-md-0 dropdown"> 
                            
                            <a href="/profile" type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
                                <img src="https://img.icons8.com/plasticine/2x/user.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                                {this.state.username}
                            </a>
                            
                            <ul className="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Log Out</a></li>
                            </ul>

                        </li>
                    
                        <li className="nav-item dropdown">
                            <a href="/" type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
                                Logout
                            </a>
                            {/* <ul className="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Log Out</a></li>
                            </ul> */}
                        {/* nav-link dropdown-toggle waves-effect */}
                            {/* <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="true" href="/homepage">
                            <i className="united kingdom flag m-0"></i>
                            </a> */}
                            {/* <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <div className="dropdown-content">
                                    <a href="/sa">Link 1</a>
                                    <a href="/sa">Link 2</a>
                                    <a href="/sa">Link 3</a>
                                </div>
                            </div> */}
                            {/* <ul className="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Log Out</a></li>
                            </ul> */}
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
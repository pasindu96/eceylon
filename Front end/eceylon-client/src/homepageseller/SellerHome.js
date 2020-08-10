import React,{Component} from 'react';

class SellerHome extends Component{
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
                    <p></p>
                </div>
            </div>
        )
    }
}
export default SellerHome;
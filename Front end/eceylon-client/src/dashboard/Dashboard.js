import React,{Component} from 'react';
import './dashboard.css';


class Dashboard extends Component{
    render(){

        return(
            
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Admin Dashboard</h3>
                    </div>
                    <ul className="list-unstyled components">
                        {/* <li>
                            <a href="#" >Approve Sellers</a>
                        </li> */}
                        <li>
                            <a href="#">View Sales Report</a>
                        </li>
                        <li>
                            <a href="#">Manage Category</a>
                        </li>
                        <li>
                            <a href="#">Manage Prodcuts</a>
                        </li>
                        <li>
                            <a href="#">Most Serached Products</a>
                        </li>
                        <li>
                            <a href="/homepage">Homepage</a>
                        </li>
                        <li>
                            <a href="/login">Log out</a>
                        </li>
                    </ul>
                </nav>
                <div id="content">

                </div>
            </div>
        )
    }
}
export default Dashboard;
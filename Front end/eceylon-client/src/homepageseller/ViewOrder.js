import React,{Component} from 'react';
import './vieworder.css';

class ViewOrder extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="container text-white py-5 text-center">
                    <h1 className="display-4">Current orders</h1>
                </div>
                <div className="row">
                    <div className="col-sm-2">
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
                                    <a href="#">Ratings</a>
                                </li>
                                <li>
                                    <a href="/login">Log out</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-10">
                        <div className="container" >
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">Order ID</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">Product</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Confirm</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Reject</div>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                
                                                <td className="border-0 align-middle"><strong>3</strong></td>
                                                <td className="border-0 align-middle"><strong>Chocolate cake 750g</strong></td>
                                                <td className="border-0 align-middle"><strong>Rs 750.00</strong></td>
                                                <td className="border-0 align-middle"><strong>1</strong></td>
                                                <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-check"></i></a></td>
                                                <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-window-close"></i></a></td>
                                            </tr>
                                            <tr>
                                                
                                                <td className="border-0 align-middle"><strong>11</strong></td>
                                                <td className="border-0 align-middle"><strong>Chocolate cake 750g</strong></td>
                                                <td className="border-0 align-middle"><strong>Rs 750.00</strong></td>
                                                <td className="border-0 align-middle"><strong>2</strong></td>
                                                <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-check"></i></a></td>
                                                <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-window-close"></i></a></td>
                                            </tr>
                                            
                                            {/* <tr>
                                                <th scope="row">
                                                    <div className="p-2">
                                                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-3_cexmhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm"/>
                                                    <div className="ml-3 d-inline-block align-middle">
                                                        <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Lumix camera lense</a></h5><span className="text-muted font-weight-normal font-italic">Category: Electronics</span>
                                                    </div>
                                                    </div>
                                                </th>
                                                <td className="align-middle"><strong>$79.00</strong></td>
                                                <td className="align-middle"><strong>3</strong></td>
                                                <td className="align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">
                                                    <div className="p-2">
                                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-2_qxjis2.jpg" alt="" width="70" className="img-fluid rounded shadow-sm"/>
                                                        <div className="ml-3 d-inline-block align-middle">
                                                            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block">Gray Nike running shoe</a></h5><span className="text-muted font-weight-normal font-italic">Category: Fashion</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td className="align-middle"><strong>$79.00</strong></td>
                                                <td className="align-middle"><strong>3</strong></td>
                                                <td className="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                                            </tr> */}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>  
            </div>
        )
    }
}
export default ViewOrder;
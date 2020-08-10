import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';
import Homepage from './homepage/Homepage';
import ProductCart from './productcart/Productcart';
import Dashboard from './dashboard/Dashboard';
import SellerHome from './homepageseller/SellerHome';
import Description from './homepage/Description';
import Approve from './dashboard/Approve';
import Policy from './signup/Policy';
import AddProduct from './homepageseller/AddProduct';
import ViewOrder from './homepageseller/ViewOrder';
import IncomeReport from './homepageseller/IncomeReport';
import Indexpage from './homepage/Index';
import Viewproduct from './homepageseller/Viewproduct';
import Profile from './dashboard/Profile';
import ProductDashboard from './dashboard/ProductDashboard';



class App extends Component{
  render(){
    return(
      <Router>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/homepage" exact component={Homepage}/>
          <Route path="/cart" exact component={ProductCart}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/productdashboard" exact component={ProductDashboard}/>
          <Route path="/sellerhome" exact component={SellerHome}/>
          <Route path="/description" exact component={Description}/>
          <Route path="/approve" exact component={Approve}/>
          <Route path="/policy" exact component={Policy}/>
          <Route path="/addproducts" exact component={AddProduct}/>
          <Route path="/vieworder" exact component={ViewOrder}/>
          <Route path="/report" exact component={IncomeReport}/>
          <Route path="/index" exact component={Indexpage}/>
          <Route path="/viewproduct" exact component={Viewproduct}/>
          <Route path="/profile" exact component={Profile}/>
      </Router>
    )
  }
}
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



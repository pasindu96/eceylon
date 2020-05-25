import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';
import Homepage from './homepage/Homepage';
import ProductCart from './productcart/Productcart';


class App extends Component{
  render(){
    return(
      <Router>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/homepage" exact component={Homepage}/>
          <Route path="/cart" exact component={ProductCart}/>
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



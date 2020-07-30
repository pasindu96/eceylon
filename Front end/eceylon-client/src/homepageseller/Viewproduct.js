import React,{Component} from 'react';
import 'vieworder.css';

class Viewproduct extends Component{

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           students: [
              { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
              { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
              { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
              { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
           ]
        }
     }

     renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }

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
                    <table id='students' style={{border:'border: 3px solid #ddd'}}>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    {/* <table id='students' style={{border:'border: 3px solid #ddd'}}>
                        <tbody>
                            <td style={{border:'border: 3px solid #ddd'}}>HI</td>
                            <td style={{border:'border: 3px solid #ddd'}}>HI</td>
                        </tbody>
                    </table> */}
                    
                </div>
            </div>
        )
    }
}
export default Viewproduct;
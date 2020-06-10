import React,{ Component } from 'react';
import axios from 'axios';

class Approve extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         data : []
    //     };
    // }
    

    componentDidMount(){
        axios.get(`http://localhost:8080/api/eceylon/products`)
        .then(res => {
          console.log(res);
        //   console.log(res.data);
            if(res.data!== ""){
                console.log(res.data[0].description);

            } 
            else{
                alert( " Can't fetch data right now ! " );
                window.location.reload(true);
            }
        })
    }
    
    render(){
        const heading=[
            "Email",
            "Address",
            "Phonenumber"
        ];

        const rows = [
            [
              'Red and black plaid scarf with thin red stripes and thick black stripes',
              124689325,
              28,
              '$35.00',
              '$60.00',
              12,
              '$720.00',
              '$300.00',
              '',
            ],
            [
              'Yellow plaid scarf',
              124689389,
              0,
              '$35.00',
              '$60.00',
              20,
              '$1200.00',
              '$500.00',
              'Currently on back order by the supplier. Do not place another order to restock.',
            ],
            [
              'Blue plaid scarf',
              124689332,
              30,
              '$35.00',
              '$60.00',
              10,
              '$600.00',
              '$250.00',
              '',
            ],
            [
              'Pink plaid scarf',
              124689376,
              16,
              '$35.00',
              '$60.00',
              4,
              '$240.00',
              '$100.00',
              '',
            ],
          ];

        return(
            <div>
                <table>
                    {/* <DataTable headings={headings} rows={rows} /> */}
                </table>
            </div>
        )
    }
}
export default Approve;
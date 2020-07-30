import React,{Component} from 'react';
import NavBar from './NavBar';
import '../homepage/homepage.css';
import axios from "axios";




class D extends Component{
    
    async componentDidMount(){

        const user = {
            pid : []
        };
        // alert(localStorage.getItem('categoryid').toString());
        axios.get(`http://localhost:8080/api/eceylon/products/id=`+localStorage.getItem('categoryid').toString())
        .then(res => {
            
            this.setState({
                products: res.data
            })
            
            //this.products=res.data;
            //console.log(res);
            for(var i=0;i<=res.data.length-1;i++){
               // console.log(res.data[i]);
               this.state.displayName.push(res.data[i].displayName);
               this.state.unitPrice.push("SLR " + res.data[i].unitPrice + ".00");
               this.state.productID.push(res.data[i].productID);
            //    user.pid.push(res.data[i].productID);

            //    this.state.lol.push("a");
            //    var url="test";
               if(res.data[i].productID<9){

                //Check theese part

                    // axios.get(`http://localhost:8080/api/eceylon/image/id=`+res.data[i].productID)
                    // .then(result => {
                            
                    //     if(result!=null ){  
                    //         //this.state.image.push(res.data.imageurl); 
                    //         // url=((result.data)[0].imageurl); 
                    //         this.state.lol.push(""+(result.data)[0].imageurl); 
                    //     }
                    //     // this.state.image.push(url); 
                    // // console.log(this.state.image[0])
                            
                    // })

                }

                

                this.setState({

                    // names.push(res.data[i].displayName);
                })
            }
            //user.pid=this.state.productID;
            // this.setState(prevState => ({ productID: 2 }));
        })

        // (this.state.productID).forEach(element => {
        //     this.state.productID
            // console.log(this.state.productID);
        // });

    }


    constructor(props){
        super(props);
        this.state = {
            products:{},
            test:["A","B"],
            names:[],
            displayName:[],
            productID:[0],
            unitPrice:[],
            qty_on_hand:[],
            images:[],
            lol:[]
        }
    }
    
    render(){
        function test() {
            alert("test");
        }
        
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h3>Categories</h3>
                            </div>
                            <ul className="list-unstyled components">
                                <li>
                                    <a href="#" className="list-group-item" data-toggle="collapse" aria-expanded="true">Food Items</a>
                                    {/* <div className="collapse" id="menu1sub1">
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 b</a>
                                    </div> */}
                                </li>
                                <li>
                                    <a href="#">Electronic Appliances</a>
                                </li>
                                <li>
                                    <a href="#">Handicrafts</a>
                                </li>
                                <li>
                                    <a href="#">Paintings</a>
                                </li>
                                <li>
                                    <a href="#">Masks</a>
                                </li>
                                <li>
                                    <a href="#">Clothes</a>
                                </li>
                                <li>
                                    <a href="#">Footwear</a>
                                </li>
                                <li>
                                    <a href="#">Furnitures</a>
                                </li>
                                <li>
                                    <a href="#">Jewellery</a>
                                </li>
                                <li>
                                    <a href="#">Stationaries</a>
                                </li>
                                <li>
                                    <a href="#">Household items</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-10">
                        <NavBar/>   

                        <div className="row">
                            <br></br>
                        </div>
                        <div className="row">
                            <h1 id="category" text-align="center"> Food Items  </h1>
                        </div>
                        <br></br>
                        <div className="row">
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require('../resources/c1.jpg')}  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[0]}</h5>
                                            <p className="card-text">{this.state.unitPrice[0]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[1])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUYUEWGnH9d-McQZWhbM-_e6l_Ie2iW0KCfwsl3thLIeRo9bI&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[1]}</h5>
                                            <p className="card-text">{this.state.unitPrice[1]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[2])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM9W2SzBrTAxCSDQLaffyv9tu8zozEso24S3p55vc191pm81wY&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[2]}</h5>
                                            <p className="card-text">{this.state.unitPrice[2]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[3])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA4P_TuoD7gLQXwJAeDztNli8dbMfu-e1qlNTkqQlTOnyBpfEx&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[3]}</h5>
                                            <p className="card-text">{this.state.unitPrice[3]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[4])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <br></br>
                        <div className="row">
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://www.lolascupcakes.co.uk/photos/SubMenu1Item/2651/resized/360%C2%AC295%C2%AC21st_Birthday_Cakes_parentversion_131962802771135904.jpg"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[4]}</h5>
                                            <p className="card-text">{this.state.unitPrice[4]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[5])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYbj9YAY0LLv1YGTcG07mmp6TLtGwCcnjR_t1w5r5r3o4Ip-k3&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[5]}</h5>
                                            <p className="card-text">{this.state.unitPrice[5]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[6])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0No8zkJ36yvGEboUcn61hiRvSlf8Tf3DtFl9SzRlrVuz5EqMB&usqp=CAU"  alt="ImFound"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[6]}</h5>
                                            <p className="card-text">{this.state.unitPrice[6]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[7])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src="https://www.rockrecipes.com/wp-content/uploads/2019/10/Fruitcake-Loaf-Cake-close-up-of-cut-cake-and-slice-on-white-plate.jpg"  alt="No Images Found"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[7]}</h5>
                                            <p className="card-text">{this.state.unitPrice[7]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[8])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="row" id="check">
                            <div className="col-9" >
                                
                            </div> 
                            <div className="col-3" >
                                <a href="nextPage()" className="previous">&laquo; Previous</a>
                                <a href="previousPage()" className="next">Next &raquo;</a>
                            </div>    
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
export default D;

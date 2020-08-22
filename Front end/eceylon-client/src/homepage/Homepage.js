import React,{Component} from 'react';
import NavBar from './NavBar';
import '../homepage/homepage.css';
// import './homepage.css';
import axios from "axios";




class D extends Component{
    
    async componentDidMount(){
        if(localStorage.getItem('email')==="logout")
            window.location.href="/";
        
        // if(localStorage.getItem('categoryid')==='1'){
            
        //     // for(var i=0;i<8;i++){

        //         this.setState({
        //             cr:this.state.cat1[0].toString()
        //         })
        //     // }
        //     console.log(this.state.cr)
        // }else{
        //     this.setState({
        //         currentimage:this.state.cat2
        //     })
        // }
        const user = {
            pid : []
        };
        switch(localStorage.getItem('filter')){
            case "2": {
                // alert(localStorage.getItem('categoryid').toString());
                axios.get(`http://localhost:8080/api/eceylon/productl/id=`+localStorage.getItem('categoryid').toString())
                .then(res => {
                    // console.log(res.data);
                    // this.setState({
                    //     testdata: res.data
                    // })
                    
                    //this.products=res.data;
                    console.log(res);
                    for(var i=0;i<=res.data.length-1;i++){
                    // console.log(res.data[i]);
                    // this.state.displayName.push(res.data[i].displayName);
                    // this.state.unitPrice.push("SLR " + res.data[i].price + ".00");
                    // this.state.productID.push(res.data[i].productID);
                    // this.state.beep.push(res.data[i].image+"");
                    this.setState(prevState => ({
                        displayName: [...prevState.displayName, res.data[i].displayName],
                        unitPrice: [...prevState.unitPrice, "SLR " + res.data[i].price + ".00"],
                        productID: [...prevState.productID, res.data[i].productID],
                        images:[...prevState.images, res.data[i].image]

                }))
                
                    //    user.pid.push(res.data[i].productID);

                    //    this.state.lol.push("a");
                    //    var url="test";
                    //    if(res.data[i].productID<9){

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

                        // }

                        
//--------------------------------------------------------------------------------------------
                        // this.setState(prevState => ({
                        //     beep: [...prevState.beep, res.data[i].image]
                        //   }))

//--------------------------------------------------------------------------------------------
                        
                        // this.setState({
                        //     images:res.data[i].image
                            
                        //     // names.push(res.data[i].displayName);
                        // })
                    }
                    console.log(this.state.images)
                    // console.log(this.state.beep);
                    // this.setState({
                    //         lol:this.state.images
                            
                    //         // names.push(res.data[i].displayName);
                    //     })
                    // console.log(this.state.lol);

                    //user.pid=this.state.productID;
                    // this.setState(prevState => ({ productID: 2 }));
                })

                // axios.get('http://localhost:8080/api/eceylon/p')
                // .then(resu=>{
                //     this.setState({
                //         testdata:resu.data
                //     })
                //     console.log(resu.data)

                // })
                console.log(this.state.beep);

            };break;
            case "1": {
                axios.get(`http://localhost:8080/api/eceylon/products/filter/id=`+localStorage.getItem('categoryid').toString())
                .then(res => {
                    // console.log(res.data);
                    // this.setState({
                    //     testdata: res.data
                    // })
                    
                    //this.products=res.data;
                    //console.log(res);
                    for(var i=0;i<=res.data.length-1;i++){
                    // console.log(res.data[i]);
                    // this.state.displayName.push(res.data[i].displayName);
                    // this.state.unitPrice.push("SLR " + res.data[i].price + ".00");
                    // this.state.productID.push(res.data[i].productID);
                    // // this.state.images.push(res.data[i].image);
                    // this.state.images.push(res.data[i].image.toString());

                    this.setState(prevState => ({
                            displayName: [...prevState.displayName, res.data[i].displayName],
                            unitPrice: [...prevState.unitPrice, "SLR " + res.data[i].price + ".00"],
                            productID: [...prevState.productID, res.data[i].productID],
                            images:[...prevState.images, res.data[i].image]
                    }))

                    //    user.pid.push(res.data[i].productID);

                        // this.setState({

                        //     // names.push(res.data[i].displayName);
                        // })
                    }
                    //user.pid=this.state.productID;
                    // this.setState(prevState => ({ productID: 2 }));
                })
                console.log(this.state.displayName);
            };break;
            default: break;
        }

        // (this.state.productID).forEach(element => {
        //     this.state.productID
            // console.log(this.state.productID);
        // });

    }

    // onClick = e=>{
        
    //     alert("HI");
    // }

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
            lol:[],
            testdata:[],
            beep:["resources/cake1.jpg","resources/cake2.jpg"],
            cat1:["resources/cake2.jpg","resources/cake1.jpg","resources/cake10.jpg","resources/cake4.jpg","resources/cake5.jpg","resources/cake6.jpg","resources/cake7.jpg","resources/cake8.jpg"],
            cat2:["resources/ring2.jpg","resources/ring3.jpg","resources/chain1.jpg","resources/chain2.jpg","resources/earings1.jpg","resources/neckless1.jpg","resources/neckless2.jpg","resources/jewellery.jpg"],
            currentimage:[],
            cr:''
        }
    }
    onClick(event,val){
        localStorage.setItem('categoryid',val);
        setTimeout("location.href = 'homepage'",500);

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
                                <li style={{height:"58px"}}>
                                    {/* <a href="#" >Food Items</a> */}
                                    {/* <div className="collapse" id="menu1sub1">
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 b</a>
                                    </div> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }} onClick={(e) => {this.onClick(e, "1")}}> Food Items</button>

                                </li>
                                <li style={{height:"58px"}}>
                                    <button id="catStyle" style={{width:"250px", height:"60px" }} onClick={(e) => {this.onClick(e, "2")}} >Jewellery</button>

                                    {/* <a href="#">Jewellery</a> */}
                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Mobile phones</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Mobile Phones</button>

                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Handicrafts</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>HandiCrafts</button>

                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Paintings</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Paintings</button>

                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Clothes</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Clothes</button>
                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Footwear</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Footwear</button>

                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Furnitures</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Furnitures</button>

                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Electronic Appliances</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Electronic Appliances</button>
                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Electronic Appliances</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Household Items</button>
                                </li>
                                <li style={{height:"58px"}}>
                                    {/* <a href="#">Electronic Appliances</a> */}
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Stationaries</button>
                                </li>
                                {/* <li style={{height:"50px"}}>

                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Household Items</button>

                                </li>
                                <li style={{height:"50px"}}>
                                    <button id="catStyle" style={{width:"250px", height:"60px" }}>Stationaries</button>

                                </li> */}
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-10">
                        <NavBar/>   

                        <div className="row">
                            <br></br>
                        </div>
                        <div className="row">
                            <h1 id="category" text-align="center"> </h1>
                        </div>
                        <br></br>
                        <div className="row">
                                <div className="col-3">
                                    <div className="card" >
                                        {/* src={require('../resources/b1.jpg')} */}
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[0])}  alt="Image 1"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[0]}</h5>
                                            <p className="card-text">{this.state.unitPrice[0]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[1])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[1])} alt="Image 2"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[1]}</h5>
                                            <p className="card-text">{this.state.unitPrice[1]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[2])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[2])}  alt="Image 3"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[2]}</h5>
                                            <p className="card-text">{this.state.unitPrice[2]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[3])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[3])}  alt="Image 4"/>
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
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[4])}  alt="Image 5"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[4]}</h5>
                                            <p className="card-text">{this.state.unitPrice[4]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[5])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[5])}  alt="Image 6"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[5]}</h5>
                                            <p className="card-text">{this.state.unitPrice[5]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[6])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[6])}  alt="Image 7"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.displayName[6]}</h5>
                                            <p className="card-text">{this.state.unitPrice[6]}</p>
                                            <a href="/description" onClick={(e) =>localStorage.setItem('productid',this.state.productID[7])}>More details ...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card" >
                                        <img className="bd-placeholder-img card-img-top" width="100%" height="180" src={require("./"+this.state.cat1[7])}  alt="Image 8"/>
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

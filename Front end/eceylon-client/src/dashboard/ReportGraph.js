import React, { Component } from 'react';
import axios from 'axios';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
	constructor(){
		super();
		this.state={
			dataPoints:[]
		}
	}
	async componentDidMount(){

		if(localStorage.getItem('email')==="logout")
			window.location.href="/";
			
		axios.get('http://localhost:8080/api/eceylon/graph')
		.then(res=>{
			this.setState({
				dataPoints:res.data
			})
		})
	}
		render() {
		const options = {
			title: {
				text: "Income Distribution"
			},
			animationEnabled: true,
			data: [
				{
					// Change type to "doughnut", "line", "splineArea", etc.
					type: "line",
					dataPoints:this.state.dataPoints
					// dataPoints: [
					// 	{ label: "Apple",  y: 10  },
					// 	{ label: "Orange", y: 15  },
					// 	{ label: "Banana", y: 25  },
					// 	{ label: "Mango",  y: 30  },
					// 	{ label: "Grape",  y: 28  }
					// ]
				}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;
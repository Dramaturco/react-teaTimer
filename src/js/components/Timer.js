import React from "react";

export default class Timer extends React.Component{
	constructor(){
		super();
		this.state = {
			seconds: 180
		}
	}
	downTick(){
		this.setState({
			seconds: this.state.seconds-1
		});
	}
	componentDidMount(){
		this.interval = setInterval(() => this.downTick(), 1000);
	}
	componentWillUnmount() {
    	clearInterval(this.interval);
  	}
	render(){
		
		return(
			<div className="timer">
				<p>{parseInt(this.state.seconds/60)} minutes {parseInt(this.state.seconds % 60)} seconds</p>
			</div>
		);
	}
}
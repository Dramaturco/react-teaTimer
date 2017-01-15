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
	extractSeconds(query){
		var minutes, seconds = 0;
		if(query.includes("minutes")){
			var split = query.split("minutes");
			minutes = parseInt(split[0]);
			seconds = parseInt(split[1]);
			if(!isNaN(seconds))
				return(minutes*60+seconds);
			else
				return(minutes*60);
		}		
		else if(query.includes("seconds")){
			seconds = parseInt(query);
			if(!isNaN(seconds))
				return(seconds);

		}
		else{
			return(parseInt(query));
		}
		return(minutes*60+seconds);
	}
	componentDidMount(){
		var query = this.props.params.query;
		this.setState({seconds: this.extractSeconds(query)});
		this.interval = setInterval(() => this.downTick(), 1000);
	}
	componentWillUnmount() {
    	clearInterval(this.interval);
  	}
	render(){
		if(this.state.seconds == 0){
			clearInterval(this.interval);
			alert("Dein Tee ist fertig!");
		}
		return(
			<div className="timer">
				<div className="timerText">{parseInt(this.state.seconds/60)} minuten {parseInt(this.state.seconds % 60)} sekunden</div>
			</div>
		);
	}
}
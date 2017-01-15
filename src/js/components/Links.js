import React from "react"

import Timer from "./timer";

import { Link } from "react-router";

export default class Links extends React.Component{
	render(){
		const containerStyle = {
			display: "flex",
			justifyContent: "space-between"
		}
		const timers = [
			<tr>
				<td><Link to="/180" className="tea">Schwarzer Tee</Link></td>
				<td>3 Minuten</td>
			</tr>,
			<tr>
				<td><Link to="/10minutes" className="tea">Kräuter Tee</Link></td>
				<td>3 Minuten</td>
			</tr>,
			<tr>
				<td><Link to="/30" className="tea">Weißer Tee</Link></td>
				<td>30 Sekunden</td>
			</tr>
		];
		return(
			<div>
				<table>
					<tr>
						<th>Tee</th><th>Ziehzeit</th>
					</tr>
				{timers}
				</table>
			</div>
		);
	}
}
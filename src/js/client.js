import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./components/Layout";
import Timer from "./components/Timer";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}></Route>
		<Route path="/:query" component={Timer}></Route>
	</Router>, 
	app);

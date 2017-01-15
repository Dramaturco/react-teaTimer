import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Timer from "./components/Timer";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="(/:query)" component={Timer}>
		</Route>
	</Router>, 
	app);

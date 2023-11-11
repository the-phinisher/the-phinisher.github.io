import "./App.css";
import { Route, Switch } from "wouter";
import Home from "./Home";
import DevWatermark from "./DevWatermark";

function App() {
	return (
		<div className="App">
			<DevWatermark />
			<Switch>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/contact">
					<h1>Can't contact me yet!</h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;

import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import HogsMenu from "./HogsMenu";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<HogsContainer />
			</div>
		);
	}
}

export default App;

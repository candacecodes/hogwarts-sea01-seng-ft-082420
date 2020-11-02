import React, { Component } from "react";
import FilterSort from "./FilterSort";
import HogsMenu from "./HogsMenu";
import HogsDetails from "./HogsDetails";
import hogs from "../porkers_data";

export default class HogsContainer extends Component {
	// needs states via props from other components
	constructor() {
		super();

		this.state = {
			greaseFilter: false,
			sortType: "none",
			chosenHog: null,
		};
	}
	render() {
		return (
			<div>
				<FilterSort />
				<HogsMenu
					hogs={hogs}
					sortType={this.state.sortType}
					greaseFilter={this.state.greaseFilter}
				/>
				<HogsDetails chosenHog={this.state.chosenHog} />
			</div>
		);
	}
}

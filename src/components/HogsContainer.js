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
			greaseFilter: "all",
			sortType: "none",
			chosenHog: null,
		};
	}

	selectHog = (name) => {
		this.setState({ chosenHog: hogs.find((hog) => hog.name === name) });
	};

	closeHog = () => {
		this.setState({ chosenHog: null });
	};

	selectFilter = (greaseFilter) => {
		this.setState({ greaseFilter });
	};
	render() {
		return (
			<div>
				<FilterSort selectFilter={this.selectFilter} />

				{this.state.chosenHog ? (
					<HogsDetails
						chosenHog={this.state.chosenHog}
						closeHog={this.closeHog}
					/>
				) : (
					<HogsMenu
						hogs={hogs}
						sortType={this.state.sortType}
						greaseFilter={this.state.greaseFilter}
						selectHog={this.selectHog}
					/>
				)}
			</div>
		);
	}
}

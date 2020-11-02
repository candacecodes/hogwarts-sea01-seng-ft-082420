import React from "react";
import HogTile from "./HogTile";

export default function HogsMenu({ hogs, selectHog, greaseFilter }) {
	// grease filter = all, greased, ungreased
	const greaseState = greaseFilter === "greased";

	const filteredHogs =
		greaseFilter === "all"
			? hogs
			: hogs.filter((hog) => hog.greased === greaseState);
	return (
		<div className="ui grid container">
			{filteredHogs.map((hog) => (
				<HogTile hog={hog} selectHog={selectHog} key={hog.name} />
			))}
		</div>
	);
}

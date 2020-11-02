import React from "react";
import HogTile from "./HogTile";

export default function HogsMenu({ hogs, selectHog }) {
	return (
		<div className="ui grid container">
			{hogs.map((hog) => (
				<HogTile hog={hog} selectHog={selectHog} key={hog.name} />
			))}
		</div>
	);
}

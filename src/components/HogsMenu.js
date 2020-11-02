import React from "react";
import HogTile from "./HogTile";

export default function HogsMenu({ hogs }) {
	return (
		<div className="ui grid container">
			{hogs.map((hog) => (
				<HogTile hog={hog} key={hog.name} />
			))}
		</div>
	);
}

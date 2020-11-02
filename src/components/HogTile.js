import React from "react";

export default function HogTile({ hog }) {
	const { name, image } = hog;
	const filename = name.toLowerCase().split(" ").join("_");
	const pigImage = require(`../hog-imgs/${filename}.jpg`);

	return (
		<div className="ui eight wide column pigTile">
			<img src={pigImage} alt="Pig Image"></img>
			<h3>{name}</h3>
		</div>
	);
}

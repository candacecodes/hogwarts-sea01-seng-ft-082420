import React from "react";

export default function HogsDetails({ chosenHog, closeHog }) {
	const {
		name,
		weight,
		speciality,
		greased,
		["highest medal achieved"]: medal,
	} = chosenHog;

	return (
		<div>
			<button onClick={closeHog}> Close </button>
			<ul>
				<li>{name}</li>
				<li>{weight}</li>
				<li>{greased ? "Greased" : "Not Greased"} </li>
				<li>{medal} </li>
			</ul>
		</div>
	);
}

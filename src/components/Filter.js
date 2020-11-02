import React from "react";

export default function Filter() {
	return (
		<div>
			<input type="radio" name="greased" value="greased" id="greased" />
			<label htmlFor="greased">Greased</label>

			<input type="radio" name="ungreased" value="ungreased" id="ungreased" />
			<label htmlFor="ungreased">Ungreased</label>

			<input type="radio" name="all" value="all" id="all" />
			<label htmlFor="all">All</label>
		</div>
	);
}

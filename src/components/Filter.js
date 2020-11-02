import React from "react";

export default function Filter({ selectFilter }) {
	const handleChange = (e) => {
		selectFilter(e.target.value);
	};

	return (
		<div>
			<input
				type="radio"
				name="greased"
				value="greased"
				id="greased"
				onChange={handleChange}
			/>
			<label htmlFor="greased">Greased</label>

			<input
				type="radio"
				name="greased"
				value="ungreased"
				id="ungreased"
				onChange={handleChange}
			/>
			<label htmlFor="ungreased">Ungreased</label>

			<input
				type="radio"
				name="greased"
				value="all"
				id="all"
				onChange={handleChange}
			/>
			<label htmlFor="all">All</label>
		</div>
	);
}

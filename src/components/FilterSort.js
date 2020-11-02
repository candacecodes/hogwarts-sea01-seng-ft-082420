import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";

export default function FilterSort({ selectFilter }) {
	return (
		<div>
			<Filter selectFilter={selectFilter} />
			<Sort />
		</div>
	);
}

import React from "react";
import SeriesData from "./api/SeriesData.json";
import SeriesCard from "./assets/SeriesCard";
const App = () => {
	return (
		<div>
			<ul>
				{SeriesData.map((curlElem) => (
					<SeriesCard key={curlElem.id} curlElem={curlElem} />
				))}
			</ul>
		</div>
	);
};

export default App;

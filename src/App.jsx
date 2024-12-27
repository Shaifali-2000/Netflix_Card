import React from "react";
import SeriesData from "./api/SeriesData.json";
import SeriesCard from "./assets/SeriesCard";
import Profile from "./assets/Profile.Jsx";
import { EventPropagation } from "./assets/EventPropagation";
const App = () => {
	return (
		<div>
			<ul>
				{SeriesData.map((curlElem) => (
					<SeriesCard key={curlElem.id} data={curlElem} />
				))}
				<Profile></Profile>
				<EventPropagation />
			</ul>
		</div>
	);
};

export default App;

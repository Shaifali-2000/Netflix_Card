import React from "react";
import SeriesData from "./api/SeriesData.json";
import SeriesCard from "./assets/SeriesCard";
import Profile from "./assets/Profile.Jsx";
import { EventPropagation } from "./assets/EventPropagation";

import { SwitchToggle } from "./assets/Project/switchToggle";

const App = () => {
	return (
		<div>
			<ul>
				{/* {
				SeriesData.map((curlElem) => (
					<SeriesCard key={curlElem.id} data={curlElem} />
				))}
				<Profile></Profile>
				<EventPropagation />
			 */}
				<SwitchToggle />
			</ul>
		</div>
	);
};

export default App;

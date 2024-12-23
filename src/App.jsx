import React from "react";
import SeriesData from "./api/SeriesData.json";

const App = () => {
	return (
		<div>
			<ul>
				{SeriesData.map((curlElem) => {
					return (
						<li key={curlElem.id}>
							<img
								src={curlElem.img_url}
								alt={curlElem.name}
								width="40%"
								height="40%"
							/>
							<h2>Name: {curlElem.name}</h2>
							<h3>Rating: {curlElem.rating}</h3>
							<p>Description: {curlElem.description}</p>
							<p>Cast: {curlElem.cast}</p>
							<p>Genre: {curlElem.genre}</p>
							<a href={curlElem.watch_url}>
								<button>Watch Now</button>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;

import React from "react";
const SeriesCard = (props) => {
	return (
		<li key={props.curlElem.id}>
			<img
				src={props.curlElem.img_url}
				alt={props.curlElem.name}
				width="40%"
				height="40%"
			/>
			<h2>Name: {props.curlElem.name}</h2>
			<h3>Rating:{props.curlElem.rating}</h3>
			<p>Description: {props.curlElem.description}</p>
			<p>Cast: {props.curlElem.cast}</p>
			<p>Genre: {props.curlElem.genre}</p>
			<a href={props.curlElem.watch_url}>
				<button>Watch Now</button>
			</a>
		</li>
	);
};
export default SeriesCard;

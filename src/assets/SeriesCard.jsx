import React from "react";

const SeriesCard = (props) => {
	const { data } = props;

	// Ensure `data` is valid
	if (!data) {
		return <p>Data is not available.</p>;
	}

	return (
		<ul>
			<li>
				<img src={data.img_url} alt={data.name} width="40%" height="40%" />
				<h2>Name: {data.name}</h2>
				<h3>Rating: {data.rating}</h3>
				<p>Description: {data.description}</p>
				<p>Cast: {data.cast}</p>
				<p>Genre: {data.genre}</p>
				<a href={data.watch_url}>
					<button>Watch Now</button>
				</a>
			</li>
		</ul>
	);
};

export default SeriesCard;

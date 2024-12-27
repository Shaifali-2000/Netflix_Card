// ProfileCard.jsx
import React from "react";

const ProfileCard = ({ name, age, children }) => {
	return (
		<div>
			<h2>Name: {name}</h2>
			<p>Age: {age}</p>
			{children}
		</div>
	);
};

export default ProfileCard;

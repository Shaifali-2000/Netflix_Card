import React from "react";

export const EventProps = () => {
	const handleClick = () => {
		alert("handleclick");
	};
	return (
		<>
			<Welcome onClick={handleClick} />
		</>
	);
};

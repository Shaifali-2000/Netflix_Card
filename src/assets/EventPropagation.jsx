import React from "react";
export const EventPropagation = () => {
	const HandleParent = () => {
		console.log("parent");
	};
	const HandleChild = () => {
		console.log("child");
	};
	return (
		<>
			<section className="main">
				<div
					className="shaifali"
					onClick={HandleParent}
					style={{ backgroundColor: "orange" }}
				>
					<button className="shaifu" onClick={HandleChild}>
						Shaifu
					</button>
				</div>
			</section>
		</>
	);
};

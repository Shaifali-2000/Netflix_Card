import React, { useState } from "react";
//import { SwitchToggle } from "./src/assets/Project/SwitchToggle.css";
import "./SwitchToggle.css";
export const SwitchToggle = () => {
	const [isOn, setIsOn] = useState(true);
	const handleToggleSwitch = () => {
		setIsOn(!isOn);
	};
	return (
		<>
			<div className="Toggle-Switch" onClick={handleToggleSwitch}>
				<div className={`Switch ${isOn ? "On" : "Off"}`}>
					<span className="Switch-State">{isOn ? "On" : "Off"}</span>
				</div>
			</div>
		</>
	);
};

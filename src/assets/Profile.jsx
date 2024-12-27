import React from "react";
import ProfileCard from "./ProfileCard";

export const Profile = () => {
	return (
		<>
			<ProfileCard name="Shaifali" age={24}>
				<div>Hey, I am Shaifali</div>
			</ProfileCard>
			<ProfileCard name="Vaibhav" age={24}>
				<div>Hey, I am Vaibhav</div>
			</ProfileCard>
		</>
	);
};

export default Profile;

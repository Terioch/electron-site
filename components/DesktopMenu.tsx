import React from "react";

interface Props {}

const DesktopMenu: React.FC<Props> = ({}) => {
	return (
		<ul className="flex space-x-4">
			<li className="cursor-pointer">Home</li>
			<li className="cursor-pointer">About</li>
			<li className="cursor-pointer">Contact</li>
		</ul>
	);
};

export default DesktopMenu;

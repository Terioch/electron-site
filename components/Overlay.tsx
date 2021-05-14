import React from "react";

interface Props {}

const Overlay: React.FC<Props> = () => {
	return (
		<div className="z-10 bg-black w-full h-full fixed inset-0 opacity-30"></div>
	);
};

export default Overlay;

import React from "react";

interface Props {
	opacity?: string;
}

const Overlay: React.FC<Props> = ({ opacity }) => {
	return (
		<div
			className={`z-10 bg-black w-full h-full fixed inset-0 opacity-${
				opacity || "40"
			}`}
		></div>
	);
};

export default Overlay;

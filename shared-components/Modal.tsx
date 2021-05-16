import React from "react";
import SharedComponents from "./SharedComponents";

interface Props {}

const Modal: React.FC = ({ children }) => {
	const { Overlay } = SharedComponents;

	return (
		<div className="flex justify-center items-center absolute w-full h-full">
			<Overlay />
			<div className="z-20 py-4 px-6 bg-gray-50 absolute overflow-auto rounded">
				{children}
			</div>
		</div>
	);
};

export default Modal;

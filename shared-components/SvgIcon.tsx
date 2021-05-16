import React from "react";

interface Props {
	onClick?: () => void;
	className?: string;
	height?: string;
	width?: string;
}

const SvgIcon: React.FC<Props> = ({
	children,
	onClick,
	className,
	height,
	width,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "25"}
			height={height || "25"}
			fill="currentColor"
			className={`cursor-pointer ${className}`}
			viewBox="0 0 16 16"
			onClick={onClick}
		>
			{children}
		</svg>
	);
};

export default SvgIcon;

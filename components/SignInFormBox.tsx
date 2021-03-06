import React from "react";
import SharedComponents from "../shared-components/SharedComponents";

interface Props {
	name: string;
	logoPath: string;
	background: string;
	handleAuth: (name: string) => void;
}

const SignInFormBox: React.FC<Props> = ({
	name,
	logoPath,
	background,
	handleAuth,
}) => {
	const { SvgIcon } = SharedComponents;

	return (
		<div
			className={`flex my-1 rounded p-3 w-60 cursor-pointer ${background}`}
			onClick={() => handleAuth(name)}
		>
			<SvgIcon className="text-white">
				<path d={logoPath} />
			</SvgIcon>
			<div className="flex-1 text-center text-white">
				<p>{name}</p>
			</div>
		</div>
	);
};

export default SignInFormBox;

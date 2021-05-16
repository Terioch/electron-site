import {} from "react";
import Components from "./Components";
import SharedComponents from "../shared-components/SharedComponents";
import { authProviders } from "../auth/authProviders";

interface Props {
	handleFormDisplay: () => void;
}

const SignInForm: React.FC<Props> = ({ handleFormDisplay }) => {
	const { SignInFormBox } = Components;
	const { Modal, SvgIcon } = SharedComponents;

	return (
		<Modal>
			<section className="flex mb-6 space-x-3 flex justify-center">
				<h1 className="text-2xl text-center text-gray-700 mt-4">
					Sign in to <br /> Begin Purchasing.
				</h1>
				<SvgIcon
					className="absolute right-2 top-2 text-gray-400 hover:text-gray-500"
					height="16"
					width="16"
					onClick={handleFormDisplay}
				>
					<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
				</SvgIcon>
			</section>
			<section className="flex flex-col">
				{authProviders.map(provider => (
					<SignInFormBox
						name={provider.name}
						logoPath={provider.logoPath}
						background={provider.background}
					/>
				))}
			</section>
		</Modal>
	);
};

export default SignInForm;

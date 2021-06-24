import firebase from "firebase/app";
import "firebase/auth";
import firebaseClient from "../firebase/config";
import Components from "./Components";
import SharedComponents from "../shared-components/SharedComponents";
import { useAuth } from "../auth/auth";
import { authProviders } from "../auth/authProviders";

interface Props {
	handleFormDisplay: () => void;
}

const SignInForm: React.FC<Props> = ({ handleFormDisplay }) => {
	const { SignInFormBox } = Components;
	const { Modal, SvgIcon } = SharedComponents;
	const { user } = useAuth();
	firebaseClient();

	console.log(user);

	// Handle various sign-in methods
	const handleAuth = async (name: string) => {
		let provider = null;

		switch (true) {
			case name === "Google":
				provider = new firebase.auth.GoogleAuthProvider();
				break;
			case name === "Github":
				provider = new firebase.auth.GithubAuthProvider();
				break;
			case name === "Facebook":
				provider = new firebase.auth.FacebookAuthProvider();
				break;
		}

		const auth = firebase.auth().signInWithPopup(provider);
		await auth
			.then(user => {
				localStorage.setItem("user", JSON.stringify(user));
				window.location.href = "/";
			})
			.catch(err => {
				console.error(err.message);
			});
	};

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
						key={provider.name}
						name={provider.name}
						logoPath={provider.logoPath}
						background={provider.background}
						handleAuth={handleAuth}
					/>
				))}
			</section>
		</Modal>
	);
};

export default SignInForm;

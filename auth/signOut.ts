import firebase from "firebase";

export const handleSignOut = async () => {
	await firebase.auth().signOut();
	localStorage.removeItem("user");
	window.location.href = "/";
};

import React, {
	useState,
	useEffect,
	useContext,
	createContext,
} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseClient from "../firebase/config";

const AuthContext = createContext({ user: null });

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState(null);
	firebaseClient();

	// Handle user authentication state
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("user"));
		if (data) setUser(data.user);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

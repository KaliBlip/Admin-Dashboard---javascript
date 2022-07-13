import { createContext } from "react";

const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
});

export default UserContext;

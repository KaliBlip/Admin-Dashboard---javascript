import { useState } from "react";
import UserContext from "./user-context";

function UserProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;

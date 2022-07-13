import { Outlet } from "react-router-dom";

import styles from "./authentication.module.scss";

function Authentication() {
	return (
		<div className={styles.authentication}>
			<Outlet />
		</div>
	);
}

export default Authentication;

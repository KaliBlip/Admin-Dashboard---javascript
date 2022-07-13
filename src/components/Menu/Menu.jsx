import { NavLink } from "react-router-dom";

import styles from "./menu.module.scss";

function MainMenu() {
	// const activeLink = ({ isActive }) => (isActive ? styles.active : "");
	const activeLink = ({ isActive }) =>
		isActive ? `${styles.option} ${styles.active}` : styles.option;

	return (
		<div className={styles["contenedor-principal-flex"]}>
			<h4 className={styles["titulo-barra-menu"]}>Settings</h4>
			{/* <div className={styles.logoContainer}>
				<img
					src={doctorImage}
					className={styles.doctorImage}
					alt="Doctor"
				/>
			</div> */}

			<div className={styles.scrollable}>
				<div className={styles.navigation}>
					<span className={styles.navigationTitle}>Your Preferences</span>
					<NavLink className={activeLink} to="/overview">
						General
					</NavLink>
					<NavLink className={activeLink} to="/actividad">
						Notification
					</NavLink>
					<NavLink className={activeLink} to="/patients">
						Security
					</NavLink>
					<span className={styles.navigationTitle}>Account and Setup</span>
					<NavLink className={activeLink} to="/agenda">
						Account Defaults
					</NavLink>
					<NavLink className={activeLink} to="/notas">
						Users & teams
					</NavLink>
					<span className={styles.navigationTitle}>Data Management</span>
					<NavLink className={activeLink} to="/caja">
						Properties
					</NavLink>
					<NavLink className={activeLink} to="/inventario">
						Objects
					</NavLink>
					<NavLink className={activeLink} to="/logistica">
						Import & Export
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default MainMenu;

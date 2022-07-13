import { useState } from "react";

//routing
import { Link } from "react-router-dom";
//icons
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
//components
import Navigation from "../Navigation/Navigation";
import AccountDropdown from "../AccountDropdown/AccountDropdown";

//styles
import styles from "./header.module.scss";

function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const showMenuHandler = () =>
		setShowMenu((prevShowMenuState) => !prevShowMenuState);
	return (
		<div className={styles.header}>
			<Navigation />
			<div className={styles.navActions}>
				<AiOutlineBell style={{ fontSize: "1.5rem" }} />

				<Link to="user-preferences">
					<IoSettingsOutline
						style={{ fontSize: "1.5rem", color: "#fff" }}
					/>
				</Link>

				<div
					className={styles.accountMenuMainContainer}
					onClick={showMenuHandler}
				>
					<button className={styles.accountMenuBtn}>
						<FaRegUserCircle
							style={{ fontSize: "1.5rem", color: "#fff" }}
						/>
					</button>
					{showMenu && <AccountDropdown />}
				</div>
			</div>
		</div>
	);
}

export default Header;

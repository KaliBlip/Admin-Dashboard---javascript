import UserAvatar from "../../assets/user-avatar.webp";
import styles from "./accountDropdown.module.scss";

function AccountDropdown() {
	return (
		<div className={styles.accountExpansion}>
			<div className={styles.userPreferences}>
				<img
					src={UserAvatar}
					className={styles.userAvatar}
					alt="User profile"
				/>
				<div className={styles["user-info"]}>
					<span className={styles["user-info-name"]}>
						Scarlett Johanson
					</span>
					<span className={styles["user-info-email"]}>
						sjhanson@gmail.com
					</span>
					<span className={styles["user-info-preferences"]}>
						Profile & Preferences
					</span>
				</div>
			</div>
			<div className={styles.navAccount}>
				<span className={styles["navAccount-accountName"]}>Bubbly inc</span>
				<span className={styles["navAccount-portalId"]}>20057720</span>
			</div>
			<div className={styles.navAccountGettingStartedProgress}>3</div>
			<div className={styles.userpreferences}>4</div>
			<div className={styles["navAccountMenu-bottom"]}>
				<span>Sign out</span>
				<span>Privacy policy</span>
			</div>
		</div>
	);
}

export default AccountDropdown;

import styles from "./recentUpdate.module.scss";

function RecentUpdate({ imgUrl, userName, message, updateTime }) {
	return (
		<div className={styles.update}>
			<div className={styles["profile-photo"]}>
				<img src={imgUrl} alt="" />
			</div>
			<div className={styles.message}>
				<p>
					<b>{userName}</b> {message}
				</p>
				<small className={styles["text-muted"]}>
					{updateTime} Minutes Ago
				</small>
			</div>
		</div>
	);
}

export default RecentUpdate;
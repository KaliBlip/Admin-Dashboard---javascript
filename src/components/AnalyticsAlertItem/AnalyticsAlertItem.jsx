
import styles from "./analyticsAlertItem.module.scss";

function AnalyticsAlertItem({
	icon,
	iconBgColor,
	title,
	updateTime,
	percentage,
	itemAmount,
}) {
	const percentageClass = percentage.includes("+")
		? styles.success
		: styles.danger;

	const iconBgClass = iconBgColor.startsWith("primary")
		? styles.bgPrimary
		: iconBgColor.startsWith("success")
		? styles.bgSuccess
		: styles.bgDanger;
	return (
		<div className={styles.item}>
			<div className={`${styles.icon} ${iconBgClass}`}>
				<span className="material-icons-sharp">{icon}</span>
			</div>
			<div className={styles.right}>
				<div className="info">
					<h3>{title}</h3>
					<small className={styles["text-muted"]}>
						Last {updateTime} Hours
					</small>
				</div>
				<h5 className={percentageClass}>{percentage}%</h5>
				<h3>{itemAmount}</h3>
			</div>
		</div>
	);
}

export default AnalyticsAlertItem;
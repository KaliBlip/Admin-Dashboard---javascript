import Card from "../Card/Card";
import styles from "./insightCard.module.scss";

function InsightCard({ icon, title, amount, percentage }) {
	const spanClasses = title.toLocaleLowerCase().includes("expenses")
		? styles.expenses
		: title.toLocaleLowerCase().includes("income")
		? styles.income
		: "";

	const circleClasses = title.toLocaleLowerCase().includes("expenses")
		? styles.circleExpenses
		: title.toLocaleLowerCase().includes("income")
		? styles.circleIncome
		: styles.circleSales;
	return (
		<Card className={styles.cardInsight}>
			<span className={`material-icons-sharp ${spanClasses}`}>{icon}</span>
			<div className={styles.middle}>
				<div className={styles.left}>
					<h3>{title}</h3>
					<h1>${amount}</h1>
				</div>
				<div className={styles.progress}>
					<svg>
						<circle
							className={circleClasses}
							cx="38"
							cy="38"
							r="36"
						></circle>
					</svg>
					<div className={styles.number}>
						<p>{percentage}%</p>
					</div>
				</div>
			</div>
			<small className={styles["text-muted"]}>Last 24 hours</small>
		</Card>
	);
}

export default InsightCard;
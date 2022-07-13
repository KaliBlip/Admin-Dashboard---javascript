//components
import AnalyticsAlertItem from "../AnalyticsAlertItem/AnalyticsAlertItem";

//styles
import styles from "./analyticsAlerts.module.scss";

function AnalyticsAlerts() {
	return (
		<div className={styles.analyticsAlerts}>
			<h2>Sales Analytics</h2>
			<AnalyticsAlertItem
				icon="shopping_cart"
				iconBgColor="primary"
				title="ONLINE ORDERS"
				updateTime="24"
				percentage="+39"
				itemAmount="3839"
			/>
			<AnalyticsAlertItem
				icon="local_mall"
				iconBgColor="danger"
				title="OFFLINE ORDERS"
				updateTime="12"
				percentage="-17"
				itemAmount="1110"
			/>

			<AnalyticsAlertItem
				icon="person"
				iconBgColor="success"
				title="NEW CUSTOMERS"
				updateTime="24"
				percentage="+25"
				itemAmount="849"
			/>
		</div>
	);
}

export default AnalyticsAlerts;
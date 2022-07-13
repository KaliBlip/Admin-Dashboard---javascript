//components
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import InsightCard from "../../components/InsightCard/InsightCard";
import AnalyticsAlerts from "../../components/AnalyticsAlerts/AnalyticsAlerts";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";

// import ProfilePic from "../../assets/profile-arina.jpg";

//styles
import styles from "./dashboard.module.scss";

function Dashboard() {
	const profilePic = 'https://raw.githubusercontent.com/zac1591/CRM/master/src/assets/profile-3.jpg';
	return (
		<div className={styles.container}>
			<MenuDashboard />
			<main>
				<h1>Dashboard</h1>
				<div className={styles.date}>
					<input type="date" name="datepicker" />
				</div>
				<div className={styles.insights}>
					<InsightCard
						icon="analytics"
						title="Total Sales"
						amount="25,024"
						percentage="81"
					/>
					<InsightCard
						icon="bar_chart"
						title="Total Expenses"
						amount="14,160"
						percentage="62"
					/>
					<InsightCard
						icon="stacked_line_chart"
						title="Total Income"
						amount="25,024"
						percentage="44"
					/>
				</div>

				<section className={styles.recentEntries}>
					<h2>Recent Orders</h2>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Product Number</th>
								<th>Payments</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Foldable Mini Drone</td>
								<td>85631</td>
								<td>Due</td>
								<td className="warning">Pending</td>
								<td className="primary">Details</td>
							</tr>
							<tr>
								<td>Foldable Mini Drone</td>
								<td>85631</td>
								<td>Due</td>
								<td className="warning">Pending</td>
								<td className="primary">Details</td>
							</tr>
							<tr>
								<td>Foldable Mini Drone</td>
								<td>85631</td>
								<td>Due</td>
								<td className="warning">Pending</td>
								<td className="primary">Details</td>
							</tr>
						</tbody>
					</table>
					<a href="#">Show All</a>
				</section>
			</main>
			<div className={styles.right}>
				<div className={styles.top}>
					<button id="menu-btn">
						<span className="material-icons-sharp"> menu </span>
					</button>
					<div className={styles["theme-toggler"]}>
						<span className="material-icons-sharp active">
							light_mode
						</span>
						<span className="material-icons-sharp"> dark_mode </span>
					</div>
					<div className={styles.profile}>
						<div className={styles.info}>
							<p>
								Hey, <b>Arina</b>
							</p>
							<small className={styles["text-muted"]}>Admin</small>
						</div>
						<div className={styles["profile-photo"]}>
							<img src={profilePic} alt="" />
						</div>
					</div>
				</div>
				<RecentUpdates />
				<AnalyticsAlerts />
				<div className={styles["add-product"]}>
					<div>
						<span className="material-icons-sharp"> add </span>
						<h3>Add Product</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
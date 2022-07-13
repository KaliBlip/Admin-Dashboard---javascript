//components
import RecentUpdate from "../RecentUpdate/RecentUpdate";

//assets
//import ProfileUpdate2 from "../../assets/profile-2.jpg";
//import ProfileUpdate3 from "../../assets/profile-3.jpg";
//import ProfileUpdate4 from "../../assets/profile-4.jpg";

//styles
import styles from "./recentUpdates.module.scss";

function RecentUpdates() {
	const profileUpdate2 = 'https://raw.githubusercontent.com/zac1591/CRM/master/src/assets/profile-2.jpg';
	const profileUpdate3 = 'https://raw.githubusercontent.com/zac1591/CRM/master/src/assets/profile-3.jpg';
	const profileUpdate4 = 'https://raw.githubusercontent.com/zac1591/CRM/master/src/assets/profile-4.jpg';
	const updateMessage = "received his order of Night lion tech GPS drone";
	return (
		<div className={styles.recentUpdates}>
			<h2>Recent Updates</h2>

			<div className={styles.updates}>
				<RecentUpdate
					imgUrl={profileUpdate2}
					userName="Mike Simons"
					message={updateMessage}
					updateTime="15"
				/>

				<RecentUpdate
					imgUrl={profileUpdate3}
					userName="Tiffany Jensen"
					message={updateMessage}
					updateTime="2"
				/>

				<RecentUpdate
					imgUrl={profileUpdate4}
					userName="Anne Taylor"
					message={updateMessage}
					updateTime="5"
				/>
			</div>
		</div>
	);
}

export default RecentUpdates;
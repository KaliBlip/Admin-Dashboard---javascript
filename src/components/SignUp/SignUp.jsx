import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

//components
import Button from "../Button/Button";
import Input from "../Input/Input";

//firebase
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

//assets
import sampleImg from "../../assets/background-img-6.jpeg";

import styles from "./signUp.module.scss";
import UserContext from "../../store/user-context";

function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	});

	const { setCurrentUser } = useContext(UserContext);

	// useEffect(() => {
	// 	const passwordAlertTimer = setTimeout(() => {
	// 		console.log("checking passwords equaty");
	// 		setPasswordsDontMatch(prevPassState => !prevPassState);
	// 	}, 500);

	// 	return () => {
	// 		console.log("cleaned");
	// 		clearTimeout(passwordAlertTimer);
	// 	};
	// }, []);

	const signUpHandler = async (data, event) => {
		const { password, confirmPassword, email, displayName } = data;

		//validate that passwords matches
		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}

		//is the entered email and password already authenticated?
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			// console.log(user);
			await createUserDocumentFromAuth(user, { displayName });
			setCurrentUser(user);
			event.target.reset();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log("User creation encountered an error", error);
			}
		}

		//create a user document from what this returns
	};

	return (
		<>
			<div className={styles.box}>
				<div className={styles.loginArea}>
					<header className={styles.header}>
						<h1 style={{ color: "#008B95", letterSpacing: "1.5px" }}>
							FINANCES
						</h1>
					</header>
					<h1 className={styles.headerLogin}>Sign Up</h1>
					<form onSubmit={handleSubmit(signUpHandler)}>
						<Input
							label="Full Name"
							id="displayName"
							name="displayName"
							register={register}
							required
							type="text"
							className={styles.inputColor}
						/>
						<p className={styles.feedbackError}>
							{errors.fullName?.message}
						</p>
						<Input
							label="Email"
							id="email"
							name="email"
							register={register}
							required
							type="email"
							className={styles.inputColor}
						/>
						<p className={styles.feedbackError}>
							{errors.email?.message}
						</p>
						<Input
							label="Password"
							id="password"
							name="password"
							register={register}
							required
							type="password"
							className={styles.inputColor}
							isPassword
						/>
						<p className={styles.feedbackError}>
							{errors.password?.message}
						</p>
						<Input
							label="Confirm Password"
							id="confirmPassword"
							name="confirmPassword"
							register={register}
							required
							type="password"
							className={styles.inputColor}
							isPassword
						/>
						<p className={styles.feedbackError}>
							{errors.confirmPassword?.message}
						</p>

						<div className={styles.formActions}>
							<Button type="submit">Sign Up</Button>
						</div>
					</form>
					<div className={styles.loginFooter}>
						<p>Already have an account?</p>
						<Link to="/authentication/sign-in">Sign in</Link>
					</div>
				</div>
				<div className={styles.sliderArea}>
					<img
						src={sampleImg}
						style={{ width: "auto", height: "100%" }}
						alt=""
					/>
				</div>
			</div>
		</>
	);
}

export default SignUp;

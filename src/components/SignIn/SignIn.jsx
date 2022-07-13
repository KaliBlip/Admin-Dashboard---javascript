import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

//components
import Button from "../Button/Button";
import Input from "../Input/Input";

//context
import UserContext from "../../store/user-context";

//assets
import sampleImg from "../../assets/background-img-6.jpeg";

import styles from "./signIn.module.scss";

function SignIn() {
	const { setCurrentUser, currentUser } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			email: "",
			password: ""
		}
	});
	const logGoogleUserhandler = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const loginHandler = async (data, event) => {
		event.preventDefault();
		console.log(data);
		const { email, password } = await data;

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			setCurrentUser(user);
			event.target.reset();
			console.log(currentUser);
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("The entered password is incorrect");
					break;
				case "auth/user-not-found":
					alert("No user asociated with this email");
					break;
				default:
					console.log(error);
			}
		}
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
					<h1 className={styles.headerLogin}>Log in</h1>
					<form onSubmit={handleSubmit(loginHandler)}>
						<Input
							label="Email"
							id="email"
							name="email"
							register={register}
							required
							type="email"
							className={styles.inputColor}
						/>

						<Input
							label="Password"
							id="password"
							name="password"
							register={register}
							required
							type="password"
							className={styles.inputColor}
						/>

						<div className={styles.formActions}>
							<Button type="submit">Sign In</Button>
							<div className={styles.divider}>
								<h5>Or</h5>
							</div>
							<Button
								type="button"
								isGoogleSignIn
								onClick={logGoogleUserhandler}
							>
								Sign in with Google
							</Button>
						</div>
					</form>
					<div className={styles.loginFooter}>
						<p>Don't have an account?</p>
						<Link to="/authentication/sign-up">Sign up</Link>
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

export default SignIn;

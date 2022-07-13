//styles
import styles from "./Button.module.scss";

function Button({ children, isGoogleSignIn, inverted, small, ...otherProps }) {
  const buttonStyles = `${inverted ? styles.inverted : ""} ${
    isGoogleSignIn ? styles["google-sign-in"] : ""
  } ${styles.button} ${small ? styles.small : ""}`;

  return (
    <button className={buttonStyles} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;

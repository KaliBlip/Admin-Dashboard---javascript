import styles from "./card.module.scss";

function Card({ children, className }) {
  const classes = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Card;

import { Link } from "react-router-dom";
import styles from "./navigation.module.scss";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link to="/">Dashboard</Link>
      <Link to="contacts">Contactos</Link>
    </nav>
  );
}

export default Navigation;

import { useNavigate } from "react-router-dom";
//components
import Button from "../../components/Button/Button";

//styles
import styles from "./nothingToSee.module.scss";

function NothingToSee() {
  const navigate = useNavigate();

  const goBackHomeHandler = () => {
    navigate("/");
  };
  return (
    <section className={styles.wrapper}>
      <Button onClick={goBackHomeHandler}>Go Back Home</Button>
    </section>
  );
}

export default NothingToSee;

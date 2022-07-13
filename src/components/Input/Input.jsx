import styles from "./Input.module.scss";

const Input = ({ label, type, register, required, name, id, className }) => {
  const customClass = className ? className : "";
  return (
    <div className={`${styles.formControl} ${customClass}`}>
      <input
        {...register(name, {
          required: "This field is required",
          minLength: {
            value: 1,
            message: "Minimum length is 1 character"
          }
        })}
        type={type}
        id={id}
        required={required}
      />
      <label htmlFor={id} className={styles.labelTag}>
        <span className={styles.contentTag}>{label}</span>
      </label>
    </div>
  );
};

export default Input;

//redux
import { useDispatch } from "react-redux";
import { addLead } from "../../redux/lead/lead.actions";
//react hook form
import { useForm } from "react-hook-form";

//component
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import styles from "./CreateContact.module.scss";

function CreateContact({ onHideCreateContact }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm();

  const submitButtonHandler = (data, event) => {
    event.preventDefault();
    const buttonName = event.target.getAttribute("id");

    const leadData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone_number: data.phoneNumber
    };
    dispatch(addLead(leadData));
    // event.target.reset();
    onHideCreateContact();
  };

  //onClick={handleSubmit(submitButtonHandler)}
  return (
    <Modal>
      <div className={styles.header}>
        <h3>Create contact</h3>
      </div>
      <form onSubmit={handleSubmit(submitButtonHandler)}>
        <Input
          label="Email"
          name="email"
          id="email"
          register={register}
          required
          type="email"
        />
        <Input
          label="First Name"
          name="firstName"
          id="firstName"
          register={register}
          required
          type="text"
        />
        <Input
          label="Last Name"
          name="lastName"
          id="lastName"
          register={register}
          required
          type="text"
        />
        <Input
          label="Job Title"
          name="jobTitle"
          id="jobTitle"
          register={register}
          required
          type="text"
        />
        <Input
          label="Phone Number"
          name="phoneNumber"
          id="phoneNumber"
          register={register}
          required
          type="text"
        />

        <div className={styles.formActions}>
          <Button inverted small type="submit" id="create-contact">
            Create Contact
          </Button>
          <Button small type="button">
            Create and add another
          </Button>
          <Button small type="button" onClick={onHideCreateContact}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default CreateContact;

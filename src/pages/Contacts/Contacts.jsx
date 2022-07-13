import { useState } from "react";
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import CreateContact from "../../components/CreateContact/CreateContact";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import styles from "./contacts.module.scss";

function Contacts() {
  const [createContact, setCreateContact] = useState(false);

  const showCreateContactHandler = () => setCreateContact(true);
  const hideCreateContactHandler = () => setCreateContact(false);

  return (
    <section className={styles.contacts}>
      {createContact && (
        <CreateContact onHideCreateContact={hideCreateContactHandler} />
      )}
      <ActiveMenu
        createButtonLabel="Create contact"
        onShowCreateContact={showCreateContactHandler}
      />
      <div className={styles.contactsList}>
        <LeadsTable />
      </div>
    </section>
  );
}

export default Contacts;

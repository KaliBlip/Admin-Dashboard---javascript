import { IoMdArrowDropdown } from "react-icons/io";

import Button from "../Button/Button";

import styles from "./ActiveMenu.module.css";

function ActiveMenu({ createButtonLabel, onShowCreateContact }) {
  return (
    <div className={styles.activeMenu}>
      <div className={styles.menuCurrentpage}>
        Contacts <IoMdArrowDropdown />
      </div>
      <div className={styles.activeMenuActions}>
        <Button type="button" small>
          Actions
        </Button>
        <Button type="button" small>
          Import
        </Button>
        <Button type="button" small inverted onClick={onShowCreateContact}>
          {createButtonLabel}
        </Button>
      </div>
    </div>
  );
}

export default ActiveMenu;

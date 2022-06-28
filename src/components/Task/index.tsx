// CSS Import
import styles from "./styles.module.scss";

// Phosphor Icons
import { Trash } from "phosphor-react";

export function Task({ taskID = "abc" }) {
  return (
    <div className={styles.task__container}>
      <div className={styles.task__content}>
        <input type="checkbox" id={taskID} className={styles.hidden__box} />
        <label htmlFor={taskID} className={styles.check__label}>
          <span className={styles.check__label__box}></span>
          <span className={styles.check__label__text}>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </span>
        </label>
      </div>
      <button title="Delete Button">
        <Trash size={20} />
      </button>
    </div>
  );
}

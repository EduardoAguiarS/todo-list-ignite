// CSS Import
import styles from "./styles.module.scss";

// Phosphor Icons
import { Trash } from "phosphor-react";

interface TaskProps {
  taskID: string;
  text: string;
}

export function Task({ taskID, text }: TaskProps) {
  return (
    <div className={styles.task__container}>
      <div className={styles.task__content}>
        <input type="checkbox" id={taskID} className={styles.hidden__box} />
        <label htmlFor={taskID} className={styles.check__label}>
          <span className={styles.check__label__box}></span>
          <span className={styles.check__label__text}>{text}</span>
        </label>
      </div>
      <button title="Delete Button">
        <Trash size={20} />
      </button>
    </div>
  );
}

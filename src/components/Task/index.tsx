// CSS Import
import styles from "./styles.module.scss";

// Phosphor Icons
import { Trash } from "phosphor-react";

interface TaskProps {
  taskID: string;
  text: string;
  removeTask: (id: string) => void;
  setCompletedTask: (id: string) => void;
}

export function Task({
  taskID,
  text,
  removeTask,
  setCompletedTask
}: TaskProps) {
  function handleDeleteTask() {
    removeTask(taskID);
  }

  function handleSetCompletedTask() {
    setCompletedTask(taskID);
  }

  return (
    <div className={styles.task__container}>
      <div className={styles.task__content}>
        <input
          type="checkbox"
          id={taskID}
          className={styles.hidden__box}
          onClick={handleSetCompletedTask}
        />
        <label htmlFor={taskID} className={styles.check__label}>
          <span className={styles.check__label__box}></span>
          <span className={styles.check__label__text}>{text}</span>
        </label>
      </div>
      <button title="Delete Button" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}

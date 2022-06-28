//CSS Import
import styles from "./styles.module.scss";

export function TasksHeader() {
  return (
    <header className={styles.tasks__header}>
      <div className={styles.created__tasks}>
        <strong>
          Tarefas criadas <span>5</span>
        </strong>
      </div>
      <div className={styles.completed}>
        <strong>
          Concluídas <span>0 de 5</span>
        </strong>
      </div>
    </header>
  );
}

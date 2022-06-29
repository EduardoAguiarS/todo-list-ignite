//CSS Import
import styles from "./styles.module.scss";

interface TasksHeaderProps {
  tasksLength: number;
}

export function TasksHeader({ tasksLength }: TasksHeaderProps) {
  return (
    <header className={styles.tasks__header}>
      <div className={styles.created__tasks}>
        <strong>
          Tarefas criadas <span>{tasksLength}</span>
        </strong>
      </div>
      <div className={styles.completed}>
        <strong>
          Concluídas <span>0</span>
        </strong>
      </div>
    </header>
  );
}

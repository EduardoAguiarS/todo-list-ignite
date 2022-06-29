//CSS Import
import styles from "./styles.module.scss";

interface TasksHeaderProps {
  tasksLength: number;
  completedTask: number;
}

export function TasksHeader({ tasksLength, completedTask }: TasksHeaderProps) {
  return (
    <header className={styles.tasks__header}>
      <div className={styles.created__tasks}>
        <strong>
          Tarefas criadas <span>{tasksLength}</span>
        </strong>
      </div>
      <div className={styles.completed}>
        <strong>
          Concluídas{" "}
          <span>
            {tasksLength > 0 ? `${completedTask} de ${tasksLength} ` : 0}
          </span>
        </strong>
      </div>
    </header>
  );
}

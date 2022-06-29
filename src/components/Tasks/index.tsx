//CSS Import
import styles from "./styles.module.scss";

// Components Import
import { TasksHeader } from "../TasksHeader";
import { Task } from "../Task";

// Phosphor Icons
import { ClipboardText } from "phosphor-react";

// React
import { useState } from "react";

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.tasks__container}>
      <TasksHeader />
      <main className={styles.tasks__list}>
        {tasks.length === 0 && (
          <div className={styles.no__tasks}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
        {tasks.map(task => {
          return <Task />;
        })}
      </main>
    </div>
  );
}

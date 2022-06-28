//CSS Import
import styles from "./styles.module.scss";

// Components Import
import { TasksHeader } from "../TasksHeader";

// Phosphor Icons
import { ClipboardText } from "phosphor-react";

export function Tasks() {
  return (
    <div className={styles.tasks__container}>
      <TasksHeader />
      <main className={styles.tasks__list}>
        <div className={styles.no__tasks}>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </main>
    </div>
  );
}

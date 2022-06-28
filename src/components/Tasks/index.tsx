//CSS Import
import { TasksHeader } from "../TasksHeader";
import styles from "./styles.module.scss";

export function Tasks() {
  return (
    <main className={styles.tasks__container}>
      <TasksHeader />
    </main>
  );
}

//CSS Import
import { TasksHeader } from "../TasksHeader";
import styles from "./styles.module.scss";

export function Tasks() {
  return (
    <div className={styles.tasks__container}>
      <TasksHeader />
      <main className={styles.tasks__list}>tasks</main>
    </div>
  );
}

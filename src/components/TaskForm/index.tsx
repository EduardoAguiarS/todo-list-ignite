// CSS Import
import styles from "./styles.module.scss";

// Phosphor Icons
import { PlusCircle } from "phosphor-react";

export function TaskForm() {
  return (
    <div className={styles.form__container}>
      <form className={styles.form__content}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
    </div>
  );
}

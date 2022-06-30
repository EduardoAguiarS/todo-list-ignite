// CSS Import
import styles from "./styles.module.scss";

// Phosphor Icons
import { PlusCircle } from "phosphor-react";

// React
import { ChangeEvent, FormEvent, useState } from "react";

interface TaskFormProps {
  addTask: (task: string) => void;
}

export function TaskForm({ addTask }: TaskFormProps) {
  // Get Input Value
  const [inputValue, setInputValue] = useState<string>("");
  function handleFormTextChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  // Add Task
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    addTask(inputValue);
    setInputValue("");
  }

  return (
    <div className={styles.form__container}>
      <form className={styles.form__content}>
        <input
          value={inputValue}
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleFormTextChange}
        />
        <button type="submit" onClick={handleFormSubmit}>
          Criar
          <PlusCircle className={styles.icon} />
        </button>
      </form>
    </div>
  );
}

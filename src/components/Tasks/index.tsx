//CSS Import
import styles from "./styles.module.scss";

// Components Import
import { TasksHeader } from "../TasksHeader";
import { TaskForm } from "../TaskForm";
import { Task } from "../Task";

// Phosphor Icons
import { ClipboardText } from "phosphor-react";

// React
import { useState } from "react";

interface TaskProps {
  id: string;
  task: string;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addNewTask(task: string) {
    setTasks([
      ...tasks,
      { id: (Date.now() + tasks.length).toString(), task: task }
    ]);
  }

  function removeTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <TaskForm addTask={addNewTask} />
      <div className={styles.tasks__container}>
        <TasksHeader tasksLength={tasks.length} />
        <main className={styles.tasks__list}>
          {tasks.length === 0 && (
            <div className={styles.no__tasks}>
              <ClipboardText size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                taskID={task.id}
                text={task.task}
                removeTask={removeTask}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

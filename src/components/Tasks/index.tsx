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
  completed: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);

  function addNewTask(task: string) {
    setTasks([
      ...tasks,
      {
        id: (Date.now() + tasks.length).toString(),
        task: task,
        completed: false
      }
    ]);
  }

  function setCompletedTask(id: string) {
    tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;

        if (task.completed) {
          setCompletedTasks([...completedTasks, task]);
        } else {
          setCompletedTasks(completedTasks.filter(task => task.id !== id));
        }
      }
    });
  }

  function removeTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
    setCompletedTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <TaskForm addTask={addNewTask} />
      <div className={styles.tasks__container}>
        <TasksHeader
          tasksLength={tasks.length}
          completedTask={completedTasks.length}
        />
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
                setCompletedTask={setCompletedTask}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

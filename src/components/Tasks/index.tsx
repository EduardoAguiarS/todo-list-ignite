//CSS Import
import styles from "./styles.module.scss";

// Components Import
import { TasksHeader } from "../TasksHeader";
import { TaskForm } from "../TaskForm";
import { Task } from "../Task";

// Phosphor Icons
import { ClipboardText } from "phosphor-react";

// React
import { useEffect, useState } from "react";

interface TaskProps {
  id: string;
  task: string;
  completed: boolean;
}

const getLocalTasks = () => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};

const getLocalCompletedTasks = () => {
  return JSON.parse(localStorage.getItem("completedTasks") || "[]");
};

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>(getLocalTasks());
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>(
    getLocalCompletedTasks()
  );

  // Add a new task
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

  // Set Completed Task
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

  // Remove Tasks
  function removeTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
    setCompletedTasks(completedTasks.filter(task => task.id !== id));
  }

  // Add Tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, completedTasks]);

  // Add Completed Tasks to Local Storage
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks, tasks]);

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
                completed={task.completed}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

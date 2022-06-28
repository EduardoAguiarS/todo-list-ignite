import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <Tasks />
    </>
  );
}

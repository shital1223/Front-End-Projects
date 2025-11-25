import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

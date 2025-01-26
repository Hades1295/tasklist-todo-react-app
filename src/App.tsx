import React, { useState, useEffect, useRef } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types/Task";
import { getTasks, saveTasks } from "./utils/storage";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const isInitialLoad = useRef(true); // Track if this is the first render

  useEffect(() => {
    const storedTasks = getTasks();
    console.log(storedTasks);
    setTasks(storedTasks);
  }, []);

  // **Clear all tasks**
  const clearTasks = () => {
    setTasks([]); // Clear tasks from state
    saveTasks([]); // Clear tasks from localStorage
  };
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    saveTasks(tasks);
  }, [tasks]);
  const addTask = (title: string, description: string) => {
    const newTask: Task = { id: Date.now().toString(), title, description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  console.log(tasks);
  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold text-center">TODO List</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        className="border p-2 w-full mt-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TaskForm onAdd={addTask} />
      {tasks.length > 0 && (
        <button
          onClick={clearTasks}
          className="bg-red-500 text-white py-2 px-4 rounded mt-4 w-full"
        >
          Clear All Tasks
        </button>
      )}
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;

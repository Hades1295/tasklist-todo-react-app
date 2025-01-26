import React from "react";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <div className={`flex-1 ${task.completed ? "line-through" : ""}`}>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;

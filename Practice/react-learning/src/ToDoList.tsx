// Import useState hook
import { useState } from "react";

function ToDoList() {
  // Store input value
  const [task, setTask] = useState("");

  // Store all tasks
  const [tasks, setTasks] = useState<string[]>([]);

  // Add task function
  const addTask = () => {
    // Prevent empty input
    if (task.trim() === "") {
      return;
    }

    // Add task into array
    setTasks([...tasks, task]);

    // Clear input field
    setTask("");
  };

  // Delete task
  const deleteTask = (indexToDelete: number) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>My Todo App</h1>

      {/* Input */}

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {/* Add button */}

      <button onClick={addTask}>Add Task</button>

      {/* Task list */}

      <ul>
        {tasks.map((item, index) => {
          return (
            <li key={index}>
              {item}

              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;

// Import CSS file
import "./App.css";

// Import useState hook
import React, { useState } from "react";

function App() {
  // Store input value
  const [task, setTask] = useState("");

  // Store all tasks
  const [tasks, setTasks] = useState<string[]>([]);

  // Function to add task
  const addTask = () => {
    // Prevent empty task
    if (task.trim() === "") {
      return;
    }

    // Add task into array
    setTasks([...tasks, task]);

    // Clear input
    setTask("");
  };

  // Delete task function
  const deleteTask = (indexToDelete: number) => {
    // Filter removes selected item
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);

    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      {/* App heading */}

      <h1 className="todo-title">My To-Do List</h1>

      {/* Input and button section */}

      <div className="input-container">
        <input
          className="task-input"
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Task list */}

      <ul className="task-list">
        {tasks.map((item, index) => {
          return (
            <li key={index} className="task-item">
              {/* Display task */}

              {item}

              {/* Delete Button */}

              <button
                className="delete-btn"
                onClick={() => {
                  deleteTask(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

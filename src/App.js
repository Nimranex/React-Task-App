// import React from "react";
// import Task from "./components/task";

// function App() {
//   return (
//     <div>
//       <h1>Task App</h1>
//       <Task id='1' name="Setup React Project"/>
//       <Task id='2'name="Study about Concepts"/>
//       <Task id='3'name="Create task app"/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]); 
  const [editTask, setEditTask] = useState(null); 

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: updatedName } : task
    );
    setTasks(updatedTasks);
    setEditTask(null); 
  };

  // Delete a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm addTask={addTask} editTask={editTask} updateTask={updateTask} />
      <TaskList tasks={tasks} setEditTask={setEditTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

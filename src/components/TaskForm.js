import React, { useState, useEffect } from "react";

function TaskForm({ addTask, editTask, updateTask }) {
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (editTask) {
      setTaskName(editTask.name);
    } else {
      setTaskName("");
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
      updateTask(editTask.id, taskName);
    } else {
      addTask(taskName);
    }
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <button  style={{
    backgroundColor: "#1565C0", 
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "7px 5px",
    margin: "5px",
    cursor: "pointer",
  }} type="submit">{editTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;

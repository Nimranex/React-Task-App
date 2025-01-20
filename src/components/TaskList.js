import React from "react";
import Task from "./Task";

function TaskList({ tasks, setEditTask, deleteTask }) {
  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            setEditTask={setEditTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

import React from "react";

function Task({ task, setEditTask, deleteTask }) {
  return (
    <li>
      {task.name}
      <button style={{
    backgroundColor: "#4CAF50", // Green background
    color: "white", // White text
    border: "none", // No border
    borderRadius: "5px", // Rounded corners
    padding: "8px 12px", // Padding
    margin: "5px", // Space around buttons
    cursor: "pointer", // Pointer cursor on hover
  }}
 onClick={() => setEditTask(task)}> Edit </button>

      <button  style={{
    backgroundColor: "#f44336", // Red background
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    margin: "5px",
    cursor: "pointer",
  }}
  onClick={() => deleteTask(task.id)}> Delete </button>
    </li>
  );
}

export default Task;

// funtion Task(props){
//     return(
//         <p> "This is my Task {props.id} - {props.name}" </p>
//         <p> "This is my Task {props.id} - {props.name}" </p>
//         <p> "This is my Task {props.id} - {props.name}" </p>
//         <p> "This is my Task {props.id} - {props.name}" </p>
//     );
//     }

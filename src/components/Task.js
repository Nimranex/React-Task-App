import React from "react";

function Task({ task, setEditTask, deleteTask }) {
  return (
    <li style={styles.taskItem}>
      <span style={styles.taskName}>{task.name}</span>
      <div style={styles.buttonGroup}>
        <button
          style={styles.editButton}
          onClick={() => setEditTask(task)}
        >
          Edit
        </button>
        <button
          style={styles.deleteButton}
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

const styles = {
  taskItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "10px",
    transition: "background 0.3s",
  },
  taskName: {
    flex: "1",
  },
  buttonGroup: {
    display: "flex",
    gap: "5px",
    marginLeft: "auto", // Align buttons to the right
  },
  editButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Task;


// funtion Task(props){
//     return(
//         <p> "This is my Task {props.id} - {props.name}" </p>
//         <p> "This is my Task {props.id} - {props.name}" </p>
//         <p> "This is my Task {props.id} - {props.name}" </p>
//         <p> "This is my Task {props.id} - {props.name}" </p>
//     );
//     }

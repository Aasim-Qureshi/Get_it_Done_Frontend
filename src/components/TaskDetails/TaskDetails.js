import React, { useState } from "react";
import styles from "./TaskDetails.module.css";
import TaskItem from "../TaskItem/TaskItem";
import TaskFilters from "../TaskFilters/TaskFilters";

const TaskDetails = ({ task, handleChange, handleSubmit, tasks, handleToggle, handleDelete, handleTitleUpdate }) => {
  const [filter, setFilter] = useState("all");

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.status === "done";
    if (filter === "pending") return t.status === "todo";
    return true; // "all" case
  });

  return (
    <div className={styles.mainContainer}>
      {/* Task Input Section */}
      <div className={styles.inputContainer}>
        <input
          placeholder="Enter Task Here"
          className={styles.inputField}
          value={task}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Add
        </button>
      </div>

      <TaskFilters filter={filter} setFilter={setFilter} />

      {/* Task List */}
      <div className={styles.itemContainer}>
        {filteredTasks
          .slice()
          .sort((a, b) => a.id - b.id) // Sort by ID
          .map((t) => (
            <TaskItem
              key={t.id}
              task={t}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleTitleUpdate={handleTitleUpdate} // NEW PROP
            />
          ))}
      </div>
    </div>
  );
};

export default TaskDetails;

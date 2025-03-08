import React from "react";
import styles from "./TaskFilters.module.css";

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className={styles.mainContainer}>
      <button
        className={filter === "pending" ? styles.active : styles.filterButton}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
      <button
        className={filter === "all" ? styles.active : styles.filterButton}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? styles.active : styles.filterButton}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilters;

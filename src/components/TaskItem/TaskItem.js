import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { MdDelete, MdEdit } from "react-icons/md";

const TaskItem = ({ task, handleToggle, handleDelete, handleTitleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [loading, setLoading] = useState(false);

  console.log("Task Title: ", title)

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateTitle = async () => {
    if (title.trim() === "" || title === task.title) {
      setIsEditing(false);
      return;
    }

    try {
      setLoading(true);
      await handleTitleUpdate(task.id, title);
    } catch (error) {
      alert("Failed to update title");
    } finally {
      setLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div
          onClick={() => handleToggle(task.id, task.status)}
          className={task.status === "todo" ? styles.button : styles.buttonActive}
        ></div>

        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleUpdateTitle}
            onKeyDown={(e) => e.key === "Enter" && handleUpdateTitle()}
            autoFocus
            disabled={loading}
            className={styles.inputEdit}
          />
        ) : (
          <p>{task.title}</p>
        )}
      </div>

      <div className={styles.iconContainer}>
        <div onClick={handleEditClick}>
          <MdEdit size={24} />
        </div>
        <div onClick={() => handleDelete(task.id)}>
          <MdDelete size={24} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

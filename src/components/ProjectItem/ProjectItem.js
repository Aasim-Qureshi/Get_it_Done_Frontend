import React, { useState } from 'react';
import styles from './ProjectItem.module.css';
import { MdEdit, MdDelete } from "react-icons/md";

const ProjectItem = ({ id, title, status, deadline, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDeadline, setEditedDeadline] = useState(deadline);

  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);

    const diffInMs = deadlineDate - today;

    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  const daysRemaining = getDaysRemaining(deadline);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleEdit(id, editedTitle, editedDeadline);
    setIsEditing(false);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.topRowContainer}>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setEditedTitle(e.target.value);
            }}
            onClick={(e) => {
              e.preventDefault()  
              e.stopPropagation()
            }} // Stop propagation on click
          />
        ) : (
          <p className={styles.projectName}>{title}</p>
        )}
        <div className={styles.iconsContainer}>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <MdEdit
              size={20}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsEditing(true);
              }}
            />
          )}

          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDelete(id);
            }}
          >
            <MdDelete size={20} />
          </div>
        </div>
      </div>

      <div className={styles.bottomRowContainer}>
        <div className={styles.statusContainer}>
          <p>{status}</p>
        </div>
        {isEditing ? (
          <input
            type="date"
            value={editedDeadline}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setEditedDeadline(e.target.value);
            }}
            onClick={(e) => {
              
              e.preventDefault();
              e.stopPropagation()
            }} // Stop propagation on click
          />
        ) : (
          <div className={daysRemaining > 0 ? styles.daysContainerNormal : styles.daysContainerUrgent}>
            <p className={styles.daysRemaining}>{daysRemaining}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
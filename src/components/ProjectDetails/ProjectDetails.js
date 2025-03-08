import React from 'react';
import styles from './ProjectDetails.module.css'

const ProjectDetails = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className={styles.mainContainer} >
            <div className={styles.inputFields} >
                <div>
                    <p>Task</p>
                    <input name='title' value={formData.title} onChange={handleChange} />
                </div>

                <div>
                    <p>Description</p>
                    <input name='description' value={formData.description} onChange={handleChange} />
                </div>
                <div>
                    <p>Deadline</p>
                    <input name='deadline' type='date' value={formData.deadline} onChange={handleChange} />
                </div>
            </div>
            <button className={styles.button} onClick={handleSubmit}>Add Project</button>
        </div>
    )
}

export default ProjectDetails
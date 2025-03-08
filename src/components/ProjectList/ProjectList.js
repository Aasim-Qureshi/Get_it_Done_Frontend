import React from 'react';
import { Link } from 'react-router'; 
import styles from './ProjectList.module.css';
import ProjectItem from '../ProjectItem/ProjectItem';

const ProjectList = ({ projects, handleDelete, handleEdit }) => {
  return (
    <div className={styles.mainContainer}>
      {projects.map((project) => (
        <Link
          key={project.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
          to={`/${project.id}/tasks`}
          onClick={(e) => {
            // Prevent navigation if editing is active
            if (project.isEditing) {
              e.preventDefault();
            }
          }}
        >
          <ProjectItem
            id={project.id}
            title={project.name}
            status={project.status}
            deadline={project.deadline}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
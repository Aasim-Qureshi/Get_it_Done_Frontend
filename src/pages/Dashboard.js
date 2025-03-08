import React, { useEffect, useState } from 'react';
import { getAllProjects, addProject, deleteProject, updateProject } from '../api/projects_api';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import ProjectList from '../components/ProjectList/ProjectList';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    name: '',
    description: '',
    deadline: ''
  });
  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false);
  const [editing, setEditing] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true); 
      const data = await getAllProjects();
      if (data) {
        setProjects(data.projects);
        console.log(data)
      } else {
        console.log('No projects found');
      }
    } catch (err) {
      console.log('Error while fetching projects, ', err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProjects(); 
  }, []);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if(project.deadline == '' || project.title == ''){
        setError(true);
        return;
      };

      await addProject(project.title, project.description, project.deadline);

      await fetchProjects(); 
      console.log('Project added');
      setError(false);
    } catch (err) {
      console.log('Trouble adding project, ', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteProject(id);
      console.log(result);
      await fetchProjects();

    }catch(err){
      console.log("There was an error, ", err);
    }
  }

  const handleEdit = async (id, name, deadline) => {
    try{
      const response = await updateProject(id, name, deadline);
      await fetchProjects(); // Refresh the project list
      return response;
    }catch(err){
      console.log("Error while editing: ", err);
    }
  }

  console.log(projects)

  return (
    <div>
      <ProjectDetails formData={project} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {error &&  <p style={{color: "red"}} >Enter Valid Input</p>}

      {loading ? (
        <div>Loading...</div> 
      ) : (
        <ProjectList projects={projects}  handleDelete={handleDelete} handleEdit={handleEdit} /> 
      )}
    </div>
  );
};

export default Dashboard;
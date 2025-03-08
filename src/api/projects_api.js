import axios from 'axios';

const addProject = async (name, description, deadline) => {
    try{
        const response = axios.post('http://localhost:5000/projects/add-project', {
            name: name,
            description: description || '',
            deadline: deadline
        },
    {withCredentials: true});

    console.log(response);

    }catch(err) {
        console.log(err);
    }
};

const getAllProjects = async () => {
    try{
        const response = await axios.get("http://localhost:5000/projects/all", { withCredentials: true });
        return response.data
    }catch(err){
        console.log("Error fetching projects: ", err);
        return null
    }
}


const updateProject = async (id, name, deadline) => {
  try {
    const response = await axios.put('http://localhost:5000/projects/update', {
      id,
      name,
      deadline
    }, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

  

const deleteProject = async (id) => {
    try{
        const response = await axios.delete("http://localhost:5000/projects/delete", {data: {id: id}, withCredentials: true});

        return response.data;
    }catch(err){
        console.log("Error while deleting: ", err)
    }
}

export {getAllProjects, addProject, updateProject, deleteProject};
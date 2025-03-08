import axios from 'axios';

const addProject = async (name, description, deadline) => {
    try{
        const response = axios.post('https://get-it-done-backend.onrender.com/projects/add-project', {
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
        const response = await axios.get("https://get-it-done-backend.onrender.com/projects/all", { withCredentials: true });
        return response.data
    }catch(err){
        console.log("Error fetching projects: ", err);
        return null
    }
}


const updateProject = async (id, name, deadline) => {
  try {
    const response = await axios.put('https://get-it-done-backend.onrender.com/projects/update', {
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
        const response = await axios.delete("https://get-it-done-backend.onrender.com/projects/delete", {data: {id: id}, withCredentials: true});

        return response.data;
    }catch(err){
        console.log("Error while deleting: ", err)
    }
}

export {getAllProjects, addProject, updateProject, deleteProject};
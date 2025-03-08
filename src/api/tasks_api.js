import axios from 'axios';

const getAllTasks = async (id) => {
    try {
        console.log(id);
        const response = await axios.get(`http://localhost:5000/tasks/${id}/tasks`, {withCredentials: true});
        return response.data;
    } catch (err) {
        console.log("Error while fetching tasks, ", err);
    };
};

const addTask = async (id, task) => {
    try {
        const response = await axios.post(`http://localhost:5000/tasks/${id}/add/`, { title: task }, { withCredentials: true })
        return response.data
        
    } catch (err) {
        console.log("There is an error, ", err);
    }
}

const toggleTask = async (id, status) => {

    console.log(status);

    try {
        const response = await axios.put('http://localhost:5000/tasks/toggleStatus', {id: id, status: status}, {withCredentials: true});

        return response.data;

    }catch(err){
        console.log("There was an error: ", err)
    }
};

const deleteTask = async (id) => {
    try {
        const response = await axios.delete('http://localhost:5000/tasks/delete', {
            data: { id: id }, 
            withCredentials: true
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const updateTask = async (id, title) => {
    try{
        const response = await axios.put('http://localhost:5000/tasks/update', {id: id, title: title}, {withCredentials: true});

        return response.data;
    }catch(err){
        console.log("Error while updating: ", err);
    }
}


export { getAllTasks, addTask, toggleTask, deleteTask, updateTask };
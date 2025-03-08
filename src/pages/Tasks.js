import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllTasks, addTask, deleteTask, toggleTask, updateTask } from "../api/tasks_api";
import TaskDetails from "../components/TaskDetails/TaskDetails";

const Tasks = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const fetchTasks = async () => {
    try {
      const data = await getAllTasks(id);
      setTasks(data.projects);
    } catch (err) {
      console.log("Error fetching tasks, ", err);
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await addTask(id, task);
      fetchTasks();
    } catch (err) {
      console.log("Error adding task: ", err);
    }
  };

  const handleToggle = async (taskId, currentStatus) => {
    const newStatus = currentStatus === "todo" ? "done" : "todo";

    try {
      await toggleTask(taskId, newStatus);
      fetchTasks();
    } catch (err) {
      console.error("Error toggling task status: ", err);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (err) {
      console.log("Error deleting task: ", err);
    }
  };

  const handleTitleUpdate = async (taskId, newTitle) => {
    try {
      await updateTask(taskId, newTitle);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, title: newTitle } : task))
      );
    } catch (err) {
      console.log("Error updating task title: ", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskDetails
      task={task}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      tasks={tasks}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
      handleTitleUpdate={handleTitleUpdate} // Pass down to child components
    />
  );
};

export default Tasks;

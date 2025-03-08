import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import LoginDetails from '../components/LoginDetails/LoginDetails'
import { sendLoginInfo } from '../api/users_api';

const LogIn = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {
    try{
      const response = await sendLoginInfo(formData.email, formData.password);

      if(response.status === 200) {
        navigate("/dashboard")
      }

    }catch(err) {

      if(err.response.status === 400) {
        setError("Invalid username or password")
      }else{
        setError("Something went wrong");
      }
    }
  };

  return (
    <LoginDetails formData={formData} handleChange={handleChange}  handleSubmit={handleSubmit} error={error}/>
  )
}

export default LogIn
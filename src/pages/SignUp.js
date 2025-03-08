import React, {useState} from 'react';
import { useNavigate } from 'react-router';

import SignUpDetails from '../components/SignupDetails/SignupDetails';
import { sendUserInfo } from '../api/users_api';

const SignUp = () => {

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirm: ''
    });
    const [error, setError] = useState("");
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {

        if(formData.email === '' || formData.password == '' || formData.username === '') {
            setError("Enter valid information");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!emailRegex.test(formData.email)) {
            setError("Please enter a valid email id");
            return;
        }

        if (formData.password !== formData.confirm) {
            setError("Passwords don't match");
            return;
        }
        try{
            await sendUserInfo(formData.email, formData.username, formData.password);
            console.log("User info sent succesfully");
            navigate("/login");
        }catch(err){
            console.log("There was an error, ", err);
        }
        
    };

  return (
    <div>
    <SignUpDetails formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} error={error} />
    </div>
  )
}

export default SignUp;
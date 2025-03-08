import axios from 'axios';

const sendUserInfo = async (email, username, password) => {
    try {
        const response = await axios.post('http://localhost:5000/users/add-user', {
            email: email,
            username: username,
            password: password
        });

        console.log("Success: ", response.data);
        return response;

    } catch(err) {
        console.log("There was an error: ", err);
    }
}

const sendLoginInfo = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/users/login', {
            email: email,
            password: password
        },
        {withCredentials: true}
    );

        console.log("Success: ", response.data);
        return response;

    } catch(err) {
        console.log("There was an error: ", err);
        throw err;
    }
}

export {sendUserInfo, sendLoginInfo};
const sendUserInfo = async (email, username, password) => {
    try {
        const response = await axios.post('https://get-it-done-backend.onrender.com/users/add-user', {
            email: email,
            username: username,
            password: password
        });

        console.log("Success: ", response.data);
        return response;

    } catch (err) {
        if (err.response) {
            // Server responded with an error
            console.log("Error Response Data: ", err.response.data);
            console.log("Error Status: ", err.response.status);
        } else {
            // Something else went wrong
            console.log("Error: ", err.message);
        }
    }
};

const sendLoginInfo = async (email, password) => {
    try {
        const response = await axios.post('https://get-it-done-backend.onrender.com/users/login', {
            email: email,
            password: password
        }, { withCredentials: true });

        console.log("Success: ", response.data);
        return response;

    } catch (err) {
        if (err.response) {
            // Server responded with an error
            console.log("Error Response Data: ", err.response.data);
            console.log("Error Status: ", err.response.status);
        } else {
            // Something else went wrong
            console.log("Error: ", err.message);
        }
        throw err;
    }
};

export { sendUserInfo, sendLoginInfo };

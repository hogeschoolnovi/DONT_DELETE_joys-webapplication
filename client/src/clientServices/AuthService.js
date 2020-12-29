import http from './http-common';

const register = async (username, email, password) => {
    try {
        const register = await http.post('/auth/signup/', {
            username,
            email,
            password
        });
        setTimeout(() => {
            alert('Your sign up was successful. Welcome to Joys');
            window.location.assign('/login')
        },3000)
    } catch (error) {
        console.log(error.message);
        error.message === 'Request failed with status code 500' && alert('Invalid email, password or username')
        error.message === 'Request failed with status code 400' && alert('Username or email is already in use')
    }

}

const getCurrentUser= () => {
    return JSON.parse(localStorage.getItem('user'));
}

const logout = () => {
    localStorage.removeItem('user');
}

const login = async (username, password) => {
        return http.post('/auth/signin', {
            username,
            password,
        }).then((response) => {
                if (response.data.accessToken) {
                    console.log(response.data);
                    return response.data;
                } else {
                    alert("Something went wrong");
                }
            })

    }


export default {
    register,
    getCurrentUser,
    logout,
    login
}
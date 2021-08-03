import axios from 'axios';

export const register = async (userInfo) => {
    const { data } = await axios.post('http://localhost:3030/user/register', userInfo);
    return data;
}

export const login = async (userInfo) => {
    const { data } = await axios.post('http://localhost:3030/user/login', userInfo);
    return data;
}

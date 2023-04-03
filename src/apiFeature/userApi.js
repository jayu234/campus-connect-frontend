import axios from "axios";


const BASE_URL = "http://localhost:5000/api/v1";

const signup = async (userData) => {
    const response = await axios.post(`${BASE_URL}/user/signup`, userData);
    return response.data;
}

const login = async (userData) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${BASE_URL}/user/login`, userData, { withCredentials: true });
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
}

const logout = async () => {
    const response = await axios.get(`${BASE_URL}/user/logout`);
    localStorage.removeItem('user');
    return response.data;
}
const authServise = { signup, login, logout };

export default authServise;
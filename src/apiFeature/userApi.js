import axios from "axios";


const BASE_URL = "http://localhost:5000/api/v1";

const signup = async (userData) => {
    const response = await axios.post(`${BASE_URL}/user/signup`, userData);
    return response.data;
}

const login = async (userData) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${BASE_URL}/user/login`, userData, { withCredentials: true });
    return response.data;
}

const logout = async () => {
    const response = await axios.get(`${BASE_URL}/user/logout`, { withCredentials: true });
    return response.data;
}

const loadUser = async () => {
    const response = await axios.get(`${BASE_URL}/user/profile`, { withCredentials: true });
    return response.data;
}
const authServise = { signup, login, logout, loadUser };

export default authServise;
import axios from "axios"

const getNearbyEvents = async()=>{
    axios.defaults.withCredentials = true
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/nearbyEvents`);
    return response.data;
}

const eventService = {getNearbyEvents};
export default eventService;
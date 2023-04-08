import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

const getFeedData = async () => {
    const response = await axios.get(`${BASE_URL}/feed`);
    return response.data;
}
const feedService = { getFeedData };

export default feedService;
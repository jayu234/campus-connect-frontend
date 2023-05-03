import axios from "axios";

const getMyPosts = async(id)=>{
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/post/all?user_id=${id}`);
    return response.data;
}

const postService = {getMyPosts};

export default postService
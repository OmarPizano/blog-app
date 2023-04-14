import axios from "axios";

export const apiGetPosts = async () => await axios.get('http://127.0.0.1:8000/');
export const apiCreatePost = async (post) => await axios.post('http://127.0.0.1:8000/', post);
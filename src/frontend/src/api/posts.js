import axios from "axios";

export const apiGetPosts = async () => await axios.get('http://127.0.0.1:8000/');
export const apiGetPost = async (id) => await axios.get('http://127.0.0.1:8000/' + id);
export const apiCreatePost = async (post) => await axios.post('http://127.0.0.1:8000/', post);
export const apiDeletePost = async (id) => await axios.delete('http://127.0.0.1:8000/' + id);
export const apiUpdatePost = async (id, data) => await axios.put('http://127.0.0.1:8000/' + id, data);
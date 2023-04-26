import axios from "axios";

export const apiGetPosts = async () => await axios.get('http://127.0.0.1:8000/');
export const apiGetPost = async (id) => await axios.get('http://127.0.0.1:8000/' + id);
export const apiCreatePost = async (post) => {
    // transformar el JSON en Form
    const form = new FormData();
    for (let key in post) {
        form.append(key, post[key]);
    }
    // enviarlo como multipart form
    return await axios.post('http://127.0.0.1:8000/', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}
export const apiDeletePost = async (id) => await axios.delete('http://127.0.0.1:8000/' + id);
export const apiUpdatePost = async (id, data) => {
    // transformar el JSON en Form
    const form = new FormData();
    for (let key in data) {
        form.append(key, data[key]);
    }
    // enviarlo como multipart form
    return await axios.put('http://127.0.0.1:8000/' + id, data, {
        headers : {
            "Content-Type": "multipart/form-data"
        }
    });
}
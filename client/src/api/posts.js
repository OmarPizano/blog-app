import axios from "axios";

const apiurl = "http://127.0.0.1/api";

export const apiGetPosts = async () => await axios.get(apiurl + '/');
export const apiGetPost = async (id) => await axios.get(apiurl + '/' + id);
export const apiCreatePost = async (post) => {
    // transformar el JSON en Form
    const form = new FormData();
    for (let key in post) {
        form.append(key, post[key]);
    }
    // enviarlo como multipart form
    return await axios.post(apiurl, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}
export const apiDeletePost = async (id) => await axios.delete(apiurl + '/' + id);
export const apiUpdatePost = async (id, data) => {
    // transformar el JSON en Form
    const form = new FormData();
    for (let key in data) {
        form.append(key, data[key]);
    }
    // enviarlo como multipart form
    return await axios.put(apiurl + '/' + id, data, {
        headers : {
            "Content-Type": "multipart/form-data"
        }
    });
}
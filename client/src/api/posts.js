import axios from "axios";

const multipartConfig = {
    headers: {
        "Content-Type": "multipart/form-data"
}};

const json2form = (json) => {
    // transformar el JSON en Form
    const form = new FormData();
    for (let key in json) {
        form.append(key, json[key]);
    }
    return form;
}

const apiurl = "/api/";

export const apiGetPosts = async () => await axios.get(apiurl);
export const apiGetPost = async (id) => await axios.get(apiurl + id);
export const apiCreatePost = async (post) => await axios.post(apiurl, json2form(post), multipartConfig);
export const apiDeletePost = async (id) => await axios.delete(apiurl + id);
export const apiUpdatePost = async (id, data) => await axios.put(apiurl + id, json2form(data), multipartConfig);
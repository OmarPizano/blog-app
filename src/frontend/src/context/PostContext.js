import { createContext, useState, useContext, useEffect } from 'react';
import { apiGetPosts, apiCreatePost, apiDeletePost, apiGetPost, apiUpdatePost } from "../api/posts";

const post_context = createContext();

// hook para utililizar el contexto en otros componentes
export function usePostContext() {
    const context = useContext(post_context);
    return context;
}

// componente proveedor de contexto para posts
export function PostProvider({ children }) {

    const [posts, setPosts] = useState([]); 
    const [isLoading, setLoading] = useState(true);

    // TODO: usar los estados devueltos por el backend para validar las peticiones
    // funciones para sincronizar el backend con el estado
    async function loadPosts() {
        const res = await apiGetPosts();
        setLoading(false);
        setPosts(res.data);
    }
    async function getPost(id) {
        const res = await apiGetPost(id);
        return res.data;
    }
    async function updatePost(id, data) {
        const res = await apiUpdatePost(id, data);
        if (res.status === 200) {
            setPosts(posts.map((post) => (post._id === id ? res.data : post)))
        }
    }
    async function createPost(post) {
        const res = await apiCreatePost(post);
        setPosts([...posts, res.data]);
    }
    async function deletePost(id) {
        const res = await apiDeletePost(id);
        if (res.status === 204) {
            setPosts(posts.filter(post => post._id !== id));
        }
    }
    
    // cargar los posts en el contexto
    useEffect(() => {
        loadPosts();
    }, []);
    
    // retornar el componente; en value indicamos el acceso requerido
    return (
        <post_context.Provider value={{ isLoading, posts, createPost, deletePost, getPost, updatePost }}>
            {children}
        </post_context.Provider>
    );
}
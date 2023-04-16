import { createContext, useState, useContext, useEffect } from 'react';
import { apiGetPosts, apiCreatePost, apiDeletePost } from "../api/posts";

const post_context = createContext();

export const usePostContext = () => {
    const context = useContext(post_context);
    return context;
}

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await apiGetPosts();
        setPosts(res.data);
    }

    const createPost = async (post) => {
        const res = await apiCreatePost(post);
        setPosts([...posts, res.data]);
    }

    const deletePost = async (id) => {
        const res = await apiDeletePost(id);
        if (res.status === 204) {
            setPosts(posts.filter(post => post._id !== id));
        }
    }

    useEffect(() => {
      getPosts(); 
    }, [])
    
    return (
        <post_context.Provider value={ {posts, createPost, deletePost} }>
            {children}
        </post_context.Provider>
    );
};
import { createContext, useState, useContext, useEffect } from 'react';
import { apiGetPosts, apiCreatePost } from "../api/posts";

const post_context = createContext();

export const GetContext = () => {
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

    useEffect(() => {
      getPosts(); 
    }, [])
    
    return (
        <post_context.Provider value={ {posts, createPost} }>
            {children}
        </post_context.Provider>
    );
};
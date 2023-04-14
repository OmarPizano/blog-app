import { createContext, useState, useContext, useEffect } from 'react';
import { apiGetPosts } from "../api/posts";

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

    useEffect(() => {
      getPosts(); 
    }, [])
    
    return (
        <post_context.Provider value={ {posts, setPosts, getPosts} }>
            {children}
        </post_context.Provider>
    );
};
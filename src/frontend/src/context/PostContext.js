import { createContext, useState, useContext } from 'react';

const post_context = createContext();

export const getContext = () => {
    const context = useContext(post_context);
    return context;
}

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    return (
        <post_context.Provider value={ {posts, setPosts} }>
            {children}
        </post_context.Provider>
    );
};
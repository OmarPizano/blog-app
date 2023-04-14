import { GetContext } from "../context/PostContext";
import { AiFillFileExclamation } from "react-icons/ai";
import { PostList } from "../components/PostList";

export function Home() {
    const {posts} = GetContext();

    if (posts.length === 0) return (
        <div className="flex flex-col justify-center items-center">
            <AiFillFileExclamation className="w-24 h-24 text-white" />
            <h1 className="text-white">There is nothing here yet!</h1>
        </div>
    )

    return (
        <PostList posts={posts} /> 
    );
};
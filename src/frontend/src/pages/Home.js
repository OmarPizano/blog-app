import { GetContext } from "../context/PostContext";
import { AiFillFileExclamation } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Home() {
    const {posts} = GetContext();

    if (posts.length === 0) return (
        <div className="flex flex-col justify-center items-center">
            <AiFillFileExclamation className="w-24 h-24 text-white" />
            <h1 className="text-white">There is nothing here yet!</h1>
        </div>
    )

    return (
        <div className="text-white">
            <h1 className="py-5 text-3xl font-bold">Posts</h1>
            <Link to='/new' className="bg-black text-cyan-400 hover:bg-cyan-400 hover:text-black">New Post</Link>
            {posts.map(post => (
                <div key={post._id}>
                    <hr />
                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};
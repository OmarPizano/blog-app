import { GetContext } from "../context/PostContext";
import { AiFillFileExclamation } from "react-icons/ai";

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
            <h1>Posts</h1>
            <hr />
            {posts.map(post => (
                <div key={post._id}>
                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};
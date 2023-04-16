import { usePostContext } from "../context/PostContext";
import { AiFillFileExclamation } from "react-icons/ai";
import { PostList } from "../components/PostList";
import { Page } from "../components/Page";

export function Home() {
    const {posts, isLoading} = usePostContext();

    if (isLoading) return (
        // TODO: Agregar spinner
        <div>
            <p className="text-white">LOADING...</p>
        </div>
    )

    if (isLoading === false && posts.length === 0) return (
        // TODO: estilizar y refactorizar en un componente genérico
        <Page title="Posts">
            <AiFillFileExclamation className="w-24 h-24 text-white" />
            <p className="text-white">There is nothing here yet!</p>
        </Page>
    )

    return (
        <Page title="Posts">
            <PostList posts={posts} />
        </Page>
    );
};
import { usePostContext } from "../context/PostContext";
import { AiFillFileExclamation } from "react-icons/ai";
import { PostList } from "../components/PostList";
import { Page, Loading } from "../components/Page";

export function HomePage() {
    const {posts, isLoading} = usePostContext();

    if (isLoading) return <Loading />

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
import { usePostContext } from "../context/PostContext";
import { PostList } from "../components/PostList";
import { Page, Loading} from "../components/Page";

export function HomePage() {
    const {posts, isLoading} = usePostContext();

    if (isLoading) return <Loading />

    return (
        <Page title="Poosts">
            <PostList posts={posts} />
        </Page>
    );
};
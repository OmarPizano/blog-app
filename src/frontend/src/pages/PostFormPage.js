import { PostForm } from "../components/PostForm";
import { Page } from "../components/Page";

export function PostFormPage({title}) {
    return (
        <Page title={title}>
            <PostForm />
        </Page>
    );
};
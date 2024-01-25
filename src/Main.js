import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

export default function Main({ posts, onAddPost }) {
    return (
        <main>
            <FormAddPost onAddPost={onAddPost} />
            <Posts posts={posts} />
        </main>
    );
}
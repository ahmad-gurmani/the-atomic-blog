import List from "./List";

export default function Posts({ posts }) {
    return (
        <section>
            <List posts={posts} />
        </section>
    );
}
import { createContext, useContext, useState } from "react"
import { faker } from "@faker-js/faker";

const PostContext = createContext(null);
const SearchContext = createContext(null);

function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}

function ContextProvider({ children }) {

    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
    );

    const [searchQuery, setSearchQuery] = useState("");

    // Derived state. These are the posts that will actually be displayed
    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                `${post.title} ${post.body}`
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            )
            : posts;

    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    function handleClearPosts() {
        setPosts([]);
    }


    return (
        <PostContext.Provider value={{
            posts: searchedPosts,
            onAddPost: handleAddPost,
            onClearPosts: handleClearPosts,
            createRandomPost: createRandomPost,
        }}>
            <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
                {children}
            </SearchContext.Provider>
        </PostContext.Provider>
    )
}

function usePosts() {
    const postData = useContext(PostContext);
    if (postData === undefined) {
        throw new Error("PostContext was used outside of the ContextProvider")
    }
    return postData;
}

function useSearch() {
    const searchData = useContext(SearchContext);

    if (searchData === undefined) {
        throw new Error("PostContext was used outside of the ContextProvider")
    }
    return searchData;
}



export { ContextProvider, usePosts, useSearch };
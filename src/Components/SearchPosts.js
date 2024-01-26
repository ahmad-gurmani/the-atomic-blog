import { useSearch } from "../Context/ContextProvider";

export default function SearchPosts() {
    const { searchQuery, setSearchQuery } = useSearch();

    return (
        <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
        />
    );
}
import {usePost} from "../hook/usePost.ts";
import {useQuery} from "react-query";
import {Link} from "react-router-dom";

export const PostListPage = () => {
    console.log(window.location)
    const {fetchPosts} = usePost();
    const {data, isLoading} = useQuery('posts', fetchPosts, {
        staleTime: 1000 * 60 * 5,
    })

    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data</div>;

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

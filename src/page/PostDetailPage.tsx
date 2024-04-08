import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {usePost} from "../hook/usePost.ts";

export const PostDetailPage = () => {
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();
    const {fetchPost} = usePost();

    const {data, isLoading} = useQuery(['post', id], () => fetchPost(Number(id)), {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data</div>;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    );
}

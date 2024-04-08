import {Post} from "../entity/Post.ts";

export interface PostService {
    fetchPosts: () => Promise<Post[]>;
    fetchPost: (id: number) => Promise<Post>;
}

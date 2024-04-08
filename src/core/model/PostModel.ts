import {Post} from "../entity/Post.ts";

export interface PostModel {
    getPosts: () => Promise<Post[]>;
    getPost: (id: number) => Promise<Post>;
}

import {Request} from "../core/module/Request.ts";
import {RequestImpl} from '../module/Request.ts';
import {PostModel} from "../core/model/PostModel.ts";
import {Post} from "../core/entity/Post.ts";

export const post = (
    request: Request = new RequestImpl()
): PostModel => {
    return {
        getPosts: async () => {
            return request.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        },
        getPost: async (id: number) => {
            return request.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        },
    }
}

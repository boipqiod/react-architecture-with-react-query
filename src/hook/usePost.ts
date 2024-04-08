import {PostService} from "../core/service/PostService.ts";
import {post} from "../model/post.ts";
import {PostModel} from "../core/model/PostModel.ts";

export const usePost = (
    postModel: PostModel = post()
): PostService => {
    return {
        fetchPosts: async () => {
            return postModel.getPosts();
        },
        fetchPost: async (id: number) => {
            return postModel.getPost(id);
        },
    }
}

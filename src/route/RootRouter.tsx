import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';
import {PostListPage} from "../page/PostListPage.tsx";
import {PostDetailPage} from "../page/PostDetailPage.tsx";

const Router: RouteObject = {
    path: '',
    children: [
        {
            path: '',
            element: <PostListPage />,
        },
        {
            path: '/post/:id',
            element: <PostDetailPage />,
        },
    ],
};

const routes = createBrowserRouter([Router]);
export const RootRouter = () => {
    return <RouterProvider router={routes}/>;
};

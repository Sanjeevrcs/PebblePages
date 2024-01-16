import Home from '../routes/Home';
import ShareHandler from '../components/ShareHandler';
import { Login } from '../routes/Login';

export const routes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/saveBlogs',
        component: <ShareHandler/>,
    },
    {
        path:'/login',
        component:<Login/>
    }
]
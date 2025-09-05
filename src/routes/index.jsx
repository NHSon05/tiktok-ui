import Home from "../Pages/Home/Home";
import Following from "../Pages/Following/Following";
import Profile from "../Pages/Profile/Profile";

// Public routes
const publicRoutes = [
    {path: '/' , component: Home}, 
    {path: '/following' , component: Following}, 
    {path: '/profile' , component: Profile}, 
]

const privateRoutes = [];

export { publicRoutes, privateRoutes }
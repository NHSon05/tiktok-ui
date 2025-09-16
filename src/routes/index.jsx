// Layout
import { HeaderOnly } from "../components/Layout";

// Pages
import Home from "../Pages/Home/Home";
import Following from "../Pages/Following/Following";
import Profile from "../Pages/Profile/Profile";
import Upload from "../Pages/Upload/Upload";
import Search from "../Pages/Search/Search";

// Public routes
const publicRoutes = [
    {path: '/' , component: Home}, 
    {path: '/following' , component: Following}, 
    {path: '/@:nickname' , component: Profile}, 
    {path: '/upload' , component: Upload, layout: HeaderOnly}, 
    {path: '/search' , component: Search, layout: null}, 
] 

const privateRoutes = [];

export { publicRoutes, privateRoutes }
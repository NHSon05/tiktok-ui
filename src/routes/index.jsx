// Layout
import { HeaderOnly } from "../components/Layout";

import routesConfig from "../config/routes";
// Pages
import Home from "../Pages/Home/Home";
import Following from "../Pages/Following/Following";
import Profile from "../Pages/Profile/Profile";
import Upload from "../Pages/Upload/Upload";
import Search from "../Pages/Search/Search";

// Public routes
const publicRoutes = [
    {path: `${routesConfig.home}` , component: Home}, 
    {path: `${routesConfig.following}` , component: Following}, 
    {path: `${routesConfig.profile}` , component: Profile}, 
    {path: `${routesConfig.upload}` , component: Upload, layout: HeaderOnly}, 
    {path: `${routesConfig.search}` , component: Search, layout: null}, 
] 

const privateRoutes = [];

export { publicRoutes, privateRoutes }
// Layout
import { HeaderOnly } from "../layouts/exportLayouts";

// import routesConfig from "../config/routes";
import config from "../config";
// Pages
import Home from "../Pages/Home/Home";
import Following from "../Pages/Following/Following";
import Profile from "../Pages/Profile/Profile";
import Upload from "../Pages/Upload/Upload";
import Search from "../Pages/Search/Search";

// Public routes
const publicRoutes = [
    {path: `${config.routesConfig.home}` , component: Home}, 
    {path: `${config.routesConfig.following}` , component: Following}, 
    {path: `${config.routesConfig.profile}` , component: Profile}, 
    {path: `${config.routesConfig.upload}` , component: Upload, layout: HeaderOnly}, 
    {path: `${config.routesConfig.search}` , component: Search, layout: null}, 
] 

const privateRoutes = [];

export { publicRoutes, privateRoutes }
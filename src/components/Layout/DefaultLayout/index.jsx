import Header from "../Components/Header/Header";
import Sidebar from "./SideBar/SideBar";

function DefaultLayout({children}) {
    return (  
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
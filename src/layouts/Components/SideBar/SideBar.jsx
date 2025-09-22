import classNames from "classnames/bind";
import styles from './SideBar.module.scss'
import Menu, {MenuItem} from "./Menu";
import config from "../../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from "../../../components/Icons/Icon";
// import { faHouse, faUserGroup, faVideo } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routesConfig.home} icon={<HomeIcon/>}  activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routesConfig.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                <MenuItem title="LIVE" to={config.routesConfig.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
            </Menu>
        </aside>
    );
}

export default Sidebar;
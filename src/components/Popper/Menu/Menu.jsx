// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind';
import Wrapper from '../Wrapper.jsx'
import styles from './Menu.module.scss';
import MenuItem from './MenuItem.jsx';

const cx = classNames.bind(styles);


function Menu({children, items = []}) {

    const renderItem = () => {
        return items.map((item,index) => (
            <MenuItem key={index} data={item}/>
        ))
    }

    return ( 
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-popper')}>
                        {renderItem()}
                    </Wrapper>
                </div>
            )}
        >

            {children}
        </Tippy>
    );
}
export default Menu;

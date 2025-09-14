// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind';
import Wrapper from '../Wrapper.jsx'
import styles from './Menu.module.scss';
import MenuItem from './MenuItem.jsx';
import Header from './Header.jsx';
import { useState } from 'react';

const cx = classNames.bind(styles);


function Menu({children, items = []}) {

    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1]
    setHistory

    const renderItem = () => {
        return current.data.map((item,index) => {
            const isParent = !!item.children;
            return (
                <MenuItem 
                    key={index} 
                    data={item} 
                    onClick={() => {
                        if (isParent){
                            console.log(item.children);
                        }
                    }}
                />
            );
        })
    }

    return ( 
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-popper')}>
                        <Header title='Language'/>
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

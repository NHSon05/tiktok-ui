import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classNames from 'classnames/bind';
import styles from './Search.module.scss'

import { useEffect, useState,useRef } from 'react';

import Wrapper from '../../Popper/Wrapper';


const cx = classNames.bind(styles)


function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const searchRef = useRef(null);
    const [showResult, setShowResult] = useState(true);
    const handleHideResult = () => {setShowResult(false)}

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 0);
    },[])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    }

    return (  
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <h2 className={cx('search-title')}>Accounts</h2>
                        <h2 className={cx('search-title')}>Accounts</h2>
                        <h2 className={cx('search-title')}>Accounts</h2>
                        <h2 className={cx('search-title')}>Accounts</h2>
                    </Wrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
        <div className={cx('search')}>
            <input  
                ref={searchRef} value={searchValue}  placeholder='Search accounts and videos' 
                spellCheck={false} 
                onChange={e => setSearchValue(e.target.value)} 
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && (
                <button className={cx('clear')} 
                        onClick={() => {
                            handleClear
                        }}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
            )}
            {/* Loading */}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
        
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
    </HeadlessTippy>
    );
}

export default Search;
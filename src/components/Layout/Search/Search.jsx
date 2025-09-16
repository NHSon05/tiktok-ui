import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classNames from 'classnames/bind';
import styles from './Search.module.scss'

import { useEffect, useState,useRef } from 'react';

import Wrapper from '../../Popper/Wrapper';
import AccountItem from '../../AccountItem';


const cx = classNames.bind(styles)


function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const searchRef = useRef(null);
    const [showResult, setShowResult] = useState(true);
    const handleHideResult = () => {setShowResult(false)}

    useEffect(() => {

        if (!searchValue.trim()){
            return;
        }

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
            })
    },[searchValue])

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
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                        ))}
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
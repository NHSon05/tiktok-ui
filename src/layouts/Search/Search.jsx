import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import * as request from '../../../utils/request';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'

import { useEffect, useState,useRef } from 'react';

import { search } from '../../services/searchServices';
import Wrapper from '../../components/Popper/Wrapper';
import AccountItem from '../../components/AccountItem/exportAccountItem';
import { useDebounce } from '../../hooks/exportHook';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const searchRef = useRef(null);
    const [showResult, setShowResult] = useState(true);
    const handleHideResult = () => {setShowResult(false)}

//  1: ''
//  2: h
    const debounced = useDebounce(searchValue, 500);


    useEffect(() => {

        if (!debounced.trim()){
            setSearchResult([]);
            return;
        }

        // XMLHttpRequest
        // Fetch

        // full_name -> fullName
        const fetchApi = async () => {
            const result = await search(debounced);
            setSearchResult(result.data);  
        }
        fetchApi();
    },[debounced])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (  
        <>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {/* {console.log(searchResult.data)} */}
                            {/* {searchResult.map((result) => ( */}
                            
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
                        onChange={handleChange} 
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button className={cx('clear')} 
                            onClick={() => {
                                handleClear()
                            }}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                    )}
                    {/* Loading */}
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
                
                    <button className={cx('search-btn')} onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
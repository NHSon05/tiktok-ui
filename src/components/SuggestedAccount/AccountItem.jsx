import PropTypes  from "prop-types";
import classNames from "classnames/bind";
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import Wrapper from "../Popper/Wrapper";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles)

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div  tabIndex="-1" {...props}>
                <Wrapper>
                    <AccountPreview/>
                </Wrapper>
            </div>
        )
    }

    return (  
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement='bottom-start'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img 
                        className={cx('avatar')}
                        src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
                        alt="Avata Image" 
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>songuyen</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>NHS</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.PropTypes = {}; 

export default AccountItem;
import PropTypes  from "prop-types";
import classNames from "classnames/bind";
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (  
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
    );
}

AccountItem.PropTypes = {}; 

export default AccountItem;
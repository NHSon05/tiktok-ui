// import PropTypes  from "prop-types";
import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function AccountPreview() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img 
                    className={cx('avatar')} 
                    src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
                    alt="Picture"
                />
                <div><Button className={cx('follow-btn')} primary>Follow</Button></div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>songuyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Nguyễn Sơn</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
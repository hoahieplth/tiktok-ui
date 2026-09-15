import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AcountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AcountItem({ data }) {
    return (
        <Link to={`/@${data.username}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.image} alt={data.image} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.lastName}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{data.username}</span>
            </div>
        </Link>
    );
}

export default AcountItem;

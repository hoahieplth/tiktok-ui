import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './LiveSectionItem.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
function Section({ title, children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>{title}</h2>
                <Link to={`${config.routes.live}/category/gaming`} className={cx('see-all')}>
                    Xem tất cả
                </Link>
            </div>

            {/* Nội dung (live-grid hoặc category-list) */}
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
export default Section;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import styles from './LiveSectionItem.module.scss';

const cx = classNames.bind(styles);

function CategorySectionItem({ data }) {
    return (
        <div>
            <div className={cx('item')}>
                <Tippy content={data.type} placement="bottom" interactive={true}>
                    <div className={cx('thumb-img')}>
                        <img src={data.videos.medium.thumbnail} alt="data.type" />
                    </div>
                </Tippy>
                {/* thông tin bên dưới  */}

                <div className={cx('category-text')}>
                    <h3 className={cx('category-title')}>{data.type}</h3>
                    <p className={cx('category-user')}>{data.views}k người đang xem</p>
                </div>
            </div>
        </div>
    );
}
CategorySectionItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default CategorySectionItem;

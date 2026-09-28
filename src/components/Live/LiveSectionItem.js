import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './LiveSectionItem.module.scss';
import { ViewerIcon } from '../Icons';

const cx = classNames.bind(styles);
function LiveSectionItem({ data }) {
    const videoRef = useRef(null);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        setIsHover(false);
        videoRef.current?.pause();
    };
    return (
        <div className={cx('item')}>
            <div className={cx('thumb')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <video ref={videoRef} src={data.videos.medium.url} muted loop playsInline controls={isHover}></video>

                {/* Live + số người xem */}
                <div className={cx('live-badge')}>
                    <span className={cx('live')}>Live</span>
                    <span className={cx('viewers')}>
                        <ViewerIcon /> {data.views}
                    </span>
                </div>
            </div>

            {/* thông tin bên dưới  */}
            <div className={cx('info')}>
                <img className={cx('avatar')} src={data.userImageURL} alt={data.user} />
                <div className={cx('text')}>
                    <h4 className={cx('title-text')}>{data.type}</h4>
                    <p className={cx('user')}>{data.user}</p>
                </div>
            </div>
        </div>
    );
}
LiveSectionItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default LiveSectionItem;

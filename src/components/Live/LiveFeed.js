import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import * as videoService from '~/services/videoService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './LiveFeed.module.scss';
import { SoundIcon } from '../Icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function LiveFeed() {
    const [videos, setVideos] = useState([]);
    const [showControls, setShowControls] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentVideo = videos[currentIndex];
    // Lấp Api
    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.getVideos('gaming');

            setVideos(result.hits || result || []);
        };

        fetchApi();
    }, []);
    // 2. useEffect ẩn nút
    useEffect(() => {
        if (!showControls) return;

        const timer = setTimeout(() => {
            setShowControls(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showControls]);

    if (!currentVideo) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('loading')}>Đang tải video...</div>
            </div>
        );
    }

    const gotoPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowControls(true);
        }
    };
    const gotoNext = () => {
        if (currentIndex < videos.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowControls(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-container')} onMouseMove={() => setShowControls(true)}>
                <video
                    key={currentVideo.id}
                    src={currentVideo.videos?.medium?.url}
                    className={cx('video')}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                />
                {/* nút lên xuống */}
                <div className={cx('navigation')}>
                    <Tippy
                        placement="left"
                        offset={[0, 12]}
                        content={<FontAwesomeIcon icon={faSquareCaretUp} />}
                        arrow={true}
                    >
                        <button className={cx('arrow', 'up')} onClick={gotoPrev} disabled={currentIndex === 0}>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    </Tippy>
                    <Tippy
                        placement="left"
                        offset={[0, 12]}
                        content={<FontAwesomeIcon icon={faSquareCaretDown} />}
                        arrow={true}
                    >
                        <button
                            className={cx('arrow', 'down')}
                            onClick={gotoNext}
                            disabled={currentIndex === videos.length - 1}
                        >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Tippy>
                </div>

                {/* ===== Nút Nhấp để xem LIVE ===== */}
                {showControls && (
                    <Button className={cx('watch-live-btn')}>
                        <SoundIcon className={cx('sound-icon')} />
                        <span className={cx('live')}>Nhấp để xem LIVE</span>
                        <span className={cx('live-d')}> D</span>
                    </Button>
                )}

                {/* Các phần overlay*/}
                <div className={cx('overlay')}>
                    <div className={cx('live-badge')}>Live</div>
                    <h2 className={cx('title')}>{currentVideo.type}</h2>
                    <div className={cx('meta')}>
                        {currentVideo.user} • {(currentVideo.views || 0).toLocaleString()} lượt xem
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveFeed;

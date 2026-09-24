import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import * as videoService from '~/services/videoService';

import styles from './LiveBanner.module.scss';

const cx = classNames.bind(styles);

function LiveFeed() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.getVideos('gaming');

            setVideos(result);
        };

        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <div key={video.id}>
                    <video src={video.videos.medium.url} controls muted loop width="470" />
                </div>
            ))}
        </div>
    );
}

export default LiveFeed;

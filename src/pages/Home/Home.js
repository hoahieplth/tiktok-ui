import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as videoService from '~/services/videoService';
import styles from './Home.module.scss';
import CategoryTabs from '~/components/CategoryTabs';
import LiveFeed from '~/components/Live';
import LiveSectionItem from '~/components/Live/LiveSectionItem';
import Section from '~/components/Live/Section';
import CategorySectionItem from '~/components/Live/CategorySectionItem';

const cx = classNames.bind(styles);

function Home() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await videoService.getVideos('gaming');

                setVideos(Array.isArray(result) ? result : []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, []);

    if (loading) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('loading')}>Đang tải video...</div>
            </div>
        );
    }
    return (
        <div className={cx('wrapper')}>
            <CategoryTabs />
            <LiveFeed />
            <Section title="Chơi Game">
                <div className={cx('live-grid')}>
                    {videos.slice(2, 8).map((video) => (
                        <LiveSectionItem key={video.id} data={video} />
                    ))}
                </div>
            </Section>
            <Section title="Danh mục đề xuất">
                <div className={cx('categroy-grid')}>
                    {videos.slice(1, 9).map((video) => (
                        <CategorySectionItem key={video.id} data={video} />
                    ))}
                </div>
            </Section>
        </div>
    );
}

export default Home;

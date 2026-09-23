import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import CategoryTabs from '~/components/CategoryTabs';
import LiveBanner from '~/components/LiveBanner';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <CategoryTabs />
            <LiveBanner />
            {/* <LiveSection /> */}
        </div>
    );
}

export default Home;

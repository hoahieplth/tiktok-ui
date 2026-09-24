import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import CategoryTabs from '~/components/CategoryTabs';
import LiveFeed from '~/components/LiveFeed';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <CategoryTabs />
            <LiveFeed />
            {/* <LiveSection /> */}
        </div>
    );
}

export default Home;

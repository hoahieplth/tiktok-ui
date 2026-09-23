import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchService';
import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [users, setUsers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fethApi = async () => {
            const data = await searchServices.search();
            setUsers(data);
        };
        fethApi();
    }, []);
    const displayedUsers = showAll ? users : users.slice(0, 5);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {displayedUsers.map((user) => (
                <AccountItem key={user.id} data={user} />
            ))}
            <p className={cx('more-btn')} onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : 'See All'}
            </p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;

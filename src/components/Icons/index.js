import classNames from 'classnames/bind';
import styles from './Icons.module.scss';
const cx = classNames.bind(styles);
export // Cloud Upload
const UploadIcon = ({ width = '3.4rem', height = '3.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M25.5 15.5C25.5 11.36 22.14 8 18 8C15.12 8 12.62 9.62 11.47 12C11.16 11.96 10.83 11.94 10.5 11.94C6.91 11.94 4 14.85 4 18.44C4 22.03 6.91 24.94 10.5 24.94H24C26.76 24.94 29 22.7 29 19.94C29 17.48 27.22 15.44 24.88 15.03C25.28 15.18 25.5 15.33 25.5 15.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M16 24V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
            d="M12.5 18.5L16 15L19.5 18.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export const ShareIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M4 5L28 8L19 28L14 17L4 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 17L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
export const CommentIcon = ({ width = '3rem', height = '3rem', className, count = 13 }) => (
    <span className={cx('comment-icon')}>
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 7.5C5 6.12 6.12 5 7.5 5H24.5C25.88 5 27 6.12 27 7.5V19.5C27 20.88 25.88 22 24.5 22H13L8 26V22H7.5C6.12 22 5 20.88 5 19.5V7.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path d="M11 11H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {count > 0 && <span className={cx('comment-count')}>{count}</span>}
    </span>
);

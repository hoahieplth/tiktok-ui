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
export const HomeIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M23.05 7.84a1.5 1.5 0 0 1 1.9 0l16.1 13.2a1.5 1.5 0 0 1-.95 2.66h-2.33l-1.2 13.03A2.5 2.5 0 0 1 34.1 39H13.9a2.5 2.5 0 0 1-2.49-2.27L10.23 23.7H7.9a1.5 1.5 0 0 1-.95-2.66l16.1-13.2Zm.95 3.1L12.1 20.7h.87l1.4 15.3h8.13v-7.69a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V36h8.13l1.4-15.3h.87L24 10.94Z"></path>
    </svg>
);
export const HomeActiveIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M24.95 7.84a1.5 1.5 0 0 0-1.9 0l-16.1 13.2a1.5 1.5 0 0 0 .95 2.66h2.33l1.2 13.03A2.5 2.5 0 0 0 13.9 39h7.59a1 1 0 0 0 1-1v-9.68a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V38a1 1 0 0 0 1 1h7.59a2.5 2.5 0 0 0 2.49-2.27l1.19-13.03h2.33a1.5 1.5 0 0 0 .95-2.66l-16.1-13.2Z"></path>
    </svg>
);
export const UserGroupIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.99 3a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4a6 6 0 1 0 0 12.00A6 6 0 0 0 19 7ZM18.99 26c2.96 0 5.6.58 7.87 1.65l-3.07 3.06a15.38 15.38 0 0 0-4.8-.71C10.9 30 6.3 35.16 6 43c-.02.55-.46 1-1.02 1h-2c-.55 0-1-.45-.98-1C2.33 32.99 8.7 26 19 26ZM35.7 41.88 31.82 38H45a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H31.82l3.88-3.88a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.42 0l-7.3 7.3a2 2 0 0 0 0 2.82l7.3 7.3a1 1 0 0 0 1.42 0l1.41-1.42a1 1 0 0 0 0-1.41Z"></path>
    </svg>
);
export const UserGroupActiveIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M19 3a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM19 26C8.06 26 2 33.92 2 40.44 2 44 4 44 11 44h15.51l-3.75-3.76a6 6 0 0 1 0-8.48l4.15-4.15C24.66 26.6 22 26 19 26Z"></path>
        <path d="M35.7 41.88 31.84 38H45a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H31.83l3.88-3.88a1 1 0 0 0 0-1.41l-1.42-1.42a1 1 0 0 0-1.41 0l-7.3 7.3a2 2 0 0 0 0 2.82l7.3 7.3a1 1 0 0 0 1.41 0l1.42-1.42a1 1 0 0 0 0-1.41Z"></path>
    </svg>
);
export const LiveIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={`css-fd7pre-7937d88b--StyledLiveIcon e14mntpd2 ${className || ''}`}
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.78 26.82c-.08.18-.08.41-.08.88v3.9c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-3.9c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54ZM22.5 21.4c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54c.18-.08.41-.08.88-.08.47 0 .7 0 .88.08.25.1.44.3.54.54.08.18.08.41.08.88v10.2c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54c-.08-.18-.08-.41-.08-.88V21.4ZM28.38 24.32c-.08.18-.08.41-.08.88v6.4c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-6.4c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54Z"></path>
        <path d="M16.57 7.49a1 1 0 0 0-.13 1.4l3.62 4.31H15.7c-2.8 0-4.2 0-5.27.55a5 5 0 0 0-2.18 2.18C7.7 17 7.7 18.4 7.7 21.2v10.7c0 2.8 0 4.2.55 5.27a5 5 0 0 0 2.18 2.19c1.07.54 2.47.54 5.27.54h16.6c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19c.54-1.07.54-2.47.54-5.27V21.2c0-2.8 0-4.2-.54-5.27a5 5 0 0 0-2.19-2.18c-1.07-.55-2.47-.55-5.27-.55h-4.42l3.61-4.3a1 1 0 0 0-.12-1.41l-.77-.65a1 1 0 0 0-1.4.13l-5.23 6.22-5.23-6.22a1 1 0 0 0-1.4-.13l-.77.65Zm-.87 8.71h16.6c1.45 0 2.36 0 3.04.06.65.05.83.14.87.16.37.19.68.5.87.87.02.04.1.22.16.87.06.68.06 1.6.06 3.04v10.7c0 1.45 0 2.36-.06 3.04-.05.65-.14.83-.16.87a2 2 0 0 1-.87.87c-.04.02-.22.1-.87.16-.68.06-1.59.06-3.04.06H15.7c-1.45 0-2.36 0-3.04-.06a2.47 2.47 0 0 1-.87-.16 2 2 0 0 1-.87-.87c-.02-.04-.1-.22-.16-.87-.06-.68-.06-1.59-.06-3.04V21.2c0-1.45 0-2.36.06-3.04.05-.65.14-.83.16-.87a2 2 0 0 1 .87-.87c.04-.02.22-.1.87-.16a42.2 42.2 0 0 1 3.04-.06Z"></path>
    </svg>
);
export const LiveActiveIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={`css-fd7pre-7937d88b--StyledLiveIcon e14mntpd2 ${className || ''}`}
        width={width}
        height={height}
        fill="currentColor"
        class="tiktok-xrx4y4 e14mntpd3"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.57 7.49a1 1 0 0 0-.13 1.4l4.04 4.81h-4.53c-2.71 0-4.07 0-5.1.52a4.82 4.82 0 0 0-2.12 2.1c-.53 1.02-.53 2.37-.53 5.05v10.26c0 2.68 0 4.03.53 5.05.46.9 1.2 1.64 2.12 2.1 1.03.52 2.39.52 5.1.52h16.1c2.71 0 4.07 0 5.1-.52a4.82 4.82 0 0 0 2.12-2.1c.53-1.02.53-2.37.53-5.05V21.37c0-2.68 0-4.03-.53-5.05a4.82 4.82 0 0 0-2.12-2.1c-1.03-.52-2.39-.52-5.1-.52h-4.6l4.04-4.8a1 1 0 0 0-.12-1.41l-.77-.65a1 1 0 0 0-1.4.13l-5.23 6.22-5.23-6.22a1 1 0 0 0-1.4-.13l-.77.65ZM15.3 26.65a1 1 0 0 1 .44-.44c.21-.1.49-.1 1.05-.1h.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.44c.11.21.11.5.11 1.05V32c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-.4c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45c-.11-.2-.11-.49-.11-1.05v-4.3c0-.56 0-.84.1-1.05ZM22.2 21c0-.56 0-.84.1-1.05a1 1 0 0 1 .45-.44c.21-.1.49-.1 1.05-.1h.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.44c.11.21.11.5.11 1.05v11c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-.4c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45c-.11-.2-.11-.49-.11-1.05V21Zm7.1 2.65a1 1 0 0 1 .45-.44c.21-.1.49-.1 1.05-.1h.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.44c.11.21.11.5.11 1.05V32c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-.4c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45c-.11-.2-.11-.49-.11-1.05v-7.3c0-.56 0-.84.1-1.05Z"></path>
    </svg>
);

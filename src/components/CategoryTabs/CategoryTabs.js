import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './CategoryTabs.module.scss';
import CategoryItem from './CategoryItem';

const cx = classNames.bind(styles);

function CategoryTabs() {
    const [activeIndex, setActiveIndex] = useState(0);

    const navRef = useRef(null);

    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const categories = [
        {
            title: 'Đề xuất',
            to: config.routes.home,
        },
        {
            title: 'Đang Follow',
            to: config.routes.following,
        },
        {
            title: 'Game',
            to: config.routes.game,
        },
        {
            title: 'Phong cách sống',
            to: config.routes.lifestyle,
        },
        {
            title: 'Garena Free Fire',
            to: config.routes.freefire,
        },
        {
            title: 'Fortnite',
            to: config.routes.fortnite,
        },
        {
            title: 'Minecraft',
            to: config.routes.minecraft,
        },
    ];

    // Kiểm tra nút trái / phải
    const checkArrows = () => {
        const element = navRef.current;
        if (!element) return;

        const { scrollLeft, scrollWidth, clientWidth } = element;

        // Dung sai lớn để chống zoom / sub-pixel
        const tolerance = 10;

        const isAtStart = scrollLeft <= tolerance;
        const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= Math.floor(scrollWidth) - tolerance;

        setShowLeftArrow(!isAtStart);
        setShowRightArrow(!isAtEnd);
    };

    // Scroll trái / phải
    const handleNav = (direction) => {
        const element = navRef.current;

        if (!element) return;

        const scrollAmount = 300;

        element.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const element = navRef.current;
        if (!element) return;

        // Chạy sau khi layout ổn định
        const timer = setTimeout(checkArrows, 150);

        element.addEventListener('scroll', checkArrows);
        window.addEventListener('resize', checkArrows);

        // Bắt cả khi zoom
        const resizeObserver = new ResizeObserver(checkArrows);
        resizeObserver.observe(element);

        return () => {
            clearTimeout(timer);
            element.removeEventListener('scroll', checkArrows);
            window.removeEventListener('resize', checkArrows);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            {/* NÚT TRÁI */}
            {showLeftArrow && (
                <button className={cx('arrow', 'left')} onClick={() => handleNav('left')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}

            {/* DANH SÁCH */}
            <div className={cx('categories')} ref={navRef}>
                {categories.map((category, index) => (
                    <CategoryItem
                        key={category.title}
                        to={category.to}
                        title={category.title}
                        index={index}
                        activeIndex={activeIndex}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

            {/* NÚT PHẢI */}
            {showRightArrow && (
                <button className={cx('arrow', 'right')} onClick={() => handleNav('right')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>
    );
}

export default CategoryTabs;

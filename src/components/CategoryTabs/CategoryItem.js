import PropTypes from 'prop-types';
import Button from '../Button';

function CategoryItem({ index, to, title, onClick, activeIndex }) {
    return (
        <Button categoryTab to={to} active={activeIndex === index} onClick={onClick}>
            {title}
        </Button>
    );
}
CategoryItem.propTypes = {
    index: PropTypes.number.isRequired,
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    activeIndex: PropTypes.number.isRequired,
};
export default CategoryItem;

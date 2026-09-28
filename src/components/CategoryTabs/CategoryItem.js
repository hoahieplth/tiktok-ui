import PropTypes from 'prop-types';
import Button from '../Button';

function CategoryItem({ to, title, onClick, active }) {
    return (
        <Button categoryTab to={to} active={active} onClick={onClick}>
            {title}
        </Button>
    );
}
CategoryItem.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    active: PropTypes.bool,
};
export default CategoryItem;

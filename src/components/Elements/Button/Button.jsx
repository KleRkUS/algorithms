import propTypes from 'prop-types';

import styles from './Button.module.css';

const { button } = styles;

const Button = ({ onClick, label, className }) => (
    <button
        className={`
            ${button}
            ${className ?? ''}
        `}
        onClick={onClick}
    >
        {label}
    </button>
);

Button.defaultProps = {
    className: '',
    label: 'Click me!',
};

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    label: propTypes.string,
    className: propTypes.string,
};

export default Button;
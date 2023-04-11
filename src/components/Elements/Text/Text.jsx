import propTypes from 'prop-types';

import styles from './Text.module.css';

const { textCommon } = styles;

export const Text = ({ type, size, weight, className, children }) => {
    const classNames = `
        ${className}
        ${textCommon}
        ${styles['size-' + type + '-' + size]}
        ${styles['weight-' + weight]}
    `;

    const text =
        type === 'heading' ? <h2 className={classNames}>{children}</h2> : <p className={classNames}>{children}</p>;

    return text;
};

Text.defaultProps = {
    type: 'text',
    size: 'medium',
    weight: 'regular',
    className: '',
};

Text.propTypes = {
    type: propTypes.oneOf(['heading', 'text']),
    size: propTypes.oneOf(['small', 'medium', 'large']),
    weight: propTypes.oneOf(['light', 'regular', 'bold']),
    className: propTypes.string,
    children: propTypes.oneOfType([propTypes.node, propTypes.string]).isRequired,
};

export default Text;
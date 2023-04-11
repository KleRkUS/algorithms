import propTypes from 'prop-types';

import styles from './Flex.module.css';

const { flex } = styles;

const Flex = ({ direction, alignItems, justifyContent, children, className, ...restProps }) => (
    <div
        className={`
            ${flex}
            ${className}
            ${styles[direction]}
            ${styles['align-' + alignItems]}
            ${styles['justify-' + justifyContent]}
        `}
        {...restProps}
    >
        {children}
    </div>
);

Flex.defaultProps = {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    className: '',
};

Flex.propTypes = {
    direction: propTypes.oneOf(['row', 'column']),
    alignItems: propTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
    justifyContent: propTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-around', 'space-between']),
    children: propTypes.node.isRequired,
    className: propTypes.string,
    restProps: propTypes.arrayOf(propTypes.any),
};

export default Flex;

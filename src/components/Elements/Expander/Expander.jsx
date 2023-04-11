import { Flex, Text } from 'components/Elements';
import propTypes from 'prop-types';
import { Fragment, useState } from 'react';

import styles from './Expander.module.css';

const { expanderButton, expanderContainer } = styles;

const Expander = ({ label, items, render }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={expanderContainer}>
            <button className={expanderButton} onClick={toggleOpen}>
                <Text>{label}</Text>
                <Text>{isOpen ? 'Hide' : 'Show'}</Text>
            </button>
            {isOpen && (
                <Flex direction="column" alignItems="stretch">
                    {items.map(({ id, ...rest }) => (
                        <Fragment key={id}>
                            {render({ id, ...rest })}
                        </Fragment>
                    ))}
                </Flex>
            )}
        </div>
    );
};

Expander.propTypes = {
    label: propTypes.string.isRequired,
    items: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string
    })).isRequired,
    render: propTypes.func.isRequired
}

export default Expander;
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import styles from './MenuItem.module.css';

import { Flex, Text } from '../Elements';

const { item } = styles;

const MenuItem = ({ id, type, name, onAddToCompare, isAdded }) => {
    const navigate = useNavigate(); 

    const onRedirect = () => {
        navigate(`/algorithms/${type}/${id}`);
    }

    return(
        <Flex
            alignItems="center"
            justifyContent="space-between"
            onClick={onRedirect}
            className={item}
        >
            <Text>{name}</Text>
            {/* <Flex alignItems="center">
                <label htmlFor={`${name}-checkbox`}>
                    <Text size="small">Compare</Text>
                </label>
                <input id={`${name}-checkbox`} type="checkbox" checked={isAdded} onChange={() => onAddToCompare(name)} />
            </Flex> */}
        </Flex>
    );
};

MenuItem.propTypes = {
    name: propTypes.string.isRequired,
    onAddToCompare: propTypes.func.isRequired,
    isAdded: propTypes.bool.isRequired,
    id: propTypes.string,
    type: propTypes.string
};

export { MenuItem };
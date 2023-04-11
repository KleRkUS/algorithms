import algorithms from 'algorithms';
import { useCallback, useState } from 'react';

import { algorithmTypesReadable } from 'constants/algorithmTypesReadable';

import { Expander } from 'components/Elements';
import { MenuItem } from '../MenuItem';

import styles from "./Aside.module.css";

const { aside } = styles;

const Aside = () => {
    const [itemsToCompare, setItemsToCompare] = useState({
        type: null,
        items: [],
    });

    const checkIfItemAdded = useCallback(
        (type, id) => (type === itemsToCompare.type ? itemsToCompare.items.includes(id) : false),
        [itemsToCompare]
    );

    const addToCompare = useCallback(
        (type, id) => {
            if (type !== itemsToCompare.type) {
                return;
            }

            setItemsToCompare((prevState) =>
                prevState.includes(id) ? prevState.filter((state) => state !== id) : [...prevState, id]
            );
        },
        [itemsToCompare.type]
    );

    return (
        <aside className={aside}>
            {Object.entries(algorithms).map(([key, value]) => (
                <Expander
                    key={key}
                    label={algorithmTypesReadable[key]}
                    items={value}
                    render={({ id, name }) => (
                        <MenuItem
                            name={name}
                            isAdded={checkIfItemAdded(key, id)}
                            onAddToCompare={addToCompare}
                            type={key}
                            id={id}
                        />
                    )}
                />
            ))}
        </aside>
    );
};

export { Aside };

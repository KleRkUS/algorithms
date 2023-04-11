export const getSortAlgorithmsParams = (array) => {
    const name = Symbol('Array');
    const length = Symbol('Array length');

    return {
        [name]: array,
        [length]: array.length,
    };
};

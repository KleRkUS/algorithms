export const sort = (array, n, cb) => {
    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j -= 1;
        }

        array[j + 1] = key;
    }
    cb();
};

const mutableCode = `
    const array = [7, 5, 2, 9, 4, 6, 10, 1, 3, 8];

    const insertionSort = (array) => {
        const n = array.length;

        for (let i = 1; i < n; i++) {
            const key = array[i];
            let j = i - 1;
    
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j -= 1;
            }
    
            array[j + 1] = key;
        }
    };

    insertionSort(array);
    
`;

const immutableCode = `
    const array = [7, 5, 2, 9, 4, 6, 10, 1, 3, 8];

    const insertionSort = (array) => {
        const n = array.length;
        const result = [...array];

        for (let i = 1; i < n; i++) {
            const key = result[i];
            let j = i - 1;
    
            while (j >= 0 && result[j] > key) {
                result[j + 1] = result[j];
                j -= 1;
            }
    
            result[j + 1] = key;
        }
    }

    const sortedArray = insertionSort(array);

`;

export const insertionSort = {
    id: 'insertion-sort',
    name: 'Insertion sort',
    array: [7, 5, 2, 9, 4, 6, 10, 1, 3, 8],
    delay: 200,
    description:
        'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
    function: sort,
    mutableCode,
    immutableCode
};

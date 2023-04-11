const sort = (arr, n, cb) => {
    let i, j;
    let isSwapped = false;

    for (i = 0; i < n; i++) {
        isSwapped = false;

        for (j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }

    cb();
};

export const bubbleSort = {
    name: 'Bubble sort',
    array: [7, 5, 2, 9, 4, 6, 10, 1, 3, 8],
    delay: 200,
    description:
        'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. These passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has become fully sorted. The algorithm, which is a comparison sort, is named for the way the larger elements "bubble" up to the top of the list.',
    function: sort,
};

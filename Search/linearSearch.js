// loop through the array and check if the current
// array element is equal to the value

function linearSearch(arr, val) {
    if (arr.includes(val)) {
        return arr[arr.indexOf(val)];
    } else {
        return -1;
    }
}

// naive way

function linearSearchNaive(arr, val) {
    let operations = 0;
    for (const element of arr) {
        operations++;
        if (element === val) {
            console.log('Success ! Number of operations are: ' + operations);
            return element;
        }
    }
    console.log('Unsuccess ! Number of operations are: ' + operations);
    return -1;
}

// console.log('Positiva: ' + linearSearch([1, 2, 3, 4, 5, 6], 3));
// console.log('Negativa: ' + linearSearch([1, 2, 3, 4, 5, 6], 10));

console.log('Naive Positiva: ' + linearSearchNaive([1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 18, 22, 25, 27], 18));
console.log('Naive Negativa: ' + linearSearchNaive([1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 18, 22, 25, 27], 10));
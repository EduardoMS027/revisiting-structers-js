// Compare two strings with the inner loop.
function stringSearchNaive(arrA, arrB) {
    let bigger, smaller;
    let count = 0;
    if (arrA.length >= arrB.length) {
        bigger = arrA;
        smaller = arrB;
    } else {
        bigger = arrB;
        smaller = arrA;
    }
    for (let i = 0; i < bigger.length; i++) {
        for (let j = 0; j < smaller.length; j++) {
            console.log(smaller[i], bigger[i + j]);
            if (smaller[j] !== bigger[i + j]) {
                /*                 console.log('smaller[j]:' + smaller[j]);
                                console.log('bigger[i + j]:' + bigger[i + j]);
                                console.log('---------------------------------'); */
                console.log('BREAK !');
                break;
            }
            if (j === (smaller.length - 1)) {
                console.log('FOUND ONE !');
                count++;
            }
        }
    }
    return count;
}

stringSearchNaive('water', 'watermelon');
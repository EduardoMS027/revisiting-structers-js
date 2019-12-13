// parameter an array and a value
// array is sorted (only working with number)
// two pointer. One will start at the begnning and
// the another one will start at the end of the array.
// left pointer is always smaller than the right pointer
// to get the middle, do a average through the two pointers.

// loop and veify, if the value is smaller or greater
//then you move the pointers.
//  return the index or -1, if never find



function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length;
    let average = 0;
    let count = arr.length;
    let operations = 0;
    while (left <= right) {
        operations++;
        average = parseInt((left + right) / 2);

        if (val > arr[average]) {
            left = average;
        }
        if (val < arr[average]) {
            right = average
        }
        if (val === arr[average]) {
            console.log('Success ! Number of operations are: ' + operations);
            return average;
        }
        if (count === 0 || (right - left) === 1) {
            break;
        }
        count--;
    }
    console.log('Unsuccess ! Number of operations are: ' + operations);
    return -1;

}

console.log('Encntrou na posição: ' + binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 18, 22, 25, 27], 18));
console.log('Não encontrou ! ' + binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 18, 22, 25, 27], 10));


// course code

function binarySearchCourse(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    /*     if(arr[middle] === elem)    {
            return middle;
        }   else    {
            return -1;
        } */
    //same condition of above.
    return arr[middle] === elem ? middle : -1;
}